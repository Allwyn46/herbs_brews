import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "The dry fruits are so fresh, and their masala tea is now a morning ritual in our home.",
    name: "Shreya M.",
    detail: "Google review · Local guide",
    initial: "S",
  },
  {
    quote:
      "Everything feels thoughtfully chosen. The saffron chai makes an ordinary afternoon feel special.",
    name: "Ananya R.",
    detail: "Google review · Local guide",
    initial: "A",
  },
  {
    quote:
      "The team helped me put together the loveliest pantry hamper. Fresh, warm and beautifully packed.",
    name: "Meera K.",
    detail: "Google review · Local guide",
    initial: "M",
  },
];

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion || isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length,
    );
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length);
  };

  return (
    <section
      className="testimonial section-pad"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="quote-mark">“</div>
      <div className="testimonial-carousel" aria-live="polite">
        <div className="testimonial-slide" key={activeTestimonial.name}>
          <blockquote>“{activeTestimonial.quote}”</blockquote>
          <div className="reviewer">
            <span className="avatar">{activeTestimonial.initial}</span>
            <span>
              <b>{activeTestimonial.name}</b>
              <small>{activeTestimonial.detail}</small>
            </span>
            <span className="stars">★★★★★</span>
          </div>
        </div>
      </div>
      <div className="testimonial-controls">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous testimonial"
        >
          <ArrowLeft size={17} />
        </button>
        <div className="testimonial-dots" aria-label="Testimonial slides">
          {testimonials.map((testimonial, index) => (
            <button
              className={index === activeIndex ? "is-active" : ""}
              type="button"
              key={testimonial.name}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={showNext} aria-label="Next testimonial">
          <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
