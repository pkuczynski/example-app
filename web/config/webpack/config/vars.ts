import webpack from 'webpack'

import app from '../../app'

export default (): Partial<webpack.Configuration> => ({
    plugins: [
        new webpack.DefinePlugin({
            APP_CONFIG: JSON.stringify(app)
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV'])
    ]
})
