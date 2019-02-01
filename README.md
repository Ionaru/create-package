# @ionaru/create-package

[![npm version](https://img.shields.io/npm/v/@ionaru/create-package.svg?style=for-the-badge)](https://www.npmjs.com/@ionaru/create-package/easymde)
[![npm version](https://img.shields.io/npm/v/@ionaru/create-package/next.svg?style=for-the-badge)](https://www.npmjs.com/package/@ionaru/create-package/v/next)
[![Build Status](https://img.shields.io/travis/Ionaru/create-package/master.svg?style=for-the-badge)](https://travis-ci.org/Ionaru/create-package)

## Description
The purpose of this package is to generate a ready-to-use project for developing NPM packages.

**Warning**: this package is heavily opinionated and contains multiple hardcoded names and links.

## Usage
```
npx @ionaru/create-package <package-name>
```

## Workflow
### Setup
```bash
npx @ionaru/create-package <package-name>
git init
git remote add origin https://github.com/Ionaru/<package-name>.git
npm i
```

### Work
```bash
// Add code & edit changelog
git add .
git commit -m "Work was done"
git push
```

### Release
```bash
npm version <release-type>
git push --follow-tags
```
