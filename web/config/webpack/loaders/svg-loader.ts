import webpack from 'webpack'

export default (): Partial<webpack.Configuration> => ({
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash:8].[ext]'
                }
            }
        ]
    }
})
