/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 25;
const BRIEFING_DATE = "June 1, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ubWZPRtfQJvGSPoD.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jpFUxKzyDKNXnOST.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mtRGPBweOseaQbpd.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QNDjvfgycWHlaLgA.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SpMhLcDlNYORUcdE.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TRADE POLICY",
    tagColor: "#e05a1a",
    headline: "CUSMA July 1 Deadline — 30 Days Out, Canada Has No Formal Talks Scheduled While U.S. and Mexico Are Already on Round Two",
    summary: "The July 1, 2026 CUSMA review deadline is now exactly 30 days away, and Canada's position has not materially changed: the U.S. and Mexico have completed their first bilateral negotiating round in Mexico City (May 28-29), have scheduled a second round for June 16-17 in Washington, and a third round for the week of July 20 in Mexico City — while no Canada-U.S. talks have been scheduled at all. Former Canadian Ambassador to the United States Kirsten Hillman, speaking in her first interview since leaving her post, told CTV Question Period on May 31 that she does not believe CUSMA will be scrapped — but she expects it to be 'modified.' Hillman said that 'wiping all of that away would be phenomenally disruptive' and that 'my money's on that agreement staying.' However, she acknowledged that the July 1 deadline is not a 'make-or-break date' — it is the point at which the three parties must decide to either renew CUSMA for 16 years or enter a cycle of annual reviews that could stretch until the agreement's 2036 expiry. The sharpest live threat is the U.S. demand for 82% North American content with 50% specifically from the United States — a demand that was tabled with Mexico and contains no Canada-specific provision. USTR Jamieson Greer has separately stated that U.S. tariffs on Canadian and Mexican goods will remain in place even after a revised CUSMA is agreed. Canada's counter-tariffs on U.S. steel, aluminum, and automobiles remain in force. The Export Practitioner summarized the situation as a 'split-screen review': Mexico is in active scheduled negotiations; Canada is in a 'defensive posture.'",
    whyItMatters: "The CUSMA outcome will determine the cost structure of every part you order for the next decade. Here is the specific exposure for Canadian service shops: If the 82%/50% content rule is adopted, vehicles built in Canada that do not meet the threshold will face 25% tariffs when exported to the U.S. — which means OEMs will either restructure their Canadian supply chains or reduce Canadian production. Either outcome reduces the number of vehicles on Canadian roads that are serviced under OEM warranty programs, and increases the proportion of older, higher-mileage vehicles that need independent service. The 30-day window before July 1 is the period of maximum uncertainty. Parts suppliers are watching the talks closely before making pricing decisions for Q3. If you have the ability to lock in parts pricing or inventory for the summer, this week is the time to do it — before the July 1 outcome (or lack of outcome) creates a new wave of pricing volatility.",
    source: "BNN Bloomberg / CTV Question Period / The Export Practitioner / Autoblog",
    sourceUrl: "https://www.bnnbloomberg.ca/business/politics/2026/05/31/scrapping-cusma-would-be-phenomenally-disruptive-hillman-on-future-of-the-deal/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SUPPLY CHAIN",
    tagColor: "#dc2626",
    headline: "Shell's Pearl GTL — The World's Largest Group III Base Oil Producer — Is Offline for Over a Year. Lubricant Prices Already Up 10-35%, Shortage Hits Late June",
    summary: "The synthetic motor oil shortage that has been building since the Strait of Hormuz disruption is now entering its most acute phase, according to new reporting from The Western Producer (May 26, 2026) citing ILMA CEO Holly Alfano. Shell's Pearl GTL facility in Qatar — the world's single largest producer of Group III base oil — has sustained significant damage in the Middle East conflict and will be offline for over a year. Pearl GTL alone represents a disproportionate share of global Group III supply. Combined with the closure of ADNOC (UAE) and BAPCO (Bahrain), three Persian Gulf producers that together supply 44% of U.S. Group III imports are now offline or severely curtailed. The South Korean safety valve — which normally supplies 30% of U.S. Group III — is also compromised: Korean refiners depend on Middle Eastern crude as feedstock, and are rerouting their limited crude supply to diesel and jet fuel production, which pays more than base oil manufacturing. The Group II safety valve is also effectively closed: with diesel margins at 40-year highs, refiners are rerouting Group II oils to the fuel sector. ILMA's conclusion: 74% of U.S. Group III imports are 'under direct stress' and 'conditions are not expected to fully resolve until at least mid-2027.' Alfano told The Western Producer that two independent analysts expect the supply crunch to come to a head in late June or early July as stored inventories dwindle. Prices for lubrication products have already increased 10 to 35% depending on the product, with some products already unavailable. Toyota and ExxonMobil have announced a shortage of ultra-thin 0W-8 and 0W-16 synthetic motor oils, with Toyota issuing an internal bulletin to North American dealers on approved substitutes.",
    whyItMatters: "This story has moved from 'warning' to 'active crisis' in the past two weeks. The key new information today is that Shell's Pearl GTL — the world's largest Group III producer — is confirmed offline for over a year. This is not a temporary disruption; it is a structural supply gap that will persist through at least mid-2027. For your shop, the implications are now concrete: First, the shortage is no longer limited to exotic low-viscosity grades. It is affecting 5W-30 and 0W-20 — the two most common weights in Canadian service bays. Second, the Group II and Group III safety valves are both closed simultaneously — an unprecedented condition. Third, prices are already up 10-35% at the distributor level, and those increases will flow through to your cost of goods within weeks if they have not already. The action items from yesterday's Tip of the Day remain valid: call your distributor, check allocation, order to 120-day inventory if possible, and update your pricing now. If you have not done this yet, do it today.",
    source: "The Western Producer / ILMA / GM Authority / Automotive News",
    sourceUrl: "https://www.producer.com/news/lubricant-prices-on-the-rise-as-supplies-tighten/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "LABOUR",
    tagColor: "#2563eb",
    headline: "Unifor-Ford Talks Open June 22 — Windsor Braces for Double Pressure: CUSMA Uncertainty + Contract Negotiations at the Same Time",
    summary: "Canada's Detroit Three contract negotiations will formally begin on June 22, 2026, when Unifor opens master bargaining with Ford Motor Company of Canada — the pattern-setter for subsequent talks with General Motors and Stellantis. The talks will involve approximately 5,000 Ford workers across Canadian facilities, the majority at the Oakville Assembly Complex, which is currently ramping up Super Duty production following its $464.5M federal-provincial restart funding. The negotiations are taking place against a backdrop of extraordinary trade uncertainty. Stellantis Canada President Trevor Longley told AM800 CKLW on May 29 that 'the reality is that Canadian business is predicated on access to the American market, as 90 per cent of what we do and build here at this plant [Windsor Assembly Plant] and what we were building in Brampton, and that's true really of the industry.' Longley said he expects 'complicated, long discussions' on CUSMA and Section 232 tariffs. Unifor Local 444 President James Stewart — who is also the Stellantis Bargaining Chair — said union members are entering negotiations 'determined to protect jobs and push for more production in Canadian plants,' and that 'wage cuts, pension cuts, and benefit cuts don't fix the problem.' Stewart also called on the federal government to use CUSMA negotiations as leverage: 'If they can't bargain a good CUSMA agreement, then don't bargain a deal at all.' The Windsor Assembly Plant currently builds 1,200-1,300 vehicles per day but has capacity for 1,500 — a gap that reflects the ongoing impact of tariff-driven demand uncertainty.",
    whyItMatters: "The Unifor-Ford contract outcome will set the labour cost benchmark for the entire Canadian automotive manufacturing sector for the next three to four years. For service shop owners, this matters in two ways. First, the pattern agreement will determine the wage floor for skilled trades in the automotive sector — and those wages are a reference point for technician compensation at independent shops. If Unifor wins significant wage increases at Ford, it will put upward pressure on technician wages across the industry. Second, the contract talks are happening simultaneously with CUSMA negotiations, which means the outcome of each will influence the other. If CUSMA produces a bad result for Canadian manufacturing, Unifor will face pressure to make concessions on wages to preserve jobs — which would reduce upward pressure on technician wages. If CUSMA produces a good result, Unifor will push hard for gains. The June 22 start date is 21 days away. Watch for early signals from both sides about their opening positions.",
    source: "AM800 CKLW / CTV News Windsor / WSWS / Unifor",
    sourceUrl: "https://www.am800cklw.com/news/windsor-auto-industry-braces-for-tough-cusma-renegotiations/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇨🇦",
    text: "Former Ambassador Hillman said Canada still has 'the best deal with the U.S. compared to any other country' despite the trade war — because most Canadian goods still enter the U.S. tariff-free under CUSMA. The sectors that are not tariff-free are steel, aluminum, and autos. Those are also the three sectors most directly relevant to Canadian automotive shops. The gap between 'most goods' and 'your goods' is the entire story.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/politics/2026/05/31/scrapping-cusma-would-be-phenomenally-disruptive-hillman-on-future-of-the-deal/",
  },
  {
    icon: "🛢️",
    text: "The lubricant shortage is not limited to motor oil. Group III base oil is also the primary feedstock for automatic transmission fluid, power steering fluid, differential fluid, and hydraulic fluid. If you service automatic transmissions, rear differentials, or power steering systems, check your fluid inventory this week. The same supply disruption affecting motor oil will affect these fluids — and they are receiving far less media coverage, which means your competitors may not be acting yet.",
    sourceUrl: "https://www.producer.com/news/lubricant-prices-on-the-rise-as-supplies-tighten/",
  },
  {
    icon: "🏭",
    text: "Stellantis Canada President Trevor Longley confirmed that the Windsor Assembly Plant has capacity to build 1,500 vehicles per day but is currently running at 1,200-1,300. That 200-300 vehicle/day gap represents the direct impact of tariff-driven demand uncertainty on Canadian production. The Brampton Assembly Plant — which has been idle since late 2024 — remains offline. Longley said he is 'looking for a free trade agreement and a good discussion around CUSMA and Section 232 tariffs' to unlock that potential.",
    sourceUrl: "https://www.am800cklw.com/news/windsor-auto-industry-braces-for-tough-cusma-renegotiations/",
  },
  {
    icon: "📊",
    text: "Ford shares climbed to their highest level since January 2022 on May 29-30, up as much as 6.7% to $17.77 — nearly doubling from a 52-week low of $9.42 set in June 2025. The catalyst was the USMCA content demand news, which investors read as positive for Ford because Ford has the highest U.S. content of any Detroit Three automaker. GM fell 1.3% and Stellantis dropped 2.5% on the same news. The market is pricing in a scenario where the 82%/50% content rule benefits Ford at the expense of its competitors.",
    sourceUrl: "https://eletric-vehicles.com/ford/ford-shares-climb-to-highest-level-since-january-2022/",
  },
];

const tipOfTheDay = {
  title: "The Lubricant Shortage Is Now Structural, Not Temporary — Update Your Supplier Agreements Before July 1",
  text: "Shell's Pearl GTL — the world's largest Group III base oil producer — is confirmed offline for over a year. This is a structural supply gap, not a temporary disruption. Here is your updated action plan: First, contact your lubricant distributor today and ask specifically about Pearl GTL's impact on their supply chain. Second, ask for a written allocation commitment for Q3 (July-September) at current pricing — distributors are more likely to offer this now, before the June/July crunch hits. Third, if your distributor cannot offer an allocation commitment, start qualifying a second supplier immediately. Fourth, update your oil change menu pricing to reflect the new cost reality — a 10-35% increase in your cost of goods requires a corresponding adjustment to your retail price. Fifth, consider communicating the price change to your regular customers proactively, citing the global supply disruption. Customers who understand the reason for a price increase are far more likely to remain loyal than customers who feel blindsided.",
};

const quoteOfTheDay = {
  text: "Wiping all of that away would be phenomenally disruptive. It's not good for America. My money's on that agreement staying — maybe being modified, but staying in place.",
  author: "Kirsten Hillman",
  title: "Former Canadian Ambassador to the United States — May 31, 2026",
};

const rideOfTheDay = {
  name: "1969 Ford Mustang Boss 429 — The NASCAR Homologation Special That Ford Built to Beat Itself",
  description: "The 1969 Ford Mustang Boss 429 exists because of a NASCAR rule: to race an engine at Daytona, Ford had to build at least 500 street cars with that engine installed. The 429 cubic inch 'semi-hemispherical' engine was Ford's most sophisticated production V8 — featuring a unique cylinder head design with canted valves, a forged steel crankshaft, and an aluminum intake manifold. The problem was that the engine was too wide to fit in the standard Mustang engine bay, so Ford contracted with Kar Kraft to perform a specialized conversion: widening the front shock towers, relocating the battery to the trunk, and modifying the front suspension to accommodate the massive engine. The result was a car that produced a conservatively rated 375 horsepower (actual output was closer to 500 hp) and could run the quarter mile in the low 13-second range. The Boss 429 was built for only two model years — 1969 and 1970 — with 859 units produced in 1969 and 499 in 1970. It is one of the rarest and most mechanically sophisticated Mustangs ever built, and it represents the moment when Ford's racing ambitions produced a street car that was genuinely extraordinary. On June 1, 2026 — with Ford's Oakville plant restarting and Unifor-Ford talks 21 days away — it seems fitting to celebrate the most ambitious Ford ever built in the muscle car era.",
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
                {["TRADE", "SUPPLY", "LABOUR", "PARTS"].map((tag) => (
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
              alt="Windsor-Detroit border crossing at dawn showing Ambassador Bridge and Gordie Howe International Bridge"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">30 Days to Deadline</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                CUSMA July 1 Deadline — Canada Still Has No Formal Talks Scheduled While U.S. and Mexico Are Already on Round Two
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
