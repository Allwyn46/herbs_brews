import { ArrowUpRight } from "lucide-react";

function Story() {
  return (
    <section className="story section-pad" id="story">
      <div className="story-image" data-image-reveal>
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
      <div className="story-copy">
        <p className="eyebrow">Why Herbs & Brews</p>
        <h2 className="split-heading">
          A pantry with{" "}
          <em>
            purpose.
            <svg
              className="headline-underline"
              viewBox="0 0 150 12"
              aria-hidden="true"
            >
              <path className="underline-path" d="M2 8 C38 2, 100 2, 148 7" />
            </svg>
          </em>
        </h2>
        <p>
          We believe the best food does not need a long introduction. It starts
          with a good ingredient, a trusted source, and the time to choose well.
        </p>
        <p>
          From the first warm sip of masala chai to the handful of nuts packed
          for school, every product is picked for freshness, flavour and the
          little rituals that make a day feel cared for.
        </p>
        <a className="text-link" href="#visit">
          Meet us in Coimbatore <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

export default Story;
