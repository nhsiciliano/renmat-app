import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

type Paper = {
  id: number;
  underTitle: string;
  title: string;
  authors: string;
  link: string;
};

const papers: Paper[] = [
  {
    id: 1,
    underTitle:
      "J Thromb Haemost. 2020 Oct;18(10):2486-2495. doi: 10.1111/jth.15006. Epub 2020 Sep 11",
    title:
      "ISTH guidelines for the diagnosis of thrombotic thrombocytopenic purpura",
    authors:
      "X Long Zheng, Sara K Vesely, Spero R Cataland, Paul Coppo, Brian Geldziler, Alfonso Iorio, Masanori Matsumoto, Reem A Mustafa, Menaka Pai, Gail Rock, Lene Russell, Rawan Tarawneh, Julie Valdes, Flora Peyvandi",
    link: "https://pubmed.ncbi.nlm.nih.gov/32914582",
  },
  {
    id: 2,
    underTitle: "J Clin Med. 2021 Feb 2;10(3):536. doi: 10.3390/jcm10030536.",
    title:
      "Thrombotic Thrombocytopenic Purpura: Pathophysiology, Diagnosis, and Management",
    authors: "Senthil Sukumar, Bernhard Lämmle, Spero R Cataland",
    link: "https://pubmed.ncbi.nlm.nih.gov/33540569",
  },
  {
    id: 3,
    underTitle:
      "Blood Res. 2019 Sep;54(3):218-228. doi:10.5045/br.2019.54.3.218",
    title:
      "Prognostic utility of ADAMTS13 activity for the atypical hemolytic uremic syndrome (aHUS) and comparison of complement serology between aHUS and thrombotic thrombocytopenic purpura",
    authors:
      "Jisu Oh, Doyeun Oh, Seon Ju Lee, Jeong Oh Kim, Nam Keun Kim, So Young Chong, Ji Young Huh, Ross I. Baker",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6779945",
  },
  {
    id: 4,
    underTitle:
      "Br J Haematol. 2019 Aug;186(3):490-498. doi: 10.1111/bjh.15932.",
    title:
      "Utilizing a PLASMIC score-based approach in the management of suspected immune thrombotic thrombocytopenic purpura",
    authors:
      "Vivek A Upadhyay, Benjamin P Geisler, Lova Sun, Lynne Uhl, Richard M Kaufman, Christopher Stowell, Robert S Makar, Pavan K Bendapudi",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6642029",
  },
  {
    id: 5,
    underTitle:
      "Int J Lab Hematol. 2022 Sep;44(Suppl 1):101–113. doi: 10.1111/ijlh.13954",
    title: "Diagnosis and treatment of thrombotic microangiopathy",
    authors: "Gemma L. Thompson, David Kavanagh",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9544907",
  },
  {
    id: 6,
    underTitle:
      "Can J Kidney Health Dis. 2021 Apr 22;8:20543581211008707. doi: 10.1177/20543581211008707.",
    title:
      "Making the Correct Diagnosis in Thrombotic Microangiopathy: A Narrative Review",
    authors:
      "Philip A. McFarlane, Martin Bitzan, Catherine Broome, Dana Baran, Jocelyn Garland, Louis-Philippe Girard, Kuljit Grewal, Anne-Laure Lapeyraque, Christopher Jordan Patriquin, Katerina Pavenski, Christoph Licht",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8072824",
  },
  {
    id: 7,
    underTitle: "Res Pract Thromb Haemost. 2022 Mar;6(3):e12708.",
    title: "Thrombotic microangiopathies: An illustrated review",
    authors:
      "Mouhamed Yazan Abou-Ismail, Sargam Kapoor, Divyaswathi Citla Sridhar, Lalitha Nayak, Sanjay Ahuja",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9027164",
  },
  {
    id: 8,
    underTitle:
      "Clin J Am Soc Nephrol. 2021 Jun;16(6):942-956. doi: 10.2215/CJN.11830720.",
    title: "Inherited Kidney Complement Diseases",
    authors:
      "Mathieu Lemaire, Damien Noone, Anne-Laure Lapeyraque, Christoph Licht, Véronique Frémeaux-Bacchi",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8216622",
  },
  {
    id: 9,
    underTitle: "Clin Kidney J. 2021 Apr;14(4):1055–1066.",
    title: "Thrombotic microangiopathies assessment: mind the complement",
    authors:
      "Miquel Blasco, Elena Guillén, Luis F Quintana, Adriana Garcia-Herrera, Gastón Piñeiro, Esteban Poch, Enric Carreras, Josep M Campistol, Maribel Diaz-Ricart, Marta Palomo",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8023218",
  },
  {
    id: 10,
    underTitle:
      "Am J Hematol. 2023 May;98 Suppl 4:S44-S56. doi: 10.1002/ajh.26854.",
    title: "Complement-driven hemolytic uremic syndrome",
    authors:
      "Juliette Leon, Marie-Bénédicte LeStang, Rebecca Sberro-Soussan, Aude Servais, Dany Anglicheau, Véronique Frémeaux-Bacchi, Julien Zuber",
    link: "https://pubmed.ncbi.nlm.nih.gov/36683290",
  },
];

function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            {lede}
          </p>
        )}
      </div>
    </header>
  );
}

export default function BibliografiaPage() {
  return (
    <div className="bg-slate-50/40">
      <PageHeader
        eyebrow="Recursos · 01"
        title="Bibliografía"
        lede="Selección de papers de referencia para consulta, con acceso directo a la fuente original."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ul className="grid gap-4 sm:grid-cols-2">
          {papers.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300"
            >
              <p className="sci text-[11px] leading-relaxed text-slate-500">
                {item.underTitle}
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.authors}
              </p>
              <div className="mt-auto pt-5">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand/80"
                >
                  Acceder al paper
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
