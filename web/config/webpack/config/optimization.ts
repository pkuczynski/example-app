import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'

export default (): Partial<webpack.Configuration> => process.env.NODE_ENV === 'production'
    ? {
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            toplevel: true,
                            // eslint-disable-next-line @typescript-eslint/naming-convention
                            drop_console: true
                        },
                        output: {
                            comments: false,
                            beautify: false
                        },
                        toplevel: true,
                        module: true,
                        sourceMap: true
                    },
                    extractComments: false
                }),
                new CssMinimizerPlugin({ sourceMap: true })
            ]
        }
    }
    : {
        optimization: {
            runtimeChunk: true,
            removeAvailableModules: false,
            removeEmptyChunks: false
        }
    }
