import { ArrowUpRight, Star } from "lucide-react";

function Hero() {
  return (
    <section className="hero section-pad">
      <div className="hero-copy">
        <p className="eyebrow">
          A little good for every day <span>✳</span>
        </p>
        <h1 className="split-heading">
          Good things, well{" "}
          <em>
            chosen.
            <svg
              className="headline-underline"
              viewBox="0 0 260 12"
              aria-hidden="true"
            >
              <path className="underline-path" d="M2 8 C54 2, 165 2, 258 7" />
            </svg>
          </em>
        </h1>
        <p className="hero-intro">
          Premium dry fruits, vibrant spices and soul-warming brews,
          thoughtfully sourced for your everyday rituals.
        </p>
        <a className="button button-dark magnetic" href="#shop">
          Explore the pantry <ArrowUpRight size={17} />
        </a>
        <div className="hero-trust">
          <span>
            <Star size={14} fill="currentColor" /> <b>4.9</b> / 5
          </span>
          <span>17 Google reviews</span>
          <span className="trust-dot" />
          <span>Women-owned</span>
        </div>
      </div>
      <div className="hero-art" data-image-reveal>
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
  );
}

export default Hero;
