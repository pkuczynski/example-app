import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { config } from '../config'
import { actions, Store } from '../store'

interface Options {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    headers?: Record<string, string>
    body?: string
}

type CallApiFunc = (options: Options) => Promise<void>

const useApi = <ResponseDataType> (scope: keyof Store, url: string): [CallApiFunc] => {
    const dispatch = useDispatch()

    const callApi = useCallback(async (options: Options): Promise<void> => {
        dispatch(actions.fetch.request({ scope }))

        try {
            const res = await fetch(`${config.api.url}${url}`, {
                ...options,
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            })

            const payload = await res.json() as ResponseDataType

            if (res.status >= 400) {
                dispatch(actions.fetch.failure({ scope, error: 'Failed' }))
            }

            dispatch(actions.fetch.success({ scope, payload }))
        }
        catch (e) {
            dispatch(actions.fetch.failure({ scope, error: e.message }))
        }
    }, [dispatch, scope, url])

    return [callApi]
}

type GetFunc = () => void

export const useGet = <ResponseType> (scope: keyof Store, url: string): [GetFunc] => {
    const [callApi] = useApi<ResponseType>(scope, url)

    const get: GetFunc = useCallback(() => callApi({
        method: 'GET'
    }), [callApi])

    return [get]
}
