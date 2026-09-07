import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      gradient-bg
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
            <span style={{
              background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              Technology for Communities...
            </span>
            <br />
            <span className="text-slate-800/90">Innovation for Villages ...</span>
          </h1>

          <p className="mt-6 text-xl max-w-2xl text-slate-700">
            I am Thirupal Reddy, a Software Engineer passionate about using technology to create meaningful impact in rural communities.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="btn-primary">Read Blogs</button>
            <button className="btn-ghost">About Me</button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}