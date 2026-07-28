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

const BRIEFING_NUMBER = 82;
const BRIEFING_DATE = "July 28, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jgipvoJwetGiIwUW.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/HhHjarvoUkQMkrkT.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jaahRNiBYEqeZrFk.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GsZzvNGcpOipWoTq.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wssESVtERzBajWWi.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SECTION 338 / THREE PROCLAMATIONS / MOTOR VEHICLES $19.3B / DAIRY $97M / ALCOHOL $1B / AUTOS & PARTS EXEMPT / 22 DAYS",
    tagColor: "#b91c1c",
    headline: "Section 338 Deep Dive: Three Proclamations — Motor Vehicles Proclamation Covers 439 HTS Codes and $19.3 Billion in Canadian Exports — Autos and Auto Parts Confirmed Exempt — CUSMA Does Not Protect Against Section 338 — 22 Days",
    summary: "White & Case and BLG published the most detailed legal analysis yet of Section 338 today. Trump signed three separate proclamations on July 20, not one. The Motor Vehicles Proclamation is the largest: it covers 439 HTSUS subheadings across a wide variety of agricultural and manufactured products and represents $19.3 billion USD in 2024 Canadian imports to the United States. The Dairy Proclamation covers 52 HTSUS subheadings ($97.2 million in 2024 imports). The Alcoholic Beverages Proclamation covers 63 HTSUS subheadings including wood and paper products and hockey equipment ($1 billion in 2024 imports). Total exposure: approximately US$20 billion, or roughly 5 per cent of all Canadian exports to the United States. Critical confirmation: products already covered by Section 232 tariffs are explicitly exempt from Section 338. This means autos and auto parts are confirmed exempt — no products on any of the three tariff lists appear to be covered by Section 232 actions. Critical warning: CUSMA/USMCA origin does NOT exempt goods from Section 338. This is the key difference from IEEPA tariffs — the CUSMA shield that has protected the majority of Canadian exports since March 2025 does not apply to Section 338. Legal experts note the 30-day delay (July 20 to August 19) is legally required under Section 338. Ryan Majerus, former USTR official: 'The fact that it's delayed 30 days makes me think it's a negotiating tactic, it seems like leverage.' BLG notes Section 338 has never before been used to impose tariffs in its near-century on the statute books — there are no implementing regulations and no judicial precedents.",
    whyItMatters: "The Motor Vehicles Proclamation is the one to watch — it covers 439 HTS codes and $19.3 billion in Canadian exports. Review your non-auto parts orders against the HTS code list. Your auto and auto parts supply chain remains fully protected under Section 232 — confirmed by White & Case and BLG. The CUSMA shield does not apply to Section 338 — this is the most important compliance update of the week. If you have suppliers shipping non-auto goods under CUSMA preference, those goods are NOT protected from Section 338. Get written confirmation from your suppliers on HTS classifications. 22 days to August 19. Build your GM parts buffer August 1 — 4 days. Unifor-GM bargaining starts August 10 — 13 days.",
    source: "White & Case / BLG / Torres Trade Law — July 27-28, 2026",
    sourceUrl: "https://www.jdsupra.com/legalnews/trump-administration-imposes-50-tariffs-1119263/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "GORDIE HOWE BRIDGE / FIRST FULL DAY / GORDIE'S GRANDSON FIRST TO CROSS / TRUCKING COMPANIES USING IT / PEDESTRIAN ACCESS AUG 5",
    tagColor: "#15803d",
    headline: "Gordie Howe Bridge — First Full Day of Commercial Operation — Gordie Howe's Grandson Was the First Person to Cross — Trucking Companies Are Using It — Conservative Committee Tomorrow",
    summary: "The Gordie Howe International Bridge completed its first full day of commercial operation today — Tuesday July 28, 2026. Gordie Howe's grandson was the first person to cross the bridge from Windsor to Detroit when it opened at noon yesterday. Trucking companies are using the new crossing and say disputes over toll revenue from the bridge 'will soon be in the past.' The new I-75 to Hwy 401 direct highway-to-highway connection is reducing congestion at the Ambassador Bridge. The Canada tariff fight is handing Democrats a cudgel in Michigan midterm races — U.S. political pressure from the Michigan side is building. The Conservative committee investigating the Gordie Howe Bridge revenue deal meets tomorrow — July 29. The deal: Canada gives the U.S. 50 per cent of net revenues (after operating costs, not debt repayment) for 15 years — approximately $21 million per year. Pedestrian and bicycle access opens August 5 — 8 days.",
    whyItMatters: "The bridge is open and trucking companies are using it. This is the supply chain infrastructure story of the year for Ontario auto shops. The new I-75 to Hwy 401 direct connection is now available for your Michigan supplier parts orders. The Conservative committee investigation tomorrow is a political story — it will generate noise but will not affect commercial operations. The bridge is open. Use it. Build your GM parts buffer August 1 — 4 days. Unifor-GM bargaining starts August 10 — 13 days. Section 338 takes effect August 19 — 22 days. Autos and auto parts remain exempt from Section 338 under Section 232.",
    source: "Montreal CityNews / CBC / WXYZ Detroit — July 27-28, 2026",
    sourceUrl: "https://montreal.citynews.ca/video/2026/07/27/family-of-the-hockey-great-first-to-cross-as-gordie-howe-bridge-opens-to-traffic/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "ANGUS REID POLL / 78% SUPPORT COUNTER-TARIFFS / CANADA REMOVED CUSMA RETALIATORY TARIFFS / CONSERVATIVE COMMITTEE TOMORROW / 22 DAYS",
    tagColor: "#1d4ed8",
    headline: "Angus Reid: 78% of Canadians Support Counter-Tariffs on U.S. — Canada Removed CUSMA-Covered Retaliatory Tariffs to Restart Talks — Conservative Committee on Gordie Howe Bridge Revenue Deal Tomorrow — 22 Days to August 19",
    summary: "A new Angus Reid Institute poll released July 27 confirms that 78 per cent of Canadians support imposing counter-tariffs on the United States in response to Section 338. The poll was released one day after Canada removed its retaliatory tariffs on CUSMA-covered U.S. goods — roughly 90 per cent of U.S. imports by coverage — to match U.S. exemptions and restart trade talks. Canada retained retaliatory tariffs on steel, aluminum, and autos. Ontario's trade representative in Washington said Canadians should not expect 'one big deal' with finality — the process will be incremental. The Conservative committee investigating the Gordie Howe Bridge revenue deal meets tomorrow — July 29. The deal: Canada gives the U.S. 50 per cent of net revenues (after operating costs, not debt repayment) for 15 years — approximately $21 million per year. Liberals are ahead in polls ahead of three byelections. WestJet is offering customers free booking changes ahead of a possible strike. Section 338 takes effect August 19 — 22 days. Autos and auto parts remain exempt under Section 232.",
    whyItMatters: "The Angus Reid poll is significant: 78 per cent of Canadians support counter-tariffs. That is political cover for Carney to retaliate if Section 338 takes effect August 19. Canada removing CUSMA-covered retaliatory tariffs was a concession to restart talks — it signals Canada wants a deal before August 19. The Conservative committee tomorrow will generate noise about the Gordie Howe Bridge revenue deal but will not affect commercial operations. For your shop: 22 days to August 19. Autos and auto parts remain exempt. Build your GM parts buffer August 1 — 4 days. Unifor-GM bargaining starts August 10 — 13 days.",
    source: "Angus Reid Institute / CTV News / BLG — July 27-28, 2026",
    sourceUrl: "https://www.ctvnews.ca/vancouver/video/2026/07/28/canadian-want-counter-tariffs-on-us-poll-shows/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⚖️",
    text: "Section 338 is THREE proclamations: (1) Motor Vehicles — 439 HTS codes, $19.3B; (2) Dairy — 52 HTS codes, $97M; (3) Alcoholic Beverages — 63 HTS codes, $1B. Total: ~US$20B, ~5% of Canadian exports. CUSMA does NOT protect against Section 338. Autos & parts: CONFIRMED EXEMPT (Section 232). 22 days to August 19.",
    sourceUrl: "https://www.jdsupra.com/legalnews/trump-administration-imposes-50-tariffs-1119263/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge — First full day of commercial operation. Gordie Howe's grandson was the first to cross. Trucking companies are using it. Conservative committee investigating revenue deal: TOMORROW July 29. Pedestrian/bicycle access: August 5.",
    sourceUrl: "https://montreal.citynews.ca/video/2026/07/27/family-of-the-hockey-great-first-to-cross-as-gordie-howe-bridge-opens-to-traffic/",
  },
  {
    icon: "📊",
    text: "Angus Reid poll: 78% of Canadians support counter-tariffs on U.S. Canada removed CUSMA-covered retaliatory tariffs to restart talks — kept steel, aluminum, auto tariffs. Ontario trade rep in Washington: no 'one big deal' coming. Liberals ahead in polls ahead of 3 byelections.",
    sourceUrl: "https://www.ctvnews.ca/vancouver/video/2026/07/28/canadian-want-counter-tariffs-on-us-poll-shows/",
  },
  {
    icon: "🔧",
    text: "Build your 30-day GM parts buffer August 1 — 4 days. Unifor-GM bargaining starts August 10 — 13 days. Ford pattern: 3% annual increases, 74% ratification. Oshawa Silverado and CAMI Equinox EV at stake. September 20 contract expiry.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/07/21/unifor-names-general-motors-as-next-us-automaker-for-contract-talks/",
  },
  {
    icon: "✈️",
    text: "WestJet offering free booking changes ahead of possible strike. Section 301 at 10%, CUSMA exempt, holding. Alberta separation petition: 223,000 verified signatures, referendum vote required. CUSMA full renegotiation pushed to 2027.",
    sourceUrl: "https://montreal.citynews.ca/video/2026/07/24/westjet-offers-customers-free-booking-changes-ahead-of-possible-strike/",
  },
];

const tipOfTheDay = {
  title: "Section 338 HTS Code Review — Do It Today — 22 Days",
  text: "The Motor Vehicles Proclamation covers 439 HTSUS subheadings — and it covers far more than just vehicles. It covers a wide variety of agricultural and manufactured products. Today's action: pull the HTS codes for your top 10 non-auto parts suppliers and cross-reference against the Section 338 Motor Vehicles Proclamation list. If any of your non-auto parts orders are on the list, they are NOT protected by CUSMA — Section 338 overrides CUSMA preference. Your auto and auto parts orders remain fully exempt under Section 232. Section 301 is in effect at 10 per cent for non-CUSMA parts — CUSMA-compliant auto parts remain exempt. Build your GM parts buffer August 1 — 4 days. Unifor-GM bargaining starts August 10 — 13 days. The Gordie Howe Bridge is open — use it for your Michigan supplier parts orders. Toll: $8.60 USD per axle for commercial trucks.",
};

const quoteOfTheDay = {
  text: "The fact that it's delayed 30 days makes me think it's a negotiating tactic, it seems like leverage.",
  author: "Ryan Majerus",
  title: "Former U.S. Trade Representative's Office official — on Section 338's 30-day delay to August 19, July 28, 2026",
};

const rideOfTheDay = {
  name: "1969 Ford Mustang Boss 429 — Raven Black, Argent Silver Hood Stripes, Ontario-Plated",
  description: "Raven Black — a deep, light-absorbing black that makes every panel look like it was poured from a mold. Argent Silver hood stripes running the full length of the hood. Boss 429 badging on the front fenders. The hood is open — and the reason is obvious: the 429 cubic inch Boss V8 barely fits. Ford had to completely redesign the front suspension geometry to accommodate the massive semi-hemispherical engine. Ontario licence plate. 429 cubic inch Boss V8, 375 horsepower factory-rated — widely believed to be a significant understatement to keep insurance rates manageable. The Boss 429 was built for one reason: to homologate the 429 engine for NASCAR competition. Ford needed to build 500 street cars to qualify the engine for racing. They built 859 in 1969. The result was the most exotic engine ever installed in a production Mustang — a hand-assembled, high-revving, free-breathing V8 that required Kar Kraft to cut the shock towers and move the battery to the trunk just to make it fit. The Boss 429 is the engineer's Mustang. The Boss 429 approves of the new bridge.",
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
