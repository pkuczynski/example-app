import webpack from 'webpack'
import { merge } from 'webpack-merge'

import assets from './config/assets'
import optimization from './config/optimization'
import stats from './config/stats'
import common from './common'
import { Options } from './options'

export default (options: Partial<Options> = {}): webpack.Configuration => {
    process.env.NODE_ENV = 'production'

    return merge(
        common(),
        optimization(),
        assets(),
        stats(options),
        {
            bail: true,
            mode: 'production'
        }
    )
}
