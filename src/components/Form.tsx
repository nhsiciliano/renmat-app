"use client";

import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const fields: Array<{ name: keyof FormValues; label: string }> = [
  { name: "nombre", label: "Nombre" },
  { name: "apellido", label: "Apellido" },
  { name: "email", label: "Email" },
  { name: "telefono", label: "Telefono" },
  { name: "profesion", label: "Profesion" },
  { name: "provincia", label: "Provincia" },
  { name: "ciudad", label: "Ciudad" },
  { name: "instituto", label: "Instituto" },
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
    },
  });

  return (
    <div className="p-1 lg:p-6 mt-6 flex-column lg:flex gap-5">
      <div className="p-1 text-xl text-center flex-column lg:flex-auto lg:w-32 m-1 lg:m-auto">
        <h3>
          Por favor complete el formulario correspondiente con todos los datos
          solicitados y haga click en registrarse.
        </h3>
        <br />
        <h3>
          Si tiene alguna duda con respecto a los datos de registro puede
          enviarnos un email a registroargmat@gmail.com.
        </h3>
        <br />
        <h3>
          <span className="text-red-900">IMPORTANTE</span>: Todos los campos son
          requeridos para el registro.
        </h3>
        <br />
      </div>
      <div className="p-2 border-2 border-blue-800 rounded-md lg:flex-auto lg:w-64">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {fields.slice(0, 2).map((field) => (
              <FormField key={field.name} field={field} formik={formik} />
            ))}
          </div>
          <FormField field={fields[2]} formik={formik} />
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {fields.slice(3, 5).map((field) => (
              <FormField key={field.name} field={field} formik={formik} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {fields.slice(5, 7).map((field) => (
              <FormField key={field.name} field={field} formik={formik} />
            ))}
          </div>
          <FormField field={fields[7]} formik={formik} />
          <Button
            type="submit"
            className="w-full bg-red-800 hover:bg-red-900 text-white"
          >
            Registrarse
          </Button>
        </form>
      </div>
    </div>
  );
}

type FormFieldProps = {
  field: { name: keyof FormValues; label: string };
  formik: ReturnType<typeof useFormik<FormValues>>;
};

function FormField({ field, formik }: FormFieldProps) {
  const hasError = Boolean(
    formik.touched[field.name] && formik.errors[field.name]
  );

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={field.name}
        className="text-sm font-medium text-blue-900"
      >
        {field.label}
      </label>
      <Input
        id={field.name}
        name={field.name}
        value={formik.values[field.name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        aria-invalid={hasError}
        className={cn(
          "border-blue-300 focus-visible:border-blue-500",
          hasError && "border-destructive"
        )}
      />
      {hasError && (
        <span className="text-xs text-destructive">
          {formik.errors[field.name]}
        </span>
      )}
    </div>
  );
}
