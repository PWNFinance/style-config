# style-config

Shared ESLint, StyleLint and Prettier configuration for PWN TypeScript projects.

### How to set this up in a project

1. Install this package. (e.g. `yarn add @PWNFinance/style-config`)
2. Make sure you have peer dependencies installed as some package managers don't install them automatically. ( `yarn add eslint`)
3. In this package there're configs for ESLint, Prettier and Stylelint. You can use all of them, but it's not required. For example if your project doesn't have any css there's no point in setting up Stylelint.

* Note that the default configs are for production. If you want to get developer errors you must set an enviroment variable `NODE_ENV=development`. In the 

##### Prettier

Create a `prettier.config.js` file in root directory of your project and copy this code snippet into it:

```
module.exports = require("@PWNFinance/style-config/prettier.config")
```

##### ESLint

Create a `.eslintrc.js` file in root directory of your project and copy this code snippet into it:

```
module.exports = require("@PWNFinance/style-config/eslint-config-pwn")
```

##### Stylelint

Create a `stylelint.config.js` file in root directory of your project and copy this code snippet into it:

```
module.exports = require("@PWNFinance/style-config/stylelint.config")
```
