"use client";

const BIRKEN_ITEMS = [
  {
    name: "Birkenstock Boston Suede",
    color: "Taupe",
    fit: "Regular fit",
    condition: "New / Boxed",
    img: "/birkens1.jpg",
    description:
      "Iconic closed-toe Boston in soft taupe suede with the signature contoured footbed—easy everyday wear, clean and timeless.",
  },
  {
    name: "Birkenstock Arizona Suede",
    color: "Soft Beige",
    fit: "Regular fit",
    condition: "Lightly used",
    img: "/birkens2.jpg",
    description:
      "The classic two-strap Arizona in suede. Minimal, comfortable, and built for daily rotation with a premium feel.",
  },
  {
    name: "Birkenstock Arizona EVA",
    color: "Triple Black",
    fit: "Narrow fit",
    condition: "New / No box",
    img: "/birkens3.jpg",
    description:
      "Water-friendly Arizona EVA in all-black. Lightweight, easy to clean, perfect for travel, rain, and quick daily wear.",
  },
  {
    name: "Birkenstock Boston Leather",
    color: "Mocha",
    fit: "Regular fit",
    condition: "Pre-loved",
    img: "/birkens4.jpg",
    description:
      "Boston in smooth leather with a rich mocha tone. Classic look with broken-in comfort—easy to style with anything.",
  },
];

export default function BirkenstockPage() {
  return (
    <div className="min-h-screen">
      {/* NAVBAR (light) */}
      <header className="sticky top-0 z-40 border-b border-[#e5e5e0] bg-[#fafaf8]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="text-2xl md:text-3xl tracking-[0.25em] font-light text-[#0f0f0f]">
            STORE OVERSIZED
          </div>

          <nav className="hidden gap-6 text-xs md:flex">
            <a
              href="/"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Home
            </a>

            <span className="uppercase tracking-[0.18em] text-[#0f0f0f] font-medium">
              Birkenstock
            </span>

            <a
              href="/crocs"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Crocs
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
        {/* HERO (white text on image) */}
        <section className="relative flex min-h-[70vh] w-full items-end justify-start overflow-hidden">
          <img
            src="/birkens1.jpg"
            alt="Birkenstock lineup"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* dark overlay for readable WHITE text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.35),_transparent_60%)]" />

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 pb-20 pt-24">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/80">
              <span>BIRKENSTOCK</span>
              <span className="h-px w-10 bg-white/70" />
              <span>DISPLAY ONLY</span>
            </div>

            <h1 className="text-4xl font-light leading-tight md:text-6xl text-white">
              Arizona & Boston Essentials.
            </h1>

            <p className="max-w-xl text-sm md:text-base text-white/90">
              Current Birkenstock pairs available at STORE OVERSIZED. Lineup
              updates as pairs move — screenshot this, then DM to confirm.
            </p>
          </div>
        </section>

        {/* GRID OF AVAILABLE PAIRS */}
        <section className="mx-auto mt-10 max-w-6xl px-4">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 className="text-lg md:text-xl uppercase tracking-[0.25em] text-[#0f0f0f]">
              Available Birkenstock Pairs
            </h2>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#6a6a6a]">
              No checkout · DM to reserve
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BIRKEN_ITEMS.map((item) => (
              <article
                key={item.name + item.color}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#e5e5e0] bg-white transition-transform duration-200 hover:-translate-y-1 hover:border-[#0f0f0f]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#0f0f0f] border border-[#e5e5e0]">
                    {item.condition}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 px-4 py-4">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-[#4a4a4a]">
                    {item.color}
                  </div>

                  <h3 className="text-base font-light md:text-lg text-[#0f0f0f]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[12px] leading-relaxed text-[#4a4a4a]">
                    {item.description}
                  </p>

                  <span className="mt-3 inline-block w-fit rounded-full border border-[#e5e5e0] bg-[#fafaf8] px-2 py-1 text-[11px] uppercase tracking-[0.18em] text-[#0f0f0f]">
                    {item.fit}
                  </span>

                  <p className="mt-3 text-[11px] text-[#6a6a6a]">
                    DM on Instagram / WhatsApp with a screenshot of this card to
                    confirm availability.
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
