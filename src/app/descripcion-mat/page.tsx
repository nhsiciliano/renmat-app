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
        información de datos epidemiológicos, clínicos y de laboratorio que
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
        , por sí mismos o el representante legal (padres/tutores legales en
        caso de menores de edad).
        <br />
        <br />
        El manejo de la información médica obtenida durante la entrevista
        clínica en nuestro país es controlado (Ley de protección de datos, Ley
        N° 25.326). La información médica obtenida será transferida a la base
        de datos clínicos y procesada para permitir que los resultados sean
        analizados y publicados/reportados con propósitos científicos,
        manteniendo estricta confidencialidad. Los datos evaluados
        potencialmente para ser reportados no contendrán información sobre
        filiación (nombre, DNI, dirección, edad, etc.)
      </>
    ),
  },
  {
    value: "item-3",
    eyebrow: "03",
    title: "¿Qué es REDCap?",
    content: (
      <>
        El soporte informático utilizado para construir el registro es la
        aplicación online REDCap.
        <br />
        <br />
        REDCap es un programa de uso flexible y personalizable, con acceso
        seguro vía la creación de una cuenta de usuario y contraseña personal
        por parte del profesional de salud. Es una herramienta segura para el
        manejo de datos sensibles que se propone recopilar en el registro de
        pacientes. Se mantendrá la confidencialidad de toda la información
        según pautas de la legislación nacional e internacional vigente.
      </>
    ),
  },
];

export default function DescripcionMatPage() {
  return (
    <div className="bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Enfermedades · MAT
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            ¿Qué son las Microangiopatías Trombóticas?
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            Las MAT son un grupo de enfermedades raras que comparten rasgos
            clínicos y anátomo-patológicos: anemia hemolítica microangiopática
            no-inmune con trombocitopenia e injuria de órgano de severidad
            variable.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <Image
              src="/resmat.jpg"
              width={700}
              height={460}
              alt="Microangiopatía trombótica"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              Dentro de las MAT se reconocen patologías asociadas a condiciones
              subyacentes como trasplantes (de órgano sólido o de células
              progenitoras hematopoyéticas), neoplasias, exposición a fármacos,
              infecciones, enfermedades autoinmunes, gestación o hipertensión
              maligna.
            </p>
            <p>
              En los últimos años se ha visto un creciente número de desarrollos
              dirigidos a caracterizar dos subtipos de MAT: la{" "}
              <b className="text-slate-900">
                Púrpura Trombocitopénica Trombótica (PTT)
              </b>{" "}
              y el{" "}
              <b className="text-slate-900">
                Síndrome Urémico Hemolítico Atípico (SUHa)
              </b>
              . Ambas pueden afectar a población adulta y pediátrica, con
              manifestaciones específicas según el grupo etario.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="sci text-xs font-semibold uppercase tracking-wider text-slate-500">
              Patología · PTT
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
              Púrpura Trombocitopénica Trombótica
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              Resulta de la deficiencia de actividad de la metalo y
              serinoproteasa{" "}
              <span className="sci font-semibold text-slate-900">ADAMTS13</span>
              , que puede ser hereditaria (mutaciones en el gen ADAMTS13) o
              adquirida (autoanticuerpos dirigidos contra ADAMTS13). La PTT
              adquirida representa casi el 90% de los casos en adultos; la PTT
              congénita, sólo el 5–10%.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              Ante la severa disminución de ADAMTS13, la proteólisis del VWF
              secretado no es adecuada, dando lugar a un exceso de multímeros
              extragrandes con la consecuente adhesión y agregación de
              plaquetas, llevando a obstrucción microvascular.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="sci text-xs font-semibold uppercase tracking-wider text-slate-500">
              Patología · SUH
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
              Síndrome Urémico Hemolítico
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              Definido por la tríada: anemia hemolítica, trombocitopenia y{" "}
              <b className="text-slate-900">falla renal aguda</b>. Se clasifica
              en típico (STEC-SUH, 90% de los casos, por toxina Shiga) y atípico
              (<span className="sci font-semibold text-slate-900">SUHa</span>,
              10%) causado por desregulación de la vía alternativa del
              complemento.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              La identificación de variantes en los genes del complemento ha
              sido clave. Además de las formas hereditarias, existen adquiridas
              asociadas a la presencia de autoanticuerpos anti-CFH.
            </p>
          </article>
        </div>

        <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-sm leading-relaxed text-slate-600 sm:p-8">
          En el mundo, los datos epidemiológicos sobre PTT y SUHa son escasos
          y mayormente descriptos en países desarrollados. La creación de un
          registro de pacientes con PTT y SUHa en Argentina representa una
          herramienta indispensable para integrar globalmente la información
          sobre estas enfermedades raras en América Latina.
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Sobre el registro
          </h2>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="mt-6 border-t border-slate-200"
          >
            {items.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-b border-slate-200"
              >
                <AccordionTrigger className="group py-6 text-left text-lg font-semibold text-slate-900 hover:no-underline sm:text-xl">
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
