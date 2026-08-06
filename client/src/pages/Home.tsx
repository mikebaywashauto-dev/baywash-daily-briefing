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

const BRIEFING_NUMBER = 91;
const BRIEFING_DATE = "August 6, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/aEXtPhJTHBSatTeW.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/MihwgMSGGZjDKkEo.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/posjLOzzlSytfLRF.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZGgOYrGcUtXFytlS.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gLWnMHPlQWvHxmCS.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "STEEL & ALUMINUM TRQ DEAL REVIVED / LEBLANC IN WASHINGTON / 13 DAYS TO AUGUST 19 / CARNEY: GET TOUGHER / AUTOS EXEMPT",
    tagColor: "#b91c1c",
    headline: "Steel & Aluminum TRQ Deal Revived — LeBlanc Back in Washington — 13 Days to August 19 — Carney: Canada Ready to 'Get Tougher'",
    summary: "Globe and Mail reported Wednesday that Canada and the U.S. are reviving a tariff rate quota (TRQ) proposal for Canadian steel and aluminum exports that was first discussed last October. Under the framework: Canadian metals exports would be subject to a quota. Exports below the quota would face a reduced tariff (approximately 10–15% for steel); exports above the quota would face tariffs in the 25–50% range. In exchange, the U.S. would reduce its Section 232 metals tariffs (currently 50%) for exports under the quota. LeBlanc and chief negotiator Janice Charette flew to Washington Tuesday for the second time in two weeks. Their schedule includes meetings with U.S. senators and key U.S. industry groups that support CUSMA. Carney and Trump have been talking directly. The U.S. also handed Canada 10 NEW demands last week — on top of the June letter. Autos: NOT part of detailed negotiations. Greer confirmed CUSMA auto rules of origin pushed to 2027. Canadian-made autos remain subject to 25% Section 232 tariff. Section 338 (50% tariff, August 19): 13 days. CUSMA does NOT protect against Section 338. Autos and auto parts EXEMPT under Section 232.",
    whyItMatters: "The TRQ deal is the most concrete progress in Canada-U.S. trade talks since negotiations began. If a TRQ deal closes before August 19: Section 232 metals tariffs (50%) would be reduced for quota exports. Section 338 is still 13 days away — CUSMA does NOT protect. Carney said Wednesday Canada is ready to 'get tougher' if no deal before the deadline. For your shop: autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% — CUSMA-compliant parts exempt.",
    source: "Globe and Mail / CBC — August 4–5, 2026",
    sourceUrl: "https://www.theglobeandmail.com/world/us-politics/article-leblanc-charette-washington-carney-trump-tariffs-trade/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "UNIFOR PLAYING THE LONG GAME / GM BARGAINING AUGUST 10 / CAMI EQUINOX EV FUTURE UNCLEAR / FORD PATTERN 3% / 4 DAYS",
    tagColor: "#15803d",
    headline: "Unifor 'Playing the Long Game' in GM Talks — CAMI Equinox EV Future 'Unclear' — Bargaining Opens August 10 — 4 Days",
    summary: "Unifor National President Lana Payne gave an exclusive interview to WardsAuto published Wednesday August 5. Key quote: 'I remind the D3 these are a moment in time. We as a union must play the long game, and they should too.' Payne said she is optimistic GM and Stellantis will strike deals similar to Ford's — but acknowledged the ground is shifting. The Ford deal (ratified July 19, 74% yes) is the established floor: 3% annual wage increases, $500M Essex Engine Plant, $400M Oakville retooling, commitment not to close or sell Canadian factories for three years. CAMI Assembly in Ingersoll (Equinox EV): future 'unclear.' Stellantis Brampton: future 'unclear.' Payne: 'They are important facilities to these companies. They are a footprint that gives a competitive advantage.' Unifor represents 4,600+ members at Ontario GM facilities: Oshawa Assembly (Silverado), CAMI (Equinox EV), St. Catharines Propulsion Plant. GM contract expires September 20 — 45 days. Formal bargaining opens Monday August 10 at the Toronto Sheraton Centre.",
    whyItMatters: "CAMI Assembly (Equinox EV) future is 'unclear' — this is the most significant new disclosure. If CAMI closes or is idled, Equinox EV supply ends. Oshawa Silverado production is the higher-volume risk. Build your 30-day GM buffer TODAY — bargaining opens in 4 days. Ford pattern is the floor: 3% annual increases. Unifor is playing the long game. So should you.",
    source: "WardsAuto / Unifor — August 5, 2026",
    sourceUrl: "https://www.wardsauto.com/news/unifor-is-playing-the-long-game-in-contract-talks-and-wants-automakers/826674/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "NORTON ROSE FULBRIGHT / SECTION 338 NEVER JUDICIALLY TESTED / CUSMA DOES NOT PROTECT / WTO COMPATIBILITY UNCERTAIN / 13 DAYS",
    tagColor: "#7c3aed",
    headline: "Norton Rose Fulbright: Section 338 'Has Never Been Judicially Tested' — CUSMA Does NOT Protect — WTO Compatibility 'Genuinely Uncertain' — 13 Days",
    summary: "Norton Rose Fulbright published the most authoritative Section 338 legal analysis today. Key findings: (1) CUSMA does NOT protect — 'a significant departure from the tariffs first introduced in early 2025.' (2) Section 338 'has never been judicially tested in the modern era.' (3) WTO compatibility is 'genuinely uncertain.' (4) There is no product-specific exclusion or relief process — only presidential action can modify the tariffs. The three proclamations: Motor Vehicles (439 HTSUS codes, $19.3B in 2024 imports), Dairy (52 codes, $97M), Alcoholic Beverages (63 codes, $1B). Despite being titled 'Motor Vehicles,' the third proclamation does NOT cover actual vehicles or auto parts — they are excluded because they already carry the separate 25% Section 232 tariff. Norton Rose: 'The 30-day coming-into-force window is notable. As seen with the first round of US tariffs on Canada in February 2025, the intervening period may allow scope for negotiation or modification.' Canada has not announced retaliation but has not ruled it out.",
    whyItMatters: "Section 338 has never been judicially tested. WTO compatibility is genuinely uncertain. But courts move slowly — do not count on an injunction before August 19. CUSMA does NOT protect. Autos and auto parts are exempt from Section 338 under Section 232. Section 301 at 10% — CUSMA-compliant parts ARE exempt from Section 301. The TRQ deal being revived is the most likely path to relief before August 19.",
    source: "Norton Rose Fulbright — August 6, 2026",
    sourceUrl: "https://www.nortonrosefulbright.com/en/knowledge/publications/8a7d16d5/smoke-or-fire-the-us-proclaims-potential-50-tariffs-on-a-wide-range-of-canadian-goods",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇲🇽",
    text: "Steel & aluminum TRQ deal revived — most concrete progress yet. Canada exports below quota: ~10–15% tariff. Above quota: 25–50%. In exchange: U.S. reduces Section 232 metals tariffs from 50%. LeBlanc and Charette in Washington this week.",
    sourceUrl: "https://www.theglobeandmail.com/world/us-politics/article-leblanc-charette-washington-carney-trump-tariffs-trade/",
  },
  {
    icon: "🔧",
    text: "Unifor: CAMI Equinox EV future 'unclear.' Stellantis Brampton future 'unclear.' GM bargaining opens August 10 — 4 days. Ford pattern: 3% annual increases, $500M Essex Engine Plant. Build your GM buffer TODAY.",
    sourceUrl: "https://www.wardsauto.com/news/unifor-is-playing-the-long-game-in-contract-talks-and-wants-automakers/826674/",
  },
  {
    icon: "⚖️",
    text: "Norton Rose Fulbright: Section 338 'has never been judicially tested.' CUSMA does NOT protect. WTO compatibility 'genuinely uncertain.' No product exclusion process. 13 days to August 19. Autos/parts EXEMPT under Section 232.",
    sourceUrl: "https://www.nortonrosefulbright.com/en/knowledge/publications/8a7d16d5/smoke-or-fire-the-us-proclaims-potential-50-tariffs-on-a-wide-range-of-canadian-goods",
  },
  {
    icon: "💪",
    text: "Carney: Canada ready to 'get tougher' if no deal before August 19. Retaliation back on the table. U.S. handed Canada 10 NEW demands last week on top of June letter. Autos NOT part of detailed negotiations.",
    sourceUrl: "https://www.cbc.ca/news/politics/leblanc-august-meetings-tariffs-9.7295896",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge pedestrian path open. El-Sayed won Michigan primary — UAW-endorsed, faces Rogers in November. WestJet schedule fully restored. Section 301 at 10% — CUSMA-compliant auto parts exempt.",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/28/pedestrians-cyclists-can-cross-gordie-howe-international-bridge-for-free-beginning-aug-5/",
  },
];

const tipOfTheDay = {
  title: "Steel TRQ Deal Revived — Unifor CAMI Future Unclear — Section 338 Never Tested — 13 Days — Build GM Buffer TODAY",
  text: "Five things for Thursday August 6. First: the steel and aluminum TRQ deal is the most concrete trade progress yet. If it closes before August 19, Section 232 metals tariffs (50%) would be reduced for quota exports. Watch for an announcement this week. Second: Unifor disclosed CAMI Equinox EV future is 'unclear' — this is the most significant new automotive risk. Build your 30-day GM buffer TODAY — bargaining opens in 4 days. Third: Norton Rose Fulbright confirmed — Section 338 has never been judicially tested. CUSMA does NOT protect. WTO compatibility genuinely uncertain. Do not count on a court injunction before August 19. Fourth: Carney is ready to get tougher. Retaliation is back on the table. Fifth: autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% — CUSMA-compliant parts exempt.",
};

const quoteOfTheDay = {
  text: "I remind the D3 these are a moment in time. We as a union must play the long game, and they should too. They need to be producing market share in Canada — they do that by investing in the Canadian footprint.",
  author: "Lana Payne, Unifor National President",
  title: "WardsAuto exclusive interview — August 5, 2026",
};

const rideOfTheDay = {
  name: "1969 Ford Mustang Mach 1 428 Cobra Jet — Candy Apple Red, Black Mach 1 Stripes, Ontario-Plated",
  description: "Candy Apple Red with black Mach 1 hood stripes and side scoops — the definitive performance Mustang of the muscle car era. The 428 Cobra Jet: 335 horsepower (factory-underrated), 440 lb-ft of torque. Ford rated it conservatively to keep insurance companies happy. The actual output was closer to 410 hp. LeBlanc is in Washington playing the long game. The Mach 1 approves.",
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
                {["STEEL TRQ DEAL REVIVED", "UNIFOR: CAMI FUTURE UNCLEAR", "SECTION 338: 13 DAYS", "'69 MACH 1 428 CJ"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Thursday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Steel TRQ Deal Revived — LeBlanc in Washington — Unifor CAMI Future Unclear — Section 338 13 Days — Baywash Daily Briefing Edition No. 91"
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
