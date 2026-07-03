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

const BRIEFING_NUMBER = 57;
const BRIEFING_DATE = "July 3, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jaoQtMrmUoDDFjQn.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rjgPuZuQkhXuZPSs.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CYskGbvIULcktsrG.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EZCMKLnOuvjtueYv.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ECheIEjDjBqnBfiD.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "UNIFOR / FORD / DAY 12 / 7 DAYS TO DEADLINE",
    tagColor: "#b91c1c",
    headline: "Unifor-Ford Bargaining Day 12 — 7 Days to July 10 Deadline — Windsor Assembly and Oakville Production Commitments the Core Demand — Pattern Sets Template for GM and Stellantis",
    summary: "Unifor's bargaining committee is back at the table with Ford Motor Company today — Day 12 of negotiations, with the July 10 strike deadline now 7 days away. The union is bargaining for more than 5,000 auto workers at Ford's Canadian operations: Windsor Assembly (Bronco Sport, Lincoln Corsair) and Oakville Assembly (Ford Super Duty trucks). Unifor president Lana Payne confirmed on July 2 that the union was 'at the table with Ford Motor Company today working to secure a tentative agreement for more than 5,000 auto members before the July 10 deadline.' The core of Unifor's demands is production security — explicit, contractual commitments from Ford to maintain and expand Canadian production in the context of the 25% auto tariff, the CUSMA sunset, and the broader North American trade uncertainty. Ford CEO Jim Farley has publicly stated he wants a 'level playing field' with Toyota and GM imports as CUSMA trade talks continue — a signal that Ford is under real competitive pressure from Japanese and Korean OEMs whose vehicles, built in the U.S., are not subject to the 25% Canadian auto tariff in the same way. The union is also seeking wage increases to offset inflation — Canada's CPI was 3.2% in May 2026 — and improvements to the pension and benefits package. The pattern in Detroit Three bargaining is for the lead company (Ford in 2026) to set the template that GM and Stellantis then follow. A tentative agreement, if reached, would be subject to ratification by Unifor members — a process that typically takes 5–7 days. The final push in Detroit Three bargaining typically happens in the last 3–4 days before the deadline. With 7 days remaining, the next 72–96 hours are the most critical. Watch for a framework announcement over the weekend.",
    whyItMatters: "The Unifor-Ford outcome sets the wage and benefits pattern for all Detroit Three Canadian operations in 2026. Here is what you need to know for your shop: First, if Unifor wins significant wage increases — which is likely given CPI at 3.2% and the union's leverage — it creates upward pressure on wages across the Ontario automotive ecosystem, including independent shops. If you are not already benchmarking your technician compensation against the local market, do it this weekend. Second, a work stoppage at Windsor Assembly would affect parts availability within days. The Bronco Sport and Lincoln Corsair share platforms and components with other Ford vehicles. If you service Ford vehicles, consider building a 30-day buffer of common Ford wear parts before July 10. Third, the production commitments Unifor extracts from Ford will signal how committed Ford is to Canadian manufacturing in the tariff era. Strong Windsor and Oakville commitments are a positive signal for the Canadian auto supply chain. Weak or hedged language signals a longer-term shift of production to the U.S. The outcome of these negotiations will be one of the most important data points for the Canadian auto industry in 2026.",
    source: "Unifor Canada / CBC News / Threads (CNBC) — July 2–3, 2026",
    sourceUrl: "https://refdesk.ca/blog/unifor-ford-detroit-three-auto-bargaining-july-10-2026-deadline-canadian-autoworkers-cusma-tariffs-guide",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "U.S. AUTO SALES / JUNE 2026 / +7.8% YOY / HEV SURGE",
    tagColor: "#1d4ed8",
    headline: "U.S. Auto Sales June 2026: Up 7.8% Year-Over-Year to 1.37 Million Units — HEV Demand Surges on High Gas Prices — SAAR at 16.1 Million — Average Transaction Price Holds at $50,000",
    summary: "U.S. new vehicle sales in June 2026 totaled approximately 1,366,093 units, up 7.8% year-over-year, according to preliminary figures compiled by MarkLines as of July 2. June had 25 selling days versus 24 in June 2025, which accounts for roughly 4% of the gain on a raw basis — but even on a daily selling rate basis, Cox Automotive estimates June sales increased 2.9% year-over-year. The seasonally adjusted annual rate (SAAR) finished near 16.1 million, roughly in line with March, April, and May — an unusual period of consistency given recent volatility and high energy prices. The standout trend in June was hybrid electric vehicle (HEV) demand. With U.S. gasoline prices elevated — averaging above $4.00/gallon nationally — consumers are gravitating toward HEVs as the practical middle ground between pure EVs and traditional ICE vehicles. Cox Automotive's mid-year review notes that the average new vehicle transaction price remains consistently at or around $50,000. The firm's research, developed in consultation with NIADA, found that 79% of independent dealership buyers are 'driven by necessity, not aspiration' — they are buying because they have to, not because they want to. This is the same dynamic driving repair-vs-replace decisions at the shop level. Citi raised its U.S. light vehicle sales forecast for 2026 following the June result. The second quarter totaled 4.2 million units. The first half of 2026 is tracking ahead of most pre-tariff forecasts, despite the 25% auto tariff, elevated vehicle prices, and economic headwinds. The resilience of U.S. auto demand is one of the more surprising data points of 2026.",
    whyItMatters: "The U.S. June sales number matters to Canadian shop owners for three reasons. First, strong U.S. sales mean OEMs are not cutting production — which means parts supply remains relatively stable. A collapsing U.S. market would trigger production cuts that would ripple through the supply chain and create parts shortages. That is not happening. Second, the HEV surge is the most important trend in the North American auto market right now. Hybrids are the fastest-growing segment, and they are coming to your service bays. If you are not already investing in hybrid service training and equipment, you are falling behind. The Honda CR-V dethroned the Ford F-150 and Toyota RAV4 as Canada's top-selling vehicle in June — supply shortages helped, but the CR-V's hybrid variant is a major driver of that result. Third, the 'necessity not aspiration' dynamic that Cox identifies for U.S. buyers is even more pronounced in Canada, where used vehicle values are declining and household debt is at record levels. Your customers are keeping their vehicles longer and spending more on maintenance and repair. That is a direct tailwind for your service business.",
    source: "MarkLines / Cox Automotive / Citi Research — July 2, 2026",
    sourceUrl: "https://www.coxautoinc.com/insights/cox-automotive-forecast-june-2026-u-s-auto-sales-forecast/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CHINA EVs / CANADA / CUSMA FLASHPOINT / 49,000 UNITS",
    tagColor: "#15803d",
    headline: "China's Carmakers Rush to Canada as a 'Practice Run' for U.S. Sales — 49,000 Chinese EVs Approved Annually at 6.1% Tariff — 20 Canadian Dealers in China for BYD/JLR-Chery Unveilings — U.S. Calls It a CUSMA Backdoor",
    summary: "Automotive News and Reuters reported on July 2 that China's automakers are treating Canada as a 'practice run' for eventual entry into the U.S. market. Canada approved imports of 49,000 Chinese electric vehicles annually at a preferential tariff rate of 6.1%, rising to 70,000 vehicles over five years — a deal struck by the Trudeau government in January 2026 that has become one of the three core U.S. grievances against Canada in the CUSMA review. Approximately 20 Canadian car dealers travelled to China for the unveiling of the Freelander 8 — a luxury SUV built by a joint venture between Jaguar Land Rover and Chery Automobile — signalling that Canadian dealer networks are actively courting Chinese brands. BYD, the world's largest EV manufacturer by volume, is also in discussions with Canadian dealers. The U.S. has cited Canada's China EV deal as evidence that Canada is allowing Chinese manufacturers to use Canada as a backdoor into the North American market, circumventing CUSMA's rules of origin, which were specifically designed to keep non-market economies from gaining preferential access to North American consumers. The U.S. imposes 100% tariffs on Chinese EVs. Canada's 6.1% tariff is, by comparison, essentially a welcome mat. The strategic logic for Chinese automakers is clear: establish brand recognition, dealer networks, and service infrastructure in Canada, then use that foothold to eventually enter the U.S. market if and when the tariff environment changes. For Canadian shop owners, the arrival of Chinese EVs in volume — BYD, Chery, Geely, and others — represents both an opportunity and a challenge.",
    whyItMatters: "The China EV story has two dimensions for your shop. The first is the CUSMA dimension: Canada's China EV deal is one of the three specific grievances the U.S. has against Canada in the CUSMA review. It is a direct reason why Canada is 'in a different position' than Mexico in the negotiations. If Canada does not address this — and it is politically very difficult to reverse a signed trade deal with China — it gives the U.S. justification to maintain or increase tariffs on Canadian goods. The second dimension is the service opportunity. Chinese EVs are coming to Canada in volume. BYD, Chery, and Geely vehicles are sophisticated, well-built machines — but they are new brands in the Canadian market, with limited dealer service infrastructure. Independent shops that invest in EV service training and equipment now will be positioned to capture Chinese EV service work as the fleet grows. The 49,000 units per year approved under the Canada-China EV deal will be on Ontario roads within 18 months. Some of those vehicles will need service. The shops that are ready will get the work.",
    source: "Automotive News / Reuters — July 2, 2026",
    sourceUrl: "https://europe.autonews.com/canada/anc-china-sees-canada-practice-run-reteurs/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇺🇸",
    text: "U.S. Independence Day tomorrow — July 4. U.S. government offices closed, markets closed, no new tariff announcements expected. The USTR Section 301 forced-labour tariff hearings resume Monday, July 7 — 4 days from today. Canada is a named target for 10–12.5% tariffs replacing the expiring Section 122 tariff on July 24.",
    sourceUrl: "https://apcoworldwide.com/blog/qa-july-is-a-big-month-for-trade-whats-coming-next/",
  },
  {
    icon: "🚗",
    text: "Honda CR-V dethroned the Ford F-150 and Toyota RAV4 as Canada's top-selling vehicle in June 2026, according to Automotive News. Supply shortages at Toyota (model changeover) and Ford helped, but the CR-V's hybrid variant is a major driver. The CR-V Hybrid is now the default choice for Canadian buyers in the compact SUV segment. If you service Honda vehicles, expect more hybrid work.",
    sourceUrl: "https://europe.autonews.com/canada/anc-china-sees-canada-practice-run-reteurs/",
  },
  {
    icon: "📉",
    text: "Canadian wholesale vehicle values declined 0.35% in the week ending June 27, per Canadian Black Book — the decline has been 'slightly steeper' in recent weeks. Used vehicle prices remain elevated vs. 2024 but are softening. Auto loans are lengthening — 84-month terms are becoming common, raising negative equity concerns for dealers and lenders. Longer loans = customers keeping vehicles longer = more service work for shops.",
    sourceUrl: "https://www.autoremarketing.com/arcanada/",
  },
  {
    icon: "🔧",
    text: "Ford recalled 741,195 SUVs and pickups in the U.S. over a rollaway risk — a parking brake issue affecting certain F-150, Expedition, and Navigator models. Canadian recall details pending from Transport Canada. If you service Ford trucks, watch for the Transport Canada recall notice. Recall work is a direct revenue opportunity for shops authorized to perform warranty and recall repairs.",
    sourceUrl: "https://www.marklines.com/en/news/347074",
  },
];

const tipOfTheDay = {
  title: "Benchmark Your Technician Wages This Weekend",
  text: "With Unifor-Ford bargaining entering its final week and a likely wage increase coming for 5,000+ Ontario auto workers, now is the time to benchmark your technician compensation against the local market. Pull your current wage rates, compare them to the Unifor pattern (likely 3–4% in Year 1), and decide now whether you will proactively adjust or wait for technicians to ask. Proactive adjustments cost less in goodwill than reactive ones.",
};

const quoteOfTheDay = {
  text: "We want a level playing field. Toyota and GM are building vehicles in the United States. We're building in Canada. The tariff environment has to be addressed in these negotiations.",
  author: "Ford CEO Jim Farley",
  title: "On CUSMA trade talks and Canadian production — July 2, 2026",
};

const rideOfTheDay = {
  name: "1969 Dodge Charger R/T — Hemi Orange, Black R/T Stripes, Black Vinyl Roof, Ontario-Plated",
  description: "On the eve of U.S. Independence Day, the Ride of the Day is the most American car ever built in a Canadian shop owner's driveway: the 1969 Dodge Charger R/T. The '69 Charger is the car that defined an era. The fastback roofline, the hidden headlights, the full-width taillights — it was a car designed to look like it was moving at 120 miles an hour standing still. The R/T (Road and Track) package meant the 440 Magnum V8 as standard equipment — 375 horsepower, 480 lb-ft of torque, a four-barrel carburetor, and a sound that you felt in your chest before you heard it with your ears. Hemi Orange with black stripes and a black vinyl roof is the definitive spec. The 440 Magnum was the practical choice — the 426 Hemi was the legendary choice, but the 440 was the one you could actually drive every day without rebuilding the carburetors every 3,000 miles. Ontario-plated '69 Charger R/Ts with documented history trade for $90,000–$140,000 at auction. The ones with the Hemi go for more. Happy Independence Day to our American friends — and happy Friday to every shop owner who made it through another week in the tariff era.",
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
                {["UNIFOR-FORD DAY 12", "U.S. SALES +7.8%", "CHINA EVs IN CANADA", "CHARGER R/T"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Eve of U.S. Independence Day</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Unifor-Ford Day 12 — U.S. Auto Sales +7.8% — China EVs in Canada — Baywash Daily Briefing Edition No. 57"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 57 — Friday, July 3, 2026 — Eve of U.S. Independence Day</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Unifor-Ford Day 12 — 7 Days to Deadline — U.S. Sales +7.8% — China EVs Rush to Canada
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — Charger R/T</span>
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
