"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const tabs = [
    {
        label: 'Quiero registrarme',
        value: 'registro',
        desc: 'Para registrarte, seleccioná el botón de abajo. Primero accederás a las condiciones de registro y luego al formulario correspondiente.',
        button: 'Quiero registrarme',
        link: '/condiciones',
    },
    {
        label: 'Ya estoy registrado',
        value: 'registrado',
        desc: 'Si ya estás registrado y tenés tu usuario y contraseña de acceso a REDCap, seleccioná el botón de abajo.',
        button: 'Acceder a REDCap',
        link: 'https://redcap.anm.edu.ar/redcap/',
    },
]

export default function TabRegister() {
    const [activeTab, setActiveTab] = useState('registro')

    const handleKeyDown = (event, index) => {
        let nextIndex

        if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length
        if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length
        if (event.key === 'Home') nextIndex = 0
        if (event.key === 'End') nextIndex = tabs.length - 1
        if (nextIndex === undefined) return

        event.preventDefault()
        const nextTab = tabs[nextIndex].value
        setActiveTab(nextTab)
        document.getElementById(`tab-${nextTab}`)?.focus()
    }

    return (
        <div className='p-3'>
            <section className='rounded-lg border-2 border-gray-400 p-4 lg:p-5' aria-label='Acceso al registro'>
                <div role='tablist' aria-label='Opciones de acceso' className='grid grid-cols-1 gap-2 rounded-lg bg-blue-100 p-1 sm:grid-cols-2'>
                    {tabs.map(({ label, value }, index) => {
                        const isActive = activeTab === value

                        return (
                            <button
                                key={value}
                                id={`tab-${value}`}
                                type='button'
                                role='tab'
                                aria-selected={isActive}
                                aria-controls={`panel-${value}`}
                                tabIndex={isActive ? 0 : -1}
                                onClick={() => setActiveTab(value)}
                                onKeyDown={(event) => handleKeyDown(event, index)}
                                className={`min-h-11 rounded-md px-4 py-3 text-lg font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 lg:text-xl ${isActive ? 'bg-white text-blue-900 shadow-sm' : 'text-blue-950/80 hover:bg-blue-50 hover:text-blue-900'}`}
                            >
                                {label}
                            </button>
                        )
                    })}
                </div>
                {tabs.map(({ value, desc, button, link }) => (
                    <div
                        key={value}
                        id={`panel-${value}`}
                        role='tabpanel'
                        aria-labelledby={`tab-${value}`}
                        hidden={activeTab !== value}
                        tabIndex={0}
                        className='p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 lg:p-8'
                    >
                            <p className='text-center text-lg font-semibold text-red-800 lg:text-xl'>
                                {desc}
                            </p>
                            <div className='mt-8 flex items-center justify-center'>
                                <Link
                                    href={link}
                                    className='inline-flex min-h-11 items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold uppercase text-white shadow-md transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900'
                                >
                                    {button}
                                </Link>
                            </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
