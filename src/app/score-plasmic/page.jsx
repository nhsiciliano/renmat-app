import { PageIntro, Reveal } from '@/components/AtlasPage'

const page = () => {
    return (
        <>
            <PageIntro eyebrow="Recursos científicos" title="Links de interés" description="Aquí podrás encontrar links a distintos sitios de interés con información sobre MAT y algunas herramientas virtuales de uso científico." />
            <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <Reveal className="mx-auto max-w-[960px]">
                    <div className="overflow-hidden rounded-2xl border border-[var(--atlas-line)] bg-[var(--atlas-blue-soft)] px-6 py-16 text-center sm:px-12 sm:py-20">
                        <svg aria-hidden="true" viewBox="0 0 180 110" className="mx-auto h-auto w-44 text-[var(--atlas-teal)]" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 72c28-29 46-44 73-37s36 43 77 19" strokeDasharray="5 7" />
                            <circle cx="15" cy="72" r="6" fill="currentColor" />
                            <circle cx="88" cy="35" r="9" fill="var(--atlas-ink)" stroke="none" />
                            <circle cx="165" cy="54" r="6" fill="var(--atlas-red)" stroke="none" />
                        </svg>
                        <p className="mt-8 text-sm font-bold uppercase tracking-[0.13em] text-[var(--atlas-teal)]">En preparación</p>
                        <h2 className="mx-auto mt-3 max-w-[18ch] text-balance text-3xl font-extrabold tracking-[-0.025em] text-[var(--atlas-ink)] sm:text-4xl">Próximamente información útil</h2>
                    </div>
                </Reveal>
            </section>
        </>
    )
}

export default page
