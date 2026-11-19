import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { defaultSiteContent } from "@/data/site-content";

export default function TeachersPage() {
  const content = defaultSiteContent;

  return (
    <main className="min-h-screen">
      <SiteHeader />

      <PageHero
        eyebrow="Faculty"
        title="Meet our teachers"
        subtitle="Strong teaching practice, practical communication methods and personal support for every learner."
        image="/images/gallery/school-assembly.jpg"
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.teachers.map((teacher) => (
            <article
              key={teacher.name}
              className="group overflow-hidden rounded-3xl border border-sand bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-linear-to-b from-brand-100 to-brand-50">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-950/90 via-brand-950/40 to-transparent p-6 pt-20">
                  <h2 className="font-display text-2xl font-semibold text-white">
                    {teacher.name}
                  </h2>
                  <p className="mt-1 inline-flex rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-brand-950">
                    {teacher.role}
                  </p>
                </div>
              </div>
              <p className="p-6 leading-7 text-slate-600">{teacher.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
