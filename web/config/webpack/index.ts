import webpack from 'webpack'

import build from './build'
import { Options } from './options'
import start from './start'

export default (): webpack.Configuration => {
    const options: Partial<Options> = {
        ci: Boolean(process.env.CI)
    }

    switch (process.env.npm_lifecycle_event) {
        case 'build':
            return build(options)

        case 'start':
            return start()

        default:
            throw new Error('Unknown build target')
    }
}
