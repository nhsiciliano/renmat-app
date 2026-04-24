import { MailIcon, PhoneIcon } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Comunicación · 01
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Contacto
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Ante cualquier duda sobre el registro o el acceso al sistema REDCap,
            podés comunicarte con nosotros por los siguientes medios.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex size-10 items-center justify-center rounded-full bg-brand/10 text-brand">
              <MailIcon className="size-5" />
            </div>
            <p className="sci mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Email
            </p>
            <a
              href="mailto:registroargmat@gmail.com"
              className="mt-1 block text-xl font-semibold text-slate-900 hover:text-brand"
            >
              registroargmat@gmail.com
            </a>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Para consultas sobre el registro, acceso y credenciales REDCap.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
              <PhoneIcon className="size-5" />
            </div>
            <p className="sci mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Teléfonos
            </p>
            <p className="sci mt-1 text-xl font-semibold text-slate-900">
              4809-1000 · 4809-1022
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Academia Nacional de Medicina — IIHEMA / IIE.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-sm leading-relaxed text-slate-600 sm:p-8">
          Una vez completado el registro mediante nuestra plataforma, nos
          pondremos en contacto por email para enviar los datos de acceso al
          sistema REDCap.
        </div>
      </section>
    </div>
  );
}
