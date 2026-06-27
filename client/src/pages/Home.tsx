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

const BRIEFING_NUMBER = 51;
const BRIEFING_DATE = "June 27, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/HRPpbMqXEhMoQCKT.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OevDEhNMUWZCcGWJ.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/PYoMkDqbMrJBUgNK.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/qzcAYXvJsaqJptEv.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JVmrhLWaoWcHggwn.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CHINESE EVS / BYD / CHERY / GEELY",
    tagColor: "#b91c1c",
    headline: "Chinese EV Makers Are Using Canada as a \"Bridgehead\" for the U.S. — BYD, Chery, Geely, Lotus, Changan All Moving In — And the U.S. Is Watching",
    summary: "The most comprehensive picture yet of the Chinese EV invasion of Canada emerged this week from Seoul Economic Daily (June 27) and CTV News (June 25). BYD is opening 6 Canadian stores and has begun Transport Canada certification for two passenger car models — the Seal (sedan) and the Atto 3 (compact SUV). Chery held its first Canadian dealer meeting two weeks after Carney's January 2026 announcement and is targeting a Q4 2026 launch. Lotus (Geely-owned) is opening 6 Canadian stores. Changan — a state-owned Chinese automaker — has a dedicated Canada team and is actively recruiting dealers. The Chinese OEMs are not coming to Canada because they love the market. Canada's unfavourable exchange rate and smaller population make it 'one of the least profitable markets for manufacturers to sell into globally,' per industry analysts. They are coming because Canada is a practice run for the U.S. market — and because Canadian dealers with U.S. outlet connections are a direct pipeline for learning North American retail. The Alliance for Automotive Innovation has warned the U.S. government: 'A Canada-China EV trade agreement could open a back door to the U.S. market, creating economic and national security risks.' The U.S. Connected Vehicle Rule — which blocked Polestar from the U.S. market this week — applies to any vehicle with Chinese software or hardware, regardless of where it is assembled. A BYD built in Ontario is still a Chinese-owned vehicle under the rule. For Canadian shop owners: Chinese EVs will be in Canadian driveways by Q4 2026. Service readiness is not optional.",
    whyItMatters: "The Chinese EV arrival in Canada has five direct implications for Canadian shop owners: (1) BYD, Chery, and Geely are not Tesla. Their service models are not yet established in Canada. Early adopters will need service — and the OEM dealer networks will be thin. Independent shops with EV diagnostic capability (particularly battery management system access and high-voltage safety training) will have a first-mover advantage. (2) BYD's Flash Charging network is being built in Canada right now — 1,500 kW chargers, -30°C capable, 250 km in 5 minutes. The charging infrastructure is arriving before the vehicles. (3) The U.S. Connected Vehicle Rule means Chinese EVs will be a Canada-only market for the foreseeable future. They will not be exported to the U.S. This limits their resale value and their long-term market penetration — but it does not stop them from arriving in Canadian driveways in 2026. (4) Industry Minister Joly's 'four conditions' (majority Canadian JV, Canadian parts, Canadian labour, data security) are designed to extract manufacturing investment from Chinese OEMs — not to keep them out. The government wants them to build here. (5) The practical question for your shop: which Chinese EV brands are most likely to succeed in Canada? BYD is the best-capitalized and most aggressive. Chery has the most dealer momentum. Geely (via Lotus) has the premium positioning. Plan your training and tooling investments accordingly.",
    source: "CTV News / Seoul Economic Daily — June 25–27, 2026",
    sourceUrl: "https://www.ctvnews.ca/business/autos/article/chinas-carmakers-rush-to-canada-as-a-practice-run-for-us-sales/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "DEALERSHIP CONSOLIDATION / KERRIGAN / RETAIL",
    tagColor: "#7c3aed",
    headline: "Dealership Buy-Sells Jump 21% in Q1 2026 — Consolidation Hits Another Record — What It Means for Independent Shops",
    summary: "Dealership buy-sell activity accelerated sharply in the first quarter of 2026, extending an unprecedented run of consolidation across automotive retail, according to Kerrigan Advisors' First Quarter 2026 Blue Sky Report, published this week. Dealership transactions increased 21% year over year in Q1 2026 — the highest quarterly increase in the modern era of automotive retail consolidation. The CBT News weekly roundup (June 27) flagged the report as the most significant retail automotive story of the week. The consolidation wave is being driven by three forces: (1) Large dealer groups are acquiring smaller ones at record pace, using tariff uncertainty as leverage to negotiate lower prices from sellers who fear a prolonged downturn. (2) Private equity is entering the Canadian and U.S. dealer market at scale, attracted by the cash flow characteristics of dealer service departments. (3) The tariff environment has accelerated the exit of smaller, single-point dealers who lack the capital reserves to weather a prolonged 25% auto tariff. In parallel: CarGurus will require all dealers to disclose all applicable fees on used-vehicle listings starting July 14 — expanding its all-in pricing initiative as fee transparency becomes an increasingly important industry standard. Slate Auto (Bezos-backed) debuted a $24,950 all-electric pickup — one of the cheapest new vehicles in America — signalling that the affordability gap in the EV market is being addressed from below, not above. UAW and automakers are clashing over AI and robotics in U.S. factories — a preview of what Unifor will face in future rounds of Detroit Three bargaining.",
    whyItMatters: "The 21% jump in dealership buy-sells has three direct implications for Canadian independent shop owners: (1) The dealerships that are buying and selling are also expanding their service departments. Large dealer groups invest heavily in express service, quick-lube, and tire operations — the same revenue streams that independent shops depend on. The competitive pressure from dealer service centres is intensifying at the same time that parts costs are rising and Chinese EVs are introducing new service complexity. (2) The CarGurus fee disclosure requirement (July 14) is a signal that the used-car market is moving toward all-in pricing transparency. This is good for consumers — but it also means that shops that rely on opaque pricing for service work will face increasing pressure to be transparent about labour rates and parts markups. The trend is toward price transparency across the automotive retail ecosystem. (3) The Slate Auto $24,950 EV pickup is the most important affordability signal in the EV market this year. If Bezos-backed Slate can deliver a $24,950 EV pickup, the affordability barrier to EV adoption is falling faster than most Canadian shop owners expect. Plan your EV service training and tooling investments for a 3-5 year horizon, not a 10-year horizon.",
    source: "CBT News Weekly Roundup / Kerrigan Advisors — June 27, 2026",
    sourceUrl: "https://www.cbtnews.com/weekly-roundup-uaw-automakers-clash-over-ai-and-robotics-dealership-buy-sells-jump-21-cargurus-to-require-fee-disclosures/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "EDITION NO. 50 MILESTONE / RETROSPECTIVE",
    tagColor: "#1d4ed8",
    headline: "Edition No. 50: The 10 Stories That Defined the First 50 Editions — And What Comes Next",
    summary: "The Baywash Daily Briefing launched in April 2026 with Edition No. 1. Fifty editions in, the dominant story arc is clear: the 25% U.S. auto tariff imposed February 1, 2025 has triggered a cascade of consequences that is reshaping the Canadian automotive industry in real time. The 10 stories that defined the first 50 editions: (1) Honda suspends $15B EV investment — Alliston's future in question. (2) Stellantis Brampton idle — 6,590 Unifor members affected. (3) GM CAMI (Ingersoll) ends BrightDrop production. (4) Canada accounts for 45% of all tariff-related market share losses among U.S. trading partners. (5) The Gordie Howe Bridge held hostage — $6.4B Canadian investment, no opening date, Moroun donor connection. (6) The G7 hot mic — Carney gets Trump's 'That's good. I like that.' on the Chinese EV cap. (7) CVMA to Ottawa: scrap the China EV deal — 'There is no Canadian auto sector without the U.S.' (8) Unifor-Ford bargaining opens — 'Most consequential talks of our lifetimes.' (9) Chinese EVs arrive — BYD, Chery, Geely, Lotus, Changan all moving into Canada. (10) RBC 'Steering Through Uncertainty': four scenarios to 2040 — current trajectory is 'Off-Ramp.' What comes next: July 1 CUSMA trilateral meeting (4 days), Unifor-Ford July 10 deadline (13 days), September 20 contract expiry (85 days). The story is not over — it is accelerating.",
    whyItMatters: "The first 50 editions of the Baywash Daily Briefing have tracked the most consequential period in Canadian automotive history since the 2008-2009 financial crisis. Here is the state of play for Canadian shop owners as of June 27, 2026: (1) The 25% U.S. auto tariff is not going away July 1. The CUSMA trilateral meeting is the beginning of a process, not the end. Plan for the tariff to remain through at least Q3 2026 — and possibly through 2027. (2) Unifor-Ford bargaining will set the pattern for GM and Stellantis. A strong Ford deal with production commitments is the best-case scenario for Canadian auto workers. A work stoppage would affect parts availability within days. (3) Chinese EVs will be in Canadian driveways by Q4 2026. Service readiness is not optional. (4) The Gordie Howe Bridge will likely open before the Michigan primary in August. When it does, the Windsor-Detroit corridor will see a surge in cross-border traffic and trade. (5) The dealership consolidation wave is accelerating. Independent shops need to differentiate on service quality, EV capability, and customer relationships — not on price. The shops that invest in training and tooling now will be the ones that survive the next five years.",
    source: "Baywash Daily Briefing Archive — Editions 1–50, April–June 2026",
    sourceUrl: "https://baywash-daily-briefing.pages.dev",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇨🇳",
    text: "BYD has begun Transport Canada certification for the Seal sedan and Atto 3 SUV. Chery's first Canadian dealer meeting happened two weeks after Carney's January announcement. Lotus (Geely) is opening 6 Canadian stores. Changan has a dedicated Canada team. All four are using Canada as a practice run for the U.S. market — which the Connected Vehicle Rule currently blocks them from.",
    sourceUrl: "https://www.ctvnews.ca/business/autos/article/chinas-carmakers-rush-to-canada-as-a-practice-run-for-us-sales/",
  },
  {
    icon: "🤝",
    text: "Unifor-Ford bargaining is now in Day 6 in downtown Toronto. The July 10 tentative deal target is 13 days away. Ford has not yet publicly responded to Unifor's production commitment demand for Windsor Assembly and Oakville. A work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts availability within days.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-launches-negotiations-ford-motor-company",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge: Michigan Democratic Senate candidate Mallory McMorrow's $400,000+ TV/digital ad campaign is running in the Detroit market. Republican Mike Rogers is also using the bridge. Michigan primary is in August. Trump now has a domestic political reason to open the bridge before then. The bridge cost Canada $6.4B — 100% Canadian-funded including the U.S. port of entry.",
    sourceUrl: "https://www.thestar.com/business/gordie-howe-international-bridge-delay-becomes-flashpoint-in-michigan-senate-race-could-it-force-trumps-hand/article_6c3de7be-e470-4011-9c67-8e6f84785b26.html",
  },
  {
    icon: "📅",
    text: "July 1 CUSMA trilateral meeting is 4 days away. Canada and the U.S. have had zero formal bilateral negotiating sessions. U.S. Ambassador Hoekstra: 'We're not anywhere close on a new CUSMA framework.' The July 1 meeting is virtual and trilateral — it is the beginning of the process, not the end. The 25% auto tariff will not be removed on July 1.",
    sourceUrl: "https://www.cp24.com/news/canada/2026/06/20/canada-to-meet-with-us-and-mexico-on-july-1-for-cusma-review/",
  },
];

const tipOfTheDay = {
  title: "Chinese EVs Are Coming to Your Shop — Whether You're Ready or Not",
  text: "BYD, Chery, and Geely will have vehicles in Canadian driveways by Q4 2026. Their service networks will be thin. Independent shops with EV diagnostic capability, high-voltage safety training, and a willingness to work on unfamiliar platforms will have a first-mover advantage. Start now: identify which Chinese EV brands are most likely to succeed in your market, research their service requirements, and contact your tool supplier about diagnostic compatibility. The shops that prepare now will be the ones that capture the Chinese EV service market in 2027.",
};

const quoteOfTheDay = {
  text: "We cannot sit idly by and hope for the situation to get better. Our job is to get the best possible deal for our members now.",
  author: "John D'Agnolo",
  title: "Unifor Chairperson, Ford Master Bargaining Committee — June 22, 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth Superbird — Tor-Red, 440 Six Pack, Ontario-Plated",
  description: "The 1970 Plymouth Superbird is the most aerodynamically extreme production car ever built for the street. Plymouth built it for one reason: to homologate it for NASCAR, where Richard Petty needed a car that could beat the Ford Talladega and Mercury Spoiler on the superspeedways. The result was a car with a 23-inch rear wing standing 24 inches above the trunk lid, a pointed nose cone extending 19 inches beyond the front bumper, and a flush-mounted rear window. The wing was not decorative — at speed, it generated significant downforce. The 440 Six Pack (three two-barrel carburetors) produced 390 horsepower officially, with the 426 Hemi option producing 425 horsepower. Plymouth built 1,920 Superbirds for the 1970 model year — enough to satisfy NASCAR's homologation requirement of one car per dealer. Many dealers were baffled by the car and could not sell them. Some were converted back to standard Road Runner spec. The ones that survived in original condition are among the most valuable muscle cars in existence. A documented 1970 Superbird with the 440 Six Pack in Tor-Red with an Ontario plate is worth between $250,000 and $500,000 depending on condition and matching numbers. The Hemi version has sold for over $1 million at auction. It is the most impractical car Plymouth ever built for the street — and the most magnificent.",
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
                {["CHINESE EVS INVADE", "BUY-SELLS +21%", "EDITION 50 MILESTONE", "SUPERBIRD"].map((tag) => (
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
              alt="Chinese EVs Use Canada as Bridgehead for U.S. Market — Baywash Daily Briefing Edition No. 51"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Saturday Edition — No. 51</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Chinese EVs Use Canada as a Bridgehead — BYD, Chery, Geely, Lotus, Changan All Moving In
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
