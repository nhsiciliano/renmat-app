import { PageIntro, Reveal } from '@/components/AtlasPage'

const page = () => {
    return (
        <>
            <PageIntro eyebrow="Canal institucional" title="Contacto" description="Ante cualquier duda con respecto al registro o al acceso al sistema REDCap podés comunicarte con nosotros mediante los siguientes medios:" />
            <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <Reveal className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(520px,1.2fr)] lg:items-start lg:gap-20">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.13em] text-[var(--atlas-teal)]">Datos de contacto</p>
                        <h2 className="mt-3 max-w-[14ch] text-3xl font-extrabold tracking-[-0.025em] text-[var(--atlas-ink)] sm:text-4xl">Estamos disponibles para acompañar el acceso</h2>
                    </div>
                    <div>
                        <address className="grid gap-4 not-italic sm:grid-cols-2">
                            <a className="group min-h-36 rounded-2xl border border-[var(--atlas-line)] bg-[var(--atlas-paper)] p-6 transition-colors hover:bg-[var(--atlas-blue-soft)]" href="mailto:registroargmat@gmail.com">
                                <span className="block text-sm font-bold uppercase tracking-[0.13em] text-[var(--atlas-teal)]">Correo electrónico</span>
                                <span className="mt-5 block break-all text-lg font-bold text-[var(--atlas-ink)] underline decoration-[var(--atlas-line)] underline-offset-4 group-hover:decoration-[var(--atlas-ink)]">registroargmat@gmail.com</span>
                            </a>
                            <div className="min-h-36 rounded-2xl border border-[var(--atlas-line)] bg-[var(--atlas-paper)] p-6">
                                <span className="block text-sm font-bold uppercase tracking-[0.13em] text-[var(--atlas-teal)]">Teléfonos</span>
                                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-lg font-bold text-[var(--atlas-ink)]">
                                    <a className="inline-flex min-h-11 items-center underline decoration-[var(--atlas-line)] underline-offset-4 hover:decoration-[var(--atlas-ink)]" href="tel:+541148091000">4809-1000</a>
                                    <a className="inline-flex min-h-11 items-center underline decoration-[var(--atlas-line)] underline-offset-4 hover:decoration-[var(--atlas-ink)]" href="tel:+541148091022">4809-1022</a>
                                </div>
                            </div>
                        </address>
                        <p className="mt-8 max-w-[68ch] border-l-2 border-[var(--atlas-red)] pl-5 text-lg leading-relaxed text-[var(--atlas-ink-soft)]">Recordá que, una vez completado el registro mediante nuestra plataforma, nos pondremos en contacto por correo electrónico para enviar los datos de acceso al sistema REDCap.</p>
                    </div>
                </Reveal>
            </section>
        </>
    )
}

export default page
