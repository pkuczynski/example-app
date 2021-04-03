describe('cors middleware', () => {
    afterEach(() => {
        jest.resetModules()
    })

    describe('should correctly set Access-Control-Allow-Origin header', () => {
        type Func = () => void
        let assert: Func, next: Func, set: Func

        beforeEach(() => {
            assert = jest.fn()
            next = jest.fn()
            set = jest.fn()
        })

        describe('not in production', () => {
            it('should return same origin as request', async () => {
                const origin = 'something'
                const ctx = { get: () => origin, set, vary: jest.fn() }

                jest.mock('../config', () => ({ config: { app: { isDeployed: false } } }))

                const { cors } = require('./cors')

                await cors(ctx, next)

                expect(set).toHaveBeenCalledWith('Access-Control-Allow-Origin', origin)
            })
        })

        describe('in production', () => {
            ['x.envstage.com', 'x.envdevel.com', 'x.engelvoelkers.com'].forEach((origin) => {
                it(`should return only allowed origin ${origin}`, async () => {
                    const ctx = { assert, get: () => origin, set, vary: jest.fn() }

                    jest.mock('../config', () => ({ config: { app: { isDeployed: true } } }))

                    const { cors } = require('./cors')

                    await cors(ctx, next)

                    expect(set).toHaveBeenCalledWith('Access-Control-Allow-Origin', origin)
                })
            })

            it('should throw error when origin is not allowed', async () => {
                const origin = 'something'
                const ctx = { assert, get: () => origin, set, vary: jest.fn() }

                jest.mock('../config', () => ({ config: { app: { isDeployed: true } } }))

                const { cors } = require('./cors')

                await cors(ctx, next)

                expect(assert).toHaveBeenCalledWith(false, 412, 'Unsupported origin')
            })
        })
    })

    it('should properly initialize Koa Cors', () => {
        const koaCors = jest.fn()

        jest.mock('@koa/cors', () => koaCors)

        require('./cors')

        expect(koaCors).toHaveBeenCalledTimes(1)

        const [[{ exposeHeaders, allowHeaders, maxAge, credentials, keepHeadersOnError }]] = koaCors.mock.calls

        expect(exposeHeaders).toStrictEqual(['connection', 'content-length', 'content-type', 'www-authenticate'])
        expect(allowHeaders).toStrictEqual(['Content-Type',
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Credentials',
            'Authorization'])
        expect(maxAge).toBe(24 * 60 * 60)
        expect(credentials).toBe(true)
        expect(keepHeadersOnError).toBe(true)
    })
})
