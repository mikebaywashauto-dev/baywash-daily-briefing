/*
 * DESIGN: Industrial Broadsheet — Archive Page
 * - Same design system as Home
 * - Lists previous briefing editions
 */

import { Link } from "wouter";

// Archive editions array — add previous briefings here (newest first)
const editions: {
  number: number;
  date: string;
  day: string;
  headline: string;
  stories: string[];
}[] = [
  {
    number: 1,
    date: "April 13, 2026",
    day: "Sunday",
    headline: "ADAS Calibration Goes Enterprise, Tariffs Bite Harder, and B.C. Bets Big on Apprentices",
    stories: [
      "B.C.'s ICBC Invests $13.3M in Collision Repair Apprenticeship Grants",
      "Tariffs Adding ~$100 Per Repair Order as 73% of Large Shops Feel the Squeeze",
      "CollisionRight Deploys asTech ADAS Calibration Across 130 Locations",
    ],
  },
];

export default function Archive() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f0e8", color: "#1a1a1a" }}>
      {/* Edition Stripe */}
      <div className="w-full" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase" style={{ color: "#e05a1a" }}>
              Archive
            </span>
          </div>
          <Link href="/" className="font-mono text-[0.65rem] tracking-[0.1em] uppercase hover:underline" style={{ color: "#a0977d" }}>
            &larr; Latest Briefing
          </Link>
        </div>
      </div>

      {/* Masthead */}
      <header className="container pt-6 pb-4">
        <div className="border-b-2 pb-3" style={{ borderColor: "#1a1a1a" }}>
          <h1 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Briefing Archive
          </h1>
          <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase mt-1" style={{ color: "#78716c" }}>
            Previous editions of The Daily Briefing
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="container py-8">
        {editions.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-display text-xl font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: "'Oswald', sans-serif", color: "#78716c" }}>
              No Previous Editions Yet
            </p>
            <p className="font-body text-[0.95rem]" style={{ color: "#78716c" }}>
              This is the first edition. Check back tomorrow for the archive.
            </p>
            <Link
              href="/"
              className="inline-block mt-6 font-mono text-[0.75rem] tracking-[0.1em] uppercase px-4 py-2 hover:opacity-80 transition-opacity"
              style={{ backgroundColor: "#e05a1a", color: "#f5f0e8" }}
            >
              Read Today's Briefing
            </Link>
          </div>
        ) : (
          <div className="space-y-6 max-w-3xl">
            {editions.map((edition) => (
              <article
                key={edition.number}
                className="border-b pb-6"
                style={{ borderColor: "#1a1a1a20" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="font-display text-2xl font-bold leading-none"
                    style={{ fontFamily: "'Oswald', sans-serif", color: "#e05a1a" }}
                  >
                    #{edition.number}
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-wide uppercase" style={{ color: "#78716c" }}>
                    {edition.date} &middot; {edition.day}
                  </span>
                </div>
                <h3
                  className="font-display text-lg font-bold uppercase leading-tight mb-2"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {edition.headline}
                </h3>
                <ul className="space-y-1">
                  {edition.stories.map((story, i) => (
                    <li key={i} className="font-body text-[0.9rem] flex items-start gap-2" style={{ color: "#3d3a34" }}>
                      <span style={{ color: "#e05a1a" }}>&#9670;</span>
                      {story}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-display text-sm font-bold uppercase tracking-tight" style={{ fontFamily: "'Oswald', sans-serif", color: "#f5f0e8" }}>
              The Daily Briefing
            </span>
            <span className="font-mono text-[0.6rem] tracking-wide" style={{ color: "#78716c" }}>
              &copy; {new Date().getFullYear()} Baywash Auto Repair
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
