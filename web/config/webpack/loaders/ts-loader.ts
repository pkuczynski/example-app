import webpack from 'webpack'
import reactRefreshTypeScript from 'react-refresh-typescript'
import { CustomTransformers } from 'typescript'

export default (): Partial<webpack.Configuration> => ({
    resolve: {
        extensions: ['.ts', '.tsx']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                module: 'esnext'
                            },
                            getCustomTransformers: (): CustomTransformers => ({
                                before: process.env.NODE_ENV === 'development' ? [reactRefreshTypeScript()] : []
                            })
                        }
                    }
                ]
            }
        ]
    }
})
