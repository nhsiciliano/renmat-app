"use client"

import { motion } from 'motion/react'

export function PageIntro({ title, description }) {
  return (
    <section className="border-b border-[var(--atlas-line)] px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-20">
      <motion.div
        initial={{ y: 12 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[1440px]"
      >
        <h1 className="max-w-[18ch] text-balance text-[clamp(2.5rem,5vw,4.7rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-[var(--atlas-ink)]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-[68ch] text-pretty text-lg leading-relaxed text-[var(--atlas-ink-soft)] sm:text-xl">
            {description}
          </p>
        )}
      </motion.div>
    </section>
  )
}

export function Reveal({ children, className = '' }) {
  return (
    <motion.div
      initial={{ y: 10 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  )
}
