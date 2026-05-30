/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 23;
const BRIEFING_DATE = "May 30, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/aSNwXMXkHdcLQVNy.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/naCIxBTLHEVBJdJq.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/qVjGcfWuPDtLFHaO.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/uNoNTkAQktfZCsET.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/kglmNXYKXJYNottt.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TRADE POLICY",
    tagColor: "#e05a1a",
    headline: "Trump Drops the 82%/50% Bomb: U.S. Demands 82% North American Content With Half From the U.S. in USMCA Renegotiation — The Most Aggressive Automotive Trade Demand in North American History",
    summary: "The Trump administration tabled its opening position in the USMCA automotive renegotiation in Mexico City on May 29, 2026, and the numbers are staggering. U.S. negotiators are demanding that vehicles built in North America contain 82% regional content — up from the current 75% — with 50% of that value produced specifically in the United States. The proposal was confirmed by four sources familiar with the matter to Reuters, and separately reported by The Wall Street Journal. Canada was not at the table. The existing USMCA requires 75% North American content overall, with a separate 40-45% higher-wage content requirement that effectively protects Canadian and U.S. parts manufacturing. The new U.S. demand would add a U.S.-specific content floor that goes far beyond the current framework. The impact on current vehicle models would be severe: the Chevrolet Equinox sources only 11% of its parts value from the U.S. or Canada; the Ford Maverick pickup has 25%; the Jeep Compass has 36%. A 50% U.S.-content requirement would require three to four years of supply chain restructuring to implement, according to AutoForecast Solutions VP Sam Fiorani. GM stock fell 1.3% on the news; Stellantis dropped more than 2.5%. Ford — which builds more vehicles in the U.S. than its domestic rivals — gained 4.7%. USTR Jamieson Greer has said he intends to keep some level of tariffs on Canadian and Mexican goods in any revised pact. The next round of U.S.-Mexico talks is scheduled for June 16-17, with a third round the week of July 20. Canada has not been invited to any formal negotiating sessions.",
    whyItMatters: "This is the most important story of the week for Canadian shop owners. Here is the direct chain of impact: if the 82%/50% demand is accepted — even in modified form — the Canadian parts manufacturing sector faces an existential restructuring. The existing 40-45% higher-wage content rule is the mechanism that keeps Canadian parts plants competitive within the USMCA framework. Replace it with a U.S.-specific floor and Canadian plants lose their structural advantage. That means fewer Canadian-made parts available through your existing distributors, more reliance on U.S.-sourced parts, and higher exposure to tariff volatility. The practical action for your shop this week: pull your top 20 parts by annual spend and ask your distributor where each one is manufactured. Not which distributor — which country, which plant. Shops that have this intelligence will be able to respond in days when the rules change; shops that do not will spend weeks scrambling. The 82%/50% demand is an opening position — it will be negotiated down. But the direction is clear, and the direction matters for your supply chain planning.",
    source: "Detroit News / Reuters / Wall Street Journal / AutoForecast Solutions",
    sourceUrl: "https://www.detroitnews.com/story/business/autos/2026/05/29/u-s-wants-much-more-american-content-in-cars-as-usmca-talks-begin/90313608007/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "INFRASTRUCTURE",
    tagColor: "#2563eb",
    headline: "Gordie Howe Bridge Is Days From Completion — But Trump Is Blocking the Opening, Demanding Trade Concessions or a Share of Toll Revenue as the Price of Admission",
    summary: "The $4.7 billion Gordie Howe International Bridge connecting Windsor, Ontario and Detroit, Michigan is days away from completing construction and systems testing, according to two sources with direct knowledge of the project's progress, The Detroit News reported on May 30, 2026. The bridge, which has been under construction for years and was originally scheduled to open in spring 2026, is fully structurally complete. Its customs plazas, ramps, and freeway connections on both the Michigan and Ontario sides are also nearing final commissioning. But the bridge cannot open without U.S. federal authorization — and President Trump has made clear he intends to use that authorization as leverage. Trump has demanded either trade concessions from Canada or a share of future toll revenue as a condition for allowing the bridge to open. The Windsor-Detroit corridor is the single busiest land border crossing in North America, handling approximately $50 billion in annual two-way trade — much of it automotive parts and finished vehicles moving between Ontario assembly plants and U.S. suppliers and customers. The existing Ambassador Bridge, owned by billionaire Matty Moroun's family, handles the bulk of that traffic and has long been a bottleneck. The Gordie Howe Bridge was designed to double crossing capacity and reduce the chronic congestion that costs the automotive supply chain millions of dollars annually in delays. Former U.S. Transportation Secretary Pete Buttigieg publicly criticized Trump's position, saying the president should not prevent the opening of the bridge. The Automotive Parts Manufacturers' Association's Flavio Volpe described the bridge's continued closure as a direct supply chain risk for the Canadian auto industry.",
    whyItMatters: "The Gordie Howe Bridge matters to your shop in two ways. First, directly: the Windsor-Detroit corridor is the primary entry point for automotive parts moving from U.S. suppliers into Ontario and from Ontario parts plants into U.S. assembly operations. Any disruption to that corridor — whether from bridge closure, border slowdowns, or tariff-related paperwork delays — creates parts shortages that ripple through the entire Canadian aftermarket supply chain within days. Second, strategically: Trump's decision to use the bridge opening as a trade bargaining chip is a signal about how he intends to use every available piece of leverage in the CUSMA renegotiation. The bridge is a concrete example of the broader dynamic: Canada has infrastructure, resources, and supply chain integration that the U.S. needs — and Trump is willing to hold those mutual benefits hostage to extract concessions. For shop owners, the practical implication is the same as it has been for months: build buffer inventory on your fastest-moving parts, maintain relationships with multiple distributors, and do not assume that current lead times will hold if the border situation deteriorates.",
    source: "Detroit News / Crain's Detroit / Automotive News / APMA",
    sourceUrl: "https://www.detroitnews.com/story/news/politics/2026/05/30/gordie-howe-bridge-nearing-completion-when-will-it-open/90315425007/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "LABOUR",
    tagColor: "#16a34a",
    headline: "Windsor's Auto Industry Braces for the Toughest CUSMA Renegotiation in History — Unifor Heads Into Contract Talks With Ford on June 22 as the Pattern-Setter for All Detroit Three Bargaining",
    summary: "Windsor's automotive industry — the most concentrated auto manufacturing hub in Canada — is entering a period of simultaneous pressure from multiple directions. The CUSMA renegotiation, now formally underway with U.S.-Mexico talks in Mexico City, is being watched with particular intensity in Windsor, where Ford's Windsor Engine Plant, Stellantis's Windsor Assembly Plant, and dozens of Tier 1 and Tier 2 parts suppliers are directly exposed to any changes in North American content rules. AM800 CKLW reported on May 29 that the Windsor auto industry is 'bracing for tough CUSMA renegotiations,' with local industry leaders warning that the U.S. demand for higher American content could directly threaten Windsor-area manufacturing jobs. Separately, Unifor is preparing for its June 22 opening of formal contract negotiations with Ford of Canada — the pattern-setter for all Detroit Three bargaining in Canada. Unifor represents approximately 5,000 Ford workers in Canada, primarily at the Windsor Engine Plant and the Oakville Assembly Complex (which is being retooled for Super Duty production). The union has cited 'unprecedented challenges' from U.S. tariffs as a central issue in the upcoming talks. The contract talks will set labour cost benchmarks that affect every shop owner who relies on OEM parts pricing — because labour costs at assembly plants flow through to parts pricing throughout the supply chain. Meanwhile, the Automotive News Canada weekly roundup identified the Gordie Howe Bridge situation, Stellantis Brampton's potential revival, and the USMCA content demands as the five stories shaping Canadian auto this week.",
    whyItMatters: "The Unifor-Ford contract talks that open June 22 will set the labour cost baseline for the entire Canadian automotive manufacturing sector for the next three to four years. That matters for your shop in a specific way: OEM parts pricing is partly a function of assembly plant labour costs. When Unifor wins wage increases at Ford, those costs eventually flow through to the price of OEM parts. In a tariff environment where parts costs are already elevated, a significant wage settlement could add another layer of cost pressure. The practical implication is not to avoid OEM parts — it is to use this window before the contract is settled to lock in pricing agreements with your distributors where possible, and to accelerate your evaluation of quality aftermarket alternatives for high-volume parts where the cost differential is meaningful. The Windsor situation also illustrates why the CUSMA outcome matters so much: Windsor is the clearest example of what a bad CUSMA outcome looks like — and what a good one protects.",
    source: "AM800 CKLW / Automotive News Canada / Unifor",
    sourceUrl: "https://www.am800cklw.com/news/windsor-auto-industry-braces-for-tough-cusma-renegotiations/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📉",
    text: "GM stock fell 1.3% and Stellantis dropped more than 2.5% on Friday after the 82%/50% USMCA content demand was reported. Ford gained 4.7% — the market's signal that Ford's higher U.S. manufacturing footprint makes it the relative winner in a world of stricter U.S. content rules. For shops: the stock market reaction is a leading indicator of how the industry is pricing the probability that the U.S. demand will be accepted in some form. Ford's gain is not good news for Canadian manufacturing — it reflects the market's belief that production will shift toward U.S. plants.",
    sourceUrl: "https://www.detroitnews.com/story/business/autos/2026/05/29/u-s-wants-much-more-american-content-in-cars-as-usmca-talks-begin/90313608007/",
  },
  {
    icon: "🌉",
    text: "Mapping apps including Google Maps and Apple Maps have reportedly begun directing motorists to the Gordie Howe Bridge as an active crossing — even though the bridge is not yet open. CBC Windsor reported that officials are concerned about drivers arriving at the bridge expecting to cross. The Windsor-Detroit Bridge Authority has not announced an opening date. For shops near the Windsor corridor: do not plan logistics around the Gordie Howe Bridge opening until an official date is confirmed.",
    sourceUrl: "https://www.cbc.ca/news/canada/windsor/map-apps-border-gordie-howe-bridge-9.7216684",
  },
  {
    icon: "🚗",
    text: "The 2026 Made in America Auto Index (not yet released) estimates 109 vehicles have 51% or more U.S. content — down from 123 vehicles in 2025. Tesla models dominate the top 10. The decline in the number of vehicles meeting the 50% U.S. content threshold illustrates how far most of the industry is from the Trump administration's new demand — and how much supply chain restructuring would be required to comply.",
    sourceUrl: "https://www.detroitnews.com/story/business/autos/2026/05/29/u-s-wants-much-more-american-content-in-cars-as-usmca-talks-begin/90313608007/",
  },
  {
    icon: "⚙️",
    text: "Seven automotive trade groups sent a joint letter to USTR Greer urging restraint in the USMCA renegotiation, noting that the existing automotive rules of origin only became fully effective in July 2023 and that 'the full economic effects of USMCA have yet to be realized.' The groups also pleaded for a trilateral deal rather than separate bilateral agreements with Canada and Mexico. The letter represents the industry's formal pushback against the 82%/50% demand — but Greer has shown little sign of moderating his position.",
    sourceUrl: "https://www.detroitnews.com/story/business/autos/2026/05/29/u-s-wants-much-more-american-content-in-cars-as-usmca-talks-begin/90313608007/",
  },
];

const tipOfTheDay = {
  title: "Build a Parts Origin Map Before the USMCA Rules Change — The Intelligence You Need to Move Fast",
  text: "The 82%/50% USMCA content demand tabled this week is an opening position, not a final deal. But the direction is clear: more U.S. content, less Canadian content protection. The shops that will navigate this best are the ones that already know where their parts come from — not which distributor, but which country and which plant. This week's action: take your top 20 parts by annual spend from your DMS. For each one, call your distributor and ask: where is this part manufactured? Is it made in Canada, the U.S., Mexico, or overseas? Build a simple spreadsheet with part number, description, manufacturer country, and your annual spend. This map will tell you which parts of your supply chain are most exposed to USMCA rule changes — and which are already U.S.-sourced and therefore less vulnerable. The investment is one phone call per part and two hours of your time. The payoff is the ability to make fast, informed decisions when the rules change instead of scrambling.",
};

const quoteOfTheDay = {
  text: "U.S.-Canadian content is below 50% for a lot of vehicles. The new level would have to raise the U.S. content. If U.S.-Canadian content is not near 50%, that's going to eliminate a number of Canadian jobs and Mexican jobs.",
  author: "Sam Fiorani",
  title: "Vice President of Global Vehicle Forecasting, AutoForecast Solutions — on the Trump administration's 82%/50% USMCA content demand",
};

const rideOfTheDay = {
  name: "1970 Buick GSX Stage 1 — The Gentleman's Muscle Car That Was Actually a Street Brawler",
  description: "The 1970 Buick GSX Stage 1 is one of the most underrated muscle cars of the golden era — a car that looked like a luxury coupe and performed like a purpose-built drag racer. Buick's engineers had been quietly building some of the most powerful engines in the GM lineup throughout the late 1960s, and the GSX Stage 1 was their masterpiece. The Stage 1 package added a specially calibrated 455 cubic inch V8 that Buick conservatively rated at 360 horsepower — but which produced 510 lb-ft of torque, more than any other production car of the era. Road tests of the time recorded quarter-mile times in the 13.3 to 13.4 second range, making it one of the fastest production cars in America. The GSX was available in two colours only: Saturn Yellow and Apollo White, both with contrasting black stripes, a functional hood scoop, and a rear spoiler. The visual package was deliberately aggressive — a departure from Buick's traditional luxury positioning. Only 678 GSX Stage 1 cars were built in 1970, making it one of the rarest muscle cars of the era. The GSX Stage 1 represents the pinnacle of the Buick performance story — a brief, brilliant moment when the division best known for Rivieras and Electras built a car that could embarrass a Chevelle SS 454 at the stoplight. It is the muscle car for people who know muscle cars.",
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
                {["TRADE", "POLICY", "LABOUR", "PARTS"].map((tag) => (
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
              alt="Gordie Howe International Bridge at sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Breaking</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Trump Tables 82%/50% USMCA Bomb — The Most Aggressive Auto Trade Demand in North American History
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
