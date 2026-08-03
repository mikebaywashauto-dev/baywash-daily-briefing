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

const BRIEFING_NUMBER = 88;
const BRIEFING_DATE = "August 3, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/WczgLTpNjIGNhySy.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/tTZgFSruTGxpVfmV.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xhXRwzKidhHLBJDb.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ETgXMfwHiGGZwbVb.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/btHudUKvRsBPdJph.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "WESTJET STRIKE DAY 2 / 600+ FLIGHTS CANCELLED / 250,000 PASSENGERS STRANDED / GOVERNMENT UNDER PRESSURE / CIVIC HOLIDAY MONDAY",
    tagColor: "#b91c1c",
    headline: "WestJet Strike Day 2 — 600+ Flights Cancelled — 250,000 Passengers Stranded — Civic Holiday Monday — Government Under Pressure to Invoke Section 107",
    summary: "WestJet's strike entered Day 2 on Monday August 3 — Canada's Civic Holiday. More than 600 flights have been cancelled since Friday. Approximately 250,000 passengers are impacted. Aviation expert John Gradek (McGill University): 'Tomorrow's done. Even if the strike is settled today, the earliest that flights would resume is late Tuesday afternoon.' WestJet extended its fee waiver to August 6. Negotiations continue in Calgary. The Business Council of Alberta called for immediate Section 107 intervention Sunday night. NL Premier John Hogan called for Section 107. In 2025, the federal government invoked Section 107 within hours of the Air Canada cabin crew strike — the BCA notes Canadians deserve the same response for an Alberta-based airline. Jobs Minister Patty Hajdu: expects parties to reach a deal at the table. The federal government has NOT invoked Section 107 as of Monday morning. Passenger rights advocate Gábor Lukács: 'If they don't get back to you within three hours of the cancellation of your flight, go buy yourself a ticket at another airline and send the bill to WestJet.' WestJet Encore Q400 and codeshare flights remain unaffected.",
    whyItMatters: "Monday flights are cancelled. Even if the strike ends today, flights won't resume until late Tuesday. If WestJet hasn't rebooked you within 3 hours of cancellation, book your own ticket on Air Canada or Porter and bill WestJet under the Air Passenger Protection Regulations. WestJet fee waiver extended to August 6. Government intervention possible today but not guaranteed. For your shop: autos and auto parts remain exempt from Section 338 under Section 232. 16 days to August 19. Unifor-GM bargaining opens August 10 — 7 days.",
    source: "CP24 / Business Council of Alberta / CBC — August 3, 2026",
    sourceUrl: "https://www.cp24.com/news/canada/2026/08/03/its-your-only-lifeline-alberta-couple-waits-19-hours-on-hold-after-westjet-cancels-flight/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SECTION 338 — 16 DAYS TO AUGUST 19 / AUTOS & PARTS EXEMPT / CIVIC HOLIDAY NO NEW DEAL / SECTION 301 AT 10% HOLDING / CUSMA EXEMPT CONFIRMED",
    tagColor: "#b45309",
    headline: "Section 338 — 16 Days to August 19 — Civic Holiday Monday — No New Trade Developments — Autos and Auto Parts Remain Exempt",
    summary: "No new trade developments on Civic Holiday Monday. Canada-U.S. negotiations continue but no breakthrough is expected before August 19. The framework remains: Section 338 (50% tariff, effective August 19) covers dairy, alcohol, cement, hockey sticks, wood products — NOT autos or auto parts (exempt under Section 232). CUSMA does NOT protect against Section 338. The three Section 338 proclamations cover: Motor Vehicles (439 HTSUS codes, $19.3B in 2024 Canadian imports — but Section 232 products are explicitly excluded), Dairy (52 HTSUS codes, $97M), and Alcoholic Beverages (63 HTSUS codes, $1B). USTR Greer's stated goal: 'interim' agreements with Mexico and Canada separately by end of 2026. CUSMA rules of origin pushed to 2027. Section 301 at 10% for non-CUSMA goods — CUSMA-compliant auto parts exempt. Peter Navarro's July 22 National Post op-ed: Section 338 specifically targets Canada's Supply Management dairy quota system and what Navarro calls discrimination against U.S. retailers in favour of European retailers under CETA.",
    whyItMatters: "16 days to August 19. The tariff clock is running and no deal is imminent. For your shop: your parts supply chain is protected. Autos and auto parts are exempt from Section 338 under Section 232. Section 301 at 10% for non-CUSMA parts — CUSMA-compliant auto parts exempt. The risk to your shop is Unifor-GM bargaining (August 10), not the tariffs. Build your GM buffer today if you haven't already.",
    source: "USTR / BLG / White & Case — August 3, 2026",
    sourceUrl: "https://www.hklaw.com/en/insights/publications/2026/07/50-percent-opening-bid-canadian-imports-subject-to-section-338-tariffs",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GORDIE HOWE BRIDGE PEDESTRIAN PATH OPENS WEDNESDAY AUGUST 5 / FREE / UNIFOR-GM 7 DAYS / FORD PATTERN 3% / OSHAWA SILVERADO / CAMI EQUINOX EV",
    tagColor: "#15803d",
    headline: "Gordie Howe Bridge Pedestrian & Cyclist Path Opens Wednesday August 5 — Free — Unifor-GM Bargaining 7 Days — Build Your GM Buffer Today",
    summary: "The Gordie Howe International Bridge multi-use pedestrian and cyclist path opens Wednesday August 5 at 8 a.m. — free of charge. It is the only pedestrian border crossing between Canada and the United States. Summer hours: 8 a.m. to 8 p.m., seven days per week. Car toll: $5.75 (compared to $10 at the Ambassador Bridge). The bridge is now fully operational for all modes of transport — commercial trucks, passenger vehicles, and pedestrians/cyclists. Windsor-Detroit corridor: $350 million per day. Unifor formal bargaining with General Motors opens Monday August 10 in Toronto — 7 days. Unifor represents more than 4,600 members at Ontario GM facilities: Oshawa Assembly (Silverado pickup), CAMI Assembly in Ingersoll (Equinox EV), and the St. Catharines Propulsion Plant. The Ford pattern is the established floor: 3% annual wage increases, signing bonuses, and a $500 million Essex Engine Plant investment commitment. The GM contract expires September 20 — 48 days.",
    whyItMatters: "Gordie Howe Bridge pedestrian path opens Wednesday — 2 days. Unifor-GM bargaining opens in 7 days. If bargaining reaches an impasse in late August or early September, a work stoppage at Oshawa or CAMI would immediately affect GM parts availability across Ontario. Build your 30-day GM buffer today if you haven't already. Michigan primary August 4 — tomorrow.",
    source: "ClickOnDetroit / Unifor — August 3, 2026",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/28/pedestrians-cyclists-can-cross-gordie-howe-international-bridge-for-free-beginning-aug-5/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "✈️",
    text: "WestJet Strike Day 2 — Monday flights are CANCELLED. 600+ flights cancelled since Friday, 250,000 passengers stranded. Aviation expert John Gradek (McGill): 'Even if the strike is settled today, the earliest that flights would resume is late Tuesday afternoon.' Fee waiver extended to August 6. Book Air Canada now.",
    sourceUrl: "https://www.cp24.com/news/canada/2026/08/03/its-your-only-lifeline-alberta-couple-waits-19-hours-on-hold-after-westjet-cancels-flight/",
  },
  {
    icon: "⚖️",
    text: "If WestJet hasn't rebooked you within 3 hours of cancellation, book your own ticket on Air Canada or Porter and bill WestJet. Air Passenger Protection Regulations require WestJet to reimburse you. Do not wait on hold — book yourself and send the invoice.",
    sourceUrl: "https://www.cp24.com/news/canada/2026/08/03/its-your-only-lifeline-alberta-couple-waits-19-hours-on-hold-after-westjet-cancels-flight/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge pedestrian & cyclist path opens WEDNESDAY August 5 at 8 a.m. FREE. Only pedestrian border crossing between Canada and the U.S. Car toll: $5.75 (vs. $10 at Ambassador Bridge). Windsor-Detroit corridor: $350M/day.",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/28/pedestrians-cyclists-can-cross-gordie-howe-international-bridge-for-free-beginning-aug-5/",
  },
  {
    icon: "🔧",
    text: "BUILD YOUR GM BUFFER TODAY. Unifor-GM formal bargaining opens August 10 — 7 days. Ford pattern: 3% annual increases, $500M Essex Engine Plant. Oshawa Silverado and CAMI Equinox EV at stake. September 20 contract expiry — 48 days.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-commence-negotiations-general-motors",
  },
  {
    icon: "🚗",
    text: "Section 338 — 16 days to August 19. Autos and auto parts EXEMPT under Section 232. CUSMA does NOT protect against Section 338. Section 301 at 10%, CUSMA-compliant auto parts exempt. Your parts supply chain is protected.",
    sourceUrl: "https://www.hklaw.com/en/insights/publications/2026/07/50-percent-opening-bid-canadian-imports-subject-to-section-338-tariffs",
  },
];

const tipOfTheDay = {
  title: "WestJet Strike Day 2 — Monday Flights Are Cancelled — Know Your Rights — Build Your GM Buffer",
  text: "Two action items for Monday August 3 (Civic Holiday). First: WestJet strike is Day 2. Monday flights are cancelled. Aviation expert John Gradek (McGill): 'Even if the strike is settled today, the earliest that flights would resume is late Tuesday afternoon.' If WestJet hasn't rebooked you within 3 hours of your cancellation notice, you are entitled under the Air Passenger Protection Regulations to book your own ticket on another airline and bill WestJet. Do not wait 19 hours on hold. Book Air Canada or Porter, keep your receipt, and send the invoice to WestJet. Fee waiver extended to August 6. WestJet Encore Q400 and codeshare flights are unaffected. Government intervention (Section 107) is possible today — but do not assume it. Second: if you service GM vehicles and have not yet built your 30-day parts buffer, do it today. Unifor-GM formal bargaining opens August 10 — 7 days. The Ford pattern (3% annual, $500M Essex Engine Plant) is the floor. 16 days to Section 338 (August 19). Autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% for non-CUSMA parts — CUSMA-compliant auto parts exempt.",
};

const quoteOfTheDay = {
  text: "Tomorrow's done. Even if the strike is settled today, the earliest that flights would resume is late Tuesday afternoon.",
  author: "John Gradek, Aviation Management Faculty, McGill University",
  title: "WestJet strike Day 2 — August 3, 2026",
};

const rideOfTheDay = {
  name: "1969 Chevrolet Camaro ZL1 COPO — Fathom Green Metallic, Black Racing Stripes, Ontario-Plated",
  description: "Fathom Green Metallic with black racing stripes — the most expensive and rarest Camaro ever built in 1969. Only 69 were built. The ZL1 was a Central Office Production Order (COPO) car — it bypassed Chevrolet's corporate ban on engines over 400 cubic inches in the Camaro. The 427 ZL1 all-aluminum V8 was officially rated at 430 horsepower (actually closer to 500 hp — same deliberate underrating trick as the L88). The ZL1 engine alone cost more than a base Camaro. It required 103-octane racing fuel. It was the most expensive production Camaro ever built. WestJet is on strike. The ZL1 does not strike.",
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
                {["WESTJET STRIKE DAY 2", "SECTION 338: 16 DAYS", "GORDIE HOWE PEDESTRIAN: WED", "'69 CAMARO ZL1"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Monday Edition (Civic Holiday)</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Section 301 In Effect — CUSMA Exempt Confirmed — Charlottetown United Front — Gordie Howe Bridge Revenue Controversy — Opens Monday — Baywash Daily Briefing Edition No. 78"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 78 — Friday, July 24, 2026 — S.301 In Effect / CUSMA Exempt Confirmed / Charlottetown: United Front / Gordie Howe: Monday</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Section 301 Now In Effect — CUSMA Exemption Confirmed — Charlottetown: 'Everything On the Table' — Gordie Howe Bridge Revenue Deal Controversy — Opens Monday
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '69 Pontiac GTO Judge Ram Air IV</span>
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
