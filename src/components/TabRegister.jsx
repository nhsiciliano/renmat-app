"use client"

import React from 'react'
import Link from 'next/link';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";


export default function TabRegister() {
    const data = [
        {
            label: "Quiero Registrarme",
            value: "registro",
            desc: `Para poder registrarte debes hacer click en el botón aquí abajo y accederás
            a las condiciones de registro y el formulario correspondiente.`,
            button: `Quiero Registrarme`,
            link: `/condiciones`,
        },
        {
            label: "Ya estoy registrado",
            value: "registrado",
            desc: `En caso que ya estés registrado y tengas tu usuario y contraseña de acceso a
            RedCAP haz click en el botón aquí abajo.`,
            button: `Acceso RedCAP`,
            link: `https://redcap.anm.edu.ar/redcap/`,
        },
    ];
    return (
        <div className='p-3'>
            <Tabs id="custom-animation" value="registro" className='p-5 border-2 border-solid border-gray-400 rounded-lg'>
                <TabsHeader className='bg-red-800 bg-opacity-0'>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value} className='p-2 text-lg font-bold lg:text-xl'>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                    }}
                >
                    {data.map(({ value, desc, button, link }) => (
                        <TabPanel key={value} value={value} className='p-5 lg:p-8'>
                            <div className='text-center text-lg lg:text-xl text-red-800 font-semibold'>
                                {desc}
                            </div>
                            <div className='flex items-center justify-center mt-[30px]'>
                                <Link
                                    href={link}
                                    className='inline-flex min-h-11 items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold uppercase text-white shadow-md transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900'
                                >
                                    {button}
                                </Link>
                            </div>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    )
}
