import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      bg-gradient-to-br
      from-amber-50
      to-blue-50
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <h1
            className="
            text-5xl
            lg:text-7xl
            font-bold
            leading-tight
            "
          >
            Technology for Communities...
            <br />
            Innovation for Villages ...
          </h1>

          <p
            className="
            mt-6
            text-xl
            max-w-2xl
            "
          >
            I am Thirupal Reddy, a Software Engineer
            passionate about using technology to
            create meaningful impact in rural
            communities.
          </p>

          <div className="flex gap-4 mt-8">

            <button
              className="
              px-8
              py-4
              rounded-xl
              bg-amber-600
              text-white
              "
            >
              Read Blogs
            </button>

            <button
              className="
              px-8
              py-4
              rounded-xl
              border
              "
            >
              About Me
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}