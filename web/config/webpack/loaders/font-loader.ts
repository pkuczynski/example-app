import webpack from 'webpack'

export default (): Partial<webpack.Configuration> => ({
    module: {
        rules: [
            {
                test: /\.woff(2)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contenthash:8].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    }
})
