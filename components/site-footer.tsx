import Image from "next/image";
import Link from "next/link";
import { defaultSiteContent } from "@/data/site-content";
import { navLinks } from "@/data/site-data";
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon } from "@/components/icons";

export function SiteFooter() {
  const { contact } = defaultSiteContent;
  const phones = contact.phone.split(",").map((phone) => phone.trim());

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-slate-300">
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1.4fr] md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/flc-logo.jpg"
              alt="FLC Education logo"
              width={52}
              height={52}
              className="rounded-full ring-2 ring-gold-400/40"
            />
            <div>
              <p className="font-display text-xl font-semibold text-white">
                FLC Education
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-gold-400">
                Future Learning Center
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            English for General Purpose, Academic English and Young Learners —
            in our Hledan classrooms or live on Zoom.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
            Explore
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm md:grid-cols-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
            Get in touch
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <span>{contact.address}</span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <span className="flex flex-wrap gap-x-3">
                {phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-gold-400"
                  >
                    {phone}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <a href={`mailto:${contact.email}`} className="hover:text-gold-400">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <SendIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <span>Telegram: {contact.telegram}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-slate-500 md:px-6">
          © {new Date().getFullYear()} FLC Education. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
