import React, { useEffect, useState } from "react";
import type { Festival } from "../../data/festivals";
import { communityService } from "../../services/communityService";

const FestivalCard: React.FC<{ festival: Festival; onView: (id: string) => void; onExploreQuiz?: () => void; highlight?: boolean }> = ({ festival, onView, onExploreQuiz, highlight }) => {
  return (
    <article
      className={`group overflow-hidden rounded-[26px] border shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)] ${
        highlight ? "border-[#cae3d3] bg-[#f4faf5]" : "border-[#e4ece4] bg-white"
      }`}
    >
      <div className="relative">
        <div
          className={`w-full bg-cover bg-center ${highlight ? "h-72" : "h-52"}`}
          style={{
            backgroundImage: `url(${festival.image || "/Festival.jpeg"})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d17]/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/30 bg-[#edf9f1]/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#244d3c] backdrop-blur-sm">
          {festival.location}
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2c6f4f]">{festival.date}</p>
            <h3 className="mt-2 text-xl font-bold tracking-[-0.03em] text-slate-800 md:text-2xl">{festival.name}</h3>
          </div>
          <span className="inline-flex rounded-full bg-[#edf7ef] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#2d6c51] ring-1 ring-[#dfeae1]">
            Festival
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-700">{festival.description}</p>

        {festival.contact && (
          <p className="mt-3 text-sm text-slate-600">Contact: {festival.contact}</p>
        )}

        {festival.programs && festival.programs.length > 0 && (
          <div className="mt-4 rounded-[18px] border border-[#edf2ee] bg-[#f8fbf8] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2d6c51]">Program highlights</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              {festival.programs.slice(0, 3).map((p) => (
                <li key={p.id} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2b7a58]" />
                  <span>{p.time ? `${p.time} — ` : ""}{p.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onView(festival.id)}
            className="rounded-full bg-[#1f8a63] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(31,138,99,0.18)] transition hover:bg-[#177454]"
          >
            View Details
          </button>
          <button
            type="button"
            onClick={() => onExploreQuiz?.()}
            className="rounded-full border border-[#d4e7d7] bg-white px-4 py-2.5 text-sm font-semibold text-[#2a5f4c] transition hover:bg-[#f5faf7]"
          >
            Explore Quiz
          </button>
        </div>
      </div>
    </article>
  );
};

const UpcomingFestivals: React.FC<{ onSelectFestival: (id: string) => void; onExploreQuiz?: () => void }> = ({ onSelectFestival, onExploreQuiz }) => {
  const [festivals, setFestivals] = useState<Festival[]>([]);

  useEffect(() => {
    communityService.getFestivals().then(setFestivals);
  }, []);

  if (!festivals.length) return <p className="mt-4 text-sm text-[#2d6c51]">Loading festivals…</p>;

  const next = festivals[0];

  const handleView = (id: string) => {
    try {
      onSelectFestival?.(id);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="festivals" className="mt-12">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2d6c51]">Community calendar</p>
          <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-slate-800 md:text-4xl">Upcoming Festivals</h2>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[#dfeae1] bg-[#edf7ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2d6c51] transition hover:bg-[#e6f7eb]"
        >
          Featured events
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div>
          <FestivalCard festival={next} onView={handleView} onExploreQuiz={onExploreQuiz} highlight />
        </div>

        <div className="space-y-5">
          {festivals.slice(1).map((f) => (
            <FestivalCard key={f.id} festival={f} onView={handleView} onExploreQuiz={onExploreQuiz} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingFestivals;
