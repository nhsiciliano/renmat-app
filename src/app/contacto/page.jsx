import React from 'react'
import styles from './page.module.css'

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Contacto</h1>
                <hr />
                <br />
                <p>Ante cualquier duda con respecto al registro o al acceso al sistema REDCap
                    podés comunicarte con nosotros mediante los siguientes medios:
                </p>
                <br />
                <p>Email: <b>registroartmat@gmail.com</b></p>
                <br />
                <p>Teléfonos: <b>45674-1324 / 11-3467-9043</b></p>
                <br />
                <p>Recordá que una vez que se completa el registro mediante nuestra plataforma
                    nos pondremos en contacto mediante email para enviar los datos de acceso al
                    sistema REDCap.
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