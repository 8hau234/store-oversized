"use client";

import React, { useState } from "react";

// simple data for each full-screen section
const SLIDES = [
  {
    label: "STORE OVERSIZED",
    title: "Oversized Comfort.",
    subtitle: "Curated Crocs & Birkenstock in bigger, comfier fits.",
    img: "/hero1.jpg",
  },
  {
    label: "CROCS SELECTION",
    title: "Classic & Mega Crush",
    subtitle: "From clean white classics to chunky platforms.",
    img: "/hero2.jpg",
  },
  {
    label: "BIRKENSTOCK LINEUP",
    title: "Arizona & Boston Essentials",
    subtitle: "Neutral suede, soft footbeds, everyday comfort.",
    img: "/hero3.jpg",
  },
  {
    label: "LAST PAIRS",
    title: "Final Sizes. Don’t Sleep.",
    subtitle: "End-of-run sizes and pre-loved steals, updated weekly.",
    img: "/birken1.jpg",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* NAVBAR (light) */}
      <header className="sticky top-0 z-40 border-b border-[#e5e5e0] bg-[#fafaf8]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* LOGO */}
          <div className="text-xl md:text-2xl tracking-[0.25em] font-light whitespace-nowrap text-[#0f0f0f]">
            STORE OVERSIZED
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden gap-6 text-xs md:flex">
            <a
              href="/"
              className="uppercase tracking-[0.18em] text-[#0f0f0f] font-medium"
            >
              Home
            </a>
            <a
              href="/crocs"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Crocs
            </a>
            <a
              href="/birkenstock"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Birkenstock
            </a>
            <a
              href="/size"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Size
            </a>
            <a
              href="/authenticity"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Authenticity
            </a>
            <a
              href="/contact"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Contact
            </a>
          </nav>

          {/* HAMBURGER */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className="block h-[2px] w-5 bg-[#0f0f0f]" />
              <span className="block h-[2px] w-5 bg-[#0f0f0f]" />
              <span className="block h-[2px] w-5 bg-[#0f0f0f]" />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#e5e5e0] bg-[#fafaf8]">
            <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs">
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#0f0f0f]"
              >
                Home
              </a>
              <a
                href="/crocs"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#4a4a4a] hover:text-[#0f0f0f]"
              >
                Crocs
              </a>
              <a
                href="/birkenstock"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#4a4a4a] hover:text-[#0f0f0f]"
              >
                Birkenstock
              </a>
              <a
                href="/size"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#4a4a4a] hover:text-[#0f0f0f]"
              >
                Size
              </a>
              <a
                href="/authenticity"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#4a4a4a] hover:text-[#0f0f0f]"
              >
                Authenticity
              </a>
              <a
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="uppercase tracking-[0.2em] text-[#4a4a4a] hover:text-[#0f0f0f]"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* FULLSCREEN SECTIONS */}
      <main>
        {SLIDES.map((slide, i) => (
          <section
            key={i}
            className="relative flex min-h-screen w-full items-end overflow-hidden"
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* ✅ FIX: Dark overlay so WHITE text is visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.35),_transparent_60%)]" />

            {/* content */}
            <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-24">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/80">
                <span>{slide.label}</span>
                <span className="h-px w-10 bg-white/70" />
                <span>
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(SLIDES.length).padStart(2, "0")}
                </span>
              </div>

              <h1 className="mt-4 text-3xl md:text-6xl font-light text-white">
                {slide.title}
              </h1>

              <p className="mt-3 max-w-xl text-sm md:text-base text-white/90">
                {slide.subtitle}
              </p>

              {/* CTA buttons only on first slide */}
              {i === 0 && (
                <>
                  <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em]">
                    <a
                      href="/crocs"
                      className="bg-white px-6 py-2 text-black hover:bg-white/90 transition"
                    >
                      Shop Crocs
                    </a>

                    <a
                      href="/birkenstock"
                      className="border border-white px-6 py-2 text-white hover:bg-white/10 transition"
                    >
                      Shop Birkenstock
                    </a>
                  </div>

                  <div className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/70">
                    Scroll to explore ↓
                  </div>
                </>
              )}
            </div>
          </section>
        ))}

        {/* FOOTER (light) */}
        <footer className="border-t border-[#e5e5e0] bg-[#fafaf8] py-10">
          <div className="mx-auto max-w-6xl px-4 text-sm text-[#6a6a6a]">
            © {new Date().getFullYear()} STORE OVERSIZED
          </div>
        </footer>
      </main>
    </div>
  );
}
