import webpack from 'webpack'
import { merge } from 'webpack-merge'

import common from './common'
import optimization from './config/optimization'
import server from './config/server'

export default (): webpack.Configuration => {
    process.env.NODE_ENV = 'development'

    return merge(
        common(),
        optimization(),
        server(),
        {
            mode: 'development'
        }
    )
}
