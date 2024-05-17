"use client"

import React, { useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export default function AccordionInfo() {

    const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className='px-3 mt-7'>
            <Accordion open={open === 1} icon={<Icon id={1} open={open}/>} className='mb-4 px-4'>
                <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className={`border-b-red-800 mb-5 transition-colors text-xl lg:text-2xl ${open === 1 ? "text-blue-900 hover:!text-blue-700" : ""
                        }`}
                >
                    Descripción del sitio</AccordionHeader>
                <AccordionBody className='mt-[-20px] text-lg leading-normal font-semibold'>
                    En este espacio usted encontrará la posibilidad de participar en el registro con la
                    inclusión de sus pacientes en el sistema RedCap. Desde aquí podrá recopilar información
                    detallada sobre parámetros de laboratorio y manifestaciones clínicas de sus pacientes,
                    su evolución, los eventos e intercurrencias
                    así como los nuevos tratamientos administrados, realizar estadísticas,
                    participar activamente de las investigaciones y publicaciones que se generen
                    desde el registro.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open}/>} className='mb-4 px-4'>
                <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className={`border-b-red-800 mb-5 transition-colors text-xl lg:text-2xl ${open === 2 ? "text-blue-900 hover:!text-blue-700" : ""
                        }`}
                >
                    ¿A quién está dirigido el registro?
                </AccordionHeader>
                <AccordionBody className='mt-[-20px] text-lg leading-normal font-semibold'>
                    Se invita a todos los profesionales, médicos, bioquímicos y especialistas
                    involucrados en el cuidado de los pacientes con MAT de todas las provincias
                    de la República Argentina.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open}/>} className='mb-4 px-4'>
                <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className={`border-b-red-800 mb-5 transition-colors text-xl lg:text-2xl ${open === 3 ? "text-blue-900 hover:!text-blue-700" : ""
                        }`}
                >
                    ¿Cómo hago para acceder al registro?
                </AccordionHeader>
                <AccordionBody className='mt-[-20px] text-lg leading-normal font-semibold'>
                    Más abajo podrá encontrar la opción <span className='font-bold text-red-800'>Quiero Registrarme</span> donde puede acceder a iniciar el proceso de registro en el
                    sistema de carga del mencionado estudio. Una vez completados los datos nos comunicaremos
                    con usted para hacerle llegar las credenciales de acceso correspondientes.
                </AccordionBody>
            </Accordion>
        </div>
    )
}
