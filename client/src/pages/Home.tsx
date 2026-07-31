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

const BRIEFING_NUMBER = 85;
const BRIEFING_DATE = "July 31, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/aLoICTmLLCgvPOsy.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/PCngkXyeYFhlhtHe.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jIzWRvmekzzgxghG.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/tLvpbRBDbbodpvWy.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/AtOpCZTRkTJVRHem.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "WESTJET STRIKE & LOCKOUT NOTICES ISSUED / 72-HOUR NOTICE / STRIKE POSSIBLE SUNDAY AUG 2 / 4,400 CUPE FLIGHT ATTENDANTS / LONG WEEKEND AT RISK",
    tagColor: "#b91c1c",
    headline: "WestJet Strike & Lockout — Both Sides Issued Notices Thursday — Strike or Lockout Possible Sunday August 2 at 12:01 a.m. MT — August Long Weekend at Risk",
    summary: "CUPE Local 8125 issued a 72-hour strike notice Thursday morning July 30. WestJet responded immediately with a lockout notice — both sides issued notices simultaneously. A strike or lockout is possible as early as Sunday August 2 at 12:01 a.m. MT (2:01 a.m. ET). This is Canada's August long weekend — Civic Holiday Monday August 4. WestJet CEO Alexis von Hoensbroech: 'The decision to issue a lockout notice, in response to the actions taken by the union, was not one that was made lightly. We sincerely regret the inconvenience and uncertainty this continues to cause for our guests.' CUPE president Alia Hussain: 'There's still time to avoid a strike.' WestJet says no flights cancelled yet and is still operating normally. Federal mediators remain involved. The federal government could invoke Section 107 of the Canada Labour Code to order workers back — but that requires a cabinet decision. The key issue: approximately 35 hours per month of unpaid work — boarding, deplaning, ground delays. WestJet is waiving cancellation and change fees for passengers travelling July 30 through August 4. WestJet last experienced a major labour dispute in summer 2024 when unionized mechanics struck over the Canada Day long weekend.",
    whyItMatters: "Both sides issued notices simultaneously — that is an escalation, not a negotiation. WestJet issuing a lockout notice in response to a strike notice is a hardball move. If a work stoppage begins Sunday August 2, thousands of Canadians will be stranded during the August long weekend. If you or your staff are flying WestJet between now and August 4, change to Air Canada today — WestJet is waiving fees. For your shop: this is a reminder that labour disruption risk is elevated across Canada right now. WestJet, Unifor-GM (bargaining opened July 30), and the Section 338 tariff countdown (19 days to August 19) are all converging in August. Autos and auto parts remain exempt from Section 338 under Section 232.",
    source: "Global News / CBC News — July 30, 2026",
    sourceUrl: "https://globalnews.ca/news/12002659/westjet-flight-attendants-strike-notice/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRADE ANALYSTS: PREMIERS MUST GIVE CARNEY LATITUDE / USTR GREER: 'INTERIM' DEAL BY END OF 2026 / CUSMA RULES OF ORIGIN PUSHED TO 2027 / 19 DAYS",
    tagColor: "#15803d",
    headline: "Trade Analysts: Premiers Must Give Carney Latitude to Negotiate Hard — USTR Greer: 'Interim' Deal by End of 2026 — CUSMA Rules of Origin Pushed to 2027 — 19 Days to August 19",
    summary: "National Post published a major analysis Friday morning: trade analysts say Canada's premiers must give the federal government 'political licence' to make difficult decisions in negotiations with Washington. Matthew Holmes (Canadian Chamber of Commerce): 'The premiers are going to have to give the federal government the political licence and the social licence to make some of those difficult decisions when it comes down to negotiating.' Maryscott Greenwood (former U.S. diplomat, Ottawa Street Strategy): 'It's about leverage, and it's about being willing to exercise leverage.' Trade lawyer Mark Warner (Maaw Law) was blunt: 'I just wonder what Mark Carney's agenda is. It's kind of like he doesn't want to have an agreement, to me.' Warner: 'It doesn't seem to me that what the government is doing is in any way conducive to having a real negotiation.' USTR Greer told U.S. senators last week that he hopes to have 'interim' agreements with Mexico and Canada separately by the end of 2026. Broader CUSMA rules of origin issues — which require engagement with U.S. Congress — are pushed to 2027. Angus Reid: 43% of Canadians confident Carney can deliver a good deal (down from 53% in spring). 75% don't think Trump will stick to any deal. Holmes: 'There is a little bit of a game of chicken that starts to be played, and that's dangerous because you know they're driving a much bigger truck.'",
    whyItMatters: "The 'interim deal by end of 2026' framing from Greer is the most important new information this week. It means: no comprehensive CUSMA renegotiation before August 19. The Section 338 tariffs are leverage for a narrow interim deal — not a full reset. For your shop: 19 days to August 19. Autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% for non-CUSMA parts — CUSMA-compliant auto parts exempt. Build your GM buffer TODAY — August 1 is tomorrow. Unifor-GM bargaining opened July 30 — Day 2 today.",
    source: "National Post / Yahoo Canada — July 31, 2026",
    sourceUrl: "https://ca.news.yahoo.com/premiers-leeway-feds-negotiate-hard-080046910.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR-GM BARGAINING DAY 2 — TORONTO / FORD PATTERN: 3% ANNUAL / OSHAWA SILVERADO + CAMI EQUINOX EV AT STAKE / CONTRACT EXPIRES SEPT 20",
    tagColor: "#1d4ed8",
    headline: "Unifor-GM Bargaining Day 2 in Toronto — Ford Pattern Is the Floor: 3% Annual Increases — Oshawa Silverado and CAMI Equinox EV at Stake — Contract Expires September 20",
    summary: "Unifor and General Motors opened contract talks Thursday July 30 at a hotel in downtown Toronto — the same hotel where Unifor reached its Ford Canada deal earlier this month. Day 2 of bargaining is underway today, Friday July 31. The three-year Ford agreement will serve as the template for GM talks: 3% annual wage increase in each year of the contract, signing bonuses, and better pension and health benefits. Ford also committed to a $500-million investment in the Essex Engine Plant in Windsor. Unifor National President Lana Payne called the Ford deal 'a strong agreement that delivers real gains and much-needed stability despite unprecedented challenges facing Canadian autoworkers and the entire industry.' The Ford agreement also guaranteed job security and stabilization at Ford Canada plants. At GM, the stakes are: Oshawa Assembly (Silverado full-size pickup) and CAMI Assembly in Ingersoll (Equinox EV). The current GM contract expires at 11:59 p.m. on September 20, 2026. After a GM deal is reached, Unifor moves to Stellantis. The 74% ratification vote on the Ford deal was strong — Payne will use that mandate as leverage at GM.",
    whyItMatters: "The Ford pattern is the floor, not the ceiling. GM will be asked to match or exceed it. The $500M Essex Engine Plant investment was a Ford-specific commitment — GM will face pressure to announce comparable Canadian investment. For your shop: Oshawa Silverado and CAMI Equinox EV parts availability is stable through September 20. If bargaining reaches an impasse in late August or early September, a work stoppage would immediately affect GM parts availability. Build your 30-day GM buffer TODAY — August 1 is tomorrow. Unifor-GM bargaining opened July 30 — 51 days to September 20 contract expiry.",
    source: "Windsor News Today / Sarnia News Today — July 30, 2026",
    sourceUrl: "https://windsornewstoday.ca/windsor/news/2026/07/30/unifor-opens-collective-bargaining-with-general-motors",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "✈️",
    text: "WestJet: BOTH sides issued notices Thursday — CUPE 72-hour strike notice AND WestJet lockout notice. Strike or lockout possible Sunday August 2 at 12:01 a.m. MT. August long weekend at risk. WestJet waiving change fees July 30–August 4. Change to Air Canada now if you're flying this weekend.",
    sourceUrl: "https://globalnews.ca/news/12002659/westjet-flight-attendants-strike-notice/",
  },
  {
    icon: "🔧",
    text: "BUILD YOUR GM BUFFER TODAY — August 1 is tomorrow. Unifor-GM bargaining opened July 30 — Day 2 today. Ford pattern: 3% annual increases, $500M Essex Engine Plant. Oshawa Silverado and CAMI Equinox EV at stake. September 20 contract expiry — 51 days.",
    sourceUrl: "https://windsornewstoday.ca/windsor/news/2026/07/30/unifor-opens-collective-bargaining-with-general-motors",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge — first full week of commercial operation. Pedestrian/bicycle access opens August 5 — 5 days. Toll: $8.60 USD per axle for commercial trucks. Windsor-Detroit corridor: $350M/day. Conservative committee investigation continues.",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/27/gordie-howe-international-bridge-set-to-open-monday-after-years-of-construction/",
  },
  {
    icon: "⚖️",
    text: "Section 338 legal challenge still 'likely' — ITC made no recommendations, making it legally vulnerable. Georgetown/Balsillie analysis: flat 50% across unrelated goods 'offsets nothing in particular.' But courts move slowly — may not stop August 19. 19 days.",
    sourceUrl: "https://nationalpost.com/news/were-a-pawn-in-a-larger-game-a-legal-challenge-is-likely-on-trumps-new-tariffs-it-may-be-too-late",
  },
  {
    icon: "🚗",
    text: "Section 301 at 10%, CUSMA-compliant auto parts EXEMPT. Section 338 (August 19): autos and auto parts EXEMPT under Section 232. Your parts supply chain is protected. The risk is Unifor-GM bargaining, not the tariffs.",
    sourceUrl: "https://ca.news.yahoo.com/premiers-leeway-feds-negotiate-hard-080046910.html",
  },
];

const tipOfTheDay = {
  title: "Build Your GM Buffer TODAY — August 1 Is Tomorrow — WestJet Strike Risk Is Real — Change Your Flights Now",
  text: "Two action items for today, Friday July 31. First: if you service GM vehicles, place your 30-day parts buffer order today. August 1 is tomorrow — that was the target date. Unifor-GM bargaining opened July 30 and is now in Day 2. The Ford pattern (3% annual, $500M Essex Engine Plant) is the floor. If bargaining reaches an impasse in late August or early September, a work stoppage at Oshawa or CAMI would immediately affect GM parts availability. Do not wait. Second: if you or your staff are flying WestJet between now and August 4, change to Air Canada today. WestJet is waiving change fees. Both sides issued notices Thursday — CUPE strike notice and WestJet lockout notice simultaneously. A work stoppage is possible Sunday August 2 at 12:01 a.m. MT. This is the August long weekend. The federal government could invoke Section 107 of the Canada Labour Code but that requires a cabinet decision. Do not assume the government will step in. For your parts supply chain: autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% for non-CUSMA parts — CUSMA-compliant auto parts exempt. 19 days to August 19.",
};

const quoteOfTheDay = {
  text: "The decision to issue a lockout notice, in response to the actions taken by the union, was not one that was made lightly. We sincerely regret the inconvenience and uncertainty this continues to cause for our guests.",
  author: "Alexis von Hoensbroech, CEO, WestJet Group",
  title: "After WestJet issued a lockout notice in response to CUPE's 72-hour strike notice — July 30, 2026",
};

const rideOfTheDay = {
  name: "1972 Pontiac Firebird Trans Am 455 HO — Cameo White, Blue Firebird Hood Decal, Ontario-Plated",
  description: "Cameo White — the most iconic Trans Am colour combination, paired with the large blue Firebird hood decal that covers the entire hood. 455 HO (High Output) badge on the front fender. The 455 cubic inch V8 producing 300 horsepower net (SAE net — the emissions era forced honest numbers). Ontario licence plate on the rear. The 1972 Trans Am was built at the twilight of the muscle car era — emissions regulations were strangling the big-blocks, insurance costs were rising, and the horsepower wars were ending. Pontiac built the Trans Am anyway. The 455 HO was the last gasp of the big-block era — more torque than almost anything on the road, wrapped in the most aggressive body Pontiac had ever produced. The Trans Am survived the emissions era, the oil crisis, and the malaise era. It came back stronger in 1977 with Burt Reynolds and a bigger Firebird decal. Canada will survive Section 338. The Trans Am approves.",
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
