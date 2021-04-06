import React from 'react'
import { FormattedMessage } from 'react-intl'
import styles from './header.scss'

import { Logo } from './logo'

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
