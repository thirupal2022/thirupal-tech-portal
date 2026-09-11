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
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6">
      <div className="absolute inset-0 z-0 bg-slate-950/65 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.25)]"
        role="dialog"
        aria-modal="true"
        aria-label={festival.name}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-[#edf7ef] via-[#f5faf7] to-[#edfdf5] px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2d6c51]">Festival details</p>
            <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">{festival.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            Close
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto">
          <div
            className="h-56 bg-cover bg-center sm:h-64"
            style={{
              backgroundImage: `url(${festival.image || "/Festival.jpeg"})`,
            }}
          />

          <div className="p-4 sm:p-6">
            <div className="mb-5 flex flex-col gap-3 rounded-[24px] border border-[#dfeae1] bg-[#edf7ef] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1 text-sm text-slate-600">
                <p className="font-medium text-slate-700">{festival.date} • {festival.location}</p>
                {festival.venue && <p>Venue: {festival.venue}</p>}
                {festival.contact && <p>Contact: {festival.contact}</p>}
              </div>
              {festival.venue && (
                <span className="inline-flex w-fit rounded-full bg-[#dff3e6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2d6c51] ring-1 ring-[#cfe5d5]">
                  Community event
                </span>
              )}
            </div>

            {festival.description && (
              <p className="mb-5 text-sm leading-6 text-slate-700">{festival.description}</p>
            )}

            {focusedProgramId && festival.programs && (() => {
              const focused = festival.programs?.find((pp) => pp.id === focusedProgramId);
              if (!focused) return null;
              return (
                <div className="mb-5 rounded-[24px] border border-[#d4e7d7] bg-[#f1faf3] p-4">
                  <div className="text-sm font-semibold text-[#1d3d2d]">{focused.name} — {festival.name}</div>
                  <div className="mt-1 text-xs text-slate-600">{focused.time || ""} {focused.category ? `• ${focused.category}` : ""}</div>
                  {focused.description && <div className="mt-2 text-sm text-slate-700">{focused.description}</div>}
                </div>
              );
            })()}

            {festival.programs && festival.programs.length > 0 && (
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Agenda</h4>
                <div className="mt-4 space-y-4 text-sm text-slate-700">
                  {(() => {
                    const programs = festival.programs || [];
                    const baseDate = festival.isoDate ? new Date(festival.isoDate) : null;
                    const groups: Record<string, typeof programs> = {};

                    programs.forEach((p, idx) => {
                      const cat = (p.category || "").trim();
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
                      let dateLabel = dayKey;
                      if (baseDate) {
                        const m = dayKey.match(/Day\s*(\d+)/i);
                        if (m) {
                          const dayIndex = Number(m[1]) - 1;
                          const d = new Date(baseDate);
                          d.setDate(d.getDate() + dayIndex);
                          dateLabel = d.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
                        }
                      }

                      return (
                        <div key={dayKey} className="rounded-2xl border border-slate-200 bg-white p-3">
                          <div className="mb-2 text-sm font-semibold text-[#1d3d2d]">{dateLabel}</div>
                          <ul className="space-y-2">
                            {groups[dayKey].map((p) => (
                              <li key={p.id} className="flex items-start gap-3">
                                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2b7a58]" />
                                <div className="flex-1">
                                  <div className="font-medium text-slate-800">{p.name}</div>
                                  <div className="text-xs text-slate-500">{p.time || ""}{p.time && p.category ? " • " : ""}{p.category || ""}</div>
                                  {p.description && <div className="mt-1 text-xs text-slate-600">{p.description}</div>}
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
