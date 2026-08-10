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

const BRIEFING_NUMBER = 95;
const BRIEFING_DATE = "August 10, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/pXqZnrPAuCpqzAqG.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FXxpdeedfyCKPTVw.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dawgYwawORhapgNL.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wacnDjnOPfHmChUI.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KLsdyYLPMGFZQLXM.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "UNIFOR-GM BARGAINING DAY 1 / CAMI IDLE 15+ MONTHS / 1,200 WORKERS / GM HAS NOT ANNOUNCED PLANS / CONTRACT EXPIRES SEPT 20",
    tagColor: "#15803d",
    headline: "Unifor-GM Bargaining Day 1 — CAMI Assembly Idle 15+ Months — 1,200 Workers Waiting — GM Has Not Announced Plans for the Plant",
    summary: "Unifor-GM formal bargaining opened today Monday August 10 at the Toronto Sheraton Centre. The central issue: CAMI Assembly plant in Ingersoll, Ontario — idle since May 2025 when GM ended BrightDrop electric delivery van production. Approximately 1,200 CAMI workers have been temporarily laid off for more than 15 months. GM has not announced any plans for the factory. Jim Stanford (Centre for Future Work): 'The key issue and focus for the union will be on GM's investment commitment to the Canadian operations, and that obviously means getting CAMI up and running again.' Stanford also noted: 'It would have been surprising for GM to announce their plans for CAMI before getting to the table because they want to use the leverage of a possible investment in CAMI to have more bargaining power. In my view, it is going to be a challenging negotiation around investment commitment.' GM also cut its third shift at Oshawa Assembly in January 2026 — ~500 jobs lost. Total auto assembly workers in Canada: ~35,900 — down 12% from 2016. The Ford pattern is the established floor: 3% annual wage increases, $500M Essex Engine Plant, $400M Oakville retooling, no-closure agreement, pathway to full employment at Oakville by July 2027. GM contract expires September 20 — 41 days. The interim trade deal being discussed would require Canada to remove retaliatory tariffs on U.S. autos — which could affect GM's negotiating position.",
    whyItMatters: "CAMI has been idle for 15+ months. 1,200 workers are waiting. GM is using CAMI as leverage. The Ford pattern is the floor — 3% annual increases. If CAMI stays idle, Equinox EV supply does not return. If a trade deal is reached that removes Canada's auto retaliatory tariffs, GM's leverage at the table changes. For your shop: GM parts supply is determined by Oshawa Silverado (higher volume) and CAMI (Equinox EV). Contract expires September 20 — 41 days. Build your GM buffer now.",
    source: "Globe and Mail / Unifor — August 10, 2026",
    sourceUrl: "https://www.theglobeandmail.com/business/article-upcoming-unifor-negotiations-with-gm-expected-to-focus-on-job-security/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CARNEY IN ITALY REDUCED SCHEDULE UNTIL AUG 17 / LEBLANC IN WASHINGTON / CBC: CANADA PREPARING TO END ALCOHOL BANS / 9 DAYS TO AUGUST 19",
    tagColor: "#b91c1c",
    headline: "Carney in Italy on 'Reduced Schedule' Until August 17 — LeBlanc in Washington — CBC: Canada Preparing to End Alcohol Bans — 9 Days to August 19",
    summary: "PM Carney is in Italy for 'personal commitments' on a 'reduced schedule' until August 17 — two days before Section 338 takes effect. He will maintain 'close contact with his team and officials on several priorities, including the ongoing Canada-U.S. trade negotiations.' LeBlanc is back in Washington this week. CBC News (unnamed sources): Canada 'is preparing to meet some U.S. demands in exchange for tariff relief' — including 'ending bans on American alcohol sales.' CBC also: Canada considering lifting retaliatory tariffs on U.S. autos and making 'some changes on dairy.' Carney's government 'has told the provinces not to expect major changes to the supply management regime.' Poilievre letter (Sunday): 'You conceded that your wait-and-see approach failed by reversing course to now negotiate on terms you did not decide. No more caving.' B.C. Premier Eby declared province-wide state of emergency Saturday due to Bald Range wildfire — Summerland evacuation order. Transport Minister MacKinnon in Hamilton Monday — announcing 'new measures to strengthen interprovincial trade of Canadian steel and domestic supply chains.' 9 days to August 19. Autos and auto parts EXEMPT under Section 232.",
    whyItMatters: "Carney is in Italy until August 17 — two days before Section 338 takes effect. LeBlanc is the point person. CBC reporting suggests Canada is preparing to end alcohol bans and lift auto retaliatory tariffs. If Canada removes the auto retaliatory tariff, this directly affects GM's negotiating position in Unifor bargaining. For your shop: autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% — CUSMA-compliant parts exempt.",
    source: "iPolitics / CBC / Canadian Press — August 10, 2026",
    sourceUrl: "https://www.ipolitics.ca/2026/08/10/as-cross-border-trade-talks-heat-up-ahead-of-looming-u-s-tariff-threat-pm-carney-on-reduced-schedule-in-italy/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CANADIAN COMPANIES RUSHING SHIPMENTS BEFORE AUGUST 19 / SECTION 338 COVERS DAIRY ALCOHOL CEMENT WOOD / AUTOS PARTS EXEMPT / 9 DAYS",
    tagColor: "#7c3aed",
    headline: "Canadian Companies Rushing Shipments Before August 19 — Section 338 Covers Dairy, Alcohol, Cement, Wood — Autos & Parts EXEMPT — 9 Days",
    summary: "Canadian companies vulnerable to Section 338 tariffs are rushing shipments to the U.S. before August 19. Transport Minister MacKinnon announced in Hamilton Monday 'new measures to strengthen interprovincial trade of Canadian steel and domestic supply chains.' Section 338 covers: dairy, alcohol, cement, hockey sticks, wood, plywood, beer. Section 338 does NOT cover: autos, auto parts, energy, potash, fish, critical minerals. CUSMA does NOT protect against Section 338 — this is the critical difference from Section 301 and IEEPA tariffs. Section 301 (forced labour tariff, 10%) remains in effect: CUSMA-compliant auto parts ARE exempt. Current tariff environment for your shop: (1) Section 232 — 25% on Canadian-assembled vehicles, 25% on auto parts (with U.S. content carve-out). (2) Section 301 — 10% on non-CUSMA goods; CUSMA-compliant auto parts exempt. (3) Section 338 — 50% on dairy/alcohol/wood/cement; autos/parts exempt. If the interim deal closes: Section 232 metals tariffs would be reduced. Autos and lumber may not be resolved in Phase 1.",
    whyItMatters: "Section 338 does NOT affect your parts supply. Your shop's parts costs are determined by Section 232 (autos/parts) and Section 301 (non-CUSMA goods). If the interim deal closes: Section 232 metals tariffs would be reduced for quota exports. Confirm CUSMA compliance with your top 3 suppliers. Section 301 at 10% — CUSMA-compliant parts exempt. 9 days to August 19.",
    source: "CBC / Transport Canada — August 10, 2026",
    sourceUrl: "https://www.nortonrosefulbright.com/en/knowledge/publications/8a7d16d5/smoke-or-fire-the-us-proclaims-potential-50-tariffs-on-a-wide-range-of-canadian-goods",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏭",
    text: "CAMI Assembly in Ingersoll has been idle since May 2025 — 15+ months. 1,200 workers temporarily laid off. GM has not announced plans. Jim Stanford: 'GM wants to use the leverage of a possible investment in CAMI to have more bargaining power.'",
    sourceUrl: "https://www.theglobeandmail.com/business/article-upcoming-unifor-negotiations-with-gm-expected-to-focus-on-job-security/",
  },
  {
    icon: "✈️",
    text: "Carney in Italy until August 17 — two days before Section 338 takes effect. LeBlanc is in Washington. CBC: Canada preparing to end alcohol bans and lift auto retaliatory tariffs in exchange for tariff relief.",
    sourceUrl: "https://www.ipolitics.ca/2026/08/10/as-cross-border-trade-talks-heat-up-ahead-of-looming-u-s-tariff-threat-pm-carney-on-reduced-schedule-in-italy/",
  },
  {
    icon: "🔧",
    text: "Ford pattern is the floor for GM bargaining: 3% annual increases, $500M Essex Engine Plant, $400M Oakville retooling, no-closure agreement. GM also cut third shift at Oshawa in January 2026 — ~500 jobs lost. Contract expires September 20.",
    sourceUrl: "https://www.theglobeandmail.com/business/article-upcoming-unifor-negotiations-with-gm-expected-to-focus-on-job-security/",
  },
  {
    icon: "🚚",
    text: "Canadian companies rushing shipments to U.S. before August 19. Transport Minister MacKinnon: new measures to strengthen interprovincial trade of Canadian steel and domestic supply chains. Section 338 covers dairy, alcohol, cement, wood — NOT autos/parts.",
    sourceUrl: "https://www.facebook.com/KarenPaulsCBC/posts/some-canadian-companies-vulnerable-to-new-50-per-cent-us-tariffs-are-rushing-shi/1743748983363686/",
  },
  {
    icon: "⚖️",
    text: "Section 338: 9 days to August 19. CUSMA does NOT protect. Autos/parts EXEMPT under Section 232. Section 301 at 10% — CUSMA-compliant parts ARE exempt. B.C. wildfire state of emergency declared Saturday.",
    sourceUrl: "https://www.nortonrosefulbright.com/en/knowledge/publications/8a7d16d5/smoke-or-fire-the-us-proclaims-potential-50-tariffs-on-a-wide-range-of-canadian-goods",
  },
];

const tipOfTheDay = {
  title: "CAMI Is the Central Issue — Carney in Italy Until August 17 — LeBlanc in Washington — Canada Preparing to End Alcohol Bans — 9 Days",
  text: "Five things for Monday August 10. First: Unifor-GM bargaining opened today. CAMI has been idle 15+ months. 1,200 workers are waiting. GM is using CAMI as leverage. Second: Carney is in Italy until August 17 — two days before Section 338 takes effect. LeBlanc is in Washington. Third: CBC reporting Canada is preparing to end alcohol bans and lift auto retaliatory tariffs in exchange for tariff relief. Fourth: if Canada removes the auto retaliatory tariff, this directly affects GM's negotiating position in Unifor bargaining. Fifth: 9 days to August 19. Section 338 covers dairy, alcohol, cement, wood — NOT autos or auto parts. CUSMA does NOT protect against Section 338. Section 301 at 10% — CUSMA-compliant parts exempt.",
};

const quoteOfTheDay = {
  text: "The key issue and focus for the union will be on GM's investment commitment to the Canadian operations, and that obviously means getting CAMI up and running again.",
  author: "Jim Stanford, Director, Centre for Future Work",
  title: "On Unifor-GM bargaining Day 1, August 10, 2026",
};

const rideOfTheDay = {
  name: "1970 Buick GS 455 Stage 1 — Cortez Gold, Black Racing Stripes, Ontario-Plated",
  description: "Cortez Gold with black racing stripes — the highest-torque muscle car of 1970. The Stage 1 455: 360 horsepower, 510 lb-ft of torque. More torque than any other 1970 muscle car. CAMI has been idle for 15 months. The GS 455 Stage 1 does not idle.",
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
                {["UNIFOR-GM DAY 1", "CAMI IDLE 15+ MONTHS", "SECTION 338: 9 DAYS", "'70 BUICK GS 455 STAGE 1"].map((tag) => (
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
              alt="Unifor-GM Bargaining Day 1 — CAMI Idle 15 Months — Carney Italy LeBlanc Washington — 9 Days to August 19 — Baywash Daily Briefing Edition No. 95"
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
