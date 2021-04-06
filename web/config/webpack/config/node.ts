import webpack from 'webpack'

export default (): Partial<webpack.Configuration> => ({
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    resolve: {
        fallback: {
            module: false,
            dgram: false,
            fs: false,
            http2: false,
            net: false,
            tls: false,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            child_process: false
        }
    }
})
