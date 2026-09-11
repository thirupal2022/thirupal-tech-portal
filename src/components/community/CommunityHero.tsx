import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const CommunityHero: React.FC<{ onScrollToFestivals?: () => void; onExploreEvents?: () => void; }> = ({ onScrollToFestivals, onExploreEvents }) => {
  return (
    <section className="relative overflow-hidden rounded-[30px] border border-[#dfe6df] bg-[#edf4ee] shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506804884364-14d87ff5a0e2?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#edf4ee]/95 via-[#edf4ee]/75 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-left md:px-8 md:py-32 lg:py-40">
        <div className="max-w-[560px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d6e7d9] bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2d6c51] backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Community life
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#1d3d2d] md:text-5xl">
            Welcome to Our Village Community
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[#355c4b] md:text-lg">
            Celebrating our culture, traditions, people and the spirit of togetherness through learning, events and shared opportunities.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onScrollToFestivals}
              className="inline-flex items-center gap-2 rounded-full bg-[#1f8a63] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(31,138,99,0.2)] transition hover:bg-[#177454]"
            >
              Upcoming Festivals
              <ArrowRight className="h-4 w-4" />
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
    </section>
  );
};

export default CommunityHero;
