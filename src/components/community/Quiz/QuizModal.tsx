import React, { useEffect, useRef } from "react";
import QuizModule from "./QuizModule";

const QuizModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  if (!open) return null;

  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };

    const counterKey = "__modalOpenCount";
    // @ts-ignore
    (window as any)[counterKey] = ((window as any)[counterKey] || 0) + 1;
    // @ts-ignore
    if ((window as any)[counterKey] === 1) document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // @ts-ignore
      (window as any)[counterKey] = ((window as any)[counterKey] || 1) - 1;
      // @ts-ignore
      if (!(window as any)[counterKey]) {
        document.body.style.overflow = "";
        delete (window as any)[counterKey];
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.25)]"
        role="dialog"
        aria-modal="true"
        aria-label="Explore Quiz"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-amber-50 via-orange-50 to-emerald-50 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Community Challenge</p>
            <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">Explore Quiz</h3>
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
          <QuizModule />
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
