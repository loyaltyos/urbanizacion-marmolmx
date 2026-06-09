type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionHeading({ eyebrow, title, description, inverted = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-black uppercase tracking-[0.22em] ${inverted ? "text-construction" : "text-steel"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-black leading-tight sm:text-4xl ${inverted ? "text-white" : "text-carbon"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${inverted ? "text-white/68" : "text-steel"}`}>{description}</p>
      ) : null}
    </div>
  );
}
