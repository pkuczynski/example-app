import { Context } from 'koa'

import { logger } from '../logger'

import { logRequest, levelFromStatus } from './log-request'

interface CustomContext extends Context {
    state: { duration: number }
}

describe('log-request', () => {
    const exampleContext = {
        method: 'GET',
        query: undefined,
        status: 200,
        state: { duration: 100 },
        response: { length: 300 }
    } as unknown as CustomContext

    it('should log requests', async () => {
        const ctx: CustomContext = { ...exampleContext, path: '/some/path' }
        const next = jest.fn()
        const log = jest.spyOn(logger, 'log')

        await logRequest(ctx, next)

        const { state: { duration }, response: { length }, ...meta } = ctx

        expect(next).toHaveBeenCalledTimes(1)
        expect(log).toHaveBeenCalledWith('info', `${ctx.method} ${ctx.path} ${ctx.status} ${duration}ms`, {
            ...meta,
            duration,
            length
        })
    })

    it('should skip logging excluded paths', async () => {
        const ctx: CustomContext = { ...exampleContext, path: '/status/health' }
        const next = jest.fn()
        const log = jest.spyOn(logger, 'log')

        await logRequest(ctx, next)

        expect(next).toHaveBeenCalledTimes(1)
        expect(log).toHaveBeenCalledTimes(0)
    })

    describe('conversion from response status to log level', () => {
        const random = (min: number, max: number): number => Math.floor((Math.random() * (max - min + 1)) + min)

        type CodesList = { [key: string]: number[] }

        interface Codes extends CodesList {
            error: number[]
            warn: number[]
            info: number[]
        }

        // Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        const codes: Codes = {
            error: [500, random(501, 599), 599, random(1, 99)],
            warn: [400, random(401, 499), 499],
            info: [200, random(201, 399), 399]
        }

        Object.keys(codes).forEach((level) => {
            codes[level].forEach((code) => {
                it(`should convert response status ${code} to log level ${level}`, () => {
                    expect(levelFromStatus(code)).toBe(level)
                })
            })
        })
    })
})
