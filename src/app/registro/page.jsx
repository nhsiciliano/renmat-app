import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Registro</h1>
                <hr />
                <br />
                <h2>Objetivo General</h2>
                <br />
                <p>Nuestro objetivo es implementar un registro de pacientes con MAT, estableciendo una red de
                    profesionales (clínicos, nefrólogos, hematólogos, intensivistas, entre otros) de diversos centros de
                    salud en el país, tendiente a recopilar la información de datos epidemiológicos, datos clínicos y de
                    laboratorio que permitan caracterizar y describir una cohorte de pacientes afectados por estas
                    enfermedades raras en Argentina.</p>
                <br />
                <h2>Impacto del registro de pacientes</h2>
                <br />
                <br />
                <Image src="/registromat.png" className={styles.img} alt='Informacíon sobre registro' width={740} height={280} />
                <br />
                <br />
                <p>El diseño del estudio será <b>multicéntrico, observacional, retrospectivo y prospectivo</b>. Los sujetos
                    serán elegibles, después de dar <b><u>consentimiento informado</u></b>, por sí mismos o el representante legal
                    (los padres/tutores legales en caso de tratarse de un menor de edad)</p>
                <br />
                <p>El manejo de la información médica obtenida durante la entrevista clínica en nuestro país es
                    controlado (Ley de protección de datos, Ley N° 25.326). La información médica obtenida será
                    transferida a la base de datos clínicos y procesada para permitir que los resultados sean analizados
                    y publicados/reportados con propósitos científicos; en todos los casos siempre se hará
                    manteniendo estricta confidencialidad. Los datos evaluados potencialmente para ser reportados
                    no contendrán información sobre filiación (nombre, DNI, dirección, edad, etc.)</p>
                <br />
                <br />
                <h2>¿Qué es REDCap?</h2>
                <br />
                <p>El soporte informático utilizado para construir el registro será
                    la aplicación online REDCap.</p>
                <br />
                <hr />
                <br />
                <p>REDCap es un programa de uso flexible y personalizable, con acceso seguro vía la creación
                    de su cuenta de usuario y contraseña personal. REDCap es una herramienta segura para el manejo
                    de datos sensibles que proponemos recopilar en nuestro registro. Se mantendrá la
                    confidencialidad de toda la información de este estudio según pautas de la legislación nacional e
                    internacional vigente.</p>
                <br />
                <br />
                <a href="https://projectredcap.org/" target="_blank" rel="noreferrer">
                    <Image src="/redcap.png" alt='Redcap Logo' width={230} height={100} />
                </a>
            </div>
            <div className={styles.right}>
                <div className={styles.abajo}>
                    <h2>&iexcl;Sumate al Proyecto!</h2>
                    <br />
                    <p>Haciendo click en el siguiente botón, puede acceder al formulario de registro en el
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