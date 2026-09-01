import { PageIntro, Reveal } from '@/components/AtlasPage'
import Image from 'next/image'

export default function DescripcionMatPage() {
    return (
        <>
            <PageIntro eyebrow="Conocimiento clínico" title="¿Qué son las Microangiopatías Trombóticas?" description="Un grupo de enfermedades con rasgos clínicos y anátomo-patológicos similares, cuyo conocimiento resulta central para el trabajo de la red." />
            <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[minmax(360px,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-20">
                    <Reveal className="lg:sticky lg:top-28">
                        <figure className="overflow-hidden rounded-2xl border border-[var(--atlas-line)] bg-[var(--atlas-paper)] shadow-[0_22px_55px_rgba(11,43,75,0.10)]">
                            <Image src="/resmat.jpg" width={1595} height={901} alt="Registro Argentino de Microangiopatías Trombóticas" className="h-auto w-full object-cover" priority />
                            <figcaption className="border-t border-[var(--atlas-line)] px-5 py-4 text-sm leading-relaxed text-[var(--atlas-ink-soft)]">Microangiopatías Trombóticas: registro clínico y científico.</figcaption>
                        </figure>
                    </Reveal>
                    <Reveal className="max-w-[76ch]">
                        <div className="space-y-6 text-lg leading-relaxed text-[var(--atlas-ink-soft)]">
                            <p>Las Microangiopatías Trombóticas (MAT) representan un grupo de enfermedades caracterizadas por rasgos clínicos y anátomo-patológicos similares. Los síntomas clínicos incluyen anemia hemolítica microangiopática no-inmune con trombocitopenia sumado a injuria de órgano de variable severidad.</p>
                            <p>Dentro de las MAT, se reconocen patologías asociadas a condiciones subyacentes como trasplantes (de órgano sólido o de células progenitoras hematopoyéticas), neoplasias, exposición a fármacos, infecciones, enfermedades autoinmunes, gestación, o hipertensión maligna.</p>
                            <p>En los últimos años se ha visto un creciente número de desarrollos y metodologías dirigidas a caracterizar dos subtipos de MAT, esto es la Púrpura Trombocitopénica Trombótica (PTT) y el Síndrome Urémico Hemolítico Atípico (SUHa). PTT y SUH pueden afectar a población adulta y pediátrica, siendo algunas manifestaciones más específicas de un grupo etario en particular.</p>
                        </div>
                        <div className="mt-12 border-t border-[var(--atlas-line)] pt-10">
                            <p className="text-sm font-bold uppercase tracking-[0.13em] text-[var(--atlas-teal)]">Púrpura Trombocitopénica Trombótica</p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.025em] text-[var(--atlas-ink)] sm:text-4xl">PTT y ADAMTS13</h2>
                            <p className="mt-5 text-lg leading-relaxed text-[var(--atlas-ink-soft)]">La PTT resulta de la deficiencia de actividad de la metalo y serinoproteasa ADAMTS13 (acrónimo de A Disintegrin And Metalloproteinase with a ThromboSpondin type 1 motif, member 13) la que puede ser hereditaria (por mutaciones en el gen ADAMTS13) o adquirida (por auto-anticuerpos dirigidos contra ADAMTS13). La PTT adquirida, que representa casi el 90% de los casos de PTT en adultos, es debida al desarrollo de autoanticuerpos dirigidos a ADAMTS13, siendo en su mayoría de tipo IgG. La PTT congénita resulta de mutaciones genéticas en ADAMTS13 y representa solo el 5-10% de los casos. Las propiedades de enlace y adhesivas del VWF dependen del tamaño de los multímeros que lo componen, siendo más adhesivos los de mayor tamaño. Ante la ausencia o severa disminución de la actividad de ADAMTS13, como ocurre en PTT, la proteólisis del VWF secretado no es adecuada, dando lugar a un exceso de multímeros extragrandes con la consecuente adhesión y agregación de plaquetas en sangre circulante que conducen a la obstrucción microvascular y sus consecuencias.</p>
                        </div>
                        <div className="mt-12 border-t border-[var(--atlas-line)] pt-10">
                            <p className="text-sm font-bold uppercase tracking-[0.13em] text-[var(--atlas-teal)]">Síndrome Urémico Hemolítico</p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.025em] text-[var(--atlas-ink)] sm:text-4xl">SUH típico y atípico</h2>
                            <p className="mt-5 text-lg leading-relaxed text-[var(--atlas-ink-soft)]">El SUH es definido por la tríada de anemia hemolítica, trombocitopenia y <strong>falla renal aguda</strong> y se clasifica en típico y atípico. Las formas típicas (STEC-SUH), representan un 90% de los casos y son secundarias a infección por microorganismos productores de toxina Shiga (TxS) (Escherichia coli, Shigella). El 10% restante está constituido por las formas atípicas -<strong>SUHa</strong>- que es causada por la desregulación de la vía alternativa del complemento que lleva a su activación. El sistema del complemento es una herramienta esencial de la respuesta inmune innata y actúa como un puente entre la inmunidad innata y adquirida. La vía alternativa del complemento se encuentra constitutivamente activada y esta activación es regulada por proteínas específicas para asegurar la eliminación de patógenos y otras sustancias perjudiciales y evitar el daño de las células del huésped. La identificación de variantes en los genes de componentes de la vía alternativa del complemento ha sido clave en el entendimiento de los mecanismos de enfermedad. Además de las formas hereditarias, esta patología se caracteriza por presentar formas adquiridas asociadas a la presencia de autoanticuerpos anti-CFH.</p>
                        </div>
                        <div className="mt-12 rounded-2xl border border-[var(--atlas-line)] bg-[var(--atlas-blue-soft)] p-6 sm:p-8">
                            <p className="text-sm font-bold uppercase tracking-[0.13em] text-[var(--atlas-teal)]">Registro nacional</p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.025em] text-[var(--atlas-ink)]">Información para Argentina</h2>
                            <p className="mt-5 text-lg leading-relaxed text-[var(--atlas-ink-soft)]">En el mundo, los datos epidemiológicos sobre PTT y SUHa son escasos y los cuadros actuales fueron descriptos en su mayoría en países desarrollados. Las incidencias de las distintas formas de MAT fueron esporádicamente reportadas y varían de un país a otro. La creación de un registro de pacientes con PTT y SUHa en Argentina representa una herramienta indispensable para poder integrar de manera global la información sobre estas enfermedades raras y poco descriptas en América Latina.</p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    )
}
