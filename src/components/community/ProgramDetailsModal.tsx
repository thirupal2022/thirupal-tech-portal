import React, { useEffect, useRef } from 'react';
import type { Festival, ProgramItem } from '../../data/festivals';

const ProgramDetailsModal: React.FC<{
  open: boolean;
  festival?: Festival | null;
  program?: ProgramItem | null;
  onClose: () => void;
}> = ({ open, festival, program, onClose }) => {
  // Keep a ref to the latest onClose so the key handler effect can be
  // mounted once and still call the current handler without re-running.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open || !program) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };

    const counterKey = '__modalOpenCount';
    const currentCount = Number((window as any)[counterKey] || 0);
    // @ts-ignore
    (window as any)[counterKey] = currentCount + 1;
    // @ts-ignore
    if ((window as any)[counterKey] === 1) document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
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
  }, [open, program]);

  if (!open || !program) return null;

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-3 sm:p-6">
      <div className="absolute inset-0 z-0 bg-slate-950/65 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.25)]"
        role="dialog"
        aria-modal="true"
        aria-label={program.name}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-amber-50 via-orange-50 to-emerald-50 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Program details</p>
            <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">{program.name}</h3>
            {festival && <div className="mt-1 text-sm text-slate-600">{festival.name}</div>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            Close
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-4 rounded-[24px] border border-amber-100 bg-amber-50/70 p-4 text-sm text-slate-600">
            <span className="font-medium text-slate-700">{program.time || ""}</span>
            {program.time && program.category ? " • " : ""}
            <span>{program.category || ""}</span>
          </div>

          {program.description ? (
            <div className="mb-5 text-sm leading-6 text-slate-700">{program.description}</div>
          ) : (
            <div className="mb-5 text-sm text-slate-600">No additional details provided.</div>
          )}

          {festival && (
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
              <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Festival details</div>
              <div className="space-y-1 text-sm text-slate-700">
                <div>{festival.date} • {festival.location}</div>
                {festival.venue && <div>Venue: {festival.venue}</div>}
                {festival.contact && <div>Contact: {festival.contact}</div>}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5">
              Register
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailsModal;
