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

const BRIEFING_NUMBER = 148;
const BRIEFING_DATE = "October 23, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZcTyYqCjqsTxXESI.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TwMmyvqaNWfnBaLW.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/zJqwpRJlGPnhcvTV.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wXETniVeeQmODqLV.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/iuLORtOJMSiDkDHO.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "H1 2026 / 28.4% U.S.-BUILT / NEW-VEHICLE SALES / MIX WATCH",
    tagColor: "#b91c1c",
    headline: "Canadian New-Vehicle Mix Shifts: Plan Coverage by VIN, Not Assumption",
    summary: "The Detroit Free Press, citing J.D. Power Canada data, reports that U.S.-built vehicles made up 28.4% of Canadian new-vehicle sales in the first half of 2026, down from 35.4% in the first half of 2025. The report says vehicles built in duty-free Mexico and Japan have taken a larger share. This is a new-vehicle sales-mix measure—not the Canadian service parc, individual vehicle origin, repair demand or parts availability.",
    whyItMatters: "Use the trend as a coverage-planning prompt: review the actual VINs arriving in your bays, commonly needed service information, diagnostic capability and confirmed supplier options. Do not infer an immediate parts shortage, tariff charge, price move or repair-volume change from a national sales-share statistic. Confirm build, configuration, procedure and part number for each job.",
    source: "Detroit Free Press — J.D. Power Canada Sales-Mix Reporting",
    sourceUrl: "https://www.freep.com/story/money/cars/ford/2026/10/22/u-s-made-vehicle-sales-fall-to-new-low-in-canada-what-details-show/92330174007/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "2025–30 FORECAST / FOREIGN NAMEPLATES / U.S. DATA / COVERAGE CHECK",
    tagColor: "#0369a1",
    headline: "Foreign-Nameplate Forecast: A Coverage Prompt, Not a Canadian Stocking Order",
    summary: "Aftermarket Matters reports the latest Lang Aftermarket iReport expects foreign nameplates to produce more than 90% of total U.S. car and light-truck aftermarket product growth at user price from 2025 to 2030, adding more than US$23 billion in product volume. The analysis says competitive strength will vary by nameplate, distribution channel, repair outlet and product category. It is a multi-year U.S. forecast—not Canadian registrations, Canadian demand data or a prediction for any one shop.",
    whyItMatters: "Check your local service mix and recurring repair categories, then keep catalog fitment, technical information and vendor coverage current for the foreign-nameplate vehicles you actually service. Do not turn a U.S. forecast into a blanket mandate to change brands, pre-stock inventory, alter warranty commitments or source a part without VIN, application and supplier confirmation.",
    source: "Aftermarket Matters — Lang Aftermarket iReport Coverage",
    sourceUrl: "https://www.aftermarketmatters.com/national-news/foreign-nameplates-to-generate-90-of-light-vehicle-aftermarket-product-growth/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "WORLDPAC UPDATE / U.S. OPERATIONS / LOCAL CONFIRMATION / FITMENT FIRST",
    tagColor: "#15803d",
    headline: "Supplier Network Update: Local Availability Still Requires a Live Part Check",
    summary: "Aftermarket Matters reports that Worldpac’s CEO described US$150 million of inventory growth since the company became independent, 190,000 SKUs, roughly 325 warehouses and 40,000 to 50,000 daily deliveries in its U.S. operations. The report also says the company has added branches, delivery routes and technology to improve picks and routes. These are supplier-reported U.S. operating figures—not a Canadian stock commitment, local delivery promise, fitment warranty or price offer.",
    whyItMatters: "For every repair, confirm the exact part number, vehicle application, brand/source, local stock, order cut-off, warranty terms and written ETA with the supplier serving your location. A large catalog or network presentation does not prove that a particular Canadian customer’s component is available, correct or covered today.",
    source: "Aftermarket Matters — Worldpac Supplier & Training Expo Update",
    sourceUrl: "https://www.aftermarketmatters.com/national-news/ceo-highlights-worldpac-performance-since-acquisition/",
    image: STORY3_IMG,
  }
];

const quickHits = [
  {
    icon: "🚗",
    text: "U.S.-built vehicles accounted for 28.4% of Canadian new-vehicle sales in H1 2026, versus 35.4% in H1 2025, according to J.D. Power Canada data reported by the Detroit Free Press.",
    sourceUrl: "https://www.freep.com/story/money/cars/ford/2026/10/22/u-s-made-vehicle-sales-fall-to-new-low-in-canada-what-details-show/92330174007/",
  },
  {
    icon: "🧭",
    text: "The sales-share figure is a market-mix measure, not a parts-availability statistic or a forecast for your shop’s repair demand. Use the actual VIN and application for each file.",
    sourceUrl: "https://www.freep.com/story/money/cars/ford/2026/10/22/u-s-made-vehicle-sales-fall-to-new-low-in-canada-what-details-show/92330174007/",
  },
  {
    icon: "📈",
    text: "Lang forecasts foreign nameplates will generate more than 90% of U.S. light-vehicle aftermarket product growth from 2025–2030—use it as a coverage check, not Canadian demand data.",
    sourceUrl: "https://www.aftermarketmatters.com/national-news/foreign-nameplates-to-generate-90-of-light-vehicle-aftermarket-product-growth/",
  },
  {
    icon: "🧩",
    text: "The Lang report says brand strength will vary by vehicle nameplate, distribution channel, repair outlet group and product category; fitment and source must stay job-specific.",
    sourceUrl: "https://www.aftermarketmatters.com/national-news/foreign-nameplates-to-generate-90-of-light-vehicle-aftermarket-product-growth/",
  },
  {
    icon: "📦",
    text: "Worldpac said its U.S. operations carry 190,000 SKUs and make 40,000–50,000 daily deliveries. Neither number confirms stock or delivery timing for a Canadian order.",
    sourceUrl: "https://www.aftermarketmatters.com/national-news/ceo-highlights-worldpac-performance-since-acquisition/",
  },
  {
    icon: "✅",
    text: "Before quoting a part, verify live local stock, precise application, brand/source, warranty, order cut-off and written ETA with the supplier that serves your shop.",
    sourceUrl: "https://www.aftermarketmatters.com/national-news/ceo-highlights-worldpac-performance-since-acquisition/",
  },
];

const tipOfTheDay = {
  title: "Add a Coverage Check to Your Weekly Parts Review",
  text: "Review the top VINs and repeat repair categories arriving this week, then confirm local supplier options, fitment, technical information and warranty/source records. For each live job, validate through the vehicle application and written ETA—not a national sales share or supplier presentation.",
};

const quoteOfTheDay = {
  text: "The competitive strength of these five types of brands will vary substantially by vehicle nameplate, distribution channel, repair outlet group, and product category.",
  author: "Lang Aftermarket iReport",
  title: "Reported by Aftermarket Matters — October 21, 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth GTX 440 Six Barrel — In-Violet Metallic, Ontario-Plated",
  description: "In-Violet Metallic paint, a twin-scoop hood and 440 Six Barrel muscle give this 1970 Plymouth GTX its Friday presence. Its reminder fits today’s parts file: confirm the exact application, source and arrival path before promising the customer a component—not after a broad industry signal.",
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
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Friday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Independent Shop Team Reviewing VIN-Specific Parts Coverage — Baywash Daily Briefing Edition No. 148"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 148 — Friday, October 23, 2026 — Coverage Check / VIN First / Local ETA</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Friday Check: Plan Coverage Broadly—Then Quote Every Exact Part Locally
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
