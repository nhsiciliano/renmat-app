import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8 lg:py-28">
      <div>
        <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Registro Argentino · MAT
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Una red científica para el seguimiento de{" "}
          <span className="whitespace-nowrap text-brand">
            Microangiopatías Trombóticas
          </span>{" "}
          en Argentina.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          Espacio abierto a la comunidad de profesionales que diagnostican,
          estudian, tratan y realizan el seguimiento de pacientes con MAT.
          Centralizamos datos clínicos y de laboratorio para integrar la
          información de estas enfermedades raras en el país.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/condiciones">
            <Button
              size="lg"
              className="h-11 rounded-full bg-brand px-6 text-base font-medium text-white shadow-none hover:bg-brand/90"
            >
              Quiero Registrarme
              <ArrowRightIcon className="ml-1.5 size-4" />
            </Button>
          </Link>
          <Link
            href="/descripcion-mat"
            className="inline-flex h-11 items-center rounded-full px-5 text-base font-medium text-slate-900 hover:text-brand"
          >
            ¿Qué son las MAT?
          </Link>
        </div>

        <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Patologías
            </dt>
            <dd className="sci mt-1 text-2xl font-semibold text-slate-900">
              PTT · SUHa
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Plataforma
            </dt>
            <dd className="sci mt-1 text-2xl font-semibold text-slate-900">
              REDCap
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Alcance
            </dt>
            <dd className="mt-1 text-2xl font-semibold text-slate-900">
              Nacional
            </dd>
          </div>
        </dl>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-slate-100 to-white" />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src="/splashone.png"
            alt="Visualización científica de microangiopatías trombóticas"
            width={720}
            height={560}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
