import util from 'util'
import webpack from 'webpack'

import configure from './config/webpack'

const config: webpack.Configuration = configure()

if (process.env.DEBUG) {
    console.log(`webpack.config.js=${util.inspect(config, { depth: null, colors: true })}`)
}

export default config
