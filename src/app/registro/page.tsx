"use client";

import Image from "next/image";

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
    title: "Objetivo General",
    content: (
      <>
        Implementar un registro de pacientes con MAT, estableciendo una red de
        profesionales (clínicos, nefrólogos, hematólogos, intensivistas, entre
        otros) de diversos centros de salud en el país, tendiente a recopilar
        la información de datos epidemiológicos, clínicos y de laboratorio que
        permitan caracterizar y describir una cohorte de pacientes afectados
        por estas enfermedades raras en Argentina.
      </>
    ),
  },
  {
    value: "item-2",
    eyebrow: "02",
    title: "Impacto del registro de pacientes",
    content: (
      <>
        El diseño del estudio es{" "}
        <b>multicéntrico, observacional, retrospectivo y prospectivo</b>. Los
        sujetos serán elegibles, después de dar{" "}
        <b>
          <u>consentimiento informado</u>
        </b>
        , por sí mismos o su representante legal.
        <br />
        <br />
        El manejo de la información médica obtenida durante la entrevista
        clínica en nuestro país es controlado (Ley de protección de datos, Ley
        N° 25.326). La información será transferida a la base de datos
        clínicos y procesada para permitir que los resultados sean analizados
        y publicados/reportados con propósitos científicos, manteniendo
        estricta confidencialidad. Los datos evaluados no contendrán
        información sobre filiación (nombre, DNI, dirección, edad, etc.)
      </>
    ),
  },
  {
    value: "item-3",
    eyebrow: "03",
    title: "¿Qué es REDCap?",
    content: (
      <>
        REDCap es el soporte informático utilizado para construir el registro.
        Es un programa flexible y personalizable, con acceso seguro vía la
        creación de una cuenta de usuario y contraseña personal. Herramienta
        segura para el manejo de datos sensibles. La confidencialidad de la
        información se mantiene según pautas de la legislación nacional e
        internacional vigente.
      </>
    ),
  },
];

export default function RegistroPage() {
  return (
    <div className="bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Información · Registro
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Información sobre el Registro
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            Conocé el alcance, los objetivos y el funcionamiento del Registro
            Argentino de Microangiopatías Trombóticas.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src="/registromat.png"
            alt="Información de registro"
            width={1100}
            height={440}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-12">
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
        </div>
      </section>
    </div>
  );
}
