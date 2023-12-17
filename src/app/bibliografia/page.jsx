import Navsec from '@/components/navsec/Navsec'
import React from 'react'
import styles from './page.module.css'

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Navsec />
                <hr />
                <br />
                <h1>Bibliografía de interés</h1>
                <br />
                <p>Aquí podrás encontrar mucha bibliografía relacionada con MAT y otros temas.
                </p>
            </div>
        </div>
    )
}

export default page