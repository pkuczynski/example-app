import { Store } from '../../scoped'

export const extend = <P, T = Partial<Store>>(state: T, scope: keyof T, props: P): T => ({
    ...state,
    [scope]: {
        ...state[scope],
        ...props
    }
})
