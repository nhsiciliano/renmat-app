"use client"

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

function NetworkFigure() {
  return (
    <figure className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-2xl bg-white shadow-[0_22px_55px_rgba(11,43,75,0.12)]">
      <div className="flex items-center justify-between border-b border-[var(--atlas-line)] px-5 py-4 sm:px-6">
        <p className="font-bold text-[var(--atlas-ink)]">Red nacional</p>
        <p className="text-sm font-semibold text-[var(--atlas-ink-soft)]">Representación conceptual</p>
      </div>

      <Image
        src="/hero-country-arg.jpg"
        alt="Mapa de Argentina conectado por nodos que representan la red nacional de investigación de RegArMAT."
        width={1256}
        height={1560}
        sizes="(min-width: 1024px) 515px, calc(100vw - 40px)"
        priority
        className="mx-auto h-auto max-h-[560px] w-auto max-w-full object-contain lg:max-h-[640px]"
      />

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
