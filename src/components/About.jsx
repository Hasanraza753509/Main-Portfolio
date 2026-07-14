import { motion } from "framer-motion";
import aboutPhoto from "../assets/about-photo.png";

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:max-w-none rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={aboutPhoto}
              alt="Hasan Raza"
              className="w-full h-full object-cover object-center"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-mocha/10 mix-blend-multiply" />
          </div>
          {/* Decorative backdrop box */}
          <div className="absolute -inset-4 md:-inset-6 border-2 border-mocha/30 rounded-3xl -z-10 translate-y-4 md:translate-y-6" />
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <h2 className="font-serif text-4xl sm:text-5xl text-ink mb-6">
            A little about me
          </h2>
          
          <div className="space-y-6 font-body text-lg text-ink/80 leading-relaxed">
            <p>
              Hi, I'm Hasan! I'm a Computer Science student at Delhi Technological University with a passion for building things that make an impact. I thrive at the intersection of Machine Learning, Software Engineering, and beautiful User Experiences.
            </p>
            <p>
              Over the years, I've worked on full-stack applications, trained intelligent ML models, and actively contributed to open-source projects. I love tackling complex problems and transforming ideas into robust, scalable, and intuitive products.
            </p>
            <p>
              When I'm not coding or debugging, you can usually find me exploring new AI research, tweaking UI designs, or brainstorming my next side project. I'm always open to exciting internships, research collaborations, and creative endeavors.
            </p>
          </div>

          <div className="mt-12">
            <p className="font-script text-4xl text-mochaDark -rotate-2">
              Hasan Raza
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}