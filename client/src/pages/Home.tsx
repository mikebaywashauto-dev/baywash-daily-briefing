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

const BRIEFING_NUMBER = 65;
const BRIEFING_DATE = "July 11, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ufGgYOqVkDUTzwbx.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/HQwgQQmDdHRjdyyi.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/qOMoPlXZDECmgJpA.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/hcZaspLLpfMZIshB.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EVUhBvIgWFxqYEGY.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "GORDIE HOWE BRIDGE / OPENING JULY 27 / WINDSOR-DETROIT CORRIDOR",
    tagColor: "#15803d",
    headline: "BREAKING: Gordie Howe International Bridge to Open July 27 — Canada and Michigan Announce Agreement — Trump Administration Gives Support — 16 Days Away — $350M/Day Windsor-Detroit Corridor Gains Redundancy",
    summary: "After months of delay, Canada and Michigan announced on Friday, July 10 that the Gordie Howe International Bridge will open to traffic on July 27, 2026. The announcement was made jointly by Canada's Housing and Infrastructure Minister Gregor Robertson and Michigan Governor Gretchen Whitmer, with the Canadian government stating the agreement was reached 'with the support of the United States Government.' The bridge — a six-lane, cable-stayed structure spanning the Detroit River between Windsor, Ontario and Detroit, Michigan — has been complete since April 2026 but was blocked from opening by the Trump administration in February, when President Trump demanded U.S. ownership of the bridge. The original agreement gave Canada and the U.S. a 50/50 split of toll revenue after Canada recouped its $6.4 billion construction investment. The resolution terms include toll governance and transparency measures, a 15-year economic development fund tied to a portion of bridge profits, and U.S. concurrence rights on non-market toll rate adjustments. Michigan GOP Senate candidate Mike Rogers, citing Commerce Secretary Howard Lutnick, said the U.S. will receive 'half the revenue' and 'joint determination of what the tolls are.' Rogers also said Lutnick told him: 'they will guarantee and ensure that we're not pouring Chinese cars over that bridge.' Governor Whitmer called the bridge 'a great deal for our state' and said it 'will speed up auto production, lower costs, ease traffic, strengthen agriculture.' The bridge features a main span of 853 metres — the longest cable-stayed span in North America — and extends approximately 2.5 kilometres total. Modern ports of entry on both sides include advanced screening and border management technology. The Windsor-Detroit corridor handles hundreds of millions of dollars in trade daily and is the busiest international land border crossing in North America.",
    whyItMatters: "The Gordie Howe Bridge opening on July 27 is the most significant supply chain development for Canadian automotive shops since the CUSMA sunset clause was activated on July 1. Here is why it matters directly to your shop. The Windsor-Detroit corridor moves approximately $350 million in trade per day. The Ambassador Bridge — owned by the Moroun family — currently handles the vast majority of that traffic. It is a single point of failure. When the Ambassador Bridge was briefly closed in 2022 during the Freedom Convoy protests, auto plants across Ontario and Michigan began shutting down within 48 hours. The Gordie Howe Bridge provides redundancy. If the Ambassador Bridge is disrupted — by protest, accident, mechanical failure, or political action — the Gordie Howe Bridge is the backup. For shops that depend on same-day or next-day parts delivery from U.S. distributors, that redundancy is worth real money. The bridge also matters for the CUSMA negotiation. Canada's infrastructure investment demonstrates commitment to North American trade integration. The U.S. concurrence rights on toll rates and the 15-year economic development fund are concessions Canada made to get the bridge open — but the bridge being open is worth those concessions. Watch for the July 27 opening ceremony. It will be a political moment for both Carney and Whitmer. It may also be the first positive Canada-U.S. trade story in months.",
    source: "Canada.ca / Politico / Detroit News / Bloomberg — July 10, 2026",
    sourceUrl: "https://www.canada.ca/en/housing-infrastructure-communities/news/2026/07/the-gordie-howe-international-bridge-will-open-on-july-27th-strengthening-trade-connectivity-and-economic-development.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "UNIFOR / FORD / NEGOTIATIONS ONGOING / DAY 19",
    tagColor: "#b91c1c",
    headline: "Unifor-Ford Negotiations Ongoing Past July 10 Deadline — Day 19 — No Tentative Agreement as of Saturday Morning — Windsor Assembly and Oakville Production Security Still Unresolved — Strike Notice Possible at Any Time",
    summary: "Unifor confirmed Saturday morning that negotiations with Ford Motor Company of Canada are still ongoing, with no tentative agreement reached as of the July 10 deadline. Unifor's official bargaining update posted at approximately 2:00 AM Saturday reads: 'Talks between your Unifor Master Bargaining Committee and Ford are ongoing.' The autotalks.uniforautohub.ca website, Unifor's official bargaining update portal, shows: 'Negotiations ongoing with Ford Motor Company.' The July 10 deadline was Unifor's internal target, not a legal strike deadline. Unifor can issue a 48-hour strike notice at any time now that the deadline has passed. A 48-hour notice would put Windsor Assembly (Bronco Sport, Lincoln Corsair) and Oakville Assembly (Super Duty) at risk of going dark as early as Monday, July 13. The core unresolved issues remain production volume commitments for Windsor and Oakville, wage increases that keep pace with inflation, and job security provisions that protect Canadian workers from production shifts to U.S. plants. Ford has said 'stability and flexibility are key' — language Unifor interprets as Ford wanting contractual rights to shift production between Canadian and U.S. plants depending on tariff conditions. Unifor wants the opposite: contractual guarantees that Canadian production volumes will be maintained regardless of tariff outcomes. The auto sector has lost nearly 6,500 total jobs since February 2025. The pattern agreement with Ford will set the template for GM and Stellantis negotiations, which follow immediately after. Unifor National President Lana Payne described the week of negotiations as 'challenging and frustrating' while maintaining the union's commitment to reaching an agreement.",
    whyItMatters: "The Unifor-Ford situation has moved from 'deadline approaching' to 'deadline passed.' Here is the updated decision tree for your shop. The July 10 deadline has passed with no deal. Unifor can issue a 48-hour strike notice at any time. If a strike notice is issued today (Saturday, July 11), Windsor and Oakville could go dark by Monday, July 13. If a strike notice is issued Monday, plants could go dark by Wednesday, July 15. The parts shortage will not be immediate — dealers and distributors hold 2–4 weeks of inventory. But by week 3 of a strike, high-turnover Ford parts (oil filters, brake pads, air filters, sensors, belts, wiper blades) will be on allocation. Tier 1 and Tier 2 suppliers who feed Windsor and Oakville will begin layoffs within 72 hours of a strike. If you have not already built a 30-day Ford parts buffer, this weekend is your last realistic window to do so before potential allocation begins. The cost of holding extra inventory for 30 days is far lower than the cost of turning away Ford service customers during a shortage. Monitor Unifor's X (Twitter) account @UniforTheUnion and the autotalks.uniforautohub.ca portal for real-time updates. A tentative agreement will be posted within minutes of being reached.",
    source: "Unifor Canada / autotalks.uniforautohub.ca — July 11, 2026",
    sourceUrl: "https://autotalks.uniforautohub.ca/negotiations_ongoing_with_ford_motor_company",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "H1 2026 REVIEW / TARIFFS / EV SURGE / JOB LOSSES",
    tagColor: "#1d4ed8",
    headline: "Canadian Automotive Industry H1 2026 Report Card: EV Sales +28% YoY — 25% of New Vehicles Now Electric — H1 Sales Down 2.6% — 6,500 Jobs Lost Since February 2025 — CUSMA Uncertainty Dominates",
    summary: "Automotive News Canada published its H1 2026 half-year review on July 10, providing the most comprehensive scorecard yet of how Canada's auto industry has performed under six months of tariff pressure, CUSMA uncertainty, and accelerating EV adoption. The headline numbers tell a story of two industries running in parallel. On the demand side, EV sales surged 28% year-over-year in H1 2026, with electric vehicles now accounting for 25% of all new vehicle sales in Canada — three years ahead of the federal government's original target. Honda CR-V dethroned the Ford F-150 and Toyota RAV4 as Canada's top-selling vehicle in June, driven by its hybrid powertrain. On the supply and employment side, the picture is darker. H1 2026 total Canadian auto sales are down 2.6% versus H1 2025, with the tariff impact most visible in the daily selling rate (adjusted for calendar days). The auto sector has lost nearly 6,500 jobs since February 2025, when the first round of U.S. tariffs took effect. The top H1 themes identified by Automotive News Canada are: U.S. trade and tariffs, CUSMA annual review process, Unifor contract talks with the Detroit Three, the Gordie Howe Bridge saga, humanoid robots entering assembly plants, and Trevor Longley joining Stellantis Canada. In January 2026, Canada agreed to remove its 100% tariff on a quota of 49,000 electrified vehicles from China annually at a 6.1% tariff rate, replacing the retaliatory tariff imposed in 2024. BYD, Chery, Geely (Lotus), and other Chinese manufacturers are preparing Canadian dealer network launches. Volkswagen Group announced plans to cut its model lineup by 50% and reduce production capacity from 10 million to 9 million vehicles globally.",
    whyItMatters: "The H1 2026 report card has three direct implications for your shop. First, the EV surge is real and accelerating. One in four new vehicles sold in Canada is now electric. Those vehicles will need service. The BYD Blade Battery (LFP chemistry), the Honda CR-V hybrid system, and the GM Ultium platform are all incompatible with each other and with legacy ICE service procedures. Shops that invest in EV-specific training now will capture out-of-warranty service work from day one. Shops that wait will be locked out of 25% of the new vehicle parc within 3–5 years. Second, the H1 sales decline of 2.6% means fewer new vehicles on the road and more Canadians keeping their existing vehicles longer. That is a direct tailwind for service revenue. The average age of a vehicle in Canada is now 12.1 years — the highest on record. Older vehicles need more service. Third, the 6,500 job losses in the auto sector are a leading indicator of consumer confidence in auto-adjacent communities. Windsor, Oshawa, Brampton, Cambridge — these are your customers. When auto sector employment falls, discretionary spending on vehicle maintenance falls with it. Watch for this to show up in your service ticket averages over the next 90 days.",
    source: "Automotive News Canada / DesRosiers Automotive Consultants — July 10, 2026",
    sourceUrl: "https://canada.autonews.com/retail/anc-half-year-review/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏦",
    text: "Bank of Canada rate decision: Wednesday, July 15 — 4 days away. Current rate: 2.25% (held for 5th consecutive time). Prime rate: 4.45%. Expert consensus: hold at 2.25%. NerdWallet Canada: 'opposing nature of Canada's current economic maladies explains why the Bank's likely to continue holding.' GDP grew 0.5% in April. For your shop: auto loan rates tied to prime — a hold means customer financing costs stay flat through August. A cut would be a tailwind for vehicle purchases and shop financing.",
    sourceUrl: "https://dailyhive.com/vancouver/bank-of-canada-rate-july-2026",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opening ceremony: July 27, 2026 — 16 days away. The bridge will be the longest cable-stayed span in North America at 853 metres. Six lanes. Modern ports of entry with advanced screening. The Windsor-Detroit corridor handles $350M/day in trade. The Ambassador Bridge (Moroun family) is the current primary crossing — Gordie Howe provides the redundancy the corridor has needed since 2022.",
    sourceUrl: "https://www.canada.ca/en/housing-infrastructure-communities/news/2026/07/the-gordie-howe-international-bridge-will-open-on-july-27th-strengthening-trade-connectivity-and-economic-development.html",
  },
  {
    icon: "📅",
    text: "Section 122 expiry countdown: 13 days (July 24). Section 301 final determination expected by July 21–23. CUSMA-compliant goods exemption: demanded by 1,500+ submissions — decision pending. Ask your parts supplier about CUSMA compliance status this weekend. The window to adjust your parts sourcing before the deadline is closing. Non-compliant parts with Chinese content (batteries, semiconductors, sensors) are the most exposed.",
    sourceUrl: "https://rsmcanada.com/insights/services/business-tax-insights/canadian-businesses-review-trade-strategies-cusma-talks.html",
  },
  {
    icon: "🇨🇳",
    text: "BYD Canada dealer network: 20 dealerships planned within 12 months. Chery and Geely (Lotus) also preparing launches. Canada agreed to allow 49,000 Chinese EVs annually at 6.1% tariff. Chinese EVs are coming to Ontario roads. BYD Blade Battery (LFP chemistry) is incompatible with any existing North American EV platform. Train on BYD now — the out-of-warranty service work starts arriving in 2027.",
    sourceUrl: "https://asia.nikkei.com/spotlight/comment/byd-spots-north-america-foothold-amid-us-canada-tariff-discord",
  },
];

const tipOfTheDay = {
  title: "Weekend Action: Build Your Ford Parts Buffer Before Monday",
  text: "The Unifor-Ford deadline passed on July 10 with no deal. Negotiations are ongoing. Unifor can issue a 48-hour strike notice at any time. If a notice is issued today, Windsor and Oakville could go dark by Monday, July 13. This weekend is your last realistic window to build a 30-day Ford parts buffer before potential allocation begins. Focus on your highest-turnover Ford parts: oil filters, brake pads, air filters, oxygen sensors, belts, wiper blades, and cabin air filters. Call your distributor today. The cost of holding 30 days of extra inventory is far lower than the cost of turning away Ford service customers during a shortage.",
};

const quoteOfTheDay = {
  text: "This bridge is a testament to the enduring partnership between Michigan and Canada and what we can get done when we think big and bet on our shared future together.",
  author: "Governor Gretchen Whitmer",
  title: "State of Michigan — Gordie Howe Bridge Opening Announcement, July 10, 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth Road Runner — Lemon Twist Yellow, 440+6 V8, 390 hp, Ontario-Plated",
  description: "The Road Runner was Plymouth's answer to a simple question: what if you took the cheapest, lightest B-body in the lineup and dropped in the biggest engine available? The result was the most honest muscle car ever built. No fake wood trim. No bucket seats with heating elements. Just a 440 cubic inch V8 with three two-barrel Holley carburetors — the 440+6, or Six Pack — rated at 390 horsepower from the factory and closer to 450 in reality. Lemon Twist Yellow is a 1970-only Plymouth colour — a vivid, almost fluorescent yellow that looks like it was mixed by someone who had just discovered the colour wheel. The Road Runner cartoon bird badge on the door is the only decoration. Ontario-plated, because the workers at Windsor Assembly and Oakville Assembly drove cars like this. They built Bronco Sports and Super Duties and went home to Mopar muscle. The Road Runner was the working man's muscle car. No frills. Maximum performance. Today, those workers are waiting for a deal. The Road Runner doesn't wait. Beep beep. Numbers-matching 440+6 Road Runner in Lemon Twist Yellow: $80,000–$140,000 at auction.",
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
                {["GORDIE HOWE BRIDGE JULY 27", "UNIFOR-FORD ONGOING", "H1 2026 REPORT CARD", "'70 ROAD RUNNER"].map((tag) => (
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
              alt="Gordie Howe Bridge Opening July 27 — Unifor-Ford Negotiations Ongoing — Baywash Daily Briefing Edition No. 65"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#15803d] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 65 — Saturday, July 11, 2026</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Gordie Howe Bridge Opens July 27 — Unifor-Ford Negotiations Ongoing Past Deadline — H1 2026 Canadian Auto Report Card
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Plymouth Road Runner</span>
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
