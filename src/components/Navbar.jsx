import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-[#F6F0E6]/85 backdrop-blur-xl border-b border-[#D7C4AE]/60"
      : "bg-transparent"
  }`}
>
      <nav className="max-w-[1500px] mx-auto h-28 px-10 flex items-center justify-between">

        
       <a
  href="#top"
  className="
    font-display
    text-2xl
    font-semibold
    tracking-tight
    text-ink
    transition-transform
    duration-300
    hover:scale-105
  "
>
  HR<span className="text-mocha">.</span>
</a>

        <ul
  className="
    hidden
    md:flex
    items-center
    gap-10
    font-body
    text-[15px]
    font-medium
    text-ink/80
  "
>
          {links.map((l) => (
            <li key={l.href}>
              <a
  href={l.href}
  className="
    relative
    transition-all
    duration-300
    hover:text-[#8B5E34]
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-[#8B5E34]
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
>
  {l.label}
</a>


            </li>
          ))}
        </ul>

        <a
  href="#contact"
  className="
    hidden
    md:inline-flex
    items-center
    justify-center
    rounded-full
    border-2
    border-ink
    px-8
    py-3
    text-[15px]
    font-semibold
    tracking-wide
    text-ink
    transition-all
    duration-300
    hover:bg-ink
    hover:text-[#F6F0E6]
    hover:scale-105
    active:scale-95
  "
>
  Get In Touch
</a>



        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
       <ul
  className="
    md:hidden
    bg-[#F6F0E6]
    backdrop-blur-xl
    px-8
    pb-8
    pt-2
    flex
    flex-col
    gap-5
    font-body
    text-ink
    border-t
    border-[#D7C4AE]/60
  "
>



          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {scrolled && (
  <div
    className="
      absolute
      bottom-0
      left-0
      w-full
      h-[1px]
      bg-gradient-to-r
      from-transparent
      via-[#C6A77A]
      to-transparent
      opacity-70
    "
  />
)}


    </header>
  );
}
