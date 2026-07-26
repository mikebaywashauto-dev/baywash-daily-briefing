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

const BRIEFING_NUMBER = 80;
const BRIEFING_DATE = "July 26, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/MVQiWVbndNFIMmRC.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/vSQcmWAXCgJAYkXR.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ChLterrlKlRUelBw.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/nRoSleZRqzddflzn.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YGyNNTcWOAUDqfhP.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "OPENS TODAY NOON / HISTORIC FIRST CROSSING / $350M/DAY CORRIDOR / COMMERCIAL TRUCKS READY / AMBASSADOR BRIDGE BACKUP",
    tagColor: "#15803d",
    headline: "Gordie Howe Bridge Opens TODAY at Noon — First Commercial Trucks Cross the Detroit River on the New Six-Lane Crossing — Windsor-Detroit Corridor Gets Its Second Bridge After 8 Years of Construction",
    summary: "The Gordie Howe International Bridge opens to commercial and passenger traffic at noon today — Monday July 27, 2026. After eight years of construction, $6.4 billion in investment, and months of politically motivated delays, the first vehicles will cross the new six-lane cable-stayed bridge connecting Windsor, Ontario to Detroit, Michigan. The bridge is the fourth crossing between Windsor and Detroit and the only one designed specifically for modern commercial truck traffic. The Windsor-Detroit corridor handles approximately $350 million in daily trade — the busiest land border crossing in North America. The new bridge adds capacity and redundancy to the Ambassador Bridge, which has been the sole commercial crossing since 1929. The opening comes despite a week of political turbulence: President Trump posted on Truth Social Friday that the original deal 'no longer stands,' then Saturday posted an air filter meme depicting the Canada-U.S. border. Infrastructure Minister Gregor Robertson responded: 'That is not the case.' The 2012 Canada-Michigan agreement is explicitly protected in clause 4 of the new deal text. The political noise is irrelevant to the commercial opening. The bridge opens at noon. Commercial trucks are queued at the Windsor toll plaza. The first crossing is historic regardless of the political backdrop. Pedestrian and bicycle access opens August 5.",
    whyItMatters: "The bridge is open. This is the most significant supply chain infrastructure improvement for Ontario auto shops in a decade. The new six-lane crossing adds capacity and redundancy to the Ambassador Bridge. For your shop: if you have GM parts orders arriving from Michigan suppliers, the Gordie Howe Bridge is now an option. The new crossing is designed for commercial trucks and will reduce congestion and wait times at the Ambassador Bridge. The Conservative committee investigation into the revenue deal is July 29 — that is a political story that will generate noise but will not affect the commercial opening. Build your 30-day GM parts buffer August 1 — 6 days. Unifor-GM bargaining starts August 10 — 15 days. Section 338 takes effect August 19 — 24 days. Autos and auto parts remain exempt from Section 338.",
    source: "CBC Power & Politics / WXYZ Detroit / Global News — July 25–26, 2026",
    sourceUrl: "https://www.youtube.com/watch?v=kMipO8M_z6w",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRUMP WILDFIRE SMOKE TARIFF THREAT / 'BIG TARIFF ON CANADA' / SMITH: NO ALCOHOL BAN / 24 DAYS TO S.338",
    tagColor: "#b91c1c",
    headline: "Trump: 'We're Going to Put a Big Tariff on Canada Because of the Smoke' — New Wildfire Smoke Tariff Threat Caps a Week of Escalating Trade Tensions — Alberta Premier Smith: No Alcohol Ban — 24 Days to Section 338",
    summary: "President Trump ended the week with a new tariff threat, this time over wildfire smoke drifting south of the border. On Friday July 25, Trump said: 'We're going to put a big tariff on Canada because of the smoke. I've told Canada they have to do something about it. We've never had this problem. All of a sudden we have this problem with Canada.' On Saturday, Trump followed up with a Truth Social post sharing an image depicting the Canada-U.S. border separated by an oversized air filter. The wildfire smoke threat comes on top of the Section 338 tariffs (50 per cent on cement, alcohol, dairy, and 550+ HTS codes, effective August 19) and Section 301 forced labour tariffs (10 per cent, in effect, CUSMA exempt). Alberta Premier Danielle Smith said Saturday she will not retaliate with an alcohol ban: 'I prefer to stay calm and win the hearts and minds of Americans.' Saskatchewan and Alberta returned American booze to shelves months ago; Ontario and Quebec have not resumed stocking U.S. alcohol. Trade experts say the escalating rhetoric signals Canada's turn at the CUSMA negotiating table is approaching. Stuart Trew, CCPA: 'Mexico is done, almost. They're meeting again in September. It's Canada's turn to talk to the Americans about whatever it is they want to talk about.' U.S. political analyst Eric Ham: 'People are simply not aligned with the president continuing to rail against Canada.' The Carney government faces mounting pressure to either secure a deal before August 19 or announce retaliation. Canada has been quietly pursuing trade diversification: a free trade agreement with Ecuador was signed this week, and negotiations on a Comprehensive Economic Partnership Agreement with the United Arab Emirates were concluded July 24.",
    whyItMatters: "The wildfire smoke tariff threat is not a new legal authority — it is political pressure. Trump has been making this threat since July 19. No formal tariff action has been taken. The Section 338 tariffs (August 19) are the real deadline. The smoke threat is a negotiating tactic. For your shop: the tariff baseline for auto parts has not changed. Section 301 at 10 per cent, CUSMA exempt, four-year foundation. Autos and auto parts remain exempt from Section 338 (under Section 232). The Canada-UAE and Canada-Ecuador deals are meaningful for Canada's long-term trade diversification but do not affect your parts supply chain today. The 24-day countdown to Section 338 is the pressure valve. Watch for any announcement from LeBlanc or Carney this week. Build your GM parts buffer August 1 — 6 days. Unifor-GM bargaining starts August 10 — 15 days.",
    source: "CP24 / CTV News / Calgary CityNews — July 25–26, 2026",
    sourceUrl: "https://www.cp24.com/news/canada/2026/07/25/trump-renews-wildfire-smoke-tariff-threat-against-canada-to-cap-week-of-trade-tensions/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CANADA TRADE DIVERSIFICATION / UAE CEPA CONCLUDED / ECUADOR FTA SIGNED / CUSMA BILATERAL TRACK / 24 DAYS S.338",
    tagColor: "#1d4ed8",
    headline: "Canada Concludes UAE Trade Deal and Signs Ecuador FTA as Trade Diversification Accelerates — CUSMA Bilateral Track Moving — Mexico Talks Resume September — Canada's Turn Next — 24 Days to Section 338",
    summary: "Canada quietly concluded two significant trade agreements this week as the Carney government accelerates its trade diversification strategy. On July 24, Canada and the United Arab Emirates concluded negotiations on a Comprehensive Economic Partnership Agreement (CEPA) covering energy, mining, artificial intelligence, ports and logistics, infrastructure, and investment. UAE Minister of State for Foreign Trade Thani Al-Zeyoudi said the deal 'will reduce tariffs on the vast majority of products and reduce technical barriers to trade.' Earlier in the week, Canada signed a free trade agreement with Ecuador. Both deals are part of a deliberate strategy to reduce Canada's dependence on the U.S. market, which currently absorbs approximately 75 per cent of Canadian exports. On the CUSMA track: USTR Greer is 'aiming for interim arrangements' on CUSMA by year-end 2026 — not a full renegotiation. Mexico's bilateral CUSMA talks are nearly complete, with a September meeting scheduled. Trade experts say Canada's turn at the table is approaching. Canada spokesperson Gabriel Brunet: Canada is 'ready to expedite talks on the trade pact.' Trade Minister LeBlanc has drawn a clear line: Canada wants a comprehensive deal covering all tariff-affected sectors — softwood lumber, steel, aluminum, autos — not a one-off arrangement. Section 301 remains in effect at 10 per cent for Canada, CUSMA exempt. 24 days to Section 338 (August 19). Autos and auto parts remain exempt from Section 338 under Section 232.",
    whyItMatters: "The UAE and Ecuador deals do not affect your parts supply chain today — but they matter for Canada's long-term negotiating position. Every new trade partner Canada signs reduces the leverage Trump has over the Canadian economy. The CUSMA bilateral track is the one to watch: if Canada and the U.S. can reach an interim arrangement before August 19, Section 338 may not take effect. That is the best-case scenario. The worst-case: Section 338 takes effect on August 19 and Canada retaliates. Either way, autos and auto parts remain exempt. For your shop: the tariff baseline is stable. Build your GM parts buffer August 1 — 6 days. Unifor-GM bargaining starts August 10 — 15 days.",
    source: "CTV News / Chat News Today / Reuters — July 24–26, 2026",
    sourceUrl: "https://chatnewstoday.ca/2026/07/24/canada-uae-conclude-negotiations-on-a-free-trade-agreement/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opens TODAY at noon. First commercial trucks cross the Detroit River on the new six-lane crossing. Windsor-Detroit corridor: $350M/day. Ambassador Bridge backup now available. Pedestrian/bicycle access: August 5.",
    sourceUrl: "https://www.youtube.com/watch?v=kMipO8M_z6w",
  },
  {
    icon: "🔥",
    text: "Trump: 'We're going to put a big tariff on Canada because of the smoke.' New wildfire smoke tariff threat Friday July 25. Saturday: air filter meme on Truth Social. Alberta Premier Smith: will NOT retaliate with alcohol ban. No formal tariff action taken. 24 days to Section 338 (August 19).",
    sourceUrl: "https://www.cp24.com/news/canada/2026/07/25/trump-renews-wildfire-smoke-tariff-threat-against-canada-to-cap-week-of-trade-tensions/",
  },
  {
    icon: "🌍",
    text: "Canada-UAE CEPA concluded July 24. Canada-Ecuador FTA signed this week. CUSMA bilateral track: Mexico nearly done, Canada's turn next. Section 301 at 10%, CUSMA exempt, holding. 24 days to Section 338 (August 19) — autos/parts exempt.",
    sourceUrl: "https://chatnewstoday.ca/2026/07/24/canada-uae-conclude-negotiations-on-a-free-trade-agreement/",
  },
  {
    icon: "🔧",
    text: "Build your 30-day GM parts buffer August 1 — 6 days. Unifor-GM bargaining starts August 10 — 15 days. Ford pattern: 3% annual increases, 74% ratification. Oshawa Silverado and CAMI Equinox EV at stake. September 20 contract expiry.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/07/21/unifor-names-general-motors-as-next-us-automaker-for-contract-talks/",
  },
  {
    icon: "🇨🇦",
    text: "Conservative committee investigating Gordie Howe Bridge revenue deal — July 29. Alberta separation petition: 223,000 verified signatures, referendum vote now required. Bank of Canada next decision: September 10. CUSMA full renegotiation pushed to 2027.",
    sourceUrl: "https://calgary.citynews.ca/2026/07/24/election-officials-validate-petition-alberta-separation/",
  },
];

const tipOfTheDay = {
  title: "The Gordie Howe Bridge Is Open — Build Your GM Buffer August 1 — 6 Days",
  text: "The Gordie Howe Bridge opened at noon today. The new six-lane crossing is now available for your GM parts orders from Michigan suppliers. The new crossing reduces congestion at the Ambassador Bridge and provides supply chain redundancy. Today's action: if you service GM vehicles, plan your 30-day parts buffer order for August 1 — 6 days from today. Unifor-GM bargaining starts August 10 — 15 days. If bargaining reaches an impasse in late August or early September, a work stoppage at Oshawa or CAMI would immediately affect GM parts availability across Ontario. The buffer window is August 1. Do not wait. Section 338 takes effect August 19 — 24 days. Autos and auto parts remain exempt from Section 338 (they are under Section 232). Section 301 is in effect at 10 per cent for non-CUSMA parts — CUSMA-compliant parts remain exempt.",
};

const quoteOfTheDay = {
  text: "We're going to put a big tariff on Canada because of the smoke. I've told Canada they have to do something about it. We've never had this problem. All of a sudden we have this problem with Canada.",
  author: "Donald Trump",
  title: "U.S. President — remarks to reporters, July 25, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Chevelle SS 454 LS6 — Cranberry Red, Black SS Stripes, Ontario-Plated",
  description: "Cranberry Red. Black SS stripes running over the cowl induction hood. SS 454 badges on the front fenders. Chrome bumpers. Ontario licence plate. 454 cubic inch LS6 V8, 450 horsepower (factory-rated), 500 lb-ft of torque. The 1970 Chevrolet Chevelle SS 454 LS6 is widely regarded as the most powerful muscle car ever produced by General Motors. The LS6 was the highest-output engine Chevrolet ever put in a production car — the factory-rated 450 horsepower was considered conservative by most testers. Car and Driver tested a 1970 Chevelle SS 454 LS6 at 13.12 seconds in the quarter mile at 107.6 mph. The cowl induction hood forced cool air directly into the carburettor from the high-pressure area at the base of the windshield. Chevrolet built only 4,475 LS6 Chevelles in 1970 before the insurance companies and emissions regulations ended the era. Cranberry Red paint in the Ontario golden hour light. The Gordie Howe Bridge opened at noon today. The LS6 approves.",
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
                {["S.301 IN EFFECT TODAY", "CUSMA EXEMPT CONFIRMED", "GORDIE HOWE: MONDAY", "'69 GTO JUDGE"].map((tag) => (
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
