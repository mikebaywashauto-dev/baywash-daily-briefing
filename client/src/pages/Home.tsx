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

const BRIEFING_NUMBER = 33;
const BRIEFING_DATE = "June 9, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SAGSHYYgNzbvpwxS.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/oyrEeKChQTUveRVV.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/cSFqwuIVQkMDjeZM.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dDvWwBsxckJqfNyt.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/BLGGYMkmzxlZFENU.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "BREAKING",
    tagColor: "#e05a1a",
    headline: "Gordie Howe Bridge Ribbon-Cutting THIS FRIDAY — Opens to Traffic June 15",
    summary: "After 4+ months of Trump blocking the opening, the Gordie Howe International Bridge is finally set to open. Government sources confirmed Sunday night: ribbon-cutting ceremony Friday, June 13, with Governor Whitmer and Canadian officials attending, followed by public traffic opening Monday, June 15. The $5.7 billion, six-lane cable-stayed bridge connects Windsor and Detroit — the corridor through which $50 billion in annual trade flows, the majority of it automotive parts and finished vehicles. The Moroun family (owners of the competing Ambassador Bridge) is under House investigation for allegedly lobbying Trump to block the opening. DHS Secretary Mullin confirmed last week that customs and border protection staff are staffed and 'ready to go.' The bridge was expected to open in spring 2026 — spring ends June 20. The six-lane design and direct highway connections on both sides of the border will dramatically reduce crossing times compared to the Ambassador Bridge, which regularly backs up for hours during peak periods. The bridge's opening is the most significant positive development for the Windsor-Detroit automotive supply chain in years — and potentially a signal that the broader Canada-U.S. trade relationship is beginning to thaw.",
    whyItMatters: "The Gordie Howe Bridge opening is directly relevant to every Canadian shop owner who sources parts through the Windsor-Detroit corridor. The Ambassador Bridge currently handles approximately $50 billion in annual automotive trade — and it regularly backs up for hours. The Gordie Howe Bridge's six lanes and direct highway connections will cut crossing times dramatically, which means faster parts delivery from U.S. distributors and less buffer inventory required. If you have customers who regularly cross to the U.S. for parts runs or deliveries, alert them now: the bridge opens June 15. The opening also has a symbolic dimension: it is the first concrete positive development in Canada-U.S. trade relations since the tariff war began, and it may signal that the broader CUSMA negotiation is moving toward resolution.",
    source: "Global News / CBS Detroit / Fox 2 Detroit / WDBA",
    sourceUrl: "https://globalnews.ca/news/11895621/gordie-howe-bridge-ribbon-cutting-date/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRADE",
    tagColor: "#1d4ed8",
    headline: "Carney's Trade Push Collides with Reality — CUSMA Is Canada's #1 Investment Pitch, 22 Days to July 1",
    summary: "Reuters exclusive today: Canada's pitch to foreign investors is built almost entirely on CUSMA access to the U.S. market. Toyota lobbied Ottawa on USMCA 13 of 14 times this year. Honda raised it in 21 of 27 government contacts, citing 'the need to ensure protections for North America's integrated automobile industry and supplier network.' Toyota and Honda together account for over 75% of vehicles made in Canada. Sweden's Volvo Group urged Ottawa to 'maintain the USMCA as is.' South Korea's Kia warned changes could raise costs and cause job losses. A top Canadian government official told Reuters: 'That deal has been kind of a baseline of our investment attraction message.' The Reuters report also revealed that 85% of Canada-U.S. bilateral trade remains tariff-free under CUSMA — a figure that underscores how much is at stake if the agreement lapses or is fundamentally restructured. 22 days to July 1. U.S.-Mexico Round 2 is June 16-17 in Washington — Canada is still not on the formal negotiating calendar. Trade Minister LeBlanc declared talks 'unfrozen' after his June 3 meeting with USTR Greer, but no formal bilateral negotiating track has been announced. The Bank of Canada holds its rate decision Wednesday, June 11.",
    whyItMatters: "The Reuters report crystallizes what is at stake in the CUSMA negotiations for the Canadian automotive sector. Toyota and Honda — which together make more than 75% of vehicles built in Canada — have made CUSMA renewal their single most important government relations priority. Their investment decisions for the next decade depend on it. For Canadian shop owners, the implications are direct: if CUSMA lapses or is modified to exclude Canadian parts content, parts prices rise 15-25% within 90 days. If CUSMA renews cleanly, the supply chain stabilizes and parts prices remain roughly flat. The June 16-17 U.S.-Mexico Round 2 is the next critical data point: if Canada participates, a July 1 deal is possible. If Canada is excluded again, the most likely outcome is an annual review extension — meaning CUSMA uncertainty continues through 2027.",
    source: "Reuters / David Ljunggren / Steve Scherer, June 9, 2026",
    sourceUrl: "https://www.reuters.com/business/mark-carneys-trade-push-collides-with-reality-us-dependence-2026-06-09/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SUPPLY CHAIN",
    tagColor: "#c0392b",
    headline: "UAW Dauch Strike Day 9 — GM Has ~5 Days of Silverado/Sierra Axle Inventory, No Talks Scheduled",
    summary: "The UAW strike at Dauch Corp's Three Rivers, Michigan plant enters its ninth day with no negotiations scheduled. The plant makes drive axles for the Chevrolet Silverado, GMC Sierra, and heavy-duty trucks — GM's most profitable vehicles. GM has been deploying approximately 250 salaried workers on production lines to extend its inventory buffer, but analysts estimate GM has roughly five days of axle supply remaining before production halts. Workers are seeking wage increases above $30 per hour (up from $22/hr) to recover concessions made in 2008 — in inflation-adjusted terms, their wages have been cut in half since then. UAW President Shawn Fain: 'These workers are determined, and they are fed up.' The UAW Spring 2026 Solidarity Magazine, published this weekend, features the Dauch strike prominently — signalling the union is dug in for a long fight. Nexteer workers (1,700 UAW members making steering gear for GM, Ford, and Stellantis in Saginaw) are still demanding to join the strike. If GM halts Silverado/Sierra production, the Oshawa Assembly Complex is directly in the supply chain. The 2008 American Axle strike lasted 89 days and cost GM nearly $3 billion.",
    whyItMatters: "If GM halts Silverado/Sierra production this week, the ripple effects will reach Canadian shops within 30-60 days. Dealer service departments will prioritize warranty work on vehicles they have in inventory and stop taking appointments for vehicles they cannot sell. Independent shops become the only option for Silverado/Sierra owners. Call your top 20 GM truck customers today and book their next service appointment — before the dealer service departments start turning people away. Also: if you carry any GM OEM parts, check your inventory on Silverado/Sierra-specific items. Parts allocation programs typically follow production halts within two to three weeks.",
    source: "Reuters / UAW Solidarity Magazine / Crain's Detroit, June 8-9, 2026",
    sourceUrl: "https://www.reuters.com/legal/litigation/uaw-strike-against-gm-axle-supplier-continues-without-talks-union-official-says-2026-06-02/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opens June 15. Six lanes, direct highway connections Windsor-Detroit. The Ambassador Bridge will no longer be the only crossing for the $50B/year automotive trade corridor. Parts delivery times from U.S. distributors will improve significantly.",
    sourceUrl: "https://globalnews.ca/news/11895621/gordie-howe-bridge-ribbon-cutting-date/",
  },
  {
    icon: "🤝",
    text: "CUSMA — 22 days to July 1. U.S.-Mexico Round 2 is June 16-17 in Washington. Canada's inclusion or exclusion from those talks is the most important signal of the week. The 82%/50% U.S. content demand (which would exclude Canadian parts from vehicle content calculations entirely) remains on the table.",
    sourceUrl: "https://www.reuters.com/business/mark-carneys-trade-push-collides-with-reality-us-dependence-2026-06-09/",
  },
  {
    icon: "🛢️",
    text: "Motor oil shortage: peak supply constraint now Q4 2026 – Q1 2027. Wholesale full synthetic costs already up $7.00-$8.45/gal. 0W-20 remains the most at-risk grade. Shell's Pearl GTL (world's largest Group III producer) offline for 12+ months. This week is the last realistic window to place supplemental orders before allocation programs restrict ordering.",
    sourceUrl: "https://jobbersworld.com/2026/06/05/will-there-be-enough-motor-oil/",
  },
  {
    icon: "🏦",
    text: "Bank of Canada rate decision Wednesday, June 11. May jobs report (+87,800, unemployment to 6.6%) argues for holding or hiking. Bond markets pricing 30+ basis points of tightening by December. Higher rates mean fewer new vehicle purchases and more service work for your shop.",
    sourceUrl: "https://www.canadianmortgagetrends.com/2026/06/canadian-employment-up-87800-jobless-rate-falls-to-6-6/",
  },
];

const tipOfTheDay = {
  title: "Gordie Howe Bridge Opens June 15 — Update Your Parts Sourcing Strategy",
  text: "The Gordie Howe Bridge opens to traffic on June 15. Here is how to take advantage of it. First, contact your U.S.-based parts distributors this week and ask if they have a Windsor-side distribution point or if they can offer faster delivery via the new crossing. The six-lane bridge with direct highway connections will cut crossing times from hours to minutes during peak periods. Second, if you currently hold extra buffer inventory because of Ambassador Bridge delays, you may be able to reduce that buffer once the new bridge is operating — freeing up working capital. Third, if you have technicians or drivers who make parts runs across the border, brief them on the new crossing: the Gordie Howe Bridge connects directly to Highway 401 on the Canadian side and I-75 on the U.S. side. Fourth, watch for whether the bridge opening is used as a bargaining chip in the CUSMA talks — if it is, it may signal that a broader trade deal is imminent.",
};

const quoteOfTheDay = {
  text: "For many of the Japanese companies investing here, one of the reasons for their investment is definitely the special access Canada has enjoyed over the long years.",
  author: "Ishii Hideaki",
  title: "Minister and Deputy Head of Mission, Japanese Embassy in Ottawa — Reuters, June 9, 2026",
};

const rideOfTheDay = {
  name: "1970 Ford Torino Cobra 429 Super Cobra Jet — The NASCAR Muscle Car Nobody Talks About",
  description: "The 1970 Ford Torino Cobra 429 SCJ is the muscle car that NASCAR built. Ford's 429 Super Cobra Jet was the street-legal version of the engine that dominated NASCAR superspeedways — the same basic architecture that powered Talladega and Daytona winners. The SCJ package added a 780 CFM Holley carburetor, drag pack oil cooler, and Traction-Lok differential. In Grabber Orange with the Cobra hood scoop and black stripe, it is one of the most visually aggressive muscle cars ever built. Factory-rated at 375 hp, actual output was closer to 425 hp with 450 lb-ft of torque. The Torino Cobra ran the quarter mile in the low 13s from the factory — quicker than most Chevelles and Mopars of the same era. Today, a documented 429 SCJ Torino Cobra in Grabber Orange trades for $85,000-$140,000 — still undervalued compared to the Chevelle SS 454 and Hemi Cuda that get all the attention. On a Monday morning when the Gordie Howe Bridge is finally opening and CUSMA has 22 days to go, the Torino Cobra is a reminder that the most capable option is not always the most celebrated one — and that the best deals are often hiding in plain sight.",
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
              <div className="flex gap-2">
                {["BRIDGE", "CUSMA", "GM STRIKE", "OIL"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Gordie Howe International Bridge ribbon-cutting ceremony — opens to traffic June 15, 2026"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Breaking</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Gordie Howe Bridge Opens June 15 — CUSMA 22 Days Out, GM Trucks Running on Empty
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron</span>
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
