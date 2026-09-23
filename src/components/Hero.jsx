import { ArrowUpRight, Star } from "lucide-react";

function Hero() {
  return (
    <section
      data-hero
      className="relative flex h-screen min-h-[560px] w-full items-center justify-center overflow-hidden"
    >
      <div
        data-hero-video-frame
        className="absolute inset-0 h-full w-full"
      >
        <video
          className="h-full w-full object-cover"
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
      </div>

      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/35 to-black/50"
        aria-hidden="true"
      />

      <div className="absolute right-6 top-28 z-30 flex h-28 w-28 -rotate-6 items-center justify-center rounded-full bg-[#fdf8f0]/95 text-center text-[13px] leading-tight text-[#1c160f] shadow-lg md:right-16 md:top-32">
        <span>
          Small
          <br />
          batch,
          <br />
          <em className="not-italic text-[#c1622f]">big heart.</em>
        </span>
        <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#c1622f] text-xs text-[#fdf8f0]">
          ✳
        </span>
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-xl flex-col items-center px-6 text-center text-[#fdf8f0]">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#fdf8f0]/85">
          A little good for every day <span>✳</span>
        </p>

        <h1
          data-split-heading
          className="mt-4 text-5xl font-serif leading-tight text-[#fdf8f0] md:text-6xl"
        >
          Good things, <br /> well{" "}
          <em className="relative not-italic text-[#e07a4e]">
            chosen.
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 260 12"
              aria-hidden="true"
            >
              <path
                data-underline-path
                d="M2 8 C54 2, 165 2, 258 7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </em>
        </h1>

        <p className="mt-6 text-base text-[#fdf8f0]/85 md:text-lg">
          Premium dry fruits, vibrant spices and soul-warming brews,
          thoughtfully sourced for your everyday rituals.
        </p>

        <a
          data-magnetic
          className="mt-8 flex items-center gap-2 rounded-full bg-[#fdf8f0] px-6 py-3 text-sm font-semibold !text-[#1c160f] transition-colors hover:bg-white"
          href="#shop"
        >
          Explore the pantry <ArrowUpRight size={17} />
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-[#fdf8f0]/85">
          <span className="flex items-center gap-1">
            <Star size={14} fill="currentColor" /> <b>4.9</b> / 5
          </span>
          <span>17 Google reviews</span>
          <span className="h-1 w-1 rounded-full bg-[#fdf8f0]/60" />
          <span>Women-owned</span>
        </div>
      </div>

      <div className="absolute bottom-7 right-6 z-20 text-right text-[13px] leading-relaxed text-[#fdf8f0]/90 md:right-16">
        Sourced with care
        <br />
        <b>Coimbatore, TN</b>
      </div>
    </section>
  );
}

export default Hero;