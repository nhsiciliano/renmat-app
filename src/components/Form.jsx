"use client"

import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import { useRef, useState } from 'react'
import * as yup from 'yup'

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

const validationSchema = yup.object().shape({
    nombre: yup.string().trim().required('Ingresá tu nombre.'),
    apellido: yup.string().trim().required('Ingresá tu apellido.'),
    email: yup.string().trim().email('Ingresá un correo electrónico válido.').required('Ingresá tu correo electrónico.'),
    telefono: yup.string().trim().matches(/^[0-9+()\-\s]{6,30}$/, 'Ingresá un teléfono válido usando números, espacios, paréntesis, + o guiones.').required('Ingresá tu teléfono.'),
    profesion: yup.string().trim().required('Ingresá tu profesión.'),
    provincia: yup.string().trim().required('Ingresá tu provincia.'),
    ciudad: yup.string().trim().required('Ingresá tu ciudad.'),
    instituto: yup.string().trim().required('Ingresá la institución donde trabajás.'),
})

function RegistrationField({ formik, field }) {
    const { name, label, type = 'text', inputMode, autoComplete } = field
    const showError = formik.touched[name] && Boolean(formik.errors[name])
    const errorId = `${name}-error`

    return (
        <div className="min-w-0">
            <label htmlFor={name} className="mb-2 block text-sm font-bold text-[var(--atlas-ink)]">
                {label} <span aria-hidden="true" className="text-[var(--atlas-red)]">*</span>
            </label>
            <input
                id={name}
                name={name}
                type={type}
                inputMode={inputMode}
                autoComplete={autoComplete}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                aria-invalid={showError ? 'true' : undefined}
                aria-describedby={showError ? errorId : undefined}
                className={`min-h-12 w-full rounded-xl border bg-white px-4 py-3 text-base text-[var(--atlas-ink)] transition-colors placeholder:text-[var(--atlas-ink-soft)] ${showError ? 'border-[var(--atlas-red)]' : 'border-[var(--atlas-line)] hover:border-[var(--atlas-blue)]'}`}
            />
            <div className="min-h-7 pt-2">
                {showError && <p id={errorId} role="alert" className="text-sm font-semibold text-[var(--atlas-red-dark)]">{formik.errors[name]}</p>}
            </div>
        </div>
    )
}

export default function FormSec() {
    const [submitMessage, setSubmitMessage] = useState(null)
    const messageRef = useRef(null)

    const formik = useFormik({
        initialValues: {
            nombre: '', apellido: '', email: '', telefono: '',
            profesion: '', provincia: '', ciudad: '', instituto: '',
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitMessage(null)

            try {
                await emailjs.send(
                    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAIL_TEMPLE_ID,
                    values,
                    process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
                )
                resetForm()
                setSubmitMessage({
                    type: 'success',
                    text: 'Tu registro fue exitoso. Nos pondremos en contacto contigo vía email para facilitarte las credenciales de acceso a REDCap.',
                })
                requestAnimationFrame(() => messageRef.current?.focus())
            } catch (error) {
                console.error('Error al enviar el registro', error)
                setSubmitMessage({
                    type: 'error',
                    text: 'No pudimos enviar el registro. Conservamos los datos ingresados para que puedas intentarlo nuevamente.',
                })
                requestAnimationFrame(() => messageRef.current?.focus())
            } finally {
                setSubmitting(false)
            }
        },
    })

    const handleAccessibleSubmit = async (event) => {
        event.preventDefault()
        setSubmitMessage(null)

        const errors = await formik.validateForm()
        const invalidFields = Object.keys(errors)

        if (invalidFields.length > 0) {
            formik.setTouched(invalidFields.reduce((touched, field) => ({ ...touched, [field]: true }), {}), false)
            setSubmitMessage({ type: 'error', text: 'Revisá los campos marcados antes de enviar el registro.' })
            requestAnimationFrame(() => document.getElementById(invalidFields[0])?.focus())
            return
        }

        await formik.submitForm()
    }

    return (
        <section aria-labelledby="registration-form-title" className="mx-auto max-w-[1180px]">
            <div className="grid gap-10 lg:grid-cols-[minmax(300px,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.13em] text-[var(--atlas-teal-dark)]">Datos profesionales</p>
                    <h2 id="registration-form-title" tabIndex={-1} className="mt-3 text-3xl font-extrabold tracking-[-0.025em] text-[var(--atlas-ink)] sm:text-4xl">Formulario de registro</h2>
                    <p className="mt-5 text-lg leading-relaxed text-[var(--atlas-ink-soft)]">Completá el formulario con todos los datos solicitados y seleccioná Registrarse.</p>
                    <p className="mt-5 text-lg leading-relaxed text-[var(--atlas-ink-soft)]">Si tenés alguna duda sobre los datos de registro, escribinos a <a className="font-bold text-[var(--atlas-ink)] underline decoration-[var(--atlas-line)] underline-offset-4 hover:decoration-[var(--atlas-ink)]" href="mailto:registroargmat@gmail.com">registroargmat@gmail.com</a>.</p>
                    <p className="mt-6 border-l-2 border-[var(--atlas-red)] pl-4 text-[var(--atlas-ink-soft)]"><strong className="text-[var(--atlas-ink)]">Importante:</strong> Todos los campos son requeridos para el registro.</p>
                </div>

                <form noValidate aria-busy={formik.isSubmitting} onSubmit={handleAccessibleSubmit} className="rounded-2xl border border-[var(--atlas-line)] bg-white p-5 shadow-[0_22px_55px_rgba(11,43,75,0.08)] sm:p-8">
                    <div
                        ref={messageRef}
                        tabIndex={submitMessage ? -1 : undefined}
                        role={submitMessage?.type === 'error' ? 'alert' : 'status'}
                        aria-live={submitMessage?.type === 'error' ? 'assertive' : 'polite'}
                        aria-atomic="true"
                        className={`mb-5 min-h-6 rounded-xl px-4 py-3 text-sm font-semibold ${submitMessage ? (submitMessage.type === 'success' ? 'bg-[var(--atlas-teal-soft)] text-[var(--atlas-ink)]' : 'bg-[#f5e5e3] text-[var(--atlas-red-dark)]') : 'sr-only'}`}
                    >
                        {submitMessage?.text}
                    </div>
                    <div className="grid gap-x-5 sm:grid-cols-2">
                        {fields.map((field) => <RegistrationField key={field.name} formik={formik} field={field} />)}
                    </div>
                    <button type="submit" disabled={formik.isSubmitting} className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[var(--atlas-red)] px-6 py-3 font-bold text-white shadow-[0_10px_24px_rgba(132,56,51,0.18)] transition-colors hover:bg-[var(--atlas-red-dark)] disabled:cursor-wait disabled:opacity-70">
                        {formik.isSubmitting ? 'Enviando registro…' : 'Registrarse'}
                    </button>
                </form>
            </div>
        </section>
    )
}
