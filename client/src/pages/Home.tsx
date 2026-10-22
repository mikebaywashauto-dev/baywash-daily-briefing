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

const BRIEFING_NUMBER = 147;
const BRIEFING_DATE = "October 22, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/bRbLpazVMRYeMJAf.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NSbmQaXcudKQNSSw.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XmFkrYMswjtbTYxG.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NbxpWjDolYWLKSHa.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/yJcmVXjPulPeBXTm.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "C$2.5B / CAPITAL PROJECTS / TWO YEARS / NOT A SHOP GRANT",
    tagColor: "#b91c1c",
    headline: "Ontario Auto Package: Major Capital Support, Not an Instant Shop Program",
    summary: "Canada and Ontario announced October 21 that they will invest an additional C$2.5 billion over two years in large-scale automotive capital projects—up to C$1.5 billion federal and up to C$1 billion provincial. The official backgrounder says the funding is intended to help automotive companies adapt to economic conditions, strengthen competitiveness and support jobs across the supply chain while building connected and electrified vehicles.",
    whyItMatters: "This is a policy and manufacturing-capital watch, not a direct repair-shop grant, immediate parts subsidy, price change or vehicle-availability promise. Keep sourcing, customer quotes, training and diagnostic planning tied to the VIN, the part number and actual program/provider documentation. Do not alter a customer file because a capital announcement has been made.",
    source: "Government of Canada — Ontario Auto Action Plan Backgrounder",
    sourceUrl: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/10/prime-minister-carney-and-premier-ford-launch-new-action-plan-to-protect-workers-from-tariffs-and-strengthen-ontario-industries.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "FLEET STANDARD / 2026 LEVELS / THROUGH 2029 / NO REPAIR CHANGE",
    tagColor: "#0369a1",
    headline: "Fleet Standard Timing Shifts: Keep Service Decisions Vehicle-Specific",
    summary: "The same federal-provincial announcement says Canada’s light-duty fleet-average greenhouse-gas performance standard will remain at 2026 levels of 172 grams per mile through 2029; annual increases resume in the 2030 model year. Ottawa says the change provides manufacturers near-term flexibility during trade-related pressures while allowing credits to be generated for later use.",
    whyItMatters: "A fleet-average policy adjustment is not an individual vehicle exemption, an end to regulations, or a new repair procedure. It does not change the software, service information, recall status, parts requirement or diagnostic need of the vehicle in your bay. Continue following the applicable OEM procedure and documented customer or payer authorization.",
    source: "Government of Canada — Light-Duty Fleet Standard Measure",
    sourceUrl: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/10/prime-minister-carney-and-premier-ford-launch-new-action-plan-to-protect-workers-from-tariffs-and-strengthen-ontario-industries.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CCS PRECISION / EVIDENCE-BACKED ESTIMATES / DOCUMENT THE WHY",
    tagColor: "#15803d",
    headline: "Collision Quality Conference: Make Clear Evidence the Backbone of Every Estimate",
    summary: "Collision Repair magazine’s October 21 coverage of the CCS Precision 2026 conference in Niagara Falls highlighted estimating accuracy, repair documentation, workforce development and consistent repair quality. The article says a Mitchell International presentation stressed that estimates should be logical, accurate and supported by clear evidence; photographs and documents should establish accident circumstances and support why recommended repairs are necessary.",
    whyItMatters: "Build the repair file so the next technician, customer and payer can understand it: clear photos, observed damage, vehicle configuration, applicable repair information, logical estimate and approvals. One speaker’s forward-looking consolidation comment is an opinion—not an industry forecast, insurer rule or instruction for your business. Focus on the file discipline you control today.",
    source: "Collision Repair Magazine — CCS Precision 2026 Conference",
    sourceUrl: "https://www.collisionrepairmag.com/events/article/15838113/precision-in-collision-repair-industry-conference-highlights",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏗️",
    text: "The additional C$2.5 billion is set for large-scale automotive capital projects over two years, with up to C$1.5 billion federal and up to C$1 billion provincial support.",
    sourceUrl: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/10/prime-minister-carney-and-premier-ford-launch-new-action-plan-to-protect-workers-from-tariffs-and-strengthen-ontario-industries.html",
  },
  {
    icon: "🔋",
    text: "Canada says the light-duty fleet-average performance standard stays at the 2026 level through 2029, with annual increases resuming in the 2030 model year.",
    sourceUrl: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/10/prime-minister-carney-and-premier-ford-launch-new-action-plan-to-protect-workers-from-tariffs-and-strengthen-ontario-industries.html",
  },
  {
    icon: "🤝",
    text: "A Canada–Ontario Automotive Task Force will oversee the policy measures. Its creation is not a new repair-shop program or a new customer service requirement.",
    sourceUrl: "https://news.ontario.ca/en/backgrounder/1008172/premier-ford-and-prime-minister-carney-launch-new-action-plan-to-protect-workers-from-tariffs-and-strengthen-ontario-industries",
  },
  {
    icon: "📷",
    text: "CCS Precision programming emphasized logical, accurate estimates supported by clear evidence—use photos and documents to show why a recommended repair is necessary.",
    sourceUrl: "https://www.collisionrepairmag.com/events/article/15838113/precision-in-collision-repair-industry-conference-highlights",
  },
  {
    icon: "🎓",
    text: "I-CAR Canada and the Database Enhancement Gateway appeared in the CCS conference programming, reinforcing training and information resources rather than a new mandated workflow.",
    sourceUrl: "https://www.collisionrepairmag.com/events/article/15838113/precision-in-collision-repair-industry-conference-highlights",
  },
  {
    icon: "⚙️",
    text: "St. Thomas Unimotor remains an 18-month category sourcing watch. Confirm stock, ETA, warranty and price by exact HVAC-motor part number before advising a customer.",
    sourceUrl: "https://www.cbc.ca/news/canada/london/st-thomas-auto-parts-plant-to-cut-production-move-some-work-to-mexico-9.7384399",
  },
];

const tipOfTheDay = {
  title: "Give Every Estimate a Documentation Spine",
  text: "Build four anchors into every collision file: before-and-after photos, a vehicle-specific procedure reference, diagnostic or calibration record, and signed authorization/release. Make the estimate intelligible to the next technician, the customer and the payer—without relying on a policy headline or conference sound bite.",
};

const quoteOfTheDay = {
  text: "The Government of Canada and the Government of Ontario are investing an additional $2.5 billion over two years in large-scale automotive capital projects.",
  author: "Government of Canada",
  title: "Ontario Auto Action Plan Backgrounder — October 21, 2026",
};

const rideOfTheDay = {
  name: "1970 Dodge Coronet R/T 440 Six Pack — FJ6 Green Go, Ontario-Plated",
  description: "FJ6 Green Go paint, a period-correct hood scoop and 440 Six Pack muscle make this 1970 Dodge Coronet R/T a Thursday shop feature. Its reminder is simple: show the work, document the why and keep each repair decision anchored to the exact vehicle—not a broad policy headline.",
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
                {["Capital Watch", "VIN First", "Document the Why", "'70 Coronet"].map((tag) => (
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
              alt="Canadian Collision Shop Team Reviewing a Vehicle-Specific Repair File — Baywash Daily Briefing Edition No. 147"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 147 — Thursday, October 22, 2026 — Capital Watch / VIN First / Document the Why</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Thursday Check: Treat Policy Headlines as a Watch—Then Document the Exact Repair
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Dodge Coronet R/T</span>
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
