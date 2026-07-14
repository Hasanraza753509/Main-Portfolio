const groups = [
  {
    title: "Programming & Core CS",
    items: [
      "Python",
      "C++",
      "JavaScript",
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "DBMS (Basic)",
      "Problem Solving",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Model Optimization",
      "RAG",
      "LLM",
      "Pipeline Building",
    ],
  },
  {
    title: "Development & Tools",
    items: [
      "HTML5",
      "CSS3",
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Git",
      "GitHub",
      "Django Framework",
    ],
  },
];



export default function Skills() {
  return (
    <section id="skills" className="relative bg-mocha py-24 overflow-hidden">

      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 800 600"
        fill="none"
      >
        <path
          d="M0 300C100 200 150 400 250 300S400 100 500 250 650 450 800 300"
          stroke="#F3ECE1"
          strokeWidth="2"
        />
        <path
          d="M0 150C120 250 200 50 320 150S480 350 600 200 720 50 800 150"
          stroke="#F3ECE1"
          strokeWidth="2"
        />
        <path
          d="M0 450C120 350 220 550 340 450S520 250 640 400 760 550 800 450"
          stroke="#F3ECE1"
          strokeWidth="2"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="font-display text-5xl text-cream">Skill</h2>
        <p className="font-body text-cream/80 mt-1 mb-14">What I Know!</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-body text-xl text-cream font-semibold mb-4">
                {g.title}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="
        list-none
        px-4
        py-2
        rounded-full
        border
        border-cream/20
        bg-white/5
        text-cream
        font-body
        text-sm
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:scale-105
        hover:bg-cream
        hover:text-mocha
        hover:border-cream
        hover:shadow-lg
        hover:shadow-cream/20
        cursor-pointer
      "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
