# @ionaru/create-package

## Usage
```
npx @ionaru/create-package <package-name>
```

## Workflow
```bash
npx @ionaru/create-package <package-name>
git init
git remote add origin https://github.com/Ionaru/<package-name>.git
npm i
// work
git add .
git commit -m "Work was done"
npm version <type> -m "Bump version to %s"
git push --follow-tags
npm publish --access=public
```
