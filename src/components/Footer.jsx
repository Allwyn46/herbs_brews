import { ChevronDown, MessageCircle } from "lucide-react";
import Brand from "./Brand";

function Footer() {
  return (
    <>
      <footer>
        <Brand />
        <p>Good food. Thoughtfully chosen.</p>
        <div className="footer-social">
          <a href="https://instagram.com" aria-label="Instagram">
            Instagram
          </a>
          <a href="#top" aria-label="Back to top">
            <ChevronDown size={19} className="back-top" />
          </a>
        </div>
      </footer>
      <a
        className="floating-order magnetic"
        href="https://wa.me/919566577123"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={20} />
        <span>Order on WhatsApp</span>
      </a>
      <div className="cursor-pill" aria-hidden="true">
        View
      </div>
    </>
  );
}

export default Footer;
