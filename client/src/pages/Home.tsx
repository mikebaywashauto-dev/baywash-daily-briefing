/*
 * BAYWASH DAILY BRIEFING — Home.tsx
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 128;
const BRIEFING_DATE = "September 12, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/PmKHMDyBxdSRDqVf.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/hGdaZlSSAZUQWdzb.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mJMRWHRhrrLfjlmx.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FKXtUqESULacGBxK.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rkRZwIrlgInPSKEh.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "THREE DAYS / SEPT. 15 / U.S. / EXPORTS",
    tagColor: "#b91c1c",
    headline: "Three Days to the U.S. Scope Change — Put Export Jobs on Their Own Board",
    summary: "The White House’s September 8 proclamation modifies the specified Canadian products subject to its 50% Section 338 duty. The additions and removals take effect for goods entered for U.S. consumption, or withdrawn from warehouse for consumption, on or after 12:01 a.m. Eastern on September 15. The Federal Register public-inspection record identifies the final publication as scheduled for September 14.",
    whyItMatters: "This is a future-dated U.S. import measure for specified Canadian goods, not a new Canadian repair-parts rate. For a cross-border wholesale, specialty-vehicle or customer export job that may enter the U.S. next week, ask the exporter or broker for the exact HTS result, origin, U.S. entry date and landed quote. Do not change an ordinary Canadian service quote on the strength of a headline.",
    source: "White House / Federal Register — Section 338 scope modification",
    sourceUrl: "https://www.federalregister.gov/documents/2026/09/14/2026-18839/modifying-the-scope-of-products-of-canada-subject-to-the-additional-duties-imposed-to-offset",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SECTION 338 + 232 / U.S. ENTRY / EXACT HTS / BROKER",
    tagColor: "#0369a1",
    headline: "If an Export Is Covered, Verify the U.S. Duty Stack Line by Line",
    summary: "The U.S. proclamation states that its modified Section 338 duties apply in addition to duties imposed under Section 232. That is an export-side control for a specified Canadian product entering the U.S. after the September 15 effective time. The proclamation does not make every Canadian-made vehicle, component or repair part automatically subject to both measures.",
    whyItMatters: "A CUSMA certificate, a product description such as “auto part,” or a prior quote is not a final landed-cost answer for a potentially affected export. Before a customer-export, specialty-vehicle or wholesale job crosses the border, get a broker-confirmed HTS result, origin, U.S. entry date, applicable duties, freight and quote expiry. Keep Canadian import treatment separate.",
    source: "White House — Section 338 motor-vehicle scope modification",
    sourceUrl: "https://www.whitehouse.gov/presidential-actions/2026/09/modifying-the-scope-of-products-of-canada-subject-to-the-additional-duties-imposed-to-offset-canadian-discrimination-against-the-united-states-with-respect-to-motor-vehicles/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CANADA / ACTIVE SURTAX / CAD / NON-CUMULATIVE",
    tagColor: "#15803d",
    headline: "Canadian Receiving Is a Separate Importer Record — Not an Export Estimate",
    summary: "CBSA says Canada’s active United States Surtax Order applies 15%, 25% or 50% of value for duty to listed U.S.-origin goods imported into Canada. For commercial imports, the importer declares the applicable surtax code on its Commercial Accounting Declaration. CBSA also says that if the 2026 Order and the Steel Derivative Goods Surtax Order could both apply, only the 2026 Order’s surtax applies; the two Canadian surtaxes are not cumulative.",
    whyItMatters: "Your supplier or importer, not the service writer, must confirm the part number’s tariff item, U.S. marking/origin, entry result, landed price, stock and quote expiry. That written confirmation protects the estimate and avoids double-counting Canadian surtaxes. It does not establish the result for a separate U.S.-bound export.",
    source: "CBSA — Customs Notice 26-23",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "The U.S. Section 338 scope additions and removals take effect September 15 for specified Canadian goods entered for U.S. consumption or withdrawn from warehouse.",
    sourceUrl: "https://www.whitehouse.gov/presidential-actions/2026/09/modifying-the-scope-of-products-of-canada-subject-to-the-additional-duties-imposed-to-offset-canadian-discrimination-against-the-united-states-with-respect-to-motor-vehicles/",
  },
  {
    icon: "🇨🇦",
    text: "CBSA says Canada’s active surtax covers listed U.S.-origin goods at 15%, 25% or 50% of value for duty, with the Order’s schedules setting coverage and rate.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "📋",
    text: "For commercial goods, CBSA says proof of origin may be an invoice or other document containing the CUSMA Annex 5-A minimum data elements.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🧾",
    text: "CBSA lists CAD surtax codes 26186A, 26186B and 26186C for the current 15%, 25% and 50% Canadian rates, respectively.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "⚖️",
    text: "Where both apply, CBSA says the 2026 United States Surtax Order and Steel Derivative Goods Surtax Order do not cumulate; only the 2026 Order’s surtax applies.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
];

const tipOfTheDay = {
  title: "Run a Saturday Export / Import Split Board",
  text: "Review every material job with a cross-border leg. Record direction of trade, part number, actual tariff item, origin/marking, broker or importer reply, entry date, stock/ETA, landed price, customer quote expiry and a named owner. Put U.S. entries on a September 15 watch list; keep every Canadian-import result on its own line. Never turn a pending trade event into a universal fee.",
};

const quoteOfTheDay = {
  text: "The duties imposed pursuant to Proclamation 11048, as modified in this proclamation, shall apply in addition to duties imposed pursuant to section 232.",
  author: "White House proclamation",
  title: "September 8, 2026 — Section 338 motor-vehicle scope modification",
};

const rideOfTheDay = {
  name: "1970 Pontiac GTO Judge Ram Air III — Orbit Orange, Ontario-Plated",
  description: "Orbit Orange paint, black hood stripes and Ram Air III muscle make this 1970 Pontiac GTO Judge the right iron for an Ontario shop on a Saturday evening. Its rule for the bay is equally direct: separate the export file from the Canadian import record, then rely on the exact tariff line and a verified broker or supplier answer before you promise a price or date.",
  image: HOTROD_IMG,
};

// --- Animated Section Component ---
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1a1a1a] font-['Source_Sans_3'] selection:bg-[#e05a1a] selection:text-white">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#1a1a1a] text-white py-3 px-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="bg-[#e05a1a] text-white px-2 py-0.5 text-xs font-bold tracking-tighter uppercase">Live</span>
            <h1 className="font-['Oswald'] text-xl font-bold tracking-tight uppercase">Baywash Daily Briefing</h1>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-gray-400">
            <Link href="/" className="text-[#e05a1a] hover:text-white transition-colors">Today's Edition</Link>
            <Link href="/archive" className="hover:text-white transition-colors">Archive</Link>
            <span className="text-gray-600">|</span>
            <span>Shop Portal</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="border-b-4 border-[#1a1a1a] pb-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-['Source_Code_Pro'] text-sm font-bold text-[#e05a1a]">EDITION NO. {BRIEFING_NUMBER}</span>
                <span className="h-px w-12 bg-gray-300"></span>
                <span className="font-['Source_Code_Pro'] text-sm text-gray-500 uppercase tracking-widest">{BRIEFING_DAY}, {BRIEFING_DATE}</span>
              </div>
              <h2 className="font-['Oswald'] text-5xl md:text-6xl font-bold leading-none uppercase tracking-tight mb-4">
                The Daily<br />
                <span className="text-[#e05a1a]">Briefing</span>
              </h2>
              <p className="text-gray-600 text-base max-w-xl leading-relaxed">
                Intelligence for Canadian automotive shop owners and technicians. Curated daily from industry sources, trade publications, and government filings.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex gap-2 flex-wrap justify-end">
                {["Three Days: Sept. 15", "Exports: Separate", "CAD: Confirm Live", "'70 GTO Judge"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Saturday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Automotive Shop Owner Reviewing Cross-Border Parts Records — Baywash Daily Briefing Edition No. 128"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 128 — Saturday, September 12, 2026 — Three Days / Export Split / CAD Control</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Three Days to the Next U.S. Scope Change
              </h3>
            </div>
          </div>
        </AnimatedSection>

        {/* Lead Stories */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-['Oswald'] text-2xl font-bold uppercase tracking-tight">Lead Stories</h2>
            <div className="flex-1 h-px bg-[#1a1a1a]"></div>
            <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">3 Stories</span>
          </div>

          <div className="space-y-12">
            {stories.map((story, index) => (
              <AnimatedSection key={story.id} delay={index * 100}>
                <article className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-gray-300">
                  {/* Image */}
                  <div className="md:col-span-2">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={story.image}
                        alt={story.headline}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className="text-white px-2 py-1 text-xs font-bold tracking-widest uppercase"
                          style={{ backgroundColor: story.tagColor }}
                        >
                          {story.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 flex flex-col gap-4">
                    <h3 className="font-['Oswald'] text-2xl md:text-3xl font-bold leading-tight uppercase">
                      {story.headline}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">{story.summary}</p>

                    {/* Why It Matters */}
                    <div className="bg-[#1a1a1a] text-white p-5 mt-2">
                      <p className="font-['Source_Code_Pro'] text-xs font-bold text-[#e05a1a] uppercase tracking-widest mb-2">Why It Matters to Your Shop</p>
                      <p className="text-sm leading-relaxed text-gray-200">{story.whyItMatters}</p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-2">
                      <span className="font-['Source_Code_Pro'] text-xs text-gray-500">{story.source}</span>
                      <a
                        href={story.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#e05a1a] hover:underline uppercase tracking-wider"
                      >
                        Read Source →
                      </a>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Quick Hits + Tip + Quote Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Quick Hits */}
          <AnimatedSection className="lg:col-span-2">
            <div className="border-t-4 border-[#1a1a1a] pt-6">
              <h2 className="font-['Oswald'] text-xl font-bold uppercase tracking-tight mb-6">Quick Hits</h2>
              <div className="space-y-5">
                {quickHits.map((hit, i) => (
                  <div key={i} className="flex gap-4 pb-5 border-b border-gray-200 last:border-0">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{hit.icon}</span>
                    <div>
                      <p className="text-sm leading-relaxed text-gray-700">{hit.text}</p>
                      <a
                        href={hit.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#e05a1a] hover:underline mt-1 inline-block uppercase tracking-wider"
                      >
                        Source →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Tip + Quote */}
          <AnimatedSection className="flex flex-col gap-6">
            {/* Tip of the Day */}
            <div className="bg-[#e05a1a] text-white p-6 flex-1">
              <p className="font-['Source_Code_Pro'] text-xs font-bold uppercase tracking-widest mb-3 opacity-80">Tip of the Day</p>
              <h3 className="font-['Oswald'] text-lg font-bold uppercase leading-tight mb-3">{tipOfTheDay.title}</h3>
              <p className="text-sm leading-relaxed opacity-90">{tipOfTheDay.text}</p>
            </div>

            {/* Quote of the Day */}
            <div className="border-l-4 border-[#1a1a1a] pl-5 py-2">
              <p className="font-['Source_Code_Pro'] text-xs font-bold text-[#e05a1a] uppercase tracking-widest mb-3">Quote of the Day</p>
              <blockquote className="font-['Oswald'] text-xl font-bold leading-tight mb-3 uppercase">
                "{quoteOfTheDay.text}"
              </blockquote>
              <p className="text-sm font-bold">{quoteOfTheDay.author}</p>
              <p className="text-xs text-gray-500 mt-1">{quoteOfTheDay.title}</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Ride of the Day */}
        <AnimatedSection>
          <div className="border-t-4 border-[#e05a1a] pt-8">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-['Oswald'] text-2xl font-bold uppercase tracking-tight">Ride of the Day</h2>
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Pontiac GTO Judge Ram Air III</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={rideOfTheDay.image}
                  alt={rideOfTheDay.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <h3 className="font-['Oswald'] text-2xl md:text-3xl font-bold uppercase leading-tight">{rideOfTheDay.name}</h3>
                <p className="text-gray-700 leading-relaxed text-base">{rideOfTheDay.description}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t-2 border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-['Oswald'] text-lg font-bold uppercase">Baywash Daily Briefing</p>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest mt-1">Edition No. {BRIEFING_NUMBER} — {BRIEFING_DATE}</p>
            </div>
            <p className="text-xs text-gray-400 max-w-md text-center md:text-right leading-relaxed">
              Curated intelligence for Canadian automotive shop owners. Content is sourced from public industry publications and news sources. Not financial or legal advice.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
