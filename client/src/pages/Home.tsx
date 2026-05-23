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

const BRIEFING_NUMBER = 16;
const BRIEFING_DATE = "May 26, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/hgbHbVwzKfPCESWJ.png";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/nNhvAhjGLvJdbLId.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/PLheijdsKMeSYypq.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gVrPVQiYQyGGNqhw.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/hDLcpMTOLgrhsHBQ.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "RIGHT TO REPAIR",
    tagColor: "#e05a1a",
    headline: "The REPAIR Act Just Cleared a Major Hurdle in Washington — But the Fight for Full Vehicle Data Access Is Far From Over",
    summary: "On May 21, 2026, the U.S. House Energy and Commerce Committee voted to pass H.R. 7389, the Motor Vehicle Modernization Act of 2026 — legislation that includes automotive right to repair provisions and now advances to a full House floor vote. The Auto Care Association called it 'an important step forward' while noting the language falls short of the full protections independent shops need. The bill includes provisions for heavy-duty trucking and new enforcement authority for the Federal Trade Commission. However, the legislation does not fully reflect the original REPAIR Act introduced by Rep. Neal Dunn (FL-02), which would have given vehicle owners and independent shops direct access to wirelessly transmitted repair and maintenance data. Rep. Dunn issued a statement the following day urging House leadership to advance the full REPAIR Act provisions to the floor separately, warning that the current language 'codifies a 2014 MOU that does nothing to expand consumer choice and instead hands automakers a costly repair monopoly.' MEMA Aftermarket Suppliers president Emily Poladian stated that without the full REPAIR Act, 155 million Americans will have significantly fewer choices to repair and maintain their vehicles — and that repair costs have already risen 48% since 2020. The CAR Coalition's Justin Rzepka added that the average vehicle owner is now paying $200 more per year as a direct result of restricted data access. The bill also includes the SEMA-backed ADAS Functionality and Integrity Act (Section 221), which directs NHTSA to study the impact of common vehicle modifications — including lifts, wraps, bumpers, and bike racks — on ADAS calibration, and to develop industry guidelines for modification tolerances. This provision is particularly significant for shops that perform suspension lifts, wheel and tire upgrades, and collision repairs on ADAS-equipped vehicles.",
    whyItMatters: "This is the most significant right to repair development in years for Canadian and American independent shops — and it cuts both ways. The good news: the bill is moving. The bad news: the version that passed committee still does not give independent shops access to wirelessly transmitted OBD data, which is where the real repair monopoly lives on modern connected vehicles. For Canadian shops, the federal right to repair bill (Bill C-244) passed in 2023 but implementation has been slow and enforcement is essentially non-existent. The U.S. legislative battle matters because it sets the precedent that Canadian regulators and courts will follow. Practical action item for this week: audit which of your current repairs require OEM-only scan tools or dealer-only software access. Document those cases. That documentation is exactly what industry associations need to make the case for stronger enforcement of existing Canadian right to repair rules.",
    source: "Auto Care Association / Rep. Neal Dunn / SEMA",
    sourceUrl: "https://www.autocare.org/news/latest-news/details/2026/05/21/auto-care-association-provides-statement-on-today's-congressional-right-to-repair-action",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "USED VEHICLE MARKET",
    tagColor: "#16a34a",
    headline: "Canadian Used Vehicle Wholesale Prices Drop 0.32% — Trucks and SUVs Lead the Decline as GM Drops $63M Into Oshawa",
    summary: "Canadian wholesale used-vehicle prices fell 0.32% in the week ending May 16, 2026, according to Canadian Black Book's latest Market Insights report — continuing a softening trend that has now persisted for six consecutive weeks. Truck and SUV segments led the decline, dropping 0.40%, while car segments fell 0.20%. Within the truck and SUV category, full-size van values dropped 1.77% and minivan prices declined 1.29% — the two segments most sensitive to commercial fleet cycling. Luxury car values recorded the largest car-segment decline at 0.52%, followed by sports cars at 0.41%. The average retail listing price for used vehicles reached $37,750 based on approximately 201,000 dealer listings across Canada. Auction sale rates ranged from 25.2% to 48.7%, averaging 36% — a figure that reflects continued seller resistance to lower prices and ongoing upstream channel competition for available inventory. In a separate development, General Motors confirmed a $63 million investment in its Oshawa Assembly plant — a move that signals continued commitment to Canadian truck production even as the plant operates at reduced capacity following the tariff-driven shift cut announced earlier this year. The investment is focused on tooling and equipment upgrades for the next generation of light- and heavy-duty pickups. Separately, Mazda delayed the launch of planned EVs by two years, and Subaru announced a $362 million write-down tied to postponing one of its Japanese-market EV programs — further evidence that the EV timeline is compressing across the industry.",
    whyItMatters: "Falling wholesale used vehicle prices have a direct and immediate impact on your shop's customer base. When used vehicle values drop, two things happen: first, more customers choose to repair their existing vehicle rather than trade up, because the equity they expected to have has evaporated. Second, customers who do buy used vehicles are buying at lower price points — which often means older, higher-mileage vehicles with more deferred maintenance. Both dynamics are good for your service volume. The truck and SUV segment decline is particularly relevant for shops in markets where pickups dominate — a customer who bought a used F-150 or RAM 1500 at peak 2022 pricing and is now underwater on that loan is your most loyal service customer for the next three years. The GM Oshawa $63M investment is a signal that Canadian truck production is not going away — which matters for parts availability and technician training relevance.",
    source: "Canadian Black Book / Canadian Auto Dealer / GM Authority",
    sourceUrl: "https://canadianautodealer.ca/2026/05/canadian-used-vehicle-prices-fall-0-32-for-the-week/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "INFRASTRUCTURE",
    tagColor: "#2563eb",
    headline: "The $580 Billion BUILD America 250 Act Passes Committee — EV Road Fees, Autonomous Truck Rules, and $750M for Truck Parking Are All In",
    summary: "The U.S. House Transportation and Infrastructure Committee approved H.R. 8870, the BUILD America 250 Act, on May 22, 2026 by a 62-2 vote following a 14-hour markup session. The bipartisan, five-year surface transportation reauthorization bill — the largest infrastructure investment in U.S. history — now advances to a full House floor vote. The bill invests $580 billion in roads, bridges, transit, rail, and highway safety programs. Key provisions with direct relevance to the automotive and trucking industry include: a new $130 annual fee for electric vehicles and $35 for plug-in hybrids to fund road repairs (rising $5 per year starting in 2029), representing the first new revenue stream for the Highway Trust Fund in over three decades; $750 million over five years for new truck parking construction; a first-ever national framework for autonomous commercial motor vehicles, directing the Department of Transportation to create performance-based safety requirements; a requirement that drivers and carriers hauling lithium-ion battery mega packs obtain a hazardous materials CDL endorsement; and the ADAS Functionality and Integrity Act provisions requiring NHTSA to study how common modifications affect ADAS calibration. The bill also includes the Household Goods Shipping Consumer Protection Act and an extension of the Safe Driver Apprenticeship Program for 18-to-20-year-old CDL candidates. The American Trucking Associations called it 'a bold infrastructure proposal' and specifically praised the EV fee provision, noting that 'electric vehicles have not paid their fair share into the Highway Trust Fund as a result of not paying the federal fuel tax.'",
    whyItMatters: "The BUILD America 250 Act has three implications worth tracking for Canadian shop owners. First, the $130 EV road fee signals a political and fiscal shift in how governments on both sides of the border will fund road infrastructure as fuel tax revenue declines — expect Canada to follow with similar proposals within 18 months. Second, the autonomous commercial vehicle framework is the first federal attempt to regulate self-driving trucks — a technology that is already being tested on U.S. highways and will eventually affect the commercial fleet service market. Third, the lithium-ion battery hazmat CDL requirement is a signal that battery transport safety is becoming a regulatory priority — which has downstream implications for shops that handle battery pack removal and replacement on EVs and PHEVs. If you are not already tracking your state and provincial hazmat handling requirements for high-voltage battery work, now is the time to start.",
    source: "House T&I Committee / The Trucker / ATA",
    sourceUrl: "https://www.thetrucker.com/trucking-news/business/build-america-250-act-takes-a-step-forward",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🔧",
    text: "The SEMA-backed ADAS Functionality and Integrity Act — now embedded in the Motor Vehicle Modernization Act of 2026 — would require NHTSA to study how the 10 most common vehicle modifications (lifts, wraps, bumpers, bike racks, wheel/tire changes) affect ADAS calibration, and to publish industry guidelines. For shops that perform these modifications, this is the first step toward standardized recalibration protocols — and a potential new revenue stream.",
    sourceUrl: "https://www.sema.org/news-media/enews/2026/21/semas-landmark-right-modify-bill-advances-house-floor",
  },
  {
    icon: "📉",
    text: "Compact van wholesale values rose 1.46% last week — the strongest-performing segment in the Canadian used vehicle market — while full-size van values dropped 1.77%. This divergence reflects the ongoing shift from large commercial vans toward smaller urban delivery vehicles, driven by last-mile logistics demand. For shops with commercial fleet accounts, compact van service volume is a growth category worth targeting.",
    sourceUrl: "https://canadianautodealer.ca/2026/05/canadian-used-vehicle-prices-fall-0-32-for-the-week/",
  },
  {
    icon: "⚡",
    text: "Zero-emission vehicle sales in Canada reached 21,574 units in March 2026 — 12.2% of overall sales and roughly double year-over-year levels — following the launch of the federal Electric Vehicle Affordability Plan. This is the fastest ZEV adoption rate Canada has ever recorded. For shops in urban markets, EV service volume is no longer a future consideration — it is a present-tense business planning variable.",
    sourceUrl: "https://canadianautodealer.ca/2026/05/canadian-used-vehicle-prices-fall-0-32-for-the-week/",
  },
  {
    icon: "🚛",
    text: "The BUILD America 250 Act includes a 10% axle weight enforcement tolerance for dry bulk vehicles (the VARIANCE Act), and preempts lawsuits seeking to impose liability for failing to equip motor vehicles beyond NHTSA safety standards. For shops that service commercial trucks and heavy equipment, these provisions reduce regulatory uncertainty and may affect the specifications of vehicles you see on your lifts starting in the 2027 model year.",
    sourceUrl: "https://www.thetrucker.com/trucking-news/business/build-america-250-act-takes-a-step-forward",
  },
];

const tipOfTheDay = {
  title: "Document Every OEM Data Access Barrier You Hit This Week",
  text: "The REPAIR Act fight in Washington is being won or lost on the strength of real-world documentation. Every time your shop hits a wall — a scan tool that requires a dealer subscription, a calibration procedure locked behind OEM software, a module that won't program without factory authorization — that is evidence. This week, start a simple log: vehicle year/make/model, the specific procedure blocked, and the tool or subscription required. Share it with your provincial automotive association. AIA Canada, SAAR, and CIAS are actively building the evidentiary record for the next phase of Canadian right to repair enforcement. Your documentation is not just good business practice — it is advocacy.",
};

const quoteOfTheDay = {
  text: "If you own it, you should be able to fix it.",
  author: "Rep. Neal Dunn (FL-02)",
  title: "Sponsor of the REPAIR Act, May 22, 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth Hemi 'Cuda — The Most Valuable American Muscle Car Ever Built",
  description: "The 1970 Plymouth Hemi 'Cuda is the rarest and most valuable American muscle car in existence. Of the 666 'Cudas built with the 426 Hemi in 1970, only 14 were convertibles — and a numbers-matching Hemi 'Cuda convertible in top condition has sold for more than $3.5 million at auction, making it the most expensive American muscle car ever to change hands publicly. The 426 Hemi produced 425 horsepower from the factory — a figure that was deliberately understated to keep insurance premiums manageable. Actual dyno output was closer to 500 hp. The 'Cuda's E-body platform was shared with the Dodge Challenger, but the Plymouth's shorter wheelbase and lighter curb weight gave it a handling edge that the Challenger could not match. The Hemi 'Cuda was built for one year only in this configuration — Chrysler's financial troubles in 1971 ended the era before it could be repeated. Today, every surviving example is a documented piece of American automotive history, and the few that come to market attract bidders from around the world.",
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
                REPAIR Act Clears Committee, Used Vehicle Prices Slide, and a $580B Infrastructure Bill Reshapes the Road Ahead
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Three stories from Washington and the Canadian market that will land directly on your shop floor.
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
