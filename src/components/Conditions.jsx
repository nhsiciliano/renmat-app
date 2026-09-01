const clauses = [
    <p key="1">Como <strong>PROFESIONAL RESPONSABLE</strong>, procederé a garantizar la confidencialidad de la identidad de todos los pacientes, que incluyen medidas técnicas y de organización adecuadas para proteger y resguardar los datos personales que hacen a su intimidad de todo dato sensible, cuando se carguen en los registros: historias clínicas, diagnósticos, acciones de prevención, promoción, estudios y tratamientos que establecen la enfermedad en cuanto a su tipo y clasificación.</p>,
    <p key="2">Al respecto, se aclara que la incorporación de esos datos a un <strong>REGISTRO DE PACIENTES CON MICROANGIOPATIAS TROMBOTICAS EN ARGENTINA</strong> al sistema REDCap, será contemplado dentro de una base informática, cuyo acceso, bajo ningún concepto, producirá alteración, comunicación o cualquier otra forma de procesamiento no autorizados que permita identificar al registro original; ya que esas bases informáticas vinculadas al estudio de la citada enfermedad, se encuentra amparadas por la Ley de Protección de datos Personales “habeas Data” Nº 25326 y por la Ley 26529 y su modificatoria Nº 26.742 sobre los Derechos del Paciente en su Relación con los Profesionales e Instituciones de la Salud, cuyas promulgaciones se adecuan con la Carta Magna Suprema de la Constitución de la Nación Argentina plasmada en su artículo 75 con sus tratados internacionales.-</p>,
    <p key="3">Para el desarrollo de los estudios a los pacientes que padecen <strong>MICROANGIOPATÍAS TROMBÓTICAS</strong>, no se manipularán los datos sensibles de los pacientes cuando se incorporen a la plataforma de los registros online, los resultados de los estudios, exámenes, historias clínicas y demás tratamientos, diagnósticos, pruebas de laboratorios y/o patologías en general. La identidad de los pacientes se mantendrá reservadas en el registro o ficha reporte la que se encontrará en poder del profesional tratante y el que será también, responsable de brindar la información garantizando la no identificación de los pacientes por parte del grupo que efectuará el análisis de los datos.-</p>,
    <p key="4">Como PROFESIONAL RESPONSABLE, tendré en cuenta también que para incorporar al sistema los datos para su registración, con la reserva e identidad de los pacientes, deberé contar con el consentimiento informado de los mismos y los datos ingresados no modificarán las acciones “clínicas ni terapéuticas”.-</p>,
    <p key="5">También se requerirá del consentimiento del o de los pacientes para que la información médica sea transferida a la base de datos clínicos y procesada para permitir que los resultados sean analizados y publicados con propósitos científicos, manteniendo estricta confidencialidad de los datos filiatorios de los pacientes, excepto que ellos autoricen para esto último.-</p>,
    <p key="6">Esta investigación se encuentra comprendida en el punto 1. b de la Guía para Investigaciones en Salud Humana, del Ministerio de Salud – Nación “investigaciones en salud humana que no representan riesgos para terceros” …</p>,
    <p key="7">Aceptación de conocimiento del Protocolo de Estudio.</p>,
    <div key="8" className="space-y-5">
        <p>El Instituto de Investigaciones Hematológicas (IIHEMA), el Instituto de Investigaciones Epidemiológicas (IIE) y la Academia Nacional de Medicina se comprometen con el <strong>PROFESIONAL RESPONSABLE</strong> a:</p>
        <ul className="space-y-4 border-l border-[var(--atlas-line)] pl-5">
            <li><strong>8.1</strong> Garantizar la confidencialidad de los datos del <strong>PROFESIONAL RESPONSABLE</strong> y se tomarán las medidas técnicas y de organización adecuadas para proteger los datos contra el acceso, alteración, comunicación o cualquier otra forma de procesamiento no autorizado.</li>
            <li><strong>8.2</strong> Entregarle de manera anual la base de los registros cargados, como así el resumen consolidado de la totalidad de la base.</li>
            <li><strong>8.3</strong> Figurar como autor de las publicaciones que se produzcan, previa aceptación de la misma.</li>
            <li><strong>8.4</strong> Colaborar en el análisis en particular de la base de datos, propiedad del <strong>PROFESIONAL RESPONSABLE</strong>.</li>
        </ul>
    </div>,
]

export default function Conditions() {
    return (
        <section aria-labelledby="conditions-title" className="mx-auto max-w-[820px]">
            <div className="border-b border-[var(--atlas-line)] pb-8">
                <h2 id="conditions-title" tabIndex={-1} className="text-balance text-3xl font-extrabold leading-tight tracking-[-0.025em] text-[var(--atlas-ink)] sm:text-4xl">
                    Condiciones de aceptación para ingresar como profesional responsable al “Registro de pacientes con Microangiopatías Trombóticas en Argentina”
                </h2>
            </div>
            <ol className="mt-2 divide-y divide-[var(--atlas-line)]">
                {clauses.map((clause, index) => (
                    <li key={index} className="grid gap-4 py-7 text-lg leading-relaxed text-[var(--atlas-ink-soft)] sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-6 sm:py-8">
                        <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--atlas-blue-soft)] font-extrabold text-[var(--atlas-ink)]">{index + 1}</span>
                        <div>{clause}</div>
                    </li>
                ))}
            </ol>
        </section>
    )
}
