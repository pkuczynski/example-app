import { GetUsersResponse, User } from '@example-app/service'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { FetchStatus, Store } from '../../store'
import { useGet } from '../use-api'

type UseUsers = () => {
    users: User[] | undefined
    status: FetchStatus
}

export const useUsers: UseUsers = () => {
    const users = useSelector((state: Store) => state.users.data)
    const status = useSelector((state: Store) => state.users.status)
    const [getUsers] = useGet<GetUsersResponse>('users', '/users')

    useEffect(() => {
        getUsers()
    }, [getUsers])

    return {
        users,
        status
    }
}
