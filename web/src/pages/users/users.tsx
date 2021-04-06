import React from 'react'
import { FormattedMessage } from 'react-intl'

import { useUsers } from '../../hooks/api/use-users'
import { FetchStatus } from '../../store'

import { UserCard } from './user-card'

export const Users: React.FC = () => {
    const { users, status } = useUsers()

    return (
        <>
            <h1><FormattedMessage id="users.title"/></h1>
            <ul>
                {status === FetchStatus.FETCHING && Array.from({ length: 5 }, (_, i) => (
                    <UserCard key={i}/>
                ))}

                {status === FetchStatus.SUCCESS && users?.map(u => (
                    <UserCard key={u.id} avatar={u.avatar} name={u.name}/>
                ))}

                {status === FetchStatus.ERROR && (
                    <div><FormattedMessage id="users.error"/></div>
                )}
            </ul>
        </>
    )
}
