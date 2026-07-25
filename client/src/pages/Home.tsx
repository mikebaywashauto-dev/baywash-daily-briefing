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

const BRIEFING_NUMBER = 79;
const BRIEFING_DATE = "July 25, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/bayfWjaWAJkAoBmm.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/yWJAFAWNwwGJbiLb.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/HgwixEnQjiSHyhHc.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mvDtaXaYOhcHsTEX.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/nEYaODMTCZarpOga.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "OPENS TOMORROW NOON / TRUMP SAYS DEAL DEAD / CARNEY CORRECTS TRUMP / 2012 AGREEMENT STANDS / $350M/DAY CORRIDOR",
    tagColor: "#15803d",
    headline: "Gordie Howe Bridge Opens Tomorrow at Noon — Trump Says Original Deal 'No Longer Stands' — Infrastructure Minister Corrects Him: It Does — The 2012 Canada-Michigan Agreement Is Explicitly Protected",
    summary: "The Gordie Howe International Bridge opens to vehicle and commercial traffic tomorrow — Monday July 27 at noon. But the opening came with a fresh round of political noise on Friday. During the Canadian-only ceremony in Windsor, President Trump posted on Truth Social: 'Canada disinvited the United States of America to the opening of the Gordie Howe Bridge, which is fine, considering they are paying substantial TARIFFS to the United States. The original Deal on the Bridge, which was terribly negotiated by a previous Administration, no longer stands. We changed the terms of the Deal so that the United States of America now gets 50% of the Profit.' Infrastructure Minister Gregor Robertson responded immediately: 'That is not the case.' The actual deal text — released by the Windsor-Detroit Bridge Authority — explicitly states in clause 4: 'Nothing in this Agreement in Principle shall be interpreted as amending, modifying or superseding the 2012 Canada-Michigan Crossing Agreement or the ownership, governance and financial framework established thereunder.' The 2012 agreement, under which Canada fronts all construction costs and collects all tolls until the $6.4-billion debt is repaid (estimated 50 years), remains fully in force. The new agreement adds a separate payment: 50 per cent of net revenues (after operating costs) for 15 years to a U.S. economic development fund. WDBA forecasts show the U.S. fund will receive approximately zero in Year 1 (revenue $35.8M vs. operating costs $135.6M) and Year 2 ($2.9M loss). The first meaningful payment is not expected until 2028. Trump's claim that he 'renegotiated' the deal to get 50 per cent of profits is a characterization of the new side agreement — not a cancellation of the 2012 framework. Gordie Howe's son Murray Howe attended the ceremony: 'I just wish everybody, that side, this side, were all here. But I know Gordie's happy. One step at a time.' The bridge opens tomorrow at noon regardless.",
    whyItMatters: "The political noise is irrelevant to the commercial opening. The bridge opens tomorrow at noon. The Windsor-Detroit corridor currently handles approximately $300-350 million in daily trade through the Ambassador Bridge alone. The Gordie Howe Bridge is a six-lane crossing designed specifically for commercial traffic — it adds capacity and redundancy to the busiest land border crossing in North America. For your shop: the new crossing reduces congestion risk for parts shipments. If you have a major GM parts order arriving next week, the new crossing is an option starting Monday. The revenue deal controversy is a political story that will run through the Conservative committee investigation on July 29. The 2012 Canada-Michigan agreement is legally protected in the deal text itself. Trump's Truth Social post does not change the legal framework. The bridge opens tomorrow. Plan your parts orders accordingly.",
    source: "The Hill / New York Times / Global News / ClickOnDetroit — July 24–25, 2026",
    sourceUrl: "https://thehill.com/homenews/administration/5988864-trump-canada-bridge-tariff/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SECTION 301 HOLDING / CUSMA EXEMPT CONFIRMED / 10% RATE / 25 DAYS TO S.338 / BILATERAL CUSMA TALKS",
    tagColor: "#b91c1c",
    headline: "Section 301 Holding at 10% — CUSMA Exemption Confirmed — 25 Days to Section 338 — U.S. Pursuing Bilateral CUSMA Deals With Canada and Mexico Separately — Full Renegotiation Pushed to 2027",
    summary: "Section 301 forced labour tariffs remain in effect at 10 per cent for Canada, with the CUSMA exemption confirmed and holding. The tariff baseline is stable. The focus this weekend shifts to the negotiating track. Reuters reported Wednesday that USTR Greer is 'aiming for interim arrangements' on CUSMA by year-end 2026 — not a full renegotiation. The Taipei Times reported Saturday that the U.S. is pursuing separate bilateral deals with Canada and Mexico, testing the trilateral CUSMA framework. Canada spokesperson Gabriel Brunet confirmed Canada is 'ready to expedite talks on the trade pact.' Trade Minister LeBlanc has drawn a clear line: Canada does not want a 'one-off' deal that covers only some tariff-affected sectors while leaving others — softwood lumber, steel, aluminum, autos — unresolved. LeBlanc and Greer last spoke Tuesday July 22. The next scheduled contact has not been publicly confirmed. The 25-day countdown to Section 338 (August 19) continues. Section 338 covers cement, alcohol, dairy, hockey sticks, and 550+ other HTS codes — autos and auto parts remain explicitly exempt under Section 232. Canada has not announced retaliatory measures. The Conservative committee investigation into the Gordie Howe Bridge revenue deal is scheduled for July 29.",
    whyItMatters: "The tariff baseline is stable for your shop. Section 301 at 10 per cent, CUSMA exempt, four-year foundation. The negotiating track is moving — slowly, but moving. The key risk to watch: if no interim CUSMA arrangement is reached before August 19, Section 338 takes effect on cement, alcohol, and dairy. Those are not auto parts — but they affect your cost of living and your customers' cost of living, which affects shop traffic. The bilateral track (Canada-only CUSMA talks, separate from Mexico) is actually better for Canada's auto sector — it allows targeted protection for CUSMA-compliant auto parts without being held hostage to Mexico's separate issues. For your shop: no action required on tariffs today. Build your GM parts buffer August 1 — 7 days. Unifor-GM bargaining starts August 10 — 16 days.",
    source: "Reuters / Taipei Times / BNN Bloomberg — July 22–25, 2026",
    sourceUrl: "https://www.reuters.com/world/americas/us-trade-chief-greer-aiming-interim-arrangements-usmca-by-year-end-2026-07-22/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR-GM BARGAINING AUG 10 / 16 DAYS / FORD PATTERN 3% / BUILD GM BUFFER AUG 1 / SEPT 20 EXPIRY",
    tagColor: "#15803d",
    headline: "Unifor-GM Bargaining Starts August 10 — 16 Days — Ford Pattern Set at 3% Annual Increases — Build Your 30-Day GM Parts Buffer August 1 — September 20 Contract Expiry",
    summary: "Unifor-GM bargaining opens in Toronto on August 10 — 16 days from today. The Ford pattern is set: the Ford deal ratified this month at 74 per cent approval established 3 per cent annual wage increases as the floor. GM will be expected to match or beat the Ford pattern. The key plants at stake: the Oshawa Assembly Complex (Silverado pickup trucks) and CAMI Assembly in Ingersoll (Equinox EV). CAMI is currently idle. The Oshawa Silverado is GM's highest-margin North American truck — it is the plant GM cannot afford to lose. The September 20 contract expiry is the hard deadline. Unifor has historically used the threat of strike action at the highest-margin plant to extract concessions. The Gordie Howe Bridge opens tomorrow — a new commercial crossing that adds supply chain redundancy for GM parts flowing from Michigan suppliers. Section 301 is in effect at 10 per cent for non-CUSMA parts. CUSMA-compliant parts remain exempt. The 25-day countdown to Section 338 (August 19) runs concurrently with the pre-bargaining period.",
    whyItMatters: "The GM buffer window is August 1 — 7 days from today. That is the date to build your 30-day supply of GM parts before bargaining reaches its critical phase. If Unifor and GM reach an impasse in late August or early September, a work stoppage at Oshawa or CAMI would immediately affect GM parts availability across Ontario. The Ford pattern at 3 per cent annual increases is the baseline — GM will likely face demands above that given the tariff environment and the political pressure on GM to invest in Canadian production. For your shop: if you service GM vehicles, build your buffer August 1. If you have a major GM parts order, consider routing it via the new Gordie Howe Bridge starting Monday to test the new crossing. Section 338 takes effect August 19 — 25 days — but autos and auto parts remain exempt.",
    source: "BNN Bloomberg / Unifor / Automotive News Canada — July 2026",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/07/21/unifor-names-general-motors-as-next-us-automaker-for-contract-talks/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opens TOMORROW at noon — Monday July 27. Trump posted during Friday's ceremony that the original deal 'no longer stands.' Infrastructure Minister Robertson corrected him immediately: it does stand. The 2012 Canada-Michigan agreement is explicitly protected in clause 4 of the new deal text. Bridge opens tomorrow regardless.",
    sourceUrl: "https://thehill.com/homenews/administration/5988864-trump-canada-bridge-tariff/",
  },
  {
    icon: "✅",
    text: "Section 301 holding at 10%. CUSMA exemption confirmed. 25 days to Section 338 (August 19). Autos and auto parts remain exempt from Section 338 (under Section 232). U.S. pursuing bilateral CUSMA deals with Canada and Mexico separately — full renegotiation pushed to 2027.",
    sourceUrl: "https://www.reuters.com/world/americas/us-trade-chief-greer-aiming-interim-arrangements-usmca-by-year-end-2026-07-22/",
  },
  {
    icon: "🔧",
    text: "Build your 30-day GM parts buffer August 1 — 7 days. Unifor-GM bargaining starts August 10 — 16 days. Ford pattern: 3% annual increases, 74% ratification. Oshawa Silverado and CAMI Equinox EV at stake. September 20 contract expiry.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/07/21/unifor-names-general-motors-as-next-us-automaker-for-contract-talks/",
  },
  {
    icon: "🍁",
    text: "Conservative committee investigating Gordie Howe Bridge revenue deal — July 29. Canada not yet announcing retaliatory tariffs. LeBlanc-Greer talks continuing. Bank of Canada next decision: September 10. CUSMA full renegotiation pushed to 2027.",
    sourceUrl: "https://globalnews.ca/news/11987771/gordie-howe-bridge-deal-confusion-trump-carney/",
  },
  {
    icon: "🇨🇦",
    text: "Section 338 covers $20B of $380B total Canada-U.S. trade — autos and auto parts explicitly exempt (under Section 232). Section 338 effective August 19 — 25 days. No Canadian retaliation announced. Pedestrian/bicycle access to Gordie Howe Bridge: August 5.",
    sourceUrl: "https://thehill.com/homenews/administration/5988864-trump-canada-bridge-tariff/",
  },
];

const tipOfTheDay = {
  title: "The Gordie Howe Bridge Opens Tomorrow — Test the New Crossing With Your First GM Parts Order Monday",
  text: "The Gordie Howe Bridge opens to commercial traffic at noon Monday July 27. This is the most significant supply chain infrastructure improvement for Ontario auto shops in a decade. The new six-lane crossing adds capacity and redundancy to the Ambassador Bridge — the busiest land border crossing in North America. Today's action: if you have a GM parts order arriving next week, consider routing it via the new Gordie Howe crossing starting Monday to test the process. The new crossing is designed for commercial trucks. It will reduce congestion and wait times at the Ambassador Bridge. Build your 30-day GM parts buffer August 1 — 7 days from today. Unifor-GM bargaining starts August 10. Section 338 takes effect August 19 — 25 days. Autos and auto parts remain exempt from Section 338 (they are under Section 232). Section 301 is in effect at 10 per cent for non-CUSMA parts — CUSMA-compliant parts remain exempt.",
};

const quoteOfTheDay = {
  text: "It's regretful that this is what it's come to. It just speaks to where we're at with our relationship with the United States. I genuinely am hopeful that at some point in the future, we could close this bridge for a couple hours and have the proper celebration that it deserves.",
  author: "Drew Dilkens",
  title: "Mayor of Windsor, Ontario — at the Gordie Howe Bridge ceremony, July 24, 2026",
};

const rideOfTheDay = {
  name: "1970 Buick GSX Stage 1 — Saturn Yellow, Black Stripes, Ontario-Plated",
  description: "Saturn Yellow. Black racing stripes running the full length of the hood and trunk. GSX badges on the front fenders. Hood-mounted tachometer. Rear spoiler. Ontario licence plate. 455 cubic inch Stage 1 V8, 360 horsepower (factory-rated, widely believed to be underrated), 510 lb-ft of torque. The 1970 Buick GSX Stage 1 is one of the most underrated muscle cars of the era — Buick built only 678 Stage 1 cars in 1970, making it rarer than a Hemi 'Cuda or a LS6 Chevelle. The 455 Stage 1 engine was a torque monster: 510 lb-ft at 2,800 RPM, which meant it pulled hard from idle and kept pulling all the way to the redline. Motor Trend tested a 1970 GSX Stage 1 at 13.38 seconds in the quarter mile — faster than the advertised numbers. Saturn Yellow was the signature GSX colour — Buick also offered Apollo White, but Saturn Yellow is the one everyone remembers. Parked at a summer car show in Ontario, golden hour light, Saturn Yellow paint glowing intensely against a blue sky. The Gordie Howe Bridge opens tomorrow. The GSX has been waiting long enough.",
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
