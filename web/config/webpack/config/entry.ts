import webpack from 'webpack'

export default (): Partial<webpack.Configuration> => ({
    entry: {
        app: ['./src']
    }
})
