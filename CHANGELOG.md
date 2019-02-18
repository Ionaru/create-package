# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2019-02-18
### BREAKING CHANGES
- Package is now built targeting ES6

### Added
- CONTRIBUTING.md file locally and in template
- Trailing newline to .npmrc
- Spaces between keys and values in .editorconfig
- "Description" and "Usage" to README template

### Fixed
- Indenting in tsconfig.json template
- Badge link to package in README

### Changed
- Rewrote render code into reusable function
- Remove comments in dist files
- Build for es6

## [1.2.0] - 2019-02-01
### Added
- More information in README
- Repository field to package.json

### Updated
- Typescript to 3.3.1

## [1.1.1] - 2019-02-01
### Added
- Missing changelog entries
- `--follow-tags` flag in workflow

## [1.1.0] - 2019-02-01
### Added
- Travis config file locally and in template
- CHANGELOG.md file to keep a changelog locally and in template

## [1.0.2] - 2019-01-31
### Added
- .npmrc file to disable version prefix locally and in template
- `prepare` script will build project
- Workflow description to README
- `prepare` and `preversion` scripts to package.json locally and in template

### Changed
- Disabled local project error when running `npm run test`

## [1.0.1] - 2019-01-30
### Fixed
- Included the templates folder in the NPM package

## [1.0.0] - 2019-01-30
### Added
- Templates for common project files
- Script that deploys the templates into a project folder
- Setup for this project

[Unreleased]: https://github.com/Ionaru/create-package/compare/2.0.0...HEAD
[2.0.0]: https://github.com/Ionaru/create-package/compare/1.2.0...2.0.0
[1.2.0]: https://github.com/Ionaru/create-package/compare/1.1.1...1.2.0
[1.1.1]: https://github.com/Ionaru/create-package/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/Ionaru/create-package/compare/1.0.2...1.1.0
[1.0.2]: https://github.com/Ionaru/create-package/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/Ionaru/create-package/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/Ionaru/create-package/compare/8a86e89...1.0.0
