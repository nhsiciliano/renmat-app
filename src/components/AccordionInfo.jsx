"use client"

import { useState } from 'react'

const items = [
  {
    title: 'Descripción del sitio',
    content: (
      <p>
        En este espacio usted encontrará la posibilidad de participar en el registro con la inclusión de sus pacientes en el sistema REDCap. Desde aquí podrá recopilar información detallada sobre parámetros de laboratorio y manifestaciones clínicas, su evolución, los eventos e intercurrencias, así como los nuevos tratamientos administrados; realizar estadísticas y participar activamente de las investigaciones y publicaciones que se generen desde el registro.
      </p>
    ),
  },
  {
    title: '¿A quién está dirigido el registro?',
    content: (
      <p>
        Se invita a todos los profesionales, médicos, bioquímicos y especialistas involucrados en el cuidado de pacientes con MAT de todas las provincias de la República Argentina.
      </p>
    ),
  },
  {
    title: '¿Cómo hago para acceder?',
    content: (
      <p>
        En la sección de acceso podrá elegir <strong>Quiero registrarme</strong> para iniciar el proceso. Una vez completados los datos, el equipo se comunicará con usted para hacerle llegar las credenciales correspondientes.
      </p>
    ),
  },
]

export default function AccordionInfo() {
  const [open, setOpen] = useState(0)

  return (
    <section id="sobre-el-registro" aria-labelledby="about-title" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[minmax(300px,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
        <div>
          <h2 id="about-title" className="max-w-[13ch] text-balance text-[clamp(2.25rem,4.5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-[var(--atlas-ink)]">
            Una red para comprender mejor las MAT en Argentina
          </h2>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-[var(--atlas-ink-soft)]">
            RegArMAT articula información epidemiológica, clínica y de laboratorio para facilitar análisis, investigaciones y publicaciones científicas.
          </p>
        </div>

        <div className="border-t border-[var(--atlas-line)]">
          {items.map((item, index) => {
            const isOpen = open === index
            const panelId = `about-panel-${index}`
            const buttonId = `about-button-${index}`

            return (
              <div key={item.title} className="border-b border-[var(--atlas-line)]">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="group flex min-h-16 w-full items-center justify-between gap-6 rounded-md py-5 text-left text-xl font-bold text-[var(--atlas-ink)] transition-colors hover:text-[var(--atlas-blue)] sm:text-2xl"
                  >
                    <span>{item.title}</span>
                    <span aria-hidden="true" className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--atlas-blue-soft)] text-[var(--atlas-ink)] transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="max-w-[72ch] pb-7 pr-2 text-lg leading-relaxed text-[var(--atlas-ink-soft)] sm:pr-14"
                >
                  {item.content}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
