/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 26;
const BRIEFING_DATE = "June 2, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/WLkBqJaXUTTOvKZj.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SzcvVayjJwfVUoeZ.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YrvdGsrmKjWCLDXr.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/kPrjAtovONvKaJoV.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wFZZeosHAvpSwAxe.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TRADE POLICY",
    tagColor: "#e05a1a",
    headline: "CUSMA July 1: The U.S. Could Walk Away Entirely — What That Actually Means for Canadian Auto Shops",
    summary: "Most media coverage of the July 1 CUSMA review deadline describes it as a 'technical review' — a routine checkpoint. Toronto Sun columnist Brian Lilley published a detailed analysis on June 1 explaining why that framing is dangerously misleading. The actual treaty text is unambiguous: 'A Party may withdraw from this Agreement by providing written notice of withdrawal to the other Parties. A withdrawal shall take effect six months after a Party provides written notice to the other Parties.' If the United States triggers withdrawal on July 1, Canada and Mexico would have a free trade agreement with each other — but Canada's $419.7 billion in annual exports to the United States (2024 figure) would lose their preferential access by the end of 2026. The best-case scenario, Lilley argues, is that the Americans opt for annual reviews rather than a 16-year extension — which would add 'a deep amount of uncertainty to the Canadian economy' for the next decade. The Washington Trade & Tariff Letter (June 1) confirmed that the U.S. and Mexico have completed Round 1 (Mexico City, May 28-29), have Round 2 scheduled for June 16-17 in Washington, and Round 3 for the week of July 20 in Mexico City. Canada has no comparable public negotiating schedule. The sharpest new development from the Mexico City round: U.S. negotiators tabled a proposal to raise North American vehicle content to 82% (from 75%) with 50% specifically from the U.S. — and the proposed calculation would not count Canadian parts and vehicle content at all. USTR Greer has separately stated that U.S. tariffs on Canadian goods will remain in place even after a revised CUSMA is agreed.",
    whyItMatters: "Here is the specific scenario every Canadian shop owner needs to understand: If the U.S. triggers withdrawal on July 1, Canada has until approximately January 1, 2027 before preferential access ends. In that six-month window, OEMs will begin making contingency decisions about Canadian production — and parts suppliers will begin repricing. The 82%/50% content proposal is equally significant: if Canadian content is excluded from the calculation entirely, vehicles built in Canada that use Canadian parts will face 25% tariffs when exported to the U.S. That makes Canadian-built vehicles more expensive in the U.S. market, which reduces OEM incentive to build in Canada, which reduces the number of new vehicles entering the Canadian fleet, which increases the age and mileage of the vehicles your customers are driving. Older, higher-mileage vehicles need more service. The service opportunity is real — but it comes with supply chain risk as parts for older vehicles become harder to source. The 29 days between today and July 1 are the most consequential period for Canadian automotive trade policy in a generation.",
    source: "Toronto Sun / Washington Trade & Tariff Letter / CBT News / BNN Bloomberg",
    sourceUrl: "https://torontosun.com/opinion/columnists/cusma-could-blow-up-usa-walks-away",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SUPPLY CHAIN",
    tagColor: "#dc2626",
    headline: "UAW Strikes American Axle/Dauch in Michigan — GM Has 2 Weeks of Silverado/Sierra Axle Inventory Before Production Halts",
    summary: "The United Auto Workers launched a strike at midnight Monday at American Axle's Three Rivers, Michigan facility — now rebranded as Dauch Corp. following its acquisition of Dowlais — after contract negotiations failed to reach a new agreement by the deadline. UAW Local 2093 represents nearly 1,000 workers at the plant, which manufactures drive axles for the Chevrolet Silverado and GMC Sierra pickup trucks. The Silverado and Sierra are GM's top-selling vehicles, accounting for nearly one-third of the company's U.S. sales. According to two sources with direct knowledge of the matter cited by Reuters, GM has approximately two weeks of axle inventory on hand before truck production would be forced to halt. GM said it was 'closely monitoring the situation and assessing any potential impact.' Dauch stock fell approximately 6% on the news; GM shares were down about 2% in afternoon trading Monday. The UAW is pushing for wage increases after workers made significant concessions during the 2008 financial crisis — a strike that lasted 89 days and cost GM nearly $3 billion. Top wage earners at the Three Rivers plant currently make $22 per hour, down from as much as $29 per hour in 2008. Workers voted 98% in favour of authorizing a strike in early May. The labour dispute comes as American Axle/Dauch recently completed its acquisition of Dowlais and announced plans to rebrand as Dauch Corp. The Three Rivers plant is one of the most strategically critical single-point-of-failure facilities in GM's North American truck supply chain.",
    whyItMatters: "The Silverado and Sierra are the most serviced vehicles in Canadian independent shops. A production halt at GM's truck plants — which would begin in approximately two weeks if the strike is not resolved — would have two direct effects on your business. First, new truck inventory would dry up, pushing customers toward the used market and keeping existing trucks on the road longer. That is a service opportunity. Second, GM OEM parts for Silverado and Sierra models could face allocation pressure as GM's supply chain teams prioritize parts for vehicles already in production. If you have Silverado or Sierra customers with upcoming scheduled maintenance, consider reaching out proactively to book their appointments now — before any parts availability issues develop. The 2008 American Axle strike lasted 89 days. If this strike follows a similar trajectory, the ripple effects on GM truck production and parts availability will be felt well into August.",
    source: "Reuters / CBT News / Crain's Detroit / WSJ / UAW Local 2093",
    sourceUrl: "https://wtvbam.com/2026/06/01/gm-supplier-strike-could-impact-truck-production/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "INFRASTRUCTURE",
    tagColor: "#2563eb",
    headline: "Gordie Howe Bridge Is Structurally Complete and Days From Opening — But Trump Is Blocking It Over Trade Demands",
    summary: "The $4.7 billion Gordie Howe International Bridge spanning the Detroit River between Windsor, Ontario and Detroit, Michigan is structurally complete and within days of finishing all systems testing, according to two sources with direct knowledge of the construction progress cited by The Detroit News (May 30, 2026). The bridge and its customs plazas on both sides of the river are ready — but the opening is being held hostage by a political standoff with President Trump, who is demanding trade concessions or a share of toll revenue before authorizing the U.S. side to open. The Windsor-Detroit corridor handles approximately $50 billion in annual trade, the majority of which is automotive parts and finished vehicles moving between Canadian and American assembly plants. The Ambassador Bridge — the current single crossing — handles roughly $400 million in trade per day and has been operating at or near capacity for years. Mapping apps including Google Maps and Apple Maps have already begun routing motorists to the Gordie Howe Bridge as if it were open, creating confusion and safety concerns as drivers arrive at a bridge that is not yet accepting traffic. Windsor Mayor Drew Dilkens has publicly stated he would rather keep the bridge closed than accept a bad trade deal — a position that reflects the broader Canadian posture of using infrastructure leverage in CUSMA negotiations.",
    whyItMatters: "The Gordie Howe Bridge is the most important piece of automotive supply chain infrastructure in North America that does not yet exist — and it is days away from existing. When it opens, it will double the crossing capacity between Windsor and Detroit, which is the single most critical chokepoint in the Canada-U.S. automotive parts supply chain. For Canadian shops, the bridge's opening will reduce the frequency of border delay-related parts shortages — a chronic problem that affects same-day and next-day parts orders from U.S. distributors. The political standoff over the opening is a live risk: if Trump uses the bridge as a bargaining chip in CUSMA negotiations, the opening could be delayed by weeks or months. Watch for any announcement from the White House or Transport Canada about the opening date — it will be a significant positive signal for parts availability across Ontario.",
    source: "The Detroit News / CBC Windsor / CityNews Kitchener / Windsor Star",
    sourceUrl: "https://www.detroitnews.com/story/news/politics/2026/05/30/gordie-howe-bridge-nearing-completion-when-will-it-open/90315425007/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📋",
    text: "The CUSMA treaty text is explicit: any party can withdraw with six months' notice, effective from the date of notice. If the U.S. triggers withdrawal on July 1, 2026, Canada's preferential access to the U.S. market ends on approximately January 1, 2027. The 'best-case' scenario, per Toronto Sun analysis, is annual reviews — which means CUSMA uncertainty continues until the agreement's 2036 expiry. There is no scenario in which July 1 produces a clean, stable outcome for Canada.",
    sourceUrl: "https://torontosun.com/opinion/columnists/cusma-could-blow-up-usa-walks-away",
  },
  {
    icon: "🔧",
    text: "The UAW's 2008 strike against American Axle lasted 89 days and cost GM nearly $3 billion in lost production. If this strike follows a similar trajectory, GM truck production halts would begin in approximately two weeks and could last through August. The Chevrolet Silverado and GMC Sierra are the most serviced vehicles in Canadian independent shops. Proactively contact your Silverado/Sierra customers now to book upcoming maintenance before any parts availability issues develop.",
    sourceUrl: "https://wtvbam.com/2026/06/01/gm-supplier-strike-could-impact-truck-production/",
  },
  {
    icon: "🌉",
    text: "Mapping apps are already routing motorists to the Gordie Howe Bridge as if it were open. CBC Windsor reported that Google Maps and Apple Maps are directing drivers to the bridge, which is not yet accepting traffic. This is creating safety concerns at the Windsor customs plaza. If you have customers or suppliers who cross the Windsor-Detroit border regularly, advise them to verify crossing availability before departing — the bridge is not open despite what their navigation app may say.",
    sourceUrl: "https://www.cbtnews.com/trade-vehicle-content-requirements/",
  },
  {
    icon: "🏭",
    text: "The U.S. CUSMA proposal would exclude Canadian content from vehicle content calculations entirely — meaning a vehicle built in Windsor using 100% Canadian parts would have zero 'qualifying' content under the new U.S. formula. This is not a negotiating position; it is a tabled proposal that was discussed in the Mexico City round. The downstream effect: OEMs would have a structural incentive to source parts from the U.S. rather than Canada, regardless of cost or quality, to meet the 50% U.S.-origin threshold.",
    sourceUrl: "https://www.cbtnews.com/trade-vehicle-content-requirements/",
  },
];

const tipOfTheDay = {
  title: "The GM Truck Strike Clock Is Running — Contact Your Silverado/Sierra Customers This Week",
  text: "GM has approximately two weeks of Silverado/Sierra axle inventory before production halts. Here is your action plan: First, pull a list of your Silverado and Sierra customers who have upcoming scheduled maintenance in the next 60 days. Second, call or text them this week to book their appointments now — frame it as proactive customer service, not urgency. Third, check your current inventory of common Silverado/Sierra wear items: brake pads, rotors, filters, belts, and fluids. Fourth, place a supplemental order with your parts distributor for these items this week, before any allocation pressure develops. Fifth, if the strike extends beyond two weeks and GM halts truck production, expect used Silverado/Sierra prices to rise — which means your customers will hold their trucks longer, creating more service work. The strike is a short-term supply risk and a medium-term service opportunity. Act on both.",
};

const quoteOfTheDay = {
  text: "Most media won't tell you these details — they will tell you this is a technical review. But it is much more than that. On July 1, we could actually be told that the United States is walking away from CUSMA, and if they do that, it would take effect by the end of this year.",
  author: "Brian Lilley",
  title: "Toronto Sun Columnist — June 1, 2026",
};

const rideOfTheDay = {
  name: "1970 Dodge Challenger R/T 440 Six Pack — The E-Body Mopar That Defined an Era",
  description: "The 1970 Dodge Challenger was Chrysler's answer to the Ford Mustang and Chevrolet Camaro — a pony car built on the new E-body platform that was wider, longer, and more aggressively styled than anything Detroit had produced. The R/T (Road/Track) package with the 440 Six Pack engine — three two-barrel carburetors feeding a 440 cubic inch V8 — produced 390 horsepower and 490 lb-ft of torque. The Six Pack setup was Chrysler's answer to the Chevrolet 454 LS6 and Ford Boss 429: maximum displacement, maximum airflow, maximum torque. The Challenger R/T was available with the 440 Six Pack, the 440 Magnum, or the legendary 426 Hemi — making it one of the most engine-option-rich muscle cars ever built. The 1970 model year was the Challenger's debut and its finest hour: 76,935 units were built, and the car appeared in the film 'Vanishing Point' in 1971, cementing its place in American automotive mythology. The Plum Crazy Purple colour — officially called FC7 — was one of Chrysler's 'High Impact' colours introduced in 1970, designed to make the car impossible to ignore on the street. On a Monday morning when Canadian automotive trade policy is at its most uncertain in a generation, the Challenger R/T in Plum Crazy Purple is a reminder that sometimes the most powerful statement is simply showing up.",
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
                {["TRADE", "LABOUR", "SUPPLY", "INFRA"].map((tag) => (
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
              alt="Gordie Howe International Bridge complete but empty at sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#dc2626] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">29 Days to Deadline</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Gordie Howe Bridge Complete, GM Strike Begins, CUSMA Withdrawal Now On the Table — The Week That Changes Everything
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
