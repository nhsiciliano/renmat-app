"use client"

import AtlasDisclosure from '@/components/AtlasDisclosure'
import { PageIntro, Reveal } from '@/components/AtlasPage'
import Image from 'next/image'

const items = [
    {
        title: 'Objetivo General',
        content: (
            <p>
                Nuestro objetivo es implementar un registro de pacientes con MAT, estableciendo una red de profesionales (clínicos, nefrólogos, hematólogos, intensivistas, entre otros) de diversos centros de salud en el país, tendiente a recopilar la información de datos epidemiológicos, datos clínicos y de laboratorio que permitan caracterizar y describir una cohorte de pacientes afectados por estas enfermedades raras en Argentina.
            </p>
        ),
    },
    {
        title: 'Impacto del registro de pacientes',
        content: (
            <div className="space-y-4">
                <p>El diseño del estudio será <strong>multicéntrico, observacional, retrospectivo y prospectivo</strong>. Los sujetos serán elegibles, después de dar <strong><u>consentimiento informado</u></strong>, por sí mismos o el representante legal (los padres/tutores legales en caso de tratarse de un menor de edad).</p>
                <p>El manejo de la información médica obtenida durante la entrevista clínica en nuestro país es controlado (Ley de protección de datos, Ley N° 25.326). La información médica obtenida será transferida a la base de datos clínicos y procesada para permitir que los resultados sean analizados y publicados/reportados con propósitos científicos; en todos los casos siempre se hará manteniendo estricta confidencialidad. Los datos evaluados potencialmente para ser reportados no contendrán información sobre filiación (nombre, DNI, dirección, edad, etc.)</p>
            </div>
        ),
    },
    {
        title: '¿Qué es REDCap?',
        content: (
            <div className="space-y-4">
                <p>El soporte informático utilizado para construir el registro será la aplicación online REDCap.</p>
                <p>REDCap es un programa de uso flexible y personalizable, con acceso seguro vía la creación de una cuenta de usuario y contraseña personal por parte del profesional de salud. REDCap es una herramienta segura para el manejo de datos sensibles que se propone recopilar en el registro de pacientes. Se mantendrá la confidencialidad de toda la información de este estudio según pautas de la legislación nacional e internacional vigente.</p>
            </div>
        ),
    },
]

export default function RegistroPage() {

    return (
        <>
            <PageIntro
                title="Información sobre el Registro"
                description="Objetivos, alcance y soporte tecnológico de una red orientada a comprender mejor las Microangiopatías Trombóticas en Argentina."
            />
            <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[minmax(320px,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-20">
                    <Reveal>
                        <figure className="overflow-hidden rounded-2xl border border-[var(--atlas-line)] bg-[var(--atlas-paper)] shadow-[0_22px_55px_rgba(11,43,75,0.10)]">
                            <Image src="/registromat.png" alt="Información sobre el Registro Argentino de Microangiopatías Trombóticas" width={840} height={340} className="h-auto w-full" priority />
                            <figcaption className="border-t border-[var(--atlas-line)] px-5 py-4 text-sm leading-relaxed text-[var(--atlas-ink-soft)]">
                                Registro Argentino de Microangiopatías Trombóticas.
                            </figcaption>
                        </figure>
                    </Reveal>
                    <Reveal>
                        <AtlasDisclosure items={items} label="Información sobre el registro" />
                    </Reveal>
                </div>
            </section>
        </>
    )
}
