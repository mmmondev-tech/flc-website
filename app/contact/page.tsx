import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon } from "@/components/icons";
import { defaultSiteContent } from "@/data/site-content";

export default function ContactPage() {
  const { contact } = defaultSiteContent;
  const phones = contact.phone.split(",").map((phone) => phone.trim());
  const mapQuery = encodeURIComponent(contact.address);

  const cards = [
    {
      icon: MapPinIcon,
      label: "Visit us",
      body: <p>{contact.address}</p>,
      action: {
        href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
        text: "Open in Google Maps",
      },
    },
    {
      icon: PhoneIcon,
      label: "Call us",
      body: (
        <div className="flex flex-col gap-1">
          {phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="font-semibold text-brand-900 hover:text-brand-600"
            >
              {phone}
            </a>
          ))}
        </div>
      ),
    },
    {
      icon: MailIcon,
      label: "Email",
      body: (
        <a
          href={`mailto:${contact.email}`}
          className="break-all font-semibold text-brand-900 hover:text-brand-600"
        >
          {contact.email}
        </a>
      ),
    },
    {
      icon: SendIcon,
      label: "Telegram",
      body: <p className="font-semibold text-brand-900">{contact.telegram}</p>,
    },
  ];

  return (
    <main className="min-h-screen">
      <SiteHeader />

      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        subtitle="Ask us about class schedules, fees, the placement test and enrollment — our team is happy to help you choose the right class."
        image="/images/gallery/outdoor-picnic.jpg"
      />

      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-5 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, label, body, action }) => (
            <article
              key={label}
              className="flex flex-col rounded-3xl border border-sand bg-white p-6 shadow-xl shadow-brand-900/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-900 text-gold-400">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
                {label}
              </p>
              <div className="mt-2 text-sm leading-6 text-slate-600">{body}</div>
              {action ? (
                <a
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 text-sm font-semibold text-brand-700 hover:text-brand-500"
                >
                  {action.text} →
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-24">
        <div className="overflow-hidden rounded-3xl border border-sand bg-white shadow-sm">
          <iframe
            title="FLC Education location map"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-[380px] w-full md:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
