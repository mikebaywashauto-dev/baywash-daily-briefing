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

const BRIEFING_NUMBER = 96;
const BRIEFING_DATE = "August 11, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QbswHySPEBMDGeqq.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OrBIjnpuVUQXQjEZ.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KgCabIIAPzXjxzRm.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xUUfbITFbZyTmvkZ.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gfkyBaWjsyKhRyBZ.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "LEBLANC ADVISORY COUNCIL / NO DEAL YET / 8 DAYS TO AUGUST 19 / CARNEY ITALY UNTIL AUG 17 / AUTOS PARTS EXEMPT",
    tagColor: "#b91c1c",
    headline: "LeBlanc Convenes Canada-US Advisory Council — No Deal Yet — 8 Days to August 19 — Carney in Italy Until August 17",
    summary: "LeBlanc convened the Canada-US Advisory Council Monday afternoon in Washington. It is unclear who he and Charette are meeting with on the U.S. side. No deal announced. LeBlanc is in Washington all week. Carney is in Italy on 'reduced schedule' until August 17 — two days before Section 338 takes effect. BNN Bloomberg: 'It's unclear who he and Canada's lead trade negotiator, Janice Charette, could be meeting with.' CBC: Canada preparing to end alcohol bans and lift auto retaliatory tariffs in exchange for tariff relief. Carney's government 'has told the provinces not to expect major changes to the supply management regime.' PEI Premier Rob Lantz at the New England Governors and Eastern Canadian Premiers conference in Shelburne, Vermont Monday: 'Those alcohol bans are simply on the table — but we would like to know what we get in return.' Nova Scotia Premier Tim Houston: 'What we're living through right now with the tariffs, with the threat of tariffs, with some of the insults and the talking points, they're difficult. There's no way around that.' Vermont Gov. Phil Scott (Republican) sent letter to Commerce Secretary Lutnick urging reversal of tariffs — no response yet. 8 days to August 19. Autos and auto parts EXEMPT under Section 232.",
    whyItMatters: "No deal yet. LeBlanc is in Washington but it is unclear who he is meeting with on the U.S. side. Carney is in Italy until August 17. The premiers are signalling the alcohol bans are on the table — but conditional on getting something in return. For your shop: autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% — CUSMA-compliant parts exempt. 8 days to August 19.",
    source: "BNN Bloomberg / CBC / VTDigger — August 10–11, 2026",
    sourceUrl: "https://www.bnnbloomberg.ca/tariffs/2026/08/11/all-it-does-is-hurt-americans-weigh-in-on-canada-us-trade-war/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "UNIFOR-GM DAY 2 / 30% OF GM MEMBERS ON LAYOFF / AUGUST 21 TARGET DEADLINE / FORD PATTERN FLOOR / CONTRACT EXPIRES SEPT 20",
    tagColor: "#15803d",
    headline: "Unifor-GM Day 2 — 30% of GM Members in Canada on Layoff as Talks Open — August 21 Target Deadline — Ford Pattern Is the Floor",
    summary: "Unifor's official press release (August 10) confirmed that as talks open, approximately 30% of Unifor members at GM in Canada are on layoff. Breakdown: 2,750 members at Oshawa Assembly (active), 1,050 at CAMI Assembly in Ingersoll (idled), 700 at St. Catharines Propulsion Plant (active), 110 at Woodstock Parts Distribution Centre (active). Unifor has set a target deadline of August 21 to reach a tentative agreement with GM — two days after Section 338 takes effect. Lana Payne: 'We're entering this next round of negotiations with the solid foundation established by the pattern agreement with Ford, and we intend to have meaningful discussions on company operations and the future of auto jobs at GM in Canada.' Trevor Longpre (GM Master Bargaining Committee Chair): 'Our members expect the Ford pattern to be respected and these talks to give certainty about the future of their facilities.' Ford pattern ratified: 3% annual wage increases, $500M Essex Engine Plant, $400M Oakville retooling, no-closure agreement, pathway to full employment at Oakville by July 2027. GM contract expires September 20 — 40 days. The interim trade deal being discussed would require Canada to remove retaliatory tariffs on U.S. autos — which could affect GM's negotiating position.",
    whyItMatters: "30% of Unifor's GM members are on layoff. CAMI has been idle since May 2025. The August 21 target deadline overlaps with Section 338 taking effect August 19. If a trade deal is reached that removes Canada's auto retaliatory tariffs, GM's leverage at the table changes. Ford pattern is the floor: 3% annual increases. For your shop: GM parts supply is determined by Oshawa Silverado (higher volume) and CAMI (Equinox EV). Contract expires September 20 — 40 days.",
    source: "Unifor — August 10, 2026",
    sourceUrl: "https://ca.finance.yahoo.com/news/unifor-opens-negotiations-general-motors-151400401.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "NEW ENGLAND GOVERNORS + EASTERN CANADIAN PREMIERS / SHELBURNE VERMONT / ALCOHOL BANS ON TABLE / 8 DAYS TO AUGUST 19",
    tagColor: "#0369a1",
    headline: "New England Governors + Eastern Canadian Premiers — Shelburne, Vermont — 'Alcohol Bans Are Simply on the Table' — 8 Days to August 19",
    summary: "The annual New England Governors and Eastern Canadian Premiers conference was held Monday August 10 in Shelburne, Vermont. PEI Premier Rob Lantz: 'Those alcohol bans are simply on the table — but we would like to know what we get in return. This seems to be an opportunity to come to a comprehensive deal and try to put most of this behind us, if not all of it, and move forward.' Nova Scotia Premier Tim Houston: 'What we're living through right now with the tariffs, with the threat of tariffs, with some of the insults and the talking points, they're difficult. There's no way around that.' Vermont Gov. Phil Scott (Republican) sent a letter to Commerce Secretary Lutnick urging reversal of tariffs — no response yet. Scott: 'We can support American workers, strengthen domestic manufacturing, and insist on fair trade without unnecessarily increasing the cost of living for working-class Americans or weakening our economic partnership with Canada.' The Canadian American Business Council built two interactive games to explain trade integration: 'Where does it come from' and 'Top Customer' (showing how many U.S. states count on Canada as their top export destination). 8 days to August 19. Autos and auto parts EXEMPT under Section 232.",
    whyItMatters: "Eastern Canadian premiers are signalling the alcohol bans are on the table — but conditional on getting something in return. Vermont's Republican governor is pushing back against Trump's tariffs. The cross-border business community is mobilizing. For your shop: autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% — CUSMA-compliant parts exempt. 8 days to August 19.",
    source: "VTDigger / BNN Bloomberg — August 10–11, 2026",
    sourceUrl: "https://vtdigger.org/2026/08/10/new-england-canadian-leaders-tout-cross-border-ties-in-face-of-trumps-latest-tariff-threat/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏛️",
    text: "LeBlanc convened Canada-US Advisory Council Monday. No deal announced. It is unclear who he and Charette are meeting with on the U.S. side. Carney in Italy until August 17. 8 days to August 19.",
    sourceUrl: "https://www.bnnbloomberg.ca/tariffs/2026/08/11/all-it-does-is-hurt-americans-weigh-in-on-canada-us-trade-war/",
  },
  {
    icon: "🏭",
    text: "Unifor confirmed: 30% of GM members in Canada are on layoff as talks open. CAMI: 1,050 idled. Oshawa: 2,750 active. Target deadline: August 21 — two days after Section 338 takes effect.",
    sourceUrl: "https://ca.finance.yahoo.com/news/unifor-opens-negotiations-general-motors-151400401.html",
  },
  {
    icon: "🇺🇸",
    text: "Vermont Gov. Phil Scott (Republican) sent letter to Commerce Secretary Lutnick urging reversal of tariffs. No response yet. 'We can support American workers without weakening our economic partnership with Canada.'",
    sourceUrl: "https://vtdigger.org/2026/08/10/new-england-canadian-leaders-tout-cross-border-ties-in-face-of-trumps-latest-tariff-threat/",
  },
  {
    icon: "🍾",
    text: "PEI Premier Lantz: 'Those alcohol bans are simply on the table — but we would like to know what we get in return.' Eastern Canadian premiers are signalling conditional flexibility on alcohol.",
    sourceUrl: "https://vtdigger.org/2026/08/10/new-england-canadian-leaders-tout-cross-border-ties-in-face-of-trumps-latest-tariff-threat/",
  },
  {
    icon: "⚖️",
    text: "Section 338: 8 days to August 19. CUSMA does NOT protect. Autos/parts EXEMPT under Section 232. Section 301 at 10% — CUSMA-compliant parts ARE exempt. B.C. wildfire state of emergency ongoing.",
    sourceUrl: "https://www.nortonrosefulbright.com/en/knowledge/publications/8a7d16d5/smoke-or-fire-the-us-proclaims-potential-50-tariffs-on-a-wide-range-of-canadian-goods",
  },
];

const tipOfTheDay = {
  title: "LeBlanc in Washington No Deal Yet — 30% of GM Members on Layoff — Premiers Signal Alcohol Bans Conditional — 8 Days to August 19",
  text: "Five things for Tuesday August 11. First: LeBlanc convened the Canada-US Advisory Council Monday. No deal. It is unclear who he is meeting with on the U.S. side. Carney in Italy until August 17. Second: 30% of Unifor's GM members in Canada are on layoff as talks open. CAMI has been idle since May 2025. August 21 target deadline. Third: Eastern Canadian premiers at Shelburne, Vermont: alcohol bans are on the table — but conditional on getting something in return. Fourth: Vermont's Republican governor is pushing back against Trump's tariffs. The cross-border business community is mobilizing. Fifth: 8 days to August 19. Section 338 covers dairy, alcohol, cement, wood — NOT autos or auto parts. CUSMA does NOT protect. Section 301 at 10% — CUSMA-compliant parts exempt.",
};

const quoteOfTheDay = {
  text: "Those alcohol bans are simply on the table — but we would like to know what we get in return.",
  author: "PEI Premier Rob Lantz",
  title: "New England Governors and Eastern Canadian Premiers Conference, Shelburne, Vermont — August 10, 2026",
};

const rideOfTheDay = {
  name: "1968 Pontiac GTO 400 Ram Air I — Fathom Green, Black Stripes, Ontario-Plated",
  description: "Fathom Green with black stripes — the original muscle car, built in Oshawa. The Ram Air I 400: 360 horsepower, 445 lb-ft of torque. The GTO started the muscle car era. 30% of Unifor's GM members are on layoff. The GTO does not lay off.",
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
                {["LEBLANC ADVISORY COUNCIL", "UNIFOR-GM DAY 2", "SECTION 338: 8 DAYS", "'68 PONTIAC GTO 400"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Tuesday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="LeBlanc Advisory Council No Deal — Unifor-GM Day 2 30% on Layoff — New England Governors Eastern Canadian Premiers — 8 Days to August 19 — Baywash Daily Briefing Edition No. 96"
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
