#!/usr/bin/env node

import * as fs from 'fs';
import * as Mustache from 'mustache';
import * as path from 'path';

(function main() {

    const packageName = process.argv[2];

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

    const templateDirectory = path.join(__dirname, '..', 'templates');

    // Create editorconfig
    const editorConfigTemplate = fs.readFileSync(path.join(templateDirectory, '.editorconfig.mustache')).toString();
    // No rendering needed
    fs.writeFileSync(path.join(packageName, '.editorconfig'), editorConfigTemplate);

    // Create code-style-settings file
    const codeStyleSettingsTemplate = fs.readFileSync(path.join(templateDirectory, 'code-style-settings.xml.mustache')).toString();
    const codeStyleSettingsRendered = Mustache.render(codeStyleSettingsTemplate, {packageName});
    fs.writeFileSync(path.join(packageName, 'code-style-settings.xml'), codeStyleSettingsRendered);

    // Create .npmrc
    const npmrcTemplate = fs.readFileSync(path.join(templateDirectory, '.npmrc.mustache')).toString();
    // No rendering needed
    fs.writeFileSync(path.join(packageName, '.npmrc'), npmrcTemplate);

    // Create tsconfig
    const tsConfigTemplate = fs.readFileSync(path.join(templateDirectory, 'tsconfig.json.mustache')).toString();
    // No rendering needed
    fs.writeFileSync(path.join(packageName, 'tsconfig.json'), tsConfigTemplate);

    // Create tslint
    const tsLintTemplate = fs.readFileSync(path.join(templateDirectory, 'tslint.json.mustache')).toString();
    // No rendering needed
    fs.writeFileSync(path.join(packageName, 'tslint.json'), tsLintTemplate);

    // create gitignore
    const gitIgnoreTemplate = fs.readFileSync(path.join(templateDirectory, '.gitignore.mustache')).toString();
    // No rendering needed
    fs.writeFileSync(path.join(packageName, '.gitignore'), gitIgnoreTemplate);

    // Create package.json
    const packageJsonTemplate = fs.readFileSync(path.join(templateDirectory, 'package.json.mustache')).toString();
    const packageJsonRendered = Mustache.render(packageJsonTemplate, {packageName});
    fs.writeFileSync(path.join(packageName, 'package.json'), packageJsonRendered);

    // Create license
    const licenseTemplate = fs.readFileSync(path.join(templateDirectory, 'LICENSE.mustache')).toString();
    // No rendering needed
    fs.writeFileSync(path.join(packageName, 'LICENSE'), licenseTemplate);

    // Create README
    const readmeTemplate = fs.readFileSync(path.join(templateDirectory, 'README.md.mustache')).toString();
    const readmeRendered = Mustache.render(readmeTemplate, {packageName});
    fs.writeFileSync(path.join(packageName, 'README.md'), readmeRendered);

    // Create CHANGELOG
    const changelogTemplate = fs.readFileSync(path.join(templateDirectory, 'CHANGELOG.md.mustache')).toString();
    const changelogRendered = Mustache.render(changelogTemplate, {packageName});
    fs.writeFileSync(path.join(packageName, 'CHANGELOG.md'), changelogRendered);

    fs.mkdirSync(path.join(packageName, 'src'));
    fs.mkdirSync(path.join(packageName, 'dist'));

    fs.writeFileSync(path.join(packageName, 'src', 'index.ts'), '');

})();
