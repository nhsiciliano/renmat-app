"use client";

import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

const fields: Array<{
  name: keyof FormValues;
  label: string;
  type?: string;
  col?: "full" | "half";
}> = [
  { name: "nombre", label: "Nombre", col: "half" },
  { name: "apellido", label: "Apellido", col: "half" },
  { name: "email", label: "Email", type: "email" },
  { name: "telefono", label: "Teléfono", type: "tel", col: "half" },
  { name: "profesion", label: "Profesión", col: "half" },
  { name: "provincia", label: "Provincia", col: "half" },
  { name: "ciudad", label: "Ciudad", col: "half" },
  { name: "instituto", label: "Instituto donde trabaja" },
];

export default function FormSec() {
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
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
    },
  });

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-4 text-sm leading-relaxed text-slate-600">
          <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Paso 2 · Datos del profesional
          </p>
          <p>
            Completá el formulario con todos los datos solicitados. Nos vamos a
            poner en contacto para enviarte las credenciales de acceso a
            REDCap.
          </p>
          <p>
            Dudas:{" "}
            <a
              href="mailto:registroargmat@gmail.com"
              className="text-brand hover:underline"
            >
              registroargmat@gmail.com
            </a>
            .
          </p>
          <p className="text-xs text-slate-500">
            Todos los campos son requeridos.
          </p>
        </aside>

        <form
          onSubmit={formik.handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {fields.map((field) => {
              const hasError = Boolean(
                formik.touched[field.name] && formik.errors[field.name]
              );
              return (
                <div
                  key={field.name}
                  className={cn(
                    "flex flex-col gap-1.5",
                    field.col !== "half" && "sm:col-span-2"
                  )}
                >
                  <label
                    htmlFor={field.name}
                    className="text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type ?? "text"}
                    value={formik.values[field.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-invalid={hasError}
                    className={cn(
                      "h-11 border-0 border-b border-slate-300 bg-transparent px-0 text-base text-slate-900 transition-colors outline-none focus:border-brand",
                      hasError && "border-destructive focus:border-destructive"
                    )}
                  />
                  {hasError && (
                    <span className="text-xs text-destructive">
                      {formik.errors[field.name]}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-8 h-11 w-full rounded-full bg-brand text-base font-medium text-white hover:bg-brand/90 sm:w-auto sm:px-8"
          >
            Enviar registro
          </Button>
        </form>
      </div>
    </section>
  );
}
