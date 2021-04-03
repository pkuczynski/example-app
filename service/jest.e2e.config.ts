import type { Config } from '@jest/types'

import jestConfig, { outputBaseDirectory } from './jest.config'

// Update reporters output paths
const reporters: Array<string | Config.ReporterConfig> = (jestConfig.reporters || []).map((r) => {
    if (Array.isArray(r)) {
        const [name, options] = r

        switch (name) {
            case 'jest-junit': return [
                name,
                {
                    ...options,
                    outputDirectory: `${outputBaseDirectory}/test`
                }
            ]

            default: return r
        }
    }

    return r
})

const config: Config.InitialOptions = {
    // Use the same settings as jest for unit test
    ...jestConfig,

    // Customized reporters (output paths)
    reporters,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: false,

    // The glob patterns Jest uses to detect test files
    testMatch: ['**/*.e2e.ts'],

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: [
        './test/e2e/setup.ts'
    ],

    // Default timeout of a test in milliseconds
    testTimeout: 5000,

    // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers:
    // 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of
    // 2 workers.
    maxWorkers: 1,

    // Prevents Jest from executing more than the specified amount of tests at the same time. Only affects tests
    // that use test.concurrent
    maxConcurrency: 1
}

export default config
