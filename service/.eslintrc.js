module.exports = {
    root: true,
    env: {
        node: true
    },
    plugins: [
    ],
    extends: [
        '../.eslintrc.js'
    ],
    rules: {

    },
    overrides: [
        {
            files: ['index.d.ts'],
            rules: {
                'object-curly-newline': 'off'
            }
        },
        {
            files: ['src/index.ts'],
            rules: {
                'promise/prefer-await-to-callbacks': 'off'
            }
        }
    ]
}
