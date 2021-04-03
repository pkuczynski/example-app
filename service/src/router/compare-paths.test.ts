import { Controller } from '../controllers/controller'

import { comparePaths } from './compare-paths'

describe('Path comparator', () => {
    const mapToController = (path: string) => ({
        route: {
            path
        }
    })

    const paths = [
        '/deals/:id',
        '/types/properties',
        '/deals/:id/payments/:paymentId',
        '/deals',
        '/calculations/rental',
        '/status/health',
        '/deals/:id/cancel',
        '/types/deals',
        '/deals/counts',
        '/deals/:id/payments'
    ].map(mapToController) as Controller[]

    const expectedPathOrder = [
        '/deals',
        '/calculations/rental',
        '/deals/counts',
        '/status/health',
        '/types/deals',
        '/types/properties',
        '/deals/:id',
        '/deals/:id/cancel',
        '/deals/:id/payments',
        '/deals/:id/payments/:paymentId'
    ].map(mapToController) as Controller[]

    it('should return the expected order', () => {
        const orderedPaths = paths.sort(comparePaths)

        expect(orderedPaths).toStrictEqual(expectedPathOrder)
    })
})
