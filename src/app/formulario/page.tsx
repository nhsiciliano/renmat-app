"use client";

import emailjs from "@emailjs/browser";
import { Field, Form, Formik } from "formik";
import Swal from "sweetalert2";
import * as yup from "yup";

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

const fieldClass =
  "h-11 w-full border-0 border-b border-slate-300 bg-transparent px-0 text-base text-slate-900 transition-colors outline-none focus:border-brand";

export default function FormularioPage() {
  return (
    <div className="bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Paso 2 de 2
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Formulario de registro
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Completá los datos del profesional responsable. Nos comunicaremos
            vía email para enviarte las credenciales de acceso a REDCap.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-xs text-slate-500">
          Dudas:{" "}
          <a
            href="mailto:registroargmat@gmail.com"
            className="text-brand hover:underline"
          >
            registroargmat@gmail.com
          </a>
          . Todos los campos son requeridos.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
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
                        text: "Tu registro fue exitoso. Nos pondremos en contacto contigo vía email para facilitarte las credenciales de acceso a REDCap.",
                        icon: "success",
                        position: "top",
                        confirmButtonColor: "#991b1b",
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
              <Form className="flex flex-col gap-6">
                {[
                  { name: "nombre", label: "Nombre" },
                  { name: "apellido", label: "Apellido" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "telefono", label: "Teléfono (solo números)" },
                  { name: "profesion", label: "Profesión" },
                  { name: "provincia", label: "Provincia" },
                  { name: "ciudad", label: "Ciudad" },
                  { name: "instituto", label: "Instituto donde trabaja" },
                ].map((field) => {
                  const name = field.name as keyof FormValues;
                  const hasError = Boolean(errors[name] && touched[name]);
                  return (
                    <div key={name} className="flex flex-col gap-1.5">
                      <label
                        htmlFor={name}
                        className="text-xs font-semibold uppercase tracking-wider text-slate-600"
                      >
                        {field.label}
                      </label>
                      <Field
                        id={name}
                        name={name}
                        type={field.type ?? "text"}
                        className={fieldClass}
                      />
                      {hasError && (
                        <span className="text-xs text-destructive">
                          {errors[name]}
                        </span>
                      )}
                    </div>
                  );
                })}

                <button
                  type="submit"
                  className="mt-2 h-11 rounded-full bg-brand text-base font-medium text-white transition-colors hover:bg-brand/90"
                >
                  Enviar registro
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
}
