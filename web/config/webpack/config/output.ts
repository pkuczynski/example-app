import webpack from 'webpack'

import paths from '../paths'

export default (): Partial<webpack.Configuration> => ({
    output: {
        path: paths.outputPath,
        filename: '[name].[contenthash:8].js',
        publicPath: '/'
    }
})
