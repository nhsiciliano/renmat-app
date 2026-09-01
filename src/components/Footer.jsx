import Image from 'next/image'
import Link from 'next/link'

const exploreLinks = [
  { href: '/descripcion-mat', label: 'Descripción de MAT' },
  { href: '/registro', label: 'Información del registro' },
  { href: '/bibliografia', label: 'Bibliografía' },
  { href: '/score-plasmic', label: 'Score Plasmic' },
  { href: '/videos', label: 'Videos' },
]

const accessLinks = [
  { href: '/condiciones', label: 'Solicitar registro' },
  { href: 'https://redcap.anm.edu.ar/redcap/', label: 'Acceder a REDCap' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="focus-on-dark bg-[var(--atlas-footer)] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-white/20 pb-14 md:grid-cols-[minmax(0,1.2fr)_minmax(180px,0.6fr)_minmax(180px,0.6fr)] md:gap-10">
          <div>
            <Link href="/" aria-label="RegArMAT, ir al inicio" className="inline-flex min-h-11 items-center rounded-xl bg-white p-3">
              <Image
                src="/logoregarmat.png"
                alt="RegArMAT, Registro Argentino de Microangiopatías Trombóticas"
                width={1256}
                height={434}
                className="h-auto w-full max-w-[320px]"
              />
            </Link>
            <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-[#c9dce8]">
              Registro Argentino de Microangiopatías Trombóticas. Un espacio abierto a la comunidad médica y científica de Argentina.
            </p>
            <a
              href="mailto:registroargmat@gmail.com"
              className="mt-6 inline-flex min-h-11 items-center rounded-md text-lg font-bold text-white underline decoration-[#d9827c] decoration-2 underline-offset-8 transition-colors hover:text-[#dceeed]"
            >
              registroargmat@gmail.com
            </a>
          </div>

          <nav aria-label="Explorar RegArMAT">
            <h2 className="text-sm font-bold uppercase tracking-[0.13em] text-[#9fc1d4]">Explorar</h2>
            <ul className="mt-4 grid gap-1">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-11 items-center rounded-md text-[#eef6fa] underline-offset-4 transition-colors hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Acceso al registro">
            <h2 className="text-sm font-bold uppercase tracking-[0.13em] text-[#9fc1d4]">Acceso</h2>
            <ul className="mt-4 grid gap-1">
              {accessLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-11 items-center rounded-md text-[#eef6fa] underline-offset-4 transition-colors hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-sm text-[#a9c7d7] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} RegArMAT</p>
          <p>Registro Argentino de Microangiopatías Trombóticas</p>
        </div>
      </div>
    </footer>
  )
}
