// 2026-05-23
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 14;
const BRIEFING_DATE = "May 23, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VMmgjdeDrOiSWKBH.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/AYHWflZIwYAqhtMT.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mgoywCVRoukhBhOS.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/uWzMlLiVZZwBzYKg.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jVxgbUFzjqWLQvqI.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SUPPLY CHAIN",
    tagColor: "#e05a1a",
    headline: "Synthetic Motor Oil Shortage Hits Canadian Shops as Strait of Hormuz Closure Chokes Group III Base Oil Supply",
    summary: "The ongoing U.S.-Iran conflict has delivered a direct blow to Canadian automotive service operations: the closure of the Strait of Hormuz has severely disrupted global Group III base oil imports, the key feedstock for synthetic motor oil. Petroleum analyst Patrick de Haan of GasBuddy confirmed this week that Canada is already seeing price increases of 20 per cent or more on engine oils and lubricants, with availability issues emerging on manufacturer-specific synthetic blends. Nissan and Toyota have begun rationing synthetic oil supplies to their dealership networks in North America, while other OEMs and distributors are stockpiling inventory in anticipation of further tightening. McMaster University operations management professor Behrouz Bakhtiari warned that the full impact on Canadian shops will become evident within six to twelve months — and that consumers who delay oil changes or switch to lower-quality substitutes risk a wave of engine failures down the road. Statistics Canada data released this week confirmed that vehicle maintenance and repair costs climbed 4.2 per cent over the past year, with energy-driven inflation now running at 2.8 per cent nationally.",
    whyItMatters: "This is the most immediate supply chain threat facing Canadian independent shops right now. If you have not already spoken to your jobber about synthetic oil inventory, do it today. Ask specifically about Group III-based full synthetic lines — these are the most exposed. Consider pre-ordering a 30-to-60-day supply of your highest-turn viscosity grades (0W-20, 5W-30) before distributors implement formal allocation. Equally important: communicate proactively with your customers. A brief explanation on your invoice or waiting room screen — noting that oil change pricing reflects a global supply disruption — will go a long way toward preserving trust when prices rise. Do not silently absorb the cost increase; your margins cannot sustain it, and your customers deserve transparency.",
    source: "Global News / Automotive News",
    sourceUrl: "https://globalnews.ca/news/11855210/motor-oil-market-canada-strait-of-hormuz/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRADE",
    tagColor: "#dc2626",
    headline: "USMCA Review Reaches Critical Juncture — Canadian Auto Industry Warns July 1 Deadline May Slip as Tariff Uncertainty Deepens",
    summary: "The scheduled July 1, 2026 review of the United States-Mexico-Canada Agreement is now in serious jeopardy, with key Canadian auto industry stakeholders warning this week that negotiations are unlikely to conclude on time. Auto suppliers and manufacturers gathered at the Ontario Auto Forum in Toronto confirmed that automakers have already absorbed an estimated $24 billion in assessed tariffs since the current trade conflict began, with the Center for Automotive Research projecting cumulative costs could reach far higher if the USMCA framework is not renewed or replaced. The United Auto Workers union added to the pressure by calling the current USMCA a 'free-trade disaster,' pushing for tougher U.S. manufacturing requirements that would further complicate cross-border parts flows. For Canadian shops, the most immediate consequence is parts pricing: the Richmond Fed's CFO Survey found that firms attribute close to 40 per cent of total unit cost growth in 2025 and 2026 to tariffs and tariff-related uncertainty. A 25 per cent Section 232 tariff on medium and heavy-duty truck parts — covering injectors, turbochargers, EGR systems, DPF assemblies, and transmissions — has pushed replacement costs for those components 20 to 30 per cent higher than pre-tariff levels.",
    whyItMatters: "The USMCA uncertainty is not an abstract trade policy story — it is showing up on your parts invoices right now. If you service commercial vehicles, fleet trucks, or heavy-duty equipment, you are already paying 20 to 30 per cent more for the components that fail most often on high-mileage units. The practical response: review your parts sourcing strategy and ask your jobber to identify which lines carry the highest tariff exposure. Remanufactured and rebuilt components — where the core is domestic — offer a meaningful cost advantage in this environment. For light-duty shops, the pressure is less acute today but is building. Raise your labour rate if you have not done so in the past six months. The cost environment has changed structurally, and your pricing needs to reflect that reality.",
    source: "Canadian Auto Dealer / FreightWaves / Automotive News",
    sourceUrl: "https://canadianautodealer.ca/2026/05/truck-dealers-say-regulatory-mismatch-threatens-supply-chain/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "AFTERMARKET",
    tagColor: "#2563eb",
    headline: "FRAM and Hopkins Canada Collapse Into Bankruptcy — First Brands Failure Leaves Canadian Aftermarket Scrambling for Alternative Suppliers",
    summary: "Two of the most recognizable names in the Canadian automotive aftermarket have ceased operations. FRAM Group (Canada) Inc. and Hopkins Canada Inc. — both subsidiaries of the troubled First Brands Group platform — made assignments for the general benefit of creditors in late April and early May 2026, following the collapse of a group-wide sale process. FRAM Canada, which operated as a Canadian sales and distribution entity for oil, air, cabin air, fuel, and transmission filters, reported total liabilities of approximately $4.9 million against assets of $4.5 million. Hopkins Canada, which operated a production plant in Blenheim, Ontario before converting it to a warehouse facility, reported liabilities of $6.6 million against assets of $6.3 million. First Brands Group had built a portfolio of more than 25 automotive brands through more than 15 acquisitions in under 15 years before filing for Chapter 11 in the U.S. Bankruptcy Court for the Southern District of Texas in September 2025. No bids were submitted for the Canadian entities during the accelerated marketing process, leaving TDB Restructuring as trustee in both bankruptcies.",
    whyItMatters: "If FRAM filters are part of your regular parts mix, you need to act immediately. Confirm with your jobber whether your current FRAM inventory is the last of the Canadian distribution stock, and identify alternative filter lines now — not when your next order fails to arrive. Wix, Purolator, Motorcraft, and Mann-Filter are all strong alternatives with broad Canadian distribution. The Hopkins collapse is equally significant for shops that carry vehicle appearance, winter weather, and automotive accessories products under the Hopkins brand. Audit your current inventory and establish replacement supplier relationships before the gap becomes visible to your customers. The broader lesson from the First Brands failure is a reminder that acquisition-driven consolidation in the aftermarket carries real fragility — diversifying your supplier base is not just good practice, it is risk management.",
    source: "Insolvency Insider Canada",
    sourceUrl: "https://insolvencyinsider.ca/p/first-brands-canadian-aftermarket-units-collapse-into-bankruptcy",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🚛",
    text: "Canada's truck dealers issued an urgent warning on Parliament Hill this week: a regulatory misalignment between Canadian and U.S. emissions standards could block the import of 2027-model-year medium and heavy-duty trucks. With approximately 30,000 Class 8 trucks sold annually in Canada — representing over $8 billion in economic activity — the Canadian Truck Dealers association says this is 'a yesterday problem' requiring an immediate federal regulatory fix.",
    sourceUrl: "https://canadianautodealer.ca/2026/05/truck-dealers-say-regulatory-mismatch-threatens-supply-chain/",
  },
  {
    icon: "📊",
    text: "Canadian new vehicle sales held remarkably steady in Q1 2026, declining only 1 to 4 per cent year-over-year despite global trade upheaval and surging fuel prices. Standout performers included Chrysler (up 98% on Canadian-made minivan demand), Land Rover (up 67%), and Volkswagen (up 13% to its best-ever Q1). The resilience of the Canadian fleet signals continued strong repair demand through 2026.",
    sourceUrl: "https://driving.ca/column/driving-by-numbers/best-worst-starts-canadian-auto-brands-2026-q1",
  },
  {
    icon: "⚡",
    text: "Canada re-introduced electric vehicle rebates in mid-Q1 2026, contributing to a modest uptick in EV registrations. However, Honda's indefinite suspension of its $15-billion Ontario EV and battery plant — announced last week — continues to cast a long shadow over Canada's electrification ambitions, with analysts warning that the policy framework underpinning billions in EV investment commitments needs urgent reassessment.",
    sourceUrl: "https://driving.ca/column/driving-by-numbers/best-worst-starts-canadian-auto-brands-2026-q1",
  },
  {
    icon: "💰",
    text: "Tariff-driven parts cost increases are now showing up clearly at the service counter. The Richmond Fed's CFO Survey found firms attribute close to 40% of total unit cost growth in 2025 and 2026 to tariffs and tariff-related uncertainty — and distributors are repricing preemptively, before physical shortages materialize. If your labour rate has not moved in the past six months, it needs to move now.",
    sourceUrl: "https://finance.yahoo.com/economy/policy/articles/same-repair-same-truck-higher-165550893.html",
  },
];

const tipOfTheDay = {
  title: "Audit Your Filter Supplier Mix Before the FRAM Gap Hits Your Shelves",
  text: "With FRAM Canada now in bankruptcy and Hopkins Canada wound down, this is the week to audit your filter inventory and supplier relationships. Pull your last 90 days of filter sales data and identify your top 20 SKUs by volume. For each one, confirm that your primary jobber has an alternative line available — Wix, Purolator, Motorcraft, and Mann-Filter all have strong Canadian distribution and broad vehicle coverage. Do not wait for a stockout to discover a gap. While you are at it, check your cabin air filter and fuel filter lines specifically — these are categories where FRAM had strong Canadian market penetration and where alternatives may require a cross-reference update in your shop management system.",
};

const quoteOfTheDay = {
  text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
  author: "Winston Churchill",
  title: "A Reminder for Every Shop Owner Navigating 2026's Headwinds",
};

const rideOfTheDay = {
  name: "1970 Plymouth Barracuda 'Cuda 440 Six Pack",
  description: "The 1970 Plymouth Barracuda — particularly the fire-breathing 'Cuda variant — stands as one of the most coveted and collectible muscle cars ever produced in North America. Built on Chrysler's all-new E-body platform and assembled at the Hamtramck, Michigan plant with significant Canadian parts content, the 'Cuda 440 Six Pack packed a 440 cubic-inch V8 breathing through three two-barrel Holley carburetors, producing a factory-rated 390 horsepower — a figure widely understood to be conservative. With only 652 convertible 'Cudas built for the 1970 model year across all engine configurations, survivors in any state of preservation command extraordinary values at auction. The 1970 Barracuda represents the absolute pinnacle of the muscle car era — a moment when North American engineers and assembly workers were building some of the most viscerally exciting automobiles the world has ever seen.",
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
              alt="Automotive Workshop" 
              className="w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
              <span className="inline-block bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                Top Intelligence
              </span>
              <h3 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-white leading-tight uppercase mb-4">
                Motor Oil Shortage, USMCA Crisis & FRAM Collapse: The Three Forces Hitting Your Shop This Weekend
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Synthetic oil supply is tightening as the Strait of Hormuz closure bites, USMCA negotiations 
                are stalling with a July 1 deadline looming, and FRAM Canada has gone bankrupt — today's 
                briefing covers the stories demanding your attention right now.
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
