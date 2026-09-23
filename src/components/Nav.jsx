import { Menu, MessageCircle, X } from "lucide-react";
import Brand from "./Brand";

function Nav({ isScrolled, menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-all duration-300 md:px-12 ${
        isScrolled
          ? "bg-[#fdf8f0]/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className={isScrolled ? "text-[#1c160f]" : "text-[#fdf8f0]"}>
        <Brand />
      </div>

      {/* Desktop nav links */}
      <nav
        className={`hidden items-center gap-8 text-sm font-medium md:flex ${
          isScrolled ? "text-[#1c160f]" : "text-[#fdf8f0]"
        }`}
      >
        <a
          href="#shop"
          onClick={closeMenu}
          className="transition-opacity hover:opacity-70"
        >
          Shop
        </a>
        <a
          href="#story"
          onClick={closeMenu}
          className="transition-opacity hover:opacity-70"
        >
          Our story
        </a>
        <a
          href="#visit"
          onClick={closeMenu}
          className="transition-opacity hover:opacity-70"
        >
          Visit us
        </a>
        <a
          href="#contact"
          onClick={closeMenu}
          className="transition-opacity hover:opacity-70"
        >
          Contact
        </a>
      </nav>

      {/* WhatsApp CTA — desktop only, always solid regardless of scroll state */}
      <a
        className="hidden items-center gap-2 rounded-full bg-[#c1622f] px-5 py-2.5 text-sm font-semibold text-[#fdf8f0] transition-colors hover:bg-[#a8512518] md:flex"
        href="https://wa.me/919566577123"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={17} /> <span>Order on WhatsApp</span>
      </a>

      {/* Mobile menu toggle */}
      <button
        className={`z-50 flex items-center justify-center md:hidden ${
          menuOpen
            ? "text-[#1c160f]"
            : isScrolled
              ? "text-[#1c160f]"
              : "text-[#fdf8f0]"
        }`}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Full-screen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#fdf8f0] text-[#1c160f] transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <a href="#shop" onClick={closeMenu} className="text-2xl font-medium">
          Shop
        </a>
        <a href="#story" onClick={closeMenu} className="text-2xl font-medium">
          Our story
        </a>
        <a href="#visit" onClick={closeMenu} className="text-2xl font-medium">
          Visit us
        </a>
        <a href="#contact" onClick={closeMenu} className="text-2xl font-medium">
          Contact
        </a>
        <a
          className="mt-4 flex items-center gap-2 rounded-full bg-[#c1622f] px-6 py-3 text-base font-semibold text-[#fdf8f0]"
          href="https://wa.me/919566577123"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <MessageCircle size={17} /> <span>Order on WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

export default Nav;
