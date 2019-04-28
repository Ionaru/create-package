# @ionaru/create-package

[![npm version](https://img.shields.io/npm/v/@ionaru/create-package.svg?style=for-the-badge)](https://www.npmjs.com/package/@ionaru/create-package)
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
cd <package-name>
git remote add origin https://github.com/Ionaru/<package-name>.git
git push -u origin master
```

### Work
```bash
// Add code & update changelog
git add .
git commit -m "Work was done"
git push
```

### Release
```bash
// Update changelog
git add CHANGELOG.md
git commit -m "Updated changelog for <version>"
npm version <release-type>
git push --follow-tags
```
