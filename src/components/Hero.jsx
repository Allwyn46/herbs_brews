import { ArrowUpRight, Star } from "lucide-react";

function Hero() {
  return (
    <section className="hero hero-fullbleed">
      <video
        className="hero-bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1600&q=88"
        aria-label="Dates and nuts being carefully prepared"
      >
        <source
          src="https://videos.pexels.com/video-files/853801/853801-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-badge">
        <span>
          Small
          <br />
          batch,
          <br />
          <em>big heart.</em>
        </span>
        <span className="badge-star">✳</span>
      </div>

      <div className="hero-content">
        <p className="eyebrow">
          A little good for every day <span>✳</span>
        </p>
        <h1 className="split-heading">
          Good things, <br /> well{" "}
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
        <a className="button button-light magnetic" href="#shop">
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

      <div className="hero-caption">
        Sourced with care
        <br />
        <b>Coimbatore, TN</b>
      </div>
    </section>
  );
}

export default Hero;
