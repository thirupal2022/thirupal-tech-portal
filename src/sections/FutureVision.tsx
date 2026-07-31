const roadmap = [
  "Blog Platform",
  "Community Portal",
  "Student Learning Platform",
  "Agriculture Advisory Platform",
  "Rural Innovation Ecosystem"
];

export default function FutureVision() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-10">
          Future Vision
        </h2>

        {roadmap.map((phase, index) => (
          <div
            key={phase}
            className="
            flex
            items-center
            gap-4
            mb-6
            "
          >
            <div
              className="
              w-12
              h-12
              rounded-full
              bg-amber-600
              text-white
              flex
              items-center
              justify-center
              "
            >
              {index + 1}
            </div>

            <div className="text-xl">
              {phase}
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}