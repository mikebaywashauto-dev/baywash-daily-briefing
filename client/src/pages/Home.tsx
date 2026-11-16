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

const BRIEFING_NUMBER = 149;
const BRIEFING_DATE = "November 16, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GJPazoEHUpivjdqF.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ANaoiNYfBkNdCvSi.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/nruyMqLDEcCXdnQj.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wlAWWEVxAWaVHgal.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/IvwfGLpLiEePMKfo.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CANADA / OCTOBER SALES / SUBARU HONDA TOYOTA / MIX WATCH",
    tagColor: "#b91c1c",
    headline: "October Sales Gain: Let Your Local VIN Mix Set the Parts Plan",
    summary: "Automotive News Canada reports that Canadian new-vehicle sales were estimated to rise 1.8% in October, with Subaru, Honda and Toyota posting double-digit percentage gains. Subaru sold 9,198 vehicles versus 5,422 a year earlier, while the article notes the Outback returned to 1,630 units from essentially zero. This is a new-vehicle sales report—not a local service-parc count, parts-demand forecast or guarantee of your shop’s mix.",
    whyItMatters: "Use the signal to compare recent bookings, customer vehicles and repeat repair categories against your current catalog and technical coverage. Do not turn a national sales estimate into an inventory mandate; identify the nameplates actually entering your bays, then verify VIN-specific fitment, procedure, supplier stock and ETA.",
    source: "Automotive News Canada — October Canadian Sales",
    sourceUrl: "https://www.autonews.com/retail/anc-canadian-new-vehicle-sales-october-1109/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "ALLISTON / C$166M / HYBRID PRODUCTION / TRAINING WATCH",
    tagColor: "#0369a1",
    headline: "Honda’s Alliston Investment Makes Hybrid Readiness a Local Shop Issue",
    summary: "Honda Canada announced a C$166 million investment in its Alliston, Ontario manufacturing facilities as part of a broader C$867 million commitment. Honda says the project will support next-generation hybrid-electric and gasoline-powered vehicles, engines and hybrid systems while maintaining a workforce of more than 4,000 Canadians. The plant currently builds Civic and CR-V gasoline and hybrid variants.",
    whyItMatters: "Treat this as a medium-term Canadian vehicle-mix signal: audit high-voltage safety procedures, scan-tool coverage, hybrid service information and technician training. The announcement does not establish immediate repair volume or a specific repair procedure, so confirm model year, system architecture and OEM requirements before quoting work.",
    source: "Honda Canada — Canadian Manufacturing Investment",
    sourceUrl: "https://hondanews.ca/en-CA/releases/honda-strengthens-commitment-to-canadian-manufacturing-with-investment-to-expand-hybrid-production",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "2028 CR-V / 100% HYBRID / CANADIAN-BUILT / FORWARD WATCH",
    tagColor: "#15803d",
    headline: "All-Hybrid CR-V Announced: Build a Watchlist, Not a Shortcut",
    summary: "Honda Canada says the next-generation 2028 CR-V will arrive in 2027 with an exclusively hybrid powertrain, a new platform and a new two-motor hybrid system. Honda reports that the CR-V Hybrid was Canada’s best-selling hybrid in 2025, represents nearly 70% of CR-V sales and is on pace to grow 17% year over year; all CR-V models sold in Canada are built at Alliston. These are manufacturer-reported product and sales figures.",
    whyItMatters: "Put the CR-V and other common hybrid platforms on a forward-looking training and information watchlist. Confirm model year, system architecture, isolation requirements, OEM procedures and parts availability before scheduling or promising a repair; a product announcement is not a substitute for the live service file.",
    source: "Honda Canada — Next-Generation CR-V Announcement",
    sourceUrl: "https://hondanews.ca/en-CA/releases/all-new-honda-cr-v-to-go-100-hybrid-next-year-honda-canadas-top-selling-suv-to-debut-new-platform-powertrain-and-design",
    image: STORY3_IMG,
  }
];

const quickHits = [
  {
    icon: "🚗",
    text: "Canadian new-vehicle sales were estimated up 1.8% in October; Subaru, Honda and Toyota posted double-digit gains, but national sales do not define your local service mix.",
    sourceUrl: "https://www.autonews.com/retail/anc-canadian-new-vehicle-sales-october-1109/",
  },
  {
    icon: "🏭",
    text: "Honda’s Alliston plan includes C$166 million for next-generation hybrid and gasoline production, within a broader C$867 million commitment; treat it as a medium-term readiness signal.",
    sourceUrl: "https://hondanews.ca/en-CA/releases/honda-strengthens-commitment-to-canadian-manufacturing-with-investment-to-expand-hybrid-production",
  },
  {
    icon: "⚡",
    text: "Honda says the 2028 CR-V arriving next year will be 100% hybrid and built in Canada; confirm the live model year and system architecture before quoting service.",
    sourceUrl: "https://hondanews.ca/en-CA/releases/all-new-honda-cr-v-to-go-100-hybrid-next-year-honda-canadas-top-selling-suv-to-debut-new-platform-powertrain-and-design",
  },
  {
    icon: "📈",
    text: "A U.S. forecast puts post-warranty electrification-parts revenue growth near 24% annually through 2035 and ADAS hardware near 23%; use it as a training prompt, not Canadian demand data.",
    sourceUrl: "https://www.aftermarketmatters.com/national-news/electrification-parts-revenue-to-grow-24-annually-through-2035/",
  },
  {
    icon: "🛠️",
    text: "Canadian collision repair averages reached C$5,377 per insurance-paid order in October, while WIP hit 12.3:1 and cycle time reached 13.3 days—measure flow before adding overhead.",
    sourceUrl: "https://www.collisionrepairmag.com/pulse-of-the-industry/article/16425545/autohouse-technologies-inc-exclusive-report-pulse-of-the-industry-october-2026",
  },
  {
    icon: "✅",
    text: "Before quoting hybrid or ADAS work, verify training, isolation equipment, OEM information, scan-tool access, calibration steps, parts ETA and job documentation.",
    sourceUrl: "https://www.aiacanada.com/news/addressing-the-technician-shortage-investing-in-the-next-generation-of-automotive-professionals/",
  },
];

const tipOfTheDay = {
  title: "Run a 30-Minute Hybrid + ADAS Readiness Audit",
  text: "Check staff safety training, OEM information access, scan-tool subscriptions, isolation equipment, calibration process, parts ETA and job documentation. Turn the result into one practical upgrade this week, then validate every live job by VIN, procedure and supplier confirmation.",
};

const quoteOfTheDay = {
  text: "The opportunity isn't simply getting more work through the door. It's getting more work out.",
  author: "Mike Gilliland",
  title: "Quoted by Collision Repair magazine — November 13, 2026",
};

const rideOfTheDay = {
  name: "1971 Dodge Charger R/T — Forest Green, Canadian Shop Morning",
  description: "Deep metallic green, quad headlamps and a cold late-autumn shop entrance give this classic Charger its Monday presence. The lesson carries into every modern bay: respect the vehicle’s exact configuration, document the repair path and confirm the part before promising the customer a finish date.",
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
                {["Coverage Check", "VIN First", "Local ETA", "'70 GTX"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Monday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Independent Shop Team Reviewing Hybrid Service Readiness — Baywash Daily Briefing Edition No. 149"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 149 — Monday, November 16, 2026 — Hybrid Ready / Flow First / VIN Confirmed</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Monday Check: Build Hybrid Readiness—Then Move Every Job with Measured Flow
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Plymouth GTX</span>
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
