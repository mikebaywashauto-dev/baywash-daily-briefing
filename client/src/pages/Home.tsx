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

const BRIEFING_NUMBER = 81;
const BRIEFING_DATE = "July 27, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CtWThoGBvfCCKSvZ.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/vWRzwBggUQzKGyZZ.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wwoUstogPgzoTPAz.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/fBgwqyKheboNIvRN.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QpTlYsnONGJuTSMA.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "BRIDGE IS OPEN / FIRST CROSSING COMPLETE / I-75 TO HWY 401 / $350M/DAY CORRIDOR / 60+ YEARS IN THE MAKING",
    tagColor: "#15803d",
    headline: "Gordie Howe Bridge Is Open — First Commercial Trucks Cross the Detroit River — First New Border Crossing Between Michigan and Ontario in More Than 60 Years",
    summary: "The Gordie Howe International Bridge opened at noon today — Monday July 27, 2026 — marking the first new border crossing between Michigan and Ontario in more than 60 years. The six-lane cable-stayed bridge connects Interstate 75 in Detroit directly to Highway 401 in Windsor, creating the first highway-to-highway commercial crossing on the Detroit River. Commercial trucks and passenger vehicles began crossing at noon. Toll rates: $8.60 USD per axle for commercial trucks and larger vehicles. Infrastructure Minister Gregor Robertson: 'Today, we are here to celebrate more than a bridge. We are here to celebrate big opportunities for workers, businesses and communities on both sides of the Detroit River.' A truck driver who spoke to Local 4 News: 'You're going to have more opportunity to cross over the bridge without the traffic, without the waiting so long at the bridge with the border patrol.' The opening came despite a week of political noise: Trump posted on Truth Social Friday that the original deal 'no longer stands,' then Saturday posted an air filter meme. The bridge opened regardless. The 2012 Canada-Michigan agreement stands. The Ambassador Bridge continues to operate — the corridor now has redundancy for the first time since 1929. Windsor-Detroit corridor: $350 million per day. Pedestrian and bicycle access opens August 5.",
    whyItMatters: "The bridge is open. This is the most significant supply chain infrastructure improvement for Ontario auto shops in a decade. The new I-75 to Hwy 401 direct connection means your Michigan supplier parts orders can now route via the Gordie Howe Bridge instead of the Ambassador Bridge. The new crossing is designed for commercial trucks and will reduce congestion and wait times. For your shop: if you service GM vehicles, the Gordie Howe Bridge is now an option for your parts orders. The Conservative committee investigation into the revenue deal is July 29 — 2 days. That is a political story that will generate noise but will not affect the commercial operation of the bridge. Build your 30-day GM parts buffer August 1 — 5 days. Unifor-GM bargaining starts August 10 — 14 days. Section 338 takes effect August 19 — 23 days. Autos and auto parts remain exempt from Section 338.",
    source: "ClickOnDetroit / WDIV / MLive — July 27, 2026",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/27/gordie-howe-international-bridge-set-to-open-monday-after-years-of-construction/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SECTION 338 / 23 DAYS / CUSMA GOODS PARTIALLY HIT / C$28B AFFECTED / AUTOS & PARTS EXEMPT / CARNEY-TRUMP INTENSIFY TALKS",
    tagColor: "#b91c1c",
    headline: "Section 338 — 23 Days — Critical Update: Tariffs Would Hit Some CUSMA-Protected Goods — C$28 Billion in Canadian Exports at Risk — Autos and Auto Parts Remain Exempt — Carney and Trump Agree to Intensify Talks",
    summary: "A critical clarification on Section 338: the 50 per cent tariffs scheduled for August 19 would hit goods previously protected by CUSMA, not just non-CUSMA goods. This is the most important update for Canadian businesses this week. Desjardins Economics estimates Section 338 would affect approximately C$28 billion ($19.8 billion USD) in annual Canadian exports — roughly 5 per cent of all Canadian shipments to the United States. Products covered: liquor, dairy products, cement, honey, hockey sticks, and some wood products. Products explicitly excluded: energy, potash, fish, and critical minerals. Autos and auto parts remain exempt from Section 338 — they are covered by Section 232, which is a separate and parallel tariff framework. PM Carney: 'If these tariffs, or other measures come into force, there's a full range of things that we can do.' Carney said retaliating immediately would be 'counterproductive' while talks continue. Carney and Trump agreed to 'intensify' trade discussions. Ontario Premier Doug Ford: Canada should 'be on offense' and keep 'everything on the table,' including a possible surcharge on electricity exports to the United States. BC Premier David Eby: 'There is not a chance in hell that U.S. alcohol is going back on the shelf in British Columbia.' Carney suggested the August 19 deadline may be part of Washington's negotiating strategy: 'Normally there's a deadline. Normally there's an outsized tariff associated with that deadline.'",
    whyItMatters: "The Section 338 CUSMA clarification is the most important tariff update in weeks. The previous assumption was that CUSMA-compliant goods were fully protected from Section 338. They are not — the tariff would hit liquor, dairy, cement, honey, and wood products regardless of CUSMA status. The good news for your shop: autos and auto parts remain fully exempt from Section 338 under Section 232. Your parts supply chain is protected. The 23-day countdown to August 19 is the pressure valve. Carney and Trump have agreed to intensify talks — there is a non-trivial chance that a deal is reached before August 19. If no deal: Canada retaliates. Ford's electricity surcharge threat is significant — Ontario exports approximately 4,000 MW of electricity to Michigan, New York, and other U.S. states. A surcharge would hit U.S. consumers directly. Build your GM parts buffer August 1 — 5 days. Unifor-GM bargaining starts August 10 — 14 days.",
    source: "Yahoo Finance / Benzinga / Desjardins Economics — July 26, 2026",
    sourceUrl: "https://finance.yahoo.com/economy/policy/articles/mark-carney-warns-canada-full-220013422.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR-GM BARGAINING AUG 10 / 14 DAYS / BUILD GM BUFFER AUG 1 / 5 DAYS / FORD PATTERN 3% / SEPT 20 EXPIRY",
    tagColor: "#15803d",
    headline: "Unifor-GM Bargaining Starts August 10 — 14 Days — Build Your 30-Day GM Parts Buffer August 1 — 5 Days — Gordie Howe Bridge Now Open for Parts Orders From Michigan Suppliers",
    summary: "Unifor-GM bargaining opens in Toronto on August 10 — 14 days from today. The Ford pattern is set: the Ford deal ratified this month at 74 per cent approval established 3 per cent annual wage increases as the floor. GM will be expected to match or beat the Ford pattern. The key plants at stake: the Oshawa Assembly Complex (Silverado pickup trucks) and CAMI Assembly in Ingersoll (Equinox EV). CAMI is currently idle. The Oshawa Silverado is GM's highest-margin North American truck — it is the plant GM cannot afford to lose. The September 20 contract expiry is the hard deadline. Unifor has historically used the threat of strike action at the highest-margin plant to extract concessions. The Gordie Howe Bridge opened today — a new commercial crossing that adds supply chain redundancy for GM parts flowing from Michigan suppliers. The new I-75 to Hwy 401 direct connection means your Michigan supplier parts orders can now route via the Gordie Howe Bridge. Section 301 is in effect at 10 per cent for non-CUSMA parts. CUSMA-compliant parts remain exempt. Section 338 takes effect August 19 — 23 days — autos and auto parts remain exempt under Section 232.",
    whyItMatters: "The GM buffer window is August 1 — 5 days from today. That is the date to build your 30-day supply of GM parts before bargaining reaches its critical phase. If Unifor and GM reach an impasse in late August or early September, a work stoppage at Oshawa or CAMI would immediately affect GM parts availability across Ontario. The Ford pattern at 3 per cent annual increases is the baseline — GM will likely face demands above that given the tariff environment and the political pressure on GM to invest in Canadian production. For your shop: if you service GM vehicles, build your buffer August 1. The Gordie Howe Bridge is now open — consider routing your first GM parts order via the new crossing to test the process. Section 338 takes effect August 19 — 23 days — but autos and auto parts remain exempt.",
    source: "BNN Bloomberg / Unifor / Automotive News Canada — July 2026",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/07/21/unifor-names-general-motors-as-next-us-automaker-for-contract-talks/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge is OPEN. First commercial trucks crossing at noon today. I-75 Detroit to Hwy 401 Windsor — first new border crossing in 60+ years. Toll: $8.60 USD/axle for commercial trucks. Pedestrian/bicycle access: August 5.",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/27/gordie-howe-international-bridge-set-to-open-monday-after-years-of-construction/",
  },
  {
    icon: "🚨",
    text: "Section 338 CUSMA update: tariffs would hit some CUSMA-protected goods. C$28B in Canadian exports affected. Covered: liquor, dairy, cement, honey, hockey sticks, wood. Excluded: energy, potash, fish, critical minerals. Autos & parts: EXEMPT (Section 232). 23 days to August 19.",
    sourceUrl: "https://finance.yahoo.com/economy/policy/articles/mark-carney-warns-canada-full-220013422.html",
  },
  {
    icon: "⚡",
    text: "Ford: electricity export surcharge 'on the table.' Ontario exports ~4,000 MW to Michigan, New York, and other U.S. states. Eby: no U.S. alcohol back on BC shelves. Carney-Trump agreed to 'intensify' talks. Carney: August 19 deadline is a negotiating tactic.",
    sourceUrl: "https://finance.yahoo.com/economy/policy/articles/mark-carney-warns-canada-full-220013422.html",
  },
  {
    icon: "🔧",
    text: "Build your 30-day GM parts buffer August 1 — 5 days. Unifor-GM bargaining starts August 10 — 14 days. Ford pattern: 3% annual increases, 74% ratification. Oshawa Silverado and CAMI Equinox EV at stake. September 20 contract expiry.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/07/21/unifor-names-general-motors-as-next-us-automaker-for-contract-talks/",
  },
  {
    icon: "🇨🇦",
    text: "Conservative committee investigating Gordie Howe Bridge revenue deal — July 29 — 2 days. Alberta separation petition: 223,000 verified signatures, referendum vote required. Section 301 at 10%, CUSMA exempt, holding. CUSMA full renegotiation pushed to 2027.",
    sourceUrl: "https://calgary.citynews.ca/2026/07/24/election-officials-validate-petition-alberta-separation/",
  },
];

const tipOfTheDay = {
  title: "Build Your GM Buffer August 1 — 5 Days — The Bridge Is Open, Use It",
  text: "The Gordie Howe Bridge opened at noon today. The new I-75 to Hwy 401 direct connection is now available for your Michigan supplier parts orders. Today's action: if you service GM vehicles, plan your 30-day parts buffer order for August 1 — 5 days from today. Unifor-GM bargaining starts August 10 — 14 days. If bargaining reaches an impasse in late August or early September, a work stoppage at Oshawa or CAMI would immediately affect GM parts availability across Ontario. The buffer window is August 1. Do not wait. Section 338 takes effect August 19 — 23 days. Autos and auto parts remain exempt from Section 338 (they are under Section 232). Section 301 is in effect at 10 per cent for non-CUSMA parts — CUSMA-compliant parts remain exempt. Toll for commercial trucks on the Gordie Howe Bridge: $8.60 USD per axle.",
};

const quoteOfTheDay = {
  text: "Today, we are here to celebrate more than a bridge. We are here to celebrate big opportunities for workers, businesses and communities on both sides of the Detroit River.",
  author: "Gregor Robertson",
  title: "Canada's Housing and Infrastructure Minister — Gordie Howe Bridge opening, July 27, 2026",
};

const rideOfTheDay = {
  name: "1971 Plymouth Hemi 'Cuda — Citron Yella, Black Billboards, Ontario-Plated",
  description: "Citron Yella — a brilliant lemon yellow that glows like a traffic light. Black billboard stripes running the full length of the lower body. Hemi 'Cuda badging on the front fenders. Shaker hood scoop. Chrome bumpers. Ontario licence plate. 426 cubic inch Hemi V8, 425 horsepower (factory-rated, widely believed to be conservative). The 1971 Plymouth Hemi 'Cuda is the rarest and most valuable American muscle car ever built. Only 107 Hemi 'Cudas were produced in 1971 — the last year of the original muscle car era before insurance rates and emissions regulations ended the golden age. A numbers-matching 1971 Hemi 'Cuda in Citron Yella sold at Barrett-Jackson for $3.5 million. The 426 Hemi engine was the most powerful production V8 of the muscle car era — a hemispherical combustion chamber design that produced prodigious torque from idle. The Gordie Howe Bridge opened today. The Hemi 'Cuda has been waiting 60 years for this crossing.",
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
