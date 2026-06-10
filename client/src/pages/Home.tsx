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

const BRIEFING_NUMBER = 34;
const BRIEFING_DATE = "June 10, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/seEWcqDWAMxVBpOO.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XzDnVaofEBbinqBW.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GZIElQSaGxtQhbJo.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/DmkCfpkvbUMyMaPP.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/WaAJeJnTXshweYOR.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "BREAKING",
    tagColor: "#e05a1a",
    headline: "Gordie Howe Bridge Opens THIS SUNDAY — Carney Confirms Despite Trump's Threats",
    summary: "Prime Minister Carney confirmed on Parliament Hill Tuesday: 'It's positive news. Obviously, the bridge will be open at the end of the week.' Traffic opens Sunday, June 15. The $6.4 billion, six-lane cable-stayed bridge ends 4+ months of Trump blocking the opening of the Windsor-Detroit corridor's second crossing. The Moroun family (owners of the competing Ambassador Bridge) sued to stop the opening and lobbied Trump directly — they are now under House investigation. Trump falsely claimed Canada owned both sides of the bridge and demanded a share of toll revenue or trade concessions before authorizing the U.S. side to open. DHS Secretary Mullin confirmed last week that customs and border protection staff are staffed and 'ready to go.' The bridge connects directly to Highway 401 on the Canadian side and I-75 on the U.S. side, eliminating the bottleneck that has plagued the Ambassador Bridge for decades. The Windsor-Detroit corridor handles $50 billion in annual trade — the majority of it automotive parts and finished vehicles. The bridge's opening is the most significant positive development for the Canadian automotive supply chain in years.",
    whyItMatters: "The Gordie Howe Bridge opening is directly relevant to every Canadian shop owner who sources parts through the Windsor-Detroit corridor. The Ambassador Bridge currently handles approximately $50 billion in annual automotive trade — and it regularly backs up for hours. The Gordie Howe Bridge's six lanes and direct highway connections will cut crossing times dramatically, which means faster parts delivery from U.S. distributors and less buffer inventory required. If you have customers who regularly cross to the U.S. for parts runs or deliveries, alert them now: the bridge opens Sunday, June 15. The opening also has a symbolic dimension: it is the first concrete positive development in Canada-U.S. trade relations since the tariff war began, and it may signal that the broader CUSMA negotiation is moving toward resolution.",
    source: "CTV News / CBC / Global News — June 10, 2026",
    sourceUrl: "https://www.ctvnews.ca/canada/article/confirming-opening-of-gordie-howe-bridge-pm-carney-calls-it-positive-news/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRADE",
    tagColor: "#1d4ed8",
    headline: "CVMA Calls on Carney to Scrap China EV Deal Before CUSMA Talks — 21 Days to July 1",
    summary: "The Canadian Vehicle Manufacturers' Association (Ford, GM, Stellantis) is publicly demanding Ottawa cancel the 6.1% China EV tariff deal before CUSMA negotiations intensify. CVMA CEO Brian Kingston: 'It's not an option to diversify away from the United States.' The deal — which allows 49,000 Chinese-built EVs into Canada annually at 6.1% tariff (down from 100%) — has become the #1 irritant in LeBlanc-Greer talks. Tesla accounts for 12% of the quota before any Chinese brand has moved a single unit, because it manufactures the Model 3 at Gigafactory Shanghai. Trump publicly criticized the deal. BYD has applied for an import permit. Stellantis-Leapmotor Brampton assembly talks are ongoing despite opposition from Ontario Premier Doug Ford. The CVMA position is significant: these are the same companies (Ford, GM, Stellantis) whose Canadian plants produce the vehicles that generate the most CUSMA-protected trade. If they are willing to sacrifice the China EV deal to secure CUSMA renewal, it signals how high the stakes are. 21 days to July 1. U.S.-Mexico Round 2 is June 16-17 in Washington.",
    whyItMatters: "The CVMA's call to scrap the China EV deal is a direct signal of how the Canadian automotive industry is prioritizing CUSMA renewal above all else. For Canadian shop owners, the China EV deal matters in two ways. First, if BYD and other Chinese brands enter the Canadian market in volume, your service mix will change — Chinese EVs use different fluid specifications, different battery chemistry, and different diagnostic protocols. Second, if the China EV deal is scrapped as a CUSMA concession, it may accelerate the path to a deal that stabilizes parts prices. The June 16-17 U.S.-Mexico Round 2 is the next critical data point: watch for whether Canada is included and whether the China EV deal is on the table.",
    source: "Global News / CVMA — June 10, 2026",
    sourceUrl: "https://globalnews.ca/news/11896298/scrap-china-ev-deal-auto-group/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TRADE",
    tagColor: "#7c3aed",
    headline: "USMCA Confirmed to Miss July 1 Deadline — Annual Reviews Begin, Uncertainty Extends to 2027",
    summary: "Bloomberg and the Claims Journal confirmed Tuesday: all three countries will miss the July 1 renewal deadline. The deal remains in force until 2036 but enters rolling annual reviews — creating indefinite uncertainty for every business in the North American automotive supply chain. USTR Greer: 'I don't think we're going to renew it outright.' Side deals (not treaty changes) are the most likely near-term outcome. The most dangerous scenario: the U.S. triggers a six-month withdrawal notice on July 1, effective January 1, 2027 — which would end CUSMA entirely and expose all Canadian exports to the full 25% auto tariff plus the 10% forced labour tariff (35% combined). The UAW Dauch strike enters Week 2 with no deal and no talks scheduled. GM has approximately four days of Silverado/Sierra axle inventory remaining. Bank of Canada rate decision tomorrow, June 11 — economists expect a hold at 2.25% but language on inflation vs. growth trade-off will be closely watched.",
    whyItMatters: "The confirmation that CUSMA will miss the July 1 deadline means the uncertainty that has been weighing on parts prices and inventory decisions since January is not going away in three weeks. Annual reviews mean every year brings a new round of uncertainty. For Canadian shop owners, the practical implication is: do not make long-term parts sourcing commitments based on current tariff rates. Maintain flexibility. The most important number to watch is not the July 1 deadline but whether the U.S. files a withdrawal notice. If they do not, the deal continues in annual review mode and the status quo holds. If they do, you have six months to prepare for a 35% tariff environment.",
    source: "Bloomberg / Claims Journal / Reuters — June 10, 2026",
    sourceUrl: "https://www.reuters.com/legal/litigation/strike-gm-axle-supplier-continues-2026-06-08/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opens Sunday, June 15. Six lanes, direct Highway 401 (Canada) and I-75 (U.S.) connections. The Ambassador Bridge will no longer be the only crossing for the $50B/year automotive trade corridor. Parts delivery times from U.S. distributors will improve significantly.",
    sourceUrl: "https://www.ctvnews.ca/canada/article/confirming-opening-of-gordie-howe-bridge-pm-carney-calls-it-positive-news/",
  },
  {
    icon: "🤝",
    text: "CUSMA — 21 days to July 1. U.S.-Mexico Round 2 is June 16-17 in Washington. Canada's inclusion or exclusion from those talks is the most important signal of the week. The 82%/50% U.S. content demand (which would exclude Canadian parts from vehicle content calculations entirely) remains on the table.",
    sourceUrl: "https://globalnews.ca/news/11896298/scrap-china-ev-deal-auto-group/",
  },
  {
    icon: "🚛",
    text: "UAW Dauch strike Day 10 — GM has ~4 days of Silverado/Sierra axle inventory. No talks scheduled. If GM halts production, Oshawa Assembly Complex is directly in the supply chain. Call your top 20 GM truck customers today and book their next service appointment.",
    sourceUrl: "https://www.reuters.com/legal/litigation/strike-gm-axle-supplier-continues-2026-06-08/",
  },
  {
    icon: "🏦",
    text: "Bank of Canada rate decision TODAY, June 11. May jobs report (+87,800, unemployment to 6.6%) argues for holding at 2.25%. Bond markets pricing 30+ basis points of tightening by December. Higher rates mean fewer new vehicle purchases and more service work for your shop.",
    sourceUrl: "https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/",
  },
];

const tipOfTheDay = {
  title: "Gordie Howe Bridge Opens Sunday — Update Your Parts Sourcing Strategy Now",
  text: "The Gordie Howe Bridge opens to traffic on Sunday, June 15. Here is how to take advantage of it immediately. First, contact your U.S.-based parts distributors this week and ask if they have a Windsor-side distribution point or can offer faster delivery via the new crossing. The six-lane bridge with direct highway connections will cut crossing times from hours to minutes during peak periods. Second, if you currently hold extra buffer inventory because of Ambassador Bridge delays, you may be able to reduce that buffer once the new bridge is operating — freeing up working capital. Third, if you have technicians or drivers who make parts runs across the border, brief them on the new crossing: the Gordie Howe Bridge connects directly to Highway 401 on the Canadian side and I-75 on the U.S. side. Fourth, the bridge opening may signal that the broader CUSMA negotiation is moving toward resolution — watch the June 16-17 U.S.-Mexico Round 2 talks for Canada's inclusion.",
};

const quoteOfTheDay = {
  text: "It's not an option to diversify away from the United States. We need to get CUSMA right.",
  author: "Brian Kingston",
  title: "CEO, Canadian Vehicle Manufacturers' Association — June 10, 2026",
};

const rideOfTheDay = {
  name: "1969 Pontiac Firebird Trans Am Ram Air IV — The Rarest First-Gen",
  description: "The 1969 Pontiac Firebird Trans Am Ram Air IV is the rarest and most desirable first-generation Trans Am ever built. Only 55 were produced with the Ram Air IV engine — a high-revving, solid-lifter 400 cubic inch V8 rated at 345 hp (actually closer to 370). The Ram Air IV was Pontiac's most exotic street engine, featuring round-port heads, a radical camshaft, and a functional hood scoop that fed cold air directly to the carburetor. In Cameo White with the blue racing stripes and rear spoiler, it is one of the most visually striking muscle cars of the era. The Trans Am name was licensed from the SCCA Trans-Am racing series — Pontiac had to pay $5 per car to use it. Today, a documented Ram Air IV Trans Am trades for $350,000-$500,000 at major auctions. The standard Ram Air III car is $150,000-$250,000. On a Tuesday when the Gordie Howe Bridge is finally opening and CUSMA has 21 days to go, the Trans Am is a reminder that the rarest and most capable option is not always the loudest — and that the best investments are often the ones that took the longest to be recognized.",
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
              <div className="flex gap-2">
                {["BRIDGE", "CUSMA", "CVMA", "GM STRIKE"].map((tag) => (
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
              alt="Gordie Howe International Bridge opening Sunday June 15, 2026 — Windsor-Detroit automotive corridor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Breaking</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Gordie Howe Bridge Opens Sunday — CVMA Demands China EV Deal Scrapped, CUSMA 21 Days Out
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
