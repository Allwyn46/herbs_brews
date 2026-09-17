import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Star,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "California Almonds",
    category: "Dry Fruits & Nuts",
    note: "Creamy, crisp and naturally rich.",
    price: "₹320 – ₹1,180",
    image:
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Medjool Dates",
    category: "Dates",
    note: "Caramel-soft, handpicked for sweetness.",
    price: "₹260 – ₹920",
    image:
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Saffron Masala Chai",
    category: "Masala Tea & Blends",
    note: "A fragrant house blend with a golden finish.",
    price: "₹180 – ₹540",
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kaju Kani",
    category: "Kaju / Cashew",
    note: "Our signature, buttery cashew special.",
    price: "₹480 – ₹1,760",
    image:
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  "All favourites",
  "Dry Fruits & Nuts",
  "Dates",
  "Spices",
  "Masala Tea & Blends",
  "Kaju / Cashew",
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All favourites");
  const [menuOpen, setMenuOpen] = useState(false);
  const root = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return undefined;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    const raf = (time) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });
      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 38,
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        });
      });
      gsap.utils.toArray(".product-image").forEach((image) => {
        gsap.from(image, {
          clipPath: "inset(0 0 100% 0)",
          scale: 1.08,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, root);
    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  const visibleProducts =
    activeCategory === "All favourites"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div ref={root}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Herbs and Brews home">
          <span className="brand-mark">
            H<span>&</span>B
          </span>
          <span>
            Herbs <i>&</i> Brews
          </span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
          <a href="#shop" onClick={() => setMenuOpen(false)}>
            Shop
          </a>
          <a href="#story" onClick={() => setMenuOpen(false)}>
            Our story
          </a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>
            Visit us
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
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
      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">
              A little good for every day <span>✳</span>
            </p>
            <h1>
              Good things,
              <br />
              <em>well chosen.</em>
            </h1>
            <p className="hero-intro">
              Premium dry fruits, vibrant spices and soul-warming brews,
              thoughtfully sourced for your everyday rituals.
            </p>
            <a className="button button-dark" href="#shop">
              Explore the pantry <ArrowUpRight size={17} />
            </a>
            <div className="hero-trust">
              <span>
                <Star size={14} fill="currentColor" /> <b>4.9</b> / 5
              </span>
              <span>17 Google reviews</span>
              <span className="trust-dot" /> <span>Women-owned</span>
            </div>
          </div>
          <div className="hero-art">
            <img
              src="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1200&q=88"
              alt="A warm bowl of almonds and dried fruit"
            />
            <div className="hero-sticker">
              <span>
                Small
                <br />
                batch,
                <br />
                <em>big heart.</em>
              </span>
              <span className="sticker-star">✳</span>
            </div>
            <div className="hero-caption">
              Sourced with care
              <br />
              <b>Coimbatore, TN</b>
            </div>
          </div>
        </section>
        <section className="marquee">
          <div>
            DRY FRUITS <span>✳</span> NUTS <span>✳</span> MASALA TEA{" "}
            <span>✳</span> SPICES <span>✳</span> DATES <span>✳</span> KAJU KANI{" "}
            <span>✳</span>
          </div>
        </section>
        <section className="shop section-pad" id="shop">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">From our pantry</p>
              <h2>
                Favourites, <em>freshly packed.</em>
              </h2>
            </div>
            <a className="text-link" href="#contact">
              Need a recommendation? <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="category-scroll">
            {categories.map((category) => (
              <button
                className={
                  activeCategory === category ? "category active" : "category"
                }
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article className="product-card" key={product.name} data-reveal>
                <div className="product-image">
                  <img loading="lazy" src={product.image} alt={product.name} />
                  <span>{product.category}</span>
                </div>
                <div className="product-meta">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.note}</p>
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>
                <a
                  className="product-link"
                  href={`https://wa.me/919566577123?text=Hi%20Herbs%20%26%20Brews,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire on WhatsApp <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section className="story section-pad" id="story">
          <div className="story-image" data-reveal>
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=85"
              alt="Aromatic spices in small bowls"
            />
            <span className="image-note">
              From our kitchen
              <br />
              to yours
            </span>
          </div>
          <div className="story-copy" data-reveal>
            <p className="eyebrow">Why Herbs & Brews</p>
            <h2>
              A pantry with <em>purpose.</em>
            </h2>
            <p>
              We believe the best food does not need a long introduction. It
              starts with a good ingredient, a trusted source, and the time to
              choose well.
            </p>
            <p>
              From the first warm sip of masala chai to the handful of nuts
              packed for school, every product is picked for freshness, flavour
              and the little rituals that make a day feel cared for.
            </p>
            <a className="text-link" href="#visit">
              Meet us in Coimbatore <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <section className="testimonial section-pad" data-reveal>
          <div className="quote-mark">“</div>
          <blockquote>
            “The dry fruits are so fresh, and their masala tea is now a morning
            ritual in our home.”
          </blockquote>
          <div className="reviewer">
            <span className="avatar">S</span>
            <span>
              <b>Shreya M.</b>
              <small>Google review · Local guide</small>
            </span>
            <span className="stars">★★★★★</span>
          </div>
        </section>
        <section className="visit section-pad" id="visit">
          <div className="visit-copy">
            <p className="eyebrow">Come say hello</p>
            <h2>
              Your neighbourhood
              <br />
              <em>goodness stop.</em>
            </h2>
            <div className="visit-details">
              <div>
                <MapPin size={18} />
                <p>
                  <b>C-90, Vilankurichi Road</b>
                  <br />
                  Opposite Ashwini Ragam Bakery
                  <br />
                  Coimbatore, Tamil Nadu
                </p>
              </div>
              <div>
                <Clock3 size={18} />
                <p>
                  <b>Open daily, 10 AM – 9 PM</b>
                  <br />
                  Walk in, browse slow, take home good things.
                </p>
              </div>
            </div>
            <a
              className="button button-outline"
              href="https://maps.google.com/?q=Herbs+%26+Brews+Coimbatore"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="map-card">
            <iframe
              title="Herbs and Brews location map"
              loading="lazy"
              src="https://www.google.com/maps?q=Vilankurichi%20Road%20Coimbatore&output=embed"
            />
            <div className="map-pin">
              <MapPin size={17} fill="currentColor" /> Herbs & Brews
            </div>
          </div>
        </section>
        <section className="contact section-pad" id="contact">
          <div>
            <p className="eyebrow">Your pantry, your way</p>
            <h2>
              Drop in, call up,
              <br />
              <em>or WhatsApp us.</em>
            </h2>
          </div>
          <div className="contact-actions">
            <p>Delivery, pickup and in-store shopping, all welcome.</p>
            <a
              className="button button-light"
              href="https://wa.me/919566577123"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Start an order{" "}
              <ArrowUpRight size={17} />
            </a>
            <a className="phone-link" href="tel:+919566577123">
              +91 95665 77123
            </a>
          </div>
        </section>
      </main>
      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">
            H<span>&</span>B
          </span>
          <span>
            Herbs <i>&</i> Brews
          </span>
        </a>
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
        className="floating-order"
        href="https://wa.me/919566577123"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={20} />
        <span>Order on WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
