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

const BRIEFING_NUMBER = 146;
const BRIEFING_DATE = "October 21, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/INPEfLcXpBmefVnj.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LwZCfIxvWhHgpUiN.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NBdNsnDLdAtYTkFv.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SHuOwqaaAUpkJmUE.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wKzEflmBdekZOLOw.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TRANSPORT CANADA / 2024 DATA / SAFETY RECORDS / NOT A FORECAST",
    tagColor: "#b91c1c",
    headline: "New Collision Data: Strengthen Safety Records—Don’t Treat It as a Demand Forecast",
    summary: "Transport Canada updated its Canadian Motor Vehicle Traffic Collision Statistics: 2024 on October 20. Its National Collision Database reports 2,050 fatalities, 9,357 serious injuries and 130,551 total injuries in 2024—up 2.5%, 2.7% and 5.5% respectively from 2023. The department notes Ontario and Alberta data are preliminary, New Brunswick data are estimated and a Manitoba reporting change captured more minimal injuries.",
    whyItMatters: "Use the national data as a safety-readiness reminder, not as a prediction of your shop’s collision volume, revenue or insurer work. Keep every repair tied to the actual vehicle: documented condition, applicable procedure, scan/calibration decision, road-test result and customer authorization. A national statistic never replaces the specific repair record in front of you.",
    source: "Transport Canada — Canadian Motor Vehicle Traffic Collision Statistics: 2024",
    sourceUrl: "https://tc.canada.ca/en/road-transportation/statistics-data/canadian-motor-vehicle-traffic-collision-statistics/2024/canadian-motor-vehicle-traffic-collision-statistics-2024",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "UNIMOTOR / 18-MONTH MOVE / HVAC MOTORS / SKU FIRST",
    tagColor: "#0369a1",
    headline: "St. Thomas Unimotor: An 18-Month Parts Watch, Not a Shortage Notice",
    summary: "CBC reports Standard Motor Products plans to reduce production at its St. Thomas, Ontario Unimotor facility and move some work to Reynosa, Mexico within the next 18 months. The company cited ongoing global competitiveness and market pressures—not U.S. tariffs—and said the number of layoffs remains undetermined. CBC says the facility makes blower motors, cooling-fan motors, brushless motors and condenser-fan motors for aftermarket, heavy-equipment and military markets.",
    whyItMatters: "This is a category-level sourcing watch—not evidence that a particular blower or cooling-fan motor is unavailable, changing price, changing origin or subject to a surcharge. Quote the live part number, distributor stock, warranty terms, written ETA and quote expiry. Keep normal OE, aftermarket, remanufactured and recycled choices grounded in the actual vehicle and SKU.",
    source: "CBC News — St. Thomas Unimotor Production Change",
    sourceUrl: "https://www.cbc.ca/news/canada/london/st-thomas-auto-parts-plant-to-cut-production-move-some-work-to-mexico-9.7384399",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CCC BENCHMARK / U.S. DATA / SCAN + CALIBRATION / PROCEDURE FIRST",
    tagColor: "#15803d",
    headline: "CCC Diagnostic Trend: Use a U.S. Benchmark for Intake Discipline, Not a Canadian Rule",
    summary: "CCC’s October 15 Crash Course 2026 Mid-Year Update says 74.8% of repairable appraisals in its network included a scan and 29.9% included a calibration in Q1 2026, up from 70.9% and 23.3% a year earlier. It also says 83% of scans and 47% of calibrations appeared on the initial estimate. CCC describes its data as aggregate electronic appraisal and total-loss network data, so it is a U.S. industry benchmark—not Canadian claim-volume or insurer-policy data.",
    whyItMatters: "Identify possible diagnostics and calibrations early, then use the actual vehicle configuration, damage, OEM procedure and local authorization process to decide the work. Do not add operations because a benchmark percentage rose, and do not present U.S. network data as a Canadian legal requirement, insurer instruction or automatic billing authority.",
    source: "CCC Intelligent Solutions — Crash Course 2026 Mid-Year Update",
    sourceUrl: "https://www.cccis.com/news-and-insights/posts/crash-course-2026-mid-year-update",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🛣️",
    text: "Transport Canada reports 2,050 fatalities, 9,357 serious injuries and 130,551 total injuries in its 2024 national collision dataset; these are safety data, not a shop-demand forecast.",
    sourceUrl: "https://tc.canada.ca/en/road-transportation/statistics-data/canadian-motor-vehicle-traffic-collision-statistics/2024/canadian-motor-vehicle-traffic-collision-statistics-2024",
  },
  {
    icon: "📊",
    text: "The department says Ontario and Alberta data are preliminary, New Brunswick data are estimated, and a Manitoba reporting change captured more minimal injuries in 2024.",
    sourceUrl: "https://tc.canada.ca/en/road-transportation/statistics-data/canadian-motor-vehicle-traffic-collision-statistics/2024/canadian-motor-vehicle-traffic-collision-statistics-2024",
  },
  {
    icon: "⚙️",
    text: "CBC reports SMP will move some St. Thomas Unimotor work to Mexico within 18 months; the company says affected job numbers remain undetermined.",
    sourceUrl: "https://www.cbc.ca/news/canada/london/st-thomas-auto-parts-plant-to-cut-production-move-some-work-to-mexico-9.7384399",
  },
  {
    icon: "🌬️",
    text: "The St. Thomas facility makes blower, cooling-fan, brushless and condenser-fan motors for several markets. Confirm availability by exact part number rather than infer a broad disruption.",
    sourceUrl: "https://www.cbc.ca/news/canada/london/st-thomas-auto-parts-plant-to-cut-production-move-some-work-to-mexico-9.7384399",
  },
  {
    icon: "🖥️",
    text: "CCC reports 74.8% of Q1 repairable appraisals in its network included a scan and 29.9% a calibration—useful U.S. benchmark data, not Canadian authorization rules.",
    sourceUrl: "https://www.cccis.com/news-and-insights/posts/crash-course-2026-mid-year-update",
  },
  {
    icon: "📋",
    text: "CCC says 83% of scans and 47% of calibrations appeared on the initial estimate. The shop action is early procedure review, not automatic addition of an operation.",
    sourceUrl: "https://www.cccis.com/news-and-insights/posts/crash-course-2026-mid-year-update",
  },
];

const tipOfTheDay = {
  title: "Build a Repair-Readiness Record at Intake",
  text: "For each collision file, record the exact vehicle, observed damage, applicable OEM procedure, required scan or calibration, approval path and road-test or release notes. That record helps you act on the car in front of you—not on a national statistic, a part-industry headline or a U.S. benchmark.",
};

const quoteOfTheDay = {
  text: "The year 2024 saw increases in the number of fatalities, serious injuries, and total injuries compared to 2023.",
  author: "Transport Canada",
  title: "Canadian Motor Vehicle Traffic Collision Statistics: 2024 — Updated October 20, 2026",
};

const rideOfTheDay = {
  name: "1970 Buick GSX Stage 1 — Saturn Yellow, Ontario-Plated",
  description: "Saturn Yellow paint, black hood striping and a hood-mounted tach give this 1970 Buick GSX Stage 1 its Wednesday authority. Its reminder fits today’s files: every vehicle needs its own documented condition, procedure and release decision—not a shortcut built from a broad trend.",
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
                {["Safety Records", "SKU First", "Procedure First", "'70 GSX"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Wednesday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Collision Shop Team Reviewing Documented Repair Readiness — Baywash Daily Briefing Edition No. 146"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 146 — Wednesday, October 21, 2026 — Safety Records / SKU First / Procedure First</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Wednesday Check: Work the Exact Vehicle, SKU and Procedure in Front of You
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Buick GSX Stage 1</span>
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
