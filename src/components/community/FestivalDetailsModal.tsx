import React, { useEffect } from "react";
import type { Festival } from "../../data/festivals";

const FestivalDetailsModal: React.FC<{ festival?: Festival | null; open?: boolean; onClose: () => void }> = ({ festival, open = false, onClose }) => {
  if (!open || !festival) return null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Robust body-scroll lock: keep a global counter so nested/rapid mounts
    // don't permanently prevent scrolling.
    const counterKey = '__modalOpenCount';
    // @ts-ignore
    (window as any)[counterKey] = ((window as any)[counterKey] || 0) + 1;
    // Only set overflow hidden on the first modal
    // @ts-ignore
    if ((window as any)[counterKey] === 1) document.body.style.overflow = 'hidden';

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      // @ts-ignore
      (window as any)[counterKey] = ((window as any)[counterKey] || 1) - 1;
      // Restore overflow only when no modals remain
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
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

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
          className="h-48 bg-cover bg-center"
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

            {festival.programs && festival.programs.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-amber-800">Full program</h4>
                <ul className="mt-2 list-disc ml-5 text-sm text-slate-700">
                  {festival.programs.map((p) => (
                    <li key={p.id} className="mb-1">
                      {p.time && <span className="text-slate-500 mr-2">{p.time}</span>}
                      <span>{p.name}</span>
                      {p.description && <div className="text-xs text-slate-500">{p.description}</div>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalDetailsModal;
