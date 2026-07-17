import { motion } from "framer-motion";

import pinkSplash from "../assets/Pink-watersplash.png";
import orangeSplash from "../assets/Orange-watersplash.png";

const groups = [
  {
    title: "Programming & Core CS",
    description: "Building strong computer science foundations.",
    items: [
      "Python",
      "C++",
      "JavaScript",
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Problem Solving",
    ],
  },

  {
    title: "Artificial Intelligence",
    description: "Creating intelligent systems with modern AI.",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "RAG",
      "LLMs",
      "Model Optimization",
      "Pipeline Building",
    ],
  },

  {
    title: "Development & Tools",
    description: "Turning ideas into production-ready software.",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Django",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#F6F0E6] py-36"
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



      {/* Huge Background Watermark */}

      <h1
        className="
          absolute
          top-16
          left-1/2
          -translate-x-1/2
          text-[220px]
          font-serif
          text-[#A8845D]
          opacity-[0.08]
          select-none
          pointer-events-none
          whitespace-nowrap
        "
      >
        SKILLS & EXPERTISE
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >

          <div className="w-20 h-[3px] bg-[#B89A74] rounded-full mb-8" />

          <h2
            className="
              font-serif
              text-[72px]
              leading-none
              tracking-[-2px]
              text-[#4E3A33]
            "
          >
            Skills & Expertise
          </h2>

          <p
            className="
              mt-6
              text-[24px]
              max-w-2xl
              leading-relaxed
              text-[#6B564A]
            "
          >
            Technologies and tools I use to transform ideas into
            intelligent products, research, and scalable software.
          </p>

        </motion.div>

        {/* ===============================
              SKILL CARDS (Part 2 starts here)
        =============================== */}

        <div className="grid lg:grid-cols-3 gap-10">

          {groups.map((group, index) => (
  <motion.div
    key={group.title}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.15,
    }}
    whileHover={{
      y: -12,
      rotate: index === 1 ? 0 : index === 0 ? -1 : 1,
      transition: {
        duration: 0.35,
      },
    }}
    className="
      group
      relative
      rounded-[34px]
      overflow-hidden
      border
      border-[#D8C4AB]
      bg-[#F9F4EB]/90
      backdrop-blur-md
      p-8
      shadow-[0_20px_60px_rgba(86,63,44,0.10)]
      transition-all
      duration-500
    "
  >
    {/* Decorative Blob */}

    <div
      className="
        absolute
        -right-12
        -top-12
        w-44
        h-44
        rounded-full
        bg-[#EFD8B9]
        opacity-40
        blur-3xl
        group-hover:scale-125
        transition-all
        duration-700
      "
    />

    {/* Number */}

    <div
      className="
        absolute
        top-7
        right-8
        text-[70px]
        font-serif
        text-[#C9AF90]
        opacity-20
        select-none
      "
    >
      0{index + 1}
    </div>

    {/* Title */}

    <h3
      className="
        text-[34px]
        leading-tight
        font-serif
        text-[#4E3A33]
        mb-3
      "
    >
      {group.title}
    </h3>

    {/* Description */}

    <p
      className="
        text-[#7A665A]
        leading-relaxed
        mb-8
        text-[17px]
      "
    >
      {group.description}
    </p>

    {/* Divider */}

    <div className="w-full h-px bg-[#D8C4AB] mb-8" />

    {/* Skill List */}

    <div className="space-y-4">
      {group.items.map((skill) => (
        <motion.div
          key={skill}
          whileHover={{ x: 6 }}
          className="
            flex
            items-center
            gap-4
            text-[#5D493F]
            text-lg
            transition-all
            duration-300
          "
        >
          {/* Bullet */}

          <div
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-[#B58C61]
              shrink-0
            "
          />

          {/* Skill */}

          <span className="font-medium">
            {skill}
          </span>
        </motion.div>
      ))}
    </div>

    {/* Bottom Accent */}

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{
        delay: 0.4 + index * 0.2,
        duration: 0.8,
      }}
      className="
        h-[3px]
        rounded-full
        bg-[#C29A70]
        mt-10
      "
    />

    {/* Hover Glow */}

    <div
      className="
        absolute
        inset-0
        rounded-[34px]
        border
        border-transparent
        group-hover:border-[#D7B997]
        transition-all
        duration-500
        pointer-events-none
      "
    />
  </motion.div>
))}

        </div>

      </div>

    </section>
  );
};