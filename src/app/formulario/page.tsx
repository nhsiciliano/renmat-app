"use client";

import emailjs from "@emailjs/browser";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import * as yup from "yup";

import styles from "./page.module.css";

type FormValues = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  profesion: string;
  provincia: string;
  ciudad: string;
  instituto: string;
};

const initialValues: FormValues = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  profesion: "",
  provincia: "",
  ciudad: "",
  instituto: "",
};

const validationSchema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  apellido: yup.string().required("El apellido es requerido"),
  email: yup
    .string()
    .email("Ingresa un correo válido")
    .required("El correo es requerido"),
  telefono: yup
    .number()
    .typeError("Por favor ingrese un número válido")
    .required("El teléfono es requerido"),
  profesion: yup.string().required("La profesión es requerida"),
  provincia: yup.string().required("La provincia es requerida"),
  ciudad: yup.string().required("La ciudad es requerida"),
  instituto: yup.string().required("La institución donde trabaja es requerida"),
});

export default function FormularioPage() {
  // `router` is reserved for future navigation after submission; keep the
  // hook wired so client routing stays available on this page.
  useRouter();

  return (
    <div className={styles.container}>
      <br />
      <h1>- PASO 2 DE 2 -</h1>
      <br />
      <h2>Formulario de Registro</h2>
      <br />
      <h3>
        Por favor complete el formulario correspondiente con todos los datos
        solicitados y haga click en registrarse.
      </h3>
      <h3>
        Si tiene alguna duda con respecto a los datos de registro puede
        enviarnos un email a registroargmat@gmail.com.
      </h3>
      <h3>Todos los campos son requeridos para el registro.</h3>
      <br />
      <div className={styles.left}>
        <Formik<FormValues>
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            try {
              emailjs
                .send(
                  process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "",
                  process.env.NEXT_PUBLIC_EMAIL_TEMPLE_ID ?? "",
                  values,
                  process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ?? ""
                )
                .then(
                  (result) => {
                    console.log(result.text);
                    Swal.fire({
                      title: "Registro completo",
                      text: "Tu registro fue exitoso. Nos pondremos en contacto contigo via email para facilitarte las credenciales de acceso a redcap.",
                      icon: "success",
                      position: "top",
                      confirmButtonColor: "#A50104",
                    });
                    setSubmitting(false);
                    resetForm();
                  },
                  (error) => {
                    console.log(error.text);
                  }
                );
            } catch (error) {
              console.log(error, "Error de registro");
              alert(
                "Hubo un problema con el registro, por favor intente de nuevo más tarde"
              );
            }
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <Field
                className={styles.field}
                id="nombre"
                name="nombre"
                placeholder="Nombre"
              />
              {errors.nombre && touched.nombre ? (
                <div className={styles.error}>{errors.nombre}</div>
              ) : null}
              <Field
                className={styles.field}
                id="apellido"
                name="apellido"
                placeholder="Apellido"
              />
              {errors.apellido && touched.apellido ? (
                <div className={styles.error}>{errors.apellido}</div>
              ) : null}
              <Field
                className={styles.field}
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              />
              {errors.email && touched.email ? (
                <div className={styles.error}>{errors.email}</div>
              ) : null}
              <Field
                className={styles.field}
                id="telefono"
                name="telefono"
                placeholder="Teléfono de contacto (solo números)"
              />
              {errors.telefono && touched.telefono ? (
                <div className={styles.error}>{errors.telefono}</div>
              ) : null}
              <Field
                className={styles.field}
                id="profesion"
                name="profesion"
                placeholder="Profesion"
              />
              {errors.profesion && touched.profesion ? (
                <div className={styles.error}>{errors.profesion}</div>
              ) : null}
              <Field
                className={styles.field}
                id="provincia"
                name="provincia"
                placeholder="Provincia"
              />
              {errors.provincia && touched.provincia ? (
                <div className={styles.error}>{errors.provincia}</div>
              ) : null}
              <Field
                className={styles.field}
                id="ciudad"
                name="ciudad"
                placeholder="Ciudad"
              />
              {errors.ciudad && touched.ciudad ? (
                <div className={styles.error}>{errors.ciudad}</div>
              ) : null}
              <Field
                className={styles.field}
                id="instituto"
                name="instituto"
                placeholder="Instituto donde trabaja"
              />
              {errors.instituto && touched.instituto ? (
                <div className={styles.error}>{errors.instituto}</div>
              ) : null}
              <button className={styles.button} type="submit">
                Registrarse
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
