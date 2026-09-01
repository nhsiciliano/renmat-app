import { PageIntro, Reveal } from '@/components/AtlasPage'
import YouTubeVideo from '@/components/youtubevideo/YouTubeVideo'

const page = () => {

    const idVideo = [
        {
            id: 1,
            hush: 'V8Ibbkru8EI',
        },
        {
            id: 2,
            hush: 'SdBq6CVcYtA',
        },
        {
            id: 3,
            hush: 'Jak9ybw8xnE',
        },
        {
            id: 4,
            hush: 'vQee-VaSj-c',
        },
        {
            id: 5,
            hush: 'cr0_4C3fcLw',
        },
        {
            id: 6,
            hush: 'nTC3O_1g-0A',
        },
    ]

    return (
        <>
            <PageIntro eyebrow="Biblioteca audiovisual" title="Videos sobre MAT" description="Aquí encontrarás videos de nuestro canal de YouTube con mucha información sobre MAT y temas relacionados." />
            <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <Reveal className="mx-auto max-w-[1440px]">
                    <div className="grid gap-x-6 gap-y-10 md:grid-cols-2">
                {
                    idVideo.map((item) => (
                        <article className="min-w-0" key={item.id}>
                            <div className="overflow-hidden rounded-2xl border border-[var(--atlas-line)] bg-[var(--atlas-ink)] shadow-[0_18px_45px_rgba(11,43,75,0.10)]">
                                <YouTubeVideo videoId={item.hush} title={`Video sobre Microangiopatías Trombóticas ${item.id}`} />
                            </div>
                            <div className="mt-4 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--atlas-blue-soft)] text-sm font-extrabold text-[var(--atlas-ink)]">{String(item.id).padStart(2, '0')}</span>
                                <h2 className="text-lg font-bold text-[var(--atlas-ink)]">Video sobre Microangiopatías Trombóticas {item.id}</h2>
                            </div>
                        </article>
                    ))
                }
                    </div>
                </Reveal>
            </section>
        </>
    )
}

export default page
