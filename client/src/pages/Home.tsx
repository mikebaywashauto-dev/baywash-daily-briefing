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

const BRIEFING_NUMBER = 143;
const BRIEFING_DATE = "October 18, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mLlAYTDNBoZCwCZh.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ySsNhczEJsCwXApD.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GWzhSKaURjvumOFB.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OIzmXiiwRYZjtBfg.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rReTUBOiuWVrklQx.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "VW ID.4 / CANADIAN RECALL / 80% LIMIT / VIN FIRST",
    tagColor: "#b91c1c",
    headline: "VW ID.4: Respect the Interim 80% Charge Instruction—Do Not Invent a Repair",
    summary: "Driving.ca and The Car Guide report Volkswagen has a Canadian recall for 5,633 model-year 2023–2025 ID.4 vehicles involving high-voltage battery overheating/fire risk. Both describe an interim instruction to limit charging to 80%. Driving.ca says Volkswagen is not advising owners to park outside for this campaign and says no final remedy is available; The Car Guide says Transport Canada’s notice identifies a fire risk even when parked with the ignition off.",
    whyItMatters: "Use the campaign as a VIN-and-owner-guidance handoff, not as permission to alter high-voltage settings or promise a repair. Confirm the Canadian VIN status, document the owner’s concern and direct the customer to Volkswagen’s campaign guidance. Keep unrelated work separately authorized; do not infer every ID.4, EV or charging event is affected.",
    source: "Driving.ca / The Car Guide — Volkswagen ID.4 Recall",
    sourceUrl: "https://driving.ca/auto-news/driver-info/volkswagen-id-4-recall-fire-risk-charging",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "RAV4 PHEV / CANADIAN RECORD / SOFTWARE UPDATE / VIN",
    tagColor: "#0369a1",
    headline: "RAV4 Plug-In Hybrid: The Canadian Record Is Now the Starting Point",
    summary: "INSAUGA reports Transport Canada has a Toyota recall for 7,847 model-year 2026 RAV4 Plug-In Hybrid vehicles. It says a motor-generator ECU software problem could shut down the plug-in hybrid system while driving, leading to a sudden loss of power to the wheels. The report says Toyota will notify owners by mail and direct them to a dealership for a software update.",
    whyItMatters: "This update makes the individual Canadian VIN—not yesterday’s U.S. report—the practical first check. Do not say every RAV4 or conventional RAV4 Hybrid is covered. Route an eligible VIN to the manufacturer campaign; use normal safety triage for any customer-reported driveability concern and separately authorize independent diagnostic work.",
    source: "INSAUGA — Toyota RAV4 Plug-In Hybrid Recall",
    sourceUrl: "https://www.insauga.com/recall-nearly-8000-vehicles-could-suddenly-lose-power-in-canada/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "MERCEDES / BRAKE HOSES / CANADIAN RECALL / REFER",
    tagColor: "#15803d",
    headline: "Mercedes Brake-Hose Campaign: Refer the VIN, Then Triage the Actual Complaint",
    summary: "Motor Illustrated reports a Transport Canada campaign affecting 2,160 Canadian 2021–2025 Mercedes-Benz S-Class and Maybach S-Class vehicles. The report quotes Transport Canada: front brake hoses could fail and cause a progressive brake-fluid leak, potentially changing brake-pedal feel and travel and reducing braking. The reported manufacturer action is owner notification and dealer replacement of the front brake hoses.",
    whyItMatters: "A campaign headline does not diagnose every brake concern. Check the customer’s VIN, record the result and route eligible vehicles to the manufacturer remedy. Any pedal-feel change, warning or visible leak still calls for your normal safety workflow; obtain separate authorization for any independent diagnosis or repair outside the campaign.",
    source: "Motor Illustrated — Mercedes-Benz S-Class Brake-Hose Recall",
    sourceUrl: "https://motorillustrated.com/mercedes-benz-recalls-more-than-30000-s-class-sedans-over-brake-issue/199143/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🔋",
    text: "Canadian reports place the VW ID.4 recall at 5,633 model-year 2023–2025 vehicles; the interim manufacturer instruction is to limit charging to 80%.",
    sourceUrl: "https://driving.ca/auto-news/driver-info/volkswagen-id-4-recall-fire-risk-charging",
  },
  {
    icon: "🔌",
    text: "Driving.ca says Volkswagen has not advised owners to park outside for this ID.4 campaign; no final remedy is currently available.",
    sourceUrl: "https://driving.ca/auto-news/driver-info/volkswagen-id-4-recall-fire-risk-charging",
  },
  {
    icon: "⚡",
    text: "The Car Guide says Transport Canada’s ID.4 notice identifies a fire risk even when parked with the ignition off; VIN status and current manufacturer instructions control.",
    sourceUrl: "https://www.guideautoweb.com/en/articles/83531/volkswagen-id.4-recalled-again-over-fire-risk-may-need-new-battery/",
  },
  {
    icon: "🚙",
    text: "INSAUGA reports 7,847 Canadian 2026 RAV4 Plug-In Hybrid vehicles are covered by Toyota’s motor-generator ECU software campaign—not every RAV4 model.",
    sourceUrl: "https://www.insauga.com/recall-nearly-8000-vehicles-could-suddenly-lose-power-in-canada/",
  },
  {
    icon: "💻",
    text: "The reported RAV4 Plug-In Hybrid manufacturer action is owner notification and a dealer software update; use the 17-character VIN to confirm the individual vehicle.",
    sourceUrl: "https://www.insauga.com/recall-nearly-8000-vehicles-could-suddenly-lose-power-in-canada/",
  },
  {
    icon: "🛞",
    text: "Motor Illustrated reports 2,160 Canadian 2021–2025 Mercedes-Benz S-Class and Maybach S-Class vehicles are affected by a front brake-hose campaign.",
    sourceUrl: "https://motorillustrated.com/mercedes-benz-recalls-more-than-30000-s-class-sedans-over-brake-issue/199143/",
  },
];

const tipOfTheDay = {
  title: "Make the Recall Intake a One-Minute Record",
  text: "For every campaign question, record the exact VIN, customer concern, live Canadian campaign result, current manufacturer instruction and referral destination. Then separately authorize any non-campaign diagnostic or repair work. This simple intake distinguishes a safety notice from the repair order you actually own.",
};

const quoteOfTheDay = {
  text: "The fix had not yet been identified or finalized.",
  author: "The Car Guide",
  title: "Volkswagen ID.4 Canadian Recall — October 13, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Chevelle SS 454 LS6 — Cranberry Red, Ontario-Plated",
  description: "Cranberry Red paint, a black cowl-induction hood and big-block presence make this 1970 Chevrolet Chevelle SS 454 LS6 a Sunday shop feature. Its reminder suits today’s files: identify the exact vehicle, verify the active instruction and separate the campaign from the work you are actually authorized to perform.",
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
                {["ID.4: 80%", "Canadian VIN", "Brake Referral", "'70 Chevelle"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Sunday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Automotive Shop Advisor Verifying an EV Recall Instruction — Baywash Daily Briefing Edition No. 143"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 143 — Sunday, October 18, 2026 — ID.4: 80% / Canadian VIN / Brake Referral</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Sunday Check: Respect the Interim Instruction, Then Verify the VIN
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Chevrolet Chevelle SS</span>
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
