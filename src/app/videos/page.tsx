import YouTubeVideo from "@/components/youtubevideo/YouTubeVideo";

const idVideo = [
  { id: 1, hush: "V8Ibbkru8EI" },
  { id: 2, hush: "SdBq6CVcYtA" },
  { id: 3, hush: "Jak9ybw8xnE" },
  { id: 4, hush: "vQee-VaSj-c" },
  { id: 5, hush: "cr0_4C3fcLw" },
  { id: 6, hush: "nTC3O_1g-0A" },
];

export default function VideosPage() {
  return (
    <div className="bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="sci text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Recursos · 03
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Videos sobre MAT
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Contenido audiovisual de nuestro canal de YouTube con información
            sobre MAT y temas relacionados.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {idVideo.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900"
            >
              <YouTubeVideo videoId={item.hush} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
