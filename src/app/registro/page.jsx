"use client"

import Image from 'next/image'
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


const Page = () => {

    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className='bg-blue-50 px-10 py-5 lg:px-20 lg:py-10'>
            <h1 className='text-xl lg:text-2xl text-red-800 mx-5 my-3'>Información sobre el Registro</h1>
            <hr className='border-red-800 mx-5' />
            <br />
            <div className='ml-1 lg:ml-5 mt-3'>
                <Image
                    src='/registromat.png'
                    alt='Información de registro'
                    width={840}
                    height={340}
                />
            </div>
            <div className='px-3 mt-5'>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className='mb-4 px-4'>
                    <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className={`border-b-red-800 mb-5 transition-colors text-xl lg:text-2xl ${open === 1 ? "text-blue-900 hover:!text-blue-700" : ""
                            }`}
                    >
                        Objetivo General</AccordionHeader>
                    <AccordionBody className='mt-[-20px] text-lg leading-normal font-semibold'>
                        Nuestro objetivo es implementar un registro de pacientes con MAT, estableciendo una red de
                        profesionales (clínicos, nefrólogos, hematólogos, intensivistas, entre otros) de diversos centros de
                        salud en el país, tendiente a recopilar la información de datos epidemiológicos, datos clínicos y de
                        laboratorio que permitan caracterizar y describir una cohorte de pacientes afectados por estas
                        enfermedades raras en Argentina.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className='mb-4 px-4'>
                    <AccordionHeader
                        onClick={() => handleOpen(2)}
                        className={`border-b-red-800 mb-5 transition-colors text-xl lg:text-2xl ${open === 2 ? "text-blue-900 hover:!text-blue-700" : ""
                            }`}
                    >
                        Impacto del registro de pacientes
                    </AccordionHeader>
                    <AccordionBody className='mt-[-20px] text-lg leading-normal font-semibold'>
                        El diseño del estudio será <b>multicéntrico, observacional, retrospectivo y prospectivo</b>. Los sujetos
                        serán elegibles, después de dar <b><u>consentimiento informado</u></b>, por sí mismos o el representante legal
                        (los padres/tutores legales en caso de tratarse de un menor de edad).
                        <br />
                        El manejo de la información médica obtenida durante la entrevista clínica en nuestro país es
                        controlado (Ley de protección de datos, Ley N° 25.326). La información médica obtenida será
                        transferida a la base de datos clínicos y procesada para permitir que los resultados sean analizados
                        y publicados/reportados con propósitos científicos; en todos los casos siempre se hará
                        manteniendo estricta confidencialidad. Los datos evaluados potencialmente para ser reportados
                        no contendrán información sobre filiación (nombre, DNI, dirección, edad, etc.)
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className='mb-4 px-4'>
                    <AccordionHeader
                        onClick={() => handleOpen(3)}
                        className={`border-b-red-800 mb-5 transition-colors text-xl lg:text-2xl ${open === 3 ? "text-blue-900 hover:!text-blue-700" : ""
                            }`}
                    >
                        ¿Qué es REDCap?
                    </AccordionHeader>
                    <AccordionBody className='mt-[-20px] text-lg leading-normal font-semibold'>
                        El soporte informático utilizado para construir el registro será
                        la aplicación online REDCap.
                        <br />
                        REDCap es un programa de uso flexible y personalizable, con acceso seguro vía la creación
                        de una cuenta de usuario y contraseña personal por parte del profesional de salud. REDCap es una herramienta segura para el manejo
                        de datos sensibles que se propone recopilar en el registro de pacientes. Se mantendrá la
                        confidencialidad de toda la información de este estudio según pautas de la legislación nacional e
                        internacional vigente.
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
    )
}

export default Page
