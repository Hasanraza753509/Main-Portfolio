import heroPhoto from "../assets/hero-photo.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const stats = [
  { value: "6+", label: "Projects done" },
  { value: "8.6", label: "CGPA/10" },
  { value: "4+", label: "Certifications" },
];

const nameVariants = {
  hidden: {
    x: 150,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const subtitleVariants = {
  hidden: {
    x: -120,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const statVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8 + i * 0.15,
      duration: 0.6,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-[#DEC6A5] overflow-hidden min-h-screen flex items-center pt-28">

      <div className="absolute inset-y-0 right-0 w-full sm:w-[55%] md:w-[50%] h-[45vh] sm:h-full">
        <motion.img
          src={heroPhoto}
          alt="Portrait of Hasan Raza"
          className="w-full h-full object-cover object-top sm:object-center"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-sand/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-[42vh] sm:pt-0">
        <div className="sm:max-w-[52%] md:max-w-[55%] pb-16 sm:pb-0">


          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="show"
            className="font-display text-6xl sm:text-7xl md:text-8xl text-[#2E241C] leading-none"
          >
            <motion.span
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                delay: 1,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Hasan Raza
            </motion.span>
          </motion.h1>

          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="show"
            className="mt-6 font-body text-lg sm:text-xl text-[#5A4A3B] font-medium leading-relaxed"
          >
            Builder •{" "}
            <span className="font-semibold text-[#8B5E34]">
              <Typewriter
                words={[
                  "Problem Solver",
                  "CS Student",
                  "ML Engineer",
                  "Open Source Contributor",
                  "AI Enthusiast",
                  "Full Stack Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1800}
              />
            </span>

            <br />


            <span className="text-[#7B6A59]">
              Delhi Technological University
            </span>
          </motion.p>

          <div className="mt-10 flex gap-8 sm:gap-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={statVariants}
                initial="hidden"
                animate="show"
              >
                <div className="font-serif text-3xl sm:text-4xl text-[#2E241C] font-semibold">
                  {s.value}
                </div>

                <div className="text-xs sm:text-sm text-[#7B6A59] mt-1 max-w-[6rem]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#contact"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1.3,
              duration: 0.5,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
inline-block
mt-10
rounded-full
border-2
border-[#2E241C]
px-8
py-4
font-display
font-semibold
tracking-wide
text-[#2E241C]
transition-all
duration-300
hover:bg-[#2E241C]
hover:text-[#F8F4EC]
hover:scale-105
"
          >
            GET IN TOUCH
          </motion.a>

        </div>
      </div>
    </section>
  );
}