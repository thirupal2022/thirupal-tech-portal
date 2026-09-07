export default function InitiativesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Rural Impact Initiatives</h1>

      <div className="mt-6 space-y-6">
        {[
          {
            title: "Smart Village Connectivity & Digital Training",
            desc: "Establish networking, communal computer hubs and bootcamps for village students.",
            emoji: "🎓"
          },
          {
            title: "Low-Cost Automated Agricultural Systems",
            desc: "Combine soil sensors and automation to prevent water waste and improve yields.",
            emoji: "🌾"
          },
          {
            title: "Micro-Commerce Directory for Artisans",
            desc: "Empower rural makers to reach buyers with beautiful listings and maps.",
            emoji: "🏡"
          }
        ].map((it, i) => (
          <section key={i} className="p-6 rounded-2xl border bg-white shadow-sm">
            <div className="flex items-center gap-4">
              <div className="text-3xl">{it.emoji}</div>
              <div>
                <h3 className="font-bold text-xl">{it.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{it.desc}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
