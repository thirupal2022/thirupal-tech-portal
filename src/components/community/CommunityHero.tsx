import React from "react";

const CommunityHero: React.FC<{ onScrollToFestivals?: () => void }> = ({ onScrollToFestivals }) => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-amber-100 to-rose-50 rounded-lg overflow-hidden shadow-sm">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506804884364-14d87ff5a0e2?q=80&w=1600&auto=format&fit=crop&s=example')] bg-cover bg-center opacity-60"></div>
      <div className="relative z-10 px-6 py-24 md:py-32 lg:py-40 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-amber-900">Welcome to Our Village Community</h1>
        <p className="mt-4 text-md md:text-lg text-amber-800">Celebrating our culture, traditions, people and the spirit of togetherness.</p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onScrollToFestivals}
            className="bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-md shadow-sm"
          >
            Upcoming Festivals
          </button>
          <a href="#events" className="bg-white border border-amber-700 text-amber-800 px-4 py-2 rounded-md shadow-sm">
            Explore Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;
