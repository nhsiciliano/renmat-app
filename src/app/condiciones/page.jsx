"use client"

import { PageIntro } from '@/components/AtlasPage'
import Conditions from '@/components/Conditions'
import Form from '@/components/Form'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const steps = [
    { title: 'Condiciones de registro', short: 'Condiciones' },
    { title: 'Formulario de registro', short: 'Formulario' },
]

function RegistrationProgress({ activeStep }) {
    return (
        <nav aria-label="Progreso del registro" className="mx-auto mb-14 max-w-[780px] sm:mb-16">
            <ol className="relative grid grid-cols-2 gap-4 before:absolute before:left-[25%] before:right-[25%] before:top-6 before:h-px before:bg-[var(--atlas-line)]">
                {steps.map((step, index) => {
                    const isActive = activeStep === index
                    const isComplete = activeStep > index
                    const state = isActive ? 'Actual' : isComplete ? 'Completado' : 'Pendiente'

                    return (
                        <li key={step.title} aria-current={isActive ? 'step' : undefined} className="relative flex flex-col items-center text-center">
                            <span className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 font-extrabold ${isActive ? 'border-[var(--atlas-red)] bg-[var(--atlas-red)] text-white' : isComplete ? 'border-[var(--atlas-teal)] bg-[var(--atlas-teal-soft)] text-[var(--atlas-ink)]' : 'border-[var(--atlas-line)] bg-white text-[var(--atlas-ink-soft)]'}`}>
                                {isComplete ? (
                                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg>
                                ) : index + 1}
                            </span>
                            <span className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--atlas-teal-dark)]">Paso {index + 1} · {state}</span>
                            <span className="mt-1 font-bold text-[var(--atlas-ink)]"><span className="sm:hidden">{step.short}</span><span className="hidden sm:inline">{step.title}</span></span>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

export default function CondicionesPage() {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep(1)
        requestAnimationFrame(() => document.getElementById('registration-form-title')?.focus())
    }

    const handlePrev = () => {
        setActiveStep(0)
        requestAnimationFrame(() => document.getElementById('conditions-title')?.focus())
    }

    return (
        <>
            <PageIntro eyebrow="Solicitud de participación" title="Registro profesional" description="Revisá las condiciones de participación y, una vez aceptadas, completá tus datos profesionales." />
            <section className="bg-[var(--atlas-paper)] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-[1440px]">
                    <RegistrationProgress activeStep={activeStep} />
                    <div className="rounded-2xl border border-[var(--atlas-line)] bg-white px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
                        <AnimatePresence initial={false}>
                            <motion.div key={activeStep} initial={{ y: 8 }} animate={{ y: 0 }} exit={{ y: -5 }} transition={{ duration: 0.24 }}>
                                {activeStep === 0 ? <Conditions /> : <Form />}
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-10 flex flex-col-reverse justify-center gap-3 border-t border-[var(--atlas-line)] pt-8 sm:flex-row">
                            {activeStep === 1 ? (
                                <button type="button" onClick={handlePrev} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[var(--atlas-line)] bg-white px-6 py-3 font-bold text-[var(--atlas-ink)] transition-colors hover:bg-[var(--atlas-blue-soft)]">
                                    Volver a las condiciones
                                </button>
                            ) : (
                                <button type="button" onClick={handleNext} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--atlas-red)] px-6 py-3 font-bold text-white shadow-[0_10px_24px_rgba(132,56,51,0.18)] transition-colors hover:bg-[var(--atlas-red-dark)]">
                                    Acepto las condiciones de registro
                                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-5-5 5 5-5 5" /></svg>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
