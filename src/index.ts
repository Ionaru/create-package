#!/usr/bin/env node

import * as fs from 'fs';
import * as Mustache from 'mustache';
import * as path from 'path';

(function main() {

    interface ITemplateVariables {
        [index: string]: string;
    }

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

    const variables: ITemplateVariables = {packageName};

    const templateDirectory = path.join(__dirname, '..', 'templates');

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
