import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { importX } from 'eslint-plugin-import-x';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  plugins: { js, '@stylistic': stylistic },

  extends: [
    js.configs.recommended,
    stylistic.configs.customize({ semi: true, arrowParens: true, braceStyle: '1tbs' }),
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
  ],

  linterOptions: {
    reportUnusedDisableDirectives: 'error',
    reportUnusedInlineConfigs: 'error',
  },

  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want.'
          + ' Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    '@stylistic/max-len': ['error', { code: 120 }],
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
    '@stylistic/array-bracket-newline': ['error', { multiline: true }],
    '@stylistic/array-element-newline': ['error', { consistent: true, multiline: true }],
    '@stylistic/object-curly-newline': [
      'error',
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        TSTypeLiteral: { consistent: true, multiline: true },
        TSInterfaceBody: { consistent: true, multiline: true },
        TSEnumBody: { consistent: true, multiline: true, minProperties: 1 },
        ImportDeclaration: { consistent: true, multiline: true },
        ExportDeclaration: { consistent: true, multiline: true },
      },
    ],
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    '@stylistic/padded-blocks': ['error', 'never'],

    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',

    'import-x/prefer-default-export': 'off',
    'import-x/no-default-export': 'warn',
    'import-x/no-named-export': 'off',
    'import-x/order': [
      'error',
      {
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'groups': [
          'type',
          'builtin',
          'external',
          ['parent', 'sibling'],
        ],
      },
    ],
    'import-x/newline-after-import': 'error',
  },
});
