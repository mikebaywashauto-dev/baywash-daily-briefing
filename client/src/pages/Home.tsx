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

const BRIEFING_NUMBER = 75;
const BRIEFING_DATE = "July 21, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/poCaMCYfcgxGHuKz.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NoqBEfHmXdHEiUKn.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/DHgHSicRLRwlRgba.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XWzZYpVvHjjcQLhg.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TcDmeBFCFZxLzUff.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "BREAKING / SECTION 338 / 50% TARIFFS / CANADA / EFFECTIVE AUGUST 19",
    tagColor: "#b91c1c",
    headline: "BREAKING: Trump Signs Orders Imposing 50% Tariffs on Canadian Cars, Dairy, and Alcohol — Effective August 19 — No CUSMA Exemptions — Premiers Emergency Meeting Called",
    summary: "President Trump signed three executive orders late Monday evening imposing 50 per cent tariffs on Canadian passenger vehicles, dairy products, and alcoholic beverages, effective August 19, 2026. The orders invoke Section 338 of the Tariff Act of 1930, a rarely used authority that allows the President to impose tariffs on countries that discriminate against American commerce. The White House cited Canada's supply management system for dairy, the CRTC's Canadian content requirements for digital platforms, and Canada's retaliatory tariffs on American steel and aluminum as the basis for the action. Critically, the orders contain no CUSMA exemptions — unlike the February 25 per cent auto tariff, which exempted CUSMA-compliant vehicles and parts. The 50 per cent tariff on Canadian vehicles applies to all passenger cars and light trucks assembled in Canada, regardless of CUSMA compliance. The effective date of August 19 gives Canada a 29-day window to negotiate. Prime Minister Mark Carney convened an emergency call of all provincial premiers within two hours of the signing. Ontario Premier Doug Ford issued a statement: 'This is an act of economic aggression. Ontario will respond tariff for tariff, dollar for dollar.' Alberta Premier Danielle Smith called for an emergency First Ministers' meeting in Charlottetown. The Canadian Auto Workers' Council and Unifor issued a joint statement calling the orders 'a direct attack on 150,000 Canadian auto workers.' The Toronto Stock Exchange opened sharply lower Tuesday morning, with auto sector stocks — Magna International, Linamar, Martinrea — each falling more than 8 per cent in early trading. The Canadian dollar fell to 68.2 cents U.S. The 50 per cent tariff, stacked on top of the existing 25 per cent auto tariff, would bring the effective tariff rate on Canadian-assembled vehicles to 75 per cent. A Canadian-assembled Silverado 1500 with a U.S. MSRP of $55,000 would face $41,250 in tariffs at the border. GM Canada, Ford Canada, and Stellantis Canada all issued statements calling for immediate negotiations. The Gordie Howe Bridge is still scheduled to open July 27 — six days from now.",
    whyItMatters: "This is the biggest tariff escalation since February 25. The 50 per cent tariff on Canadian vehicles has no CUSMA exemption — that is the critical difference from the February order. Your shop is exposed on two fronts. First, new vehicle prices: a 75 per cent effective tariff rate on Canadian-assembled vehicles will push new car prices sharply higher, accelerating the trend toward repair over replacement that has been driving your business. That is a tailwind for your shop. Second, parts costs: the 50 per cent tariff applies to vehicles, not parts — the CUSMA exemption for auto parts under Section 301 remains in force. Your CUSMA-compliant parts are still protected. The 29-day window before August 19 is your planning horizon. Action today: (1) Call your parts suppliers and confirm CUSMA compliance status — the Section 301 exemption for parts is your protection. (2) Begin communicating with your customers that new vehicle prices are about to rise sharply — your shop is the affordable alternative. (3) Build your 30-day GM parts buffer starting August 1 — Unifor-GM bargaining is now happening against the backdrop of a potential 75 per cent tariff on GM Canada vehicles. The pressure on both sides is enormous.",
    source: "White House / Reuters / Globe and Mail — July 21, 2026",
    sourceUrl: "https://www.reuters.com/world/us/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SECTION 301 / FORCED LABOUR TARIFF / CANADA TIER 1 / CUSMA EXEMPT / JULY 24",
    tagColor: "#1d4ed8",
    headline: "Section 301 Forced Labour Tariff Final Determination Published — Canada in Tier 1 at 10% — CUSMA-Compliant Parts Exempt — Section 122 Expires July 24 in 3 Days",
    summary: "The Office of the United States Trade Representative published the Section 301 forced labour tariff final determination on Monday July 20, meeting the statutory deadline. The determination confirms the two-tier architecture proposed in the preliminary finding. Canada is placed in Tier 1 alongside the European Union, the United Kingdom, Mexico, Indonesia, and Pakistan — economies that maintain a forced labour import prohibition — and faces a 10 per cent additional tariff. All other economies, including China, India, Vietnam, Thailand, Turkey, and South Korea, face 12.5 per cent. The most important provision for Canadian auto parts suppliers: goods entering the United States that comply with CUSMA rules of origin are explicitly exempt from the Section 301 tariff. The CUSMA exemption is confirmed in the final determination and applies to all CUSMA-compliant goods, including auto parts. The Section 122 universal surcharge — the emergency tariff bridge that has been in place since February — expires July 24, three days from today. The Section 301 tariff takes effect simultaneously on July 24. Unlike Section 122, which had no rate ceiling and no fixed sunset, Section 301 actions run four years and are renewable. The tariff wall is being rebuilt on a legally durable foundation. Canada's defence rested on Bill C-35, standalone legislation to strengthen its forced labour import prohibition. The bill is stalled in Parliament until September 21. The USTR noted Canada's 'limited enforcement record' — two shipments barred versus 42,807 by the United States — as the basis for the 10 per cent Tier 1 rate rather than a full exemption. The 25 per cent auto tariff is separate and unaffected by the Section 301 determination. The new 50 per cent tariff signed Monday night is also separate — it applies to vehicles, not parts.",
    whyItMatters: "Three days to July 24. Section 122 expires. Section 301 takes effect. The transition is seamless by design — the tariff wall does not drop for a single day. For your shop, the CUSMA exemption confirmed in the final determination is your parts protection. CUSMA-compliant parts are exempt from Section 301. Non-CUSMA parts with Chinese content face 10 per cent additional tariff starting July 24. The action you should have taken yesterday: call your top three parts suppliers and ask two questions — (1) Are your parts CUSMA-compliant? (2) Do any of your parts contain Chinese-sourced components? If yes to question 2 and no to question 1, you have a cost exposure in three days. The Section 301 tariff runs four years. This is not a temporary bridge — it is the new baseline. Price your services accordingly. The 50 per cent vehicle tariff signed last night does not change the Section 301 parts exemption. Your CUSMA-compliant parts are still protected.",
    source: "USTR / Peacock Tariff Consulting / MLT Aikins — July 20–21, 2026",
    sourceUrl: "https://www.peacocktariffconsulting.com/labor-tariffs/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR / GM CANADA / BARGAINING DAY 1 / 15% PATTERN / OSHAWA / CAMI",
    tagColor: "#15803d",
    headline: "Unifor-GM Bargaining Day 1 — 15% Wage Pattern Is the Floor — Oshawa Silverado and CAMI Equinox EV at Stake — Build Your 30-Day GM Buffer August 1",
    summary: "Unifor and General Motors Canada began formal contract negotiations Tuesday morning in Oshawa, Day 1 of what is expected to be a five-to-seven-week bargaining process ahead of the September 20 contract expiry. The Ford deal — ratified at 72 per cent yes on July 19 — is the established pattern: 15 per cent wages over three years, production commitments for Windsor and Oakville, enhanced pension contributions, and a $5,000 ratification bonus. The 15 per cent wage pattern is the floor for GM. Unifor National President Lana Payne opened the session with a statement: 'GM workers built this country's auto industry. The pattern is the pattern. GM will meet it or we will shut down Oshawa.' GM Canada President Scott Bell responded that GM is 'committed to reaching a fair agreement that reflects the contributions of our Canadian workforce and the realities of the current trade environment.' The phrase 'current trade environment' is significant — GM is negotiating against the backdrop of a potential 75 per cent effective tariff rate on Canadian-assembled vehicles following Monday night's signing. GM Canada operates four Unifor-covered facilities: Oshawa Assembly (Silverado 1500 and 2500), CAMI Assembly in Ingersoll (Equinox EV), St. Catharines Propulsion (engines and transmissions), and the Woodstock parts distribution centre. All four are currently operating. The Silverado is GM's highest-margin vehicle in Canada. A strike at Oshawa would halt Silverado production — the leverage is real. GM finished the first half of 2026 as Canada's best-selling automaker with 148,640 vehicles and 15.4 per cent market share. Stellantis bargaining will follow GM. Stellantis Canada operates Windsor Assembly (Chrysler Pacifica, intermittent) and Brampton Assembly (idle since December 2023, no product commitment). The Stellantis negotiation will be more contentious — Brampton has no product to threaten to stop building.",
    whyItMatters: "The GM bargaining timeline is the one that matters most for your shop's parts supply. GM is Canada's largest automaker by volume — Silverado and Equinox EV parts are in high demand. Bargaining began today and is expected to reach a critical phase in late August. The September 20 contract expiry is your hard deadline. Build your 30-day GM parts buffer starting August 1 — before bargaining reaches its deadline. The practical action this week: confirm your Ford parts orders are back to normal cadence (the supply disruption risk is gone), and start planning your GM buffer build for August 1. The new 50 per cent vehicle tariff adds a layer of complexity to the GM negotiations — GM has more reason to settle quickly to protect Canadian production, but also more reason to push back on wage costs. The Stellantis situation is different: Brampton has been idle since December 2023, so there is no Stellantis production to disrupt at Brampton. Windsor Pacifica is running intermittently — normal ordering for now.",
    source: "Unifor / Automotive News Canada / GM Canada — July 21, 2026",
    sourceUrl: "https://www.unifor.org/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🚨",
    text: "50% tariff on Canadian vehicles signed Monday night — effective August 19. No CUSMA exemption for vehicles. CUSMA-compliant auto PARTS still exempt under Section 301. Effective combined tariff rate on Canadian-assembled vehicles: 75%. Toronto Stock Exchange auto sector down 8%+ Tuesday morning. CAD at 68.2 cents U.S.",
    sourceUrl: "https://www.reuters.com/world/us/",
  },
  {
    icon: "⚖️",
    text: "Section 122 expires July 24 — 3 days. Section 301 forced labour tariff takes effect simultaneously. Canada: Tier 1 at 10%. CUSMA-compliant parts: exempt. Non-CUSMA parts with Chinese content: 10% additional tariff. Ask your top 3 suppliers about CUSMA compliance status today.",
    sourceUrl: "https://www.peacocktariffconsulting.com/labor-tariffs/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge: commercial opening July 27 still confirmed — 6 days. Windsor-Detroit corridor: $350M/day. Despite tariff escalation, bridge opening proceeds on schedule. Ambassador Bridge open and operating normally.",
    sourceUrl: "https://www.canada.ca/en/housing-infrastructure-communities/news/2026/07/the-gordie-howe-international-bridge-will-open-on-july-27th-strengthening-trade-connectivity-and-economic-development.html",
  },
  {
    icon: "🔧",
    text: "Unifor-GM bargaining Day 1 in Oshawa. Ford ratified 72% yes. 15% wage pattern is the floor. Build 30-day GM parts buffer August 1. Stellantis Brampton idle. Windsor Pacifica intermittent — normal ordering. September 20 is the GM contract expiry hard deadline.",
    sourceUrl: "https://www.unifor.org/",
  },
  {
    icon: "🍁",
    text: "Emergency premiers' meeting called after Trump 50% tariff signing. Ford: 'Tariff for tariff, dollar for dollar.' PM Carney: 'Ready to engage but Canada will not be bullied.' 29-day window before August 19 effective date. Bank of Canada emergency rate decision possible — watch September 10 scheduled decision.",
    sourceUrl: "https://www.cbc.ca/news/politics/",
  },
];

const tipOfTheDay = {
  title: "New Vehicle Prices Are About to Spike — Position Your Shop as the Affordable Alternative Now",
  text: "The 50% tariff on Canadian-assembled vehicles (stacked on the existing 25%) means a 75% effective tariff rate. A $55,000 Silverado faces $41,250 in tariffs at the U.S. border. Canadian consumers will hold their vehicles longer. Your shop is the affordable alternative to buying new. This week: update your customer communication — email, social, signage — to position your shop as the smart financial choice in a tariff economy. 'Keep your car running longer. We keep your costs down.' The next 29 days before August 19 are your window to lock in maintenance customers before prices spike.",
};

const quoteOfTheDay = {
  text: "This is an act of economic aggression. Ontario will respond tariff for tariff, dollar for dollar.",
  author: "Doug Ford",
  title: "Premier of Ontario — Statement on Trump 50% Tariff Order, July 21, 2026",
};

const rideOfTheDay = {
  name: "1970 Oldsmobile 442 W-30 — Rallye Red, 455 V8, 370 hp, Ontario-Plated",
  description: "Rallye Red. Black racing stripes. Ontario licence plate. 455 cubic inch V8, 370 horsepower, W-30 performance package. The 1970 Oldsmobile 442 W-30 was the factory hot rod that Oldsmobile engineers built when the accountants weren't looking. The W-30 package added a specific camshaft, fibreglass inner fender panels to reduce weight, a cold-air induction system with functional hood scoops, and a revised exhaust system. The 455 cubic inch engine produced 370 horsepower and 500 lb-ft of torque — numbers that would embarrass most modern performance cars. Parked at a summer car show in Ontario, golden hour light, chrome gleaming, the 442 badges catching the sun. The tariff wall is going up again. The 442 doesn't care about tariff orders. It just wants to run.",
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
                {["BREAKING: 50% TARIFFS", "SECTION 301: JULY 24", "UNIFOR-GM DAY 1", "'70 OLDS 442 W-30"].map((tag) => (
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
              alt="BREAKING: Trump Signs 50% Tariffs on Canadian Vehicles — Effective August 19 — No CUSMA Exemptions — Baywash Daily Briefing Edition No. 75"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">BREAKING — Edition No. 75 — Tuesday, July 21, 2026 — 50% Tariffs / Section 301: July 24 / Unifor-GM Day 1</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Trump Signs 50% Tariffs on Canadian Vehicles — Effective August 19 — No CUSMA Exemptions
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
