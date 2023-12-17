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
                <h1>Archivos para descargar</h1>
                <br />
                <p>Aquí podrás encontrar archivos útiles para descargar</p>
            </div>
        </div>
    )
}

export default page