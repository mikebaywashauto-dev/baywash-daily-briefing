/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 24;
const BRIEFING_DATE = "May 31, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/BllpovRmBLXsMAEF.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GJdhsOUdbPGaTYcG.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/esULOOCOjDorRYrE.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CtNWukHgYtSWqwQX.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ibscmgNiGTtHvVxp.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SUPPLY CHAIN",
    tagColor: "#e05a1a",
    headline: "Ontario Oil Change Prices Rising Now — Synthetic Motor Oil Shortage Will Hit Canadian Service Bays in June, Lasting Until Mid-2027",
    summary: "The synthetic motor oil shortage that has been building since the Strait of Hormuz disruption began is now arriving at Ontario service bays. GasBuddy petroleum analyst Patrick De Haan confirmed to Inside Halton on May 28, 2026 that motor oil prices are rising and shortages of certain blends are possible — and that Ontario drivers can expect to face oil change price hikes in the near term. The Independent Lubricant Manufacturers Association projects that Group III base oils — the key ingredient in all synthetic motor oil — could run dry from Gulf-region sources by June 2026, with the shortage lasting until mid-2027 at the earliest. Group III base oils are used not only in synthetic motor oil but also in transmission fluid, differential fluid, and other critical lubricants. Nissan has already begun rationing: 5W-30 supply is limited to 70% of last year's volume and 0W-20 supply to 55%. Toyota has warned its service and parts managers about potential shortages of Genuine Toyota Motor Oil products. GM dealers have not yet been formally notified, but GM Authority reported on May 25 that dealership service centres are expected to face mounting pressure for warranty work and routine service. South Korean refiners — an alternative Group III source — also depend on Middle Eastern crude and are prioritizing diesel and jet fuel production over base oils. Valvoline says it is working to mitigate the impact, but the broader shortage is expected to lead to tighter availability, fewer product choices, and higher prices across the board.",
    whyItMatters: "This story is now operational, not theoretical. If you have not already acted on the motor oil shortage, the window to build buffer inventory at current prices is closing. Here is the specific action plan: First, call your oil distributor this week and ask for their current allocation status on 0W-20, 5W-30, and 0W-16 — the three most common weights in Canadian service bays. Second, calculate your 90-day consumption for each grade based on your DMS data. Third, order to 120-day inventory if your distributor can supply it. Fourth, update your oil change pricing now — before your cost goes up — so you are not absorbing the increase. Fifth, communicate proactively with your regular customers: a brief message explaining that oil prices are rising due to a global supply disruption positions you as transparent and trustworthy, not opportunistic. The shops that act this week will have inventory and pricing locked in. The shops that wait until June will be scrambling.",
    source: "Inside Halton / GasBuddy / GM Authority / ILMA / Automotive News",
    sourceUrl: "https://www.insidehalton.com/news/ontario-oil-change-prices-rising-motor-oil-shortage/article_68a0be9a-f5ff-5fdf-8404-3196feaa3464.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "EV MARKET",
    tagColor: "#2563eb",
    headline: "JD Power: Canadian EV Consideration Jumps to 34% — First Increase Since 2022 — But 56% of Serious Shoppers Are Open to Chinese Brands",
    summary: "The percentage of Canadian new-vehicle shoppers who say they are 'very likely' or 'somewhat likely' to consider an electric vehicle for their next purchase has increased to 34%, up from 28% in 2025, according to the JD Power 2026 Canada Electric Vehicle Consideration Study released on May 28, 2026. This marks the first increase in EV consideration since tracking began in 2022, following several years of declining or flat consumer interest. The increase is being driven by two factors: rising fuel prices (which make the operating cost advantage of EVs more visible) and Canada's new Electric Vehicle Affordability Program (EVAP), which replaced the iZEV incentive program earlier this year. However, the study reveals a striking competitive dynamic: among shoppers who are already 'very likely' or 'somewhat likely' to consider an EV, 56% say they would consider a Chinese EV brand, with price point being the dominant driver. Even among the overall new-vehicle shopping population, nearly one-third (31%) are open to a Chinese EV. The top barriers to EV consideration remain range anxiety (65%), lack of charging availability (56%), and — newly entering the top three — cold-weather performance (54%). Purchase price has dropped out of the top tier of concerns for the first time, suggesting that incentives and price normalization are working. Canadian EV consideration still significantly trails the U.S. (34% vs. 59%), and nearly half of Canadian shoppers (47%) say they are 'very unlikely' to consider an EV, compared to just 20% in the U.S.",
    whyItMatters: "The JD Power data has two direct implications for your service business. First, the positive: EV consideration rising to 34% means that within the next three to five years, a meaningful share of your customer base will own EVs. The shops that begin building EV service capability now — starting with EV-specific training, high-voltage safety certification, and diagnostic tool investment — will be positioned to capture that service revenue when it arrives. The shops that wait until EVs are already in their bays will be scrambling to catch up. Second, the competitive threat: 56% of serious EV shoppers are open to Chinese brands. If BYD, Chery, or other Chinese entrants gain meaningful Canadian market share, they will bring their own service network requirements — and potentially their own parts ecosystems. The Canadian aftermarket's ability to service Chinese EVs will depend on data access (Right to Repair) and parts availability. This is a five-year horizon issue, but the time to start thinking about it is now, not when the cars are already on the road.",
    source: "JD Power 2026 Canada Electric Vehicle Consideration Study",
    sourceUrl: "https://www.businesswire.com/news/home/20260528796089/en/EV-Purchase-Consideration-Rises-in-Canada-as-Cost-Pressures-Ease-but-Practical-Barriers-Persist-JD-Power-Finds",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "MARKET CONDITIONS",
    tagColor: "#16a34a",
    headline: "Cox Q2 2026 Dealer Sentiment Index: Spring Sales Strong, But Future Outlook Dims — Tariff Uncertainty Is the Primary Concern Across All Dealer Types",
    summary: "The Cox Automotive Q2 2026 Dealer Sentiment Index (CADSI), released on May 26, 2026, shows that Canadian and U.S. dealers are feeling cautiously optimistic about current market conditions but increasingly anxious about the future. Dealers rated overall market conditions at 53 (on a scale where 50 is neutral), up five points from Q1's 48 but still below the 56 recorded in Q2 2025. The improvement reflects strong spring sales momentum — particularly for trucks and SUVs — as consumers who had been holding off on purchases returned to market. However, the future outlook component of the index is notably weaker, with dealers citing tariff uncertainty as the primary concern across all dealer types and sizes. Independent dealers reported the sharpest divergence: strong current sales but the most pessimistic future outlook of any dealer segment. The Cox survey of 483 dealership rooftops found that leads, underwater deals (negative equity), and affordability concerns are the three most frequently cited operational challenges. Used vehicle inventory is tightening for independent dealers as consumers hold vehicles longer — a dynamic that is simultaneously good for service revenue (more repair work on aging vehicles) and challenging for used vehicle gross margins. The survey was conducted in late April and early May 2026, before the Trump administration tabled its 82%/50% USMCA content demand on May 29 — meaning the current sentiment data does not yet reflect the market's reaction to that development.",
    whyItMatters: "The Cox data tells a story that is directly relevant to your service business in three ways. First, the 'holding vehicles longer' dynamic is real and it is your friend. When consumers delay new vehicle purchases — whether because of tariff-driven price increases, economic uncertainty, or negative equity — they service their existing vehicles more frequently and more extensively. Your service bay is the beneficiary of every new vehicle purchase that does not happen. Second, the tariff uncertainty that is dimming the future outlook for dealers is the same uncertainty that is driving parts cost volatility for your shop. The dealers' concern about future conditions is a leading indicator of the supply chain and pricing pressures that will reach your service operations in the coming months. Third, the independent dealer segment's pessimism about the future is worth noting: independents are the primary source of used vehicle inventory for many shops' customer base. If independent dealers face tighter inventory and margin pressure, it could affect the age and condition profile of the vehicles your customers are driving — and therefore the type and volume of service work they need.",
    source: "Cox Automotive / Automotive News / Dealership Guy",
    sourceUrl: "https://www.autonews.com/retail/an-cox-dealer-sentiment-cadsi-q2-2026-0526/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🛢️",
    text: "Group III base oils — the key ingredient in synthetic motor oil — are also used in transmission fluid, differential fluid, and power steering fluid. The shortage is not limited to engine oil. If you service automatic transmissions or differentials, check your fluid inventory levels this week. The same supply disruption that is affecting motor oil will affect these fluids, and they are less frequently discussed in the shortage coverage.",
    sourceUrl: "https://gmauthority.com/blog/2026/05/synthetic-motor-oil-shortage-could-be-the-latest-supply-chain-constraint/",
  },
  {
    icon: "🇨🇦",
    text: "Toyota and Honda have formed a new joint trade association representing 77% of vehicles built in Canada, according to AM800 CKLW. The association is being formed specifically to advocate for Canadian automotive manufacturing interests in the USMCA renegotiation. This is a significant development: the two largest Japanese automakers operating in Canada are formally aligning to push back against the U.S. demand for higher American content — a demand that would directly threaten their Ontario assembly operations.",
    sourceUrl: "https://www.threads.com/@am800cklw/post/DY7KHRrkVvJ/",
  },
  {
    icon: "📊",
    text: "The Conference Board of Canada released a report on May 29 titled 'Will New Policies Speed Up Canada's Transition to Zero-Emission Vehicles?' The report examines whether Carney's new EVAP incentive program and doubled GHG standards will accelerate EV adoption beyond the JD Power baseline of 34% consideration. The Conference Board's conclusion: the policies are necessary but not sufficient — charging infrastructure and cold-weather performance remain structural barriers that policy alone cannot solve.",
    sourceUrl: "https://www.conference-board.org/publications/will-new-policies-speed-up-Canadas-transition-to-zero-emission-vehicles",
  },
  {
    icon: "⚖️",
    text: "The FTC is putting U.S. dealerships on notice about advertised vehicle prices on third-party listing sites like Cars.com and CarGurus, with the regulator saying dealers are responsible for their listings even on platforms they do not control. Cars.com and CarGurus have both updated their platforms to support dealer compliance. While this is a U.S. regulatory development, Canadian dealers should watch for similar scrutiny from the Competition Bureau, which has been increasingly active on automotive pricing transparency.",
    sourceUrl: "https://www.autonews.com/retail/an-cox-dealer-sentiment-cadsi-q2-2026-0526/",
  },
];

const tipOfTheDay = {
  title: "Act on Motor Oil This Week — The Window to Build Buffer Inventory at Current Prices Is Closing",
  text: "The synthetic motor oil shortage is no longer a future risk — it is arriving at Ontario service bays now. Here is your five-step action plan for this week: Step 1: Call your oil distributor and ask for their current allocation status on 0W-20, 5W-30, and 0W-16. Step 2: Pull your 90-day consumption for each grade from your DMS. Step 3: Order to 120-day inventory if your distributor can supply it. Step 4: Update your oil change pricing now — before your cost increases — so you are not absorbing the difference. Step 5: Send a brief proactive message to your regular customers explaining that oil prices are rising due to a global supply disruption. Transparency builds trust; silence looks like price gouging. The shops that act this week will have inventory locked in at current prices and a pricing structure that protects their margins. The shops that wait until June will be scrambling.",
};

const quoteOfTheDay = {
  text: "Motor oil prices are rising and shortages of certain blends are possible. Ontario drivers can expect to face oil change price hikes.",
  author: "Patrick De Haan",
  title: "Head of Petroleum Analysis, GasBuddy — May 28, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Chevelle SS 454 LS6 — The Most Powerful Production Car GM Ever Built, 450 Horsepower From the Factory",
  description: "The 1970 Chevrolet Chevelle SS 454 LS6 is widely regarded as the pinnacle of the American muscle car era — a car so powerful that GM's own engineers were reluctant to publish its true output figures. The LS6 was the top-of-the-line version of the new 454 cubic inch big-block V8, featuring solid lifters, an 11.25:1 compression ratio, a Holley 780 CFM carburetor, and a specially designed intake manifold. GM officially rated it at 450 horsepower and 500 lb-ft of torque, but contemporary road tests and dyno measurements consistently showed the actual output was closer to 500 horsepower. The LS6 was available in the Chevelle SS 454 and the El Camino SS, and it was the most powerful engine option in the entire GM lineup. Car and Driver's road test of the LS6 Chevelle in 1970 recorded a quarter-mile time of 13.8 seconds at 103.8 mph — numbers that would embarrass many modern sports cars. The LS6 was only available for one model year. By 1971, GM's corporate decision to reduce compression ratios across all engines to accommodate low-lead fuel ended the high-compression era. The 1970 Chevelle SS 454 LS6 is therefore the last, most powerful expression of the original American muscle car formula — maximum displacement, maximum compression, maximum output, no apologies. It is the car that defines the era.",
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
                {["SUPPLY", "EV", "MARKET", "PARTS"].map((tag) => (
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
              alt="Canadian technician examining synthetic motor oil with empty shelves in background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Urgent</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Ontario Oil Change Prices Rising Now — Synthetic Motor Oil Shortage Arrives in June, Lasts Until Mid-2027
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
