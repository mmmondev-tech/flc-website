import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { PhotoGallery } from "@/components/photo-gallery";
import { CheckIcon, SparkleIcon } from "@/components/icons";
import { defaultSiteContent } from "@/data/site-content";

export default function AboutPage() {
  const content = defaultSiteContent;

  return (
    <main className="min-h-screen">
      <SiteHeader />

      <PageHero
        eyebrow="About School"
        title={content.aboutTitle}
        subtitle="A student-centred English school in Hledan, Yangon, for children, teenagers and adults."
        image="/images/gallery/class-celebration.jpg"
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-6 md:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Our story" title="Building strong foundations for future success" />
          <p className="mt-6 leading-8 text-slate-600">{content.aboutParagraphOne}</p>
          <p className="mt-4 leading-8 text-slate-600">{content.aboutParagraphTwo}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/gallery/certificate-day.jpg"
              alt="Students at an FLC certificate ceremony"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/gallery/young-learners-class.jpg"
              alt="Young learners with their teacher"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/gallery/speaking-game.jpg"
              alt="Students playing a speaking game"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-sand/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:px-6 md:py-24 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl bg-brand-900 p-8 text-white md:p-10">
            <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500 text-brand-950">
                <SparkleIcon className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold">Our Vision</h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">{content.visionText}</p>
            </div>
          </article>

          <article className="rounded-3xl border border-sand bg-white p-8 shadow-sm md:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              <CheckIcon className="h-6 w-6" />
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold text-brand-900">Our Mission</h2>
            <ul className="mt-5 space-y-4">
              {content.missionItems.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="font-display text-xl font-semibold text-gold-600">
                    0{index + 1}
                  </span>
                  <span className="pt-1 leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-24">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from our school"
          subtitle="Classes, trips, sports days and celebrations with FLC students and teachers."
        />
        <div className="mt-10">
          <PhotoGallery photos={content.gallery} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
