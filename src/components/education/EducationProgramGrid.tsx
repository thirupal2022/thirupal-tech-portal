import { ArrowRight } from "lucide-react";

import { educationPrograms } from "./educationData";

export default function EducationProgramGrid() {
  return (
    <section className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
      {educationPrograms.map(({ title, description, icon: Icon, accent, border }) => (
        <article
          key={title}
          className={`group rounded-[22px] border ${border} ${accent} p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_28px_rgba(15,23,42,0.08)]`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/50 bg-white/60 text-[#1d8f72] shadow-sm">
            <Icon className="h-7 w-7" strokeWidth={1.8} />
          </div>

          <h2 className="mt-5 text-[1.06rem] font-bold leading-tight text-slate-800">{title}</h2>

          <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>

          <button
            type="button"
            className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1a7a5c] text-white shadow-sm transition group-hover:translate-x-1 group-hover:bg-[#135a47]"
            aria-label={`Open ${title}`}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </article>
      ))}
    </section>
  );
}
