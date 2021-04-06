import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { Options } from '../options'

export default ({ ci }: Partial<Options>): Partial<webpack.Configuration> => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: '../report/stats.html',
            statsFilename: '../report/stats.json',
            defaultSizes: 'gzip',
            generateStatsFile: true,
            openAnalyzer: !ci
        })
    ]
})
