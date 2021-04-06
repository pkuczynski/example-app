import { assign } from './assign'

const state = {
    foo: {
        id: 1
    },
    bar: {
        id: 2
    }
}

const props = {
    prop1: 'foo',
    prop2: 'bar'
}

describe('reducers.root.helpers.assign()', () => {
    const result = assign(state, 'foo', props)
    const actual = result.foo

    it('does not affect state not in scope', () => {
        expect(result.bar).toStrictEqual(state.bar)
    })

    it('removes existing scope state', () => {
        expect(actual).not.toHaveProperty('id')
    })

    it('adds props to scope', () => {
        expect(actual).toMatchObject(props)
    })
})
