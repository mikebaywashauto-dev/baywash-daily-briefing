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

const BRIEFING_NUMBER = 142;
const BRIEFING_DATE = "October 17, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TGsHvBapsgPjPXVP.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/kWVXuBgQgRYTLVfC.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XgZiDUHleYsqFnFH.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/woifBuSObMHnruUy.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/PoIeTiBANauYDXkP.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "RAV4 PHEV / U.S. CAMPAIGN / CANADIAN VIN / VERIFY FIRST",
    tagColor: "#b91c1c",
    headline: "RAV4 Plug-In Hybrid: Confirm Canada Before You Call It a Recall",
    summary: "Driving.ca reports a U.S. safety campaign covering 30,978 model-year 2026 Toyota RAV4 Plug-In Hybrids for a motor-generator ECU software issue that can lead to reduced or lost propulsion. The report says Transport Canada had not yet made a corresponding Toyota recall public in Canada at publication time. It describes a U.S. ECU-reflash remedy and December owner notification timing in the United States.",
    whyItMatters: "Treat the U.S. report as a Canadian VIN-research trigger—not proof a Canadian campaign is open. Confirm the vehicle in the manufacturer or Transport Canada record, log the result and keep any driveability diagnosis or other shop work separately authorized from a possible future manufacturer campaign.",
    source: "Driving.ca — Toyota RAV4 Plug-In Hybrid Campaign",
    sourceUrl: "https://driving.ca/auto-news/driver-info/2026-toyota-rav4-plug-in-hybrid-software-recall-loss-power-ecu",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "PREVOST / PLATFORM PROJECT / BUS MANUFACTURING / WATCH",
    tagColor: "#0369a1",
    headline: "Prevost Funding Supports a Platform Project—Not Today’s Parts Promise",
    summary: "The federal government announced an $18.5 million Strategic Response Fund investment in Prevost, a Volvo Group Canada division, supporting an $87.5 million One Prevost Platform project in Sainte-Claire, Quebec. Ottawa says the project supports multiple propulsion technologies, including clean and zero-emission options, strengthens supply-chain and R&D capacity, and maintains 1,265 full-time-equivalent jobs.",
    whyItMatters: "This is a manufacturing and product-platform signal—not confirmation of vehicle allocation, service information, independent-shop authorization or immediate parts availability. Put it on the product watchlist, then quote every fleet job from the actual VIN, published repair procedure and supplier-confirmed part number.",
    source: "Innovation, Science and Economic Development Canada — Prevost",
    sourceUrl: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/10/the-government-of-canada-announces-investment-in-prevost-volvo-group-canada-inc-in-sainte-claire-to-support-canadian-bus-manufacturing-and-clean-tr.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "AUTO ASSEMBLY / PARTS SHIPMENTS / SKU DISCIPLINE / QUOTE",
    tagColor: "#15803d",
    headline: "Assembly Softness Is Not a Replacement-Parts Shortage Forecast",
    summary: "Canadian Auto Dealer, citing DesRosiers Automotive Consultants, says Canadian motor-vehicle assembly shipments continue to decline amid trade tension and production uncertainty. The report also says automotive-parts shipments have remained relatively resilient despite weaker assembly activity, while body and trailer manufacturing shipments are above pre-pandemic levels.",
    whyItMatters: "Do not turn an industry-condition headline into a blanket shortage, automatic surcharge or promise that an order cannot be filled. Confirm each part through the actual VIN, OE, aftermarket or recycled part number, distributor stock, written ETA and quote expiry; explain documented changes on the real order.",
    source: "Canadian Auto Dealer / DesRosiers Automotive Consultants",
    sourceUrl: "https://canadianautodealer.ca/2026/10/canadian-auto-production-loses-momentum/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🚙",
    text: "Driving.ca reports the U.S. RAV4 Plug-In Hybrid campaign covers 30,978 model-year 2026 vehicles; its article said a corresponding Canadian Toyota notice was not public at publication time.",
    sourceUrl: "https://driving.ca/auto-news/driver-info/2026-toyota-rav4-plug-in-hybrid-software-recall-loss-power-ecu",
  },
  {
    icon: "💻",
    text: "The reported U.S. issue concerns motor-generator ECU software; the article describes an ECU reflash as the U.S. remedy—do not treat that as a Canadian VIN result.",
    sourceUrl: "https://driving.ca/auto-news/driver-info/2026-toyota-rav4-plug-in-hybrid-software-recall-loss-power-ecu",
  },
  {
    icon: "📋",
    text: "Driving.ca says U.S. owners of affected RAV4 Plug-In Hybrids are to be notified in December; Canadian dealer or owner timing was not established by that report.",
    sourceUrl: "https://driving.ca/auto-news/driver-info/2026-toyota-rav4-plug-in-hybrid-software-recall-loss-power-ecu",
  },
  {
    icon: "🚌",
    text: "Ottawa’s Prevost announcement is $18.5 million toward an $87.5 million platform project in Sainte-Claire, Quebec.",
    sourceUrl: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/10/the-government-of-canada-announces-investment-in-prevost-volvo-group-canada-inc-in-sainte-claire-to-support-canadian-bus-manufacturing-and-clean-tr.html",
  },
  {
    icon: "⚡",
    text: "The One Prevost Platform is intended to support multiple propulsion technologies, including clean and zero-emission options; no current independent-shop service requirement is announced.",
    sourceUrl: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/10/the-government-of-canada-announces-investment-in-prevost-volvo-group-canada-inc-in-sainte-claire-to-support-canadian-bus-manufacturing-and-clean-tr.html",
  },
  {
    icon: "📦",
    text: "Canadian Auto Dealer says DAC sees automotive-parts shipments as relatively resilient despite weaker assembly activity—verify real availability part by part.",
    sourceUrl: "https://canadianautodealer.ca/2026/10/canadian-auto-production-loses-momentum/",
  },
];

const tipOfTheDay = {
  title: "Write the Cross-Border Recall Note",
  text: "When an owner asks about a U.S.-reported campaign, record the source country, Canadian VIN-lookup result, customer-reported concern and referral route. Then obtain separate approval for non-campaign diagnosis or repair. This preserves the distinction between a foreign report, a Canadian record and your own work order.",
};

const quoteOfTheDay = {
  text: "automotive parts shipments have remained relatively resilient despite weaker vehicle assembly activity.",
  author: "Canadian Auto Dealer, citing DesRosiers Automotive Consultants",
  title: "Canadian Auto Production Loses Momentum — October 16, 2026",
};

const rideOfTheDay = {
  name: "1969 Pontiac GTO Judge Ram Air III — Carousel Red, Ontario-Plated",
  description: "Carousel Red paint, black hood treatment and proper Ram Air III attitude make this 1969 Pontiac GTO Judge a Saturday shop feature. Its reminder fits today’s files: identify the exact vehicle, verify the applicable record and source every repair promise from evidence—not the headline.",
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
                {["Canada First", "Prevost Watch", "Part by Part", "'69 GTO Judge"].map((tag) => (
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
              alt="Canadian Automotive Shop Advisor Confirming a Canadian VIN Record — Baywash Daily Briefing Edition No. 142"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 142 — Saturday, October 17, 2026 — Canada First / Prevost Watch / Part by Part</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Saturday Check: Confirm the Canadian VIN Before You Promise the Remedy
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '69 Pontiac GTO Judge</span>
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
