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
            <div className={styles.right}>
                <div className={styles.arriba}>
                    <h2>Desde aquí podés ingresar a tus pacientes:</h2>
                    <br />
                    <h3>&quot;Registro de Microangiopatias Trombóticas&quot;</h3>
                    <br />
                    <p>Si ya tenés tu usuario y contraseña hace click en el
                        siguiente enlace</p>
                    <br />
                    <br />
                    <a href="https://iieproyectos.com.ar/redcap/" target="_blank" rel="noreferrer" className={styles.button}>INGRESAR</a>
                </div>
                <div className={styles.abajo}>
                    <h2>&iexcl;Sumate al Proyecto!</h2>
                    <br />
                    <p>Haciendo click en el siguiente botón, puede acceder a iniciar el proceso de registro en el
                        sistema de carga del mencionado estudio. Una vez completados los datos nos comunicaremos
                        con usted para hacerle llegar las credenciales de acceso correspondientes.</p>
                    <br />
                    <br />
                    <a href="/" className={styles.button}>REGISTRARSE</a>
                </div>
            </div>
        </div>
    )
}

export default page