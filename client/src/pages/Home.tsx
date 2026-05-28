// 2026-05-28
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 21;
const BRIEFING_DATE = "May 28, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/BAxtEhEyiFVXXsWa.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xdPlZrQpOspMSlVU.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wbGudRJyYacmFNFA.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TImSYXCasSiBdbft.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mtDFxiJEOMKfwWqS.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TRADE POLICY",
    tagColor: "#2563eb",
    headline: "CUSMA Review Opens Formally in Mexico City — Canada Is on the Sidelines as Washington Warms to Mexico, and U.S. Trade Czar Says Tariffs on Canada Are Here to Stay Regardless of the Outcome",
    summary: "The first formal bilateral negotiating round of the CUSMA/USMCA Joint Review opened in Mexico City on May 27, with sessions running through May 29 at Mexico's Ministry of Economy. The U.S. side is led by Deputy U.S. Trade Representative Jeff Goettman, accompanied by 60 business representatives and a bipartisan group of House Ways and Means Committee members. Two additional rounds have already been scheduled: Washington, D.C. on June 16-17, and Mexico City again during the week of July 20. The talks are structured around a three-round process intended to determine whether the agreement is extended to 2042 or enters a decade of annual renegotiations. Mexico's Economy Minister Marcelo Ebrard has acknowledged that a clean 16-year extension by the July 1 deadline is unlikely, warning that 'we will probably end up going to non-conclusive reviews over the next 10 years.' USTR Jamieson Greer echoed that view, saying 'I think we probably will not resolve all the issues by July 1.' The critical context for Canada: the U.S. has not started formal negotiations with Canada at all. Greer said Canada is in a 'different spot' and it is 'hard to see where that ends.' Washington's posture toward Mexico has been notably warmer — insiders describe the Mexicans as 'doing everything right' while Canadians are 'doing everything wrong,' a perception driven in part by Carney's January deal to allow 49,000 Chinese EVs into Canada at a reduced tariff rate. Greer separately confirmed that tariffs on Canada will remain in place even if CUSMA is renewed — pointing to sectoral tariffs on steel, aluminum, and automobiles as separate from the CUSMA framework. He repeated Trump's well-known question: 'Why do we make cars in Canada?' The CUSMA framework currently shields 85% of Canada-U.S. trade from blanket tariffs, but sectoral auto tariffs of 25% on vehicles and parts not meeting CUSMA rules of origin are already in effect.",
    whyItMatters: "The CUSMA review is the single most consequential trade event of 2026 for the Canadian automotive aftermarket. The 85% tariff-free umbrella that currently protects most Canada-U.S. trade is at risk if Canada cannot reach an agreement before the July 1 deadline triggers annual review mode. For shops, the practical risk is a further escalation of parts costs on top of the sectoral tariffs already in place. The ATB Economics analysis released this week is sobering: vehicles and vehicle parts are the single largest category of Canadian merchandise imports from the U.S., accounting for a significant share of the roughly $362 billion Canada imported from the U.S. last year. If Most-Favoured-Nation tariffs replace CUSMA's zero-tariff treatment on those imports, parts costs for shops sourcing from U.S. distributors would rise materially. The action for shops right now: review your top 20 parts by spend, identify which are sourced from U.S. distributors, and assess whether Canadian or offshore alternatives exist at comparable quality and lead time. This is not panic-buying — it is supply chain intelligence.",
    source: "Mexico Business News / CKOM / ATB Economics / Automotive News",
    sourceUrl: "https://mexicobusiness.news/trade-and-investment/news/first-usmca-joint-review-round-opens-mexico-city",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SUPPLY CHAIN",
    tagColor: "#e05a1a",
    headline: "Synthetic Motor Oil Shortage Hits Mainstream Grades — 0W-20 Sold Out at Retail in Detroit, Nissan Rationing Customers, and the Independent Lubricant Manufacturers Association Says Mid-2027 Is the Earliest Resolution",
    summary: "The synthetic motor oil shortage that began with exotic low-viscosity grades has now moved decisively into mainstream territory. Automotive News confirmed on May 26 that supplies of 0W-20 — the most widely specified oil weight for vehicles built in the last decade, used in virtually every Toyota, Honda, and Subaru sold in Canada — were sold out at a Detroit-area Target store as of May 23. The Independent Lubricant Manufacturers Association (ILMA), led by CEO Holly Alfano, expects shortages to become visible to consumers by early July 2026 and projects the disruption will last until mid-2027 at the earliest. The root cause is the conflict in the Strait of Hormuz region, which disrupted the supply of Group III base oil — the feedstock for most synthetic motor oil sold in North America. Group III base oil is primarily produced in South Korea, the Middle East, and Europe, and the Middle Eastern supply disruption has created a cascading shortage that refinery economics make difficult to quickly resolve: Group III production requires specialized refinery configurations that cannot be rapidly repurposed. Nissan has already moved to ration oil to prioritize specific customers — a step that signals the shortage has reached the point where OEM service networks are managing allocation. Automotive News reports that major automakers and retailers have begun rationing as of May 2026. The shortage affects 5W-30 and 0W-20 most acutely — the two most common oil weights in Canadian passenger vehicle service bays.",
    whyItMatters: "This is the most operationally urgent story in today's briefing for shop owners. The 0W-20 shortage is no longer a future risk — it is a present reality at retail, and it will reach shop supply chains within weeks if it has not already. The practical actions are clear: First, audit your current 0W-20 and 5W-30 inventory today and calculate how many oil changes you can complete at your current pace before you run out. Second, contact your oil supplier immediately and ask directly about allocation status, lead times, and whether they are rationing. Third, consider whether you can source from a secondary supplier as a backup. Fourth, review your oil change pricing — if your cost per litre is rising, your labour and parts margin on oil changes is being compressed, and you need to adjust your menu pricing to reflect the new cost reality. Fifth, communicate proactively with your fleet customers who rely on scheduled oil changes: give them advance notice that you may need to substitute an equivalent approved oil weight if their specified grade becomes unavailable. Shops that manage this proactively will retain customer trust; shops that are caught flat-footed will lose it.",
    source: "Automotive News / ILMA / GM Authority / Ram Forum",
    sourceUrl: "https://www.autonews.com/retail/service-and-parts/an-synthetic-motor-oil-shortage-cb-0526/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GOVERNMENT POLICY",
    tagColor: "#16a34a",
    headline: "Carney's Five-Pillar Canadian Auto Strategy: $3B Strategic Response Fund, 100% Investment Expensing, Doubled GHG Standards, and a Bet That Canada Can Build the EV Battery Supply Chain of the Future",
    summary: "Prime Minister Mark Carney unveiled Canada's new automotive strategy on February 5, 2026, at Martinrea International's facility in Vaughan, Ontario — and the details of that strategy are now being implemented across the federal government's Spring 2026 economic update. The strategy rests on five pillars: accelerating investment in Canadian auto manufacturing; rationalizing emission reduction policies; strengthening domestic demand for EVs; establishing a comprehensive trade regime; and protecting Canadian auto workers. The investment pillar is the most immediately significant for the industry: the government is dedicating $3 billion from the Strategic Response Fund and $100 million from the Regional Tariff Response Initiative to help businesses respond to trade disruptions, retool plants, and expand into new markets. The new Productivity Super Deduction reduces Canada's marginal effective tax rate on investment to 13% — more than four percentage points lower than the United States — and allows businesses to immediately expense 100% of investments in manufacturing machinery, buildings, zero-emission vehicles, clean energy equipment, scientific R&D, and productivity-enhancing assets. On emissions, the strategy replaces the Electric Vehicle Accessibility Standards (EVAS) with more stringent vehicle GHG standards that will more than double in stringency by 2035, targeting the equivalent emissions reduction of a 75% EV adoption rate. The strategy also targets a 90% EV adoption equivalent by 2040. Carney noted that Canada is one of the only countries in the world with everything required for a complete EV battery supply chain: critical minerals, an 80% clean electricity grid, the lowest residential electricity costs in the G7, and world-leading AI and robotics capabilities. The strategy explicitly positions Canada as a competitor to the United States for automotive investment — not just a supplier to it.",
    whyItMatters: "For independent shop owners, the Carney auto strategy has both short-term and long-term implications. In the short term, the $3 billion Strategic Response Fund includes provisions for businesses in sectors affected by U.S. tariffs — which includes shops that source parts from U.S. distributors and are seeing cost increases. The 100% immediate expensing of manufacturing machinery and equipment is directly applicable to shops investing in new lifts, alignment equipment, diagnostic tools, or shop infrastructure: if you were planning a capital investment in 2026 or 2027, the tax treatment has materially improved. In the longer term, the strategy's bet on Canada as an EV battery supply chain hub means that the Canadian automotive sector is being positioned for a future that includes more EVs — which will eventually change the service mix in your bays. The shops that are building EV service capability now — high-voltage safety training, EV-specific diagnostic equipment, battery health assessment tools — are positioning themselves for the fleet that will be on Canadian roads in 2030 and beyond. The strategy also signals that the federal government views the Canadian auto sector as strategically important enough to defend with significant public investment, which provides some confidence that the manufacturing base that generates your service customers will remain in Canada.",
    source: "PM.gc.ca / Spring Economic Update 2026 / Martinrea / APMA",
    sourceUrl: "https://www.pm.gc.ca/en/videos/2026/02/05/prime-minister-carney-announces-new-strategy-transform-canadas-auto-industry",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🤖",
    text: "Torc Robotics — a subsidiary of Daimler Truck North America — announced a strategic partnership with Mila (Quebec Artificial Intelligence Institute) on May 26 to develop autonomous trucking technology in Canada. Torc will establish a research presence at Mila in Montreal, tapping into one of the world's leading machine learning research centres. For shops: autonomous trucking is a long-term disruption to the commercial vehicle service model, but the near-term reality is that the trucks on Canadian roads today — and for the next decade — are fully conventional and require skilled technicians. The Torc-Mila partnership is a signal that Canada is positioning itself as an autonomous vehicle R&D hub, which may create long-term opportunities for shops that develop diagnostic capabilities for advanced driver assistance systems (ADAS).",
    sourceUrl: "https://www.marklines.com/en/news/345213",
  },
  {
    icon: "⛽",
    text: "Gas prices in Canada remain elevated in May 2026, with the national average above $1.80/litre in most provinces. Honda Canada reports that hybrid models now represent nearly one-third of its brand sales in Canada year-to-date — the highest hybrid share in Honda's Canadian history. The Civic Hybrid, CR-V Hybrid, and Accord Hybrid are all seeing strong demand. For shops: the growing hybrid fleet in Canada means more hybrid-specific service work is coming — particularly hybrid battery health assessments, regenerative brake system service, and the unique cooling system requirements of hybrid powertrains. CARS training has hybrid-specific modules; now is the time to invest.",
    sourceUrl: "https://www.autonews.com/honda/an-honda-tftt-lance-woelfer-0527/",
  },
  {
    icon: "🌐",
    text: "Chinese Foreign Minister Wang Yi is visiting Canada May 28-30 — a follow-up to Carney's January visit to Beijing. The visit is expected to advance discussions on trade, investment, and the 49,000-unit annual quota for Chinese-built EVs at the reduced 6.1% tariff rate. The U.S. has cited Carney's China deal as a key reason for the cooler tone in Canada-U.S. trade relations. For shops: the geopolitical context matters because it affects the CUSMA outcome — and the CUSMA outcome affects parts costs. Canada's attempt to diversify trade relationships away from the U.S. is a rational long-term strategy, but it creates short-term friction with Washington that is directly reflected in the tariff environment your shop operates in.",
    sourceUrl: "https://canadachinabrief.substack.com/p/special-edition-wang-yi-in-canada",
  },
  {
    icon: "📈",
    text: "ATB Economics published a detailed analysis this week of Canada's merchandise imports from the U.S., noting that vehicles and vehicle parts are the single largest import category — and that Canada's share of imports from the U.S. has fallen to its lowest level since 1990 as Canadian businesses and consumers shift to non-U.S. suppliers in response to tariff uncertainty. The analysis notes that the CUSMA framework currently shields most of this trade from blanket tariffs, but that if CUSMA enters annual review mode after July 1, Most-Favoured-Nation tariffs on U.S. imports would raise costs materially for Canadian importers, manufacturers, and consumers.",
    sourceUrl: "https://www.atb.com/company/insights/the-twenty-four/the-other-lane-may-27-2026/",
  },
];

const tipOfTheDay = {
  title: "Act on the Oil Shortage Now — Audit, Source, Price, and Communicate Before July",
  text: "The synthetic motor oil shortage is no longer a future risk — it is a present reality. The ILMA projects shortages will be visible to consumers by early July 2026. Here is a five-step action plan for this week: (1) Audit your current 0W-20 and 5W-30 inventory and calculate how many oil changes you can complete before you run out. (2) Call your oil supplier today and ask directly: are you on allocation? What are your lead times for 0W-20 and 5W-30? Do you have a secondary source? (3) Identify one backup supplier — a regional distributor or a different brand — that can supply equivalent API-certified oil in the grades you need. (4) Review your oil change pricing. If your cost per litre has risen, your menu price needs to reflect that — do not absorb the increase silently. (5) Send a brief note to your fleet customers now, before July, explaining that you may need to substitute an equivalent approved oil weight if their specified grade becomes unavailable. Proactive communication builds trust; silence builds anxiety.",
};

const quoteOfTheDay = {
  text: "Why do we make cars in Canada?",
  author: "Jamieson Greer",
  title: "U.S. Trade Representative — May 27, 2026, Council on Foreign Relations (repeating Trump's well-known position on Canadian auto production)",
};

const rideOfTheDay = {
  name: "1967 Shelby GT500 — The King of the Road, Carroll Shelby's Most Powerful Mustang",
  description: "The 1967 Shelby GT500 represents the apex of Carroll Shelby's collaboration with Ford on the Mustang platform — and the moment when the Shelby Mustang transitioned from a sports car to a genuine muscle car. The GT500 was powered by Ford's 428 cubic inch Police Interceptor V8, rated at a conservative 355 horsepower but producing considerably more in practice. The 428 PI was chosen over the more exotic 427 because it was more tractable for street use and more durable under sustained load — a pragmatic choice that made the GT500 genuinely usable as a daily driver while still delivering brutal straight-line performance. The 1967 model year brought a significant body revision to the Mustang, with a wider, more aggressive stance that gave Shelby more room to work with. The GT500's fiberglass hood featured twin induction scoops that fed cold air to the 428's dual Holley four-barrel carburetors. The interior was upgraded with additional instrumentation, a roll bar, and a competition-style steering wheel. The 1967 GT500 was the first Shelby Mustang to be built on the wider 1967 Mustang body rather than the original 1965-66 platform, and it established the visual template for the GT500 that would continue through 1970. Today, the 1967 GT500 is among the most desirable of all Shelby Mustangs — particularly in its original Acapulco Blue or Brittany Blue with white Le Mans stripes livery — and represents one of the most recognizable icons of the American muscle car era.",
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
              <h2 className="font-['Oswald'] text-6xl md:text-8xl font-bold leading-[0.9] uppercase">
                The Daily <br />
                <span className="text-[#e05a1a]">Briefing.</span>
              </h2>
            </div>
            <div className="md:w-1/3 text-right">
              <p className="text-sm text-gray-600 leading-relaxed italic">
                "The essential morning intelligence for the Canadian automotive professional.
                Curated daily for shop owners, technicians, and industry leaders."
              </p>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <AnimatedSection className="mb-16">
          <div className="relative group overflow-hidden bg-[#1a1a1a]">
            <img
              src={HERO_BANNER}
              alt="CUSMA/USMCA Review Opens in Mexico City — Canada on the Sidelines"
              className="w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
              <span className="inline-block bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                Top Intelligence
              </span>
              <h3 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-white leading-tight uppercase mb-4">
                CUSMA Talks Open Without Canada, Oil Shelves Empty, and Carney Bets $3B on Canada's Auto Future
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Three stories converge today that will shape the operating environment for Canadian shops for the next 12 to 24 months — and all three require action, not just awareness.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Lead Stories */}
          <div className="lg:col-span-8 space-y-16">
            {stories.map((story, index) => (
              <AnimatedSection key={story.id} delay={index * 100}>
                <article className="group">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="relative overflow-hidden aspect-[4/5]">
                        <img
                          src={story.image}
                          alt={story.headline}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div
                          className="absolute top-0 left-0 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest"
                          style={{ backgroundColor: story.tagColor }}
                        >
                          {story.tag}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-['Oswald'] text-3xl font-bold leading-tight uppercase mb-4 group-hover:text-[#e05a1a] transition-colors">
                        {story.headline}
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {story.summary}
                      </p>
                      <div className="bg-[#f0ebe0] border-l-4 border-[#e05a1a] p-4 mb-6">
                        <h5 className="font-bold text-xs uppercase tracking-widest mb-2">Why it matters for your shop:</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {story.whyItMatters}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-['Source_Code_Pro'] text-[10px] text-gray-400 uppercase tracking-widest">
                          Source: {story.source}
                        </span>
                        <a
                          href={story.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold uppercase tracking-widest text-[#e05a1a] hover:underline"
                        >
                          Read Full Report →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Quick Hits */}
            <AnimatedSection className="bg-[#1a1a1a] text-white p-8">
              <h4 className="font-['Oswald'] text-2xl font-bold uppercase tracking-tight mb-8 border-b border-gray-700 pb-4">
                Quick Hits
              </h4>
              <div className="space-y-8">
                {quickHits.map((hit, i) => (
                  <div key={i} className="group">
                    <div className="flex gap-4 mb-2">
                      <span className="text-xl">{hit.icon}</span>
                      <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        {hit.text}
                      </p>
                    </div>
                    <a
                      href={hit.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-['Source_Code_Pro'] text-gray-500 uppercase tracking-widest hover:text-[#e05a1a]"
                    >
                      View Source
                    </a>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Tip of the Day */}
            <AnimatedSection className="border-2 border-[#e05a1a] p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#e05a1a] flex items-center justify-center text-white font-bold">!</div>
                <h4 className="font-['Oswald'] text-xl font-bold uppercase tracking-tight">Tip of the Day</h4>
              </div>
              <h5 className="font-bold text-lg mb-3">{tipOfTheDay.title}</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tipOfTheDay.text}
              </p>
            </AnimatedSection>

            {/* Quote of the Day */}
            <AnimatedSection className="bg-[#f5f0e8] border border-gray-200 p-8 relative">
              <span className="absolute top-4 left-4 text-6xl text-gray-200 font-serif leading-none">"</span>
              <div className="relative z-10">
                <p className="text-lg italic text-gray-700 leading-relaxed mb-6">
                  {quoteOfTheDay.text}
                </p>
                <div>
                  <p className="font-bold text-sm uppercase tracking-widest">{quoteOfTheDay.author}</p>
                  <p className="text-xs text-gray-500">{quoteOfTheDay.title}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Ride of the Day */}
            <AnimatedSection className="group">
              <h4 className="font-['Oswald'] text-2xl font-bold uppercase tracking-tight mb-6">Ride of the Day</h4>
              <div className="overflow-hidden bg-[#1a1a1a] mb-4">
                <img
                  src={rideOfTheDay.image}
                  alt={rideOfTheDay.name}
                  className="w-full aspect-video object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h5 className="font-bold text-xl mb-2">{rideOfTheDay.name}</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                {rideOfTheDay.description}
              </p>
            </AnimatedSection>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16 px-6 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
            <div>
              <h4 className="font-['Oswald'] text-xl font-bold uppercase mb-6">About the Briefing</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Baywash Daily Briefing is a premium intelligence service for the Canadian automotive aftermarket.
                We provide daily updates on trade, technology, and labor trends that matter to your business.
              </p>
            </div>
            <div>
              <h4 className="font-['Oswald'] text-xl font-bold uppercase mb-6">Quick Links</h4>
              <ul className="text-sm text-gray-400 space-y-3">
                <li><Link href="/" className="hover:text-[#e05a1a] transition-colors">Today's Edition</Link></li>
                <li><Link href="/archive" className="hover:text-[#e05a1a] transition-colors">Archive</Link></li>
                <li><a href="#" className="hover:text-[#e05a1a] transition-colors">Shop Portal</a></li>
                <li><a href="#" className="hover:text-[#e05a1a] transition-colors">Industry Reports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Oswald'] text-xl font-bold uppercase mb-6">Connect</h4>
              <p className="text-sm text-gray-400 mb-4">Stay updated with the latest industry news.</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#e05a1a] transition-colors cursor-pointer">In</div>
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#e05a1a] transition-colors cursor-pointer">X</div>
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#e05a1a] transition-colors cursor-pointer">Fb</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-['Source_Code_Pro'] text-gray-500 uppercase tracking-[0.2em]">
            <p>© 2026 Baywash Daily Briefing. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
