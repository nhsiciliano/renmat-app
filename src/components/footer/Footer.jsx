import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <h1>Ante cualquier duda comunicate con nosotros a nuestro
                email de contacto:</h1>
            <h1><b>registroargmat@gmail.com</b></h1>
            <br />
            <h2>RENMAT | Registro Nacional Microangiopatías Trombóticas</h2>
            <br />
            <h3>Copyright 2023 &copy; Todos los derechos reservados</h3>
        </div>
    )
}

export default Footer