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

const BRIEFING_NUMBER = 83;
const BRIEFING_DATE = "July 29, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/utLgGwATbXhukswT.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JEbxgZJpCJRfaiGO.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/UpLozaOfuDWjPHek.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VgjaptrmZXeYAomb.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RZtLYpZgCjNzibBb.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TRUMP: 'I DON'T CARE' ABOUT CUSMA / LEBLANC IN WASHINGTON / 21 DAYS / AUTOS & PARTS EXEMPT / SECTION 338 LEVERAGE TACTIC",
    tagColor: "#b91c1c",
    headline: "Trump: 'I Don't Care' About CUSMA — 'Mexico and Canada Need Us, We Don't Need Them' — LeBlanc Arrives in Washington With Chief Negotiator Charette — 21 Days to Section 338",
    summary: "U.S. President Donald Trump said Tuesday morning on Fox & Friends that he does not care about updating the North American trade agreement. Asked if he would update CUSMA, Trump said: 'I don't care. I mean I don't really want to. I'd rather be independent. Mexico and Canada need us, we don't need them. The deal is important for them. It's not important for us.' Trump opted not to renew CUSMA on July 1, triggering a decade-long wind-down unless revisions are agreed. He cited Toyota's $3.6 billion Texas plant investment as proof his tariff strategy is working. Canada-U.S. Trade Minister Dominic LeBlanc arrived in Washington Tuesday with Canada's chief trade negotiator Janice Charette. LeBlanc's office did not specify who they are meeting or how long they will be in Washington. The United Steelworkers and International Association of Machinists — which represent workers in both the U.S. and Canada — jointly urged USTR Greer to reconsider tariffs on Canadian goods and forge a cooperative relationship to confront China's unfair trade practices. The Canadian Chamber of Commerce Business Data Lab warned Tuesday that the biggest economic cost may not be the tariffs themselves but the investment that has been halted. Patrick Gill, vice-president of the Business Data Lab: 'With all this uncertainty, it's really starting to affect our long-term competitiveness.' Angus Reid: 43 per cent of Canadians are now confident Carney can deliver a good deal with the U.S. — down from 51 per cent in April. 75 per cent of Canadians do not think Trump will stick to any deal.",
    whyItMatters: "Trump's 'I don't care' comment is the most important signal of the week. It confirms that CUSMA renewal is not a priority for the White House. Canada is in Washington trying to negotiate a deal that the other side says it doesn't need. The 21-day countdown to Section 338 (August 19) is the real pressure valve. Autos and auto parts remain exempt from Section 338 under Section 232 — your parts supply chain is protected. The investment freeze is the hidden cost — if your shop has been delaying equipment purchases or expansion decisions because of tariff uncertainty, you are not alone. Build your GM parts buffer August 1 — 3 days. Unifor-GM bargaining starts August 10 — 12 days.",
    source: "Reuters / CTV News / Canadian Chamber of Commerce — July 28-29, 2026",
    sourceUrl: "https://www.reuters.com/world/americas/trump-says-he-does-not-care-about-usmca-us-canada-plan-trade-talks-2026-07-28/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRUMP AT GM PROVING GROUND MICHIGAN / SIGNED A CORVETTE / MARY BARRA / 1000+ SUPPORTERS / MICHIGAN PRIMARY AUG 4",
    tagColor: "#15803d",
    headline: "Trump at GM Milford Proving Ground Monday — Signed a Corvette — Mary Barra Introduced Him — 'We Have the Hottest Car Business' — Michigan Primary August 4 — 6 Days",
    summary: "President Trump visited the General Motors Milford Proving Ground in Oakland County, Michigan on Monday July 27 — the same day the Gordie Howe Bridge opened. More than 1,000 supporters attended. GM CEO Mary Barra introduced Trump on stage. Trump signed a Chevrolet Corvette during the visit. Trump defended his tariff policies and said they are bringing manufacturing back to the United States. He cited Toyota's $3.6 billion Texas plant investment as proof: 'We have the hottest car business. We're right now building more car plants than at any time in our history.' Trump said automakers 'have no tariffs if they build their product here.' Six protesters briefly disrupted the event over data center development in Michigan before being escorted out. Michigan primary is August 4 — 6 days. The Canada tariff fight is handing Democrats a cudgel in Michigan midterm races — U.S. political pressure from the Michigan side is building. Michigan Governor Gretchen Whitmer posted about the Gordie Howe Bridge: 'The Gordie Howe bridge is proof that when we work together, we can get hard things done.'",
    whyItMatters: "Trump chose to hold his Michigan rally at the GM Proving Ground on the same day the Gordie Howe Bridge opened. The symbolism is deliberate: Trump is claiming credit for the auto investment story while Canada is celebrating the bridge. The Michigan primary is August 4 — 6 days. The Canada tariff fight is a live political issue in Michigan. Whitmer is positioning herself as pro-bridge, pro-Canada cooperation — a direct contrast to Trump. For your shop: Trump's 'build it here' message means the tariff pressure on Canadian-assembled vehicles is not going away. Autos and auto parts remain exempt from Section 338 under Section 232. Build your GM parts buffer August 1 — 3 days. Unifor-GM bargaining starts August 10 — 12 days.",
    source: "MLive / AP / Michigan Governor's Office — July 27-28, 2026",
    sourceUrl: "https://www.mlive.com/politics/2026/07/our-favorite-25-photos-from-president-trumps-visit-to-gm-proving-grounds.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CONSERVATIVE COMMITTEE / GORDIE HOWE BRIDGE REVENUE DEAL / MOSTLY ADMINISTRATIVE / BRIDGE OPERATING / PEDESTRIAN ACCESS AUG 5",
    tagColor: "#1d4ed8",
    headline: "Conservative Committee on Gordie Howe Bridge Revenue Deal — Mostly Administrative Today — Discussing Scope of Investigation — Bridge Operating Normally — Pedestrian Access August 5 — 7 Days",
    summary: "The Conservative-led House Government Operations Committee convened an emergency meeting today — Wednesday July 29 — to investigate the Gordie Howe Bridge revenue deal. Conservative MP Kelly McCauley organized the meeting. The meeting was mostly administrative: the committee discussed the scope of the investigation and set up a schedule for witnesses. No bombshells were expected or delivered today. The deal under investigation: Canada agreed to give the United States 50 per cent of net revenues from the bridge (after operating costs, not debt repayment) for 15 years — approximately $21 million per year. PM Carney acknowledged last week that he 'should have been clearer' about the deal. The bridge is open and operating normally regardless of the committee investigation. Commercial trucks and passenger vehicles are using the new I-75 to Hwy 401 direct crossing. Pedestrian and bicycle access opens August 5 — 7 days. Michigan Governor Gretchen Whitmer: 'The Gordie Howe bridge is proof that when we work together, we can get hard things done.'",
    whyItMatters: "The committee investigation is a political story. It will generate noise over the next several weeks but will not affect the commercial operation of the bridge. The bridge is open. Use it. The revenue deal is a 15-year arrangement worth approximately $21 million per year to the U.S. — a small price for a $350 million per day corridor. For your shop: the Gordie Howe Bridge is now available for your Michigan supplier parts orders. Toll: $8.60 USD per axle for commercial trucks. Pedestrian/bicycle access opens August 5 — 7 days. Build your GM parts buffer August 1 — 3 days. Unifor-GM bargaining starts August 10 — 12 days. Section 338 takes effect August 19 — 21 days. Autos and auto parts remain exempt.",
    source: "Canadian Press / Lethbridge News Now / Penticton Herald — July 29, 2026",
    sourceUrl: "https://lethbridgenewsnow.com/2026/07/29/in-the-news-today-gordie-howe-bridge-deal-debate-westjet-strike-lost-ring-returned/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🚨",
    text: "Trump: 'I don't care' about CUSMA. 'Mexico and Canada need us, we don't need them.' LeBlanc in Washington with chief negotiator Charette. Angus Reid: 43% of Canadians confident Carney can get a good deal (down from 51% in April). 75% don't think Trump will stick to any deal. 21 days to August 19.",
    sourceUrl: "https://www.reuters.com/world/americas/trump-says-he-does-not-care-about-usmca-us-canada-plan-trade-talks-2026-07-28/",
  },
  {
    icon: "🚗",
    text: "Trump at GM Milford Proving Ground Monday — signed a Corvette. Mary Barra introduced him. 1,000+ supporters. 'We have the hottest car business. We're right now building more car plants than at any time in our history.' Michigan primary August 4 — 6 days.",
    sourceUrl: "https://www.mlive.com/politics/2026/07/our-favorite-25-photos-from-president-trumps-visit-to-gm-proving-grounds.html",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge: Conservative committee meeting today — mostly administrative, scope of investigation. Bridge operating normally. Pedestrian/bicycle access August 5 — 7 days. Michigan Governor Whitmer: 'Proof that when we work together, we can get hard things done.'",
    sourceUrl: "https://lethbridgenewsnow.com/2026/07/29/in-the-news-today-gordie-howe-bridge-deal-debate-westjet-strike-lost-ring-returned/",
  },
  {
    icon: "🔧",
    text: "Build your 30-day GM parts buffer August 1 — 3 days. Unifor-GM bargaining starts August 10 — 12 days. Ford pattern: 3% annual increases, 74% ratification. Oshawa Silverado and CAMI Equinox EV at stake. September 20 contract expiry.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/07/21/unifor-names-general-motors-as-next-us-automaker-for-contract-talks/",
  },
  {
    icon: "🛢️",
    text: "Canadian oil exports to U.S. INCREASED in May 2026 despite trade turmoil. WestJet offering free booking changes ahead of possible strike. Section 301 at 10%, CUSMA exempt, holding. Canadian Chamber of Commerce: investment freeze is the hidden cost of tariff uncertainty.",
    sourceUrl: "https://www.industrialinfo.com/news/article/despite-trade-turmoil-canadian-oil-exports-increased-in-may--360713",
  },
];

const tipOfTheDay = {
  title: "Build Your GM Buffer August 1 — 3 Days — Don't Wait for the Talks to Resolve",
  text: "LeBlanc is in Washington. Trump says he doesn't care about CUSMA. The 21-day countdown to Section 338 (August 19) is the real pressure valve. Today's action: if you service GM vehicles, place your 30-day parts buffer order on August 1 — 3 days from today. Do not wait for the trade talks to resolve. They may not resolve before August 19. Unifor-GM bargaining starts August 10 — 12 days. If bargaining reaches an impasse in late August or early September, a work stoppage at Oshawa or CAMI would immediately affect GM parts availability. Autos and auto parts remain exempt from Section 338 under Section 232 — your parts supply chain is protected from the August 19 tariffs. Section 301 is in effect at 10 per cent for non-CUSMA parts — CUSMA-compliant auto parts remain exempt. The Gordie Howe Bridge is open — use it for your Michigan supplier parts orders. Toll: $8.60 USD per axle for commercial trucks.",
};

const quoteOfTheDay = {
  text: "I don't care. I mean I don't really want to. I'd rather be independent. Mexico and Canada need us, we don't need them. The deal is important for them. It's not important for us.",
  author: "Donald Trump",
  title: "U.S. President — Fox & Friends, on whether he would update CUSMA, July 28, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Corvette Stingray LT1 — Bridgehampton Blue, White Stinger Stripe, Ontario-Plated",
  description: "Bridgehampton Blue — a deep, rich medium blue with a slight metallic shimmer named after the Bridgehampton race circuit in New York. White Stinger stripe running from the nose back over the hood and down the rear deck. T-top roof panels removed, showing the open cockpit. Chrome side pipes. Ontario licence plate. 350 cubic inch LT1 V8, 370 horsepower — the highest-output small-block Chevrolet ever installed in a production car at the time. The LT1 was the performance engine for buyers who wanted the Corvette's soul without the complexity of the big-block. Solid lifters, 11:1 compression, Holley four-barrel carburetor. The 1970 Corvette Stingray is the most refined expression of the C3 generation — the year the body was restyled with flared fenders, an egg-crate grille, and the iconic Stingray script. Trump signed a Corvette at the GM Proving Ground on Monday. This one is Ontario-plated. The Stingray does not care about CUSMA either.",
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
