const initiatives = [
  {
    title: "Education Programs",
    desc: "Digital literacy and career guidance."
  },
  {
    title: "Agriculture Innovation",
    desc: "Technology awareness for farmers."
  },
  {
    title: "Village Development",
    desc: "Community-focused digital solutions."
  },
  {
    title: "Culture Preservation",
    desc: "Protecting traditions through technology."
  }
];

export default function ImpactSection() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Rural Impact Initiatives
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {initiatives.map((item) => (
            <div
              key={item.title}
              className="
              bg-white
              p-8
              rounded-2xl
              shadow-md
              "
            >
              <h3 className="font-bold text-xl">
                {item.title}
              </h3>

              <p className="mt-4">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}