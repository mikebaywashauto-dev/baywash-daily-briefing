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

const BRIEFING_NUMBER = 86;
const BRIEFING_DATE = "August 1, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/pnLZsxNqfAdHjaUl.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/lnWRZgLlykZdELMN.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/bWzYQWhcbExhZXvB.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rudErjhOwiosniaB.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RWhdlrkOAmusGTZc.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "WESTJET CANCELLING FLIGHTS & PARKING 737s / STRIKE TOMORROW MIDNIGHT / 4,400 CUPE FLIGHT ATTENDANTS / AUGUST LONG WEEKEND / CHANGE TO AIR CANADA NOW",
    tagColor: "#b91c1c",
    headline: "WestJet Is NOW Cancelling Flights and Parking 737 Aircraft — Strike or Lockout Tomorrow at Midnight — August Long Weekend at Risk — Change to Air Canada Now",
    summary: "WestJet began cancelling flights and parking Boeing 737 aircraft Friday afternoon July 31. WestJet statement: 'At this time, negotiations have not resulted in an agreement and as a labour disruption approaches, WestJet must begin the difficult process of parking 737 aircraft. This necessary step allows the airline to maintain operational control and protect the integrity of the broader network.' WestJet Encore Q400 flights and codeshare flights operated by airline partners remain unaffected. The strike or lockout is still set for Sunday August 2 at 12:01 a.m. MT (2:01 a.m. ET) — unless a deal is reached or the federal government intervenes under Section 107 of the Canada Labour Code. Federal Jobs Minister Patty Hajdu: expects the parties 'can and should come to an agreement at the bargaining table.' CUPE president Alia Hussain: 'There's still time to avoid a strike.' WestJet CEO: 'We remain encouraged by the progress we have made in addressing the union's stated priorities.' The key issue: approximately 35 hours per month of unpaid work — boarding, deplaning, ground delays. WestJet is waiving cancellation and change fees for passengers travelling July 30 through August 4. Air Canada has issued guidelines for stranded WestJet passengers.",
    whyItMatters: "WestJet is already cancelling flights and parking aircraft — this is no longer a warning, it is an operational shutdown in progress. If you or your staff are flying WestJet this weekend, change to Air Canada today. WestJet is waiving fees. If a full work stoppage begins tomorrow at midnight, thousands of Canadians will be stranded during the August long weekend (Civic Holiday Monday August 4). The federal government could invoke Section 107 but that requires a cabinet decision — do not assume they will step in. For your shop: WestJet Encore Q400 and codeshare flights are unaffected. Autos and auto parts remain exempt from Section 338 under Section 232. 18 days to August 19.",
    source: "LoyaltyLobby / WestJet CNW — August 1, 2026",
    sourceUrl: "https://loyaltylobby.com/2026/08/01/westjet-has-started-to-cancel-flights-park-boeing-737-aircraft/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SECTION 338 — 18 DAYS TO AUGUST 19 / AUTOS & PARTS EXEMPT / NO NEW DEAL / BANK OF CANADA HOLDS AT 2.25% / INTERIM DEAL BY END OF 2026",
    tagColor: "#b45309",
    headline: "Section 338 — 18 Days to August 19 — No New Deal This Weekend — Autos and Auto Parts Remain Exempt — Bank of Canada Holds at 2.25%",
    summary: "No new trade developments Saturday. Canada-U.S. negotiations continue but no breakthrough is expected before August 19. The framework remains: Section 338 (50% tariff, effective August 19) covers dairy, alcohol, cement, hockey sticks, wood products — NOT autos or auto parts (exempt under Section 232). CUSMA does NOT protect against Section 338. USTR Greer's stated goal: 'interim' agreements with Mexico and Canada separately by end of 2026. CUSMA rules of origin pushed to 2027. Bank of Canada held its overnight rate at 2.25% at the July 15 decision — in line with market expectations. Next Bank of Canada decision: September 2026. Angus Reid: 43% of Canadians confident Carney can deliver a good deal (down from 53% in spring). 75% don't think Trump will stick to any deal. Section 301 at 10% for non-CUSMA goods — CUSMA-compliant auto parts exempt. Section 301 is the new four-year legally durable baseline.",
    whyItMatters: "18 days to August 19. The tariff clock is running and no deal is imminent. The Bank of Canada holding at 2.25% is a signal that the economy is holding — but the BoC's July MPR flagged elevated uncertainty from trade tensions. For your shop: your parts supply chain is protected. Autos and auto parts are exempt from Section 338 under Section 232. Section 301 at 10% for non-CUSMA parts — CUSMA-compliant auto parts exempt. The risk to your shop is Unifor-GM bargaining (August 10), not the tariffs. Build your GM buffer today.",
    source: "Bank of Canada / USTR / Reuters — August 1, 2026",
    sourceUrl: "https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GORDIE HOWE BRIDGE PEDESTRIAN PATH OPENS TUESDAY AUG 5 / FREE / 8AM-8PM / ONLY PEDESTRIAN BORDER CROSSING IN CANADA / CAR TOLL $5.75",
    tagColor: "#15803d",
    headline: "Gordie Howe Bridge Pedestrian & Cyclist Path Opens Tuesday August 5 at 8 a.m. — Free — Only Pedestrian Border Crossing Between Canada and the U.S.",
    summary: "The Gordie Howe International Bridge multi-use path opens to pedestrians and cyclists on Wednesday August 5, 2026 at 8 a.m. Open seven days a week, summer hours are 8 a.m. to 8 p.m. The path is free for pedestrians and cyclists — no toll. This will be the only border crossing between Michigan and Canada where pedestrians and cyclists can cross. The Ambassador Bridge does not have a pedestrian path. Car toll on the Gordie Howe Bridge: $5.75 USD (versus $10.00 at the Ambassador Bridge). Commercial truck toll: $8.60 USD per axle. The bridge opened to commercial and passenger vehicle traffic on Monday July 27. Windsor-Detroit corridor: $350M/day. The Conservative committee investigating the revenue deal continues its work — next hearing scheduled for late August.",
    whyItMatters: "The pedestrian path opening Tuesday is the final milestone in the Gordie Howe Bridge launch. The bridge is now fully operational for vehicles, trucks, and — as of Tuesday — pedestrians and cyclists. For your shop: the Gordie Howe Bridge is now a viable alternative to the Ambassador Bridge for supplier deliveries from Michigan. The $5.75 car toll (vs. $10 at Ambassador) is a meaningful cost saving for frequent crossers. Windsor-Detroit corridor redundancy is now fully established for the first time since 1929.",
    source: "ClickOnDetroit / Gordie Howe Bridge — July 28, 2026",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/28/pedestrians-cyclists-can-cross-gordie-howe-international-bridge-for-free-beginning-aug-5/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "✈️",
    text: "WestJet is CANCELLING FLIGHTS and PARKING 737s as of Friday afternoon. Strike or lockout tomorrow Sunday August 2 at midnight. WestJet Encore Q400 and codeshare flights unaffected. Change to Air Canada now — WestJet waiving fees July 30–August 4.",
    sourceUrl: "https://loyaltylobby.com/2026/08/01/westjet-has-started-to-cancel-flights-park-boeing-737-aircraft/",
  },
  {
    icon: "🔧",
    text: "BUILD YOUR GM BUFFER TODAY — August 1. Unifor-GM formal bargaining opens August 10 — 9 days. Ford pattern: 3% annual increases, $500M Essex Engine Plant. Oshawa Silverado and CAMI Equinox EV at stake. September 20 contract expiry — 50 days.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-commence-negotiations-general-motors",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge pedestrian & cyclist path opens TUESDAY August 5 at 8 a.m. FREE. Only pedestrian border crossing between Canada and the U.S. Car toll: $5.75 (vs. $10 at Ambassador Bridge). Windsor-Detroit corridor: $350M/day.",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/28/pedestrians-cyclists-can-cross-gordie-howe-international-bridge-for-free-beginning-aug-5/",
  },
  {
    icon: "⚖️",
    text: "Section 338 — 18 days to August 19. No deal this weekend. Autos and auto parts EXEMPT under Section 232. CUSMA does NOT protect against Section 338. Section 301 at 10%, CUSMA-compliant auto parts exempt. Bank of Canada holds at 2.25%.",
    sourceUrl: "https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/",
  },
  {
    icon: "🚗",
    text: "Your parts supply chain is protected. Section 338 (August 19) and Section 301 (10%) both exempt autos and auto parts. The risk to your shop is Unifor-GM bargaining (August 10), not the tariffs. Build your buffer today.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-commence-negotiations-general-motors",
  },
];

const tipOfTheDay = {
  title: "WestJet Is Cancelling Flights NOW — Change to Air Canada Today — Build Your GM Buffer Today — August 1",
  text: "Two action items for Saturday August 1. First: if you or your staff are flying WestJet this weekend, change to Air Canada today. WestJet is already cancelling flights and parking 737 aircraft as of Friday afternoon. A strike or lockout is possible tomorrow Sunday August 2 at midnight. WestJet is waiving change fees for travel July 30–August 4. WestJet Encore Q400 and codeshare flights are unaffected. Do not assume the federal government will step in — Section 107 requires a cabinet decision. Second: if you service GM vehicles, place your 30-day parts buffer order today. August 1 is the target date. Unifor-GM formal bargaining opens August 10 — 9 days. The Ford pattern (3% annual, $500M Essex Engine Plant) is the floor. If bargaining reaches an impasse in late August or early September, a work stoppage at Oshawa or CAMI would immediately affect GM parts availability. For your parts supply chain: autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% for non-CUSMA parts — CUSMA-compliant auto parts exempt. 18 days to August 19.",
};

const quoteOfTheDay = {
  text: "At this time, negotiations have not resulted in an agreement and as a labour disruption approaches, WestJet must begin the difficult process of parking 737 aircraft.",
  author: "WestJet Group",
  title: "WestJet statement announcing flight cancellations and 737 parking — July 31, 2026",
};

const rideOfTheDay = {
  name: "1968 Dodge Charger R/T 426 Hemi — Bright Red, Black Bumblebee Stripe, Ontario-Plated",
  description: "Bright Red with the black bumblebee stripe wrapping the rear — the most iconic Charger colour combination. 426 Hemi V8, 425 horsepower. Ontario licence plate on the rear. The 1968 Charger R/T was the car that defined the muscle car era — the fastback roofline, the hidden headlights, the Coke-bottle body. Dodge built it at the Hamtramck Assembly Plant in Detroit — a plant that is now a GM EV facility. The 426 Hemi was the most powerful production V8 of its era. It won at Daytona, Talladega, and Riverside. It scared insurance companies. It is the reason the term 'muscle car' exists. The 1968 Charger is the original. The one that started it all. WestJet is parking its 737s. The Charger does not park.",
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
                {["S.301 IN EFFECT TODAY", "CUSMA EXEMPT CONFIRMED", "GORDIE HOWE: MONDAY", "'69 GTO JUDGE"].map((tag) => (
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
              alt="Section 301 In Effect — CUSMA Exempt Confirmed — Charlottetown United Front — Gordie Howe Bridge Revenue Controversy — Opens Monday — Baywash Daily Briefing Edition No. 78"
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
