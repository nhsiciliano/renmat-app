import { ConstructionIcon } from "lucide-react";

export default function ScorePlasmicPage() {
  return (
    <div className="bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Recursos · 02
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Links de interés
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Sitios de referencia con información sobre MAT y herramientas
            clínicas de uso científico.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-20 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm">
            <ConstructionIcon className="size-5" />
          </div>
          <p className="sci mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            En construcción
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
            Próximamente información útil
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
            Estamos curando una selección de calculadoras, guías y links a
            recursos clínicos relevantes para MAT.
          </p>
        </div>
      </section>
    </div>
  );
}
