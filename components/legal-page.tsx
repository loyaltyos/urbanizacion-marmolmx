type LegalSection = {
  title: string;
  body: string;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, description, sections }: LegalPageProps) {
  return (
    <section className="bg-zincpanel py-14 sm:py-18">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
          <div className="bg-carbon px-5 py-8 text-white sm:px-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-construction">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
              {description}
            </p>
          </div>
          <div className="grid gap-5 p-5 sm:p-8">
            {sections.map((section) => (
              <article className="rounded-md border border-black/10 bg-zincpanel p-5" key={section.title}>
                <h2 className="text-lg font-black text-carbon">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{section.body}</p>
              </article>
            ))}
            <div className="rounded-md border border-construction/40 bg-construction/10 p-5 text-sm font-semibold leading-7 text-carbon">
              Estos textos son una base operativa para revision legal, fiscal y de pasarela de pago antes de produccion.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
