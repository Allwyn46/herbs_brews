import { ArrowUpRight, Clock3, MapPin } from "lucide-react";

function Visit() {
  return (
    <section className="visit section-pad" id="visit">
      <div className="visit-copy">
        <p className="eyebrow">Come say hello</p>
        <h2>
          Your neighbourhood goodness <em>stop.</em>
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
          className="button button-outline magnetic"
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
  );
}

export default Visit;
