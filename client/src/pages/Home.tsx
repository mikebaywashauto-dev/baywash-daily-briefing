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

const BRIEFING_NUMBER = 93;
const BRIEFING_DATE = "August 8, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EkllwZlsbNfemJMp.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/DLaKzQYsiYLinelp.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ACpuNzeiwjpoOfWF.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FcYiwxdEtcTHicMA.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rlKzkEyhOLgWckJL.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "INTERIM DEAL FRAMEWORK EMERGING / 8 SOURCES BOTH SIDES / CHARETTE CAMPING OUT IN WASHINGTON / 11 DAYS TO AUGUST 19 / AUTOS EXEMPT",
    tagColor: "#b91c1c",
    headline: "Interim Deal Framework Emerging — 8 Sources Both Sides of Border — Charette Camping Out in Washington This Weekend — 11 Days to August 19",
    summary: "Globe and Mail (8 sources, both sides of the border, published Friday) reports Canada and the U.S. are in an 'intensive phase of talks' and 'trading in-depth proposals.' No agreement yet. What Canada would concede: (1) remove retaliatory tariffs on U.S. autos, (2) return American alcohol to provincial shelves, (3) remove provincial procurement restrictions, (4) agree to Washington's interpretation of dairy quota allocation. The U.S. has a priority list of approximately 10 items. What Canada would get: lower Section 232 tariffs on steel (10–15% inside quota) and aluminum (single-digit inside quota), with higher rates outside quota. Canada also pushing for relief on autos and forest products. This would be Phase 1 only — further talks through fall. Key complications: premiers must sign off on alcohol and procurement demands. Ford: alcohol stays off shelves until deal struck. Eby: 'Not a chance in hell that U.S. alcohol is going back on the shelf in British Columbia.' Fréchette: 'Quebec alone will make this decision.' Autos and lumber: Canada and U.S. 'furthest apart' on these. Trump has NOT signed off on any proposals. Charette is staying in Washington through the weekend. LeBlanc returns Monday. A 'small army of Canadian negotiators' will camp out at the Canadian Embassy on Pennsylvania Avenue next week. Canadian Chamber of Commerce (Candace Laing, briefed Thursday): 'There's a decent level of confidence in the pathway to an interim deal, yet some hesitancy because it has to be approved ultimately in the Oval Office.' National Post (Bloomberg): Canadian officials warned U.S. that if Section 338 tariffs take effect August 19, it would 'severely damage relations' and Carney would face 'strong domestic pressure to retaliate.'",
    whyItMatters: "This is the most significant trade development since Section 338 was announced July 20. An interim deal is possible before August 19. But Trump has not signed off. The biggest obstacle: premiers must agree to lift alcohol bans. Ford and Eby are dug in. For your shop: autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% — CUSMA-compliant parts exempt. If a deal is reached, Section 232 metals tariffs (50%) would be reduced. GM bargaining opens Monday — build your buffer this weekend.",
    source: "Globe and Mail / National Post / Bloomberg — August 7–8, 2026",
    sourceUrl: "https://www.theglobeandmail.com/business/article-canada-and-us-discussing-trade-concessions-in-return-for-partial/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "UNIFOR-GM BARGAINING OPENS TOMORROW MONDAY / CAMI EQUINOX EV FUTURE UNCLEAR / FORD PATTERN FLOOR / BUILD BUFFER TODAY",
    tagColor: "#15803d",
    headline: "Unifor-GM Bargaining Opens TOMORROW Monday August 10 — CAMI Equinox EV Future 'Unclear' — Ford Pattern Is the Floor — Build Your Buffer TODAY",
    summary: "Unifor-GM formal bargaining opens tomorrow Monday August 10 at the Toronto Sheraton Centre. Unifor represents 4,600+ members at Ontario GM facilities: Oshawa Assembly (Silverado pickup), CAMI Assembly in Ingersoll (Equinox EV), and the St. Catharines Propulsion Plant. The Ford pattern is the established floor: 3% annual wage increases, $500M Essex Engine Plant, $400M Oakville retooling, commitment not to close or sell Canadian factories for three years. CAMI Assembly (Equinox EV) future remains 'unclear' per Unifor President Lana Payne. Stellantis Brampton: also 'unclear.' GM Canada pension plan reached fully funded status (Benefits Canada, August 7) — reduces GM's financial pressure heading into bargaining. GM contract expires September 20 — 43 days. The interim trade deal being discussed would require Canada to remove retaliatory tariffs on U.S. autos — which could affect GM's negotiating position. Unifor is 'playing the long game': 'I remind the D3 these are a moment in time. We as a union must play the long game, and they should too.'",
    whyItMatters: "GM bargaining opens tomorrow. CAMI Equinox EV future is 'unclear.' Build your 30-day GM buffer TODAY — Saturday. If CAMI closes or is idled, Equinox EV supply ends. Oshawa Silverado is the higher-volume risk. The trade deal being discussed would remove Canada's retaliatory tariffs on U.S. autos — this could affect GM's leverage. Ford pattern is the floor: 3% annual increases.",
    source: "Unifor / WardsAuto / Benefits Canada — August 5–8, 2026",
    sourceUrl: "https://www.wardsauto.com/news/unifor-is-playing-the-long-game-in-contract-talks-and-wants-automakers/826674/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SECTION 338 / 11 DAYS TO AUGUST 19 / CUSMA DOES NOT PROTECT / AUTOS & AUTO PARTS EXEMPT / SECTION 301 AT 10% CUSMA EXEMPT",
    tagColor: "#7c3aed",
    headline: "Section 338 — 11 Days to August 19 — What Your Shop Needs to Know — CUSMA Does NOT Protect — Autos & Auto Parts EXEMPT",
    summary: "11 days to August 19. Section 338 (50% tariff) covers: dairy, alcohol, cement, hockey sticks, wood, plywood, beer. Section 338 does NOT cover: autos, auto parts, energy, potash, fish, critical minerals. CUSMA does NOT protect against Section 338 — this is the critical difference from Section 301 and IEEPA tariffs. Section 301 (forced labour tariff, 10%) remains in effect: CUSMA-compliant auto parts ARE exempt. Current tariff environment for your shop: (1) Section 232 — 25% on Canadian-assembled vehicles, 25% on auto parts (with U.S. content carve-out). (2) Section 301 — 10% on non-CUSMA goods; CUSMA-compliant auto parts exempt. (3) Section 338 — 50% on dairy/alcohol/wood/cement; autos/parts exempt. The interim deal being discussed would reduce Section 232 metals tariffs (steel from 50% to 10–15% inside quota; aluminum to single-digit inside quota). Autos and lumber are the hardest to resolve — may fall into broader CUSMA renegotiation. No court injunction expected before August 19.",
    whyItMatters: "Your shop's parts costs are determined by Section 232 (autos/parts) and Section 301 (non-CUSMA goods). Section 338 does NOT affect your parts supply. If the interim deal closes: Section 232 metals tariffs would be reduced for quota exports. Autos and lumber tariffs may not be resolved in Phase 1. Confirm CUSMA compliance with your top 3 suppliers. Section 301 at 10% — CUSMA-compliant parts exempt.",
    source: "Norton Rose Fulbright / Fasken / Globe and Mail — August 6–8, 2026",
    sourceUrl: "https://www.nortonrosefulbright.com/en/knowledge/publications/8a7d16d5/smoke-or-fire-the-us-proclaims-potential-50-tariffs-on-a-wide-range-of-canadian-goods",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏛️",
    text: "Charette is camping out in Washington this weekend. LeBlanc returns Monday. 'Small army of Canadian negotiators' at the Canadian Embassy on Pennsylvania Avenue next week. Trump has NOT signed off on any proposals.",
    sourceUrl: "https://www.theglobeandmail.com/business/article-canada-and-us-discussing-trade-concessions-in-return-for-partial/",
  },
  {
    icon: "🤝",
    text: "Canadian Chamber of Commerce (Candace Laing, briefed Thursday): 'There's a decent level of confidence in the pathway to an interim deal, yet some hesitancy because it has to be approved ultimately in the Oval Office.'",
    sourceUrl: "https://nationalpost.com/news/canada/canada-united-states-tariffs-2",
  },
  {
    icon: "🔧",
    text: "GM bargaining opens TOMORROW Monday August 10. CAMI Equinox EV future 'unclear.' Build your 30-day GM buffer TODAY. Ford pattern: 3% annual increases. Contract expires September 20 — 43 days.",
    sourceUrl: "https://www.wardsauto.com/news/unifor-is-playing-the-long-game-in-contract-talks-and-wants-automakers/826674/",
  },
  {
    icon: "🚫",
    text: "Ford: alcohol stays off shelves until deal struck. Eby: 'Not a chance in hell that U.S. alcohol is going back on the shelf in British Columbia.' Fréchette: 'Quebec alone will make this decision.' Premiers are the biggest obstacle.",
    sourceUrl: "https://www.theglobeandmail.com/business/article-canada-and-us-discussing-trade-concessions-in-return-for-partial/",
  },
  {
    icon: "⚖️",
    text: "Section 338: 11 days to August 19. CUSMA does NOT protect. Autos/parts EXEMPT under Section 232. Section 301 at 10% — CUSMA-compliant parts ARE exempt. If deal closes: Section 232 metals tariffs reduced.",
    sourceUrl: "https://www.nortonrosefulbright.com/en/knowledge/publications/8a7d16d5/smoke-or-fire-the-us-proclaims-potential-50-tariffs-on-a-wide-range-of-canadian-goods",
  },
];

const tipOfTheDay = {
  title: "Interim Deal Possible — But Trump Hasn't Signed Off — Premiers Are the Obstacle — Build GM Buffer TODAY — 11 Days",
  text: "Five things for Saturday August 8. First: an interim deal framework is emerging. 8 sources on both sides of the border. Cautious optimism on both sides. But Trump has NOT signed off. Second: the biggest obstacle is the premiers. Ford, Eby, and Fréchette are all dug in on alcohol. The U.S. wants alcohol back on shelves. Third: Charette is in Washington this weekend. LeBlanc returns Monday. The full-court press is on. Fourth: GM bargaining opens TOMORROW Monday August 10. Build your 30-day GM buffer TODAY. CAMI Equinox EV future is 'unclear.' Fifth: 11 days to August 19. CUSMA does NOT protect against Section 338. Autos and auto parts EXEMPT under Section 232. If the interim deal closes: Section 232 metals tariffs would be reduced.",
};

const quoteOfTheDay = {
  text: "There's a decent level of confidence in the pathway to an interim deal, yet some hesitancy because it has to be approved ultimately in the Oval Office.",
  author: "Candace Laing, President, Canadian Chamber of Commerce",
  title: "After being briefed on trade talks by LeBlanc, Charette and Ambassador Wiseman — August 7, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Chevelle SS 396 L78 — Cranberry Red, White Racing Stripes, Ontario-Plated",
  description: "Cranberry Red with white racing stripes — the working man's muscle car. The L78 396: 375 horsepower, 415 lb-ft of torque. Solid-lifter camshaft. The Chevelle SS was built in Oshawa, Ontario. Charette is camping out in Washington this weekend. The Chevelle was built right here. It approves.",
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
                {["INTERIM DEAL EMERGING", "CHARETTE IN WASHINGTON", "SECTION 338: 11 DAYS", "'70 CHEVELLE SS 396"].map((tag) => (
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
              alt="Interim Deal Framework Emerging — Charette Camping Out in Washington — Unifor-GM Bargaining Opens Monday — 11 Days to August 19 — Baywash Daily Briefing Edition No. 93"
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
