import React from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const festivalBanner =
  "https://images.unsplash.com/photo-1506804884364-14d87ff5a0e2?q=80&w=1600&auto=format&fit=crop";

const CommunityHero: React.FC<{ onScrollToFestivals?: () => void; onExploreEvents?: () => void; }> = ({ onScrollToFestivals, onExploreEvents }) => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-[30px] border border-[#dfe6df] bg-[#edf4ee] shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
      <div className="relative z-20 flex items-center gap-2 px-5 pt-5 text-sm text-slate-600 md:px-7 md:pt-6">
        <button
          type="button"
          onClick={() => navigate("/community")}
          className="inline-flex items-center gap-2 rounded-full px-2 py-1 text-[#4f7a53] transition hover:bg-white/60 hover:text-[#2a5541]"
        >
          <ArrowLeft className="h-4 w-4" />
          Community
        </button>
        <span className="text-slate-400">/</span>
        <span className="font-medium text-slate-700">Festivals</span>
      </div>

      <div className="relative z-10 min-h-[320px] md:min-h-[420px]">
        <img
          src={festivalBanner}
          alt="A joyful community festival with people gathering together"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#edf4ee]/95 via-[#edf4ee]/70 to-transparent" />

        <div className="absolute inset-y-0 left-0 z-10 flex max-w-[52%] items-center px-5 pb-5 pt-4 md:px-7 md:pb-7 md:pt-5">
          <div className="max-w-[520px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d6e7d9] bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2d6c51] backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Community celebrations
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-[#1d3d2d] md:text-6xl">
              Festivals
            </h1>

            <div className="mt-4 flex flex-wrap gap-3 text-base font-medium text-[#2d5a47] md:text-xl">
              <span>Celebrate</span>
              <span className="text-slate-400">•</span>
              <span>Connect</span>
              <span className="text-slate-400">•</span>
              <span>Inspire</span>
              <span className="text-slate-400">•</span>
              <span>Remember</span>
            </div>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#355c4b] md:text-lg">
              From harvest traditions to cultural gatherings, our festivals bring families, friends and the whole community together in joyful celebration.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onScrollToFestivals}
                className="rounded-full bg-[#1f8a63] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(31,138,99,0.2)] transition hover:bg-[#177454]"
              >
                Upcoming Festivals
              </button>
              <button
                type="button"
                onClick={() => (onExploreEvents ? onExploreEvents() : (window.location.hash = '#events'))}
                className="rounded-full border border-[#d4e7d7] bg-white/70 px-5 py-2.5 text-sm font-semibold text-[#2a5f4c] transition hover:bg-white"
              >
                Explore Events
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-20 max-w-[240px] rounded-2xl border border-[#d7e8dc] bg-[#edf9f1]/90 p-4 text-right shadow-lg backdrop-blur-sm">
          <p className="text-sm font-medium leading-snug text-[#285445]">
            “Festivals are where traditions bloom and communities grow stronger together.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;
