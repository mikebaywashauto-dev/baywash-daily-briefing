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

const BRIEFING_NUMBER = 113;
const BRIEFING_DATE = "August 28, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/MxHhxdfhsBVhESeZ.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/tYpxPybjOfTeLrIy.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EOpcFXdnGNlfGagi.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/kvlhWACWXLviHDZp.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dLuuFMWemQIdsVkb.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "LIST ADJUSTED / SEAFOOD REMOVED / SEPT. 8 / RECHECK EXPOSURE",
    tagColor: "#b91c1c",
    headline: "Seafood Was Removed From Canada’s September 8 List — Treat Big Quotes as a Live Check",
    summary: "Canada removed U.S. fish and seafood products from its planned counter-tariff list on August 27 after industry feedback. Finance Canada said it made select adjustments to protect against broader economic harms; the remaining countermeasures are still scheduled to start September 8. The change is a useful reminder that the tariff schedule is product-specific and can move before the effective date.",
    whyItMatters: "Do not rely on an old summary or add a blanket charge because a supplier is American. For high-value or long-lead jobs, confirm the current part number, origin and tariff-item assessment with your distributor shortly before ordering. Keep a time-stamped response with the job file and refresh the quote when the supplier’s landed cost actually changes.",
    source: "Reuters — August 27, 2026",
    sourceUrl: "https://www.reuters.com/business/canada-excludes-us-seafood-retaliatory-tariffs-2026-08-27/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "OFFICIAL TEST / U.S. ORIGIN + TARIFF ITEM / 12:01 A.M. SEP. 8",
    tagColor: "#0369a1",
    headline: "September 8 Applies by Origin and Tariff Item — Not by the Logo on a Supplier Invoice",
    summary: "Finance Canada says the countermeasures begin at 12:01 a.m. on September 8 at 15%, 25% or 50%, with the individual rate tied to the listed tariff item. They apply only to goods originating in the U.S. that meet Canada’s CUSMA marking test; U.S. goods already in transit to Canada that day are excluded. The official backgrounder highlights steel, appliances, agricultural equipment, pulp and paper and electronics among the targeted sectors.",
    whyItMatters: "Most shops buy through distributors, so ask the party importing the item to confirm the tariff-item result instead of trying to infer it from a brand or invoice address. For a large order, record the supplier, part number, country of origin, current landed price and quote expiry. That protects margin without misrepresenting an unverified duty to a customer.",
    source: "Department of Finance Canada — August 25, 2026",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/08/list-of-products-from-the-united-states-subject-to-counter-tariffs-effective-september-8-2026.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "AUTO & PARTS / TRADE-DEAL RED LINE / GM VOTE STARTS TOMORROW",
    tagColor: "#15803d",
    headline: "Auto and Parts Remain a Trade-Deal Red Line — GM–Unifor Voting Starts Tomorrow",
    summary: "Canada’s ambassador to Washington says a U.S. deal must preserve a robust Canadian auto assembly and parts industry, while offering no timetable for talks to resume. Separately, Unifor members at Oshawa, CAMI, St. Catharines and Woodstock begin voting on tentative GM agreements tomorrow, August 29. The agreements cover more than 4,600 members, but terms will be released to members at the August 29–30 ratification meetings.",
    whyItMatters: "This is a policy and labour-stability watch, not a new repair-part tariff or a confirmed plant restart. Keep cross-border availability discussions separate from the GM vote. Monitor the ratification result and any subsequent production announcement, but make parts and staffing decisions from confirmed supplier information rather than trade-talk headlines.",
    source: "Reuters / Unifor — August 27, 2026",
    sourceUrl: "https://www.reuters.com/business/any-us-trade-deal-must-ensure-robust-canadian-auto-sector-ambassador-says-2026-08-27/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "Canada removed U.S. fish and seafood from its upcoming counter-tariff list after industry feedback; the remaining measures are still set for Sept. 8.",
    sourceUrl: "https://www.reuters.com/business/canada-excludes-us-seafood-retaliatory-tariffs-2026-08-27/",
  },
  {
    icon: "🔩",
    text: "Finance Canada says the rate is 15%, 25% or 50% by tariff item, and the measure applies only to goods meeting the U.S.-origin marking test.",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/08/list-of-products-from-the-united-states-subject-to-counter-tariffs-effective-september-8-2026.html",
  },
  {
    icon: "🗂️",
    text: "U.S. goods already in transit to Canada on Sept. 8 are excluded. Ask your distributor for the actual origin and tariff-item outcome on a large order.",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/08/list-of-products-from-the-united-states-subject-to-counter-tariffs-effective-september-8-2026.html",
  },
  {
    icon: "🏭",
    text: "GM–Unifor ratification meetings begin tomorrow, Aug. 29; agreement details are scheduled for release to members during the Aug. 29–30 meetings.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-reaches-tentative-agreements-general-motors",
  },
  {
    icon: "↔️",
    text: "Canada calls a robust domestic auto assembly and parts industry essential to a future U.S. trade deal; no timetable for talks to resume was given.",
    sourceUrl: "https://www.reuters.com/business/any-us-trade-deal-must-ensure-robust-canadian-auto-sector-ambassador-says-2026-08-27/",
  },
];

const tipOfTheDay = {
  title: "Add a Quote Checkpoint Before You Order",
  text: "For any high-value job landing after September 8, set a supplier checkpoint close to order time. Capture the part number, country of origin, tariff-item assessment, landed price, availability and quote expiry. List adjustments can occur, so refresh the estimate only when the distributor confirms an actual change — never by adding a blanket customer surcharge.",
};

const quoteOfTheDay = {
  text: "Based on feedback, we have made select adjustments to protect against broader economic harms, including removing seafood and fish products from our list of counter tariffs.",
  author: "Department of Finance Canada",
  title: "On the revised September 8 counter-tariff list — August 27, 2026",
};

const rideOfTheDay = {
  name: "1970 Dodge Challenger R/T 440 Six Pack — Plum Crazy, Ontario-Plated",
  description: "Plum Crazy paint, a 440 Six Pack and period-correct stance make this 1970 Challenger the right iron for an Ontario shop on a Friday night. Its September 8 rule is simple: confirm the exact item, origin and supplier’s actual landed price before you promise a number.",
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
                {["LIST ADJUSTED: RECHECK", "SEP. 8 / ORIGIN + ITEM", "GM VOTE: AUG. 29–30", "'70 CHALLENGER R/T"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Friday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Shop Owner Rechecks a Supplier Quote Ahead of September 8 Counter-Tariffs — Baywash Daily Briefing Edition No. 113"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 113 — Friday, August 28, 2026 — List Adjusted / Verify Before Ordering / GM Vote Starts Tomorrow</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                September 8 Counter-Tariffs Can Move: Recheck Before You Reprice
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Dodge Challenger R/T 440 Six Pack</span>
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
