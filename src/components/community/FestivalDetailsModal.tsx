import React, { useEffect, useRef } from "react";
import type { Festival } from "../../data/festivals";

const FestivalDetailsModal: React.FC<{ festival?: Festival | null; open?: boolean; onClose: () => void; focusedProgramId?: string | undefined }> = ({ festival, open = false, onClose, focusedProgramId }) => {
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open || !festival) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };

    const counterKey = '__modalOpenCount';
    const currentCount = Number((window as any)[counterKey] || 0);
    // @ts-ignore
    (window as any)[counterKey] = currentCount + 1;
    // Only set overflow hidden on the first modal
    // @ts-ignore
    if ((window as any)[counterKey] === 1) document.body.style.overflow = 'hidden';

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      const remainingCount = Number((window as any)[counterKey] || 1) - 1;
      // @ts-ignore
      (window as any)[counterKey] = remainingCount;
      // Restore overflow only when no modals remain
      // @ts-ignore
      if (!remainingCount) {
        try {
          document.body.style.overflow = '';
        } catch (e) {
          /* ignore */
        }
        // @ts-ignore
        delete (window as any)[counterKey];
      }
    };
  }, [festival, open]);

  if (!open || !festival) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 clickable" onClick={onClose} />

      <div
        className="relative max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label={festival.name}
        onClick={(e) => e.stopPropagation()} // prevent overlay clicks from closing when interacting with modal
      >
        <div className="flex items-start justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-amber-900">{festival.name}</h3>
          <button onClick={onClose} aria-label="Close modal" className="text-slate-600 hover:text-slate-800">Close</button>
        </div>
        {/* Banner image: use festival.image or fallback to a related Unsplash image */}
        <div
          className="h-58 bg-cover bg-center"
          style={{
            backgroundImage: `url(${festival.image || "/Festival.jpeg"})`,
          }}
        />

        <div className="p-4">
          <div className="h-[60vh] overflow-auto">
            <p className="text-sm text-slate-600">{festival.date} • {festival.location}</p>
            {festival.venue && <p className="text-sm text-slate-600">Venue: {festival.venue}</p>}
            {festival.contact && <p className="mt-2 text-sm text-slate-600">Contact: {festival.contact}</p>}

            {festival.description && (
              <p className="mt-3 text-sm text-slate-700">{festival.description}</p>
            )}

              {/* If a specific program is focused, show its detailed info up-front */}
              {focusedProgramId && festival.programs && (
                (() => {
                  const focused = festival.programs?.find((pp) => pp.id === focusedProgramId);
                  if (!focused) return null;
                  return (
                    <div className="mt-4 p-3 border rounded bg-amber-50">
                      <div className="text-sm text-amber-900 font-semibold">{focused.name} — {festival.name}</div>
                      <div className="text-xs text-slate-600 mt-1">{focused.time || ''} {focused.category ? `• ${focused.category}` : ''}</div>
                      {focused.description && <div className="mt-2 text-sm text-slate-700">{focused.description}</div>}
                    </div>
                  );
                })()
              )}

                {festival.programs && festival.programs.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-amber-800">Agenda (by date)</h4>
                    <div className="mt-2 text-sm text-slate-700">
                      {(() => {
                        // Group programs by day label like "Day 1" or fallback to category
                        const programs = festival.programs || [];

                        // Try to compute a base date from festival.isoDate
                        const baseDate = festival.isoDate ? new Date(festival.isoDate) : null;

                        const groups: Record<string, typeof programs> = {};

                        programs.forEach((p, idx) => {
                          const cat = (p.category || '').trim();
                          const m = cat.match(/Day\s*(\d+)/i);
                          const key = m ? `Day ${m[1]}` : (cat || `Day ${Math.floor(idx / 6) + 1}`);
                          if (!groups[key]) groups[key] = [];
                          groups[key].push(p);
                        });

                        const dayKeys = Object.keys(groups).sort((a, b) => {
                          const ma = a.match(/Day\s*(\d+)/i);
                          const mb = b.match(/Day\s*(\d+)/i);
                          if (ma && mb) return Number(ma[1]) - Number(mb[1]);
                          return a.localeCompare(b);
                        });

                        return dayKeys.map((dayKey) => {
                          // compute readable date for this day
                          let dateLabel = dayKey;
                          if (baseDate) {
                            const m = dayKey.match(/Day\s*(\d+)/i);
                            if (m) {
                              const dayIndex = Number(m[1]) - 1;
                              const d = new Date(baseDate);
                              d.setDate(d.getDate() + dayIndex);
                              dateLabel = d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                            }
                          }

                          return (
                            <div key={dayKey} className="mb-4">
                              <div className="text-sm font-medium text-amber-900 mb-2">{dateLabel}</div>
                              <ul className="list-none ml-0">
                                {groups[dayKey].map((p) => (
                                  <li key={p.id} className="mb-2 flex items-start">
                                    <div className="w-28 text-slate-500 text-xs">{p.time || ''}</div>
                                    <div>
                                      <div className="font-semibold text-slate-800">{p.name}</div>
                                      {p.description && <div className="text-xs text-slate-500">{p.description}</div>}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </div>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalDetailsModal;
