const skills = [
  "AWS",
  "React",
  "Java",
  "Spring Boot",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Microservices"
];

export default function TechnologyHub() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-10">
          Technology Knowledge Hub
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            
            <div
              key={skill}
              className="
              p-8
              rounded-2xl
              border
              text-center
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}