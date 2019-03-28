#!/usr/bin/env node

import axios from 'axios';
import * as fs from 'fs';
import * as Mustache from 'mustache';
import * as path from 'path';

(async function main() {

    interface ITemplateVariables {
        [index: string]: string;
    }

    let packageScope = '';
    let packageName = process.argv[2];

    const scopeMatchRegex = new RegExp(/@(.+?)\//);
    const privatePackageMatch = packageName.match(scopeMatchRegex);
    if (privatePackageMatch) {
        packageScope = privatePackageMatch[0];
        packageName = packageName.replace(scopeMatchRegex, '');
    }

    if (!packageName) {
        console.error('A package name is required!');
        process.exit(1);
    }

    if (process.argv.length > 3) {
        console.error('Only a single argument (package name) is allowed!');
        process.exit(1);
    }

    if (fs.existsSync(packageName)) {
        console.error('Directory already exists, cannot create package!');
        process.exit(1);
    }

    fs.mkdirSync(packageName);

    const latestTypesNodeVersion = await getLatestPackageVersion('@types/node');
    const latestTsLintVersion = await getLatestPackageVersion('tslint');
    const latestTsLintSonartsVersion = await getLatestPackageVersion('tslint-sonarts');
    const latestTypescriptVersion = await getLatestPackageVersion('typescript');

    // noinspection JSUnusedGlobalSymbols
    const variables: ITemplateVariables = {
        latestTsLintSonartsVersion,
        latestTsLintVersion,
        latestTypesNodeVersion,
        latestTypescriptVersion,
        packageName,
        packageScope,
    };

    const templateDirectory = path.join(__dirname, '..', 'templates');

    async function getLatestPackageVersion(name: string): Promise<string> {
        const versionToGet = name.startsWith('@') ? '*' : 'latest';
        const response = await axios.get(`https://registry.npmjs.org/${ encodeURIComponent(name) }/${versionToGet}`);
        const packageInfo = response.data;
        return packageInfo.version;
    }

    // The main render function.
    function renderTemplate(templateName: string): void {
        const template = fs.readFileSync(path.join(templateDirectory, templateName)).toString();
        const rendered = Mustache.render(template, variables);
        const fileName = templateName.replace('.mustache', '');
        fs.writeFileSync(path.join(variables.packageName, fileName), rendered);
    }

    // Render all the templates in the template folder.
    const templates = fs.readdirSync(templateDirectory);
    for (const template of templates) {
        renderTemplate(template);
    }

    // Create standard folders.
    fs.mkdirSync(path.join(packageName, 'src'));
    fs.mkdirSync(path.join(packageName, 'dist'));

    fs.writeFileSync(path.join(packageName, 'src', 'index.ts'), '');

})();
