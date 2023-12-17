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
                <h1>Links de interés</h1>
                <br />
                <p>Aquí podrás encontrar links a distintos sitios de interés con información
                    sobre MAT y algunas herramientas virtuales de uso científico.
                </p>
            </div>
        </div>
    )
}

export default page