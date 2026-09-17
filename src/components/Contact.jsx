import { ArrowUpRight, MessageCircle } from "lucide-react";

function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div>
        <p className="eyebrow">Your pantry, your way</p>
        <h2>
          Drop in, call up,
          <br />
          or <em>WhatsApp</em> us.
        </h2>
      </div>
      <div className="contact-actions">
        <p>Delivery, pickup and in-store shopping, all welcome.</p>
        <a
          className="button button-light magnetic"
          href="https://wa.me/919566577123"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} /> Start an order <ArrowUpRight size={17} />
        </a>
        <a className="phone-link" href="tel:+919566577123">
          +91 95665 77123
        </a>
      </div>
    </section>
  );
}

export default Contact;
