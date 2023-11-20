import React from 'react'
import styles from './page.module.css'


const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>&iquest;Qué son las Microangiopatías Trombóticas?</h1>
                <hr />
                <br />
                <p>Las MAT representan un grupo de enfermedades caracterizadas por rasgos clínicos y
                    anátomo-patológicos similares. Los síntomas clínicos incluyen anemia hemolítica microangiopática
                    no-inmune con trombocitopenia sumado a injuria de órgano de variable severidad. PTT y SUH
                    pueden afectar a población adulta y pediátrica, siendo algunas manifestaciones más específicas de
                    un grupo etario en particular. En los últimos años se ha visto un creciente número de desarrollos y
                    metodologías dirigidas a caracterizar y diferenciar los dos subtipos principales de MAT.
                    <br />
                    <br />
                    La PTT resulta de la deficiencia de actividad de la metalo y serinoproteasa ADAMTS13
                    (acrónimo de A Disintegrin And Metalloproteinase with a ThromboSpondin type 1 motif, member
                    13) la que puede ser hereditaria (por mutaciones en el gen ADAMTS13) o adquirida (por auto-
                    anticuerpos dirigidos contra ADAMTS13). La PTT adquirida, que representa casi el 90% de los casos
                    de PTT en adultos, es debida al desarrollo de autoanticuerpos dirigidos a ADAMTS13, siendo en su
                    mayoría de tipo IgG. La PTT congénita resulta de mutaciones genéticas en ADAMTS13 y representa
                    solo el 5-10% de los casos [14]. Las propiedades de enlace y adhesivas del VWF dependen del
                    tamaño de los multímeros que lo componen, siendo más adhesivos los de mayor tamaño. Ante la
                    ausencia o severa disminución de la actividad de ADAMTS13, como ocurre en PTT, la proteólisis
                    del VWF secretado no es adecuada, dando lugar a un exceso de multímeros extragrandes con la
                    consecuente adhesión y agregación de plaquetas en sangre circulante que conducen a la
                    obstrucción microvascular y sus consecuencias.
                    <br />
                    <br />
                    El SUH es definido por la tríada de anemia hemolítica, trombocitopenia y <b>falla renal
                    aguda</b> y se clasifica en típico y atípico. Las formas típicas (STEC-SUH), representan un 90% de los
                    casos y son secundarias a infección por microorganismos productores de toxina Shiga (TxS)
                    (Escherichia coli, Shigella). El 10% restante está constituido por las formas atípicas -<b>SUHa</b>- que es
                    causada por la desregulación de la vía alternativa del complemento que lleva a su activación [18].
                    El sistema del complemento es una herramienta esencial de la respuesta inmune innata y actúa
                    como un puente entre la inmunidad innata y adquirida. La enfermedad puede ser hereditaria (por
                    mutaciones en genes de proteinas participantes en las vias del complemento y sus reguladores) o
                    adquirida (como sería el ejemplo de anticuerpos anti-FH,regulador de la via).
                    <br />
                    <br />
                    En el mundo, los datos epidemiológicos sobre PTT y SUHa son escasos y los cuadros
                    actuales fueron descriptos en su mayoría en países desarrollados. Las incidencias de las distintas
                    formas de MAT fueron esporádicamente reportadas y varían de un país a otro. La creación de un
                    registro de pacientes con PTT y SUHa en Argentina representa una herramienta indispensable para
                    poder integrar de manera global la información sobre estas enfermedades raras y poco descriptas
                    en América Latina.</p>
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