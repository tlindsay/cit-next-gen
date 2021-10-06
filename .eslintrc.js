'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['ember'],
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'plugin:prettier/recommended'],

  env: {
    browser: true,
  },

  rules: {
    // "none" is used because the alternate-this field can't be blank. This will flag 'let that = this' as a linter error
    'consistent-this': [2, 'none', 'vm'],
    'no-mixed-spaces-and-tabs': 'off',
    'no-var': 'error',
    'no-debugger': 'error',
    'ember/closure-actions': 'off',
    'ember/no-observers': 'off',
    'ember/avoid-leaking-state-in-ember-objects': 'off',
    'ember/jquery-ember-run': 'off',
    'ember/no-jquery': 'off',
    'ember/require-return-from-computed': 'off',
    'ember/no-arrow-function-computed-properties': 'off',
    'ember/no-new-mixins': 'off',
    'ember/no-incorrect-calls-with-inline-anonymous-functions': 'off',
    'ember/no-deeply-nested-dependent-keys-with-each': 'off',
    'ember/no-unnecessary-route-path-option': 'off',
    'no-import-assign': 'off',
    'ember/require-computed-macros': 'off',
    'ember/no-get': 'off',
    'ember/no-mixins': 'off',
    'ember/use-brace-expansion': 'off',
    'ember/no-classic-classes': 'off',
    'ember/no-classic-components': 'off',
    'ember/no-component-lifecycle-hooks': 'off',
    'ember/no-actions-hash': 'off',
    'ember/no-private-routing-service': 'off',
    'ember/no-controller-access-in-routes': 'off',
    'ember/require-tagless-components': 'off',
  },

  globals: {
    Pusher: true,
    moment: true,
    bootbox: true,
    google: true,
    Hashids: true,
    L: true,
    _: true,
  },

  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.prettierrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};
