import React from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.svg'
import styles from './logo.scss'

export const Logo: React.FC = () => (
    <Link to="/" className={styles.logo}>
        <img height="64" src={logo} alt="Logo"/>
    </Link>
)
