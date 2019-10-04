# Changelog
All notable changes to the create-package project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- "clean" script to package.json template.

### Changed
- tsconfig.json template to only build the index.ts file, everything else should be discovered through imports.

## [4.1.2] - 2019-09-26
### Fixed
- @types/node latest version lookup.

## [4.1.1] - 2019-06-12
### Fixed
- Security vulnerabilities.

## [4.1.0] - 2019-05-10
### Changed
- Initial commit hash will be automatically filled in in CHANGELOG.

## [4.0.0] - 2019-04-28
### BREAKING CHANGES
- Initial git commits and package install will now be done automatically.

## [3.0.0] - 2019-04-24
### BREAKING CHANGES
- Removed Node.js 6 support.

### Added
- Node.js 12 support for this package and in the template.

### Changed
- Set tsconfig option `removeComments` to `false`, locally and in template.

### Removed
- `bin` field from package.json template.

## [2.4.0] - 2019-04-04
### Added
- Latest package version numbers in package.json will be automatically fetched.
- Debug package and debug statements.

## [2.3.0] - 2019-03-27
### Added
- More initial setup explanation in README.md.
- Name of project to CHANGELOG.md locally and in template.

### Changed
- Package version is now `0.0.0` initially.
- Split up lint scripts for src and spec files.

## [2.2.0] - 2019-03-14
### Added
- Extra workflow explanation to README.
- SonarTS through tslint for their amazing code-quality rules locally and in template.
- `pretest` script that runs lint script in package.json locally and in template.

### Changed
- Ordering of scripts in package.json locally and in template.

### Removed
- `script` section in .travis.yml locally and in template.

## [2.1.1] - 2019-03-01
### Added
- Indenting to .travis.yml template.

## [2.1.0] - 2019-02-22
### Added
- Support for package scopes.

### Fixed
- License link in CONTRIBUTING.md.

## [2.0.0] - 2019-02-18
### BREAKING CHANGES
- Package is now built targeting ES6.

### Added
- CONTRIBUTING.md file locally and in template.
- Trailing newline to .npmrc.
- Spaces between keys and values in .editorconfig.
- "Description" and "Usage" to README template.

### Fixed
- Indenting in tsconfig.json template.
- Badge link to package in README.

### Changed
- Rewrote render code into reusable function.
- Remove comments in dist files.
- Build for ES6.

## [1.2.0] - 2019-02-01
### Added
- More information in README.
- Repository field to package.json.

### Updated
- Typescript to 3.3.1.

## [1.1.1] - 2019-02-01
### Added
- Missing changelog entries.
- `--follow-tags` flag in workflow.

## [1.1.0] - 2019-02-01
### Added
- Travis config file locally and in template.
- CHANGELOG.md file to keep a changelog locally and in template.

## [1.0.2] - 2019-01-31
### Added
- .npmrc file to disable version prefix locally and in template.
- `prepare` script will build project.
- Workflow description to README.
- `prepare` and `preversion` scripts to package.json locally and in template.

### Changed
- Disabled local project error when running `npm run test`.

## [1.0.1] - 2019-01-30
### Fixed
- Included the templates folder in the NPM package.

## [1.0.0] - 2019-01-30
### Added
- Templates for common project files.
- Script that deploys the templates into a project folder.
- Setup for this project.

[Unreleased]: https://github.com/Ionaru/create-package/compare/4.1.2...HEAD
[4.1.2]: https://github.com/Ionaru/create-package/compare/4.1.1...4.1.2
[4.1.1]: https://github.com/Ionaru/create-package/compare/4.1.0...4.1.1
[4.1.0]: https://github.com/Ionaru/create-package/compare/4.0.0...4.1.0
[4.0.0]: https://github.com/Ionaru/create-package/compare/3.0.0...4.0.0
[3.0.0]: https://github.com/Ionaru/create-package/compare/2.4.0...3.0.0
[2.4.0]: https://github.com/Ionaru/create-package/compare/2.3.0...2.4.0
[2.3.0]: https://github.com/Ionaru/create-package/compare/2.2.0...2.3.0
[2.2.0]: https://github.com/Ionaru/create-package/compare/2.1.1...2.2.0
[2.1.1]: https://github.com/Ionaru/create-package/compare/2.1.0...2.1.1
[2.1.0]: https://github.com/Ionaru/create-package/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/Ionaru/create-package/compare/1.2.0...2.0.0
[1.2.0]: https://github.com/Ionaru/create-package/compare/1.1.1...1.2.0
[1.1.1]: https://github.com/Ionaru/create-package/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/Ionaru/create-package/compare/1.0.2...1.1.0
[1.0.2]: https://github.com/Ionaru/create-package/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/Ionaru/create-package/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/Ionaru/create-package/compare/8a86e89...1.0.0
