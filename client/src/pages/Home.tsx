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

const BRIEFING_NUMBER = 84;
const BRIEFING_DATE = "July 30, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KUFeUeTpWNpPXtzf.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KIYuACtlIxNzyrUu.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mDMNNYkugSGgGscc.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/neMYEYBiJJjKxTML.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/irYcWpbCElOQqrPa.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "LEBLANC MEETS GREER IN WASHINGTON / 'AGREED TO REMAIN IN CLOSE CONTACT' / SECTION 338 LEGAL CHALLENGE LIKELY / 20 DAYS / AUTOS & PARTS EXEMPT",
    tagColor: "#b91c1c",
    headline: "LeBlanc Meets USTR Greer in Washington — 'Agreed to Remain in Close Contact' — Legal Challenge to Section 338 'Likely' — ITC Made No Recommendations — 20 Days to August 19",
    summary: "Canada-U.S. Trade Minister Dominic LeBlanc and chief negotiator Janice Charette met with USTR Jamieson Greer in Washington Wednesday. LeBlanc posted after the meeting: 'We agreed to remain in close contact and continue working together.' That is diplomatic language for: nothing was resolved. LeBlanc is spending a second day in Washington Thursday. LeBlanc attended a Canada-U.S. Friendship Day Blue Jays vs. Nationals baseball game Tuesday wearing a Washington Nationals jersey — an Expos-themed hat included with the tickets. 'My father was a lifelong Montreal Expos fan and every spring break, I looked forward to watching the Expos' spring training games in Florida with him,' LeBlanc wrote. National Post reported Thursday that a legal challenge to Section 338 is 'likely' and may succeed more than Section 301 litigation. The key legal vulnerability: Section 338 requires the International Trade Commission (ITC) to monitor global trade and advise the White House. The ITC made no recommendations in this case. Cato Institute's Clark Packard: 'A legal challenge is going to happen. I think it's more likely to succeed than Section 301 litigation.' Customs lawyer Carrie Owens (Kelley Drye): 'It does not state the president can only act after an ITC report or recommendation.' Andrew Hale (Advancing American Freedom): 'Is it just more TACO — Trump Always Chickens Out? Or is it just a threat to get the Canadians to do what he wants them to?' Trade experts say the 30-day delay is a negotiating tactic. But the legal challenge, if filed, may not be resolved before August 19.",
    whyItMatters: "'We agreed to remain in close contact' is the most important phrase of the week. It means LeBlanc and Greer met, shook hands, and resolved nothing. Canada has 20 days to August 19. A legal challenge is likely but may not stop the tariffs in time. The ITC vulnerability is real — but courts move slowly. For your shop: autos and auto parts remain exempt from Section 338 under Section 232. Build your GM parts buffer TOMORROW — August 1. Do not wait for the legal challenge or the talks to resolve. Unifor-GM bargaining starts August 10 — 11 days. Section 301 is in effect at 10 per cent for non-CUSMA parts — CUSMA-compliant auto parts remain exempt.",
    source: "TSN / National Post / Cato Institute — July 29-30, 2026",
    sourceUrl: "https://www.tsn.ca/mlb/article/sporting-a-washington-jersey-leblanc-attends-friendship-day-baseball-game-in-dc/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CARNEY RULES OUT ENERGY LEVERAGE / 'BEING A RELIABLE SUPPLIER IS IMPORTANT' / RED DEER WITH SMITH / FORD WANTED ENERGY WEAPON",
    tagColor: "#15803d",
    headline: "Carney Rules Out Energy as Leverage in Trade Talks — 'Being a Reliable Supplier Is Important' — Red Deer With Premier Smith — Ford Had Called for Energy Weapon",
    summary: "Prime Minister Mark Carney pushed back Wednesday on calls to use Canada's energy exports as leverage in trade negotiations with the United States. Speaking alongside Alberta Premier Danielle Smith in Red Deer, Carney said: 'Being a reliable supplier is important. Suppliers of critical commodities like energy should think long and hard before cutting off customers.' Ontario Premier Doug Ford had said last week that Canada could 'dismantle' the United States if Ottawa and the provinces agreed to use energy exports as leverage against Washington's latest threatened tariffs. Carney rejected the characterization of energy and critical minerals as 'leverage' in negotiations. 'We have many things we can do. The first and foremost is to work towards an agreement. That's what we're going to do. But there's other things we could do if we needed to address the situation,' Carney said. USTR Greer has said Section 338 is a response to: (1) provincial bans on U.S. liquor, (2) Canada's supply managed dairy system, (3) quotas on certain U.S. vehicles. Canada removed CUSMA-covered retaliatory tariffs to restart talks — kept steel, aluminum, and auto tariffs in place. 20 days to Section 338 (August 19). Autos and auto parts: EXEMPT under Section 232.",
    whyItMatters: "Carney's 'reliable supplier' framing is a deliberate signal to Alberta and to Washington: Canada will not use energy as a weapon. This is the right call for the long-term relationship but it removes Canada's most powerful leverage card. Ford's 'dismantle' rhetoric was never going to happen — Carney is managing expectations. For your shop: the trade talks are proceeding on Canada's terms, which means patience and process. The 20-day countdown to Section 338 (August 19) is real. Autos and auto parts remain exempt. Build your GM parts buffer TOMORROW — August 1. Unifor-GM bargaining starts August 10 — 11 days.",
    source: "Canadian Press / SaskNow / The Deep Dive — July 29-30, 2026",
    sourceUrl: "https://sasknow.com/2026/07/29/being-a-reliable-supplier-is-important-carney-on-using-energy-in-u-s-trade-talks/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "WESTJET STRIKE CLOCK TICKING / 4400 CUPE FLIGHT ATTENDANTS / 99.4% STRIKE VOTE / AUG 2 DEADLINE / FEDERAL MEDIATORS INVOLVED",
    tagColor: "#1d4ed8",
    headline: "WestJet Strike Clock Ticking — 4,400 CUPE Flight Attendants Voted 99.4% in Favour — August 2 Deadline — Today Is First Day for 72-Hour Strike Notice — Federal Mediators Still Involved",
    summary: "WestJet, Canada's second-largest airline, is preparing to wind down operations ahead of a possible flight attendant strike or lockout as early as August 2. The CUPE WestJet Component — representing 4,400 flight attendants — voted 99.4 per cent in favour of a strike in mid-July. Today — Thursday July 30 — is the first day the union can legally give 72-hour strike notice, which would put the earliest possible strike or lockout at August 2. WestJet has not announced flight cancellations but has offered to waive cancellation or change fees for passengers travelling between July 30 and August 4. Federal mediators remain involved. Transport Minister Steven MacKinnon: 'My understanding is that those talks are progressing. We're hopeful that they reach a negotiated agreement.' The key issue: flight attendants claim approximately 35 hours per month are unpaid — boarding, deplaning, ground delays. WestJet CEO Alexis von Hoensbroech: 'Under our current contract, flight attendants are being paid for every hour worked.' The union: 'The best way to avoid a strike is for WestJet to do the right thing and end the practice of unpaid work.' WestJet last experienced a major labour dispute in summer 2024 when unionized mechanics struck over the Canada Day long weekend.",
    whyItMatters: "This is not a tariff story but it is a summer travel disruption story. If WestJet flight attendants strike August 2, thousands of Canadians will be stranded during the August long weekend — including your customers and suppliers. If you or your staff are flying WestJet between July 30 and August 4, check your booking now and consider changing to Air Canada. WestJet is waiving change fees. The Air Canada precedent from 2025 is instructive: binding arbitration eventually settled the dispute, but it took weeks. For your shop: this is a reminder that labour disruption risk is elevated across Canada right now — WestJet, Unifor-GM (August 10), and the broader tariff uncertainty are all converging in August.",
    source: "CBC News / Vancouver CityNews — July 29-30, 2026",
    sourceUrl: "https://www.cbc.ca/news/business/westjet-winddown-strike-9.7289209",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🚨",
    text: "LeBlanc met USTR Greer Wednesday. Post-meeting: 'We agreed to remain in close contact and continue working together.' That is diplomatic language for nothing was resolved. LeBlanc is spending a second day in Washington Thursday. 20 days to August 19. Autos and parts: EXEMPT.",
    sourceUrl: "https://www.tsn.ca/mlb/article/sporting-a-washington-jersey-leblanc-attends-friendship-day-baseball-game-in-dc/",
  },
  {
    icon: "⚖️",
    text: "National Post: Section 338 legal challenge 'likely' — ITC made no recommendations, making it legally vulnerable. Cato Institute: 'A legal challenge is going to happen. I think it's more likely to succeed than Section 301 litigation.' But courts move slowly — may not stop August 19.",
    sourceUrl: "https://nationalpost.com/news/were-a-pawn-in-a-larger-game-a-legal-challenge-is-likely-on-trumps-new-tariffs-it-may-be-too-late",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge operating normally — first full week of commercial operation. Pedestrian/bicycle access opens August 5 — 6 days. Toll: $8.60 USD per axle for commercial trucks. Windsor-Detroit corridor: $350M/day.",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/27/gordie-howe-international-bridge-set-to-open-monday-after-years-of-construction/",
  },
  {
    icon: "🔧",
    text: "BUILD YOUR GM BUFFER TOMORROW — August 1. Unifor-GM bargaining starts August 10 — 11 days. Ford pattern: 3% annual increases, 74% ratification. Oshawa Silverado and CAMI Equinox EV at stake. September 20 contract expiry.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/07/21/unifor-names-general-motors-as-next-us-automaker-for-contract-talks/",
  },
  {
    icon: "✈️",
    text: "WestJet: today is the first day the union can give 72-hour strike notice. August 2 deadline. WestJet waiving change fees for July 30–August 4. Federal mediators involved. If you're flying WestJet this long weekend, check your booking now.",
    sourceUrl: "https://www.cbc.ca/news/business/westjet-winddown-strike-9.7289209",
  },
];

const tipOfTheDay = {
  title: "Build Your GM Buffer TOMORROW — August 1 — LeBlanc Met Greer and Resolved Nothing",
  text: "LeBlanc met USTR Greer in Washington and they 'agreed to remain in close contact.' That is diplomatic language for: nothing was resolved. You have 20 days to August 19. A legal challenge to Section 338 is likely but may not stop the tariffs in time. Today's action: if you service GM vehicles, place your 30-day parts buffer order TOMORROW — August 1. Do not wait for the legal challenge or the trade talks to resolve. Unifor-GM bargaining starts August 10 — 11 days. If bargaining reaches an impasse in late August or early September, a work stoppage at Oshawa or CAMI would immediately affect GM parts availability. Autos and auto parts remain exempt from Section 338 under Section 232 — your parts supply chain is protected from the August 19 tariffs. Section 301 is in effect at 10 per cent for non-CUSMA parts — CUSMA-compliant auto parts remain exempt. The Gordie Howe Bridge is open — use it for your Michigan supplier parts orders. Toll: $8.60 USD per axle for commercial trucks. Pedestrian/bicycle access opens August 5 — 6 days.",
};

const quoteOfTheDay = {
  text: "We agreed to remain in close contact and continue working together.",
  author: "Trade Minister Dominic LeBlanc",
  title: "After meeting USTR Greer in Washington — July 29, 2026",
};

const rideOfTheDay = {
  name: "1971 AMC Javelin AMX 401 — Trans-Am Red, White Racing Stripes, Ontario-Plated",
  description: "Trans-Am Red — a deep, vivid red that commands attention on the street and on the track. Broad white racing stripes running the full length of the hood and roof. AMX 401 badging on the front fenders. The 401 cubic inch V8 producing 330 horsepower — AMC's largest engine, available only in the Javelin AMX in 1971. Ontario licence plate on the rear. The Javelin AMX was AMC's answer to the Mustang, Camaro, and Challenger — built by a company with a fraction of the resources of the Big Three, competing above its weight class in Trans-Am racing. Mark Donohue drove a Javelin to the 1971 Trans-Am championship. AMC was the scrappy underdog of the muscle car era — outgunned, outspent, and underestimated. It won anyway. Canada's position in these trade talks. LeBlanc met Greer and 'agreed to remain in close contact.' The Javelin AMX does not agree to remain in close contact. It goes.",
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
