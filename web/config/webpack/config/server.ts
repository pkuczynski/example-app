import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import webpack from 'webpack'

import paths from '../paths'

export default (): Partial<webpack.Configuration> => ({
    // Adding target is a workaround for https://github.com/webpack/webpack-dev-server/issues/2758
    target: 'web',

    devServer: {
        contentBase: paths.contentBase,
        historyApiFallback: true,
        watchContentBase: true,
        host: '0.0.0.0',
        port: 3000,
        publicPath: '/',
        overlay: {
            warnings: true,
            errors: true
        },
        hot: true,
        inline: true,
        https: false
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ]
})
