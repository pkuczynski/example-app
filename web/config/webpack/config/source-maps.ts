import webpack from 'webpack'

const devtool = (): string | false => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return 'source-map'
        case 'test':
            return false
        default:
            // use 'eval-source-map' if you want to debug IE11
            return 'eval-cheap-module-source-map'
    }
}

export default (): Partial<webpack.Configuration> => ({
    devtool: devtool()
})
