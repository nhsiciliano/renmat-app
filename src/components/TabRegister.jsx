"use client"

import Link from 'next/link'
import { useState } from 'react'

const tabs = [
  {
    label: 'Quiero registrarme',
    value: 'registro',
    title: 'Solicitar participación en RegArMAT',
    desc: 'Primero accederá a las condiciones del registro y, luego de aceptarlas, podrá completar el formulario con sus datos profesionales.',
    button: 'Revisar condiciones y registrarme',
    link: '/condiciones',
  },
  {
    label: 'Ya estoy registrado',
    value: 'registrado',
    title: 'Ingresar al registro de pacientes',
    desc: 'Si ya recibió su usuario y contraseña, puede acceder directamente a REDCap para realizar la carga estructurada de información.',
    button: 'Acceder a REDCap',
    link: 'https://redcap.anm.edu.ar/redcap/',
  },
]

export default function TabRegister() {
  const [activeTab, setActiveTab] = useState('registro')

  const handleKeyDown = (event, index) => {
    let nextIndex

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = tabs.length - 1
    if (nextIndex === undefined) return

    event.preventDefault()
    const nextTab = tabs[nextIndex].value
    setActiveTab(nextTab)
    document.getElementById(`tab-${nextTab}`)?.focus()
  }

  return (
    <section aria-labelledby="access-title" className="focus-on-dark bg-[var(--atlas-ink)] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(520px,1.2fr)] lg:items-end lg:gap-16">
          <div>
            <h2 id="access-title" className="max-w-[12ch] text-balance text-[clamp(2.35rem,5vw,4.8rem)] font-extrabold leading-[1] tracking-[-0.035em]">
              Acceso claro, según su etapa
            </h2>
            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-[#c9dce8]">
              El registro está dirigido a profesionales de la salud. Elija si necesita solicitar credenciales o si ya cuenta con acceso a REDCap.
            </p>
          </div>

          <div className="focus-on-light rounded-2xl bg-white p-3 text-[var(--atlas-ink)] shadow-[0_24px_60px_rgba(3,17,29,0.28)] sm:p-4">
            <div role="tablist" aria-label="Opciones de acceso" className="grid gap-2 sm:grid-cols-2">
              {tabs.map(({ label, value }, index) => {
                const isActive = activeTab === value

                return (
                  <button
                    key={value}
                    id={`tab-${value}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${value}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTab(value)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className={`min-h-12 rounded-xl px-4 py-3 text-left font-bold transition-colors ${
                      isActive
                        ? 'bg-[var(--atlas-blue-soft)] text-[var(--atlas-ink)]'
                        : 'text-[var(--atlas-ink-soft)] hover:bg-[var(--atlas-paper)] hover:text-[var(--atlas-ink)]'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>

            {tabs.map((tab) => (
              <div
                key={tab.value}
                id={`panel-${tab.value}`}
                role="tabpanel"
                aria-labelledby={`tab-${tab.value}`}
                tabIndex={0}
                hidden={activeTab !== tab.value}
                className="px-2 pb-3 pt-8 sm:px-5 sm:pb-5 sm:pt-10"
              >
                <h3 className="max-w-[22ch] text-balance text-3xl font-extrabold leading-tight tracking-[-0.025em] sm:text-4xl">
                  {tab.title}
                </h3>
                <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-[var(--atlas-ink-soft)]">
                  {tab.desc}
                </p>
                <Link
                  href={tab.link}
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--atlas-red)] px-6 py-3 font-bold text-white shadow-[0_10px_24px_rgba(132,56,51,0.18)] transition-colors hover:bg-[var(--atlas-red-dark)]"
                >
                  {tab.button}
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14m-5-5 5 5-5 5" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
