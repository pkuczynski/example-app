import webpack from 'webpack'
import { merge } from 'webpack-merge'

import chunks from './config/chunks'
import entry from './config/entry'
import html from './config/html'
import node from './config/node'
import output from './config/output'
import sourceMaps from './config/source-maps'
import vars from './config/vars'
import loaders from './loaders'

export default (): webpack.Configuration => merge(
    entry(),
    chunks(),
    sourceMaps(),
    vars(),
    output(),
    html(),
    node(),
    ...loaders.map(loader => loader())
)
