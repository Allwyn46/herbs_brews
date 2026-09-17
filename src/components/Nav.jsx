import { Menu, MessageCircle, X } from "lucide-react";
import Brand from "./Brand";

function Nav({ isScrolled, menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={isScrolled ? "site-header is-scrolled" : "site-header"}>
      <Brand />
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
        <a href="#shop" onClick={closeMenu}>
          Shop
        </a>
        <a href="#story" onClick={closeMenu}>
          Our story
        </a>
        <a href="#visit" onClick={closeMenu}>
          Visit us
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
      <a
        className="header-order"
        href="https://wa.me/919566577123"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={17} /> <span>Order on WhatsApp</span>
      </a>
      <button
        className="menu-button"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

export default Nav;
