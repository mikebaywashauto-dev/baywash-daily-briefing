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

const BRIEFING_NUMBER = 154;
const BRIEFING_DATE = "November 21, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/aenbgNVacFPmIIAf.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GWZltmfuHotDnyFt.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/zkxrcEkpEEpUopXU.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KsXSqHJZHQlxglQN.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dCTOlfcbsugBCmTC.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "FORD OAKVILLE / C$464.5M / SUPER DUTY / 100K VEHICLES",
    tagColor: "#b91c1c",
    headline: "Ford Oakville Reopens: A Canadian Truck Signal, Not a Shortcut to a Quote",
    summary: "Innovation, Science and Economic Development Canada announced a C$464.5 million Strategic Response Fund investment supporting Ford Canada’s nearly C$5 billion Oakville retooling project. The release says the complex will produce F-Series Super Duty trucks, add a new stamping plant, introduce multi-energy variants, protect more than 2,000 Canadian jobs and support capacity of up to 100,000 vehicles a year.",
    whyItMatters: "Review commercial-truck capability, lift and bay capacity, diagnostic access, ADAS and calibration procedures, and supplier ETAs. Treat the investment as a medium-term fleet and parts signal—not proof that a part is available or that local repair volume will immediately change. Quote by VIN, configuration and written supplier confirmation.",
    source: "Innovation, Science and Economic Development Canada — Ford Oakville Investment",
    sourceUrl: "https://www.newswire.ca/news-releases/government-of-canada-announces-major-investment-in-ford-motor-company-of-canada-that-will-strengthen-auto-manufacturing-in-ontario-and-canada-885229657.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SERVICE ADVISOR / TRUST / FINDING / CONSEQUENCE / REPAIR PATH",
    tagColor: "#0369a1",
    headline: "The Service Advisor Is a Technical Capability",
    summary: "Aftermarket Matters argues that the service advisor is often the face of the business: explaining what the technician found, why the repair matters, what could happen if it is postponed, and how the work fits the customer’s priorities and budget. The column frames informed, non-pressured communication as a trust-building capability, not a sales script.",
    whyItMatters: "Standardize the customer update around four points: finding, consequence of postponement, repair path and next decision. Track declined-work reasons, callbacks and approval rates without overstating what the numbers prove. Better explanations should reduce uncertainty; they do not replace accurate diagnosis or a written scope.",
    source: "Aftermarket Matters — Your Biggest Competitor Might Be You",
    sourceUrl: "https://www.aftermarketmatters.com/mechanical-repair/your-biggest-competitor-might-be-you/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "COLLISION FLOW / WIP 12.3:1 / 13.3 DAYS / WEEKEND REVIEW",
    tagColor: "#15803d",
    headline: "Your Weekend Review: Move the Vehicle, Not Just the Paper",
    summary: "Collision Repair magazine’s October Pulse of the Industry report says average insurance-paid repair orders reached C$5,377, up 3.1% year over year, while the Canadian industry-average work-in-progress ratio reached 12.3:1 and average cycle time 13.3 days. Average touch time was 2.5 hours per day; the top 10% averaged 6.1 days and 4.5 hours of touch time per repair per day.",
    whyItMatters: "Use the benchmark as a question, not a universal target. Review vehicles by stage, parts hold, supplement delay, touch time, promised date and delivery. Identify the one bottleneck keeping work from moving out before adding overhead or accepting more volume.",
    source: "Collision Repair magazine — Pulse of the Industry, October 2026",
    sourceUrl: "https://www.collisionrepairmag.com/pulse-of-the-industry/article/16425545/autohouse-technologies-inc-exclusive-report-pulse-of-the-industry-october-2026",
    image: STORY3_IMG,
  }
];

const quickHits = [
  {
    icon: "🏭",
    text: "Ford’s Oakville project includes a C$464.5 million federal investment, a new stamping plant, Super Duty production, more than 2,000 protected jobs and capacity of up to 100,000 vehicles annually.",
    sourceUrl: "https://www.newswire.ca/news-releases/government-of-canada-announces-major-investment-in-ford-motor-company-of-canada-that-will-strengthen-auto-manufacturing-in-ontario-and-canada-885229657.html",
  },
  {
    icon: "🗣️",
    text: "Use a four-part service-advisor update: finding, consequence of postponement, repair path and next decision. Track understanding and callbacks, not pressure.",
    sourceUrl: "https://www.aftermarketmatters.com/mechanical-repair/your-biggest-competitor-might-be-you/",
  },
  {
    icon: "📊",
    text: "Canadian collision benchmarks show WIP at 12.3:1 and cycle time at 13.3 days; review the bottleneck that keeps vehicles from moving out.",
    sourceUrl: "https://www.collisionrepairmag.com/pulse-of-the-industry/article/16425545/autohouse-technologies-inc-exclusive-report-pulse-of-the-industry-october-2026",
  },
  {
    icon: "🚗",
    text: "Honda’s C$867 million Alliston retooling plan, backed by a C$313 million federal investment and Ontario support, includes electrified-vehicle production and worker upskilling.",
    sourceUrl: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/11/canada-invests-313-million-in-honda-north-america-to-advance-next-generation-vehicle-manufacturing-in-ontario.html",
  },
  {
    icon: "🧑‍🔧",
    text: "AIA Canada emphasizes mentorship, scholarships, training, recognition and professional development as part of the technician-shortage response; choose one measurable pipeline action this week.",
    sourceUrl: "https://www.aiacanada.com/news/addressing-the-technician-shortage-investing-in-the-next-generation-of-automotive-professionals/",
  },
  {
    icon: "✅",
    text: "Before quoting truck or collision work, verify VIN, configuration, procedure, calibration, supplier stock, parts hold, warranty and written ETA—then track the promised date against handoff.",
    sourceUrl: "https://www.newswire.ca/news-releases/government-of-canada-announces-major-investment-in-ford-motor-company-of-canada-that-will-strengthen-auto-manufacturing-in-ontario-and-canada-885229657.html",
  },
];

const tipOfTheDay = {
  title: "Run a 30-Minute Truck + Trust Audit",
  text: "Check heavy-duty bay capacity, calibration access, supplier ETA and VIN/configuration discipline. Then review one service-advisor conversation for finding, consequence, repair path and next decision. Choose one capability action and one trust action, and measure both next Saturday.",
};

const quoteOfTheDay = {
  text: "They explain what the technician found, why the repair matters, what could happen if it's postponed, and how it fits into the customer's priorities and budget.",
  author: "Mike DelaCruz, Aftermarket Matters",
  title: "Your Biggest Competitor Might Be You — November 16, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Chevelle SS — Forest Green, Saturday Bay Check",
  description: "Forest green paint, bright chrome and a frosty Canadian shop entrance give this Chevelle its Saturday presence. The lesson carries into every modern bay: respect the vehicle’s exact configuration, document the repair path and confirm the part before promising the customer a finish date.",
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
                {["Coverage Check", "VIN First", "Local ETA", "'70 SS"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Saturday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Heavy-Duty Shop Team Reviewing a Truck Inspection — Baywash Daily Briefing Edition No. 154"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 154 — Saturday, November 21, 2026 — Read the Signal / Earn the Trust / Move the Vehicle</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Saturday Check: Read the Signal, Earn the Trust, Move the Vehicle
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Chevelle SS</span>
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
