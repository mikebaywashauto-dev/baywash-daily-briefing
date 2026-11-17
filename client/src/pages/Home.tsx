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

const BRIEFING_NUMBER = 150;
const BRIEFING_DATE = "November 17, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/IkVOqWsTyQUfIMjJ.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wYXfPWKTeptNcaLd.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rmVyUuTHoFeOklpC.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xkkdxOGdZAyyUhyQ.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YfRLQwuTPNmetzxo.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CANADIAN TIRE / 25TH QUARTER / AFTERMARKET DEMAND / LOCAL MIX",
    tagColor: "#b91c1c",
    headline: "Canadian Tire Growth: Use the Signal, Then Check Your Own Bays",
    summary: "Collision Repair magazine’s Tuesday Ticker reports that Canadian Tire’s automotive sales rose for a 25th consecutive quarter. The article says third-quarter revenue reached C$4.32 billion, up from C$4.11 billion a year earlier, while comparable retail sales increased 3.2%. This is a retailer-reported performance signal—not a measure of independent-shop bookings, the Canadian service parc or local parts availability.",
    whyItMatters: "Compare the broader aftermarket signal with your own booked work, declined work, parts-category mix and local customer demand. Use it to review service-menu visibility and coverage; do not assume national retail growth justifies extra inventory, a price change or a new warranty promise.",
    source: "Collision Repair magazine — Tuesday Ticker, November 17",
    sourceUrl: "https://www.collisionrepairmag.com/news/article/16541599/market-movers-auto-industry-updates-november-2026",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CANADA / C$313M / ALLISTON / HYBRID TRAINING",
    tagColor: "#0369a1",
    headline: "Ottawa’s Honda Investment Makes Hybrid Readiness Concrete",
    summary: "The Government of Canada announced a C$313 million Strategic Response Fund investment alongside Ontario support for Honda Canada’s C$867 million Alliston retooling plan. The release says the project will support next-generation Civic and CR-V production, increase electrified-vehicle output, modernize manufacturing technologies and provide employee training and upskilling. It is expected to maintain more than 4,000 jobs and support production of up to 400,000 vehicles annually.",
    whyItMatters: "Treat this as a concrete medium-term reason to audit hybrid safety, diagnostic subscriptions, OEM service-information access and technician development. The investment does not establish immediate repair volume or a universal procedure; confirm the exact vehicle, system, model year and OEM instructions before quoting work.",
    source: "Government of Canada — Honda Alliston Investment",
    sourceUrl: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/11/canada-invests-313-million-in-honda-north-america-to-advance-next-generation-vehicle-manufacturing-in-ontario.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "BRAMPTON / C$529M / FUNDING DISPUTE / CUSTOMER COMMS",
    tagColor: "#15803d",
    headline: "Brampton Funding Dispute: Keep Every Customer Claim VIN-First",
    summary: "Collision Repair magazine reports that Industry Minister Mélanie Joly gave Stellantis 30 days to address alleged breaches of its federal funding agreement connected to the abandoned Jeep Compass production plan and proposed sale of the Brampton assembly plant. The article says Ottawa’s 2022 commitment of up to C$529 million covered Brampton and Windsor retooling, while Stellantis Canada said C$24 million received for Brampton’s original plan would be returned voluntarily. The proposed sale remains subject to conditions.",
    whyItMatters: "Do not turn an industrial-policy dispute into a parts, tariff, price or warranty claim. Keep customer communications grounded in the live repair file: verify VIN, vehicle configuration, supplier stock, written ETA and warranty terms for each job.",
    source: "Collision Repair magazine — Stellantis Brampton Update",
    sourceUrl: "https://www.collisionrepairmag.com/news/article/16541599/market-movers-auto-industry-updates-november-2026",
    image: STORY3_IMG,
  }
];

const quickHits = [
  {
    icon: "📈",
    text: "Canadian Tire automotive sales rose for a 25th consecutive quarter; compare the national retailer signal with your own booked work before changing inventory or pricing.",
    sourceUrl: "https://www.collisionrepairmag.com/news/article/16541599/market-movers-auto-industry-updates-november-2026",
  },
  {
    icon: "🏭",
    text: "The federal government is investing C$313 million in Honda’s C$867 million Alliston retooling plan, supporting hybrid production, technology modernization and worker upskilling.",
    sourceUrl: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/11/canada-invests-313-million-in-honda-north-america-to-advance-next-generation-vehicle-manufacturing-in-ontario.html",
  },
  {
    icon: "⚡",
    text: "Honda’s next-generation CR-V is expected to begin Canadian production in 2027 with a hybrid-only powertrain; build a model-specific watchlist, not a generic promise.",
    sourceUrl: "https://www.autonews.com/manufacturing/automakers/anc-honda-crv-2028-canada-production-1112/",
  },
  {
    icon: "🧩",
    text: "Martinrea plans deep European restructuring after a 25% third-quarter net-income decline; company news is not a local supplier-stock or delivery commitment.",
    sourceUrl: "https://www.collisionrepairmag.com/news/article/16541599/market-movers-auto-industry-updates-november-2026",
  },
  {
    icon: "📦",
    text: "LKQ appointed Paul Shaw president of North America effective January 1, 2027; keep supplier redundancy and written ETAs in place regardless of leadership changes.",
    sourceUrl: "https://www.collisionrepairmag.com/news/article/16541599/market-movers-auto-industry-updates-november-2026",
  },
  {
    icon: "✅",
    text: "Before quoting a job, verify VIN, configuration, service procedure, supplier stock, part number, warranty and written ETA—especially when headlines involve tariffs or plant funding.",
    sourceUrl: "https://www.collisionrepairmag.com/news/article/16541599/market-movers-auto-industry-updates-november-2026",
  },
];

const tipOfTheDay = {
  title: "Run a 30-Minute Readiness + Flow Audit",
  text: "Check hybrid safety training, OEM information access, scan-tool subscriptions, parts ETA, work-in-progress and customer update timing. Choose one practical improvement this week, then validate every live job by VIN, procedure, supplier confirmation and written promise.",
};

const quoteOfTheDay = {
  text: "Canadian automotive investment is becoming more electrified and more connected—but the repair file still starts with the exact vehicle in the bay.",
  author: "Baywash shop-floor note",
  title: "Edition No. 150 — Tuesday, November 17, 2026",
};

const rideOfTheDay = {
  name: "1967 Chevrolet Camaro — Deep Blue, First Snow Service Call",
  description: "Deep blue paint, bright chrome and a first-snow shop entrance give this classic Camaro its Tuesday presence. The lesson carries into every modern bay: respect the vehicle’s exact configuration, document the repair path and confirm the part before promising the customer a finish date.",
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
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Tuesday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Independent Shop Team Reviewing Hybrid Service Readiness — Baywash Daily Briefing Edition No. 150"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 150 — Tuesday, November 17, 2026 — Demand Signal / Hybrid Ready / VIN First</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Tuesday Check: Read the Signal—Then Quote the Exact Vehicle in Your Bay
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
