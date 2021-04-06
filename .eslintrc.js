module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    env: {
        'es6': true,
        'node': true,
        'jest/globals': true
    },
    plugins: [
        '@typescript-eslint',
        'filenames',
        'import',
        'jest',
        'jest-formatting',
        'promise'
    ],
    extends: [
        'eslint:all',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jest/all',
        'plugin:jest-formatting/strict',
        'plugin:promise/recommended'
    ],
    rules: {
        // http://eslint.org/docs/rules/
        'array-bracket-newline': ['error', 'consistent'],
        'array-element-newline': 'off',
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'callback-return': ['error', ['callback', 'cb', 'done']],
        'class-methods-use-this': 'off',
        'consistent-return': 'off',
        'capitalized-comments': 'off',
        'default-case': 'off',
        'dot-location': ['error', 'property'],
        'eol-last': ['error', 'always'],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': 'off',
        'id-length': 'off',
        'implicit-arrow-linebreak': 'off',
        'indent': ['error', 4, { SwitchCase: 1 }],
        'init-declarations': 'off',
        'line-comment-position': 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'max-len': ['error', { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true }],
        'max-lines': ['error', 330],
        'max-lines-per-function': 'off',
        'max-params': ['error', { max: 5 }],
        'max-statements': 'off',
        'multiline-comment-style': 'off',
        'multiline-ternary': ['error', 'always-multiline'],
        'new-cap': ['error', { capIsNew: false }],
        'newline-after-var': ['error', 'always'],
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
        'no-await-in-loop': 'error',
        'no-confusing-arrow': 'off',
        'no-console': 'off',
        'no-extra-parens': 'off',
        'no-inline-comments': 'off',
        'no-invalid-this': 'off',
        'no-magic-numbers': 'off',
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
        'no-plusplus': 'off',
        'no-process-env': 'off',
        'no-prototype-builtins': 'error',
        'no-shadow': 'off',
        'no-sync': 'off',
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-undefined': 'off',
        'no-unused-expressions': ['error', { allowTernary: true }],
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-warning-comments': 'off',
        'object-curly-newline': ['error', {
            ObjectExpression: { multiline: true, consistent: true },
            ObjectPattern: { multiline: true, consistent: true },
            ImportDeclaration: { multiline: true },
            ExportDeclaration: { multiline: true, consistent: true, minProperties: 2 }
        }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'off',
        'one-var': ['error', { uninitialized: 'always', initialized: 'never' }],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: '*', next: 'return' }
        ],
        'prefer-named-capture-group': 'off',
        'require-atomic-updates': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', { avoidEscape: true }],
        'require-jsdoc': 'off',
        'require-unicode-regexp': 'off',
        'semi': ['error', 'never'],
        'sort-imports': 'off',
        'sort-keys': 'off',
        'strict': 'off',

        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
        '@typescript-eslint/explicit-function-return-type': ['error', { allowTypedFunctionExpressions: true }],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase']
            },
            {
                selector: 'variable',
                modifiers: ['const'],
                format: ['camelCase', 'UPPER_CASE', 'PascalCase']
            },
            {
                selector: 'variable',
                modifiers: ['unused'],
                leadingUnderscore: 'require',
                format: ['camelCase']
            },
            {
                selector: 'property',
                format: ['camelCase', 'UPPER_CASE']
            },
            {
                selector: 'parameter',
                modifiers: ['unused'],
                leadingUnderscore: 'require',
                format: ['camelCase']
            },
            {
                selector: 'typeLike',
                format: ['PascalCase']
            },
            {
                selector: 'enumMember',
                format: ['UPPER_CASE']
            }
        ],
        '@typescript-eslint/no-extra-parens': ['error', 'all', { ignoreJSX: 'all', returnAssign: false, nestedBinaryExpressions: false }],
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true, varsIgnorePattern: '^_+$' }],
        '@typescript-eslint/no-use-before-define': 'error',

        // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
        'import/default': 'error',
        'import/export': 'error',
        'import/exports-last': 'off',
        'import/extensions': ['error', 'never', { json: 'always', scss: 'always' }],
        'import/first': 'error',
        'import/group-exports': 'off',
        'import/max-dependencies': ['error', { max: 20 }],
        'import/named': 'error',
        'import/namespace': ['error', { allowComputed: true }],
        'import/newline-after-import': 'error',
        'import/no-absolute-path': 'error',
        'import/no-amd': 'error',
        'import/no-anonymous-default-export': 'off',
        'import/no-commonjs': 'error',
        'import/no-cycle': 'error',
        'import/no-default-export': 'off',
        'import/no-deprecated': 'error',
        'import/no-duplicates': 'error',
        'import/no-dynamic-require': 'error',
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                '**/*.test.ts',
                '**/*.e2e.ts'
            ]
        }],
        'import/no-internal-modules': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'error',
        'import/no-named-default': 'error',
        'import/no-namespace': 'off',
        'import/no-nodejs-modules': 'off',
        'import/no-self-import': 'error',
        'import/no-unassigned-import': 'off',
        'import/no-unresolved': 'error',
        'import/no-restricted-paths': ['error', {
            zones: [
                { target: './src', from: './e2e' }
            ]
        }],
        'import/order': ['error', {
            'groups': [['builtin', 'external'], ['internal', 'parent'], ['sibling', 'index']],
            'newlines-between': 'always'
        }],
        'import/no-unused-modules': 'error',
        'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
        'import/prefer-default-export': 'off',
        'import/unambiguous': 'error',

        // https://github.com/jest-community/eslint-plugin-jest/tree/master/docs/rules
        'jest/consistent-test-it': 'error',
        'jest/no-conditional-expect': 'off',
        'jest/no-hooks': 'off',
        'jest/prefer-expect-assertions': 'off',
        'jest/lowercase-name': ['error', { ignore: ['describe'] }],
        'jest/require-top-level-describe': 'error',

        // https://github.com/selaux/eslint-plugin-filenames#rules
        'filenames/match-regex': ['error', '^[a-z0-9-]+(\\.(d|test|e2e|schema))?$', true],
        'filenames/match-exported': ['error', 'kebab'],
        'filenames/no-index': 'off',

        // https://github.com/xjamundx/eslint-plugin-promise#rules
        'promise/always-return': 'error',
        'promise/avoid-new': 'error',
        'promise/catch-or-return': ['error', { allowFinally: true }],
        'promise/no-callback-in-promise': 'error',
        'promise/no-native': 'off',
        'promise/no-nesting': 'error',
        'promise/no-new-statics': 'error',
        'promise/no-promise-in-callback': 'error',
        'promise/no-return-in-finally': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/prefer-await-to-callbacks': 'error',
        'promise/prefer-await-to-then': 'error'
    },
    overrides: [
        {
            files: ['**/*.test.ts', '**/*.e2e.ts'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                'import/unambiguous': 'off'
            }
        },
        {
            files: ['*.config.ts'],
            rules: {
                'filenames/match-exported': 'off'
            }
        },
        {
            files: ['*.d.ts'],
            rules: {
                'import/unambiguous': 'off'
            }
        },
        {
            files: ['**/.eslintrc.js'],
            rules: {
                'filenames/match-regex': 'off',
                'import/no-commonjs': 'off',
                'import/unambiguous': 'off',
                '@typescript-eslint/naming-convention': 'off'
            }
        }
    ]
}
