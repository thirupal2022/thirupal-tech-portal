import React from "react";

const items = [
  { key: "traditions", title: "Village Traditions", desc: "Rich rituals and family customs." },
  { key: "farming", title: "Agriculture & Farming", desc: "Traditional farming and seasonal cycles." },
  { key: "food", title: "Traditional Food", desc: "Local recipes and communal meals." },
  { key: "festivals", title: "Festivals", desc: "Colorful celebrations and rituals." },
  { key: "arts", title: "Folk Arts", desc: "Music, dance and storytelling." },
  { key: "temples", title: "Village Temples", desc: "Places of worship and gathering." },
  { key: "games", title: "Traditional Games", desc: "Playful community competitions." },
  { key: "life", title: "Community Life", desc: "Neighbourhood support and gatherings." }
];

const CultureSection: React.FC = () => {
  return (
    <section id="culture" className="mt-12">
      <h2 className="section-title">Our Culture & Way of Life</h2>
      <p className="section-subtitle">A brief look into our traditions, food, arts and daily life.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, idx) => (
          <article key={it.key} className="card-glass fade-up" style={{ animationDelay: `${idx * 60}ms` }}>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-semibold text-lg">{it.title.charAt(0)}</div>
              <div>
                <h3 className="font-medium text-amber-900">{it.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{it.desc}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="btn-ghost">Explore</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CultureSection;
