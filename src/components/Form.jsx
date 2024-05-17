"use client"

import React from 'react'
import { Formik, Form, Field, useFormik } from 'formik'
import * as yup from 'yup'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { Input, Button } from "@material-tailwind/react";

export default function FormSec() {

    const validationSchema = yup.object().shape({
        nombre: yup.string().required('El nombre es requerido'),
        apellido: yup.string().required('El apellido es requerido'),
        email: yup.string().email('Ingresa un correo válido').required('El correo es requerido'),
        telefono: yup.number().typeError('Por favor ingrese un número válido').required('El teléfono es requerido'),
        profesion: yup.string().required('La profesión es requerida'),
        provincia: yup.string().required('La provincia es requerida'),
        nombre: yup.string().required('La nombre es requerida'),
        instituto: yup.string().required('La institución donde trabaja es requerida'),
    });

    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            profesion: '',
            provincia: '',
            ciudad: '',
            instituto: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            try {
                emailjs
                    .send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLE_ID, values, process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
                    .then((result) => {
                        console.log(result.text);
                        Swal.fire({
                            title: 'Registro completo',
                            text: 'Tu registro fue exitoso. Nos pondremos en contacto contigo via email para facilitarte las credenciales de acceso a redcap.',
                            icon: 'success',
                            position: 'top',
                            confirmButtonColor: '#A50104',
                        });
                        setSubmitting(false);
                        resetForm();
                    }, (error) => {
                        console.log(error.text);
                    })
            } catch (error) {
                console.log(error, "Error de registro");
                alert("Hubo un problema con el registro, por favor intente de nuevo más tarde");
            }
        }
    })

    return (
        <div className='p-1 lg:p-6 mt-6 flex-column lg:flex gap-5'>
            <div className='p-1 text-xl text-center flex-column lg:flex-auto lg:w-32 m-1 lg:m-auto'>
                <h3>Por favor complete el formulario correspondiente con todos
                    los datos solicitados y haga click en registrarse.</h3>
                <br />
                <h3>Si tiene alguna duda con respecto a los datos de registro puede enviarnos
                    un email a registroargmat@gmail.com.
                </h3>
                <br />
                <h3><span className='text-red-900'>IMPORTANTE</span>: Todos los campos son requeridos para el registro.</h3>
                <br />
            </div>
            <div className='p-2 border-2 border-blue-800 rounded-md lg:flex-auto lg:w-64'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex-column lg:flex gap-2 p-1'>
                        <div className='w-full mb-2 lg:mb-0'>
                            <Input
                                id='nombre'
                                name='nombre'
                                label='Nombre'
                                color='blue'
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                                helperText={formik.touched.nombre && formik.errors.nombre}
                            />
                        </div>
                        <div className='w-full'>
                            <Input
                                id='apellido'
                                name='apellido'
                                label='Apellido'
                                color='blue'
                                value={formik.values.apellido}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.apellido && Boolean(formik.errors.apellido)}
                                helperText={formik.touched.apellido && formik.errors.apellido}
                            />
                        </div>
                    </div>
                    <div className='w-full p-1'>
                        <Input
                            id='email'
                            name='email'
                            label='Email'
                            color='blue'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </div>
                    <div className='flex-column lg:flex gap-2 p-1'>
                        <div className='w-full mb-2 lg:mb-0'>
                            <Input
                                id='telefono'
                                name='telefono'
                                label='Telefono'
                                color='blue'
                                value={formik.values.telefono}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.telefono && Boolean(formik.errors.telefono)}
                                helperText={formik.touched.telefono && formik.errors.telefono}
                            />
                        </div>
                        <div className='w-full'>
                            <Input
                                id='profesion'
                                name='profesion'
                                label='Profesion'
                                color='blue'
                                value={formik.values.profesion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.profesion && Boolean(formik.errors.profesion)}
                                helperText={formik.touched.profesion && formik.errors.profesion}
                            />
                        </div>
                    </div>
                    <div className='flex-column lg:flex gap-2 p-1'>
                        <div className='w-full mb-2 lg:mb-0'>
                            <Input
                                id='provincia'
                                name='provincia'
                                label='Provincia'
                                color='blue'
                                value={formik.values.provincia}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.provincia && Boolean(formik.errors.provincia)}
                                helperText={formik.touched.provincia && formik.errors.provincia}
                            />
                        </div>
                        <div className='w-full'>
                            <Input
                                id='ciudad'
                                name='ciudad'
                                label='Ciudad'
                                color='blue'
                                value={formik.values.ciudad}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.ciudad && Boolean(formik.errors.ciudad)}
                                helperText={formik.touched.ciudad && formik.errors.ciudad}
                            />
                        </div>
                    </div>
                    <div className='w-full p-1'>
                        <Input
                            id='instituto'
                            name='instituto'
                            label='Instituto'
                            color='blue'
                            value={formik.values.instituto}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.instituto && Boolean(formik.errors.instituto)}
                            helperText={formik.touched.instituto && formik.errors.instituto}
                        />
                    </div>
                    <div className='p-1'>
                        <Button className='w-full bg-red-800' type='submit'>Registrarse</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
