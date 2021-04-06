import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

import paths from '../paths'

export default (): Partial<webpack.Configuration> => ({
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.contentBase, 'index.html'),
            minify: process.env.NODE_ENV === 'production'
                ? {
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    collapseWhitespace: true,
                    useShortDoctype: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true
                }
                : {}
        })
    ]
})
