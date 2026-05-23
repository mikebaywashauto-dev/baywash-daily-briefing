// 2026-05-23 v2 — fresh stories
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
    tag: "TRADE",
    tagColor: "#dc2626",
    headline: "Canada Shut Out of First USMCA Talks as U.S. and Mexico Meet Alone in Mexico City — July 1 Deadline Now in Serious Doubt",
    summary: "In a development that sent shockwaves through the Canadian auto industry this week, U.S. Trade Representative Jamieson Greer confirmed that the first formal round of USMCA renegotiation talks — scheduled for next week in Mexico City — will be held exclusively between the United States and Mexico, with Canada explicitly excluded from the table. Reuters reported the announcement on May 22, citing Greer's statement that the initial discussions would focus on automotive content rules and economic security provisions. The Globe and Mail reported the same day that Carney's government is walking a tightrope, with U.S. and Mexican officials proceeding without Canada while Canadian industry groups push Ottawa to accept tighter rules of origin in exchange for a seat at the table. The United Auto Workers union piled on by calling the current USMCA a 'free-trade disaster,' demanding tougher North American manufacturing requirements that could further complicate cross-border parts flows for Canadian suppliers. With the July 1 mandatory review deadline now just 39 days away and Canada sidelined from the opening round, analysts are openly questioning whether a renewed deal can be in place before the deadline — or whether Canada faces a period of prolonged tariff uncertainty that will continue to push parts prices higher.",
    whyItMatters: "Being shut out of the opening round of USMCA talks is not just a diplomatic embarrassment — it is a direct signal to your parts invoices. Every week of USMCA uncertainty is another week that distributors reprice preemptively to protect their margins. If you have not already had a frank conversation with your jobber about which product lines carry the highest tariff exposure, do it before your next order. Remanufactured and rebuilt components with domestic cores offer a meaningful cost hedge right now. For shops servicing commercial fleets, the 25% Section 232 tariff on heavy-duty truck parts — injectors, turbos, EGR systems, DPF assemblies — is already adding 20 to 30% to replacement costs. Raise your labour rate if you have not done so in the past six months. The cost environment has structurally shifted.",
    source: "Reuters / Globe and Mail / UAW",
    sourceUrl: "https://www.reuters.com/business/autos-transportation/first-usmca-negotiations-focus-content-rules-economic-security-greer-says-2026-05-22/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "INDUSTRY",
    tagColor: "#e05a1a",
    headline: "Stellantis Unveils FaSTLAne 2030 — 11 New North American Models, Seven Under US$40,000, and a 777-hp Ram Rumble Bee SRT",
    summary: "Stellantis CEO Antonio Filosa used this week's Investor Day presentation at the company's Auburn Hills, Michigan headquarters to unveil FaSTLAne 2030, a sweeping five-year turnaround plan backed by €60 billion (approximately $96 billion Canadian) in global investment. For North America specifically, the plan calls for 11 all-new vehicles by 2030, with seven priced under US$40,000 and two under US$30,000 — a direct response to the affordability crisis squeezing new-vehicle buyers. Jeep, Ram, Peugeot, and Fiat will lead the investment, receiving 70% of brand and product spending. Chrysler and Dodge will also receive funding to 'increase brand distinctiveness.' The announcement arrived alongside the reveal of the 2027 Ram 1500 Rumble Bee family — three V8-powered muscle trucks topped by the 777-horsepower Rumble Bee SRT, which will be the fastest V8 production pickup ever built, with a 0-to-96 km/h time of 3.4 seconds and a top speed of 274 km/h. The base Rumble Bee arrives later in 2026 with a 395-hp 5.7-litre Hemi; the 392 and SRT variants follow in the first half of 2027. All three will be built in Saltillo, Mexico. Chrysler's Canadian sales surged 98% in Q1 2026 on the strength of its Canadian-made Pacifica and Grand Caravan minivans, underscoring the brand's unusual but effective Canada-first strategy.",
    whyItMatters: "The Stellantis product blitz matters to your shop in two ways. First, the Ram Rumble Bee SRT's 777-hp supercharged 6.2-litre Hellcat engine is the same unit going into the 2027 Ram TRX — meaning a new wave of high-performance trucks will be hitting Canadian roads within 18 months. These vehicles will need specialized service: performance oil changes, brake inspections, alignment checks after track days, and eventually supercharger service. If you are not already familiar with Hellcat-family service procedures, now is the time to get your technicians trained. Second, Stellantis's commitment to seven new models under US$40,000 signals a meaningful push toward affordability — which should sustain new-vehicle sales volume and, by extension, the repair pipeline for the next decade.",
    source: "Driving.ca / Automotive News / Stellantis",
    sourceUrl: "https://driving.ca/auto-news/industry/stellantis-investment-strengthen-north-american-brands",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "EV & POLICY",
    tagColor: "#2563eb",
    headline: "Pembina Institute Warns Canada Is Falling Behind the Global EV Race — And the Policy Window to Catch Up Is Closing Fast",
    summary: "A major new report published this week by the Pembina Institute argues that Canada is at serious risk of being left behind in the global shift to electric vehicles — and that the window to attract the manufacturing investment needed to compete is closing. The report, authored by senior analyst Taylor Walker, notes that global EV sales are projected to reach 23 million units in 2026, representing nearly 30% of all new car sales worldwide. China is on track for 60% EV market share; Europe is the fastest-growing major market. Canada, by contrast, has been whipsawed by policy reversals: the federal EV rebate expired in 2024, the Electric Vehicle Availability Standard was paused in 2025 and repealed in 2026, and consumers delayed purchases while automakers questioned Canada's long-term direction. The good news: Statistics Canada data released this week shows a 75% year-over-year surge in EV sales in March 2026 alone, following the mid-Q1 reinstatement of consumer incentives. The Pembina report argues that Canada needs a durable Vehicle Emissions Standard of 40 g/mile by 2035 — strong enough to deliver the government's 75% EV sales target, flexible enough for automakers to comply cost-effectively, and credible enough to attract the long-term investment the sector needs. Without it, the report warns, Canada risks watching billions in EV manufacturing investment flow to jurisdictions with clearer policy signals.",
    whyItMatters: "The EV policy debate may feel distant from the day-to-day reality of running a shop, but it is shaping the fleet you will be servicing in five years. A 75% EV sales target by 2035 means that within a decade, the majority of new vehicles entering your market will be electric. Shops that begin building EV service capacity now — Level 2 charging infrastructure, technician training on high-voltage systems, diagnostic tools for battery management systems — will be positioned to capture that work. Shops that wait will face a steep and expensive catch-up. The 75% surge in March EV sales is not a blip; it is a signal that consumer demand is real when incentives are in place. Plan your shop's EV readiness timeline accordingly.",
    source: "Pembina Institute / Statistics Canada",
    sourceUrl: "https://www.pembina.org/blog/canada-risks-being-left-behind-if-it-fails-align-global-auto-market",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🚗",
    text: "Canadian new vehicle sales held remarkably steady in Q1 2026, declining only 1–4% year-over-year despite global trade upheaval and surging fuel prices. Chrysler surged 98% on Canadian-made minivan demand; Land Rover jumped 67%; Volkswagen posted its best-ever Q1 with a 13% gain. The resilience of the Canadian fleet signals continued strong repair demand through 2026.",
    sourceUrl: "https://driving.ca/column/driving-by-numbers/best-worst-starts-canadian-auto-brands-2026-q1",
  },
  {
    icon: "🔧",
    text: "The average new vehicle price in Canada reached $49,275 in March 2026 — a 3.5% year-over-year increase — according to Cox Automotive. Higher sticker prices are pushing more consumers toward keeping their existing vehicles longer, which directly benefits independent repair shops. The repair pipeline for 2026 and 2027 looks strong.",
    sourceUrl: "https://ca.sports.yahoo.com/news/automotive-industry-undergoing-great-reset-090000038.html",
  },
  {
    icon: "⚡",
    text: "Hybrids are officially back as the dominant powertrain story of 2026. With federal EV incentives reinstated in Canada and BEV charging anxiety still a barrier, AutoPacific's Paul Waatti notes: 'The market looks much more ready for hybrids than it does for an all-in EV push.' Expect hybrid service volume to grow significantly over the next 18 months.",
    sourceUrl: "https://ca.sports.yahoo.com/news/automotive-industry-undergoing-great-reset-090000038.html",
  },
  {
    icon: "📊",
    text: "Software-defined vehicles (SDVs) are beginning to reshape the repair landscape. Automakers are increasingly pushing over-the-air updates that address issues previously requiring a shop visit. For independent shops, this is both a threat and an opportunity — those who invest in OEM-level diagnostic access and scan tool subscriptions will retain the work that SDV updates cannot handle.",
    sourceUrl: "https://ca.sports.yahoo.com/news/automotive-industry-undergoing-great-reset-090000038.html",
  },
];

const tipOfTheDay = {
  title: "Start Your EV Readiness Audit This Weekend",
  text: "With Canadian EV sales up 75% year-over-year in March 2026 and the federal government targeting 75% EV sales by 2035, the question for your shop is no longer 'if' but 'when.' This weekend, take 30 minutes to answer three questions: (1) Do you have at least one technician with formal high-voltage safety training? (2) Does your shop have a Level 2 charging outlet you can use for customer vehicles? (3) Does your scan tool subscription cover the top five EV brands in your market — Tesla, Hyundai/Kia, GM, Ford, and Stellantis? If the answer to any of these is no, you have a concrete action item. The shops that begin building EV capacity in 2026 will own that market in 2028. The shops that wait until 2028 will be playing catch-up at a much higher cost.",
};

const quoteOfTheDay = {
  text: "The secret of getting ahead is getting started.",
  author: "Mark Twain",
  title: "For Every Shop Owner Who Has Been Putting Off That EV Training",
};

const rideOfTheDay = {
  name: "2027 Ram 1500 Rumble Bee SRT — 777 Horsepower, Built in Mexico, Coming to a Canadian Road Near You",
  description: "Revealed this week at Stellantis Investor Day, the 2027 Ram 1500 Rumble Bee SRT is the most powerful V8 production pickup truck ever built. Its supercharged 6.2-litre Hellcat engine produces 777 horsepower and 680 lb-ft of torque — the same unit going into the 2027 Ram TRX. A unique quad-cab/short-bed body configuration gives it a 13-inch shorter wheelbase than a standard Ram 1500, optimized for track performance. Top speed is targeted at 274 km/h, with 0-to-96 km/h in 3.4 seconds. All three Rumble Bee variants use an eight-speed automatic with metal paddle shifters and full-time 4WD with a front-axle disconnect for rear-wheel-drive fun. The base Rumble Bee (395-hp 5.7L Hemi) arrives later in 2026; the 392 and SRT follow in early 2027. Canadian pricing has not yet been announced.",
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
                Canada Shut Out of USMCA Talks, Stellantis Drops 777-hp Muscle Truck, and the EV Policy Clock Is Ticking
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Three breaking stories from this week that every Canadian shop owner needs to read before Monday morning.
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
