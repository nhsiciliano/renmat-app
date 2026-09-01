"use client"

import { motion } from 'motion/react'
import Link from 'next/link'

const lineTransition = { duration: 1.1, ease: [0.22, 1, 0.36, 1] }

function NetworkFigure() {
  return (
    <figure className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-2xl bg-white shadow-[0_22px_55px_rgba(11,43,75,0.12)]">
      <div className="flex items-center justify-between border-b border-[var(--atlas-line)] px-5 py-4 sm:px-6">
        <p className="font-bold text-[var(--atlas-ink)]">Red nacional</p>
        <p className="text-sm font-semibold text-[var(--atlas-ink-soft)]">Representación conceptual</p>
      </div>

      <svg
        viewBox="0 0 580 500"
        role="img"
        aria-labelledby="network-title network-description"
        className="h-auto w-full"
      >
        <title id="network-title">Atlas conceptual de la red RegArMAT</title>
        <desc id="network-description">
          Nodos profesionales y centros de salud conectados con un registro estructurado para facilitar investigación y conocimiento científico.
        </desc>

        <rect width="580" height="500" fill="#f7fafc" />
        <path
          d="M293 38c31 12 51 39 47 70-3 24 13 42 8 66-6 31-31 45-25 79 4 25-9 44-5 70 3 20-12 35-20 53-9 20-5 47-22 69-8 11-19 18-28 17-12-2-7-20-14-33-10-20-4-42-1-62 4-24-10-40-6-64 4-25 18-43 14-68-4-27-21-47-12-76 9-23 31-37 31-65 0-26 12-50 33-56Z"
          fill="#eaf3f6"
          stroke="#cbdbe5"
          strokeWidth="2"
        />

        <g fill="none" strokeLinecap="round">
          <motion.path d="M116 122C190 120 230 135 290 181S393 248 471 219" stroke="#2f6fa3" strokeWidth="2.5" initial={{ pathLength: 0.2, opacity: 0.45 }} animate={{ pathLength: 1, opacity: 0.9 }} transition={lineTransition} />
          <motion.path d="M92 317c76-15 139-14 199 14s96 43 177 27" stroke="#3f8e95" strokeWidth="2.5" initial={{ pathLength: 0.2, opacity: 0.45 }} animate={{ pathLength: 1, opacity: 0.9 }} transition={{ ...lineTransition, delay: 0.12 }} />
          <motion.path d="M183 69c40 67 58 116 68 184s20 120 3 190" stroke="#a94b45" strokeWidth="2.2" initial={{ pathLength: 0.2, opacity: 0.35 }} animate={{ pathLength: 1, opacity: 0.8 }} transition={{ ...lineTransition, delay: 0.2 }} />
          <motion.path d="M428 93c-72 52-102 89-122 156s-36 116-92 163" stroke="#8fb8c1" strokeWidth="1.8" strokeDasharray="5 8" initial={{ pathLength: 0.2, opacity: 0.25 }} animate={{ pathLength: 1, opacity: 0.75 }} transition={{ ...lineTransition, delay: 0.25 }} />
        </g>

        <g>
          <circle cx="183" cy="69" r="7" fill="#a94b45" />
          <circle cx="116" cy="122" r="7" fill="#2f6fa3" />
          <circle cx="290" cy="181" r="10" fill="#0b2b4b" />
          <circle cx="428" cy="93" r="7" fill="#3f8e95" />
          <circle cx="471" cy="219" r="7" fill="#2f6fa3" />
          <circle cx="92" cy="317" r="7" fill="#3f8e95" />
          <circle cx="291" cy="331" r="10" fill="#0b2b4b" />
          <circle cx="468" cy="358" r="7" fill="#a94b45" />
          <circle cx="254" cy="443" r="7" fill="#3f8e95" />
        </g>

        <g fontFamily="inherit" fill="#0b2b4b">
          <rect x="35" y="171" width="164" height="54" rx="12" fill="#ffffff" />
          <text x="53" y="194" fontSize="13" fontWeight="700">Comunidad profesional</text>
          <text x="53" y="213" fontSize="12" fill="#36536c">Médicos y especialistas</text>

          <rect x="342" y="268" width="190" height="54" rx="12" fill="#ffffff" />
          <text x="360" y="291" fontSize="13" fontWeight="700">Registro estructurado</text>
          <text x="360" y="310" fontSize="12" fill="#36536c">Información clínica y de laboratorio</text>

          <rect x="44" y="382" width="183" height="54" rx="12" fill="#ffffff" />
          <text x="62" y="405" fontSize="13" fontWeight="700">Conocimiento científico</text>
          <text x="62" y="424" fontSize="12" fill="#36536c">Investigaciones y publicaciones</text>
        </g>
      </svg>

      <figcaption className="border-t border-[var(--atlas-line)] px-5 py-4 text-sm leading-relaxed text-[var(--atlas-ink-soft)] sm:px-6">
        Una red de profesionales y centros de salud de distintas provincias, articulada mediante RegArMAT.
      </figcaption>
    </figure>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(500px,1.1fr)] lg:gap-16">
        <motion.div
          initial={{ y: 14 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px]"
        >
          <h1 className="max-w-[14ch] break-normal text-balance text-[clamp(2.6rem,4.7vw,4.8rem)] font-extrabold leading-[1] tracking-[-0.035em] text-[var(--atlas-ink)]">
            Registro Argentino de Microangiopatías Trombóticas
          </h1>
          <p className="mt-7 max-w-[64ch] text-pretty text-xl leading-relaxed text-[var(--atlas-ink-soft)] sm:text-2xl">
            Un espacio abierto a la comunidad de profesionales que diagnostican, estudian, tratan y realizan el seguimiento de pacientes con MAT.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/condiciones"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--atlas-red)] px-6 py-3 font-bold text-white shadow-[0_10px_24px_rgba(132,56,51,0.2)] transition-colors hover:bg-[var(--atlas-red-dark)]"
            >
              Solicitar registro
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </Link>
            <Link
              href="#sobre-el-registro"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[var(--atlas-line)] bg-white px-6 py-3 font-bold text-[var(--atlas-ink)] transition-colors hover:bg-[var(--atlas-blue-soft)]"
            >
              Conocer el registro
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 18 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <NetworkFigure />
        </motion.div>
      </div>

      <dl className="mx-auto mt-16 grid max-w-[1440px] border-y border-[var(--atlas-line)] sm:grid-cols-3">
        <div className="py-5 sm:pr-7">
          <dt className="font-bold text-[var(--atlas-ink)]">Alcance</dt>
          <dd className="mt-1 text-[var(--atlas-ink-soft)]">Profesionales de todas las provincias argentinas.</dd>
        </div>
        <div className="border-t border-[var(--atlas-line)] py-5 sm:border-l sm:border-t-0 sm:px-7">
          <dt className="font-bold text-[var(--atlas-ink)]">Información</dt>
          <dd className="mt-1 text-[var(--atlas-ink-soft)]">Datos clínicos, de laboratorio y seguimiento.</dd>
        </div>
        <div className="border-t border-[var(--atlas-line)] py-5 sm:border-l sm:border-t-0 sm:pl-7">
          <dt className="font-bold text-[var(--atlas-ink)]">Plataforma</dt>
          <dd className="mt-1 text-[var(--atlas-ink-soft)]">Carga estructurada de información mediante REDCap.</dd>
        </div>
      </dl>
    </section>
  )
}
