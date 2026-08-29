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

const BRIEFING_NUMBER = 114;
const BRIEFING_DATE = "August 29, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/sulULKBnwTFwZMgG.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FrIyLLrZqLtcNPSc.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZEDnjydhCUNaFEpc.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RhLRFozlgQqkuWTo.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TitrNokMGJmdjuxT.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "GM–UNIFOR / VOTING TODAY–SUNDAY / RESULTS AFTER FINAL COUNT",
    tagColor: "#b91c1c",
    headline: "GM–Unifor Voting Begins Today — Keep the Agreement Tentative Until the Final Tally",
    summary: "Unifor local leadership unanimously endorsed the tentative GM agreements ahead of member briefings and ratification meetings today and Sunday. The Master agreement covers Oshawa, St. Catharines and Woodstock, with a separate CAMI agreement for Ingersoll. Unifor says the Master Bargaining Committee and local leadership recommend ratification, but results will be released only after the final vote tabulation.",
    whyItMatters: "This is a labour-stability watch, not a confirmed production change. Do not make a service-parts inventory call from a recommendation or a meeting schedule. Keep normal supplier relationships in place, track the final result when it is released and wait for a specific plant, allocation or distribution announcement before changing plans.",
    source: "Unifor AutoHub — August 28, 2026",
    sourceUrl: "https://autotalks.uniforautohub.ca/tentative_agreements_between_unifor_and_general_motors_unanimously_endorsed_by_local_leadership",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CROSS-BORDER PARTS / OHIO–CANADA / NETWORK-SPECIFIC EXPOSURE",
    tagColor: "#0369a1",
    headline: "The Parts Network Runs Both Ways — Verify the Item, Not the Supplier’s Postal Code",
    summary: "CBC reports Ohio exported US$1.8 billion in auto parts to Canada last year and imported US$1.1 billion in vehicle parts from Canada, alongside major trade in steel, plastics and other industrial inputs. Not all of those flows are caught by the tariff measures, and companies on both sides are still assessing Canada’s September 8 counter-tariffs. The exposure for any repair order is therefore specific to the actual item and import path.",
    whyItMatters: "A U.S. vendor address does not prove a customer’s part faces a new Canadian duty, and a Canadian brand does not prove its supply chain is untouched. For modules, sensors, wiring and metal-heavy components with long lead times, ask the distributor for origin, tariff-item assessment, current landed price and availability. Change a quote only after that answer is documented.",
    source: "CBC News — August 29, 2026",
    sourceUrl: "https://www.cbc.ca/news/world/in-ohio-canada-u-s-trade-war-sparks-anger-and-uncertainty-9.7324331",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SEPT. 8 / LIVE SCHEDULE / ORIGIN + TARIFF ITEM / IN-TRANSIT EXCEPTION",
    tagColor: "#15803d",
    headline: "September 8 Is Ten Days Away — Work From the Live Schedule, Not a Blanket Rule",
    summary: "Canada’s countermeasures begin at 12:01 a.m. on September 8, with 15%, 25% or 50% rates set by the listed tariff item. Finance Canada says they apply to U.S.-origin goods that meet the Canadian CUSMA marking test, while goods in transit to Canada that day are excluded. The recent removal of U.S. fish and seafood after industry feedback shows why the current list and supplier confirmation matter.",
    whyItMatters: "Set a 48-hour confirmation point for high-value work that will be ordered or delivered after September 8. Record the part number, country of origin, tariff-item result, landed cost, stock status and quote expiry. Do not add a broad customer surcharge; use a documented, item-specific change if the distributor confirms one.",
    source: "Department of Finance Canada / Reuters — August 25–27, 2026",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/08/list-of-products-from-the-united-states-subject-to-counter-tariffs-effective-september-8-2026.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "GM–Unifor member briefings and ratification meetings run today and Sunday; the union says it will release results after final tabulation.",
    sourceUrl: "https://autotalks.uniforautohub.ca/tentative_agreements_between_unifor_and_general_motors_unanimously_endorsed_by_local_leadership",
  },
  {
    icon: "🔩",
    text: "Unifor local leadership unanimously endorsed the tentative agreements; a recommendation is not the same thing as a completed ratification.",
    sourceUrl: "https://autotalks.uniforautohub.ca/tentative_agreements_between_unifor_and_general_motors_unanimously_endorsed_by_local_leadership",
  },
  {
    icon: "🗂️",
    text: "CBC reports Ohio exported US$1.8B in auto parts to Canada last year and imported US$1.1B in vehicle parts from Canada — a connected supply network, not one blanket outcome.",
    sourceUrl: "https://www.cbc.ca/news/world/in-ohio-canada-u-s-trade-war-sparks-anger-and-uncertainty-9.7324331",
  },
  {
    icon: "🏭",
    text: "Canada’s countermeasures start at 12:01 a.m. on Sept. 8, at 15%, 25% or 50% by tariff item; goods in transit that day are excluded.",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/08/list-of-products-from-the-united-states-subject-to-counter-tariffs-effective-september-8-2026.html",
  },
  {
    icon: "↔️",
    text: "Canada’s fish and seafood removal from the proposed package is a reminder to recheck a live tariff schedule and supplier price before a major order.",
    sourceUrl: "https://www.reuters.com/business/canada-excludes-us-seafood-retaliatory-tariffs-2026-08-27/",
  },
];

const tipOfTheDay = {
  title: "Use a 48-Hour Quote-Confirmation Rule",
  text: "For high-value work scheduled after September 8, recheck the order within 48 hours of purchase. Ask your distributor for the part number, country of origin, tariff-item assessment, landed price, stock status and quote expiry. Keep the response in the job file, and revise a customer estimate only when an item-specific change is confirmed.",
};

const quoteOfTheDay = {
  text: "Vote results will be released following the final vote tabulation.",
  author: "Unifor",
  title: "On the GM tentative-agreement ratification meetings — August 28, 2026",
};

const rideOfTheDay = {
  name: "1971 Plymouth 'Cuda 440 Six Pack — In-Violet, Ontario-Plated",
  description: "In-Violet paint, a 440 Six Pack and unmistakable E-body lines make this 1971 'Cuda the right iron for an Ontario shop on a Saturday night. Its parts rule is equally direct: verify the specific item, origin and supplier’s landed price before you promise a number.",
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
                {["GM VOTE: TODAY–SUNDAY", "RESULTS AFTER FINAL COUNT", "SEP. 8 / CHECK BY ITEM", "'71 'CUDA 440 SIX PACK"].map((tag) => (
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
              alt="Auto Workers Head to a GM–Unifor Ratification Meeting — Baywash Daily Briefing Edition No. 114"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 114 — Saturday, August 29, 2026 — GM–Unifor Vote Underway / Parts Network Watch / Verify Sept. 8 Exposure</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Saturday Watch: GM–Unifor Voting Begins as Shops Prep for September 8
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '71 Plymouth 'Cuda 440 Six Pack</span>
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
