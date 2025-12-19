"use client";

const CROCS_ITEMS = [
  {
    name: "Crocs Classic Clog",
    color: "Black",
    type: "Unisex",
    condition: "New / Tag",
    img: "/1crocs.jpeg",
    description:
      "The original Crocs Classic Clog in all-black. Lightweight, breathable, and designed for all-day wear with Iconic Crocs Comfort™.",
  },
  {
    name: "Crocs Classic Platform Clog",
    color: "Light Pink",
    type: "Unisex",
    condition: "New / Boxed",
    img: "/2crocs.jpeg",
    description:
      "An elevated take on the Classic Clog featuring a platform sole. Soft pastel finish with added height while maintaining signature comfort.",
  },
  {
    name: "Crocs Classic Cars™ Clog",
    color: "Red · Lightning McQueen",
    type: "Unisex",
    condition: "New / Tag",
    img: "/3crocs.jpeg",
    description:
      "Official Disney·Pixar Cars™ Crocs with Lightning McQueen graphics. A bold, collectible pair made for comfort and fun.",
  },
  {
    name: "Crocs Classic Clog",
    color: "Hot Pink",
    type: "Unisex",
    condition: "New / Tag",
    img: "/4crocs.jpeg",
    description:
      "Vibrant hot pink Classic Crocs. Lightweight, water-friendly, and easy to style with bold or casual outfits.",
  },
  {
    name: "Crocs Mega Crush Clog",
    color: "White",
    type: "Unisex",
    condition: "New / Boxed",
    img: "/5crocs.jpeg",
    description:
      "The Mega Crush Clog features an exaggerated platform sole with enhanced traction and modern proportions for a fashion-forward look.",
  },
];

export default function CrocsPage() {
  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-[#e5e5e0] bg-[#fafaf8]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="text-2xl md:text-3xl tracking-[0.25em] font-light">
            STORE OVERSIZED
          </div>

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
        <section className="relative flex min-h-[60vh] items-end overflow-hidden">
          <img
            src="/1crocs.jpeg"
            alt="Crocs lineup"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* light-friendly overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/55 to-white/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.10),_transparent_55%)]" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-24">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#4a4a4a]">
              <span>CROCS</span>
              <span className="h-px w-10 bg-[#4a4a4a]" />
              <span>DISPLAY ONLY</span>
            </div>

            <h1 className="mt-4 text-4xl md:text-6xl font-light text-[#0f0f0f]">
              Classic · Platform · Mega Crush.
            </h1>

            <p className="mt-3 max-w-xl text-sm md:text-base text-[#4a4a4a]">
              Current Crocs available at STORE OVERSIZED. Stock updates as items
              move — screenshot and DM to confirm availability.
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="mx-auto mt-10 max-w-6xl px-4">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-lg uppercase tracking-[0.25em] text-[#0f0f0f]">
              Available Crocs
            </h2>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#6a6a6a]">
              Display only · DM to reserve
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CROCS_ITEMS.map((item) => (
              <article
                key={item.name + item.color}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#e5e5e0] bg-white transition hover:-translate-y-1 hover:border-[#0f0f0f]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#0f0f0f] border border-[#e5e5e0]">
                    {item.condition}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 px-4 py-4">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-[#4a4a4a]">
                    {item.color}
                  </div>

                  <h3 className="text-base md:text-lg font-light text-[#0f0f0f]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[12px] leading-relaxed text-[#4a4a4a]">
                    {item.description}
                  </p>

                  <span className="mt-3 inline-block w-fit rounded-full border border-[#e5e5e0] bg-[#fafaf8] px-2 py-1 text-[11px] uppercase tracking-[0.18em] text-[#0f0f0f]">
                    {item.type}
                  </span>

                  <p className="mt-3 text-[11px] text-[#6a6a6a]">
                    DM with a screenshot of this card to confirm availability.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
