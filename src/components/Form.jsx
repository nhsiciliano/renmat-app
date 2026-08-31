"use client"

import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { Input, Button } from '@material-tailwind/react'

const fields = [
    { name: 'nombre', label: 'Nombre', autoComplete: 'given-name' },
    { name: 'apellido', label: 'Apellido', autoComplete: 'family-name' },
    { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
    { name: 'telefono', label: 'Teléfono', type: 'tel', inputMode: 'tel', autoComplete: 'tel' },
    { name: 'profesion', label: 'Profesión', autoComplete: 'organization-title' },
    { name: 'provincia', label: 'Provincia', autoComplete: 'address-level1' },
    { name: 'ciudad', label: 'Ciudad', autoComplete: 'address-level2' },
    { name: 'instituto', label: 'Institución donde trabaja', autoComplete: 'organization' },
]

function RegistrationField({ formik, field }) {
    const { name, label, type = 'text', inputMode, autoComplete } = field
    const showError = formik.touched[name] && Boolean(formik.errors[name])
    const errorId = `${name}-error`

    return (
        <div className='w-full min-w-0 pb-5'>
            <Input
                id={name}
                name={name}
                label={label}
                labelProps={{ htmlFor: name }}
                type={type}
                inputMode={inputMode}
                autoComplete={autoComplete}
                color='blue'
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                error={showError}
                aria-invalid={showError ? 'true' : undefined}
                aria-describedby={showError ? errorId : undefined}
            />
            {showError && (
                <p id={errorId} className='mt-2 text-sm font-semibold text-red-800'>
                    {formik.errors[name]}
                </p>
            )}
        </div>
    )
}

export default function FormSec() {
    const validationSchema = yup.object().shape({
        nombre: yup.string().trim().required('Ingresá tu nombre.'),
        apellido: yup.string().trim().required('Ingresá tu apellido.'),
        email: yup.string().trim().email('Ingresá un correo electrónico válido.').required('Ingresá tu correo electrónico.'),
        telefono: yup
            .string()
            .trim()
            .matches(/^[0-9+()\-\s]{6,30}$/, 'Ingresá un teléfono válido usando números, espacios, paréntesis, + o guiones.')
            .required('Ingresá tu teléfono.'),
        profesion: yup.string().trim().required('Ingresá tu profesión.'),
        provincia: yup.string().trim().required('Ingresá tu provincia.'),
        ciudad: yup.string().trim().required('Ingresá tu ciudad.'),
        instituto: yup.string().trim().required('Ingresá la institución donde trabajás.'),
    })

    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            profesion: '',
            provincia: '',
            ciudad: '',
            instituto: '',
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm, setStatus }) => {
            setStatus(null)

            try {
                await emailjs.send(
                    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAIL_TEMPLE_ID,
                    values,
                    process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
                )

                await Swal.fire({
                    title: 'Registro completo',
                    text: 'Tu registro fue exitoso. Nos pondremos en contacto contigo vía email para facilitarte las credenciales de acceso a REDCap.',
                    icon: 'success',
                    position: 'top',
                    confirmButtonColor: '#A50104',
                })
                resetForm()
            } catch (error) {
                console.error('Error al enviar el registro', error)
                setStatus('No pudimos enviar el registro. Conservamos los datos ingresados para que puedas intentarlo nuevamente.')
            } finally {
                setSubmitting(false)
            }
        },
    })

    const handleAccessibleSubmit = async (event) => {
        event.preventDefault()
        formik.setStatus(null)

        const errors = await formik.validateForm()
        const invalidFields = Object.keys(errors)

        if (invalidFields.length > 0) {
            formik.setTouched(
                invalidFields.reduce((touched, field) => ({ ...touched, [field]: true }), {}),
                false,
            )
            formik.setStatus('Revisá los campos marcados antes de enviar el registro.')
            requestAnimationFrame(() => document.getElementById(invalidFields[0])?.focus())
            return
        }

        await formik.submitForm()
    }

    return (
        <section aria-labelledby='registration-form-title' className='mt-6 gap-5 p-1 lg:flex lg:p-6'>
            <div className='m-1 text-center text-xl lg:m-auto lg:w-32 lg:flex-auto'>
                <h1 id='registration-form-title' className='mb-4 text-2xl font-bold text-red-800 lg:text-3xl'>
                    Formulario de registro
                </h1>
                <p>Por favor complete el formulario correspondiente con todos los datos solicitados y haga click en registrarse.</p>
                <p className='mt-4'>
                    Si tiene alguna duda con respecto a los datos de registro puede enviarnos un email a registroargmat@gmail.com.
                </p>
                <p className='mt-4'><span className='font-bold text-red-900'>IMPORTANTE</span>: Todos los campos son requeridos para el registro.</p>
            </div>
            <div className='rounded-md border-2 border-blue-800 p-3 lg:w-64 lg:flex-auto'>
                <form noValidate aria-busy={formik.isSubmitting} onSubmit={handleAccessibleSubmit}>
                    <div role='alert' aria-live='assertive' aria-atomic='true' className='mb-3 min-h-6 text-sm font-semibold text-red-800'>
                        {formik.status}
                    </div>
                    <div className='gap-x-3 lg:grid lg:grid-cols-2'>
                        {fields.map((field) => (
                            <RegistrationField key={field.name} formik={formik} field={field} />
                        ))}
                    </div>
                    <Button
                        className='min-h-11 w-full bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 disabled:cursor-wait disabled:opacity-70'
                        type='submit'
                        disabled={formik.isSubmitting}
                    >
                        {formik.isSubmitting ? 'Enviando registro…' : 'Registrarse'}
                    </Button>
                </form>
            </div>
        </section>
    )
}
