import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";

const tools = [
  { href: "/bibliografia", label: "Bibliografía" },
  { href: "/score-plasmic", label: "Score Plasmic" },
  { href: "/videos", label: "Videos" },
];

const site = [
  { href: "/descripcion-mat", label: "Descripción MAT" },
  { href: "/registro", label: "Registro" },
  { href: "/condiciones", label: "Condiciones" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="h-1 w-full bg-brand" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="text-2xl font-semibold tracking-tight">
              <span className="text-slate-900">RegAr</span>
              <span className="text-brand">MAT</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              Registro Argentino de Microangiopatías Trombóticas. Red
              colaborativa de profesionales para el seguimiento de pacientes
              con MAT en la República Argentina.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Sitio
              </h3>
              <ul className="mt-4 space-y-2">
                {site.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-slate-700 transition-colors hover:text-brand"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Herramientas
              </h3>
              <ul className="mt-4 space-y-2">
                {tools.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-slate-700 transition-colors hover:text-brand"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <MailIcon className="mt-0.5 size-4 text-slate-400" />
                <a
                  href="mailto:registroargmat@gmail.com"
                  className="hover:text-brand"
                >
                  registroargmat@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <PhoneIcon className="mt-0.5 size-4 text-slate-400" />
                <span className="sci text-sm">4809-1000 / 4809-1022</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} RegArMAT — Registro Argentino de
            Microangiopatías Trombóticas.
          </p>
          <p className="sci text-[11px] uppercase tracking-wider">
            IIHEMA · IIE · Academia Nacional de Medicina
          </p>
        </div>
      </div>
    </footer>
  );
}
