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

const BRIEFING_NUMBER = 90;
const BRIEFING_DATE = "August 5, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xgFZSNAJNRJpjkph.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ivJdPaKEdcmKfDPD.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/aYCOutNjhXObROZQ.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/znoPqweNJTiUHboV.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/AlwCamTTKDSEqMMB.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "GORDIE HOWE BRIDGE PEDESTRIAN PATH OPENS TODAY / FREE / 8 A.M. / ONLY PEDESTRIAN BORDER CROSSING IN CANADA / BRING PASSPORT",
    tagColor: "#15803d",
    headline: "Gordie Howe Bridge Pedestrian Path Opens TODAY at 8 a.m. — Free — Only Pedestrian Border Crossing in Canada — Bring Your Passport",
    summary: "The Gordie Howe International Bridge multi-use pedestrian and cyclist path opens TODAY Wednesday August 5 at 8 a.m. — free of charge. It is the only pedestrian border crossing between Canada and the United States. WXYZ Detroit reported at least one person was already in line before 8 a.m. Summer hours: 8 a.m. to 8 p.m., seven days per week (last entry 7 p.m.). Winter hours: 8 a.m. to 4 p.m. No e-bikes, no motorized scooters, no pets. Car toll: $5.75 (compared to $10 at the Ambassador Bridge). The bridge opened to commercial and passenger vehicle traffic July 27. The pedestrian path is the final milestone in the $6.4 billion, eight-year construction project. The bridge connects I-75 in Detroit directly to Hwy 401 in Windsor — the Windsor-Detroit corridor handles $350 million per day in cross-border trade.",
    whyItMatters: "The Gordie Howe Bridge is now fully open — vehicles, trucks, pedestrians, and cyclists. Walk to Detroit and back on your lunch break. The corridor now has full redundancy for the first time since 1929. For your shop: Section 338 is 14 days away (August 19). Autos and auto parts remain exempt under Section 232. Unifor-GM bargaining opens August 10 — 5 days.",
    source: "WXYZ Detroit / Windsor Star / WDBA — August 5, 2026",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/28/pedestrians-cyclists-can-cross-gordie-howe-international-bridge-for-free-beginning-aug-5/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "MICHIGAN PRIMARY RESULT / EL-SAYED WINS / UAW ENDORSED / FACES ROGERS IN NOVEMBER / CUSMA RENEGOTIATION VOTE AT STAKE",
    tagColor: "#1d4ed8",
    headline: "Abdul El-Sayed Wins Michigan Democratic Senate Primary — UAW-Endorsed — Faces Republican Mike Rogers in November — CUSMA Vote at Stake",
    summary: "Abdul El-Sayed has won Michigan's Democratic Senate primary, NBC News projects, defeating Rep. Haley Stevens 49% to 47%. El-Sayed overcame nearly $65 million in outside money against him, including more than $30 million from an AIPAC-linked group. He was endorsed by Bernie Sanders, AOC, and the United Auto Workers. Gov. Gretchen Whitmer had endorsed Stevens in a last-ditch effort to stop El-Sayed. El-Sayed goes on to face former Rep. Mike Rogers, who claimed the Republican nomination without opposition. The race in November is expected to be one of the most competitive in the country and could determine which party controls the Senate. Republicans have 53 seats; Democrats need to flip four to win the majority. Whoever wins the seat vacated by Sen. Gary Peters will vote on CUSMA renegotiation. The UAW endorsement is the most significant Canada-adjacent signal: the UAW is the most pro-CUSMA union in the United States.",
    whyItMatters: "El-Sayed is UAW-endorsed — the UAW is the most pro-CUSMA union in the U.S. If El-Sayed wins in November, he votes on CUSMA renegotiation as a UAW-backed senator from Michigan. Republican Mike Rogers is the likely general election winner per most analysts — Rogers is a former House Intelligence Committee chair and a Trump ally. Michigan is the most Canada-adjacent U.S. Senate race. Watch this race closely through November 3.",
    source: "NBC News / Bridge Michigan — August 4–5, 2026",
    sourceUrl: "https://www.nbcnews.com/politics/2026-election/abdul-el-sayed-wins-michigans-democratic-senate-primary-notching-midwe-rcna589750",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SECTION 338 — 14 DAYS TO AUGUST 19 / FASKEN ANALYSIS / CUSMA DOES NOT PROTECT / AUTOS & PARTS EXEMPT / UNIFOR-GM 5 DAYS",
    tagColor: "#b91c1c",
    headline: "Section 338 — 14 Days — Fasken: CUSMA Does NOT Protect Against Section 338 — Autos and Auto Parts EXEMPT — Unifor-GM 5 Days",
    summary: "Fasken published the most comprehensive legal analysis of the Section 338 tariffs on August 4. Key finding: the Section 338 tariffs do NOT include a CUSMA exemption — goods qualifying under CUSMA are still subject to the 50% tariff. The only exemptions from Section 338 are: energy, potash, fish, critical minerals, and goods already subject to Section 232 tariffs (steel, aluminum, autos, and auto parts). This is the critical difference from Section 301, which does exempt CUSMA-originating goods. Fasken: 'These new actions suggest that Canada-US trade relations have entered a particularly unpredictable period following the July 1, 2026, joint review and the failure of the parties to reach any comprehensive agreement.' Canada has not announced retaliatory tariffs but has not ruled them out. New Canadian forced labour legislation is expected — will materially increase enforcement and seizure risk at the border. Unifor-GM formal bargaining opens Monday August 10 in Toronto — 5 days. Ford pattern: 3% annual wage increases, signing bonuses, $500M Essex Engine Plant. GM contract expires September 20.",
    whyItMatters: "14 days to August 19. CUSMA does NOT protect against Section 338 — this is the critical distinction. Section 301 at 10% — CUSMA-compliant auto parts ARE exempt from Section 301. Section 338 at 50% — CUSMA does NOT protect. Autos and auto parts are exempt from BOTH under Section 232. Unifor-GM bargaining opens August 10 — 5 days. Build your 30-day GM buffer today.",
    source: "Fasken / Georgetown Law — August 4–5, 2026",
    sourceUrl: "https://www.fasken.com/en/knowledge/2026/08/new-us-tariffs-on-canadian-goods",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge pedestrian & cyclist path is OPEN — TODAY August 5 at 8 a.m. FREE. Bring your passport. No e-bikes, no motorized scooters, no pets. Summer hours: 8 a.m.–8 p.m. Only pedestrian border crossing in Canada.",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/28/pedestrians-cyclists-can-cross-gordie-howe-international-bridge-for-free-beginning-aug-5/",
  },
  {
    icon: "🗳️",
    text: "El-Sayed wins Michigan primary. UAW-endorsed. Faces Republican Mike Rogers in November general. Whoever wins votes on CUSMA renegotiation. Rogers is the likely general election winner per analysts.",
    sourceUrl: "https://www.nbcnews.com/politics/2026-election/abdul-el-sayed-wins-michigans-democratic-senate-primary-notching-midwe-rcna589750",
  },
  {
    icon: "⚖️",
    text: "Fasken: CUSMA does NOT protect against Section 338. Only exemptions: energy, potash, fish, critical minerals, Section 232 (autos, auto parts). Section 301 at 10% — CUSMA-compliant parts ARE exempt. 14 days to August 19.",
    sourceUrl: "https://www.fasken.com/en/knowledge/2026/08/new-us-tariffs-on-canadian-goods",
  },
  {
    icon: "✈️",
    text: "WestJet schedule fully restored by end of this week. Ratification vote within 30 days. If you incurred out-of-pocket costs during the 30-hour strike, keep receipts — Air Passenger Protection Regulations may apply.",
    sourceUrl: "https://www.reuters.com/legal/litigation/westjet-flight-attendants-union-reach-wage-increase-deal-end-strike-2026-08-03/",
  },
  {
    icon: "🔧",
    text: "Unifor-GM formal bargaining opens August 10 — 5 days. Ford pattern: 3% annual increases, $500M Essex Engine Plant. Oshawa Silverado and CAMI Equinox EV at stake. September 20 contract expiry — 46 days. Build your GM buffer today.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-commence-negotiations-general-motors",
  },
];

const tipOfTheDay = {
  title: "Gordie Howe Bridge Pedestrian Path Open TODAY — El-Sayed Wins Michigan — Section 338 14 Days — CUSMA Does NOT Protect — Unifor-GM 5 Days",
  text: "Five things for Wednesday August 5. First: Gordie Howe Bridge pedestrian path is open TODAY at 8 a.m. — free. Bring your passport. No e-bikes, no motorized scooters, no pets. Walk to Detroit and back. Second: El-Sayed wins Michigan primary. UAW-endorsed. Faces Rogers in November. Whoever wins votes on CUSMA renegotiation. Third: Fasken confirmed — CUSMA does NOT protect against Section 338. The only exemptions from Section 338 are energy, potash, fish, critical minerals, and Section 232 goods (autos, auto parts). Section 301 at 10% — CUSMA-compliant parts ARE exempt from Section 301. Know the difference. Fourth: 14 days to August 19. Courts move slowly — do not count on an injunction. Fifth: Unifor-GM bargaining opens August 10 — 5 days. Build your 30-day GM buffer today.",
};

const quoteOfTheDay = {
  text: "This is about whether or not you deserve a politics of the people, by the people and for the people, or of the corporations, by the billionaires and for the special interests.",
  author: "Abdul El-Sayed, Democratic Senate Nominee, Michigan",
  title: "Election night victory speech, Majestic Theatre, Detroit — August 4, 2026",
};

const rideOfTheDay = {
  name: "1970 Pontiac GTO 455 HO — Orbit Orange, Black Racing Stripes, Ontario-Plated",
  description: "Orbit Orange with black racing stripes — the most aggressive GTO colour combination of the era. The 455 HO: 360 horsepower, 500 lb-ft of torque. The GTO was the original muscle car — John DeLorean put a 389 in a Tempest in 1964 and created the muscle car era. The 1970 455 HO was the most powerful GTO ever built. The Gordie Howe Bridge pedestrian path opened this morning. The GTO approves.",
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
                {["GORDIE HOWE BRIDGE OPEN", "EL-SAYED WINS MICHIGAN", "SECTION 338: 14 DAYS", "'70 GTO 455 HO"].map((tag) => (
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
              alt="Gordie Howe Bridge Pedestrian Path Opens Today — El-Sayed Wins Michigan Primary — Section 338 14 Days — Baywash Daily Briefing Edition No. 90"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 78 — Friday, July 24, 2026 — S.301 In Effect / CUSMA Exempt Confirmed / Charlottetown: United Front / Gordie Howe: Monday</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Section 301 Now In Effect — CUSMA Exemption Confirmed — Charlottetown: 'Everything On the Table' — Gordie Howe Bridge Revenue Deal Controversy — Opens Monday
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '69 Pontiac GTO Judge Ram Air IV</span>
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
