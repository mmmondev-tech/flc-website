import Image from "next/image";
import Link from "next/link";
import type { SchoolClass } from "@/data/site-data";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from "@/components/icons";

export function StatusBadge({ status }: { status: SchoolClass["status"] }) {
  return status === "ongoing" ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
      Ongoing
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 ring-1 ring-sky-200">
      <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
      Upcoming
    </span>
  );
}

export function ClassCard({ item }: { item: SchoolClass }) {
  return (
    <Link
      href={`/classes/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-sand bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <StatusBadge status={item.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
          {item.level}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-brand-900">
          {item.title}
        </h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li className="flex items-start gap-2">
            <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            {item.schedule}
          </li>
          <li className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 shrink-0 text-brand-500" />
            Starts {item.startDate} · {item.duration}
          </li>
        </ul>
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
          <p className="text-lg font-bold text-brand-900">{item.fee}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
            {item.status === "ongoing" ? "View class" : "Join class"}
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
