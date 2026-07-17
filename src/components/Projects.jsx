import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";


const projects = [
  {
    number: "01",
    title: "LLM Backdoor Audit",
    subtitle: "Mechanistic Interpretability Pipeline",
    stack: [
      "Python",
      "PyTorch",
      "Mechanistic Interpretability",
      "PCA",
      "K-Means",
      "Gradio",
    ],
    github: "#",
    demo: "#",
    points: [
      "Built an interpretability auditing pipeline for GPT-2 Small to detect hidden backdoors without access to the original training data.",
      "Captured transformer activations using PyTorch forward hooks and isolated poisoned behaviour through PCA and K-Means clustering.",
      "Delivered an interactive Gradio dashboard for visualising anomalous activations layer-by-layer.",
    ],
  },

  {
    number: "02",
    title: "Phishing Website Detection",
    subtitle: "Machine Learning Security System",
    stack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Random Forest",
      "SVM",
      "Feature Engineering",
    ],
    github: "#",
    demo: "#",
    points: [
      "Engineered 30+ lexical and domain-based URL features for phishing detection.",
      "Benchmarked Random Forest and SVM models to optimise recall while reducing false positives.",
      "Created a reusable feature extraction pipeline suitable for real-world deployment.",
    ],
  },

  {
    number: "03",
    title: "AI Code Review Assistant",
    subtitle: "GitHub & GitLab Reviewer",
    stack: [
      "Node.js",
      "JavaScript",
      "GitHub API",
      "GitLab API",
      "AI",
      "Webhooks",
    ],
    github: "#",
    demo: "#",
    points: [
      "Built an AI reviewer that automatically analyses pull requests and posts inline suggestions.",
      "Understands multi-file code context to identify bugs, security issues and design flaws.",
      "Integrates directly into GitHub and GitLab review workflows.",
    ],
  },

  {
    number: "04",
    title: "Automated AI Compression",
    subtitle: "Model Optimisation Pipeline",
    stack: [
      "TensorFlow",
      "Python",
      "Pruning",
      "Quantization",
      "Edge AI",
    ],
    github: "#",
    demo: "#",
    points: [
      "Reduced model size by up to 75% using pruning and post-training quantisation.",
      "Benchmarked latency, memory and accuracy trade-offs before deployment.",
      "Prepared lightweight models suitable for edge devices.",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#F6F0E6] py-32"
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

      {/* ================= ENGINEERING GRID ================= */}

      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right,#B89A74 1px,transparent 1px),
            linear-gradient(to bottom,#B89A74 1px,transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* ================= WATERMARK ================= */}

      <h1
        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        text-[220px]
        font-serif
        text-[#A8845D]
        opacity-[0.04]
        whitespace-nowrap
        pointer-events-none
        select-none
      "
      >
        PROJECTS
      </h1>

      <div className="relative z-10 max-w-[1550px] mx-auto px-10">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-24"
        >

          <div className="w-20 h-[3px] bg-[#B89A74] rounded-full mb-8" />

          <h2
            className="
            font-serif
            text-[68px]
            text-[#4E3A33]
            leading-none
            tracking-[-2px]
          "
          >
            Featured Projects
          </h2>

          <p
            className="
            mt-6
            text-[22px]
            max-w-3xl
            text-[#6D5A4F]
            leading-relaxed
          "
          >
            A selection of research, AI systems and software projects focused
            on machine learning, security, developer tools and intelligent
            automation.
          </p>

        </motion.div>
{/* ================= PROJECT GRID ================= */}

<div className="flex flex-col gap-10 w-full max-w-[1500px] mx-auto">
    {projects.map((project, index) => (
    <motion.article
      key={project.number}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{ y: -5 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-[#E2D5C7]
        bg-[#FBF8F4]/90
        backdrop-blur-sm
        shadow-[0_12px_35px_rgba(62,46,38,.07)]
        p-8
      "
    >
      {/* Soft Glow */}
      <div
        className="
          absolute
          -right-32
          -top-32
          w-80
          h-80
          rounded-full
          bg-[#F2E3CF]
          blur-3xl
          opacity-50
          group-hover:scale-110
          transition-all
          duration-700
        "
      />

      {/* Number */}
      <span
        className="
          absolute
          right-10
          top-10
          text-[120px]
          font-serif
          text-[#DCC8B2]
          opacity-30
          select-none
          pointer-events-none
        "
      >
        {project.number}
      </span>

      {/* Accent */}
      <div className="w-16 h-[3px] bg-[#B89A74] rounded-full mb-8" />

      {/* Title */}
      <h3
        className="
          font-serif
          text-[46px]
          leading-tight
          text-[#3F312B]
          max-w-4xl
        "
      >
        {project.title}
      </h3>

      {/* Subtitle */}
      <p
        className="
          mt-3
          text-[22px]
          text-[#8B7261]
        "
      >
        {project.subtitle}
      </p>

      {/* Tech Stack */}
      

      <div className="h-px bg-[#E2D5C7] my-10" />

      {/* Description */}
<div className="grid lg:grid-cols-[2fr_1fr] gap-12 my-8">

  {/* Left */}

  <div className="space-y-4">

    {project.points.map((point) => (
      <div key={point} className="flex gap-3">
        <div className="w-2 h-2 rounded-full bg-[#B58C61] mt-3 shrink-0" />
        <p className="text-[17px] leading-7 text-[#55443A]">
          {point}
        </p>
      </div>
    ))}

  </div>

  {/* Right */}

  <div>

    <h4 className="text-xs uppercase tracking-[3px] text-[#A08674] mb-5">
      Technologies
    </h4>

    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech) => (
       <motion.span
  key={tech}
  whileHover={{
    y: -4,
    scale: 1.06,
  }}
  transition={{
    type: "spring",
    stiffness: 350,
    damping: 18,
  }}
  className="
    px-3
    py-2
    rounded-full
    border
    border-[#D9C5B2]
    bg-[#F5EBDD]
    text-sm
    text-[#6A5346]
    cursor-default
    transition-colors
    duration-300
    hover:bg-[#EEDBC6]
    hover:border-[#B58C61]
    hover:text-[#4E3A33]
    hover:shadow-[0_8px_18px_rgba(181,140,97,0.22)]
  "
>
  {tech}
</motion.span>
      ))}
    </div>

  </div>

</div>

      {/* Footer */}
      <div
        className="
          mt-12
          pt-8
          border-t
          border-[#E2D5C7]
          flex
          items-center
          justify-between
        "
      >
        <div className="flex gap-6">
          <a
            href={project.github}
            className="
              px-5
              py-2.5
              rounded-full
              border
              border-[#D9C5B2]
              hover:bg-[#F4E7D6]
              transition
            "
          >
            GitHub
          </a>

          <a
            href={project.demo}
            className="
              flex
              items-center
              gap-2
              font-medium
              text-[#4E3A33]
            "
          >
            View Project
            <span>↗</span>
          </a>
        </div>

        <span
          className="
            uppercase
            tracking-[4px]
            text-xs
            text-[#A08674]
          "
        >
          Research Project
        </span>
      </div>
      </motion.article>
  ))}
</div>

      </div>
    </section>
  );
}



