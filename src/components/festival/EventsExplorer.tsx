import React, { useEffect, useState } from 'react';
import type { Festival, ProgramItem } from '../../data/festivals';
import { communityService } from '../../services/communityService';

const KEYWORDS = ['quiz','dance','speech','sport','game','competition','games','sports'];

const formatDateKey = (d: Date) => d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

const EventsExplorer: React.FC<{
  open: boolean;
  festivals?: Festival[];
  onClose: () => void;
  onOpenProgram: (festivalId: string, programId?: string) => void;
}> = ({ open, festivals: initial, onClose, onOpenProgram }) => {
  const [festivals, setFestivals] = useState<Festival[] | undefined>(initial);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    if (initial) {
      setFestivals(initial);
      return;
    }
    setLoading(true);
    communityService.getFestivals().then((list) => {
      setFestivals(list);
      setLoading(false);
    });
  }, [open, initial]);

  // Ensure body scroll is locked while this explorer modal is mounted
  useEffect(() => {
    if (!open) return;
    const counterKey = '__modalOpenCount';
    // @ts-ignore
    (window as any)[counterKey] = ((window as any)[counterKey] || 0) + 1;
    // @ts-ignore
    if ((window as any)[counterKey] === 1) document.body.style.overflow = 'hidden';
    return () => {
      // @ts-ignore
      (window as any)[counterKey] = ((window as any)[counterKey] || 1) - 1;
      // @ts-ignore
      if (!(window as any)[counterKey]) {
        try {
          document.body.style.overflow = '';
        } catch (e) {
          /* ignore */
        }
        // @ts-ignore
        delete (window as any)[counterKey];
      }
    };
  }, [open]);

  if (!open) return null;

  const allFestivals = festivals || [];

  // Build a date->programs map across all festivals
  const dateMap: Record<string, Array<{ festival: Festival; program: ProgramItem; date: Date }>> = {};

  allFestivals.forEach((f) => {
    const base = f.isoDate ? new Date(f.isoDate) : null;
    (f.programs || []).forEach((p) => {
      let date = base ? new Date(base) : new Date();
      const m = (p.category || '').match(/Day\s*(\d+)/i);
      if (m && base) {
        const dayIndex = Number(m[1]) - 1;
        date = new Date(base);
        date.setDate(date.getDate() + dayIndex);
      }
      const key = formatDateKey(date);
      dateMap[key] = dateMap[key] || [];
      dateMap[key].push({ festival: f, program: p, date });
    });
  });

  const dateKeys = Object.keys(dateMap).sort((a, b) => {
    const da = new Date(dateMap[a][0].date).getTime();
    const db = new Date(dateMap[b][0].date).getTime();
    return da - db;
  });

  // collect games/competitions
  const gamesList: Array<{ festival: Festival; program: ProgramItem }> = [];
  allFestivals.forEach((f) => {
    (f.programs || []).forEach((p) => {
      const text = `${p.name} ${p.description || ''} ${p.category || ''}`.toLowerCase();
      if (KEYWORDS.some((k) => text.includes(k))) gamesList.push({ festival: f, program: p });
    });
  });

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6">
      <div className="absolute inset-0 z-0 bg-slate-950/65 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.25)]"
        role="dialog"
        aria-modal="true"
        aria-label="Explore Events"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-amber-50 via-orange-50 to-emerald-50 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Community calendar</p>
            <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">Explore Events</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            Close
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto p-4 sm:p-6">
          {loading && <p className="text-sm text-slate-600">Loading events…</p>}

          {!loading && (
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Agenda by date</h4>
              <div className="mt-4 space-y-4 text-sm text-slate-700">
                {dateKeys.map((dk) => (
                  <div key={dk} className="rounded-2xl border border-slate-200 bg-white p-3 sm:p-4">
                    <div className="mb-3 text-sm font-semibold text-amber-900">{dk}</div>
                    <ul className="space-y-3">
                      {dateMap[dk].map(({ festival, program }) => (
                        <li key={`${festival.id}-${program.id}`} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                          <div className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-slate-800">
                              {program.name} <span className="text-xs font-medium text-slate-500">— {festival.name}</span>
                            </div>
                            <div className="mt-1 text-xs text-slate-500">{program.time || ""}{program.time && program.category ? " • " : ""}{program.category || ""}</div>
                            {program.description && <div className="mt-1 text-xs text-slate-600">{program.description}</div>}
                          </div>
                          <button
                            type="button"
                            onClick={() => onOpenProgram(festival.id, program.id)}
                            className="ml-2 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 transition hover:border-amber-300 hover:bg-amber-100"
                          >
                            Details
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsExplorer;
