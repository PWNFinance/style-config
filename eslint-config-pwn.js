const severity = () => (process.env.NODE_ENV === "development" ? "warn" : "error")

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
    ecmaFeatures: {
      jsx: false,
    },
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  extends: [
    "standard",
    "plugin:vue/base",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["import", "@typescript-eslint", "prettier", "no-relative-import-paths", "vue-a11y"],
  rules: {
    "import/extensions": [severity(), { vue: "always" }],
    "no-console": severity(),
    "no-debugger": severity(),
    "no-unused-vars": "off",
    quotes: [severity(), "single"],
    "@typescript-eslint/no-unused-vars": [severity(), { args: "none" }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [severity(), { enums: false, typedefs: false }],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": [severity()],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": [severity()],
    "@typescript-eslint/no-empty-function": [severity()],
    "no-undef": severity(),
    "comma-dangle": [severity(), "always-multiline"],
    indent: [severity(), 2],
    "padded-blocks": severity(),
    "space-before-function-paren": "off",
    "no-trailing-spaces": severity(),
    "no-multiple-empty-lines": severity(),
    "no-empty": severity(),
    "object-curly-spacing": severity(),
    "no-useless-return": severity(),
    // ongoing feature for prefix. After this feature will be merged, then with format document this will add prefix instead of "src" https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths/issues/12
    "no-relative-import-paths/no-relative-import-paths": "warn",
    "vue/multi-word-component-names": "off",
    "vue/valid-v-for": severity(),
    "vue/no-use-v-if-with-v-for": severity(),
    "vue/no-unused-vars": severity(),
    "vue/html-indent": [
      severity(),
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
      },
    ],
    "vue/mustache-interpolation-spacing": [severity(), "always"],
    "vue/no-unused-components": [
      severity(),
      {
        ignoreWhenBindingPresent: false,
      },
    ],
    "vue/html-closing-bracket-newline": [
      severity(),
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/html-closing-bracket-spacing": [
      severity(),
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "never",
      },
    ],
    "vue/max-attributes-per-line": [
      severity(),
      {
        singleline: 1,
        multiline: 1,
      },
    ],
    "vue/require-v-for-key": severity(),
    "vue/no-v-html": 0,
    "vue/require-default-prop": 0,
    "vue/padding-line-between-blocks": severity(),
    semi: [severity(), "never"],
    camelcase: [
      severity(),
      {
        properties: "never",
      },
    ],
    "vue-a11y/alt-text": [
      2,
      {
        elements: ["img"],
        img: ["img"],
      },
    ],
  },
  overrides: [
    {
      // we do not need to have exact types on composable functions starting with "use"
      files: ["use*.ts"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["*.js"],
      extends: ["standard", "eslint:recommended"],
    },
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".vue"],
      },
    },
  },
}
