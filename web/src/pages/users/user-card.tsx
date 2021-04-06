import { User } from '@example-app/service'
import cn from 'classnames'
import React from 'react'

import { Thumb } from '../../components'
import skeleton from '../../theme/skeleton.scss'

import styles from './user-card.scss'

type UserCardProps = Partial<Pick<User, 'avatar' | 'name'>>

export const UserCard: React.FC<UserCardProps> = ({ avatar, name }) => (
    <li className={styles.card}>
        <Thumb className={styles.thumb} url={avatar}/>
        <div className={cn(styles.name, { [skeleton.skeleton]: !name })}>{name}</div>
    </li>
)
