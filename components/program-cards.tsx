import type { Program } from "@/data/site-content";
import {
  CheckIcon,
  ClockIcon,
  UsersIcon,
  VideoIcon,
  BookIcon,
} from "@/components/icons";

const programIcon = {
  main: BookIcon,
  private: UsersIcon,
  online: VideoIcon,
};

export function ProgramCards({ programs }: { programs: Program[] }) {
  const [main, ...rest] = programs;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {main ? (
        <div className="lg:sticky lg:top-24 lg:self-start">
          <ProgramCard program={main} featured />
        </div>
      ) : null}
      <div className="grid gap-6">
        {rest.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}

function ProgramCard({
  program,
  featured = false,
}: {
  program: Program;
  featured?: boolean;
}) {
  const Icon = programIcon[program.id];

  return (
    <article
      id={program.id}
      className={`relative flex scroll-mt-24 flex-col overflow-hidden rounded-3xl p-7 md:p-8 ${
        featured
          ? "bg-brand-900 text-white shadow-xl shadow-brand-900/20"
          : "border border-sand bg-white shadow-sm"
      }`}
    >
      {featured ? (
        <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
      ) : null}

      <div className="relative flex items-start gap-4">
        <span
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
            featured ? "bg-gold-500 text-brand-950" : "bg-brand-50 text-brand-700"
          }`}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3
            className={`font-display text-2xl font-semibold ${
              featured ? "text-white" : "text-brand-900"
            }`}
          >
            {program.title}
          </h3>
          <p
            className={`mt-1 text-sm font-semibold ${
              featured ? "text-gold-400" : "text-gold-600"
            }`}
          >
            {program.tagline}
          </p>
        </div>
      </div>

      <p
        className={`mm relative mt-5 ${featured ? "text-slate-200" : "text-slate-600"}`}
      >
        {program.intro}
      </p>

      {program.highlights.length > 0 ? (
        <ul className="relative mt-5 space-y-2.5">
          {program.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm">
              <CheckIcon
                className={`mt-1 h-4 w-4 shrink-0 ${
                  featured ? "text-gold-400" : "text-emerald-600"
                }`}
              />
              <span className={`mm ${featured ? "text-slate-200" : "text-slate-700"}`}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      {program.schedules.length > 0 ? (
        <div
          className={`relative mt-6 grid gap-4 ${
            featured ? "" : "sm:grid-cols-2"
          }`}
        >
          {program.schedules.map((schedule) => (
            <div
              key={schedule.days}
              className={`rounded-2xl p-4 ${
                featured ? "bg-white/5 ring-1 ring-white/10" : "bg-brand-50/70"
              }`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-[0.14em] ${
                  featured ? "text-gold-400" : "text-brand-700"
                }`}
              >
                {schedule.days}
              </p>
              <ul className="mt-3 space-y-2">
                {schedule.sessions.map((session) => (
                  <li
                    key={session.time + (session.label ?? "")}
                    className={`flex flex-col gap-0.5 text-sm sm:flex-row sm:items-baseline sm:gap-3 ${
                      featured ? "text-slate-100" : "text-slate-700"
                    }`}
                  >
                    <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold tabular-nums sm:w-36">
                      <ClockIcon
                        className={`h-3.5 w-3.5 ${
                          featured ? "text-gold-400" : "text-brand-500"
                        }`}
                      />
                      {session.time}
                    </span>
                    {session.label ? (
                      <span className={featured ? "text-slate-300" : "text-slate-500"}>
                        {session.label}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {program.onlineCourses ? (
        <div className="relative mt-6 grid gap-3">
          {program.onlineCourses.map((course) => (
            <div
              key={course.title}
              className="flex flex-col gap-1 rounded-2xl bg-brand-50/70 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-semibold text-brand-900">{course.title}</p>
                <p className="text-sm text-slate-500">{course.teacher}</p>
              </div>
              <p className="text-sm font-medium text-brand-700">{course.time}</p>
            </div>
          ))}
        </div>
      ) : null}

      <div
        className={`relative mt-auto pt-6`}
      >
        <div
          className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
            featured
              ? "bg-gold-500 text-brand-950"
              : "bg-gold-100 text-gold-700"
          }`}
        >
          <span className="mr-2 text-xs uppercase tracking-[0.14em] opacity-80">
            Fee
          </span>
          {program.fee}
        </div>
      </div>
    </article>
  );
}
