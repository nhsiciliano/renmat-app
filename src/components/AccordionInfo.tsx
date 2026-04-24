"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    eyebrow: "01",
    title: "Descripción del sitio",
    content: (
      <>
        En este espacio usted encontrará la posibilidad de participar en el
        registro con la inclusión de sus pacientes en el sistema REDCap. Desde
        aquí podrá recopilar información detallada sobre parámetros de
        laboratorio y manifestaciones clínicas de sus pacientes, su evolución,
        los eventos e intercurrencias así como los nuevos tratamientos
        administrados, realizar estadísticas, participar activamente de las
        investigaciones y publicaciones que se generen desde el registro.
      </>
    ),
  },
  {
    value: "item-2",
    eyebrow: "02",
    title: "¿A quién está dirigido el registro?",
    content: (
      <>
        Se invita a todos los profesionales, médicos, bioquímicos y
        especialistas involucrados en el cuidado de los pacientes con MAT de
        todas las provincias de la República Argentina.
      </>
    ),
  },
  {
    value: "item-3",
    eyebrow: "03",
    title: "¿Cómo acceder al registro?",
    content: (
      <>
        Más abajo podrá encontrar la opción{" "}
        <span className="font-semibold text-brand">Quiero Registrarme</span>{" "}
        donde puede iniciar el proceso de registro en el sistema de carga del
        mencionado estudio. Una vez completados los datos nos comunicaremos con
        usted para hacerle llegar las credenciales de acceso correspondientes.
      </>
    ),
  },
];

export default function AccordionInfo() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Cómo funciona
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Información esencial del registro
        </h2>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="border-t border-slate-200"
      >
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border-b border-slate-200"
          >
            <AccordionTrigger className="group py-6 text-left text-xl font-semibold text-slate-900 hover:no-underline sm:text-2xl">
              <span className="flex items-baseline gap-4">
                <span className="sci text-xs font-semibold text-slate-400">
                  {item.eyebrow}
                </span>
                <span className="transition-colors group-hover:text-brand group-data-[state=open]:text-brand">
                  {item.title}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-6 pl-10 pr-2 text-base leading-relaxed text-slate-600">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
