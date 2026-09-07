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
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 clickable" onClick={onClose} />

      <div className="relative max-w-2xl w-full bg-white rounded-lg shadow-lg overflow-hidden" role="dialog" aria-modal="true" aria-label={program.name} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h3 className="text-lg font-semibold text-amber-900">{program.name}</h3>
            {festival && <div className="text-sm text-slate-600">{festival.name}</div>}
          </div>
          <button onClick={onClose} aria-label="Close" className="text-slate-600 hover:text-slate-800">Close</button>
        </div>

        <div className="p-4">
          <div className="mb-3 text-sm text-slate-600">{program.time || ''} {program.category ? `• ${program.category}` : ''}</div>

          {program.description ? (
            <div className="text-sm text-slate-700 mb-4">{program.description}</div>
          ) : (
            <div className="text-sm text-slate-600 mb-4">No additional details provided.</div>
          )}

          {festival && (
            <div className="mt-2 text-sm text-slate-700">
              <div className="font-semibold text-amber-800 mb-1">Festival details</div>
              <div className="text-xs text-slate-600">{festival.date} • {festival.location}</div>
              {festival.venue && <div className="text-xs text-slate-600">Venue: {festival.venue}</div>}
              {festival.contact && <div className="text-xs text-slate-600">Contact: {festival.contact}</div>}
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <button className="btn-primary">Register</button>
            <button onClick={onClose} className="border px-3 py-1 rounded">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailsModal;
