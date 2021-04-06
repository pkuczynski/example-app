import { Store } from '../../scoped'

export const assign = <P, T = Partial<Store>>(state: T, scope: keyof T, props: P): T => ({
    ...state,
    [scope]: {
        ...props
    }
})
