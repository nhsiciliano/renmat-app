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
    title: "Objetivo General",
    content: (
      <>
        Nuestro objetivo es implementar un registro de pacientes con MAT,
        estableciendo una red de profesionales (clínicos, nefrólogos,
        hematólogos, intensivistas, entre otros) de diversos centros de salud en
        el país, tendiente a recopilar la información de datos epidemiológicos,
        datos clínicos y de laboratorio que permitan caracterizar y describir
        una cohorte de pacientes afectados por estas enfermedades raras en
        Argentina.
      </>
    ),
  },
  {
    value: "item-2",
    title: "Impacto del registro de pacientes",
    content: (
      <>
        El diseño del estudio será{" "}
        <b>multicéntrico, observacional, retrospectivo y prospectivo</b>. Los
        sujetos serán elegibles, después de dar{" "}
        <b>
          <u>consentimiento informado</u>
        </b>
        , por sí mismos o el representante legal (los padres/tutores legales en
        caso de tratarse de un menor de edad).
        <br />
        El manejo de la información médica obtenida durante la entrevista
        clínica en nuestro país es controlado (Ley de protección de datos, Ley
        N° 25.326). La información médica obtenida será transferida a la base
        de datos clínicos y procesada para permitir que los resultados sean
        analizados y publicados/reportados con propósitos científicos; en todos
        los casos siempre se hará manteniendo estricta confidencialidad. Los
        datos evaluados potencialmente para ser reportados no contendrán
        información sobre filiación (nombre, DNI, dirección, edad, etc.)
      </>
    ),
  },
  {
    value: "item-3",
    title: "¿Qué es REDCap?",
    content: (
      <>
        El soporte informático utilizado para construir el registro será la
        aplicación online REDCap.
        <br />
        REDCap es un programa de uso flexible y personalizable, con acceso
        seguro vía la creación de una cuenta de usuario y contraseña personal
        por parte del profesional de salud. REDCap es una herramienta segura
        para el manejo de datos sensibles que se propone recopilar en el
        registro de pacientes. Se mantendrá la confidencialidad de toda la
        información de este estudio según pautas de la legislación nacional e
        internacional vigente.
      </>
    ),
  },
];

export default function RegistroPage() {
  return (
    <div className="bg-blue-50 px-10 py-5 lg:px-20 lg:py-10">
      <h2 className="text-xl lg:text-2xl text-red-800 mx-5 my-3">
        Información sobre el Registro
      </h2>
      <hr className="border-red-800 mx-5" />
      <br />
      <div className="ml-1 lg:ml-5 mt-3">
        <Image
          src="/registromat.png"
          alt="Información de registro"
          width={840}
          height={340}
        />
      </div>
      <div className="px-3 mt-5">
        <Accordion type="single" collapsible defaultValue="item-1">
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="mb-4 px-4"
            >
              <AccordionTrigger className="text-xl lg:text-2xl text-left font-semibold text-blue-900 hover:text-blue-700 data-[state=closed]:text-black">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-normal font-semibold">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
