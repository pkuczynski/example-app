import { Context } from 'koa'

import { duration } from './duration'

describe('duration', () => {
    it('should add response time to the context', async () => {
        const delay = Math.floor(Math.random() * 100)
        const now = Math.floor(Math.random() * 100)
        const ctx = { state: {} } as Context
        const next = jest.fn()

        jest.spyOn(Date, 'now')
            .mockReturnValueOnce(now)
            .mockReturnValueOnce(now + delay)

        await duration(ctx, next)

        expect(next).toHaveBeenCalledTimes(1)
        expect(ctx.state.duration).toBe(delay)
    })
})
