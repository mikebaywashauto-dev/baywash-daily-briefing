/**
 * BAYWASH DAILY BRIEFING — Home.tsx
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 27;
const BRIEFING_DATE = "June 3, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/tgdErEttDABHkOeI.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/kXzXzOmxruBKQoiC.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/htBavDhxvwdZUeSZ.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dRCfJqrvVMwmUrEY.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XDEcUHBXeoWtJQrQ.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TRADE POLICY",
    tagColor: "#e05a1a",
    headline: "Canada Formally Requests CUSMA Renewal — LeBlanc Heads to Washington Today to Meet Greer",
    summary: "Canada made its most significant diplomatic move in the CUSMA standoff on June 2, sending a formal letter to the United States and Mexico calling for renewal of the continental free trade agreement ahead of the July 1 review deadline. Trade Minister Dominic LeBlanc is heading to Washington on Tuesday — today — to meet with U.S. Trade Representative Jamieson Greer in what will be the first formal bilateral trade meeting between Canada and the United States since the tariff war began in earnest. The letter, confirmed by CBC's The National and BNN Bloomberg, formally puts Canada on record as seeking a 16-year extension of CUSMA — the same outcome Canada has been pushing for since the review process began. LeBlanc's Washington meeting comes as the U.S. and Mexico have already completed Round 1 of their bilateral CUSMA negotiations (Mexico City, May 28-29) and have Round 2 scheduled for June 16-17 in Washington. Canada has been conspicuously absent from the formal negotiating schedule. The timing of the LeBlanc-Greer meeting — 28 days before the July 1 deadline — is the narrowest window in which a formal Canada-U.S. negotiating track could realistically be established before the deadline. Former U.S. Ambassador to Canada Gordon Hillman told CTV on May 31 that he believes CUSMA will survive but will be 'modified' — and that the U.S. is unlikely to trigger the six-month withdrawal clause on July 1, preferring instead to use the threat of withdrawal as ongoing leverage.",
    whyItMatters: "The LeBlanc-Greer meeting today is the most important Canada-U.S. trade event since Carney's New York speech on May 28. Watch for two things: First, whether Greer agrees to establish a formal bilateral negotiating track with Canada — if he does, the risk of a July 1 withdrawal trigger drops significantly. Second, whether Greer raises the China EV deal as a precondition for progress — Trump has publicly criticized Canada's decision to allow 49,000 Chinese-built EVs into Canada at a 6.1% tariff, and the U.S. has cited the China deal as a reason for its cooler tone toward Ottawa. For Canadian shop owners, the outcome of today's meeting will determine whether the next 28 days are a managed transition to a modified CUSMA or a sprint toward an existential trade crisis. The 82%/50% content proposal — which would exclude Canadian parts from vehicle content calculations entirely — remains on the table from the Mexico City round. If LeBlanc cannot get Greer to take that proposal off the table, Canadian parts suppliers face a structural disadvantage in the post-CUSMA world regardless of whether the agreement is renewed.",
    source: "CBC The National / BNN Bloomberg / Automotive News Canada / CTV News",
    sourceUrl: "https://canada.autonews.com/canada/anc-canada-calls-for-usmca-renewal/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SUPPLY CHAIN",
    tagColor: "#dc2626",
    headline: "UAW Dauch Strike Day 3 — No Talks Scheduled, GM's Silverado/Sierra Clock Ticking Toward Production Halt",
    summary: "The UAW strike at Dauch Corporation (formerly American Axle) in Three Rivers, Michigan entered its third day on Tuesday with no negotiations scheduled, according to a UAW official cited by Reuters. The strike by nearly 1,000 UAW Local 2093 members is halting production of drive axles for the Chevrolet Silverado and GMC Sierra — GM's top-selling vehicles, accounting for approximately one-third of the company's U.S. sales. GM has approximately two weeks of axle inventory on hand before truck production would be forced to halt, according to sources cited by Reuters. The dispute is rooted in 18 years of wage stagnation: workers who earned up to $29 per hour in 2008 — before making major concessions during the Great Recession — now top out at $22 per hour, which in inflation-adjusted terms equals $14.19 in 2008 dollars. The UAW is also seeking to reverse tiered wage structures and restore defined-benefit pension contributions. Dauch has generated $2.9 billion in profits since 2022 while its CEO was paid $47.9 million over the same period, according to UAW data. A second front is developing: UAW Local 699 at Nexteer Automotive in Saginaw — which builds steering gear for GM and other OEMs — voted 86% to authorize a strike. A tentative agreement was reached June 1 but must be ratified by the membership. If the Nexteer agreement fails ratification, GM faces simultaneous axle and steering gear supply disruptions. The 2008 American Axle strike lasted 89 days and cost GM nearly $3 billion. WardsAuto notes that Dauch's own annual report, published in April, warned investors that the 2026 contract expiration could result in 'a work stoppage or disruption that could have a material adverse impact on our results of operations.'",
    whyItMatters: "With no talks scheduled as of Tuesday morning, the strike is tracking toward a production halt at GM's truck plants in approximately 11 days. The Silverado and Sierra are the most serviced vehicles in Canadian independent shops — oil changes, brakes, suspension, tires, and exhaust work on these trucks represent a disproportionate share of revenue for most Ontario and western Canadian shops. Here is the specific action plan: First, pull your list of Silverado and Sierra customers with upcoming scheduled maintenance in the next 60 days and call them this week to book appointments. Second, check your current inventory of common Silverado/Sierra wear items — brake pads, rotors, filters, belts, and fluids — and place a supplemental order with your distributor before any allocation pressure develops. Third, if the strike extends beyond two weeks and GM halts production, expect used Silverado/Sierra prices to rise, which means your customers will hold their trucks longer and need more service. The Nexteer situation is the wildcard: if the tentative agreement fails ratification, GM faces simultaneous axle and steering gear disruptions — a scenario that would halt production of virtually every GM truck and full-size SUV built in North America.",
    source: "Reuters / WardsAuto / CNBC / UAW Local 2093 / Crain's Detroit",
    sourceUrl: "https://www.wardsauto.com/news/uaw-strike-at-michigan-supplier-to-gm-seeks-amends-for-2008/821669/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "EV MARKET",
    tagColor: "#2563eb",
    headline: "Canada's China EV Deal: Tesla Is the Surprise Winner — 12% of the Quota Before Any Chinese Brand Has Moved",
    summary: "The most counterintuitive story in Canadian automotive trade this week: Tesla, the American EV maker whose CEO Elon Musk is closely aligned with President Trump, is the biggest beneficiary of Canada's controversial China EV import deal — and it got there before any Chinese brand had moved a single unit. According to data from Global Affairs Canada reported by Drive Tesla Canada and confirmed by Benzinga, over 2,910 Chinese-built EVs arrived in Canada in May under the new 6.1% tariff arrangement (reduced from the previous 100% surtax imposed in October 2024). Tesla accounts for more than 12% of those arrivals — approximately 350 units — because it manufactures the Model 3 at its Gigafactory Shanghai. The quota permits up to 49,000 Chinese-built EVs per year at the 6.1% most-favoured-nation tariff rate, with a potential expansion to over 70,000. BYD has applied for an import permit. Stellantis and China's Leapmotor are in active discussions about assembling Chinese EVs at the idle Brampton Assembly Plant — a proposal that has faced opposition from Ontario Premier Doug Ford but has not been ruled out by the federal government. Trump publicly criticized the Canada-China EV deal, calling it a threat to U.S. automakers. The APMA (Automotive Parts Manufacturers' Association of Canada) said the deal 'undercuts a key sector in this country's high tech manufacturing industry.' Meanwhile, Tesla Canada sales hit a 16-month high in May ahead of the first China-made Model 3 deliveries, driven partly by the 25% U.S. tariff on American-made vehicles pushing Canadian buyers toward Berlin-built Model Ys.",
    whyItMatters: "The China EV deal has three direct implications for Canadian shop owners. First, the arrival of Chinese-brand EVs in Canada — BYD, Leapmotor, and others — will create new service demand for shops that invest in EV training and tooling now. Chinese EVs are priced 20-40% below comparable North American models; if the quota expands to 70,000 units per year, they will represent a meaningful share of new vehicle sales within two to three years. Second, the Stellantis-Leapmotor Brampton assembly talks, if successful, would restart a plant that has been idle for 2.5 years — bringing 3,000 workers back and creating a new domestic EV supply chain in Ontario. Third, the political dimension: Trump's public criticism of the China deal is the most likely reason the LeBlanc-Greer meeting today will be difficult. The U.S. has cited the China deal as evidence that Canada is not a reliable partner in the effort to counter Chinese automotive manufacturing. If LeBlanc cannot address U.S. concerns about the China deal in today's meeting, the CUSMA negotiating track may remain stalled.",
    source: "Benzinga / Drive Tesla Canada / Global Affairs Canada / APMA / Unifor 584 Retirees",
    sourceUrl: "https://finance.yahoo.com/markets/stocks/articles/trump-criticized-canadas-china-ev-013112867.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🤝",
    text: "Trade Minister LeBlanc is in Washington today for the first formal bilateral Canada-U.S. trade meeting since the tariff war began. The meeting with USTR Greer is the most significant diplomatic event in Canada-U.S. automotive trade relations in months. Watch for any post-meeting statement about whether a formal CUSMA negotiating track has been established — that is the single most important signal for the July 1 deadline.",
    sourceUrl: "https://canada.autonews.com/canada/anc-canada-calls-for-usmca-renewal/",
  },
  {
    icon: "🔧",
    text: "The UAW Dauch strike enters Day 3 with no talks scheduled. GM has approximately 11 days of Silverado/Sierra axle inventory remaining. A second front is developing at Nexteer Automotive in Saginaw — a tentative agreement was reached June 1 but must be ratified. If Nexteer ratification fails, GM faces simultaneous axle and steering gear supply disruptions. Contact your GM truck customers this week.",
    sourceUrl: "https://www.wardsauto.com/news/uaw-strike-at-michigan-supplier-to-gm-seeks-amends-for-2008/821669/",
  },
  {
    icon: "🇨🇳",
    text: "Tesla has claimed 12% of Canada's China EV import quota before any Chinese brand has moved a unit. The 49,000-unit annual quota at 6.1% tariff (down from 100%) is already reshaping the Canadian EV market. BYD has applied for an import permit. Stellantis-Leapmotor Brampton assembly talks are ongoing. Chinese EVs are coming to Canada — the question is how fast and through which channels.",
    sourceUrl: "https://finance.yahoo.com/markets/stocks/articles/trump-criticized-canadas-china-ev-013112867.html",
  },
  {
    icon: "🛢️",
    text: "The synthetic motor oil shortage continues to deepen. Shell Pearl GTL (world's largest Group III producer) remains offline for 12+ months. ILMA projects supply crunch visible to consumers by early July, lasting until mid-2027. Prices are already up 10-35%. If you have not yet placed a supplemental oil inventory order, this week is the last realistic window before retail-level shortages begin.",
    sourceUrl: "https://www.autonews.com/newsletters/daily-5/an-daily-5-motor-oil-shortage-0529/",
  },
];

const tipOfTheDay = {
  title: "The LeBlanc-Greer Meeting Is Today — Here Is What to Watch and Why It Matters to Your Parts Pricing",
  text: "Trade Minister LeBlanc meets USTR Greer in Washington today. Here is what to watch and what it means for your shop: If Greer agrees to establish a formal bilateral negotiating track, the risk of a July 1 CUSMA withdrawal trigger drops significantly — and parts pricing pressure from tariff uncertainty will ease. If Greer raises the China EV deal as a precondition, negotiations will stall and the 25% tariff on U.S.-origin parts will remain in place indefinitely. The 82%/50% content proposal — which would exclude Canadian parts from vehicle content calculations — is the existential threat to your parts supply chain. Watch for any post-meeting statement that specifically addresses whether Canadian content will be included in the new content calculation formula. If it is not addressed, assume the worst-case scenario for parts sourcing costs and plan accordingly: audit your top 20 parts SKUs by volume, identify which are U.S.-origin vs. Canadian-origin vs. offshore, and begin building relationships with alternative suppliers now.",
};

const quoteOfTheDay = {
  text: "We're not asking to break the bank; we're demanding our fair share after all our sacrifices and years spent building this company back up.",
  author: "Jay Korf",
  title: "UAW Local 2093 Member, Dauch Corp. — Three Rivers, Michigan, June 2026",
};

const rideOfTheDay = {
  name: "1971 Dodge Demon 340 — The Bargain Muscle Car That Could Beat Almost Everything",
  description: "The 1971 Dodge Demon 340 is the most underrated muscle car of the classic era — a lightweight A-body Dodge Dart with the high-revving 340 cubic inch small-block V8, rated at 275 horsepower but widely understood to produce closer to 340 hp in real-world testing. Chrysler built the Demon as a budget alternative to the Challenger and Barracuda — it weighed 400 pounds less than the Challenger R/T and cost $500 less, which meant the 340 engine had less mass to move and more money left over for options. The result was a car that could run the quarter-mile in the high 14s stock and deep 13s with minimal modification. The Demon name caused controversy — the National Parent Teacher Association and the Reverend Billy Graham both publicly objected to a car named after a demon — which only made it more desirable to the youth market Dodge was targeting. Chrysler included a small devil pitchfork mascot on the fender and a 'Scat Pack' bumblebee stripe to lean into the controversy. Only 10,098 Demon 340s were built in 1971 before the model was renamed the Dart Sport in 1972 under pressure from religious groups. In Curious Yellow — the same High Impact colour available on the Challenger and Barracuda — the Demon 340 is one of the most visually striking cars of the muscle car era. On a Tuesday morning when Canadian trade policy hangs in the balance and a UAW strike threatens GM truck production, the Demon 340 is a reminder that the best tools are often the ones that do more with less.",
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
                {["TRADE", "LABOUR", "EV", "SUPPLY"].map((tag) => (
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
              alt="Canadian Trade Minister LeBlanc arriving at the U.S. Trade Representative's office in Washington"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">28 Days to Deadline</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                LeBlanc in Washington Today — First Formal Canada-U.S. Trade Meeting Since the Tariff War Began
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
