import PixelGuide from "./PixelGuide";

import { motion } from "framer-motion";

import pinkSplash from "../assets/Pink-watersplash.png";
import orangeSplash from "../assets/Orange-watersplash.png";



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
    <section
  id="contact"
  className="relative overflow-hidden bg-[#F6F0E6] py-28"
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
  CONTACT
</h1>

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
