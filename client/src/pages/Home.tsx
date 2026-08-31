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

const BRIEFING_NUMBER = 116;
const BRIEFING_DATE = "August 31, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/sKaQqSFCNPUAQvkm.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/qJsVktLVmUZmNhhP.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/tCCxFiknScfVfDPD.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/haacUElwfwhbCIKM.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/lYMfOEDtNWOWdsIX.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "GM–UNIFOR / RATIFIED / 4,600+ MEMBERS / 80.5% + 96.5% SUPPORT",
    tagColor: "#b91c1c",
    headline: "GM–Unifor Contracts Are Ratified — The Ontario Capacity Commitments Now Move Forward",
    summary: "Unifor says its new GM contracts have been ratified by more than 4,600 Ontario members. Workers at Oshawa, St. Catharines and Woodstock approved the GMCC agreement by 80.5%; CAMI members in Ingersoll voted 96.5% in support. The three-year agreements mirror the Detroit Three pattern, lifting full-rate production wages to $50.20 an hour and skilled-trades wages to $62.71 over the term.",
    whyItMatters: "The labour settlement and associated GM commitments are now confirmed, which is useful context for long-term supplier conversations. It does not create an immediate parts-availability or price change for a repair order. Keep your inventory and estimate decisions grounded in the part number, current stock, landed price and stated lead time.",
    source: "Unifor / The Canadian Press — August 30, 2026",
    sourceUrl: "https://ca.finance.yahoo.com/news/unionized-gm-workers-vote-ratify-013151238.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "OSHAWA + ST. CATHARINES / C$144M + C$215M / TIMELINES MATTER",
    tagColor: "#0369a1",
    headline: "Oshawa Sierra HD and St. Catharines Transmission Plans Are Confirmed — but Their Timelines Differ",
    summary: "The ratified agreements include C$144 million to add next-generation GMC Sierra Heavy-Duty production at Oshawa and C$215 million to make St. Catharines the sole source for a next-generation transmission. GM says transmission work is anticipated to begin in late 2029. Combined with the previously announced C$691-million sixth-generation V8 program, reported St. Catharines investment exceeds C$900 million.",
    whyItMatters: "These are confirmed industrial commitments, but the transmission schedule is long-dated. Do not treat a late-2029 production plan or the previously announced V8 program as a Monday-morning aftermarket supply signal. For today’s work, confirm actual part availability and price with the distributor before you set the customer promise.",
    source: "The Canadian Press / Unifor — August 30, 2026",
    sourceUrl: "https://ca.finance.yahoo.com/news/unionized-gm-workers-vote-ratify-013151238.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CAMI / STILL IDLED / BENEFITS EXTENDED / NO NEW PROGRAM CONFIRMED",
    tagColor: "#15803d",
    headline: "CAMI Is Still an Idled-Plant Watch — Ratification Did Not Confirm a Restart or New Model",
    summary: "Unifor says CAMI Assembly in Ingersoll remains idled, with most members on indefinite layoff. The ratified agreement extends layoff benefits while GM assesses potential opportunities. CAMI is designated as first consideration for Canadian Armed Forces defence work only if GM is awarded that work, and Unifor says it will keep pressing for production to return.",
    whyItMatters: "The agreement improves support and plant-stability context, but it is not a new vehicle allocation, defence contract or restart announcement. Avoid inventory bets or turnaround promises tied to CAMI speculation. Continue sourcing against real repair demand and watch for a separate, specific program or production update.",
    source: "Unifor / The Canadian Press — August 30, 2026",
    sourceUrl: "https://ca.finance.yahoo.com/news/unifor-members-ratify-contracts-gm-010300142.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "GMCC members at Oshawa, St. Catharines and Woodstock voted 80.5% in favour; CAMI members voted 96.5% in support.",
    sourceUrl: "https://ca.finance.yahoo.com/news/unionized-gm-workers-vote-ratify-013151238.html",
  },
  {
    icon: "🔩",
    text: "The ratified package adds C$144M for next-generation Sierra Heavy-Duty production at Oshawa, alongside prior truck-program investment.",
    sourceUrl: "https://ca.finance.yahoo.com/news/unionized-gm-workers-vote-ratify-013151238.html",
  },
  {
    icon: "🗂️",
    text: "St. Catharines’ C$215M sole-source transmission plan is anticipated to start in late 2029; it is not a near-term repair-parts supply event.",
    sourceUrl: "https://ca.finance.yahoo.com/news/unionized-gm-workers-vote-ratify-013151238.html",
  },
  {
    icon: "🏭",
    text: "CAMI remains idled; its defence-work priority applies only if GM is awarded a contract, with no restart or allocation confirmed.",
    sourceUrl: "https://ca.finance.yahoo.com/news/unifor-members-ratify-contracts-gm-010300142.html",
  },
  {
    icon: "↔️",
    text: "September 8 countermeasures remain item- and origin-specific; ask the distributor to confirm the actual tariff-item result before changing a quote.",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/08/list-of-products-from-the-united-states-subject-to-counter-tariffs-effective-september-8-2026.html",
  },
];

const tipOfTheDay = {
  title: "Put Quote Proof in Every Major Job File",
  text: "For high-value work crossing the September 8 implementation date, save a line in the job file with the distributor, part number, origin, tariff-item outcome, landed price, availability, quote expiry and time checked. Use that evidence — not an auto-industry headline or a blanket surcharge — to revise a customer price.",
};

const quoteOfTheDay = {
  text: "These agreements commit more than one billion dollars in vital investments to Canadian GM facilities.",
  author: "Lana Payne, Unifor National President",
  title: "On the ratified GM agreements — August 30, 2026",
};

const rideOfTheDay = {
  name: "1970 Oldsmobile 442 W-30 — Sebring Yellow, Ontario-Plated",
  description: "Sebring Yellow paint, W-30 muscle and unmistakable 442 lines make this 1970 Olds the right iron for an Ontario shop on a Monday evening. Its rule for the bay is equally direct: let verified availability and landed price — not a headline — determine the promise you make to a customer.",
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
                {["GM DEAL: RATIFIED", "OSHAWA SIERRA HD: CONFIRMED", "CAMI: STILL IDLED", "'70 OLDS 442 W-30"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Monday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Ontario Heavy-Duty Pickup Assembly Following GM–Unifor Ratification — Baywash Daily Briefing Edition No. 116"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 116 — Monday, August 31, 2026 — GM Deal Ratified / Ontario Capacity / CAMI Watch</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Monday Watch: Ratified GM Agreements Put Ontario Capacity Plans on the Clock
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Oldsmobile 442 W-30</span>
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
