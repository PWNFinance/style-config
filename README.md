# style-config

Shared ESLint, StyleLint and Prettier configuration for PWN TypeScript projects.

### How to set this up in a project

1. Install this package. (e.g. `yarn add @PWNFinance/style-config`)
2. Make sure you have peer dependencies installed as some package managers don't install them automatically. (`yarn add eslint`)
3. In this package there're configs for ESLint, Prettier and Stylelint. You can use all of them, but it's not required. For example if your project doesn't have any css there's no point in setting up Stylelint.

- Note that the default configs are for production. If you want to get developer errors you must set an enviroment variable `NODE_ENV=development`. Development mode won't give you errors for things like `console.log` and similar, you will only get warnings for such things.

##### Prettier

Create a `prettier.config.js` file in root directory of your project and copy this code snippet into it:

```
module.exports = {
  extends: './node_modules/@pwnfinance/style-config/prettier.config',
}
```

##### ESLint

Create a `.eslintrc.js` file in root directory of your project and copy this code snippet into it:

```
module.exports = {
  extends: './node_modules/@pwnfinance/style-config/eslint-config-pwn',
}
```

##### Stylelint

Create a `stylelint.config.js` file in root directory of your project and copy this code snippet into it:

```
module.exports = {
  extends: './node_modules/@pwnfinance/style-config/stylelint.config',
}
```

### How to make changes

If you need to make any changes to the repo, create a new branch with your changes and submit a PR. Please consult this with other members of the dev team as your changes might brake other projects. If not emergency, do not merge without approval. Before making changes to this repo consider overriding the configs locally in your specific project.

The new version should be available from the NPM registry shortly after merging to the main branch (GitHub Actions will publish your changes automatically).
