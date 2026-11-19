"use client";

import { useState } from "react";
import type { SchoolClass } from "@/data/site-data";
import { BookIcon, CheckIcon } from "@/components/icons";

type Tab = "details" | "materials" | "payment";

const tabs: { id: Tab; label: string }[] = [
  { id: "details", label: "Class Details" },
  { id: "materials", label: "Materials" },
  { id: "payment", label: "Payment" },
];

export function ClassDetailTabs({ item }: { item: SchoolClass }) {
  const [activeTab, setActiveTab] = useState<Tab>("details");

  return (
    <section className="rounded-3xl border border-sand bg-white p-6 shadow-sm md:p-8">
      <div
        role="tablist"
        aria-label="Class information"
        className="inline-flex flex-wrap gap-1 rounded-full bg-brand-50 p-1"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab.id
                ? "bg-brand-900 text-white shadow"
                : "text-slate-600 hover:text-brand-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6" role="tabpanel">
        {activeTab === "details" ? (
          <div className="space-y-5">
            <p className="text-lg leading-8 text-slate-700">{item.description}</p>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
                What you&apos;ll learn
              </p>
              <ul className="mt-3 grid gap-3">
                {item.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 text-slate-700">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}

        {activeTab === "materials" ? (
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 px-6 py-10 text-center">
            <BookIcon className="h-8 w-8 text-brand-500" />
            <p className="mt-3 font-semibold text-brand-900">No materials yet</p>
            <p className="mt-1 text-sm text-slate-500">
              Materials for this class will appear here once they are added.
            </p>
          </div>
        ) : null}

        {activeTab === "payment" ? (
          <div className="space-y-4">
            <p className="text-slate-700">
              Transfer your fee to one of the accounts below and send the
              payment screenshot to admin.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {item.paymentOptions.map((payment) => (
                <div
                  key={payment.provider + payment.accountNumber}
                  className="rounded-2xl bg-brand-900 p-5 text-white"
                >
                  <p className="text-sm font-bold text-gold-400">
                    {payment.provider}
                  </p>
                  <p className="mt-3 font-mono text-xl font-semibold tracking-wider">
                    {payment.accountNumber}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {payment.accountName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
