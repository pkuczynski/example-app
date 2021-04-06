import webpack from 'webpack'

export default (): Partial<webpack.Configuration> => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[contenthash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    }
})
