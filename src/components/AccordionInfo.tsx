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
    title: "Descripción del sitio",
    content: (
      <>
        En este espacio usted encontrará la posibilidad de participar en el
        registro con la inclusión de sus pacientes en el sistema RedCap. Desde
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
    title: "¿Cómo hago para acceder al registro?",
    content: (
      <>
        Más abajo podrá encontrar la opción{" "}
        <span className="font-bold text-red-800">Quiero Registrarme</span> donde
        puede acceder a iniciar el proceso de registro en el sistema de carga
        del mencionado estudio. Una vez completados los datos nos comunicaremos
        con usted para hacerle llegar las credenciales de acceso
        correspondientes.
      </>
    ),
  },
];

export default function AccordionInfo() {
  return (
    <div className="px-3 mt-7">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full"
      >
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
  );
}
