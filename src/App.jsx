import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import Contact from "./components/Contact";
import CategoryTicker from "./components/CategoryTicker";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ProductSection from "./components/ProductSection";
import Story from "./components/Story";
import Testimonial from "./components/Testimonial";
import Visit from "./components/Visit";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [activeCategory, setActiveCategory] = useState("All favourites");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const root = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      const splitHeadings = gsap.utils
        .toArray(".split-heading")
        .map((heading) => {
          const split = new SplitText(heading, {
            type: "chars",
            charsClass: "split-char",
          });
          const chars = split.chars;
          gsap.set(chars, {
            clipPath: "inset(0 0 100% 0)",
            yPercent: 110,
            rotate: 4,
            transformOrigin: "0 100%",
          });
          const timeline = gsap.timeline({
            scrollTrigger: heading.closest(".hero")
              ? undefined
              : {
                  trigger: heading,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
          });
          timeline.to(chars, {
            clipPath: "inset(0 0 0% 0)",
            yPercent: 0,
            rotate: 0,
            duration: 0.7,
            stagger: 0.02,
            ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          });
          if (heading.closest(".hero")) timeline.play(0);
          const underline = heading.querySelector(".underline-path");
          if (underline) {
            const length = underline.getTotalLength();
            gsap.set(underline, {
              strokeDasharray: length,
              strokeDashoffset: length,
            });
            timeline.to(
              underline,
              { strokeDashoffset: 0, duration: 0.45, ease: "power2.out" },
              "-=0.25",
            );
          }
          return split;
        });
      gsap.utils.toArray("[data-image-reveal]").forEach((element) => {
        const image = element.querySelector("img");
        const isProductImage = element.classList.contains("product-image");
        gsap.from(element, {
          autoAlpha: 0,
          y: 28,
          scale: 0.97,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            toggleActions: isProductImage
              ? "play none none none"
              : "play none none reverse",
          },
        });
        gsap.fromTo(
          image,
          { yPercent: 7 },
          {
            yPercent: -7,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
        if (element.classList.contains("story-image"))
          gsap.fromTo(
            image,
            { filter: "grayscale(1) sepia(.28) saturate(.55)" },
            {
              filter: "grayscale(0) sepia(0) saturate(1)",
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                end: "center 50%",
                scrub: true,
              },
            },
          );
      });
      const ticker = gsap.to(".ticker-track", {
        xPercent: -50,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
      const tickerElement = root.current.querySelector(".marquee");
      tickerElement?.addEventListener("mouseenter", () =>
        ticker.timeScale(0.2),
      );
      tickerElement?.addEventListener("mouseleave", () => ticker.timeScale(1));
      gsap.utils.toArray(".magnetic").forEach((button) => {
        const moveX = gsap.quickTo(button, "x", {
          duration: 0.35,
          ease: "power3.out",
        });
        const moveY = gsap.quickTo(button, "y", {
          duration: 0.35,
          ease: "power3.out",
        });
        button.addEventListener("mousemove", (event) => {
          const rect = button.getBoundingClientRect();
          moveX((event.clientX - (rect.left + rect.width / 2)) * 0.18);
          moveY((event.clientY - (rect.top + rect.height / 2)) * 0.18);
        });
        button.addEventListener("mouseleave", () => {
          moveX(0);
          moveY(0);
        });
      });
      const cursor = root.current.querySelector(".cursor-pill");
      const cursorX = gsap.quickTo(cursor, "x", {
        duration: 0.2,
        ease: "power3.out",
      });
      const cursorY = gsap.quickTo(cursor, "y", {
        duration: 0.2,
        ease: "power3.out",
      });
      root.current.addEventListener("mousemove", (event) => {
        cursorX(event.clientX);
        cursorY(event.clientY);
      });
      root.current.querySelectorAll(".product-card").forEach((card) => {
        card.addEventListener("mouseenter", () =>
          cursor.classList.add("is-visible"),
        );
        card.addEventListener("mouseleave", () =>
          cursor.classList.remove("is-visible"),
        );
      });
      return () => {
        splitHeadings.forEach((split) => split.revert());
        ticker.kill();
      };
    }, root);
    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return (
    <div ref={root}>
      <Nav
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main id="top">
        <Hero />
        <CategoryTicker />
        <ProductSection
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Story />
        <Testimonial />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
