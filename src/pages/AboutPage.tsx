import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const timeline = [
  {
    title: "Early Life",
    description:
      "Inspired by rural communities, culture, and the challenges faced by villages."
  },
  {
    title: "Education",
    description:
      "Built a strong foundation in software engineering and technology."
  },
  {
    title: "Software Career",
    description:
      "Worked on enterprise web applications, cloud solutions, and scalable systems."
  },
  {
    title: "AWS Journey",
    description:
      "Exploring cloud computing, architecture, and modern DevOps practices."
  },
  {
    title: "Community Vision",
    description:
      "Using technology to support education, agriculture, and village development."
  }
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | ThirupalTech</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <section className="py-20 bg-gradient-to-r from-amber-50 to-green-50">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">
              About Thirupal Reddy
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl">
              Software Engineer passionate about AWS Cloud,
              Software Development, Rural Development,
              Education, and Community Impact.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="w-72 h-72 rounded-3xl bg-gray-200 flex items-center justify-center">
                  Profile Image
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">
                  My Mission
                </h2>

                <p className="leading-8 text-gray-700">
                  My goal is to bridge technology and social
                  impact by empowering rural communities through
                  education, digital literacy, agriculture
                  innovation, and cloud technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
              My Journey
            </h2>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 border-amber-500 pl-6"
                >
                  <h3 className="font-bold text-xl">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}