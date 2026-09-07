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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 clickable" onClick={onClose} />

      <div className="relative max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden" role="dialog" aria-modal="true" aria-label="Explore Events">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-amber-900">Explore Events</h3>
          <button onClick={onClose} aria-label="Close" className="text-slate-600 hover:text-slate-800">Close</button>
        </div>

        <div className="p-4 h-[70vh] overflow-auto">
          {loading && <p className="text-sm text-slate-600">Loading events…</p>}

          {!loading && (
            <>
            {/*}
              {gamesList.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-800">Games & Competitions</h4>
                  <ul className="mt-2 list-none ml-0 text-sm text-slate-700">
                    {gamesList.map(({ festival, program }) => (
                      <li key={`${festival.id}-${program.id}`} className="mb-2 flex items-start">
                        <div className="w-28 text-slate-500 text-xs">{program.time || ''}</div>
                        <div>
                          <div className="font-semibold text-slate-800">{program.name} <span className="text-xs text-slate-500">— {festival.name}</span></div>
                          {program.description && <div className="text-xs text-slate-500">{program.description}</div>}
                        </div>
                        <div className="ml-auto">
                          <button onClick={() => onOpenProgram(festival.id, program.id)} className="text-amber-700 ml-4">Details</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
                */}

              <div>
                <h4 className="font-semibold text-amber-800">Agenda by date</h4>
                <div className="mt-2 text-sm text-slate-700">
                  {dateKeys.map((dk) => (
                    <div key={dk} className="mb-4">
                      <div className="text-sm font-medium text-amber-900 mb-2">{dk}</div>
                      <ul className="list-none ml-0">
                        {dateMap[dk].map(({ festival, program }) => (
                          <li key={`${festival.id}-${program.id}`} className="mb-2 flex items-start">
                            <div className="w-28 text-slate-500 text-xs">{program.time || ''}</div>
                            <div>
                              <div className="font-semibold text-slate-800">{program.name} <span className="text-xs text-slate-500">— {festival.name}</span></div>
                              {program.description && <div className="text-xs text-slate-500">{program.description}</div>}
                            </div>
                            <div className="ml-auto">
                              <button onClick={() => onOpenProgram(festival.id, program.id)} className="text-amber-700 ml-4">Details</button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsExplorer;
