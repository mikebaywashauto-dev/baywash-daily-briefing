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

const BRIEFING_NUMBER = 141;
const BRIEFING_DATE = "October 16, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jsgWmuwbSWTYreFu.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/INgnlblZpFUNSxrb.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dgeTiLCAJgLDJJvv.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZKgYOXSwoMdquyHN.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/zyLBrjKfZORiyhrY.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "HONDA / U.S. FOLLOW-UP / CANADIAN VIN / VERIFY FIRST",
    tagColor: "#b91c1c",
    headline: "Honda Follow-Up: A Canadian VIN Check Comes First",
    summary: "Driving.ca reports Honda issued a new 4,804-vehicle U.S. follow-up campaign after a supplier reportedly mixed faulty tire-sealant bottles with corrected replacements used in an earlier remedy. The report says the earlier campaign included 118,000 vehicles in Canada, but this new recall is not yet listed on Transport Canada’s site. The reported U.S. scope covers specified 2023–2026 CR-V Hybrid, 2023–2026 Accord Hybrid and 2025–2026 CR-V Fuel Cell EV vehicles.",
    whyItMatters: "Do not import a U.S. re-recall to every Canadian hybrid owner. Check the customer’s VIN in the Canadian manufacturer or Transport Canada record, document the result and keep any puncture repair, tire work or paid inspection separately authorized from a manufacturer campaign.",
    source: "Driving.ca — Honda Tire-Repair-Kit Follow-Up",
    sourceUrl: "https://driving.ca/auto-news/driver-info/honda-recalls-accord-cr-v-hybrids-for-earlier-repair-kit-issue-again",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CHINA EV QUOTA / OFFICIAL TABLE / RETAIL PAUSE / VERIFY",
    tagColor: "#0369a1",
    headline: "China EV Quota: Read the Official Table, Not One Retail Listing",
    summary: "Global Affairs Canada’s October 9 quota report shows 15,931 of 49,000 Chinese-EV quota units used for March 1, 2026 to February 28, 2027, leaving 33,069. Separately, Driving.ca reports Tesla paused orders for its China-imported base Model 3 Premium while its site cited an exhausted import quota. The government table does not establish the availability or allocation for any one manufacturer.",
    whyItMatters: "A paused retail order page is not a blanket parts disruption, price change or bay-schedule forecast. Quote and order from the actual VIN, OE or aftermarket part number, distributor confirmation, written ETA and quote expiry. Treat any brand-allocation explanation beyond the published table as unconfirmed.",
    source: "Global Affairs Canada / Driving.ca — Chinese EV Quota",
    sourceUrl: "https://www.eics-scei.gc.ca/report-rapport/Imports_of_electric_vehicles_from_China.htm",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GEELY / CANADA / 2027 PLAN / NETWORK WATCH",
    tagColor: "#15803d",
    headline: "Geely’s Canadian Network Is a 2027 Watch, Not Today’s Service Promise",
    summary: "Geely Auto says it has established a Canadian team and is developing a retail and service network ahead of introducing its first vehicles to Canadian consumers in 2027. The company says vehicle details, retail and service locations, pricing and availability will be shared as it progresses toward that launch. Those are future announcements—not current confirmation of parts catalogues, independent-shop access or tooling requirements.",
    whyItMatters: "Add the brand to a future product watchlist, but do not buy equipment, advertise capability or promise parts from a forward-looking launch release. Base every job on the vehicle in front of you, published service information and a supplier-confirmed part number.",
    source: "Geely Auto — Canadian Market Entry",
    sourceUrl: "https://newsroom.geely.com/geely-auto-entry-canadian-market",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🛞",
    text: "Driving.ca reports the new Honda follow-up scope is 4,804 U.S. vehicles after a supplier mix-up; it is not yet listed as a Canadian recall on Transport Canada’s site.",
    sourceUrl: "https://driving.ca/auto-news/driver-info/honda-recalls-accord-cr-v-hybrids-for-earlier-repair-kit-issue-again",
  },
  {
    icon: "🚘",
    text: "The reported U.S. Honda follow-up covers specified 2023–2026 CR-V Hybrid, 2023–2026 Accord Hybrid and 2025–2026 CR-V Fuel Cell EV vehicles; Canadian VIN status controls.",
    sourceUrl: "https://driving.ca/auto-news/driver-info/honda-recalls-accord-cr-v-hybrids-for-earlier-repair-kit-issue-again",
  },
  {
    icon: "📋",
    text: "Driving.ca says the earlier Honda tire-repair-kit campaign included 118,000 Canadian vehicles; an earlier campaign does not prove a new Canadian follow-up is open.",
    sourceUrl: "https://driving.ca/auto-news/driver-info/honda-recalls-accord-cr-v-hybrids-for-earlier-repair-kit-issue-again",
  },
  {
    icon: "📊",
    text: "Global Affairs Canada’s October 9 report lists a 49,000 Chinese-EV quota for the current year, 15,931 used and 33,069 remaining—system-level data, not a retailer’s allocation.",
    sourceUrl: "https://www.eics-scei.gc.ca/report-rapport/Imports_of_electric_vehicles_from_China.htm",
  },
  {
    icon: "⚙️",
    text: "The same official table reports 328 units utilized in September’s second period and zero shown for October as of its October 9 update.",
    sourceUrl: "https://www.eics-scei.gc.ca/report-rapport/Imports_of_electric_vehicles_from_China.htm",
  },
  {
    icon: "🇨🇦",
    text: "Geely says its first Canadian consumer vehicles are planned for 2027; locations, pricing, availability and service details remain future updates.",
    sourceUrl: "https://newsroom.geely.com/geely-auto-entry-canadian-market",
  },
];

const tipOfTheDay = {
  title: "Log the Country and the VIN",
  text: "For a campaign reported outside Canada, record the source country, VIN-lookup result, campaign identifier if shown, customer concern and referral route. Obtain separate approval for non-campaign work. This keeps a U.S. news item, a Canadian recall record and your repair order from becoming the same unsupported promise.",
};

const quoteOfTheDay = {
  text: "this recall is not yet listed on the Transport Canada site",
  author: "Driving.ca",
  title: "Honda Tire-Repair-Kit Follow-Up — October 15, 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth Road Runner 440 Six Pack — In-Violet, Ontario-Plated",
  description: "In-Violet paint, a black hood and the unmistakable attitude of a 440 Six Pack make this 1970 Plymouth Road Runner a proper Friday shop feature. Its reminder fits today’s files: identify the exact car, verify the applicable record and document the source before you promise the next step.",
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
                {["Canadian VIN", "Official Table", "Geely 2027", "'70 Road Runner"].map((tag) => (
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
              alt="Canadian Automotive Shop Advisor Verifying a Canadian VIN Record — Baywash Daily Briefing Edition No. 141"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 141 — Friday, October 16, 2026 — Canadian VIN / Official Table / Geely 2027</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Friday Check: Confirm the Country and the VIN Before You Promise the Repair
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Plymouth Road Runner</span>
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
