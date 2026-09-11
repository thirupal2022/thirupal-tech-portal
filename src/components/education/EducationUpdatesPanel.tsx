import { ArrowRight, Calendar, ChevronRight, CircleHelp, Newspaper, Plus } from "lucide-react";

import { educationUpdates, quickLinks } from "./educationData";

export default function EducationUpdatesPanel() {
  return (
    <div className="mt-10 grid gap-8 xl:grid-cols-[1.55fr_0.9fr]">
      <section className="rounded-[24px] border border-[#dfeae1] bg-[#f5f9f5] p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)] md:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef8ef] text-[#2b7a58] shadow-sm">
              <Newspaper className="h-5 w-5" />
            </div>
            <h3 className="text-3xl font-bold tracking-[-0.03em] text-slate-800">Latest Education Updates</h3>
          </div>
          <button type="button" className="inline-flex items-center gap-2 rounded-full border border-[#dfeae1] bg-white px-3 py-2 text-sm font-medium text-[#245f48] transition hover:border-[#cfe5d5] hover:bg-[#f0faf4]">
            View All
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4">
          {educationUpdates.map((update) => (
            <div key={update.title} className="flex gap-4 rounded-[18px] bg-white/70 p-3 shadow-sm ring-1 ring-[#e9f1ea] md:p-4">
              <div className="flex min-w-[72px] flex-col items-center justify-center rounded-2xl bg-[#f3f8ef] px-2 py-3 text-[#2b6e57] ring-1 ring-[#dfeae1]">
                <span className="text-2xl font-bold leading-none">{update.date}</span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em]">{update.month}</span>
                <span className="text-[10px] font-medium tracking-[0.08em] text-slate-500">{update.year}</span>
              </div>

              <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="inline-flex items-center rounded-full bg-[#f0f9f0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#2d6c51]">
                    {update.badge}
                  </div>
                  <h4 className="mt-2 text-lg font-bold text-slate-800">{update.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{update.detail}</p>
                </div>

                <button
                  type="button"
                  className="whitespace-nowrap rounded-full bg-[#e6f7ec] px-3 py-2 text-xs font-semibold text-[#2c6f52] transition hover:bg-[#dff3e6]"
                >
                  {update.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <aside className="space-y-6">
        <div className="overflow-hidden rounded-[24px] border border-[#dfeae1] bg-[#f1f7f1] shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
              alt="Students in a classroom"
              className="h-52 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d17]/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 text-white">
              <p className="text-[1.7rem] font-semibold leading-none tracking-[-0.04em]">
                Better Education<br />Brighter Future
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#dfeae1] bg-[#edf7ef] p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#1a7d60] ring-1 ring-[#dfeae1]">
              <Calendar className="h-4 w-4" />
            </div>
            <h4 className="text-xl font-bold text-slate-800">Quick Links</h4>
          </div>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl bg-white/70 px-3 py-3 text-left text-sm font-medium text-[#2d5c49] transition hover:bg-white"
                >
                  <span className="inline-flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2b7a58]" />
                    {link}
                  </span>
                  <ChevronRight className="h-4 w-4 text-[#2b7a58]" />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-[18px] border border-[#dfeae1] bg-white/60 p-4 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#edf9f1] text-[#2a7f5f]">
                <CircleHelp className="h-4 w-4" />
              </div>
              <p className="leading-6">
                Have something to share? Contribute resources, tips or opportunities to help our community learn and grow.
              </p>
            </div>

            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1f8a63] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(31,138,99,0.2)] transition hover:bg-[#177454]"
            >
              Share Now
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
