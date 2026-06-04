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

const BRIEFING_NUMBER = 28;
const BRIEFING_DATE = "June 4, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NzdHYQTaDcVlyHuK.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/DfYTkZhzwRiUbTXj.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/DzFhFRcBSSWtoipn.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/BemrsSqHcxTiPHLg.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RllXMtdxWcBTNBTp.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TRADE POLICY",
    tagColor: "#e05a1a",
    headline: "LeBlanc Says Canada-U.S. Trade Talks Are 'Unfrozen' After Washington Meeting with Greer",
    summary: "In the most significant diplomatic development in Canada-U.S. trade relations since the tariff war began, Trade Minister Dominic LeBlanc emerged from his June 3 meeting with U.S. Trade Representative Jamieson Greer and declared: 'Consider them unfrozen.' LeBlanc met with Greer in Washington alongside Chief Trade Negotiator Janice Charette, and also held separate consultations with representatives of the Canadian Vehicle Manufacturers' Association and the American Automotive Policy Council. The official Government of Canada readout, published by Global Affairs Canada, confirmed that both sides 'discussed the importance of maintaining a strong and dynamic North American auto sector as engagements continue for the upcoming CUSMA joint review' and 'noted the challenges associated with U.S. tariffs on autos and auto parts and the need to work together to support continued growth and opportunity in the sector.' Participants outlined key priorities including 'supporting investment, strengthening manufacturing across the region and ensuring the industry remains competitive in a rapidly changing global environment.' The readout notably emphasized 'the shared ambition to reinforce North America's position as a global leader in the automotive sector' — language that mirrors the framing Canada has been pushing since Carney's New York speech on May 28. LeBlanc told reporters he remains 'optimistic' but acknowledged 'we have a lot of work to do between now and July 1.' The July 1 deadline is now 27 days away. The U.S. and Mexico have Round 2 of their bilateral CUSMA negotiations scheduled for June 16-17 in Washington. Whether Canada will be included in or run parallel to that round is the next key question.",
    whyItMatters: "LeBlanc's 'unfrozen' declaration is the most positive signal in Canada-U.S. trade relations since the tariff war began — but it is a diplomatic opening, not a deal. Here is what it means for your shop: First, the risk of a July 1 CUSMA withdrawal trigger has dropped meaningfully. If the U.S. was planning to trigger the six-month withdrawal clause on July 1, Greer would not have agreed to a meeting that produced a positive joint readout. Second, the 82%/50% content proposal — which would exclude Canadian parts from vehicle content calculations — remains on the table from the Mexico City round. LeBlanc did not publicly address whether Greer agreed to take that proposal off the table. Until that specific issue is resolved, Canadian parts suppliers remain at risk of a structural disadvantage in the post-CUSMA world. Third, the China EV deal remains the most likely sticking point. Trump has publicly criticized Canada's decision to allow 49,000 Chinese-built EVs into Canada at a 6.1% tariff, and the U.S. has cited the China deal as evidence that Canada is not a reliable partner. Watch for any post-meeting statement from the U.S. side that specifically addresses the China EV deal — if Greer raises it publicly, negotiations will be harder than LeBlanc's optimism suggests. For now: the talks are unfrozen, the deadline is 27 days away, and the outcome will determine whether your parts supply chain faces a managed transition or a structural crisis.",
    source: "Global Affairs Canada / CBC The National / BNN Bloomberg / Automotive News Canada",
    sourceUrl: "https://www.canada.ca/en/global-affairs/news/2026/06/minister-leblanc-and-chief-trade-negotiator-charette-meet-with-north-american-auto-industry-representatives-ahead-of-upcoming-cusma-joint-review.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "INFRASTRUCTURE",
    tagColor: "#7c3aed",
    headline: "Gordie Howe Bridge: DHS 'Ready to Go' — But Trump Still Blocking, Spring Deadline Has 2 Weeks Left",
    summary: "Department of Homeland Security Secretary Markwayne Mullin confirmed to the Senate Appropriations Committee on June 2 that U.S. Customs & Border Protection staff are 'good to go' to facilitate trade and travel across the newly built Gordie Howe International Bridge — as soon as negotiations between Canada and the United States are resolved. 'We have the personnel dedicated, ready to move,' Mullin told the committee in response to questions from Sen. Gary Peters (D-Michigan). 'We're prepared, we're staffed, ready to go. There's still negotiations between Canada and the United States that's not within DHS that has to be resolved. But we're as far as we can go without the sign off from the bridge and the final agreement between the two countries.' Mullin also confirmed that the bridge contractor missed a May 1 sign-off deadline on 'final stuff,' adding another layer of delay beyond the political impasse. The Windsor-Detroit Bridge Authority spokeswoman Tara Carson told The Detroit News that the span is 'progressing well towards a spring opening' and that 'the exact opening date depends on the completion of the ongoing quality reviews and testing and commissioning activities.' Spring ends June 20 — 16 days from today. U.S. Ambassador to Canada Pete Hoekstra told The Detroit News a month ago that 'the president will have to sign off on it' and cited 'a lot of issues right now between the U.S. and Canada.' Trump has demanded trade concessions or a share of future toll revenue as a condition for opening the 1.5-mile, six-lane span. The bridge cost $4.7 billion to build; Canada carries approximately $6.4 billion in Canadian dollar debt at a 4.8% interest rate. Michigan will not receive its share of toll revenues until Canada pays off that debt — meaning Trump's delay is ironically costing Michigan money, as former Canadian consul general Roy Norton noted.",
    whyItMatters: "The Gordie Howe Bridge is the single most important piece of automotive trade infrastructure in North America. The Windsor-Detroit corridor handles $50 billion in annual trade, the majority of which is automotive parts and finished vehicles. The Ambassador Bridge — the current primary crossing, owned by billionaire Matthew Moroun — handles approximately 25% of all Canada-U.S. trade by value. The Gordie Howe Bridge was designed to double that capacity and provide a publicly owned alternative. Every day the bridge remains closed is a day of unnecessary supply chain friction for Canadian shops sourcing U.S.-origin parts. The DHS confirmation that customs staff are ready is significant: it means the only remaining obstacles are the contractor sign-off and the Trump White House's political demands. With the LeBlanc-Greer talks now 'unfrozen,' there is a scenario in which the bridge opening becomes part of a broader Canada-U.S. trade package before July 1. Watch for any White House statement linking bridge opening to CUSMA progress — that would be a positive signal for both the bridge and the trade talks.",
    source: "Detroit News / Senate Appropriations Committee / Windsor-Detroit Bridge Authority / BNN Bloomberg",
    sourceUrl: "https://www.detroitnews.com/story/news/politics/2026/06/03/gordie-howe-bridge-update-customs-border-protection-markwayne-mullin/90388648007/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "AFFORDABILITY",
    tagColor: "#dc2626",
    headline: "USMCA/Tariff Uncertainty Threatens Affordable Vehicles — Global 2026 Sales Forecast Cut to 91.1M Units",
    summary: "A new white paper published June 3 by Autos Drive America — the trade association representing foreign-headquartered automakers operating in the U.S. — warns that high tariff costs and USMCA uncertainty could force automakers to cut back affordable vehicle offerings in the U.S. and Canadian markets. The paper, reported by Automotive News, argues that the combination of 25% tariffs on imported vehicles and parts, the uncertainty created by the 82%/50% content demand tabled in the Mexico City USMCA round, and rising input costs from the synthetic motor oil shortage and other supply chain pressures are creating a 'perfect storm' for vehicle affordability. Separately, the Foley Automotive Update for June 2026 reports that total global vehicle sales in 2026 are now forecast to decline 1.1% year-over-year to 91.1 million units — the first global sales decline since the COVID recovery year of 2021. The decline is driven by market challenges including the ongoing Iran-Israel conflict's impact on oil prices and supply chains, U.S. tariff uncertainty, and slowing EV adoption in key markets. The UAW Dauch strike at Three Rivers, Michigan — now in its fourth day with no talks scheduled — continues to threaten GM Silverado and Sierra production. GM has approximately 10 days of axle inventory remaining before truck production would be forced to halt. Dauch has not called to resume negotiations, according to UAW bargaining chairman Josh Jager.",
    whyItMatters: "The affordability squeeze has a direct and positive implication for Canadian independent shops: when new vehicles become less affordable, consumers hold their existing vehicles longer and spend more on maintenance and repair. The Foley forecast of 91.1 million global units — down 1.1% — means fewer new vehicles entering the Canadian fleet in 2026. Combined with the 3.9% year-over-year decline in Canadian new vehicle sales reported in April, the average age of the Canadian vehicle fleet is rising. Older vehicles require more service work: more oil changes, more brake jobs, more suspension work, more exhaust work. The affordability crisis that is bad news for OEMs and dealerships is good news for independent service shops. The specific action item: review your customer database and identify vehicles in the 8-12 year age range — these are the vehicles most likely to need significant maintenance work in the next 12-24 months. Proactively reach out to these customers with service reminders and inspection offers. The customers who cannot afford a new vehicle are your most valuable long-term service customers.",
    source: "Automotive News / Foley Automotive Update June 2026 / Reuters / WardsAuto",
    sourceUrl: "https://www.autonews.com/manufacturing/an-tariffs-usmca-vehicle-affordability-0603/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🤝",
    text: "LeBlanc declared Canada-U.S. trade talks 'unfrozen' after his June 3 meeting with USTR Greer in Washington. The official readout from Global Affairs Canada confirmed both sides discussed CUSMA priorities and the challenges of U.S. tariffs on autos and parts. 27 days to the July 1 deadline. Watch for Round 2 of U.S.-Mexico talks on June 16-17 — whether Canada is included or runs parallel will be the next key signal.",
    sourceUrl: "https://www.canada.ca/en/global-affairs/news/2026/06/minister-leblanc-and-chief-trade-negotiator-charette-meet-with-north-american-auto-industry-representatives-ahead-of-upcoming-cusma-joint-review.html",
  },
  {
    icon: "🌉",
    text: "DHS Secretary Mullin confirmed to the Senate that U.S. customs staff are 'staffed and ready to go' at the Gordie Howe Bridge. The only remaining obstacles: a contractor sign-off missed on May 1, and Trump's demand for trade concessions or toll revenue. Spring ends June 20 — the WDBA still says a spring opening is the target. The bridge could become part of a broader Canada-U.S. trade package.",
    sourceUrl: "https://www.detroitnews.com/story/news/politics/2026/06/03/gordie-howe-bridge-update-customs-border-protection-markwayne-mullin/90388648007/",
  },
  {
    icon: "🔧",
    text: "UAW Dauch strike Day 4 — no talks scheduled. GM has approximately 10 days of Silverado/Sierra axle inventory. Nexteer Automotive tentative agreement must still be ratified by UAW Local 699. If ratification fails, GM faces simultaneous axle and steering gear disruptions. Call your GM truck customers this week to book upcoming maintenance before any parts allocation pressure develops.",
    sourceUrl: "https://www.reuters.com/legal/litigation/uaw-strike-against-gm-axle-supplier-continues-without-talks-union-official-says-2026-06-02/",
  },
  {
    icon: "🛢️",
    text: "Synthetic motor oil shortage update: Group III base oil prices are up 10-35% and availability is tightening. Shell Pearl GTL (world's largest Group III producer) remains offline for 12+ months. ILMA projects consumer-visible shortages by early July lasting until mid-2027. This is the last realistic week to place a supplemental oil inventory order before retail-level shortages begin. Act now.",
    sourceUrl: "https://www.lubesngreases.com/bor-americas/weekly-americas-base-oil-price-report-74/",
  },
];

const tipOfTheDay = {
  title: "The Talks Are Unfrozen — Here Is How to Read the Next 27 Days for Your Parts Pricing",
  text: "LeBlanc's 'unfrozen' declaration is the best news for Canadian shop owners in months — but it is not a deal. Here is how to read the next 27 days: The most important date is June 16-17, when the U.S. and Mexico hold Round 2 of their CUSMA negotiations in Washington. If Canada is included in or runs parallel to that round, the risk of a July 1 withdrawal trigger drops to near zero. If Canada is excluded again, the July 1 deadline becomes critical. The 82%/50% content proposal — which would exclude Canadian parts from vehicle content calculations — is the specific threat to your parts supply chain. Until LeBlanc publicly confirms that proposal is off the table, assume it is still live and plan accordingly: audit your top 20 parts SKUs by volume, identify which are U.S.-origin vs. Canadian-origin vs. offshore, and begin building relationships with alternative suppliers now. The synthetic motor oil shortage is a separate and more immediate threat — place your supplemental oil order this week regardless of how CUSMA talks develop.",
};

const quoteOfTheDay = {
  text: "Consider them unfrozen.",
  author: "Dominic LeBlanc",
  title: "Canadian Trade Minister, on Canada-U.S. trade talks — Washington, June 3, 2026",
};

const rideOfTheDay = {
  name: "1969 AMC AMX 390 — The Rebel's Muscle Car, Built to Beat the Big Three",
  description: "The 1969 AMC AMX 390 is the most underrated muscle car of the classic era — a two-seat, short-wheelbase pony car from the smallest of the American automakers, built with one purpose: to embarrass Chevrolet, Ford, and Chrysler on the street and the drag strip. The AMX was AMC's answer to the Mustang fastback and the Camaro SS, but it was lighter, shorter, and in 390 form, more powerful per pound than almost anything Detroit offered. The 390 cubic inch V8 — rated at 315 horsepower but widely understood to produce closer to 340 — was paired with a four-speed manual and a limited-slip differential in the Go Package, which also added front disc brakes, heavy-duty suspension, and E70-14 redline tires. AMC built only 8,293 AMX 390s in 1969, making it one of the rarest muscle cars of the era. In Big Bad Orange — one of three 'Big Bad' colours introduced for 1969 alongside Big Bad Blue and Big Bad Green — the AMX is one of the most visually arresting cars ever built by an American manufacturer. Craig Breedlove set 106 speed records in a stock AMX at Bonneville Salt Flats in 1968, and AMC ran full-page ads in every major automotive magazine with the headline: 'The only American car that can beat a Corvette.' On a Wednesday morning when Canada-U.S. trade talks have just been unfrozen and the Gordie Howe Bridge sits ready to open, the AMX 390 is a reminder that sometimes the underdog wins — if it is willing to fight.",
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
      className={`transition-all duration-700 ${
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
                {["TRADE", "BRIDGE", "SUPPLY", "TARIFFS"].map((tag) => (
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
              alt="Canadian Trade Minister LeBlanc meets USTR Greer in Washington — talks declared unfrozen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">27 Days to Deadline</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                LeBlanc: "Consider Them Unfrozen" — First Formal Canada-U.S. Trade Meeting Produces Positive Signal
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
