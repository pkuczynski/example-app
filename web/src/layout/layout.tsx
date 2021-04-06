import React from 'react'
import Helmet from 'react-helmet'

import { config } from '../config'

import { Header } from './header'
import styles from './layout.scss'

export const Layout: React.FC = ({ children }) => (
    <>
        <Helmet defaultTitle="Example App" titleTemplate="%s: Example App">
            <title>{config.title}</title>
        </Helmet>
        <Header/>
        <main className={styles.main}>
            {children}
        </main>
    </>
)
