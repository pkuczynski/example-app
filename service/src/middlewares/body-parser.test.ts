describe('body-parser middleware', () => {
    it('should properly initialize Koa Body Parser', () => {
        const koaBodyParser = jest.fn()

        jest.mock('koa-bodyparser', () => koaBodyParser)

        require('./body-parser')

        expect(koaBodyParser).toHaveBeenCalledTimes(1)
        expect(koaBodyParser.mock.calls[0][0]).toStrictEqual({
            enableTypes: ['json'],
            jsonLimit: '5mb'
        })
    })
})
