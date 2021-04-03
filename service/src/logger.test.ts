import { NodeEnvironment } from './enums'

describe('logger', () => {
    const consoleTransport = jest.fn()
    const expectedLogger = {
        debug: jest.fn(),
        log: jest.fn()
    }

    beforeEach(() => {
        const format = jest.fn().mockReturnValue(() => undefined) as any

        /* eslint-disable jest/prefer-spy-on */
        format.colorize = jest.fn()
        format.combine = jest.fn()
        format.simple = jest.fn()
        format.errors = jest.fn()
        /* eslint-enable jest/prefer-spy-on */

        jest.mock('winston', () => ({
            format,
            createLogger: jest.fn().mockReturnValue(expectedLogger),
            transports: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Console: consoleTransport
            }
        }))
    })

    afterEach(() => {
        jest.resetModules()
    })

    describe('format', () => {
        [NodeEnvironment.DEVELOPMENT].forEach((env) => {
            it(`should use colorized simple format in ${env}`, () => {
                jest.mock('./config', () => ({ config: { env } }))

                const winston = require('winston')
                const { logger } = require('./logger')

                expect(winston.createLogger).toHaveBeenCalledTimes(1)
                expect(winston.format.combine).toHaveBeenCalledTimes(1)
                expect(winston.format.colorize).toHaveBeenCalledTimes(1)
                expect(winston.format.simple).toHaveBeenCalledTimes(1)
                expect(logger).toStrictEqual(expectedLogger)
            })
        });

        [NodeEnvironment.PRODUCTION, NodeEnvironment.TEST, undefined].forEach((env) => {
            it(`should use simple format in ${env || 'any other env'}`, () => {
                jest.mock('./config', () => ({ config: { env } }))

                const winston = require('winston')
                const { logger } = require('./logger')

                expect(winston.createLogger).toHaveBeenCalledTimes(1)
                expect(winston.format.combine).toHaveBeenCalledTimes(0)
                expect(winston.format.colorize).toHaveBeenCalledTimes(0)
                expect(winston.format.simple).toHaveBeenCalledTimes(1)
                expect(logger).toStrictEqual(expectedLogger)
            })
        })
    })

    describe('level', () => {
        [[NodeEnvironment.TEST, 'error'], [undefined, 'info']].forEach(([env, level]) => {
            it(`should use ${level} level in ${env || 'any other env'}`, () => {
                jest.mock('./config', () => ({ config: { env } }))

                const winston = require('winston')

                require('./logger')

                expect(winston.createLogger.mock.calls[0][0].level).toBe(level)
            })
        })
    })

    it('should use console transport', () => {
        const winston = require('winston')

        require('./logger')

        expect(winston.transports.Console).toHaveBeenCalledTimes(1)
        expect(winston.createLogger.mock.calls[0][0].transports[0]).toBeInstanceOf(consoleTransport)
    })
})
