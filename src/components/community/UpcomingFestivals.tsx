import React, { useEffect, useState } from "react";
import type { Festival } from "../../data/festivals";
import { communityService } from "../../services/communityService";

const FestivalCard: React.FC<{ festival: Festival; onView: (id: string) => void; onExploreQuiz?: () => void; highlight?: boolean }> = ({ festival, onView, onExploreQuiz, highlight }) => {
  return (
    <div className={`festival-card ${highlight ? "border-2 border-amber-300" : ""}`}>
      <div
        className="card-image h-80 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${festival.image})` }}
      />
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-amber-900 text-lg">{festival.name}</h3>
          <span className="festival-badge">{festival.name || "Festival"}</span>
        </div>

        <p className="text-sm text-slate-600 mt-1">{festival.date} • {festival.location}</p>

        <p className="mt-3 text-sm text-slate-700">{festival.description}</p>

        {festival.contact && (
          <p className="mt-2 text-sm text-slate-600">Contact: {festival.contact}</p>
        )}

        {festival.programs && festival.programs.length > 0 && (
          <div className="mt-3 text-sm text-slate-700">
            <strong className="text-amber-800">Program highlights:</strong>
            <ul className="mt-1 list-disc ml-5">
              {festival.programs.slice(0, 4).map((p) => (
                <li key={p.id}>{p.time ? `${p.time} — ` : ""}{p.name}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={() => onView(festival.id)} className="btn-primary">View Details</button>
            <button
              onClick={() => onExploreQuiz?.()}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore Quiz
            </button>
          </div>
          <span className="text-xs text-slate-500">Starts: {festival.startTime}</span>
        </div>
      </div>
    </div>
  );
};

const UpcomingFestivals: React.FC<{ onSelectFestival: (id: string) => void; onExploreQuiz?: () => void }> = ({ onSelectFestival, onExploreQuiz }) => {
  const [festivals, setFestivals] = useState<Festival[]>([]);

  useEffect(() => {
    communityService.getFestivals().then(setFestivals);
  }, []);

  if (!festivals.length) return <p className="mt-4 text-sm text-amber-600">Loading festivals…</p>;

  const next = festivals[0];

  const handleView = (id: string) => {
    try {
      onSelectFestival?.(id);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="festivals" className="mt-10">
      <h2 className="text-2xl font-semibold text-amber-900">Upcoming Festivals</h2>
      <div className="mt-4">
        <div className="md:col-span-2">
          <FestivalCard festival={next} onView={handleView} onExploreQuiz={onExploreQuiz} highlight />
        </div>
        <div className="space-y-4">
          {festivals.slice(1).map((f) => (
            <FestivalCard key={f.id} festival={f} onView={handleView} onExploreQuiz={onExploreQuiz} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingFestivals;
