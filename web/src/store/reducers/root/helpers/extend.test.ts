import { extend } from './extend'

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

describe('reducers.root.helpers.extend()', () => {
    const result = extend(state, 'foo', props)
    const actual = result.foo

    it('does not affect state not in scope', () => {
        expect(result.bar).toStrictEqual(state.bar)
    })

    it('persists existing scope state', () => {
        expect(actual.id).toBe(state.foo.id)
    })

    it('adds props to scope', () => {
        expect(actual).toMatchObject(props)
    })
})
