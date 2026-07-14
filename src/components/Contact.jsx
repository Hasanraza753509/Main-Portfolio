import PixelGuide from "./PixelGuide";

const contacts = [
  {
    label: "GITHUB",
    value: "@Hasanraza753509",
    href: "https://github.com/Hasanraza753509",
  },
  {
    label: "LINKEDIN",
    value: "Hasan Raza",
    href: "https://www.linkedin.com/in/hasan-raza-a58893385/",
  },
  {
    label: "PHONE",
    value: "+91 75350 97867",
    href: "tel:7535097867",
  },
  {
    label: "EMAIL",
    value: "Hasanraza1112211@gmail.com",
    href: "mailto:Hasanraza1112211@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-sand py-24 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 800 600"
      >
        <path
          d="M0 100C150 50 200 250 350 150S550 0 700 100"
          stroke="#2B2118"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 450C150 350 250 550 400 400S600 300 800 450"
          stroke="#2B2118"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6">
        <p className="font-script text-4xl md:text-5xl text-ink text-right mb-4 -rotate-2">
          Let's work together
        </p>

        <h2 className="font-serif text-4xl text-ink mt-16 mb-10">Get in touch</h2>


        <div className="max-w-xl">
          {contacts.map((c, i) => (
            <div key={c.label}>
              {i !== 0 && <hr className="border-ink/30" />}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4">
                <span className="font-body font-bold text-sm text-ink w-24 shrink-0">
                  {c.label}
                </span>
                <a
                  href={c.href}
                  className="font-serif text-ink/85 hover:text-mochaDark transition-colors break-all"
                >
                  {c.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="relative max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-ink/20 text-sm text-ink/60">
        © {new Date().getFullYear()} Hasan Raza. Built with React &amp; Tailwind.
      </footer>

      <PixelGuide />
    </section>
  );
}
