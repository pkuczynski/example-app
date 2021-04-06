import webpack from 'webpack'

export interface Options extends webpack.Configuration {
    ci: boolean
    hot: boolean
}
