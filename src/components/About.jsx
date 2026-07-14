import { motion } from "framer-motion";
import aboutPhoto from "../assets/about-photo.png";

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 sm:py-32 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-16">
        
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-sm md:max-w-none md:w-[45%] shrink-0"
        >
          <div className="relative w-full h-full min-h-[400px] bg-[#DBC29D] overflow-hidden shadow-sm">
            <img
              src={aboutPhoto}
              alt="Hasan Raza"
              className="absolute bottom-0 left-0 w-full h-[95%] object-cover object-bottom drop-shadow-md"
            />
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-[55%] flex flex-col justify-center py-4 md:py-10"
        >
          <h2 className="font-body text-5xl sm:text-6xl text-[#5B4A40] font-normal mb-3">
            About
          </h2>
          <p className="font-body text-xl text-[#756254] mb-8">
            — Hasan Raza
          </p>
          
          <div className="font-body text-[15px] sm:text-[15px] text-[#5B4A40]/80 leading-relaxed tracking-wide">
            <p>
              I'm a first-year B.Tech student in Artificial Intelligence & Machine Learning at Delhi Technological University, passionate about building AI-driven and full-stack applications that solve real-world problems. I enjoy working with Python, Machine Learning, React, Node.js, and REST APIs, and have developed projects ranging from AI-powered developer tools to modern web applications. As an IBM-certified Machine Learning learner and active open-source contributor, I'm constantly exploring new technologies and always eager to learn, collaborate, and create impactful solutions.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}