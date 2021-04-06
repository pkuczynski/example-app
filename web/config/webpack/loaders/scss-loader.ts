import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import postcssFlexBugsFixes from 'postcss-flexbugs-fixes'
import postcssGapProperties from 'postcss-gap-properties'
import postcssPresetEnv from 'postcss-preset-env'
import postcssNormalize from 'postcss-normalize'
import sass from 'sass'
import webpack from 'webpack'

export default (): Partial<webpack.Configuration> => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                            modules: {
                                localIdentName: ((): string => {
                                    switch (process.env.NODE_ENV) {
                                        case 'production':
                                            return '[hash:base64:6]'
                                        case 'test':
                                            return '[local]'
                                        default:
                                            return '[local]-[hash:base64:6]'
                                    }
                                })()
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [
                                    postcssFlexBugsFixes,
                                    postcssGapProperties,
                                    postcssPresetEnv({
                                        autoprefixer: {
                                            flexbox: 'no-2009'
                                        },
                                        stage: 3
                                    }),
                                    postcssNormalize
                                ]
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            implementation: sass
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        })
    ]
})
