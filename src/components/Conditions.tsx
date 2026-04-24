const clauses = [
  {
    n: "01",
    content: (
      <>
        Como <b>PROFESIONAL RESPONSABLE</b>, procederé a garantizar la
        confidencialidad de la identidad de todos los pacientes, que incluye
        medidas técnicas y de organización adecuadas para proteger y resguardar
        los datos personales que hacen a su intimidad de todo dato sensible,
        cuando se carguen en los registros: historias clínicas, diagnósticos,
        acciones de prevención, promoción, estudios y tratamientos que
        establecen la enfermedad en cuanto a su tipo y clasificación.
      </>
    ),
  },
  {
    n: "02",
    content: (
      <>
        Al respecto, se aclara que la incorporación de esos datos a un{" "}
        <b>
          REGISTRO DE PACIENTES CON MICROANGIOPATIAS TROMBOTICAS EN ARGENTINA
        </b>{" "}
        al sistema REDCap, será contemplado dentro de una base informática,
        cuyo acceso, bajo ningún concepto, producirá alteración, comunicación
        o cualquier otra forma de procesamiento no autorizados que permita
        identificar al registro original; ya que esas bases informáticas
        vinculadas al estudio de la citada enfermedad, se encuentra amparadas
        por la Ley de Protección de datos Personales “habeas Data” Nº 25326 y
        por la Ley 26529 y su modificatoria Nº 26.742 sobre los Derechos del
        Paciente.
      </>
    ),
  },
  {
    n: "03",
    content: (
      <>
        Para el desarrollo de los estudios a los pacientes que padecen{" "}
        <b>MICROANGIOPATÍAS TROMBÓTICAS</b>, no se manipularán los datos
        sensibles de los pacientes cuando se incorporen a la plataforma de los
        registros online: los resultados de los estudios, exámenes, historias
        clínicas y demás tratamientos, diagnósticos, pruebas de laboratorios
        y/o patologías en general. La identidad de los pacientes se mantendrá
        reservada en el registro o ficha reporte, en poder del profesional
        tratante, que será también responsable de brindar la información
        garantizando la no identificación de los pacientes por parte del grupo
        que efectuará el análisis.
      </>
    ),
  },
  {
    n: "04",
    content: (
      <>
        Como <b>PROFESIONAL RESPONSABLE</b>, tendré en cuenta también que para
        incorporar al sistema los datos para su registración, con la reserva e
        identidad de los pacientes, deberé contar con el consentimiento
        informado de los mismos y los datos ingresados no modificarán las
        acciones clínicas ni terapéuticas.
      </>
    ),
  },
  {
    n: "05",
    content: (
      <>
        También se requerirá del consentimiento del o de los pacientes para
        que la información médica sea transferida a la base de datos clínicos
        y procesada para permitir que los resultados sean analizados y
        publicados con propósitos científicos, manteniendo estricta
        confidencialidad de los datos filiatorios, excepto que ellos autoricen
        para esto último.
      </>
    ),
  },
  {
    n: "06",
    content: (
      <>
        Esta investigación se encuentra comprendida en el punto 1.b de la Guía
        para Investigaciones en Salud Humana, del Ministerio de Salud — Nación
        (“investigaciones en salud humana que no representan riesgos para
        terceros”).
      </>
    ),
  },
  {
    n: "07",
    content: <>Aceptación de conocimiento del Protocolo de Estudio.</>,
  },
  {
    n: "08",
    content: (
      <>
        El Instituto de Investigaciones Hematológicas (IIHEMA), el Instituto
        de Investigaciones Epidemiológicas (IIE) y la Academia Nacional de
        Medicina se comprometen con el <b>PROFESIONAL RESPONSABLE</b> a:
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Garantizar la confidencialidad de los datos y tomar las medidas
            técnicas y organizacionales adecuadas para proteger los datos
            contra el acceso, alteración, comunicación o procesamiento no
            autorizados.
          </li>
          <li>
            Entregar de manera anual la base de los registros cargados, como
            así el resumen consolidado de la totalidad de la base.
          </li>
          <li>
            Figurar como autor de las publicaciones que se produzcan, previa
            aceptación.
          </li>
          <li>
            Colaborar en el análisis particular de la base de datos, propiedad
            del <b>PROFESIONAL RESPONSABLE</b>.
          </li>
        </ul>
      </>
    ),
  },
];

export default function Conditions() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Paso 1 · Consentimiento
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Condiciones de aceptación
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Condiciones para ingresar como profesional responsable al Registro de
          Pacientes con Microangiopatías Trombóticas en Argentina.
        </p>
      </div>

      <ol className="space-y-6 border-t border-slate-200">
        {clauses.map((clause) => (
          <li
            key={clause.n}
            className="grid grid-cols-[3rem_1fr] gap-4 border-b border-slate-200 pb-6 pt-6"
          >
            <span className="sci text-sm font-semibold text-brand">
              {clause.n}
            </span>
            <p className="text-base leading-relaxed text-slate-700">
              {clause.content}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
