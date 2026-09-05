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

const BRIEFING_NUMBER = 121;
const BRIEFING_DATE = "September 5, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/vQfWGWxFXBbHQBFd.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/WjHGFxliQLlqjKzW.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KpIZnpJMCETwAOZj.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ShZcweeMLUvAGzHR.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gSvcccOxDcePqFmh.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SEPT. 8 / 3 DAYS / C$27.6B / 648 ENTRIES",
    tagColor: "#b91c1c",
    headline: "Three Days to September 8: Make the 648-Line Table a Parts Check, Not a Blanket Surcharge",
    summary: "Finance Canada says new countermeasures on C$27.6 billion of U.S. products take effect at 12:01 a.m. on September 8. Its authoritative effective-date table contains 648 entries concentrated in sectors including steel and aluminum, dairy, appliances, agricultural equipment, pulp and paper, plastics and electronics. The department says its descriptions are illustrative and the tariff-item list must be read with Canada’s Customs Tariff.",
    whyItMatters: "The table is item-specific, not a blanket automotive-parts list, and a U.S. supplier address alone does not settle treatment. Before confirming a material repair quote, get the part number, origin/marking, tariff-item result, landed price, stock position and quote expiry. Do not add one generalized tariff charge to every repair order.",
    source: "Finance Canada — official counter-tariff list",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/canadas-response-us-tariffs/complete-list-us-products-subject-to-counter-tariffs.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRAILERS / 25% REPORTED / VERIFY TARIFF ITEM",
    tagColor: "#0369a1",
    headline: "Trailer and Semi-Trailer Work Is a Specific September 8 Exposure — Verify Before You Quote",
    summary: "A September 5 National Post report says Canada’s planned package includes a 25% tariff on trailers and semi-trailers, alongside higher duties on selected steel, aluminum and industrial inputs. Finance Canada’s tariff-item schedule remains the operational reference: it shows 648 September 8 entries and says descriptions are illustrative.",
    whyItMatters: "For trailer, fleet and fabrication work, make this a supplier-verification trigger—not a blanket rate for every repair line. Get the exact part number, origin/marking, tariff-item result, current landed price, stock status, quote expiry and delivery date. Do not infer a 25% rate for ordinary passenger-vehicle parts because trailers are named in reporting.",
    source: "National Post — September 5, 2026",
    sourceUrl: "https://ca.news.yahoo.com/canada-tariffs-coming-michigan-not-080029139.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SECTION 338 / CURRENT / JAN. 2027 THREAT / TWO CLOCKS",
    tagColor: "#15803d",
    headline: "Keep Today’s Section 338 Exposure Separate from the January Auto-Parts Threat",
    summary: "Deloitte reports the U.S. set a 50% additional tariff rate on certain Canadian goods effective August 22 under Section 338. Its update says USMCA-origin status does not create an exemption from these specific measures, subject to stated exceptions. It separately reports the President’s vow to raise tariffs on all Canadian cars, trucks, auto parts and steel to 50% from January 1, 2027.",
    whyItMatters: "The January measure is a forward-looking threat in the cited reporting, not a new current Canadian repair-parts rate. Treat the active Section 338 measures and the proposed January escalation as separate clocks. Confirm the specific part’s present cost and availability with the supplier, and do not turn a future threat into a universal customer surcharge.",
    source: "Deloitte tax@hand — September 5, 2026",
    sourceUrl: "https://www.taxathand.com/article/41713/United-States/2026/Trade-corner-4-September-2026",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "September 8 is three days away; Finance Canada’s official effective-date table shows 648 entries and calls its descriptions illustrative.",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/canadas-response-us-tariffs/complete-list-us-products-subject-to-counter-tariffs.html",
  },
  {
    icon: "🔩",
    text: "New C$27.6B countermeasures begin at 12:01 a.m. September 8; existing counter-tariffs against U.S. autos continue separately.",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/canadas-response-us-tariffs/complete-list-us-products-subject-to-counter-tariffs.html",
  },
  {
    icon: "🛞",
    text: "National Post reports the package includes a 25% tariff on trailers and semi-trailers—use the official tariff-item table to verify the exact line.",
    sourceUrl: "https://ca.news.yahoo.com/canada-tariffs-coming-michigan-not-080029139.html",
  },
  {
    icon: "📦",
    text: "The duty is paid by the importer on covered goods at entry; margin, sourcing and price responses may differ by supplier and contract.",
    sourceUrl: "https://ca.news.yahoo.com/canada-tariffs-coming-michigan-not-080029139.html",
  },
  {
    icon: "↔️",
    text: "The reported January 1, 2027 50% U.S. auto-parts escalation remains a future threat, not a new current Canadian service-parts rate.",
    sourceUrl: "https://www.taxathand.com/article/41713/United-States/2026/Trade-corner-4-September-2026",
  },
];

const tipOfTheDay = {
  title: "Build a September 8 Receiving Log Before Monday",
  text: "For every high-value purchase order due near September 8, record the part number, origin/marking, tariff-item result, importer of record, supplier confirmation, current landed price, stock, quote expiry and expected entry date. Escalate a real importer issue; do not create a universal tariff fee from a general trade headline.",
};

const quoteOfTheDay = {
  text: "The included Harmonized System headings and descriptions are for illustrative purposes.",
  author: "Finance Canada",
  title: "Complete list of U.S. products subject to counter tariffs — updated August 26, 2026",
};

const rideOfTheDay = {
  name: "1971 AMC Javelin AMX 401 — Big Bad Orange, Ontario-Plated",
  description: "Big Bad Orange paint, a satin-black hood and 401 V8 muscle make this 1971 AMC Javelin AMX the right iron for an Ontario shop on a Saturday evening. Its rule for the bay is equally direct: let the exact part line, verified origin and current supplier quote — not a broad trade headline — determine the promise you make to a customer.",
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
                {["SEPT. 8: 3 DAYS", "648 OFFICIAL LINES", "TRAILER LINES: VERIFY", "'71 JAVELIN AMX"].map((tag) => (
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
              alt="Canadian Automotive Parts Manager Building a September 8 Receiving Log — Baywash Daily Briefing Edition No. 121"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 121 — Saturday, September 5, 2026 — Three-Day Check / Trailer Lines / Section 338 Context</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Saturday Prep: Build the September 8 Receiving Log
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '71 AMC Javelin AMX 401</span>
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
