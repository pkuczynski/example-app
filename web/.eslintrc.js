const packageJson = require('./package.json')

module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true,
            generators: true
        }
    },
    settings: {
        react: {
            version: packageJson.dependencies.react.replace('^', '')
        }
    },
    plugins: [
        '@calm/react-intl',
        'compat',
        'css-modules',
        'formatjs',
        'jest-dom',
        'jsx-a11y',
        'promise',
        'react',
        'react-hooks'
    ],
    extends: [
        '../.eslintrc.js',
        'plugin:compat/recommended',
        'plugin:css-modules/recommended',
        'plugin:jest-dom/recommended',
        'plugin:json/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/all',
        'plugin:react-hooks/recommended'
    ],
    rules: {
        // https://github.com/calm/eslint-plugin-react-intl
        '@calm/react-intl/missing-formatted-message': 'error',
        '@calm/react-intl/missing-attribute': 'error',
        '@calm/react-intl/missing-values': 'error',

        // https://github.com/amilajack/eslint-plugin-compat
        'compat/compat': 'error',

        // https://github.com/atfzl/eslint-plugin-css-modules#rules
        'css-modules/no-unused-class': 'error',
        'css-modules/no-undef-class': 'error',

        // https://github.com/selaux/eslint-plugin-filenames#rules
        'filenames/match-regex': ['error', '^[a-z0-9-]+(.test|.i18n|.config|.d)?$', true],
        'filenames/match-exported': ['error', 'kebab'],
        'filenames/no-index': 'off',

        // https://formatjs.io/docs/tooling/linter/
        'formatjs/enforce-description': 'off',
        'formatjs/enforce-default-message': 'off',
        'formatjs/enforce-placeholders': 'error',
        'formatjs/no-camel-case': 'off',
        'formatjs/no-emoji': 'error',
        'formatjs/no-multiple-whitespaces': 'error',
        'formatjs/enforce-id': 'off',

        // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                'config/**/*',
                'test/**/*',
                '**/*.test.*',
                '*.config.ts'
            ]
        }],

        // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
        'jsx-a11y/label-has-associated-control': 'error',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-onchange': 'off',

        // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
        'react/button-has-type': 'off',
        'react/forbid-prop-types': 'off',
        'react/forbid-foreign-prop-types': 'off',
        'react/forbid-component-props': 'off',
        'react/function-component-definition': ['error', {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function'
        }],
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-handler-names': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-max-depth': ['error', { max: 5 }],
        'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
        'react/jsx-newline': 'off',
        'react/jsx-no-bind': ['error', { ignoreRefs: true, allowArrowFunctions: true }],
        'react/jsx-no-literals': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-props': 'off',
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            afterOpening: 'never',
            beforeClosing: 'never',
            beforeSelfClosing: 'never'
        }],
        'react/no-did-mount-set-state': 'off',
        'react/no-did-update-set-state': 'off',
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
        'react/no-set-state': 'off',
        'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/require-optimization': 'off',
        'react/sort-comp': ['error', {
            order: [
                'instance-variables',
                'static-methods',
                'lifecycle',
                'everything-else',
                'render'
            ]
        }],

        // https://reactjs.org/docs/hooks-rules.html
        // https://www.npmjs.com/package/eslint-plugin-react-hooks
        'react-hooks/exhaustive-deps': 'error'
    },
    overrides: [
        {
            files: ['src/store/reducers/**/*.ts'],
            rules: {
                'default-param-last': 'off'
            }
        },
        {
            files: ['src/store/**/*.ts'],
            rules: {
                'import/no-cycle': 'off'
            }
        },
        {
            files: ['**/*.test.ts'],
            rules: {
                'import/unambiguous': 'off'
            }
        },
        {
            files: ['*.config.ts', 'config/webpack/**/*'],
            rules: {
                'camelcase': 'off',
                'filenames/match-exported': 'off',
                'import/no-nodejs-modules': 'off'
            }
        },
        {
            files: ['**/index.js', '**/index.ts'],
            rules: {
                'import/max-dependencies': 'off'
            }
        },
        {
            files: ['**/*.d.ts'],
            rules: {
                'import/unambiguous': 'off'
            }
        }
    ]
}
