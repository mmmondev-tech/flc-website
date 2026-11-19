import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { ProgramCards } from "@/components/program-cards";
import { ArrowRightIcon } from "@/components/icons";
import { defaultSiteContent } from "@/data/site-content";

export default function ServicesPage() {
  const content = defaultSiteContent;

  return (
    <main className="min-h-screen">
      <SiteHeader />

      <PageHero
        eyebrow="Programs"
        title="English Services"
        subtitle="Focused English programs for every learner stage — from daily communication to academic preparation and early-age learning."
        image="/images/gallery/classroom-activity.jpg"
      />

      <section className="mx-auto max-w-6xl space-y-20 px-5 py-20 md:px-6 md:py-24">
        {content.services.map((service, index) => (
          <article
            key={service.title}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <div
              className={`relative aspect-[6/5] overflow-hidden rounded-3xl bg-brand-50 shadow-xl shadow-brand-900/10 ring-1 ring-sand ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-display text-6xl font-semibold text-gold-200">
                0{index + 1}
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-brand-900 md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {service.description}
              </p>
              <Link
                href="/classes"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                See available classes
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-sand/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-24">
          <SectionHeading
            eyebrow="Ways to study"
            title="Schedules & fees"
            subtitle={<span className="mm block">{content.programsIntro}</span>}
          />
          <div className="mt-12">
            <ProgramCards programs={content.programs} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
