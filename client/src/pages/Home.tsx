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

const BRIEFING_NUMBER = 40;
const BRIEFING_DATE = "June 16, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/kaIKJHXLLWdqKciO.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FMTApmURJdCVbTqo.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/BdyahHnmWguOgCKD.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YfyVHtmLHjjAPJoY.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZoXPBhUjMWFdUiPz.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "G7 / CUSMA",
    tagColor: "#1d4ed8",
    headline: "G7 Évian: Trump Says Canada Trade Deal Is 'Achievable' — LeBlanc and Greer Meet on Sidelines Today",
    summary: "The G7 Leaders' Summit opened Monday in Évian-les-Bains, France, and for the first time in months, the tone from the U.S. side on Canada trade was something other than hostile. Speaking to reporters on arrival, U.S. President Donald Trump said a trade deal with Canada is 'achievable' — but added that 'both parties must agree.' It was a notable departure from his June 10 Oval Office remarks that he was 'not looking to renew' CUSMA. No formal bilateral meeting between Trump and Prime Minister Mark Carney was confirmed as of Monday evening, but the two leaders were photographed at the same working lunch. Canada-U.S. Trade Minister Dominic LeBlanc and U.S. Trade Representative Jamieson Greer are scheduled to meet on the G7 sidelines today — Tuesday, June 16. This is the most substantive Canada-U.S. trade contact since LeBlanc and Greer met in Washington earlier this month. Canada's Ambassador to the United States Mark Wiseman, speaking at the Canadian Club Toronto on Monday before flying to France, delivered the clearest articulation yet of Canada's revised trade strategy: 'Everybody take a deep breath, relax, it's all going to be OK.' Wiseman made clear that the July 1 CUSMA review date is not a cliff. CUSMA runs until 2036. July 1 is the start of a renewal window — not an expiry. If the parties don't reach a 16-year extension agreement, CUSMA moves to annual rolling reviews for up to 10 years. The agreement stays in place either way. What Wiseman emphasized is that Canada's actual priority is not the CUSMA review date — it is getting relief on the Section 232 sectoral tariffs on autos (25%), steel (25%), and aluminum (25%). 'Those tariffs are the ones that are biting in terms of impact on the Canadian economy, Canadian business, Canadian workers,' Wiseman said. 'And those sectoral tariffs are sitting outside and are arguably in violation of CUSMA.' LeBlanc has told U.S. counterparts he expects bilateral agreements 'adjacent' to CUSMA to resolve the sectoral tariff issues. The G7 summit runs through Wednesday, June 17.",
    whyItMatters: "For Canadian shop owners, the LeBlanc-Greer meeting today is the most important trade event of the week. The Section 232 auto tariffs are the direct mechanism by which the trade war is hitting your business — through higher OEM production costs, parts price increases, and investment freezes at Honda, Stellantis, and GM Canada. A deal that removes or reduces the 25% auto tariff would be the single most positive development for the Canadian auto sector since the trade war began. The CUSMA review date itself is less important than the media coverage suggests. What matters is whether LeBlanc can get Greer to agree to a package that includes tariff relief — and whether that package can be announced before July 1 to give Canadian businesses some certainty heading into the second half of 2026. Watch for any joint statement from LeBlanc and Greer today. If they announce even a framework for tariff relief discussions, that is a significant positive signal. If they meet and release nothing, the uncertainty continues.",
    source: "CBC News / Catherine Morrison — June 15–16, 2026",
    sourceUrl: "https://www.cbc.ca/news/politics/carney-g7-summit-france-9.7236054",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "GORDIE HOWE BRIDGE",
    tagColor: "#b91c1c",
    headline: "Canada Paid $5.7 Billion — Trump Won't Open It. The Gordie Howe Bridge Impasse Explained.",
    summary: "The Gordie Howe International Bridge is finished. It has been finished since Christmas 2025. It is a 2.7-kilometre, six-lane cable-stayed crossing of the Detroit River — the most sophisticated border crossing in North America, capable of processing 400 vehicles per hour per lane. Canada paid for all of it: $5.7 billion USD, including the construction of the U.S. port of entry on American soil. A ribbon-cutting ceremony was scheduled for June 12, 2026. It did not happen. The Windsor-Detroit Bridge Authority issued a statement last week: 'Canada and the United States have agreed to delay the opening of the bridge, taking the necessary time to resolve any outstanding issues.' What are those outstanding issues? Trump's administration has held the opening hostage since December 2025, demanding renegotiation of the operating agreement despite an existing deal already in place between the U.S. state of Michigan, the province of Ontario, and the Government of Canada. The core dispute is financial: Canada's deal is that it will recoup its construction and operating costs through tolls. Trump's team believes this arrangement is not sufficiently beneficial to the United States — despite the fact that the U.S. contributed zero dollars to construction and received a fully built, state-of-the-art port of entry at no cost. The bridge is owned by the Windsor-Detroit Bridge Authority and operated under a 30-year public-private partnership with Bridging North America — a consortium of Aecon, ACS Infrastructure Canada, and Fluor Canada. As of Tuesday morning, there is no opening date. The Ambassador Bridge — privately owned by the Moroun family — remains the only Windsor-Detroit crossing. The Gordie Howe Bridge, when open, will take significant commercial traffic off the Ambassador Bridge and dramatically reduce congestion on the busiest trade corridor in North America.",
    whyItMatters: "The Gordie Howe Bridge impasse is not just a political story — it is a supply chain story. The Windsor-Detroit corridor handles approximately $400 million in two-way trade every single day. The Ambassador Bridge, which carries roughly 25% of all Canada-U.S. trade, was not designed for the volume it is currently handling. Every day the Gordie Howe Bridge remains closed is a day of unnecessary congestion, longer wait times, and higher logistics costs for every business that moves goods across that border — including every Canadian auto parts supplier, every OEM assembly plant, and every shop that orders parts from U.S. distributors. For Windsor-area shop owners specifically, the bridge delay is a daily operational reality. Parts that should arrive in hours are arriving in days. The political dimension is equally important: the bridge impasse is a microcosm of the broader Canada-U.S. trade relationship under Trump. Canada built the infrastructure, paid the bills, and followed the rules — and is now being asked to renegotiate a deal that was already agreed. If Canada capitulates on the bridge operating agreement, it sets a precedent for every other bilateral deal currently under negotiation.",
    source: "Global Highways / David Arminas — June 16, 2026",
    sourceUrl: "https://www.globalhighways.com/news/us-canada-bridge-delay-howe-much-longer",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TARIFF STRATEGY",
    tagColor: "#d97706",
    headline: "Canada Shifts Trade Focus: Sectoral Tariff Relief Is Now Priority One — July 1 CUSMA Date Is Secondary",
    summary: "Canada's trade strategy has shifted in a meaningful way over the past two weeks, and Ambassador Mark Wiseman made it explicit at the Canadian Club Toronto on Monday: the July 1 CUSMA review date is not the priority. Getting relief on the Section 232 sectoral tariffs is. This is a significant strategic clarification. For months, Canadian media coverage has framed July 1 as a deadline — a date by which CUSMA must be renewed or Canada faces a trade catastrophe. Wiseman's message was the opposite: July 1 is the start of a process, not the end of one. CUSMA runs to 2036 regardless of what happens on July 1. If the parties don't agree to a 16-year extension, CUSMA moves to annual reviews — but the agreement stays in place. What is actually hurting Canada right now is not the CUSMA review process. It is the Section 232 tariffs on autos (25%), steel (25%), and aluminum (25%) that are operating outside of CUSMA and are, in Wiseman's words, 'arguably in violation' of the agreement. These tariffs are the mechanism by which the trade war is hitting Canadian manufacturing, investment, and employment. The auto tariff alone is estimated to cost the Canadian auto sector $3–4 billion annually. Honda's suspension of its $15 billion EV investment was explicitly linked to the auto tariff. Stellantis's Brampton plant closure was linked to the auto tariff. The investment freeze at GM Canada's Oshawa plant was linked to the auto tariff. Canada-U.S. Trade Minister LeBlanc has told U.S. counterparts he expects bilateral agreements 'adjacent' to CUSMA — meaning side deals that address the sectoral tariffs without necessarily resolving the full CUSMA renewal question. This is the deal structure that Canada is now pursuing: tariff relief first, CUSMA renewal as a longer-term process. The LeBlanc-Greer meeting on the G7 sidelines today is the first opportunity to test whether the U.S. is receptive to this framing.",
    whyItMatters: "This strategic shift matters enormously for Canadian shop owners because it clarifies what a 'win' looks like in the trade negotiations. A win is not a CUSMA renewal announcement on July 1. A win is a deal — even a partial deal — that reduces or eliminates the 25% auto tariff. That tariff is the single biggest driver of parts price increases, OEM investment freezes, and supply chain disruption in the Canadian auto sector. If LeBlanc and Greer agree today to a framework for sectoral tariff relief — even a framework with conditions and timelines — that is a positive signal for your business. It means the investment freeze at Honda, Stellantis, and GM Canada may begin to thaw. It means parts prices may stabilize. It means the uncertainty that has been suppressing consumer confidence and vehicle purchases may begin to ease. If they meet and release nothing, the uncertainty continues into the fall — and with it, the ongoing pressure on parts pricing, shop margins, and customer spending. The practical advice: do not wait for July 1 to make business decisions. The CUSMA date is less important than the LeBlanc-Greer outcome. Watch for any joint statement today.",
    source: "BNN Bloomberg / Spencer Van Dyk — June 15, 2026",
    sourceUrl: "https://www.bnnbloomberg.ca/business/2026/06/15/its-all-going-to-be-ok-canadas-us-ambassador-says-ahead-of-cusma-deadline/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇫🇷",
    text: "G7 summit runs through Wednesday, June 17. No joint communiqué expected — France has said it will issue a series of statements instead. Key agenda items: U.S.-Iran ceasefire deal, China trade imbalances, AI regulation, online safety for children. Canada signed an intelligence-sharing agreement with France last Friday. Carney met with EU Council President António Costa and EU Commission President Ursula von der Leyen on Monday.",
    sourceUrl: "https://www.cbc.ca/news/politics/carney-g7-summit-france-9.7236054",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge — still no opening date as of Tuesday morning. The Windsor-Detroit Bridge Authority's statement last week confirmed Canada and the U.S. 'agreed to delay the opening.' Trump's team is demanding renegotiation of the operating agreement. Canada paid $5.7 billion USD including the U.S. port of entry. The Ambassador Bridge remains the only Windsor-Detroit crossing.",
    sourceUrl: "https://www.globalhighways.com/news/us-canada-bridge-delay-howe-much-longer",
  },
  {
    icon: "🔧",
    text: "Unifor-Ford contract talks open Sunday, June 22 — six days from now. Unifor represents 18,000 workers at Ford, GM, and Stellantis plants. The union enters talks in the context of the 25% auto tariff, Honda's $15B investment suspension, and Stellantis's Brampton closure. Any work stoppage at Windsor Assembly (Bronco Sport, Lincoln Corsair) would affect parts availability within days.",
    sourceUrl: "https://www.facebook.com/unifor1285/posts/auto-talks-2026-message-from-lana-payne-bargaining-begins-june-22/1648170097314998/",
  },
  {
    icon: "📋",
    text: "Recall watch: 2021–2025 Jeep Wrangler and Gladiator (106,000 in Canada — fire risk, park outside advisory) and 2014–2020 Acura MDX, 2019–2023 Honda Passport, 2016–2022 Honda Pilot (130,000 in Canada — rear subframe rust). Both recalls are active. Check your customer database and reach out proactively — it is one of the highest-ROI service touchpoints available.",
    sourceUrl: "https://tc.canada.ca/en/recall-alerts-safety-advisories/recalls-safety-advisories/2026",
  },
];

const tipOfTheDay = {
  title: "How to Read the Trade News Without Losing Your Mind",
  text: "The volume of Canada-U.S. trade news is overwhelming right now. G7 summits, CUSMA deadlines, tariff frameworks, bilateral meetings — it is easy to feel like every headline is a crisis. Here is a framework for filtering what matters to your shop. Ask three questions: (1) Does this affect the 25% auto tariff? That tariff is the direct mechanism hitting your parts costs and OEM investment. (2) Does this affect CUSMA content rules? Those rules determine which parts are duty-free. (3) Does this affect a specific OEM's Canadian production? Honda, Stellantis, GM Canada, and Ford Canada assembly decisions flow directly into parts availability and shop economics. Everything else — the political theatre, the summit communiqués, the ambassador statements — is context, not action. Filter for those three questions and you will know what actually matters to your business.",
};

const quoteOfTheDay = {
  text: "Everybody take a deep breath, relax, it's all going to be OK.",
  author: "Mark Wiseman",
  title: "Canada's Ambassador to the United States — Canadian Club Toronto, June 15, 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth Road Runner — 440 Six Pack, Lemon Twist",
  description: "The 1970 Plymouth Road Runner was the purest expression of the muscle car formula: maximum performance, minimum price, zero pretension. Plymouth's marketing team licensed the Warner Bros. Road Runner cartoon character for $50,000 — and put the 'beep beep' horn and the cartoon bird decal on a car that could run 13-second quarter miles for less than $3,000. The 440 Six Pack option — three two-barrel Holley carburettors on a single intake manifold — produced 390 horsepower and was available for $250 over the base price. It was the best performance dollar in the industry. Lemon Twist yellow, shown here, was one of Plymouth's 'High Impact' colours introduced in 1970 — a marketing response to Pontiac's Carousel Red and Dodge's Go-Mango that said, in no uncertain terms, that Plymouth was not interested in being subtle. The Road Runner was discontinued after 1975 as emissions regulations and insurance costs strangled the muscle car era. A numbers-matching 1970 Road Runner with the 440 Six Pack in Lemon Twist is worth $60,000 to $90,000 today. On a Tuesday when Canada is negotiating trade deals in the French Alps and a finished bridge sits empty on the Detroit River, the Road Runner is the right car for the moment: built for a specific purpose, priced for real people, and impossible to ignore.",
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
                {["G7 / CUSMA", "GORDIE HOWE", "TARIFF STRATEGY", "ROAD RUNNER"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="G7 Summit Évian-les-Bains France — Baywash Daily Briefing Edition No. 40"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Today's Edition</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                G7 Évian: LeBlanc Meets Greer Today — Bridge Still Closed — Tariff Relief Is Priority One
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron</span>
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
