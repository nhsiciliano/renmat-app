import Link from 'next/link'
import React from 'react'
import styles from './navsec.module.css'

const Navsec = () => {
    return (
        <div className={styles.container}>
                <Link href="/herramientas" className={styles.link}>Descargas</Link>
                <Link href="/score-plasmic" className={styles.link}>Score Plasmic</Link>
                <Link href="/bibliografia" className={styles.link}>Bibliografía</Link>
                <Link href="/videos" className={styles.link}>Videos</Link>  
        </div>
    )
}

export default Navsec