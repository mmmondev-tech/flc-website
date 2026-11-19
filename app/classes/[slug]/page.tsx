import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClassDetailTabs } from "@/components/class-detail-tabs";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StatusBadge } from "@/components/class-card";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  PhoneIcon,
  BookIcon,
} from "@/components/icons";
import { classes } from "@/data/site-data";
import { defaultSiteContent } from "@/data/site-content";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return classes.map((item) => ({ slug: item.slug }));
}

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = classes.find((classItem) => classItem.slug === slug);

  if (!item) {
    notFound();
  }

  const phones = defaultSiteContent.contact.phone
    .split(",")
    .map((phone) => phone.trim());

  const facts = [
    { icon: CalendarIcon, label: "Start date", value: item.startDate },
    { icon: ClockIcon, label: "Duration", value: item.duration },
    { icon: BookIcon, label: "Level", value: item.level },
  ];

  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pb-28 pt-10 md:px-6">
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to classes
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <StatusBadge status={item.status} />
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-slate-200">
              {item.level}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            {item.title}
          </h1>
          <p className="mt-4 flex items-center gap-2 text-slate-300">
            <ClockIcon className="h-4 w-4 text-gold-400" />
            {item.schedule}
          </p>
        </div>
      </section>

      <section className="relative mx-auto -mt-20 grid max-w-6xl gap-8 px-5 pb-20 md:px-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-brand-50 shadow-xl shadow-brand-900/10 ring-1 ring-sand">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-contain"
            />
          </div>

          <ClassDetailTabs item={item} />

          <section
            id="join"
            className="scroll-mt-24 rounded-3xl border border-sand bg-white p-6 shadow-sm md:p-8"
          >
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              How to join this class
            </h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                "Click Enroll Now",
                "Complete the payment",
                "Send the screenshot to admin via Telegram or WhatsApp",
              ].map((step, index) => (
                <li key={step} className="rounded-2xl bg-brand-50/70 p-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-900 font-display font-semibold text-gold-400">
                    {index + 1}
                  </span>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-sand bg-white p-6 shadow-xl shadow-brand-900/10">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
                Course fee
              </p>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                Seats available
              </span>
            </div>
            <p className="mt-2 font-display text-4xl font-semibold text-brand-900">
              {item.fee}
            </p>

            <dl className="mt-6 space-y-4 border-t border-slate-100 pt-6">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="font-semibold text-brand-900">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <a
              href="#join"
              className="mt-6 flex justify-center rounded-full bg-gold-500 px-4 py-3.5 text-sm font-bold text-brand-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400"
            >
              Enroll Now
            </a>
            <div className="mt-4 space-y-1 text-center text-sm text-slate-500">
              <p>Questions? Call us</p>
              {phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-1.5 font-semibold text-brand-700 hover:text-brand-500"
                >
                  <PhoneIcon className="h-3.5 w-3.5" />
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
