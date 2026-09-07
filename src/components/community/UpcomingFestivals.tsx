import React, { useEffect, useState } from "react";
import type { Festival } from "../../data/festivals";
import { communityService } from "../../services/communityService";

const FestivalCard: React.FC<{ festival: Festival; onView: (id: string) => void; highlight?: boolean }> = ({ festival, onView, highlight }) => {
  return (
    <div className={`festival-card ${highlight ? 'border-2 border-amber-300' : ''}`}>
      <div className="card-image" style={{ backgroundImage: `url(${festival.image})` }} />
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-amber-900 text-lg">{festival.name}</h3>
          <span className="festival-badge">{festival.type || 'Festival'}</span>
        </div>

        <p className="text-sm text-slate-600 mt-1">{festival.date} • {festival.location}</p>

        <p className="mt-3 text-sm text-slate-700">{festival.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <button onClick={() => onView(festival.id)} className="btn-primary">View Details</button>
          <span className="text-xs text-slate-500">Starts: {festival.startTime}</span>
        </div>
      </div>
    </div>
  );
};

const UpcomingFestivals: React.FC<{ onSelectFestival: (id: string) => void }> = ({ onSelectFestival }) => {
  const [festivals, setFestivals] = useState<Festival[]>([]);

  useEffect(() => {
    communityService.getFestivals().then(setFestivals);
  }, []);

  if (!festivals.length) return <p className="mt-4 text-sm text-amber-600">Loading festivals…</p>;

  const next = festivals[0];

  return (
    <section id="festivals" className="mt-10">
      <h2 className="text-2xl font-semibold text-amber-900">Upcoming Festivals</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <FestivalCard festival={next} onView={onSelectFestival} highlight />
        </div>
        <div className="space-y-4">
          {festivals.slice(1).map((f) => (
            <FestivalCard key={f.id} festival={f} onView={onSelectFestival} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingFestivals;
