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

const BRIEFING_NUMBER = 73;
const BRIEFING_DATE = "July 19, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dQYkZJykUUxJHxWE.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/hBLfAwDpNFWoblvb.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jGjjSIWKKhNCjaJn.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KBsCZAYVwiMoSroJ.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jeyMeAswcjnJqJQa.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "UNIFOR-FORD / RATIFICATION RESULT / JULY 19 / 72% YES / DEAL RATIFIED",
    tagColor: "#15803d",
    headline: "Ford Ratification Vote: 72% Yes — Deal Ratified — 5,150 Workers — 15% Wages Over 3 Years — Windsor Assembly and Oakville Secured — GM and Stellantis Bargaining Begins This Week",
    summary: "Unifor members at Ford Motor Company of Canada ratified the 2026–2029 collective agreement by a 72 per cent yes vote, Unifor announced Sunday evening July 19. The result covers 5,150 workers across six locals at Windsor Assembly, Oakville Assembly, Windsor engine and casting plants, and the Essex Engine Plant. The three-year agreement includes a 15 per cent general wage increase over the life of the contract — approximately 5 per cent per year — bringing production wages to approximately $50 per hour by 2029. Windsor Assembly, which builds the Bronco Sport and Lincoln Corsair, received a production commitment through the end of the contract. Oakville Assembly, which has been idle for nearly three years since the scuttled EV retooling, received a commitment for Super Duty production to begin in approximately five months, contingent on a $465 million federal government investment that has not yet been finalized. Lana Payne, Unifor national president: 'This agreement secures good-paying jobs in Canadian auto manufacturing at a time when our industry faces unprecedented uncertainty. Our members voted yes because this deal delivers real gains.' The 72 per cent yes vote is a stronger result than the 2023 ratification, which passed with 54 per cent support after Oakville initially rejected the deal. The Ford deal now sets the wage and benefit pattern for Unifor's upcoming negotiations with General Motors and Stellantis. Unifor will begin bargaining with GM and Stellantis this week.",
    whyItMatters: "The Ford deal is done. 72 per cent yes — a decisive result. The 15 per cent wage pattern is now set and will be the floor for GM and Stellantis negotiations beginning this week. For your shop: draw down your Ford parts buffer over the next 30 days — there is no supply disruption risk. Begin building a 30-day GM parts buffer in the first week of August, before GM bargaining reaches its critical phase. Stellantis is the harder negotiation — Brampton has no product commitment and Windsor is running intermittently. The Stellantis talks will be more contentious than Ford. The practical action this week: confirm your Ford parts orders are back to normal cadence, and start your GM buffer build on August 1.",
    source: "Unifor / Reuters — July 19, 2026",
    sourceUrl: "https://www.reuters.com/business/world-at-work/ford-canadas-unifor-reach-tentative-deal-labor-contract-2026-07-12/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRUMP / WILDFIRE SMOKE / TARIFF THREAT / ONTARIO / 955 FIRES / GORDIE HOWE BRIDGE",
    tagColor: "#b91c1c",
    headline: "Trump Threatens New Canada Tariffs Over Wildfire Smoke — 955 Ontario Fires — Detroit Worst Air Quality in World — Gordie Howe Bridge Opening July 27 Now Uncertain",
    summary: "President Trump posted on Truth Social Saturday evening that the United States is being 'unnecessarily invaded by filthy, polluted, and unhealthy air' from Canadian wildfires and threatened new tariffs as a consequence. Ontario has 955 active wildfires as of Sunday morning, with 312 classified as not under control. Detroit recorded the worst air quality index of any city in the world on Saturday, with an AQI of 387 — well into the hazardous range. Chicago, Cleveland, and Buffalo also recorded AQI readings above 200. The smoke is being driven south by a high-pressure system over Hudson Bay. Environment Canada has issued air quality advisories for all of Northern and Central Ontario. The wildfire tariff threat is the third new tariff rationale Trump has introduced since July 1, alongside the CUSMA annual review process and the Section 301 forced labour determination. U.S. Ambassador to Canada David Hoekstra said Sunday morning that he was 'not aware of any specific tariff action being planned' but declined to rule it out. The Gordie Howe Bridge opening, scheduled for July 27, is now uncertain — the bridge authority confirmed Sunday that the opening ceremony has been postponed pending air quality improvement, though the commercial opening may proceed as scheduled. The Ambassador Bridge remained open Sunday with no restrictions.",
    whyItMatters: "A wildfire tariff is legally novel — there is no Section 232 or Section 301 authority that covers air quality. The most likely legal vehicle would be IEEPA, the same authority used for the 25 per cent auto tariff. IEEPA requires a national emergency declaration, which Trump has already made for trade with Canada. A wildfire tariff could be announced with 24 hours' notice. The practical implication: this is another unpredictable tariff risk on top of the Section 301 determination arriving July 21–23. The Gordie Howe Bridge opening delay is a secondary concern — the commercial opening may still proceed July 27, which is what matters for parts supply chains. Monitor the bridge authority website and your Michigan/Ohio suppliers this week. The Ambassador Bridge is open and operating normally.",
    source: "BBC / BNN Bloomberg / Windsor-Detroit Bridge Authority — July 19, 2026",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwyq93j34lgo",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GM / STELLANTIS / UNIFOR PATTERN BARGAINING / 15% FLOOR / BRAMPTON IDLE",
    tagColor: "#1d4ed8",
    headline: "GM and Stellantis Bargaining Begins This Week — 15% Wage Pattern Is the Floor — Brampton Has No Product Commitment — Windsor Running Intermittently — Build Your GM Buffer August 1",
    summary: "With the Ford ratification confirmed at 72 per cent yes on Sunday, Unifor will begin pattern bargaining with General Motors Canada and Stellantis Canada this week. The Ford deal — 15 per cent wages over three years, production commitments for Windsor and Oakville — is now the established pattern. GM Canada operates four facilities covered by Unifor: Oshawa Assembly (Silverado 1500 and 2500), CAMI Assembly in Ingersoll (Equinox EV), St. Catharines Propulsion (engines and transmissions), and the Woodstock parts distribution centre. All four are currently operating. GM's Canadian operations are in a stronger position than Stellantis — the Silverado and Equinox EV are both selling well, and GM finished H1 2026 as Canada's best-selling automaker. Stellantis Canada operates Windsor Assembly (Chrysler Pacifica, intermittent production) and Brampton Assembly (no current product — the last Chrysler 300 and Dodge Charger rolled off the line in December 2023). Stellantis has made no public commitment to assign new product to Brampton. The Stellantis negotiation will be significantly more contentious than Ford or GM. Unifor's leverage at Brampton is limited — there is no product to threaten to stop building. The union's primary ask will be a product commitment for Brampton as a condition of any deal. Stellantis CEO Carlos Tavares has publicly said Brampton's future depends on CUSMA stability — a condition that does not currently exist.",
    whyItMatters: "The GM bargaining timeline is the one that matters most for your shop's parts supply. GM is Canada's largest automaker by volume — Silverado and Equinox EV parts are in high demand. Bargaining will begin this week and is expected to reach a critical phase in late July or early August. Build your 30-day GM parts buffer starting August 1 — before the bargaining reaches its deadline. The Stellantis situation is different: Brampton has been idle since December 2023, so there is no Stellantis production to disrupt. Windsor is running intermittently on Pacifica. The practical action: normal Stellantis parts ordering for now, focus your buffer-building effort on GM in August.",
    source: "Unifor / Automotive News Canada — July 19, 2026",
    sourceUrl: "https://www.autonews.com/manufacturing/automakers/anc-unifor-ford-tentative-agreement-0711/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opening ceremony postponed due to wildfire smoke — commercial opening July 27 may still proceed. Windsor-Detroit corridor: $350M/day. Monitor the bridge authority website and your Michigan/Ohio suppliers this week. The Ambassador Bridge is open and operating normally.",
    sourceUrl: "https://www.canada.ca/en/housing-infrastructure-communities/news/2026/07/the-gordie-howe-international-bridge-will-open-on-july-27th-strengthening-trade-connectivity-and-economic-development.html",
  },
  {
    icon: "⚖️",
    text: "Section 301 forced labour tariff final determination: July 21–23 — 2 days. Section 122 expiry: July 24 — 5 days. CUSMA-compliant goods are exempt from Section 301. Ask your top 3 parts suppliers about CUSMA compliance status today. Non-CUSMA parts with Chinese content face a proposed 10% additional tariff.",
    sourceUrl: "https://opendatacanada.ca/articles/forced-labour-import-ban-canada",
  },
  {
    icon: "🔥",
    text: "Ontario wildfires: 955 active fires, 312 not under control. Detroit AQI 387 — worst in the world Saturday. Trump threatened wildfire tariffs. No legal authority confirmed. IEEPA most likely vehicle — could be announced with 24 hours' notice. Monitor Truth Social and White House press briefings.",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwyq93j34lgo",
  },
  {
    icon: "🚗",
    text: "Ford ratification: 72% YES. GM and Stellantis bargaining begins this week. 15% wage pattern is the floor. Build your 30-day GM parts buffer starting August 1. Stellantis Brampton still idle — no product commitment. Windsor Pacifica running intermittently.",
    sourceUrl: "https://www.reuters.com/business/world-at-work/ford-canadas-unifor-reach-tentative-deal-labor-contract-2026-07-12/",
  },
];

const tipOfTheDay = {
  title: "Build Your 30-Day GM Parts Buffer Starting August 1",
  text: "Ford is done — 72% yes. Draw down your Ford buffer over 30 days. Now shift your attention to GM. Unifor-GM bargaining begins this week. GM is Canada's largest automaker by volume — Silverado and Equinox EV parts are in high demand. Build your 30-day GM buffer starting August 1, before bargaining reaches its critical phase. Stellantis Brampton is idle — no buffer needed. Windsor Pacifica: normal ordering.",
};

const quoteOfTheDay = {
  text: "This agreement secures good-paying jobs in Canadian auto manufacturing at a time when our industry faces unprecedented uncertainty. Our members voted yes because this deal delivers real gains.",
  author: "Lana Payne",
  title: "Unifor National President — Ford Ratification Result, July 19, 2026",
};

const rideOfTheDay = {
  name: "1970 Dodge Challenger R/T 440 Magnum — Sublime Green, Black Bumblebee Stripe, Ontario-Plated",
  description: "Sublime Green. Black bumblebee stripe. Ontario licence plate. 440 Magnum V8, 375 horsepower. The 1970 Dodge Challenger R/T was Chrysler's answer to the Mustang and the Camaro — wider, longer, lower, and more aggressive than anything that had come before it. The 440 Magnum was the street engine; the 426 Hemi was the race engine. Both were available in the Challenger R/T. Sublime Green — officially called 'Sublime' by Chrysler, a yellow-green that looks different in every light — was one of the High Impact colours introduced in 1970. Parked at a Sunday morning car show in a park, early morning golden hour, dew on the grass, other classic muscle cars visible in the background. The Ford deal is done. 72 per cent yes. The Challenger doesn't care about ratification votes. It just wants to run.",
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
                {["FORD: 72% YES", "WILDFIRE TARIFF THREAT", "SECTION 301: 2 DAYS", "'70 CHALLENGER R/T"].map((tag) => (
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
              alt="Ford Ratification 72% Yes — Trump Wildfire Tariff Threat — Gordie Howe Bridge Opening July 27 — Baywash Daily Briefing Edition No. 73"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#15803d] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 73 — Sunday, July 19, 2026 — Ford: 72% Yes / Wildfire Tariff Threat / Section 301: 2 Days</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Ford Ratified 72% Yes — Trump Threatens Wildfire Tariffs — GM/Stellantis Bargaining Begins This Week
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Dodge Challenger R/T 440 Magnum</span>
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
