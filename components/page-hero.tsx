import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  image: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900 text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-brand-950 via-brand-900/90 to-brand-900/40"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
        <div className="max-w-2xl animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 text-lg leading-8 text-slate-200">{subtitle}</p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-brand-900 md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-8 text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
