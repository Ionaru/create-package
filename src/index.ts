#!/usr/bin/env node

import axios from 'axios';
import * as childProcess from 'child_process';
import Debug from 'debug';
import * as fs from 'fs';
import * as Mustache from 'mustache';
import * as path from 'path';
import * as simpleGit from 'simple-git/promise';

(async () => {

    const debug = Debug('create-package');

    interface ITemplateVariables {
        [index: string]: string;
    }

    let packageScope = '';
    let packageName = process.argv[2];

    debug(`Got package name argument: ${packageName}`);

    const scopeMatchRegex = new RegExp(/@(.+?)\//);
    const privatePackageMatch = packageName.match(scopeMatchRegex);
    if (privatePackageMatch) {
        packageScope = privatePackageMatch[0];
        packageName = packageName.replace(scopeMatchRegex, '');
    }

    debug(`Package scope: ${packageScope}`);
    debug(`Package name: ${packageName}`);

    if (!packageName) {
        console.error('A package name is required!');
        process.exit(1);
    }

    if (process.argv.length > 3) {
        console.error('Only a single argument (package name) is allowed!');
        process.exit(1);
    }

    debug(`Attempting to create folder: ${packageName}`);

    if (fs.existsSync(packageName)) {
        console.error('Directory already exists, cannot create package!');
        process.exit(1);
    }

    fs.mkdirSync(packageName);

    debug(`Folder "${packageName}" created.`);

    debug(`Initializing git repository.`);
    const git = simpleGit(packageName);
    await git.init();

    debug(`Doing initial commit.`);
    const initialCommit = await git.commit('Initial commit', [], {'--allow-empty': true});
    const shortInitialCommitHash = initialCommit.commit.split(' ')[1];

    const packagesToInstall = ['@types/node', 'tslint', 'tslint-sonarts', 'typescript'];

    const [latestTypesNodeVersion, latestTsLintVersion, latestTsLintSonartsVersion, latestTypescriptVersion] =
        await Promise.all(packagesToInstall.map(getLatestPackageVersion));

    const year = new Date().getFullYear().toString();

    // noinspection JSUnusedGlobalSymbols
    const variables: ITemplateVariables = {
        latestTsLintSonartsVersion,
        latestTsLintVersion,
        latestTypesNodeVersion,
        latestTypescriptVersion,
        packageName,
        packageScope,
        shortInitialCommitHash,
        year,
    };

    const templateDirectory = path.join(__dirname, '..', 'templates');

    async function getLatestPackageVersion(name: string): Promise<string> {
        debug(`Getting latest version number for package: ${name}`);

        if (name === '@types/node') {
            // special case

            const url = `https://registry.npmjs.org/${encodeURIComponent(name)}`;
            debug(`GET: ${url}`);

            const response = await axios.get(url);
            const packageInfo = response.data;

            const latestVersion = packageInfo['dist-tags'].latest;
            debug(`Latest version number for package ${name}: ${latestVersion}`);
            return latestVersion;

        } else {
            const url = `https://registry.npmjs.org/${encodeURIComponent(name)}/latest`;
            debug(`GET: ${url}`);

            const response = await axios.get(url);
            const packageInfo = response.data;

            debug(`Latest version number for package ${name}: ${packageInfo.version}`);
            return packageInfo.version;
        }
    }

    // The main render function.
    function renderTemplate(templateName: string): void {
        const template = fs.readFileSync(path.join(templateDirectory, templateName)).toString();
        debug(`${templateName}: Template contents read.`);

        const rendered = Mustache.render(template, variables);
        debug(`${templateName}: Template rendered.`);

        const fileName = templateName.replace('.mustache', '');
        const writePath = path.join(variables.packageName, fileName);
        debug(`${templateName}: Writing rendered template to ${writePath}.`);
        fs.writeFileSync(writePath, rendered);
    }

    // Render all the templates in the template folder.
    debug(`Reading template directory: ${templateDirectory}`);
    const templates = fs.readdirSync(templateDirectory);
    debug(`Templates directory read, starting render for ${templates.length} templates.`);
    for (const template of templates) {
        renderTemplate(template);
    }

    // Create standard folders.
    debug(`Creating "dist" folder.`);
    fs.mkdirSync(path.join(packageName, 'src'));

    const indexTsPath = path.join(packageName, 'src', 'index.ts');
    debug(`Writing empty "index.ts" file to ${indexTsPath}`);
    fs.writeFileSync(path.join(packageName, 'src', 'index.ts'), '');

    debug(`Creating "dist" folder.`);
    fs.mkdirSync(path.join(packageName, 'dist'));

    debug(`Installing packages.`);
    childProcess.execSync(`npm install --silent`, {cwd: packageName});

    debug(`Doing project setup commit.`);

    await git.add('.');
    await git.commit('Project setup');

})();
