import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Logo } from './logo'
import styles from './header.scss'

export const Header: React.FC = () => (
    <header>
        <div className={styles.header}>
            <Logo/>
            <div>
                <FormattedMessage id="header.title"/>
            </div>
        </div>
    </header>
)
