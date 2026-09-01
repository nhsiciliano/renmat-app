"use client"

import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const navigation = [
  { href: '/', label: 'Inicio' },
  { href: '/descripcion-mat', label: 'MAT' },
  { href: '/registro', label: 'Registro' },
  { href: '/bibliografia', label: 'Bibliografía' },
  { href: '/score-plasmic', label: 'Score Plasmic' },
  { href: '/videos', label: 'Videos' },
  { href: '/contacto', label: 'Contacto' },
]

function NavLink({ href, label, current, onClick, mobile = false }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={current ? 'page' : undefined}
      className={`relative inline-flex min-h-11 items-center rounded-md font-semibold transition-colors ${
        mobile
          ? 'w-full px-3 text-lg text-[var(--atlas-ink)] hover:bg-[var(--atlas-blue-soft)]'
          : 'px-1 text-[0.95rem] text-[var(--atlas-ink-soft)] hover:text-[var(--atlas-ink)]'
      }`}
    >
      {label}
      {!mobile && (
        <span
          aria-hidden="true"
          className={`absolute inset-x-1 bottom-1 h-0.5 rounded-full bg-[var(--atlas-red)] transition-transform duration-200 ${
            current ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        />
      )}
    </Link>
  )
}

export default function Navigate() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        requestAnimationFrame(() => menuButtonRef.current?.focus())
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  useEffect(() => {
    const closeAtDesktop = () => {
      if (window.innerWidth >= 1280) setOpen(false)
    }

    window.addEventListener('resize', closeAtDesktop)
    return () => window.removeEventListener('resize', closeAtDesktop)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--atlas-line)] bg-white/95 backdrop-blur-md">
      <nav aria-label="Navegación principal" className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="RegArMAT, ir al inicio"
          className="group inline-flex min-h-11 items-center rounded-md"
        >
          <Image
            src="/logoregarmat.png"
            alt="RegArMAT, Registro Argentino de Microangiopatías Trombóticas"
            width={1256}
            height={434}
            priority
            className="h-auto w-[190px] sm:w-[220px]"
          />
        </Link>

        <ul className="hidden items-center gap-5 xl:flex">
          {navigation.map((item) => (
            <li key={item.href} className="group">
              <NavLink {...item} current={pathname === item.href} />
            </li>
          ))}
        </ul>

        <Link
          href="/condiciones"
          className="hidden min-h-11 items-center justify-center rounded-xl bg-[var(--atlas-red)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(132,56,51,0.18)] transition-colors hover:bg-[var(--atlas-red-dark)] xl:inline-flex"
        >
          Solicitar registro
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--atlas-line)] text-[var(--atlas-ink)] transition-colors hover:bg-[var(--atlas-blue-soft)] xl:hidden"
        >
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          {open ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ y: -8, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ y: 0, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ y: -6, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-[var(--atlas-line)] bg-white px-5 pb-6 pt-3 shadow-[0_14px_30px_rgba(11,43,75,0.09)] xl:hidden"
          >
            <ul className="mx-auto grid max-w-[1440px] gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <NavLink {...item} current={pathname === item.href} mobile onClick={() => setOpen(false)} />
                </li>
              ))}
            </ul>
            <Link
              href="/condiciones"
              onClick={() => setOpen(false)}
              className="mx-auto mt-4 flex min-h-11 max-w-[1440px] items-center justify-center rounded-xl bg-[var(--atlas-red)] px-5 py-3 font-bold text-white transition-colors hover:bg-[var(--atlas-red-dark)]"
            >
              Solicitar registro
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
