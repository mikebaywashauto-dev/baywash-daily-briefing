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

const BRIEFING_NUMBER = 92;
const BRIEFING_DATE = "August 7, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/boYWfarRbPqBpkDH.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wvXDvGrYghKccQPh.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OUnEWKGSeylJjoYw.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/DYupSyQWujfkAvoq.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YbHoyzQwRhPExfLV.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TRUMP: 'CANADA IS NASTY' / LEBLANC-GREER 90-MINUTE MEETING / 'CONSTRUCTIVE AND DETAILED' / 12 DAYS TO AUGUST 19 / AUTOS EXEMPT",
    tagColor: "#b91c1c",
    headline: "Trump: 'Canada Is Nasty' — LeBlanc-Greer Meeting Ran 90 Minutes — 'Constructive and Detailed' — LeBlanc Back in Washington Next Week",
    summary: "Trump at a Las Vegas rally Wednesday night: 'Canada's nasty. They are. They're nasty. I love the people, but they're nasty. Nasty leadership.' Carney responded Thursday at a press conference in Saguenay: 'Whatever adjective is used, we're standing up for Canadian workers, for Canadian businesses.' LeBlanc and Charette met USTR Greer Thursday afternoon. The meeting was scheduled for 30 minutes but ran 90 minutes. LeBlanc post-meeting on social media: 'constructive and detailed.' 'Our focus has been and will continue to be on striking a comprehensive deal that addresses sectoral tariffs and benefits Canadian workers, farmers and businesses.' Two CBC sources confirmed LeBlanc will be in Washington AGAIN next week. Carney: 'Will we get all of that by the 19th of August? We'll see. But we want to have pathways in order to get that.' Canada is seeking a comprehensive deal covering all strategic sectors — not a narrow deal. Jean Charest (Advisory Committee): the Carney-Trump phone call last week resulted in 'wider engagement from the U.S. administration.' 12 days to August 19. Autos and auto parts EXEMPT under Section 232.",
    whyItMatters: "The 90-minute meeting (scheduled for 30) is the most positive signal yet. LeBlanc returns to Washington next week. Carney: 'We'll see' if a deal is possible by August 19 — but 'pathways' are being discussed. For your shop: autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% — CUSMA-compliant parts exempt. GM bargaining opens Monday — build your buffer this weekend.",
    source: "CBC / AP / Financial Post — August 6–7, 2026",
    sourceUrl: "https://www.cbc.ca/news/politics/canada-u-s-trade-negotiations-9.7298137",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CARNEY AT RIO TINTO SAGUENAY / U.S. ALUMINUM PRICE UP 52% / CANADA = 44% OF U.S. ALUMINUM IMPORTS / WIN-WIN DEAL POSSIBLE",
    tagColor: "#0369a1",
    headline: "Carney at Rio Tinto Saguenay: U.S. Aluminum Prices Up 52% — Canada = 44% of U.S. Imports — 'Win-Win' Deal Possible — But Must Cover All Sectors",
    summary: "PM Carney spoke at a Rio Tinto aluminum facility in Saguenay, Quebec Thursday, making the economic case for a Canada-U.S. trade deal. The U.S. aluminum producer price index rose 52% from June 2025 to June 2026. Canada accounts for 44% of U.S. aluminum imports. Carney: 'Some of that is international prices, but most of that is pass-through of the tariff. That's not a good situation for American companies.' Canada is using this data to argue for a 'win-win' deal that covers aluminum, steel, autos and lumber together. Carney: 'We're not interested in having a very targeted deal without connecting other sectors.' Last month Trump announced plans to reduce aluminum tariffs to 25% for companies that build or expand U.S. aluminum plants — but that does not help Canadian exporters. Canada's objective: eliminate or reduce Section 232 tariffs on strategic sectors (metals, autos, lumber) as part of a comprehensive deal. Greer and U.S. officials want Canada to address counter-tariffs on U.S. autos, dairy supply management, and provincial alcohol bans.",
    whyItMatters: "The aluminum price argument is Canada's strongest economic leverage. U.S. companies are paying 52% more for aluminum because of Trump's own tariffs. Canada supplies 44% of U.S. aluminum. A TRQ deal on metals would reduce Section 232 tariffs for quota exports. But Carney insists it must be connected to autos and lumber — not a narrow deal. 12 days to August 19. Autos/parts EXEMPT under Section 232.",
    source: "Financial Post / Bloomberg / AP — August 6–7, 2026",
    sourceUrl: "https://financialpost.com/commodities/carney-says-aluminum-prices-open-trade-deal-with-trump",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR-GM BARGAINING OPENS MONDAY AUGUST 10 / 3 DAYS / CAMI EQUINOX EV FUTURE UNCLEAR / FORD PATTERN FLOOR / GM PENSION FULLY FUNDED",
    tagColor: "#15803d",
    headline: "Unifor-GM Bargaining Opens Monday August 10 — 3 Days — CAMI Equinox EV Future 'Unclear' — GM Canada Pension Fully Funded — Build Buffer This Weekend",
    summary: "Unifor-GM formal bargaining opens Monday August 10 at the Toronto Sheraton Centre — 3 days from today. Unifor represents 4,600+ members at Ontario GM facilities: Oshawa Assembly (Silverado pickup), CAMI Assembly in Ingersoll (Equinox EV), and the St. Catharines Propulsion Plant. The Ford pattern is the established floor: 3% annual wage increases, $500M Essex Engine Plant, $400M Oakville retooling, commitment not to close or sell Canadian factories for three years. CAMI Assembly (Equinox EV) future remains 'unclear' per Unifor President Lana Payne. Stellantis Brampton: also 'unclear.' Positive signal: GM Canada pension plan reached fully funded status (Benefits Canada, August 7) — reduces GM's financial pressure heading into bargaining. GM contract expires September 20 — 44 days. Unifor is 'playing the long game' — Payne: 'I remind the D3 these are a moment in time. We as a union must play the long game, and they should too.'",
    whyItMatters: "GM bargaining opens in 3 days. CAMI Equinox EV future is 'unclear.' If CAMI closes or is idled, Equinox EV supply ends. Oshawa Silverado is the higher-volume risk. Build your 30-day GM buffer THIS WEEKEND. The GM pension reaching fully funded status is a positive signal for GM's financial position. Ford pattern is the floor: 3% annual increases.",
    source: "Unifor / WardsAuto / Benefits Canada — August 5–7, 2026",
    sourceUrl: "https://www.wardsauto.com/news/unifor-is-playing-the-long-game-in-contract-talks-and-wants-automakers/826674/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🗣️",
    text: "Trump: 'Canada's nasty. They are. They're nasty. Nasty leadership.' Carney: 'Whatever adjective is used, we're standing up for Canadian workers.' LeBlanc-Greer meeting ran 90 minutes (scheduled 30). LeBlanc back in Washington next week.",
    sourceUrl: "https://www.cbc.ca/news/politics/canada-u-s-trade-negotiations-9.7298137",
  },
  {
    icon: "🏭",
    text: "Carney at Rio Tinto Saguenay: U.S. aluminum prices up 52% since June 2025. Canada = 44% of U.S. aluminum imports. 'That's not a good situation for American companies.' Canada wants comprehensive deal — aluminum + steel + autos + lumber together.",
    sourceUrl: "https://financialpost.com/commodities/carney-says-aluminum-prices-open-trade-deal-with-trump",
  },
  {
    icon: "🔧",
    text: "GM bargaining opens Monday August 10 — 3 days. CAMI Equinox EV future 'unclear.' GM Canada pension fully funded — positive signal. Ford pattern: 3% annual increases. Build your GM buffer THIS WEEKEND.",
    sourceUrl: "https://www.wardsauto.com/news/unifor-is-playing-the-long-game-in-contract-talks-and-wants-automakers/826674/",
  },
  {
    icon: "⚖️",
    text: "Section 338: 12 days to August 19. CUSMA does NOT protect. Autos/parts EXEMPT under Section 232. Section 301 at 10% — CUSMA-compliant parts ARE exempt. No court injunction expected before August 19.",
    sourceUrl: "https://www.nortonrosefulbright.com/en/knowledge/publications/8a7d16d5/smoke-or-fire-the-us-proclaims-potential-50-tariffs-on-a-wide-range-of-canadian-goods",
  },
  {
    icon: "📊",
    text: "Poilievre: 'It's time to get results. Take the leverage that he has not yet squandered.' Jean Charest: Carney-Trump phone call resulted in wider U.S. administration engagement. Carney: 'We want to have pathways in order to get that.'",
    sourceUrl: "https://www.cbc.ca/news/politics/canada-u-s-trade-negotiations-9.7298137",
  },
];

const tipOfTheDay = {
  title: "Trump Says 'Nasty' — LeBlanc Meeting Ran 90 Minutes — Carney: Aluminum Is the Key — 12 Days — Build GM Buffer This Weekend",
  text: "Five things for Friday August 7. First: the LeBlanc-Greer meeting ran 90 minutes when scheduled for 30 — that is the most positive signal yet. LeBlanc is back in Washington next week. Second: Carney's aluminum argument is Canada's strongest economic leverage. U.S. aluminum prices are up 52%. Canada supplies 44% of U.S. aluminum. American companies are paying the tariff. Third: Canada wants a comprehensive deal covering aluminum, steel, autos and lumber together — not a narrow deal. Fourth: GM bargaining opens Monday August 10 — 3 days. Build your 30-day GM buffer THIS WEEKEND. CAMI Equinox EV future is 'unclear.' Fifth: 12 days to August 19. CUSMA does NOT protect against Section 338. Autos and auto parts EXEMPT under Section 232. Section 301 at 10% — CUSMA-compliant parts exempt.",
};

const quoteOfTheDay = {
  text: "Whatever adjective is used, we're standing up for Canadian workers, for Canadian businesses, as we always have.",
  author: "PM Mark Carney",
  title: "Responding to Trump calling Canada 'nasty' — Saguenay, Quebec — August 7, 2026",
};

const rideOfTheDay = {
  name: "1970 Oldsmobile 442 W-30 — Rallye Red, White Racing Stripes, Ontario-Plated",
  description: "Rallye Red with white racing stripes — the most aggressive 442 colour combination of the era. The W-30 package: 455 V8 with cold-air induction, special camshaft, and fiberglass hood, 370 horsepower, 500 lb-ft of torque. The W-30 was Oldsmobile's factory performance package — built for people who wanted results, not adjectives. Trump called Canada 'nasty.' The 442 W-30 does not care what adjectives are used.",
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
                {["TRUMP: 'CANADA IS NASTY'", "LEBLANC-GREER: 90 MINUTES", "SECTION 338: 12 DAYS", "'70 OLDS 442 W-30"].map((tag) => (
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
              alt="Trump Calls Canada Nasty — LeBlanc-Greer 90-Minute Meeting — Carney at Rio Tinto Aluminum — Unifor-GM Monday — Baywash Daily Briefing Edition No. 92"
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
