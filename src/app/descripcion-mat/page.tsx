"use client";

import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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

export default function DescripcionMatPage() {
  return (
    <div className="bg-blue-50 px-10 py-5 lg:px-20 lg:py-10">
      <h2 className="text-xl lg:text-2xl text-red-800 mx-5 my-3">
        ¿Qué son las Microangiopatías Trombóticas?
      </h2>
      <hr className="border-red-800 mx-5" />
      <br />
      <div>
        <Card className="w-full bg-blue-50 border-0 shadow-none flex flex-col lg:flex-row gap-0 py-0">
          <CardHeader className="m-0 w-full lg:w-1/2 shrink-0 p-0">
            <Image
              src="/resmat.jpg"
              width={600}
              height={400}
              alt="Microangiopatía Trombótica"
              className="h-[300px] lg:h-full w-full object-cover rounded-lg"
            />
          </CardHeader>
          <CardContent className="py-6">
            <p className="text-lg text-black">
              Las Microangiopatías Trombóticas (MAT) representan un grupo de
              enfermedades caracterizadas por rasgos clínicos y
              anátomo-patológicos similares. Los síntomas clínicos incluyen
              anemia hemolítica microangiopática no-inmune con trombocitopenia
              sumado a injuria de órgano de variable severidad.
              <br />
              <br />
              Dentro de las MAT, se reconocen patologías asociadas a condiciones
              subyacentes como trasplantes (de órgano sólido o de células
              progenitoras hematopoyéticas), neoplasias, exposición a fármacos,
              infecciones, enfermedades autoinmunes, gestación, o hipertensión
              maligna.
              <br />
              <br />
              En los últimos años se ha visto un creciente número de desarrollos
              y metodologías dirigidas a caracterizar dos subtipos de MAT, esto
              es la Púrpura Trombocitopénica Trombótica (PTT) y el Síndrome
              Urémico Hemolítico Atípico (SUHa). PTT y SUH pueden afectar a
              población adulta y pediátrica, siendo algunas manifestaciones más
              específicas de un grupo etario en particular.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-5 p-3">
        <p className="text-lg">
          La PTT resulta de la deficiencia de actividad de la metalo y
          serinoproteasa ADAMTS13 (acrónimo de A Disintegrin And
          Metalloproteinase with a ThromboSpondin type 1 motif, member 13) la
          que puede ser hereditaria (por mutaciones en el gen ADAMTS13) o
          adquirida (por auto-anticuerpos dirigidos contra ADAMTS13). La PTT
          adquirida, que representa casi el 90% de los casos de PTT en adultos,
          es debida al desarrollo de autoanticuerpos dirigidos a ADAMTS13,
          siendo en su mayoría de tipo IgG. La PTT congénita resulta de
          mutaciones genéticas en ADAMTS13 y representa solo el 5-10% de los
          casos. Las propiedades de enlace y adhesivas del VWF dependen del
          tamaño de los multímeros que lo componen, siendo más adhesivos los de
          mayor tamaño. Ante la ausencia o severa disminución de la actividad
          de ADAMTS13, como ocurre en PTT, la proteólisis del VWF secretado no
          es adecuada, dando lugar a un exceso de multímeros extragrandes con
          la consecuente adhesión y agregación de plaquetas en sangre
          circulante que conducen a la obstrucción microvascular y sus
          consecuencias.
          <br />
          <br />
          El SUH es definido por la tríada de anemia hemolítica, trombocitopenia
          y <b>falla renal aguda</b> y se clasifica en típico y atípico. Las
          formas típicas (STEC-SUH), representan un 90% de los casos y son
          secundarias a infección por microorganismos productores de toxina
          Shiga (TxS) (Escherichia coli, Shigella). El 10% restante está
          constituido por las formas atípicas -<b>SUHa</b>- que es causada por
          la desregulación de la vía alternativa del complemento que lleva a su
          activación. El sistema del complemento es una herramienta esencial de
          la respuesta inmune innata y actúa como un puente entre la inmunidad
          innata y adquirida. La vía alternativa del complemento se encuentra
          constitutivamente activada y esta activación es regulada por
          proteínas específicas para asegurar la eliminación de patógenos y
          otras sustancias perjudiciales y evitar el daño de las células del
          huésped. La identificación de variantes en los genes de componentes
          de la vía alternativa del complemento ha sido clave en el
          entendimiento de los mecanismos de enfermedad. Además de las formas
          hereditarias, esta patología se caracteriza por presentar formas
          adquiridas asociadas a la presencia de autoanticuerpos anti-CFH.
          <br />
          <br />
          En el mundo, los datos epidemiológicos sobre PTT y SUHa son escasos y
          los cuadros actuales fueron descriptos en su mayoría en países
          desarrollados. Las incidencias de las distintas formas de MAT fueron
          esporádicamente reportadas y varían de un país a otro. La creación de
          un registro de pacientes con PTT y SUHa en Argentina representa una
          herramienta indispensable para poder integrar de manera global la
          información sobre estas enfermedades raras y poco descriptas en
          América Latina.
        </p>
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
