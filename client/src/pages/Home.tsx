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

const BRIEFING_NUMBER = 140;
const BRIEFING_DATE = "October 15, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/zDpOqZXVWjYUoMgR.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/szqEFLRshLZEvyKJ.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/bcaTrMEnrvrdeucW.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/whXemCOjvOixBuJH.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/UTVJeXOYbpXeACPF.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "KIA / SELTOS AWD / VIN CHECK / SAFETY REFERRAL",
    tagColor: "#b91c1c",
    headline: "Kia Seltos AWD Recall: Verify, Then Park It Outside",
    summary: "CTV News, reporting a Transport Canada notice, says Kia recalled 48,070 Canadian 2024–2026 Seltos SUVs with all-wheel drive. The reported concern is salt and moisture contamination at the 4WD control unit beneath the driver’s seat, which can create a fire-risk condition. Owners are advised to park outdoors, away from other vehicles and structures, until the recall repair is completed.",
    whyItMatters: "Make this a VIN-and-drivetrain safety referral—not a blanket diagnosis for every Seltos or electrical complaint. Check campaign status, record the customer’s reported condition and the safety advice, then keep any unrelated diagnostic or repair authorization separate from the manufacturer campaign.",
    source: "CTV News / Transport Canada — Kia Seltos Recall",
    sourceUrl: "https://www.ctvnews.ca/business/autos/article/kia-is-recalling-more-than-48k-suvs-in-canada-heres-why/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TOYOTA / LAND CRUISER / FUEL CONNECTION / VIN CHECK",
    tagColor: "#0369a1",
    headline: "Toyota Land Cruiser Campaign Starts With the VIN",
    summary: "Toyota Canada says approximately 6,721 Canadian 2024–2027 Land Cruiser vehicles are covered by a safety recall. A fuel-tube connection near the fuel tank could disconnect, allowing fuel to leak until the hybrid-system engine shuts off; Toyota says dealers will inspect the connection, add a supplemental clamp and, if needed, replace the resin tube at no charge. Toyota says known owners will be notified by mid-December.",
    whyItMatters: "Do not convert a model-year headline into a paid fuel-system conclusion. Confirm the VIN in the recall lookup, direct an eligible owner to the dealer campaign and document the referral. If a customer reports fuel odour, leakage or driveability concerns, apply normal shop safety triage and obtain separate approval for unrelated work.",
    source: "Toyota Canada — Land Cruiser Safety Recall",
    sourceUrl: "https://media.toyota.ca/en/releases/2026/toyota-is-conducting-a-recall-involving-certain-toyota-vehicles1.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "EVAP / SERVICE MIX / HYBRIDS / CAPABILITY PLANNING",
    tagColor: "#15803d",
    headline: "Plan Hybrid and EV Work From the Car Parc, Not a Headline",
    summary: "Transport Canada says its EV Affordability Program supports eligible purchase or lease transactions and had $1.92 billion remaining as of October 1. That is not a repair or equipment subsidy. Separately, CADA’s retrospective 2025 data found hybrids rose to 230,081 registrations while ZEVs were 9.32% of new registrations, down from 14.6% in 2024—a change in mix, not a forecast for your bay schedule.",
    whyItMatters: "Use booked work, local vehicle mix and technician competency to decide training, tooling and process investments. Confirm the actual vehicle, job scope and safety procedure before accepting high-voltage work; do not promise an incentive, reimbursement or immediate demand shift from a funding announcement.",
    source: "Transport Canada / Canadian Auto Dealer",
    sourceUrl: "https://tc.canada.ca/en/road-transportation/innovative-technologies/electric-vehicles/electric-vehicle-affordability-program",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🚙",
    text: "The Kia campaign reported by CTV applies to 48,070 Canadian 2024–2026 Seltos SUVs with all-wheel drive; confirm the individual vehicle by VIN.",
    sourceUrl: "https://www.ctvnews.ca/business/autos/article/kia-is-recalling-more-than-48k-suvs-in-canada-heres-why/",
  },
  {
    icon: "🏠",
    text: "Affected Seltos owners are advised to park outdoors and away from other vehicles and structures until the recall repair is complete.",
    sourceUrl: "https://www.ctvnews.ca/business/autos/article/kia-is-recalling-more-than-48k-suvs-in-canada-heres-why/",
  },
  {
    icon: "🔌",
    text: "Kia’s reported dealer remedy is inspection of the 4WD control unit, replacement of it and other components if necessary, and installation of a protective cover.",
    sourceUrl: "https://www.ctvnews.ca/business/autos/article/kia-is-recalling-more-than-48k-suvs-in-canada-heres-why/",
  },
  {
    icon: "⛽",
    text: "Toyota says its 2024–2027 Land Cruiser campaign involves about 6,721 Canadian vehicles and a fuel-tube connection near the tank; VIN status is the confirmation tool.",
    sourceUrl: "https://media.toyota.ca/en/releases/2026/toyota-is-conducting-a-recall-involving-certain-toyota-vehicles1.html",
  },
  {
    icon: "🔧",
    text: "Toyota’s dealer remedy is a supplemental clamp or, if necessary, a resin fuel-tube replacement plus the clamp; known owners are to be notified by mid-December.",
    sourceUrl: "https://media.toyota.ca/en/releases/2026/toyota-is-conducting-a-recall-involving-certain-toyota-vehicles1.html",
  },
  {
    icon: "⚡",
    text: "EVAP had $1.92 billion remaining as of October 1 and runs until March 2031 or funding exhaustion, but it concerns eligible purchases and leases—not repair reimbursement.",
    sourceUrl: "https://tc.canada.ca/en/road-transportation/innovative-technologies/electric-vehicles/electric-vehicle-affordability-program",
  },
];

const tipOfTheDay = {
  title: "Make the VIN-Safety Referral Note",
  text: "For every recall conversation, record the VIN lookup result, customer-reported symptoms, safety guidance provided, referral destination and the separate authorization for any unrelated shop work. A clean note prevents a campaign headline from becoming an unapproved diagnosis or repair promise.",
};

const quoteOfTheDay = {
  text: "Owners are advised to park their vehicles outdoors and away from other vehicles and structures until the repairs are completed.",
  author: "CTV News, reporting Transport Canada’s Kia recall notice",
  title: "Kia Seltos AWD Recall — October 9, 2026",
};

const rideOfTheDay = {
  name: "1971 Dodge Challenger R/T 440 Six Pack — Citron Yella, Ontario-Plated",
  description: "Citron Yella paint, black side graphics and unapologetic 440 Six Pack muscle make this 1971 Dodge Challenger R/T a proper Thursday shop feature. Its reminder fits the day’s safety files: confirm the exact vehicle, document what you know and keep campaign work distinct from the repair promise you make to the customer.",
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
                {["VIN First", "Seltos AWD", "Land Cruiser", "'71 Challenger"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Thursday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Automotive Shop Advisor Performing a VIN-Based Safety Check — Baywash Daily Briefing Edition No. 140"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 140 — Thursday, October 15, 2026 — VIN First / Seltos AWD / Land Cruiser</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Thursday Check: Verify the VIN Before You Promise the Repair
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '71 Dodge Challenger</span>
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
