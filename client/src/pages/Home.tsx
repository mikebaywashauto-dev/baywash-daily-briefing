// 2026-05-26
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 19;
const BRIEFING_DATE = "May 26, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gzRvFvgZxUZrhFnp.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/fcKvOuwBBfTbijSC.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/hihYKkBRVYjOChNm.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rSuXbGcAKBofPBoi.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/MyDIqyeQXcYlqNTQ.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CONSUMER RIGHTS",
    tagColor: "#e05a1a",
    headline: "AIA Canada Releases Right to Repair Report: Independent Shops Save Customers Up to 30% — And Up to 80% on Labour-Heavy Repairs — But Only If the Data Access Gap Is Closed",
    summary: "The Automotive Industries Association of Canada released a major research report this week, commissioned from MNP Canada, quantifying the financial stakes of Canada's ongoing Right to Repair debate. The report's headline finding is striking: drivers can save up to 30% — or approximately $500 — on common repairs when they choose a reputable independent shop over a dealership, and up to 80% on labour-heavy or complex repairs when aftermarket parts are used. The report also quantifies the cost to the independent sector of the current data access gap: limited access to vehicle repair data could cost independent shops up to $336 million in lost profit per year across Canada. The research highlights that rural drivers are disproportionately affected, as local independent shops are often the only service option for Canadians who live hours from the nearest dealership. AIA Canada is using the report to push for national Right to Repair legislation that would require automakers to provide independent shops with the same access to repair and maintenance data, tools, and parts that they provide to their own dealer networks. The campaign is led by AIA Canada's Vice President of Government Relations, Emily Holtby, and is framed explicitly around consumer affordability — a politically potent argument in the current cost-of-living environment. The report notes that as vehicles become more complex, with advanced driver assistance systems, electrification, and software-driven diagnostics, the data access gap between dealer and independent shops is widening, not narrowing. Without legislative intervention, the report argues, the competitive position of independent shops will erode as the vehicle fleet modernizes.",
    whyItMatters: "This report is a direct business argument for every independent shop in Canada. The $336 million in lost profit figure is not an abstraction — it represents real revenue that is flowing to dealer service departments because independent shops cannot access the diagnostic data, calibration procedures, and software tools needed to complete certain repairs. The Right to Repair campaign is the most important regulatory fight in the Canadian aftermarket right now, and the MNP report gives it a credible economic foundation. For shop owners: if you are not already aware of the Right to Repair campaign, visit righttorepair.ca and consider adding your voice. The campaign needs industry participation to demonstrate to Ottawa that this is a mainstream business issue, not a fringe concern. For technicians: the data access gap is not just a pricing issue — it is a capability issue. As ADAS calibration, software updates, and module programming become standard repair procedures, the shops that cannot access manufacturer data will be unable to complete the work at all, regardless of their technical skill level.",
    source: "AIA Canada / MNP Canada / righttorepair.ca",
    sourceUrl: "https://www.righttorepair.ca/unlockingaccess/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRADE & TARIFFS",
    tagColor: "#16a34a",
    headline: "Toyota Posts $1.21 Billion North American Operating Loss — First in 16 Years — as Tariffs Cost the Automaker $8.64 Billion Annually and CEO Signals Supplier Cost-Shifting Is Coming",
    summary: "Toyota's fiscal year 2026 results, released this week, confirmed the scale of the tariff impact on the world's largest automaker: the company recorded a $1.21 billion operating loss in North America for the fiscal year ending March 31, 2026 — its first North American operating loss in sixteen years, reversing a $681 million profit from the prior year. The loss came despite record revenue, underscoring that the tariff burden is a structural cost problem, not a demand problem. Toyota's Chief Financial Officer Yoichi Miyazaki stated publicly that tariffs alone now cost the company approximately $8.64 billion per year, and that the company was 'unable to fully offset the impact.' Incoming CEO Kenta Kon, the former finance chief, has signalled that Toyota's response will include two major strategic shifts: first, simplifying the vehicle lineup to reduce production complexity and the number of components and specifications in the supply chain; and second, shifting part of the tariff cost burden to suppliers. That second signal is the one that matters most for the Canadian aftermarket. Toyota is the largest-selling brand in Canada and one of the most common vehicles in Canadian service bays. If Toyota begins renegotiating supplier contracts to pass through tariff costs, the effect will ripple through the entire parts supply chain — including the aftermarket distributors and jobbers that supply independent shops. Separately, a class-action lawsuit filed in California against Toyota Motor North America alleges that the company passed over $9 billion in tariff costs onto buyers through higher sticker prices, and that customers who effectively funded those duties via elevated transaction prices should receive a proportionate share of the $35.5 billion in tariff refunds now being processed by U.S. Customs and Border Protection following the Supreme Court's February ruling that struck down the IEEPA-based tariffs.",
    whyItMatters: "The Toyota results are a leading indicator for parts pricing across the entire Canadian aftermarket. Toyota's decision to shift tariff costs to suppliers will compress margins throughout the supply chain, and those compressed margins will eventually reach the shop level in the form of higher parts prices from distributors. The practical implication is not that Toyota parts will suddenly become unavailable — they will not — but that the pricing environment for OEM and OEM-equivalent Toyota parts will be less stable over the next 12 to 18 months than it has been historically. For shops that carry Toyota-heavy service volumes: now is the time to review your parts pricing matrix and ensure your labour rates and parts margins are set to absorb cost increases without compressing your overall gross margin. The class-action lawsuit is also worth monitoring: if it succeeds in establishing that automakers passed tariff costs to consumers, it could create a precedent that affects how parts price increases are communicated and justified throughout the supply chain.",
    source: "Yahoo Finance / CarBuzz / Foley & Lardner / Automotive News",
    sourceUrl: "https://finance.yahoo.com/sectors/technology/articles/toyota-looks-cut-complexity-tariffs-180032722.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "LABOUR",
    tagColor: "#2563eb",
    headline: "Unifor Sets June 22 Start Date for Ford Contract Talks — 5,000 Canadian Auto Workers Enter Negotiations as Union Cites 'Unprecedented Challenges' from U.S. Tariffs",
    summary: "Unifor announced this week that it will commence its 2026 Detroit Three auto negotiations on June 22, starting with Ford Motor Company. The union represents approximately 5,000 workers at various Ford of Canada facilities, including the Oakville Assembly Complex, the Windsor Engine Plant, and the Talbotville Engine Plant. Unifor National President Lana Payne framed the upcoming talks in explicitly adversarial terms, stating that 'the Canadian auto sector, and in turn our members and their families, face unprecedented challenges' and that Unifor 'firmly believes it is in the best interest of our members across the Detroit Three to work to establish the pattern agreement for 2026 auto bargaining with Ford Motor Company.' The pattern agreement set with Ford will then form the template for subsequent negotiations with GM and Stellantis. The timing is significant: these negotiations are taking place against the backdrop of the most disruptive trade environment in the Canadian auto sector's history. U.S. tariffs of 25% on vehicles and parts that do not meet USMCA rules of origin, combined with the broader tariff regime, have created genuine uncertainty about the long-term viability of Canadian assembly operations. Unifor has been publicly demanding that automakers commit to maintaining Canadian production in exchange for the market access they receive from Canadian consumers — a 'Sell Here, Build Here' framework that the union has been advancing since the tariffs were imposed in April 2025. Ford's current collective agreement with Unifor covers workers at facilities that are central to the company's Canadian manufacturing footprint, and the outcome of these negotiations will have implications for the broader Canadian auto manufacturing sector well beyond the specific wage and benefit terms agreed.",
    whyItMatters: "For shop owners and technicians, the Unifor-Ford talks matter for two reasons. First, any disruption to Canadian assembly operations — whether from a strike, a lockout, or a negotiated outcome that results in production shifts — affects the supply of new vehicles and the parts supply chain. A prolonged work stoppage at a Canadian Ford facility would tighten new vehicle inventory and could create parts supply disruptions for shops servicing Ford vehicles. Second, the wage outcomes from these negotiations will set a benchmark for labour costs across the Canadian automotive sector, including the service and repair segment. When assembly workers negotiate significant wage increases, it creates upward pressure on technician compensation expectations across the industry. Shop owners who are already struggling to attract and retain qualified technicians should monitor these negotiations closely and consider whether their current compensation structures will remain competitive in the post-negotiation environment.",
    source: "Unifor / Foley & Lardner / Automotive News Canada",
    sourceUrl: "https://www.unifor.org/en/feeds/news-releases",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⚖️",
    text: "The U.S. Supreme Court's February ruling striking down IEEPA-based tariffs has triggered $35.5 billion in refunds to importers, with Ford expecting approximately $1.3 billion, GM roughly $500 million, and Stellantis a similar amount. The refunds are already being booked in Q1 2026 financials. For Canadian shops: watch for whether these refunds translate into any easing of parts price increases from U.S.-sourced suppliers over the coming quarters.",
    sourceUrl: "https://carbuzz.com/tariff-refund-lawsuits-trump-supreme/",
  },
  {
    icon: "🚗",
    text: "Chinese EV makers including BYD, Chery, Geely, and Zeekr are making progress toward launching EV sales in Canada later in 2026, with Bloomberg reporting that Canada is working out a Chinese EV quota framework. For independent shops: Chinese EVs entering the Canadian market will initially be serviced exclusively at dealer networks, but the Right to Repair campaign's success will determine how quickly independent shops can access the diagnostic data needed to service these vehicles.",
    sourceUrl: "https://www.autonews.com/ev/anc-china-ev-network-import-progress-0504/",
  },
  {
    icon: "🔧",
    text: "AIA Canada's latest research on customer retention in the auto care sector identifies three non-negotiable practices for shops in the current competitive environment: digital vehicle inspections with photos and structured repair priorities; communication that is proactive, predictable, and in plain language; and scheduling the next appointment before the customer leaves. The report notes that retaining existing customers is far more cost-effective than acquiring new ones — a principle that is especially important as consumer spending tightens.",
    sourceUrl: "https://www.aiacanada.com/news/customer-retention-in-the-auto-care-sector-getting-it-right/",
  },
  {
    icon: "🛢️",
    text: "Morgan Stanley is projecting that U.S. gasoline inventories may fall below 200 million barrels by August 2026 — a record seasonal low — as the Iran conflict continues to disrupt Strait of Hormuz shipping. Brown University's Watson Institute estimates U.S. households have already paid over $300 each in additional costs from higher gasoline and diesel prices since the conflict began. Canadian pump prices are tracking the same trend, adding further pressure to consumer discretionary spending and reinforcing the vehicle-retention dynamic that is driving service demand.",
    sourceUrl: "https://iranwarcost.watson.brown.edu/",
  },
];

const tipOfTheDay = {
  title: "Start Your Week by Auditing Your Parts Pricing Matrix — Toyota's Supplier Cost-Shifting Signal Means OEM-Equivalent Parts Prices Are Going Up",
  text: "Toyota's CFO has publicly stated that the company plans to shift part of its $8.64 billion annual tariff burden to suppliers. That signal will take 6 to 12 months to fully materialize in the parts supply chain, but the direction is clear. This week's action: pull your parts pricing matrix for your top 10 volume part categories and check when you last updated the pricing. If any category has not been reviewed in the last 60 days, it is likely already out of date. The shops that will protect their gross margin through this cycle are the ones that are reviewing and adjusting parts pricing proactively — not waiting for the distributor invoice to arrive and discovering the margin has already been compressed. Also review your labour rate: if your parts pricing is going up but your labour rate has not moved, you are absorbing the cost increase rather than passing it through appropriately.",
};

const quoteOfTheDay = {
  text: "Customer retention in Canadian auto care does not depend on promotions or short-term incentives. It depends on disciplined operations, clear communication, and demonstrated capability.",
  author: "AIA Canada",
  title: "Customer Retention in the Auto Care Sector: Getting It Right — May 22, 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth 'Cuda 426 Hemi — The Most Valuable Muscle Car Ever Built",
  description: "The 1970 Plymouth 'Cuda 426 Hemi is the benchmark by which all American muscle cars are measured, and its auction results prove it. A 1970 'Cuda convertible with the 426 Hemi engine — one of only 14 built — sold at Barrett-Jackson for $3.5 million, making it the most expensive muscle car ever sold at public auction. The car that generated those numbers was powered by the 426 cubic inch Hemi V8, producing a conservatively rated 425 horsepower from its dual four-barrel carburetors, hemispherical combustion chambers, and forged internals built to withstand sustained high-RPM abuse. The 'Cuda was the performance version of the Plymouth Barracuda, redesigned for 1970 on the new E-body platform shared with the Dodge Challenger. The E-body was wider and lower than the previous Barracuda, giving it proportions that automotive designers still cite as among the most balanced of the muscle car era. The Shaker hood scoop — which protruded through a hole in the hood and shook with the engine — became the car's visual signature. The 426 Hemi was available in both hardtop and convertible body styles, with the convertible commanding a significant premium today due to its extreme rarity. Of the 652 'Cuda hardtops built with the 426 Hemi in 1970, only a handful survive in documented, numbers-matching condition. The convertibles are rarer still. The 'Cuda's combination of visual drama, mechanical brutality, and scarcity has made it the crown jewel of the muscle car collecting world — a car that was built to be driven hard and is now too valuable to drive at all.",
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
              alt="Canadian Automotive Workshop"
              className="w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
              <span className="inline-block bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                Top Intelligence
              </span>
              <h3 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-white leading-tight uppercase mb-4">
                Right to Repair Data Released, Toyota Posts $1.2B Loss, and Unifor-Ford Talks Set for June 22
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Independent shops stand to gain $336M in recovered revenue from Right to Repair legislation, Toyota signals supplier cost-shifting, and Canada's biggest auto labour negotiation begins in four weeks.
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
