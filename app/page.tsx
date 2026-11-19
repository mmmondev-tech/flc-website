import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/page-hero";
import { ProgramCards } from "@/components/program-cards";
import { ClassCard } from "@/components/class-card";
import { PhotoGallery } from "@/components/photo-gallery";
import {
  ArrowRightIcon,
  AwardIcon,
  BookIcon,
  CheckIcon,
  PhoneIcon,
  UsersIcon,
  VideoIcon,
} from "@/components/icons";
import { classes } from "@/data/site-data";
import { defaultSiteContent } from "@/data/site-content";

const highlights = [
  {
    icon: BookIcon,
    value: "5 days",
    label: "of Main Class lessons every week",
  },
  {
    icon: UsersIcon,
    value: "8 max",
    label: "students in each private group",
  },
  {
    icon: VideoIcon,
    value: "3 courses",
    label: "taught live on Zoom",
  },
  {
    icon: AwardIcon,
    value: "Certificate",
    label: "of completion for private groups",
  },
];

export default function Home() {
  const content = defaultSiteContent;
  const phones = content.contact.phone.split(",").map((phone) => phone.trim());

  return (
    <main className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-900 text-white">
        <div className="dot-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
        <div
          className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-brand-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-48 -left-24 -z-10 h-[420px] w-[420px] rounded-full bg-gold-500/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-28 pt-14 md:px-6 md:pt-20 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Future Learning Center · Yangon
            </p>
            <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl">
              Nurturing learners,{" "}
              <span className="italic text-gold-400">building English</span>{" "}
              confidence
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              {content.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/classes"
                className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-brand-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400"
              >
                Explore classes
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Discover FLC
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              {["Main Class", "Private Group", "Online Zoom"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo collage */}
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="grid grid-cols-5 grid-rows-[repeat(6,52px)] gap-3 sm:grid-rows-[repeat(6,64px)]">
              <div className="relative col-span-3 row-span-4 overflow-hidden rounded-3xl ring-1 ring-white/15">
                <Image
                  src="/images/gallery/class-celebration.jpg"
                  alt="FLC students and teachers together in class"
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 row-span-3 overflow-hidden rounded-3xl ring-1 ring-white/15">
                <Image
                  src="/images/gallery/young-learners-celebration.jpg"
                  alt="Young learners at FLC"
                  fill
                  priority
                  sizes="(min-width: 1024px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 row-span-3 overflow-hidden rounded-3xl ring-1 ring-white/15">
                <Image
                  src="/images/gallery/sports-day.jpg"
                  alt="FLC sports day"
                  fill
                  sizes="(min-width: 1024px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-3 row-span-2 overflow-hidden rounded-3xl ring-1 ring-white/15">
                <Image
                  src="/images/gallery/riverside-trip.jpg"
                  alt="FLC students on a riverside trip"
                  fill
                  sizes="(min-width: 1024px) 30vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-brand-900 shadow-2xl sm:-left-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                <AwardIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold">A2 → B2 levels</p>
                <p className="text-xs text-slate-500">Placement test before you start</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="relative z-10 mx-auto -mt-14 max-w-6xl px-5 md:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-sand shadow-xl shadow-brand-900/10 ring-1 ring-sand lg:grid-cols-4">
          {highlights.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex flex-col gap-3 bg-white p-5 md:p-6">
              <Icon className="h-6 w-6 text-gold-600" />
              <p className="font-display text-2xl font-semibold text-brand-900 md:text-3xl">
                {value}
              </p>
              <p className="text-sm leading-6 text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-24">
        <SectionHeading
          eyebrow="FLC Programs"
          title="Choose the way you want to learn"
          subtitle={<span className="mm block">{content.programsIntro}</span>}
        />
        <div className="mt-12">
          <ProgramCards programs={content.programs} />
        </div>
      </section>

      {/* Why FLC */}
      <section className="bg-sand/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-6 md:py-24 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/gallery/classroom-activity.jpg"
                alt="An active, game-based English lesson at FLC"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-2 hidden w-48 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block md:w-56">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gallery/young-learners-class.jpg"
                  alt="Young learners with their teacher"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Why FLC"
              title="Caring teachers, active classes, real progress"
              subtitle={content.aboutParagraphOne}
            />
            <ul className="mt-8 space-y-4">
              {content.missionItems.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-900 text-gold-400">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="pt-1 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-brand-700"
            >
              More about our school
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Class Center"
            title="Ongoing & upcoming classes"
          />
          <Link
            href="/classes"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            View all classes
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((item) => (
            <ClassCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-6 md:pb-24">
        <SectionHeading
          eyebrow="Life at FLC"
          title="More than a classroom"
          subtitle="Trips, sports days, celebrations and certificate ceremonies — learning English together is more fun."
        />
        <div className="mt-10">
          <PhotoGallery photos={content.gallery.slice(0, 8)} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 md:px-6 md:pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-900 px-6 py-14 text-white md:px-14">
          <Image
            src="/images/gallery/excursion-trip.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-950 via-brand-900/90 to-brand-900/60" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                Ready to start your English journey?
              </h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Visit us in Hledan or call — we&apos;ll help you take the placement
                test and pick the right class.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              {phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 font-bold text-brand-950 transition hover:bg-gold-400"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {phone}
                </a>
              ))}
              <Link
                href="/contact"
                className="text-center text-sm font-semibold text-gold-400 hover:text-gold-200 md:text-right"
              >
                All contact options →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
