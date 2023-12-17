import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Bienvenidos</h1>
        <br />
        <p>Le damos la bienvenida al sitio de Registro de Microangiopatías trombóticas en Argentina.
          <br />
          <br />
          Se ha creado este espacio abierto a la comunidad de profesionales que disgnostican, estudian
          , tratan y realizan el seguimiento de pacientes con esta enfermedad.
          <br />
          <br />
        </p>
        <h2>Descripción del sitio</h2>
        <br />
        <p>En este espacio usted encontrará la posibilidad de participar en el registro con la
          inclusión de sus pacientes en el sistema RedCap. Desde aquí podrá administrar
          las historias clínicas de sus pacientes, su evolución, los eventos e intercurrencias
          así como los nuevos tratamientos que hayan recibido, realizar estadísticas,
          participar activamente de las investigaciones y publicaciones que desde el registro
          se generen.</p>
        <br />
        <h2>¿A quién está dirigido el registro?</h2>
        <br />
        <p>Se invita a todos los profesionales, médicos, bioquímicos y especialistas
          involucrados en el cuidado de los pacientes con MAT de todas las provincias
          de la República Argentina.</p>
        <br />
        <h2>¿Cómo hago para acceder al registro?</h2>
        <br />
        <p>Aquí abajo se encuentra el acceso para sumarse al proyecto. Simplemente haz
          un click en Registrarse y podrás acceder al formulario correspondiente.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.abajo}>
          <h2>&iexcl;Sumate al Proyecto!</h2>
          <br />
          <p>Haciendo click en el siguiente botón, puede acceder a iniciar el proceso de registro en el
            sistema de carga del mencionado estudio. Una vez completados los datos nos comunicaremos
            con usted para hacerle llegar las credenciales de acceso correspondientes.</p>
          <br />
          <br />
          <a href="/registro" className={styles.button}>REGISTRO</a>
        </div>
      </div>
    </div>
  )
}
