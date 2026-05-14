// 2026-05-14
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 12;
const BRIEFING_DATE = "May 14, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YKVCcPWhETpVQxZp.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YKVCcPWhETpVQxZp.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZsWxaLdDsmAFGWVw.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LzutbZAIFBSwzKyP.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/WIVvfyVBYlmRTiSL.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TRADE",
    tagColor: "#e05a1a",
    headline: "Canada's Auto Industry at 'Inflection Point' — USMCA Talks Likely to Stretch Past July 1 as Leaders Grow Cautiously Optimistic",
    summary: "A new RBC report released this week declares Canada's auto industry is at a strategic crossroads, with its future hinging on securing tariff-free access to the United States. The report outlines four scenarios ranging from a best-case of two million units assembled annually by 2040 to a worst-case where Canadian assembly plants shutter entirely. Meanwhile, at the Ontario Auto Forum 2026 in Toronto on May 12, APMA CEO Flavio Volpe stated that Canada has the numbers on its side in the USMCA review — but cautioned that talks will likely stretch past the July 1 deadline. Despite the uncertainty, Canadian auto leaders are gaining confidence that the two countries will ultimately preserve the deeply integrated North American supply chain that has defined the industry for decades. Ottawa has already committed $1.5 billion in tariff relief through the Business Development Bank of Canada and the Regional Tariff Response Initiative to help suppliers manage immediate cost pressures from U.S. duties on steel, aluminum, and copper.",
    whyItMatters: "For independent shop owners, the tariff saga is not just a manufacturing story — it directly affects your parts costs and supply reliability. With U.S. duties on steel, aluminum, and copper rippling through the supply chain, expect continued price volatility on components ranging from brake hardware to exhaust systems. The good news: Ottawa's $1.5B relief package signals the government is actively supporting the sector. Stay in close contact with your jobber about lead times and pricing changes, and consider locking in pricing on high-turn categories while the trade situation remains fluid. A resolution before year-end could stabilize costs significantly.",
    source: "Automotive News Canada / Motor Illustrated",
    sourceUrl: "https://www.autonews.com/manufacturing/automakers/anc-tariffs-canada-confident-deal-timeline-delay-0512/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "PARTS SUPPLY",
    tagColor: "#dc2626",
    headline: "First Brands Bankruptcy Sends Shockwaves Through Canadian Aftermarket — Raybestos, Centric, and StopTech Brands Dismantled",
    summary: "The wind-down of First Brands Group — parent company of Raybestos, Centric Parts, and StopTech — is creating immediate and serious disruption for Canadian jobbers and repair shops. Hilco Global and SB360 have been engaged to liquidate the company's inventory, machinery, and equipment, confirming there is no restructuring path forward for key divisions including Brake Parts Inc. and Cardone Industries. These are not fringe brands: Raybestos and Centric carry deep recognition with Canadian technicians and are embedded in catalogue systems, warranty processes, and established purchasing patterns across the country. The removal of these lines forces shops to urgently re-evaluate their brake and remanufactured parts sourcing, validate cross-references, and retrain counter staff on replacement brands. Industry analysts warn that a poorly managed transition risks long-term customer defection for jobbers who fail to act decisively.",
    whyItMatters: "If your shop relies on Raybestos, Centric, or StopTech for brake jobs, you need to act now. These brands are being liquidated — not acquired — meaning your current supplier relationships for these lines are ending. Contact your jobber immediately to understand their replacement strategy and which alternative brands they are transitioning to. This is also an opportunity: shops that proactively communicate the change to their customers, explain the quality of the replacement brands, and maintain fill rates will strengthen loyalty. Prioritize SKU-level analysis of your most-used brake parts and ensure your DMS is updated with new part numbers before the disruption hits your service lane.",
    source: "Auto Service World / PR Newswire",
    sourceUrl: "https://www.autoserviceworld.com/from-the-magazine-disruption-disinflation-and-structural-reset/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "BUSINESS",
    tagColor: "#2563eb",
    headline: "Independent Shops Drifting Toward Older Vehicles — Industry Coach Warns of a 'Slow Erosion' of Profitability",
    summary: "Murray Voth, president of RPM Training, delivered a stark warning at the AIA Canada National Conference: independent shops are quietly losing market share on newer vehicles, not because dealerships are stealing work, but because many shops have failed to keep pace with technology. Voth cited industry data showing that the average Canadian independent shop is increasingly servicing vehicles that are older, harder to diagnose, and owned by consumers under greater financial pressure. With approximately 60 per cent of independent shops employing between one and four people, the capital and time required for ongoing technology investment is a genuine barrier. The result is a cycle where shops appear busy but are working harder for lower margins on vehicles with deferred maintenance and complex sourcing challenges. Voth estimates there are billions of dollars in unperformed maintenance across Canada — a massive opportunity for shops willing to invest in communication, technology, and professional positioning.",
    whyItMatters: "This story is a wake-up call. If your shop is 'always busy' but margins feel tight, check your vehicle mix. Are you seeing more 10-year-old cars and fewer late-model vehicles? That shift is a leading indicator of a profitability problem. The solution is not to turn away older vehicles — it is to invest in the diagnostic tools and training needed to service newer ones competitively. Start by auditing your last 90 days of ROs: what is the average model year of vehicles you serviced? If it is trending older, it is time to invest in ADAS calibration equipment, subscribe to a technical information service, and consider a manufacturer certification program to signal to newer-car owners that your shop is ready for their vehicle.",
    source: "Auto Service World",
    sourceUrl: "https://www.autoserviceworld.com/whats-pushing-independents-toward-older-cars-hurting-profit/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇨🇦",
    text: "Ottawa's $6B 'Team Canada Strong' skilled trades initiative, announced April 28, targets youth unemployment and aims to recruit thousands of new apprentices into the trades — including automotive — over the next five years.",
    sourceUrl: "https://budget.canada.ca/update-miseajour/2026/report-rapport/chap2-en.html",
  },
  {
    icon: "⚠️",
    text: "A growing black market for tire collection is emerging in Canada as disruptions to provincial tire recycling programs create gaps — shop owners should ensure their tire disposal practices are fully documented and compliant.",
    sourceUrl: "https://www.autoserviceworld.com/warnings-of-growing-black-market-amid-tire-collection-disruptions/",
  },
  {
    icon: "📉",
    text: "AutoCanada reported a 4.1% revenue decline in Q1 2026 driven by softer new vehicle sales and parts revenue — a signal that the broader market normalization is affecting all segments of the industry.",
    sourceUrl: "https://www.newswire.ca/news-releases/autocanada-reports-first-quarter-2026-results-and-advances-strategic-initiatives-820303116.html",
  },
  {
    icon: "🔬",
    text: "The EV aftermarket is projected to grow significantly as regulatory changes enhance independent shop access to vehicle data and AI-powered diagnostics create new high-value service opportunities for prepared shops.",
    sourceUrl: "https://finance.yahoo.com/sectors/technology/articles/electric-vehicle-aftermarket-global-business-151100304.html",
  },
];

const tipOfTheDay = {
  title: "Audit Your Vehicle Mix Before It Audits You",
  text: "Pull a report from your shop management system on the average model year of vehicles you serviced in the last 90 days. If that number is trending older — say, 2014 or earlier — your shop may be drifting into a lower-margin segment without realizing it. The fix is not to turn away older cars, but to actively market to newer-vehicle owners by investing in the certifications, tools, and online presence that signal your shop is ready for their late-model vehicle. One targeted Google Business Profile update highlighting your ADAS or EV capabilities can shift the mix meaningfully within a single quarter.",
};

const quoteOfTheDay = {
  text: "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
  author: "William Arthur Ward",
  title: "A Reminder for Every Shop Owner Navigating 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth 'Cuda 440 Six Pack",
  description: "The 1970 Plymouth 'Cuda 440 Six Pack is one of the most fearsome and collectible muscle cars ever produced. Powered by a 440 cubic-inch V8 fed by three Holley two-barrel carburetors — the legendary 'Six Pack' setup — it produced a factory-rated 390 horsepower, though real-world output was considerably higher. The 'Cuda's aggressive E-body styling, with its short deck, long hood, and bold graphics, made it an instant icon. Built in Canada at the Chrysler Windsor Assembly Plant, the 'Cuda represents a proud chapter in Canadian automotive manufacturing history and remains one of the most sought-after collector cars in North America today.",
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
              <h3 className="font-['Oswald'] text-4xl md:text-5xl text-white font-bold leading-tight uppercase mb-6">
                Trade Turbulence, Parts Disruption & the Fight for Newer Cars: What Every Canadian Shop Must Know Today
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                From USMCA negotiations stretching into summer to the collapse of major brake brands and a quiet drift 
                toward older vehicles — today's briefing covers the three forces reshaping the Canadian aftermarket right now.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Content Grid */}
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
