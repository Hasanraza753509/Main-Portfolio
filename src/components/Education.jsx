import { motion } from "framer-motion";

import pinkSplash from "../assets/Pink-watersplash.png";
import orangeSplash from "../assets/Orange-watersplash.png";



const entries = [
  {
    title: "Bachelors of Technology in Computer Science Engineering",
    body: "Delhi Technological University, 2029\nGRADE - 8.6",
  },
  {
    title: "Contributor, GirlScript Summer of Code (GSSoC) 2026",
    body: "Actively contributed to open-source projects by collaborating with maintainers, resolving issues, implementing features, and improving documentation. Gained hands-on experience with Git, GitHub, code reviews, and distributed software development.",
  },
];

const pair = [
  {
    title: "IBM Professional Certificate: Machine Learning with Python",
    body: "Completed IBM's industry-recognized certification, gaining hands-on experience in machine learning concepts, data preprocessing, model development, evaluation, and practical implementation using Python and Scikit-learn.",
  },
  {
    title: "Competitive Programming",
    body: "Consistently solved 100+ coding challenges on LeetCode, enhancing expertise in Data Structures & Algorithms, optimizing solutions, and developing a systematic approach to tackling complex programming problems.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#F6F0E6] py-24"
    >

      {/* ================= PAPER GRAIN ================= */}

<div
  className="absolute inset-0 opacity-[0.025] pointer-events-none"
  style={{
    backgroundImage:
      "radial-gradient(#000 0.8px, transparent 0.8px)",
    backgroundSize: "18px 18px",
  }}
/>

{/* ================= PINK SPLASH ================= */}

<motion.img
  src={pinkSplash}
  alt=""
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 0.45, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2 }}
  style={{ scaleX: -1 }}
  className="
    absolute
    -top-40
    -left-44
    w-[900px]
    -rotate-12
    pointer-events-none
    select-none
    z-0
  "
/>

{/* ================= ORANGE SPLASH ================= */}

<motion.img
  src={orangeSplash}
  alt=""
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 0.42, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2 }}
  style={{ scaleX: -1 }}
  className="
    absolute
    -bottom-40
    -right-48
    w-[850px]
    rotate-[18deg]
    pointer-events-none
    select-none
    z-0
  "
/>

      <svg
       className="absolute -left-20 top-0 w-[600px] h-[600px] opacity-[0.02] z-0"
        viewBox="0 0 400 400"
        fill="none"
      >
        <g stroke="#2B2118" strokeWidth="1">
          <line x1="0" y1="0" x2="400" y2="400" />
          <line x1="400" y1="0" x2="0" y2="400" />
          <line x1="200" y1="0" x2="200" y2="400" />
          <line x1="0" y1="200" x2="400" y2="200" />
          <line x1="0" y1="100" x2="400" y2="300" />
          <line x1="0" y1="300" x2="400" y2="100" />
        </g>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-12">
        <h2 className="font-serif text-4xl text-ink leading-tight">
          Education, Certification &amp; Other Works
        </h2>

        <div className="space-y-8">
          {entries.map((e, i) => (
            <div key={e.title}>
              {i !== 0 && <hr className="border-ink/15 mb-8" />}
              <h3 className="font-body font-bold text-lg text-ink mb-2">
                {e.title}
              </h3>
              <p className="font-serif text-ink/75 whitespace-pre-line leading-relaxed">
                {e.body}
              </p>
            </div>
          ))}

          <hr className="border-ink/15" />

          <div className="grid sm:grid-cols-2 gap-8 pt-2">
            {pair.map((e) => (
              <div key={e.title}>
                <h3 className="font-body font-bold text-lg text-ink mb-2">
                  {e.title}
                </h3>
                <p className="font-serif text-ink/75 leading-relaxed">
                  {e.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
