import cn from 'classnames'
import React from 'react'

import skeleton from '../../theme/skeleton.scss'

import styles from './thumb.scss'

interface ThumbProps {
    url?: string
    alt?: string
    className?: string
}

export const Thumb: React.FC<ThumbProps> = ({ url, alt, className }) => {
    if (url) {
        return <img className={cn(styles.thumb, className)} src={url} alt={alt}/>
    }

    return <div className={cn(styles.thumb, skeleton.skeleton, className)}/>
}
