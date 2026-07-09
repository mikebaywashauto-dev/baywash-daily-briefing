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

const BRIEFING_NUMBER = 63;
const BRIEFING_DATE = "July 9, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SzyGCBuZvGrtJLal.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xPlfjqnogAwbbmEb.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VryDmkqImkwhqmaa.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/DJwxgsCxlsdbFdzN.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/DtSDthfGXpcBOxpL.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "UNIFOR / FORD / FINAL DAY / JULY 10 DEADLINE",
    tagColor: "#b91c1c",
    headline: "Unifor-Ford Day 18 — Final Day Before July 10 Deadline — No Tentative Agreement Yet — Windsor Assembly and Oakville Production Security Remain Unresolved — Strike Possible by July 12",
    summary: "The Unifor-Ford contract negotiations have reached their final day before the union's self-imposed July 10 deadline, with no tentative agreement announced as of Thursday morning. Unifor National President Lana Payne has described talks as 'challenging and frustrating' throughout the week, while maintaining the union's commitment to reaching a deal before the deadline. The two sides have been at the bargaining table since June 23, with approximately 5,000 workers at Ford Canada's two key Ontario plants — Windsor Assembly (Bronco Sport, Lincoln Corsair) and Oakville Assembly (Ford Super Duty) — awaiting the outcome. The July 10 deadline is Unifor's internal target, not a legal strike deadline. However, if no tentative agreement is reached by end of day Friday, Unifor can issue a 48-hour strike notice, which would put Windsor and Oakville at risk of going dark as early as Saturday, July 12. The core unresolved issues remain production volume commitments for Windsor and Oakville, wage increases that keep pace with inflation, and job security provisions that protect Canadian workers from production shifts to U.S. plants. Ford has said 'stability and flexibility are key' — language Unifor reads as Ford wanting contractual rights to shift production between Canadian and U.S. plants depending on tariff conditions. Unifor wants the opposite: contractual guarantees that Canadian production volumes will be maintained regardless of tariff outcomes. The pattern agreement with Ford will set the template for GM and Stellantis negotiations, which follow immediately after. Unifor has noted the auto sector has lost nearly 6,500 total jobs since February 2025. A deal today would be the best outcome for all parties.",
    whyItMatters: "Today is the final day. Here is the decision tree for your shop. If a tentative agreement is reached today (July 9): the Ford parts supply chain is secure. Draw down any buffer inventory you have built over the next 30 days. If no agreement by July 10 and Unifor issues strike notice: Windsor and Oakville could go dark by July 12. The parts shortage will not be immediate — dealers and distributors hold 2–4 weeks of inventory. But by week 3 of a strike, high-turnover Ford parts (oil filters, brake pads, air filters, sensors, belts) will be on allocation. Tier 1 and Tier 2 suppliers who feed Windsor and Oakville will begin layoffs within 72 hours of a strike. The practical action today: if you have not already built a 30-day Ford parts buffer, today is your last opportunity before the deadline passes. The cost of holding extra inventory for 30 days is far lower than the cost of turning away Ford service customers during a shortage. If a deal is reached today, you can return the buffer to your supplier within the return window. Watch Unifor's social media for any announcement — a tentative agreement will be posted on their channels within minutes of being reached.",
    source: "CBC / CTV / CP24 — July 7–9, 2026",
    sourceUrl: "https://www.cbc.ca/news/canada/windsor/auto-talks-critical-week-big-three-9.7260946",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TOYOTA / TACOMA / TEXAS / $3.6B / CANADA WARNING",
    tagColor: "#1d4ed8",
    headline: "Toyota Shifts Tacoma Production from Mexico to Texas — $3.6 Billion — 2,000 New U.S. Jobs — Toyota and Honda Had Both Warned Canada: Without CUSMA Renewal, Ontario Plants Are Next",
    summary: "Toyota Motor Corporation announced on July 6 that it is moving production of its popular Tacoma midsize pickup truck from its plant in Baja California, Mexico to an expanded facility in San Antonio, Texas. The $3.6 billion investment will build a second production line at the San Antonio plant, add approximately 2,000 new jobs by 2030, and double the plant's footprint to five million square feet — bringing Toyota's total investment at the San Antonio site to $8.3 billion since it broke ground there in 2003. The shift is a direct response to the 25 per cent U.S. tariff on vehicles manufactured in Mexico. U.S. Trade Representative Jamieson Greer's office posted on social media: 'Thanks to President Trump's tariff program, companies like Toyota are bringing jobs and production lines back to U.S. soil.' The announcement carries a direct warning for Canada. Both Toyota and Honda had previously told the Canadian government that without CUSMA renewal, they would shift production from their Ontario plants to the United States to avoid tariffs and secure long-term manufacturing stability. Toyota operates two Ontario plants: the Cambridge plant, which builds the Lexus RX and Toyota RAV4 and employs approximately 8,000 workers, and the Woodstock plant, which builds the Toyota Corolla and employs approximately 2,000 workers. Honda's Alliston plant, which recently started EV production, employs approximately 4,000 workers. The Tacoma shift is from Mexico — not Canada — but the message is explicit: the same tariff logic that moved Tacoma production from Mexico to Texas will move RAV4 and Corolla production from Ontario to the United States if CUSMA is not renewed on terms acceptable to the automakers.",
    whyItMatters: "The Toyota Tacoma announcement is the clearest signal yet of what CUSMA failure means for Ontario's auto industry. Toyota moved Tacoma production because the 25% tariff on Mexican vehicles made Mexican production uneconomic. The same tariff applies to Canadian vehicles. The only reason Toyota Cambridge and Toyota Woodstock are still building RAV4s and Corollas in Ontario is because those vehicles currently qualify for CUSMA's tariff-free treatment. If CUSMA is terminated or renegotiated on terms that exclude Canadian content, the economic logic is identical: move production to Texas, Kentucky, or Indiana. For your shop: the Toyota Cambridge and Woodstock plants are anchor employers for the Waterloo Region. Their supply chains feed dozens of Tier 1 and Tier 2 parts suppliers across Ontario. A production shift would not just eliminate plant jobs — it would ripple through the regional parts supply chain and reduce the number of Toyota and Lexus vehicles on Ontario roads that need service. The Peterson Institute for International Economics (PIIE) published a study yesterday showing that Canada and Mexico supply 56 per cent of all U.S. auto parts. Ending CUSMA and imposing 15 per cent tariffs would raise U.S. auto prices by 2.7 per cent. That is Canada's leverage — but it is leverage that expires if automakers move production before a deal is reached.",
    source: "Bloomberg / Conservative Treehouse / PIIE — July 6–8, 2026",
    sourceUrl: "https://theconservativetreehouse.com/blog/2026/07/06/toyota-positions-shifts-truck-plant-from-mexico-to-texas/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "PIIE / CUSMA / AUTO PARTS / 56% / U.S. PRICES",
    tagColor: "#15803d",
    headline: "Peterson Institute: Canada and Mexico Supply 56% of U.S. Auto Parts — Ending CUSMA Would Raise U.S. Auto Prices 2.7% — This Is Canada's Leverage at the Negotiating Table",
    summary: "The Peterson Institute for International Economics (PIIE) published a major study on July 8 quantifying what the termination of CUSMA would mean for U.S. consumers. The study, authored by senior research fellow Gary Clyde Hufbauer and intern Zachary Resneck, found that ending CUSMA and imposing 15 per cent tariffs on goods from Canada and Mexico would raise U.S. consumer prices by 0.27 per cent overall — and by 2.7 per cent specifically in the auto sector. The numbers behind the finding are striking: Canada and Mexico supply 56 per cent of all U.S. auto parts imports (HS code 8708), 95.7 per cent of U.S. goods transport motor vehicles, and 26.9 per cent of all U.S. goods imports. In 2025, $310 billion in industrial intermediate goods were imported from Canada and Mexico, accounting for 22 per cent of all U.S. industrial intermediate imports. The study notes that 88.2 per cent of Mexican and Canadian imports for consumer purchase are now CUSMA-compliant — up from just 40 per cent in early 2025 — as companies scrambled to qualify for tariff-free treatment. The 92 per cent tariff pass-through rate to consumers (documented by the Federal Reserve Bank of New York) means that higher tariffs translate almost directly into higher prices at the dealership. The PIIE study is the strongest academic argument for why the United States should not terminate CUSMA — and it is the clearest statement of Canada's negotiating leverage. President Trump has mentioned the possibility of imposing a global 15 per cent tariff on all imports, which would require congressional approval unlikely before the November 2026 midterm elections.",
    whyItMatters: "The PIIE study matters to your shop in two ways. First, it tells you that the U.S. auto industry is more dependent on Canadian parts than most Americans realize. A 2.7 per cent price increase on U.S. vehicles is not a rounding error — on a $50,000 truck, that is $1,350. American consumers will notice. American dealers will notice. American automakers will notice. That political pressure is Canada's best tool for forcing a CUSMA renewal. Second, the study tells you that the tariff environment is unlikely to get dramatically worse before November 2026. A 15 per cent global tariff requires Congress — and Congress is unlikely to pass it before the midterms. The current 25 per cent auto tariff and the Section 301 replacement for Section 122 (coming July 24) represent the ceiling of tariff risk for the next four months. Plan your parts pricing and inventory strategy around that ceiling. The CUSMA annual review process means the tariff environment will be re-litigated every year through 2036. Build a business that can absorb 10–15 per cent parts cost increases without destroying your margins — because that is the new normal until a comprehensive deal is reached.",
    source: "Peterson Institute for International Economics — July 8, 2026",
    sourceUrl: "https://www.piie.com/blogs/realtime-economics/2026/ending-usmca-could-fuel-higher-us-consumer-prices",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏦",
    text: "Bank of Canada rate decision: Wednesday, July 15 — 6 days away. Current rate: 2.25% (held for 5th consecutive time since October 2025). Prime rate: 4.45%. Expert consensus: hold at 2.25% — 'do no harm' approach. NerdWallet Canada: 'opposing nature of Canada's current economic maladies explains why the Bank's likely to continue holding.' Canada's GDP grew 0.5% in April — 'economy isn't presently in need of life support.' For your shop: auto loan rates tied to prime — a hold means customer financing costs stay flat through August.",
    sourceUrl: "https://dailyhive.com/vancouver/bank-of-canada-rate-july-2026",
  },
  {
    icon: "🚗",
    text: "U.S. CUSMA demand: raise North American auto content from 75% to 82%, and add a new requirement that 50% of a vehicle must be made of U.S. parts. This is the core demand that would devastate Canadian auto parts suppliers. A 50% U.S.-made parts requirement would force automakers to shift production away from Canadian Tier 1 and Tier 2 suppliers. Windsor, Oshawa, Cambridge, and Alliston are all exposed. This demand is the reason Unifor is fighting so hard for production commitments in the Ford contract.",
    sourceUrl: "https://canada.autonews.com/manufacturing/anc-usmca-annual-reviews-auto-industry-uncertainty/",
  },
  {
    icon: "📅",
    text: "Section 122 expiry countdown: 15 days (July 24). Section 301 final determination expected by July 21–23. CUSMA-compliant goods exemption: demanded by 1,500+ submissions — decision pending. Ask your parts supplier about CUSMA compliance status this week. Non-compliant parts with Chinese content (batteries, semiconductors, sensors) are the most exposed to a rate increase. The window to adjust your parts sourcing before the deadline is closing.",
    sourceUrl: "https://ourtake.bakerbotts.com/post/102n7tq/trump-tariff-tracker-july-2-2026",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge update: still closed. Canada paid $6.4 billion. U.S. Ambassador Hoekstra continues to claim it is a 'big myth' that Canada paid. Matthew Moroun (Ambassador Bridge family) donated US$1M to MAGA PAC in January — Trump blocked bridge opening in February. Windsor-Detroit corridor: $350M/day. The Ambassador Bridge remains the only commercial crossing. No opening date announced.",
    sourceUrl: "https://nationalpost.com/news/canada/why-canada-and-the-u-s-cant-agree-on-opening-the-gordie-howe-bridge",
  },
];

const tipOfTheDay = {
  title: "Today Is the Last Day to Build Your Ford Parts Buffer Before the July 10 Deadline",
  text: "If Unifor issues a strike notice tomorrow (July 10), Windsor Assembly and Oakville Assembly could go dark by July 12. Parts shortages will not be immediate — dealers hold 2–4 weeks of inventory. But by week 3 of a strike, high-turnover Ford parts (oil filters, brake pads, air filters, sensors, belts) will be on allocation. Order a 30-day buffer today. If a deal is reached, return the buffer within your supplier's return window. The cost of holding inventory for 30 days is far lower than the cost of turning away Ford service customers.",
};

const quoteOfTheDay = {
  text: "Both Toyota and Honda had previously warned the Canadian government that without the USMCA they would shift production from Canada to the U.S. to avoid tariffs and secure long-term manufacturing stability.",
  author: "Conservative Treehouse",
  title: "Reporting on Toyota's $3.6B Tacoma shift from Mexico to Texas — July 6, 2026",
};

const rideOfTheDay = {
  name: "1969 Ford Mustang Boss 429 — Raven Black, 429 Cubic Inch Semi-Hemi V8, 375 hp (Factory), Ontario-Plated",
  description: "The final day before the Unifor-Ford deadline deserves the rarest and most consequential Mustang Ford ever built. The 1969 Boss 429 was not a car Ford planned to sell — it was a car Ford built to homologate the 429 cubic inch 'semi-hemi' engine for NASCAR racing. To qualify, Ford had to install the engine in at least 500 street cars. They built 859 in 1969. The problem: the 429 was too wide to fit in the Mustang's engine bay. Ford contracted Kar Kraft, a Brighton, Michigan specialty shop, to cut the front shock towers, move the battery to the trunk, and modify the front subframe to make room. The result was a car that looked like a Mustang but drove like nothing else on the road. Factory rating: 375 horsepower. Actual output: widely believed to be 500 horsepower or more. Ford deliberately underrated the engine to avoid insurance surcharges. Raven Black, black interior, Boss 429 fender badge, BF Goodrich T/A tires, Ontario licence plate. A numbers-matching 1969 Boss 429 in Raven Black: $150,000–$300,000 at auction. Ford built the Boss 429 because it had to win. Today, Unifor needs Ford to commit to building in Canada because Canada has to win. The Boss 429 is the reminder of what Ford is capable of when it commits to something.",
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
                {["UNIFOR-FORD FINAL DAY", "TOYOTA WARNS CANADA", "PIIE: 56% AUTO PARTS", "'69 BOSS 429"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Thursday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Unifor-Ford Final Day — Toyota Warns Canada — PIIE 56% Auto Parts — Baywash Daily Briefing Edition No. 63"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 63 — Thursday, July 9, 2026</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Unifor-Ford: Final Day — Toyota Shifts Tacoma to Texas and Warns Canada — PIIE: 56% of U.S. Auto Parts Come From Canada and Mexico
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '69 Ford Mustang Boss 429</span>
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
