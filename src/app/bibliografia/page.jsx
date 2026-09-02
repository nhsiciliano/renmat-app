import { ArrowIcon, PageIntro, Reveal } from '@/components/AtlasPage'
import Link from 'next/link'

const page = () => {
    const papers = [
        {
            id: 1,
            underTitle: 'J Thromb Haemost. 2020 Oct;18(10):2486-2495. doi: 10.1111/jth.15006. Epub 2020 Sep 11',
            title: 'ISTH guidelines for the diagnosis of thrombotic thrombocytopenic purpura',
            authors: 'X Long Zheng 1 , Sara K Vesely  2 , Spero R Cataland 3 , Paul Coppo 4 ,Brian Geldziler  5 , Alfonso Iorio 6 7 , Masanori Matsumoto  8 , Reem A Mustafa  9 , Menaka Pai 7 , Gail Rock 10 , Lene Russell 11 , Rawan Tarawneh 12 ,Julie Valdes 13 ,Flora Peyvandi 1415',
            link: 'https://pubmed.ncbi.nlm.nih.gov/32914582'
        },
        {
            id: 2,
            underTitle: 'J Clin Med. 2021 Feb 2;10(3):536. doi: 10.3390/jcm10030536.',
            title: 'Thrombotic Thrombocytopenic Purpura: Pathophysiology, Diagnosis, and Management',
            authors: 'Senthil Sukumar 1 , Bernhard Lämmle 2 3 4 , Spero R Cataland 1',
            link: 'https://pubmed.ncbi.nlm.nih.gov/33540569'
        },
        {
            id: 3,
            underTitle: 'Blood Res.2019 Sep; 54(3): 218 228.Published online 2019 Sep 25. doi:10.5045/br.2019.54.3.218',
            title: 'Prognostic utility of ADAMTS13 activity for the atypical hemolytic uremic syndrome (aHUS) and comparison of complement serology between aHUS and thrombotic thrombocytopenic purpura',
            authors: 'Jisu Oh, 1  Doyeun Oh , 1  Seon Ju Lee , 2  Jeong Oh Kim , 2 Nam Keun Kim, 2 So Young Chong, 1 Ji Young Huh, 3 Ross I. Baker, 4',
            link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6779945'
        },
        {
            id: 4,
            underTitle: 'Br J Haematol.2019 Aug;186(3):490-498.doi: 10.1111/bjh.15932.Epub 2019 May 26.',
            title: 'Utilizing a PLASMIC score-based approach in the management of suspected immune thrombotic thrombocytopenic purpura: a cost minimization analysis within the Harvard TMA Research Collaborative',
            authors: 'Vivek A Upadhyay 1 2 , Benjamin P Geisler  1 2 ,  Lova Sun  1 2 , Lynne Uhl  2 3 , Richard M Kaufman  2 4 , Christopher Stowell  2 5 , Robert S Makar  2 5 , Pavan K Bendapudi  2 5 6 7',
            link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6642029'
        },
        {
            id: 5,
            underTitle: 'Int J Lab Hematol. 2022 Sep; 44(Suppl 1): 101–113.Published online 2022 Sep 8. doi: 10.1111/ijlh.13954',
            title: 'Diagnosis and treatment of thrombotic microangiopathy',
            authors: 'Gemma L. Thompson  1 , 2  and David Kavanagh  1 , 2',
            link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9544907'
        },
        {
            id: 6,
            underTitle: 'Can J Kidney Health Dis. 2021 Apr 22;8:20543581211008707. doi: 10.1177/20543581211008707.',
            title: 'Making the Correct Diagnosis in Thrombotic Microangiopathy: A Narrative Review',
            authors: 'Philip A. McFarlane, 1  Martin Bitzan, 2,3  Catherine Broome, 4  Dana Baran, 5  Jocelyn Garland, 6  Louis-Philippe Girard, 7   Kuljit Grewal , 8  Anne-Laure Lapeyraque, 9  Christopher Jordan Patriquin, 10  Katerina Pavenski, 11  and Christoph Licht 12',
            link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8072824'
        },
        {
            id: 7,
            underTitle: 'Res Pract Thromb Haemost. 2022 Mar; 6(3): e12708.',
            title: 'Thrombotic microangiopathies: An illustrated review',
            authors: 'Mouhamed Yazan Abou‐Ismail, MD,  1  Sargam Kapoor , MD,  2  Divyaswathi Citla Sridhar , MD,  3  Lalitha Nayak , MD,  4  and Sanjay Ahuja, MD, MSc  5',
            link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9027164'
        },
        {
            id: 8,
            underTitle: 'Clin J Am Soc Nephrol. 2021 Jun;16(6):942-956. doi: 10.2215/CJN.11830720.',
            title: 'Inherited Kidney Complement Diseases',
            authors: 'Mathieu Lemaire,  1 , 2 , 3  Damien Noone ,  1 , 3  Anne-Laure Lapeyraque ,  4 , 5  Christoph Licht ,  1 , 2, 3  and Véronique Frémeaux-Bacchi  6',
            link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8216622'
        },
        {
            id: 9,
            underTitle: 'Clin Kidney J. 2021 Apr; 14(4): 1055–1066.',
            title: 'Thrombotic microangiopathies assessment: mind the complement',
            authors: 'Miquel Blasco, 1,2  Elena Guillén, 1  Luis F Quintana, 1,2  Adriana Garcia-Herrera, 3  GastónPiñeiro, 1,2  Esteban Poch, 1,2   Enric Carreras , 4,5  Josep M Campistol, 1,2  Maribel Diaz-Ricart, 5,6  and Marta Palomo 4,5,6',
            link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8023218'
        },
        {
            id: 10,
            underTitle: 'Am J Hematol . 2023 May:98 Suppl 4:S44-S56.  doi: 10.1002/ajh.26854.',
            title: 'Complement-driven hemolytic uremic syndrome',
            authors: 'Juliette Leon  1 2 3 4 , Marie-Bénédicte LeStang  1 4 , Rebecca Sberro-Soussan  1 4 , Aude Servais  1 4 ,  Dany Anglicheau  1 2 4 , Véronique Frémeaux-Bacchi  5 ,  Julien Zuber  1 2 3 4',
            link: 'https://pubmed.ncbi.nlm.nih.gov/36683290'
        },
    ]
    return (
        <>
            <PageIntro title="Bibliografía disponible para consultar" description="A continuación brindamos bibliografía con sus correspondientes enlaces de acceso para que puedan ser consultados de manera completa:" />
            <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <Reveal className="mx-auto max-w-[1180px]">
                    <ol className="border-t border-[var(--atlas-line)]">
                {papers.map((item) => (
                    <li className="border-b border-[var(--atlas-line)]" key={item.id}>
                        <article className="grid gap-5 py-8 sm:grid-cols-[64px_minmax(0,1fr)] sm:py-10 lg:grid-cols-[80px_minmax(0,1fr)_auto] lg:items-start lg:gap-8">
                            <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--atlas-blue-soft)] text-lg font-extrabold text-[var(--atlas-ink)]">{String(item.id).padStart(2, '0')}</span>
                            <div className="min-w-0">
                                <p className="max-w-[65ch] text-sm font-semibold leading-relaxed text-[var(--atlas-teal-dark)]">{item.underTitle}</p>
                                <h2 className="mt-3 max-w-[34ch] text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[var(--atlas-ink)] sm:text-3xl">{item.title}</h2>
                                <p className="mt-4 max-w-[65ch] leading-relaxed text-[var(--atlas-ink-soft)]">{item.authors}</p>
                            </div>
                            <Link href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Acceder a “${item.title}” (se abre en una nueva pestaña)`} className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-xl border border-[var(--atlas-line)] bg-white px-5 py-3 font-bold text-[var(--atlas-ink)] transition-colors hover:bg-[var(--atlas-blue-soft)] sm:col-start-2 lg:col-start-auto">
                                Acceder
                                <ArrowIcon />
                            </Link>
                        </article>
                    </li>
                ))}
                    </ol>
                </Reveal>
            </section>
        </>
    )
}

export default page
