import CopyWebpackPlugin from 'copy-webpack-plugin'
import webpack from 'webpack'

import paths from '../paths'

export default (): Partial<webpack.Configuration> => ({
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: '**/[!index.html]*',
                    to: '.',
                    context: paths.contentBase
                }
            ]
        })
    ]
})
