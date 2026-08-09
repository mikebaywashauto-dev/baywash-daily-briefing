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

const BRIEFING_NUMBER = 94;
const BRIEFING_DATE = "August 9, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/HFaLhaISrGSGWPDu.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ISPEUqdbqkcbMhot.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/tmjHyyPyYXXVYCZZ.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GAvVXMgzvfzxTWAN.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/AMDZZuHfSqlsJIPc.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "NYT CORRECTION: CANADA HAS NOT OFFERED TO RETURN ALCOHOL TO SHELVES / POILIEVRE LETTER / 10 DAYS TO AUGUST 19 / AUTOS EXEMPT",
    tagColor: "#b91c1c",
    headline: "NYT Corrects the Record: Canada Has NOT Offered to Return Alcohol to Shelves — Poilievre Tells Carney: 'Don't Concede' — 10 Days to August 19",
    summary: "New York Times (Ian Austen, Ottawa, August 7) published a critical correction to Friday's Globe and Mail reporting: 'Contrary to some Canadian media reports, the country's negotiators have NOT offered to return American wine and spirits to the shelves of government-owned provincial liquor stores.' Carney has no control over the alcohol bans — they are provincial. Instead, Canada told the U.S.: the boycott will only end if Carney can present premiers with a satisfactory trade deal. The same condition applies to provincial procurement restrictions. Canada will NOT sign any agreement that doesn't address tariffs on the car industry. Poilievre sent Carney a letter Sunday morning: 'Do not concede to U.S. demands. Canadians deserve a government with a backbone.' Ottawa has already given in to: digital service tax, counter-tariffs on U.S. goods. Dairy Farmers of Canada: 'Canada has already made several concessions, only to be met each time with fresh demands.' Carney: 'We're not interested in a very targeted deal. We're interested in a more comprehensive deal, more global deal.' No deal announced Saturday or Sunday. LeBlanc returns to Washington Monday. Charette stayed through the weekend. 10 days to August 19. Autos and auto parts EXEMPT under Section 232.",
    whyItMatters: "The NYT correction is significant: Canada has NOT offered to return alcohol to shelves as a standalone concession. Alcohol bans are provincial and conditional on a satisfactory deal. Carney cannot deliver this unilaterally. This means the U.S. demand for alcohol is harder to satisfy than the Globe suggested. For your shop: autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% — CUSMA-compliant parts exempt. LeBlanc is back in Washington tomorrow — the full-court press begins.",
    source: "New York Times / Canadian Press — August 7–9, 2026",
    sourceUrl: "https://www.nytimes.com/2026/08/07/world/canada/us-trade-tariffs-carney-trump.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CANADA'S ACTUAL DEAL PACKAGE / NYT REPORTING / REMOVE AUTO TARIFF / CRITICAL MINERALS / GOLDEN DOME / DAIRY QUOTA ALLOCATION",
    tagColor: "#0369a1",
    headline: "Canada's Actual Deal Package Revealed — NYT Reporting — Auto Tariff Removal, Critical Minerals, Golden Dome, Dairy Quota Allocation",
    summary: "New York Times (two sources briefed on negotiations) published the most detailed account yet of Canada's actual concession package. What Canada is offering: (1) Remove retaliatory tariff on U.S.-made autos (introduced in retaliation for Section 232 auto tariff). (2) Critical minerals supply assurance to U.S. (3) Energy and defence cooperation, including possible Canadian participation in Trump's 'Golden Dome' missile defence system. (4) Dairy quota allocation changes — how existing quotas are allocated, NOT dismantling supply management or increasing quota size. (5) Provincial alcohol bans: conditional on deal, NOT a standalone concession. (6) Provincial procurement restrictions: conditional on deal. What Canada wants in return: drop Section 338 (August 19 tariffs), reduce Section 232 tariffs on steel, aluminum, autos and lumber, CUSMA renewal commitment. This is described as a 'political agreement' not a formal trade treaty — no Congressional approval needed, easier to amend under a future administration. The package is broadly similar to one Canada presented last October. The U.S. withdrew from those negotiations after Ontario aired anti-tariff ads on American television.",
    whyItMatters: "Canada's auto retaliatory tariff removal is the most concrete concession on the table. This would directly affect GM's negotiating position in Unifor bargaining. The Golden Dome offer is the most significant security concession. Dairy quota allocation is a technical change, NOT supply management dismantlement. Alcohol bans are conditional — premiers must agree. For your shop: autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% — CUSMA-compliant parts exempt.",
    source: "New York Times — August 7, 2026",
    sourceUrl: "https://www.nytimes.com/2026/08/07/world/canada/us-trade-tariffs-carney-trump.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR-GM BARGAINING OPENS TOMORROW / CAMI EQUINOX EV FUTURE UNCLEAR / FORD PATTERN FLOOR / 10 DAYS TO AUGUST 19",
    tagColor: "#15803d",
    headline: "Unifor-GM Bargaining Opens TOMORROW Monday August 10 — CAMI Equinox EV Future 'Unclear' — Ford Pattern Is the Floor — 10 Days to August 19",
    summary: "Unifor-GM formal bargaining opens tomorrow Monday August 10 at the Toronto Sheraton Centre. Unifor represents 4,600+ members at Ontario GM facilities: Oshawa Assembly (Silverado pickup), CAMI Assembly in Ingersoll (Equinox EV), and the St. Catharines Propulsion Plant. The Ford pattern is the established floor: 3% annual wage increases, $500M Essex Engine Plant, $400M Oakville retooling, commitment not to close or sell Canadian factories for three years. CAMI Assembly (Equinox EV) future remains 'unclear' per Unifor President Lana Payne. Stellantis Brampton: also 'unclear.' GM Canada pension plan reached fully funded status — reduces GM's financial pressure heading into bargaining. GM contract expires September 20 — 42 days. The interim trade deal being discussed would require Canada to remove retaliatory tariffs on U.S. autos — which could affect GM's negotiating position. Unifor is 'playing the long game': 'I remind the D3 these are a moment in time. We as a union must play the long game, and they should too.'",
    whyItMatters: "GM bargaining opens tomorrow. CAMI Equinox EV future is 'unclear.' If CAMI closes or is idled, Equinox EV supply ends. Oshawa Silverado is the higher-volume risk. The trade deal being discussed would remove Canada's retaliatory tariffs on U.S. autos — this could affect GM's leverage at the table. Ford pattern is the floor: 3% annual increases. Contract expires September 20 — 42 days.",
    source: "Unifor / WardsAuto — August 5–9, 2026",
    sourceUrl: "https://www.wardsauto.com/news/unifor-is-playing-the-long-game-in-contract-talks-and-wants-automakers/826674/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📰",
    text: "NYT correction: Canada has NOT offered to return alcohol to shelves. Alcohol bans are provincial and conditional on a satisfactory deal. Carney cannot deliver this unilaterally. This makes the U.S. alcohol demand harder to satisfy.",
    sourceUrl: "https://www.nytimes.com/2026/08/07/world/canada/us-trade-tariffs-carney-trump.html",
  },
  {
    icon: "📝",
    text: "Poilievre letter to Carney Sunday: 'Do not concede to U.S. demands. Canadians deserve a government with a backbone.' Ottawa has already given up: digital service tax, counter-tariffs. Dairy Farmers: 'met each time with fresh demands.'",
    sourceUrl: "https://ca.finance.yahoo.com/news/poilievre-tells-carney-letter-not-080508050.html",
  },
  {
    icon: "🔧",
    text: "GM bargaining opens TOMORROW Monday August 10. CAMI Equinox EV future 'unclear.' Ford pattern: 3% annual increases. Contract expires September 20 — 42 days. Canada's deal package includes removing auto retaliatory tariff.",
    sourceUrl: "https://www.wardsauto.com/news/unifor-is-playing-the-long-game-in-contract-talks-and-wants-automakers/826674/",
  },
  {
    icon: "🛡️",
    text: "Canada's deal package includes Golden Dome missile defence participation and critical minerals supply assurance. This is the most significant security concession on the table. No Congressional approval needed for a 'political agreement.'",
    sourceUrl: "https://www.nytimes.com/2026/08/07/world/canada/us-trade-tariffs-carney-trump.html",
  },
  {
    icon: "⚖️",
    text: "Section 338: 10 days to August 19. CUSMA does NOT protect. Autos/parts EXEMPT under Section 232. Section 301 at 10% — CUSMA-compliant parts ARE exempt. LeBlanc returns to Washington tomorrow.",
    sourceUrl: "https://www.nortonrosefulbright.com/en/knowledge/publications/8a7d16d5/smoke-or-fire-the-us-proclaims-potential-50-tariffs-on-a-wide-range-of-canadian-goods",
  },
];

const tipOfTheDay = {
  title: "NYT Corrects Alcohol Story — Poilievre Tells Carney Don't Concede — LeBlanc Back in Washington Tomorrow — GM Bargaining Opens Tomorrow — 10 Days",
  text: "Five things for Sunday August 9. First: the NYT corrected the Globe — Canada has NOT offered to return alcohol to shelves. Alcohol bans are provincial and conditional on a satisfactory deal. Second: Poilievre sent Carney a letter this morning: 'Do not concede.' Dairy Farmers: 'met each time with fresh demands.' Third: Canada's actual deal package includes removing the auto retaliatory tariff, critical minerals supply, Golden Dome participation, and dairy quota allocation changes. Fourth: LeBlanc returns to Washington tomorrow. The full-court press begins. Fifth: GM bargaining opens tomorrow Monday August 10. CAMI Equinox EV future is 'unclear.' 10 days to August 19. CUSMA does NOT protect against Section 338. Autos and auto parts EXEMPT under Section 232.",
};

const quoteOfTheDay = {
  text: "Contrary to some Canadian media reports, the country's negotiators have not offered to return American wine and spirits to the shelves of government-owned provincial liquor stores.",
  author: "New York Times",
  title: "Reporting on Canada's actual negotiating position — August 7, 2026",
};

const rideOfTheDay = {
  name: "1969 Pontiac Firebird 400 Ram Air III — Verdoro Green, Black Racing Stripes, Ontario-Plated",
  description: "Verdoro Green with black racing stripes — Pontiac's answer to the Mustang, built in Oshawa. The Ram Air III 400: 335 horsepower, 430 lb-ft of torque. The Ram Air hood scoop fed cold outside air directly to the carburettor. Canada is offering the Golden Dome. LeBlanc is back in Washington tomorrow. The Firebird was built right here in Ontario. It approves.",
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
                {["NYT CORRECTS ALCOHOL STORY", "POILIEVRE: DON'T CONCEDE", "SECTION 338: 10 DAYS", "'69 FIREBIRD 400 RAM AIR"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Sunday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="NYT Corrects Alcohol Story — Poilievre Letter — Canada's Actual Deal Package — Unifor-GM Opens Tomorrow — 10 Days to August 19 — Baywash Daily Briefing Edition No. 94"
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
