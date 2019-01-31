# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
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

[Unreleased]: https://github.com/Ionaru/create-package/compare/1.0.2...HEAD
[1.0.2]: https://github.com/Ionaru/create-package/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/Ionaru/create-package/compare/1.0.0...1.0.1
