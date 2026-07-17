import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import aboutPhoto from "../assets/about.png";
import pinkSplash from "../assets/Pink-watersplash.png";
import orangeSplash from "../assets/Orange-watersplash.png";

export default function About() {

  const aboutText =
    "I'm a Computer Science and Engineering student at Delhi Technological University with a passion for building intelligent software and solving real-world problems. My interests span Artificial Intelligence, Software Engineering, and Cybersecurity, where I enjoy transforming ideas into impactful products through research, innovation, and hands-on development. Beyond academics, I actively participate in hackathons, contribute to open source, and continuously explore emerging technologies to grow as an engineer.";

  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      if (index < aboutText.length) {
        setDisplayText(aboutText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setDone(true);
      }
    }, 18);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F6F0E6] min-h-screen py-28"
    >

      {/* ---------------- PAPER GRAIN ---------------- */}

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#000 0.8px, transparent 0.8px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* ---------------- PINK SPLASH ---------------- */}

      <motion.img
        src={pinkSplash}
        alt=""
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 0.55, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
          style={{ scaleX: -1 }}
        className="
absolute
-top-40
-left-44
w-[950px]
-scale-x-100
rotate-[-14deg]
pointer-events-none
select-none
z-0
"
      />

      {/* ---------------- ORANGE SPLASH ---------------- */}

      <motion.img
        src={orangeSplash}
        alt=""
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 0.52, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
          style={{ scaleX: -1 }}
        className="
absolute
-bottom-44
-right-52
w-[900px]
-scale-x-100
rotate-[18deg]
pointer-events-none
select-none
z-0
"
      />

      {/* ---------------- MAIN CONTAINER ---------------- */}

      <div
        className="
        relative
        z-10
        max-w-[1650px]
        mx-auto
        px-10
        lg:px-20
      "
      >

        <div
          className="
          grid
          lg:grid-cols-[42%_58%]
          items-center
          gap-28
        "
        >

          {/* ===========================================================
                              LEFT SIDE
          =========================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >

          <div className="relative w-[580px] h-[730px]">

              {/* Beige Card */}

              <div
                className="
                absolute
                top-10
                left-10
                w-full
                h-full
                rounded-sm
                bg-[#DCC39D]
              "
              />

              {/* Floating Polaroid */}

              <motion.div

                animate={{
                  y: [0, -10, 0],
                  rotate: [-4, -2, -4],
                }}

                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}

                whileHover={{
                  rotate: 0,
                  scale: 1.03,
                  y: -12,
                }}

                className="
                absolute
                z-20
                bg-white
                p-5
                shadow-[18px_18px_0px_rgba(70,57,52,0.35)]
                cursor-pointer
              "
              >

                <motion.img

                  src={aboutPhoto}

                  alt="Hasan Raza"

                 className="
w-[560px]
h-[690px]
object-cover
object-[45%_center]
"

                  initial={{
                    filter: "grayscale(0%)",
                  }}

                  whileHover={{
                    filter: "grayscale(100%)",
                  }}

                  transition={{
                    duration: .45,
                  }}

                />

              </motion.div>

            </div>

          </motion.div>

          {/* ===========================================================
                            RIGHT SIDE
          =========================================================== */}

          <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.9,
    delay: 0.25,
    ease: "easeOut",
  }}
  className="
    flex
    flex-col
    justify-center
    relative
    lg:pr-12
  "
>

  {/* Small Decorative Line */}

  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: 90 }}
    viewport={{ once: true }}
    transition={{ delay: 0.6, duration: 0.7 }}
    className="h-[3px] bg-[#B89A74] mb-8 rounded-full"
  />

  {/* Heading */}

  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.45 }}
    className="
      font-serif
      text-[72px]
      lg:text-[92px]
      leading-none
      tracking-[-2px]
      text-[#4E3A33]
      mb-10
    "
  >
    About Me
  </motion.h2>

  {/* Subtitle */}

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className="
      text-[#9A7A58]
      uppercase
      tracking-[6px]
      text-sm
      mb-12
      font-medium
    "
  >
    Computer Science • AI • Software Engineering
  </motion.p>

  {/* Typewriter */}

  <div
    className="
      max-w-[760px]
      text-[25px]
      lg:text-[29px]
      leading-[1.8]
      text-[#5C4A40]
      font-light
      whitespace-pre-wrap
    "
  >
    {displayText}

    {!done && (
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
        }}
        className="font-semibold"
      >
        |
      </motion.span>
    )}
  </div>

  {/* Signature */}

  {done && (

    <motion.div

      initial={{
        opacity: 0,
        x: 30,
      }}

      animate={{
        opacity: 1,
        x: 0,
      }}

      transition={{
        duration: 0.7,
      }}

      className="
        flex
        justify-end
        mt-16
      "

    >

      <p
        className="
          font-hand
          text-[54px]
          text-[#6B4E3D]
        "
      >
        — Hasan Raza
      </p>

    </motion.div>

  )}

  {/* Decorative Quote */}

  <motion.div

    initial={{
      opacity: 0,
      y: 20,
    }}

    whileInView={{
      opacity: .12,
      y: 0,
    }}

    transition={{
      delay: 1.2,
      duration: 1,
    }}

    className="
      absolute
      -right-6
      bottom-4
      text-[220px]
      leading-none
      font-serif
      pointer-events-none
      select-none
      text-[#A8845D]
    "

  >

    “

  </motion.div>

</motion.div>

        </div>

      </div>

    </section>

  );

}
