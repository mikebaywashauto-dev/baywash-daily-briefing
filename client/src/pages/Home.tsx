// 2026-05-24
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 15;
const BRIEFING_DATE = "May 24, 2026";
const BRIEFING_DAY = "Sunday";

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
    tag: "MARKET SHIFT",
    tagColor: "#e05a1a",
    headline: "Chinese EVs Are Coming to Canada — The Galaxy Geome EX2 Is the First, and It Could Reshape How Your Customers Think About Vehicles",
    summary: "The first wave of Chinese electric vehicles is no longer a distant threat — it is arriving. Driving.ca this week published a first drive review of the 2026 Galaxy Geome EX2, a sub-compact all-electric crossover from Geely Auto Group that the reviewer calls 'the first Chinese EV that should come to Canada.' The Geome EX2 was the best-selling vehicle in China — electric or gasoline — in 2025. It sells for US$9,500 in China. Even at two or three times that price after shipping, duties, and Canadian compliance costs, it would represent the most affordable new EV in Canada by a wide margin — undercutting the Kia EV4, Fiat 500e, and Tesla Model 3 by tens of thousands of dollars. The EX2 features a 40.2 kWh CATL battery, 320 km of real-world range, a 14.6-inch infotainment screen, a 540-degree camera system, and L2 driver assistance — technology that would cost $50,000 or more on a Canadian-market vehicle. Geely is already shipping EVs to Canada under its Lotus brand, and BYD, Chery, and Zeekr are all in various stages of Canadian market entry. A companion review of the Radar RD6 PHEV — a midsize plug-in hybrid pickup from another Geely brand — showed 463 horsepower, 82 km of EV range, and 1,000 km of total range at a Philippine launch price equivalent to $36,167 Canadian, roughly half the cost of a comparable Ford Ranger PHEV.",
    whyItMatters: "Chinese EVs entering the Canadian market is not just a new-car story — it is a service and repair story. These vehicles will need oil changes, tires, brakes, alignments, and eventually battery and drivetrain service. The question is whether independent shops will be positioned to capture that work. The most immediate action item: start tracking which Chinese brands are entering your market and get ahead of the scan tool and parts sourcing question now, before these vehicles are on your lifts. Geely-family vehicles (Volvo, Polestar, Lotus, Galaxy, Zeekr) share platform architecture — if you already service Volvo or Polestar, you have a head start. The reliability question is real and unresolved, but if Chinese EVs prove durable, they will represent a massive new service opportunity for shops that are ready.",
    source: "Driving.ca",
    sourceUrl: "https://driving.ca/reviews/2026-galaxy-geome-ex2-chinese-ev-review",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CONSUMER ECONOMY",
    tagColor: "#dc2626",
    headline: "Gas Prices Are Eating Canadian Household Budgets Alive — And Motor Vehicle Sales Just Dropped 0.5% as a Result",
    summary: "New data released by Statistics Canada on Friday confirmed what many shop owners have been sensing at the service counter: surging gasoline prices are crowding out spending everywhere else. Canadian retail sales rose 0.9% in March 2026 — but that headline figure was almost entirely driven by a 12.4% surge in gasoline station revenues. In volume terms, gas station sales actually fell 1.9%, meaning Canadians are paying dramatically more for the same amount of fuel. Excluding gas, Canadian retail sales dropped 0.2% in March. Motor vehicle and parts dealer sales fell 0.5%. Core retail sales — excluding both gas and auto dealers — were down 0.1%, the first decline in three months. Bloomberg reported that CIBC senior economist Andrew Grantham warned 'higher gasoline prices may already be limiting sales in other areas, which will see inflation-adjusted consumer spending growth decelerate again in the second quarter.' An advance estimate for April shows a further 0.6% overall retail gain — but analysts expect the same gas-driven distortion to persist. The Bank of Canada is holding its key rate at 2.25% for the rest of 2026, according to Bloomberg economist surveys, balancing deflationary domestic pressure against energy-driven inflation running at 2.8% nationally.",
    whyItMatters: "When gas prices consume a larger share of household budgets, consumers make tradeoffs — and one of the first things they defer is discretionary vehicle maintenance. Shops that rely heavily on customer-pay work for non-urgent services (cabin air filters, fluid flushes, wiper blades) may see a softening in that category over the next two quarters. The practical response is to focus on essential maintenance that customers cannot defer: oil changes, brake inspections, tire rotations, and safety-critical repairs. Communicate value clearly — a $150 brake inspection that catches a $400 problem early is a compelling story when household budgets are tight. Fleet and commercial accounts are more insulated from this pressure and worth prioritizing in your business development efforts right now.",
    source: "Statistics Canada / Bloomberg / Canadian Mortgage Trends",
    sourceUrl: "https://www.canadianmortgagetrends.com/2026/05/surging-gas-prices-mask-weak-consumer-spending-in-canada/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SALES DATA",
    tagColor: "#2563eb",
    headline: "JD Power: North American New-Vehicle Sales Surging in May 2026 — But 30% of Trade-Ins Are Underwater and Hybrid Share Hits 16%",
    summary: "JD Power and GlobalData released their May 2026 North American sales forecast this week, projecting total new-vehicle sales of 1,490,900 units — a 5.8% year-over-year increase and the first positive retail comparison since September 2025. The seasonally adjusted annualized rate (SAAR) is expected to reach 16.3 million units, up 0.7 million from May 2025. The headline numbers are strong, but the underlying data tells a more complicated story. Average monthly finance payments have climbed 2.8% year-over-year to $810, even as average transaction prices are essentially flat at $46,023. The proportion of trade-ins carrying negative equity has reached 30.4% — up 2.9 percentage points year-over-year — meaning nearly one in three vehicle owners who try to trade in their car in May 2026 will owe more than it is worth. Manufacturers are responding by increasing incentive spending 20.7% year-over-year to an average of $3,297 per vehicle. The most significant structural shift in the data: hybrid share of retail sales has climbed to 16.3% — up 1.6 percentage points — while EV share has softened to 7.0% following the elimination of U.S. federal EV credits. Loan terms of 84 months or longer now account for 13.4% of all new-vehicle financing.",
    whyItMatters: "The JD Power data has three direct implications for your shop. First, the surge in hybrid sales — now 16.3% of the retail mix — means hybrid service volume is growing fast. If your technicians are not current on hybrid battery, inverter, and regenerative braking service procedures, that is a skills gap worth addressing this summer. Second, the 30.4% negative equity rate on trade-ins signals that many of your customers are holding their current vehicles longer than planned — which is good for your repair pipeline. Vehicles that would normally be traded in at 80,000 km are now being kept to 120,000 km or beyond. Third, the 84-month loan term trend means more customers are financially stretched. Price transparency, clear estimates, and payment flexibility (financing options, deferred payment plans) will matter more in this environment than they did two years ago.",
    source: "JD Power / GlobalData",
    sourceUrl: "https://www.jdpower.com/business/press-releases/jd-power-globaldata-forecast-may-2026",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🚗",
    text: "The 2026 Radar RD6 PHEV — a midsize plug-in hybrid pickup from Geely's Radar brand — packs 463 hp, 82 km of EV range, and 1,000 km of total range. Its Philippine launch price translates to roughly $36,167 CAD, compared to $71,363 CAD for the Ford Ranger PHEV in Australia. If Chinese PHEV trucks reach Canada, they will fundamentally disrupt the midsize truck segment.",
    sourceUrl: "https://driving.ca/reviews/2026-radar-rd6-phev-pickup-chinese-brand",
  },
  {
    icon: "📊",
    text: "Pfaff Automotive is opening Canada's first dual-brand Audi and Ducati dealership in Vaughan, Ontario in June 2026. The move signals continued premium market confidence even as mass-market affordability tightens. For independent shops near Vaughan, this is a reminder that the premium and performance service segment remains robust.",
    sourceUrl: "https://canadianautodealer.ca/2024/12/pfaff-automotive-to-retail-audi-ducati-under-one-rooftop/",
  },
  {
    icon: "⛽",
    text: "The Bank of Canada is holding its key rate at 2.25% for the rest of 2026, according to Bloomberg economist surveys — balancing deflationary domestic pressure against energy-driven inflation running at 2.8% nationally. For shops carrying variable-rate equipment financing or lines of credit, this is a stable environment for the next two quarters.",
    sourceUrl: "https://www.canadianmortgagetrends.com/2026/05/surging-gas-prices-mask-weak-consumer-spending-in-canada/",
  },
  {
    icon: "🔋",
    text: "EV incentive spending in the U.S. reached $10,308 per unit in May 2026 — more than three times the $2,973 average for non-EV vehicles — underscoring how dependent EV demand remains on manufacturer discounting. For Canadian shops, this is a signal that EV adoption will continue to be incentive-driven rather than organic, making policy stability the single biggest variable in EV service volume forecasts.",
    sourceUrl: "https://www.jdpower.com/business/press-releases/jd-power-globaldata-forecast-may-2026",
  },
];

const tipOfTheDay = {
  title: "Get Ahead of Chinese EV Service Before These Vehicles Hit Your Lifts",
  text: "Chinese EVs are coming to Canada — and the first wave (Geely/Galaxy, BYD, Chery, Zeekr) will be on Canadian roads within 12 to 18 months. This weekend, take 20 minutes to do three things: (1) Check whether your current scan tool subscription covers Geely-family vehicles (Volvo, Polestar, Lotus share the same platform architecture). (2) Contact your tool supplier to ask about upcoming Chinese EV coverage updates — most major scan tool brands are already working on this. (3) Register your interest with your parts jobber for Chinese EV parts sourcing. The shops that build these supplier relationships now will have a significant advantage when Chinese EV owners start looking for independent service alternatives to dealerships that may not yet exist in their city.",
};

const quoteOfTheDay = {
  text: "The best time to plant a tree was 20 years ago. The second best time is now.",
  author: "Chinese Proverb",
  title: "Apt for a Week When Chinese Automakers Are Planting Roots in Canada",
};

const rideOfTheDay = {
  name: "1969 Chevrolet Camaro Z/28 — The Road-Racing Homologation Special That Defined a Generation",
  description: "The 1969 Camaro Z/28 was not built for the street — it was built to homologate the 302 cubic-inch small-block V8 for the SCCA Trans-Am racing series. Chevrolet engineers mated a 327 block to a 283 crankshaft to produce the exact 302 cubic-inch displacement the rules required, then breathed through it with an 800 cfm Holley double-pumper on an aluminium high-rise intake. Factory-rated at 290 horsepower — a figure that fooled no one — the actual output was closer to 360 hp. The Z/28 came with front disc brakes, a Muncie close-ratio four-speed, a Positraction rear axle, and a suspension tuned for the track. Only 19,014 were built for 1969. Today, a numbers-matching Z/28 in excellent condition commands $150,000 or more at auction — a testament to what happens when engineers build a car with a single-minded purpose and no compromises.",
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
                Chinese EVs Land in Canada, Gas Prices Gut Consumer Spending, and One in Three Trade-Ins Is Underwater
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Three market-moving stories from this weekend that will shape what walks through your shop door over the next 18 months.
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
