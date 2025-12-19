"use client";

import React, { useState } from "react";

type Category =
  | "Classic Clog"
  | "LiteRide Clog"
  | "Crocband Clog"
  | "Baya Clog"
  | "Classic Slide";

const CROCS_ITEMS = [
  {
    name: "Classic Clog",
    color: "Black",
    type: "Unisex",
    condition: "New / Tag",
    img: "/1crocs.jpeg",
    price: 49.99,
    category: "Classic Clog",
    description:
      "The original Classic Clog. Lightweight, water-friendly, and perfect for any occasion.",
  },
  {
    name: "Classic Clog",
    color: "White",
    type: "Unisex",
    condition: "New / Tag",
    img: "/4crocs.jpeg", // Reusing image
    price: 49.99,
    category: "Classic Clog",
    description:
      "Fresh white Classic Clogs. The ultimate canvas for your Jibbitz™ charms.",
  },
  {
    name: "LiteRide 360 Clog",
    color: "Navy / Pepper",
    type: "Unisex",
    condition: "New / Boxed",
    img: "/2crocs.jpeg", // Reusing image as placeholder
    price: 64.99,
    category: "LiteRide Clog",
    description:
      "Innovative comfort with LiteRide™ foam technology. softness and modern athletic style.",
  },
  {
    name: "Crocband Clog",
    color: "Charcoal / Ocean",
    type: "Unisex",
    condition: "New / Tag",
    img: "/3crocs.jpeg", // Reusing image as placeholder
    price: 54.99,
    category: "Crocband Clog",
    description:
      "Vintage sneaker style meets Crocs comfort. Sporty midsole racing stripe for a retro look.",
  },
  {
    name: "Baya Clog",
    color: "Pepper",
    type: "Unisex",
    condition: "New / Tag",
    img: "/5crocs.jpeg", // Reusing image as placeholder
    price: 49.99,
    category: "Baya Clog",
    description:
      "Designed with advanced ventilation and breathable comfort. The Baya keeps you cool.",
  },
  {
    name: "Classic Slide",
    color: "Bone",
    type: "Unisex",
    condition: "New / Tag",
    img: "/1crocs.jpeg", // Reusing image
    price: 29.99,
    category: "Classic Slide",
    description:
      "All the comfort of the Classic Clog, now in a slide. Easy on, easy off.",
  },
];

const CATEGORIES: Category[] = [
  "Classic Clog",
  "LiteRide Clog",
  "Crocband Clog",
  "Baya Clog",
  "Classic Slide",
];

export default function CrocsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const filteredItems = selectedCategory
    ? CROCS_ITEMS.filter((item) => item.category === selectedCategory)
    : [];

  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-[#e5e5e0] bg-[#fafaf8]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="/" className="text-2xl md:text-3xl tracking-[0.25em] font-light text-[#0f0f0f]">
            STORE OVERSIZED
          </a>

          <nav className="hidden gap-6 text-xs md:flex">
            <a
              href="/"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Home
            </a>

            <span className="uppercase tracking-[0.18em] text-[#0f0f0f]">
              Crocs
            </span>

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

          <div className="text-xs uppercase tracking-[0.18em] text-[#4a4a4a]">
            Display only
          </div>
        </div>
      </header>

      <main className="pb-16">
        {/* HERO */}
        <section className="relative flex min-h-[50vh] items-end overflow-hidden">
          <img
            src="/1crocs.jpeg"
            alt="Crocs lineup"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* light-friendly overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/10" />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-24 text-center">
            <h1 className="text-4xl md:text-6xl font-light text-[#0f0f0f] tracking-tight">
              Crocs Collection
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm md:text-base text-[#4a4a4a]">
              Discover our range of iconic comfort. Select a style to view available colors.
            </p>

            {/* CATEGORY BUTTONS - LARGER */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`min-w-[180px] rounded-full px-10 py-4 text-sm md:text-base uppercase tracking-[0.2em] transition-all duration-300 
                    ${selectedCategory === cat
                      ? "bg-[#0f0f0f] text-white shadow-xl scale-110"
                      : "bg-white border border-[#e5e5e0] text-[#0f0f0f] hover:border-[#0f0f0f] hover:-translate-y-1 hover:shadow-md"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT GRID */}
        {selectedCategory && (
          <section className="mx-auto mt-10 max-w-6xl px-4 animate-fadeIn">
            <div className="mb-6 flex items-baseline justify-between border-b border-[#e5e5e0] pb-4">
              <h2 className="text-xl md:text-2xl uppercase tracking-[0.25em] text-[#0f0f0f]">
                {selectedCategory}
              </h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-xs uppercase tracking-[0.2em] text-[#6a6a6a] hover:text-[#0f0f0f]"
              >
                Clear Filter
              </button>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, idx) => (
                <article
                  key={item.category + item.color + idx}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white transition hover:-translate-y-1 hover:shadow-xl shadow-sm border border-transparent hover:border-[#e5e5e0]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#fafaf8]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#0f0f0f] shadow-sm backdrop-blur-sm">
                      {item.condition}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex justify-between items-start">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[#6a6a6a]">
                        {item.color}
                      </div>
                      <div className="font-medium text-[#0f0f0f]">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>

                    <h3 className="mt-2 text-lg font-normal text-[#0f0f0f]">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#6a6a6a]">
                      {item.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <span className="inline-block w-full rounded-lg bg-[#fafaf8] py-2 text-center text-[10px] uppercase tracking-[0.2em] text-[#0f0f0f] group-hover:bg-[#0f0f0f] group-hover:text-white transition-colors">
                        View Details
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
