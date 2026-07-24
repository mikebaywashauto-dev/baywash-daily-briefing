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

const BRIEFING_NUMBER = 78;
const BRIEFING_DATE = "July 24, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/eLoXaedKECEunLtr.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/lnGttVFgequAzRsF.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ldxMEyHfwcoXAeBf.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gVeHMJUOmjmDHXyB.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OlZMdYeBNSKcoLIY.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SECTION 301 IN EFFECT TODAY / CUSMA EXEMPT CONFIRMED / RATE UNCHANGED 10% / 4-YEAR FOUNDATION / 26 DAYS TO S.338",
    tagColor: "#b91c1c",
    headline: "Section 301 Forced Labour Tariff Now In Effect — CUSMA Exemption Confirmed — Rate Unchanged at 10% — Section 122 Expired at 12:01 a.m. ET — Four-Year Legal Foundation Begins Today",
    summary: "The Trump administration announced Section 301 forced labour tariffs on Thursday evening — hours before Section 122 expired at 12:01 a.m. ET today, Friday July 24. The transition was seamless. The USTR announced new duties on more than 60 nations, with Canada receiving a 10 per cent rate — identical to the Section 122 rate that expired. Mexico and the United Kingdom are also at 10 per cent. Other nations face 12.5 per cent. The critical protection for Canadian auto parts suppliers is confirmed: goods compliant under the Canada-United States-Mexico Agreement are explicitly exempt from the Section 301 tariff. USTR confirmed 'a CUSMA carve-out and other existing product exemptions.' Trade Minister Dominic LeBlanc confirmed: 'The proposed measure would add a 10% tariff on Canada, although goods that comply with CUSMA would remain exempt.' Canada's Chamber of Commerce called the tariff misguided: 'Canada should not be targeted here. Canada is a leader on this with a formal prohibition on the importation of goods produced with forced labour.' The fundamental difference from Section 122 is durability: Section 122 was a 150-day emergency authority that could have been raised or extended at any time. Section 301 actions run four years and are renewable — this is the new legally durable baseline for your parts cost planning. The 26-day countdown to Section 338 (August 19) continues unchanged.",
    whyItMatters: "The transition is done. Section 301 is in effect. CUSMA-compliant parts are exempt. Your parts costs have not changed. This is the outcome we told you to expect — the tariff rate stayed at 10 per cent, the CUSMA exemption held, and the transition was seamless. What changed today: the legal foundation. Section 122 was temporary and unpredictable. Section 301 runs four years. This is the new baseline for your parts cost planning for the next four years. The action you need to take today: call your top three parts suppliers and get written confirmation of CUSMA compliance status. This is not optional — the CUSMA exemption is your protection and you need documentation. Non-CUSMA parts with Chinese content face 10 per cent additional tariff as of today. The next critical date is August 19 — 26 days — when Section 338 tariffs take effect on cement, alcohol, dairy, and 550+ other HTS codes. Autos and auto parts remain exempt from Section 338 (they are under Section 232). Build your GM parts buffer August 1. Unifor-GM bargaining starts August 10.",
    source: "The Canadian Press / USTR / CP24 / The Star — July 23–24, 2026",
    sourceUrl: "https://www.cp24.com/news/canada/2026/07/24/everything-is-on-the-table-in-us-trade-talks-pm-carney-trump-hits-canada-with-10-tariffs/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CHARLOTTETOWN OUTCOME / EVERYTHING ON THE TABLE / UNITED FRONT / NO RETALIATION YET / 26 DAYS TO S.338",
    tagColor: "#1d4ed8",
    headline: "Charlottetown First Ministers' Meeting Concluded — Carney: 'Everything Is on the Table' — United Front, No Retaliation Announced — Canada 'Intensifying Negotiations' — 26 Days to August 19",
    summary: "Prime Minister Mark Carney wrapped up a four-hour First Ministers' meeting in Charlottetown on Thursday, emerging with a message of unity and a deliberate refusal to announce retaliatory measures in advance. Carney told reporters: 'Everything is on the table, depending on the outcome of the negotiations.' He added: 'We don't need to respond in advance. In fact, I think it would be counterproductive at this stage to respond in advance.' Carney described Canada as being in 'a stronger position' than when the trade war started 18 months ago, citing the resolve of Canadians, the premiers' efforts to strengthen the domestic economy, and progress on interprovincial trade barriers. The premiers' joint communiqué condemned the ongoing imposition of tariffs, demanded a 'clear, timely consultation process' from Ottawa during negotiations, and called for a 'comprehensive deal that includes the full range of tariff-affected sectors, including softwood lumber, steel, aluminum, manufacturing and auto industries.' Canada-U.S. Trade Minister Dominic LeBlanc and Chief Trade Negotiator Janice Charette were both in the room. Canada is reportedly examining retaliatory options that target U.S. congressional districts where cost-of-living pressures are high and where close congressional races are expected this fall. Ontario Premier Doug Ford said he would be 'fully supportive' of that strategy. Carney drew a parallel to the Fathers of Confederation who gathered in the same city 162 years ago facing the threat of American invasion: 'When Team Canada is united, there is nothing that you can't do.'",
    whyItMatters: "The Charlottetown meeting produced unity but not retaliation — and that is the right call for now. Carney's strategy is clear: intensify negotiations, keep all options open, do not tip your hand. The 26-day countdown to Section 338 (August 19) is the pressure valve. If no deal is reached, Canada has a full range of retaliatory options ready. The targeting of U.S. congressional districts is a sophisticated pressure tactic — it turns American voters into Canada's allies by making the cost of Trump's tariffs visible at the grocery store and gas pump in swing districts. For your shop: no retaliatory tariffs have been announced that would affect cross-border parts logistics. CUSMA-compliant parts remain protected. The negotiating window is open. Watch for any announcement in the next 26 days. Build your GM parts buffer August 1. Unifor-GM bargaining starts August 10.",
    source: "CP24 / CTV News / CBC News — July 23, 2026",
    sourceUrl: "https://www.cp24.com/news/canada/2026/07/23/pm-carney-wraps-up-premiers-meeting-says-leaders-are-united-in-face-of-trump-tariff-threats/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GORDIE HOWE BRIDGE / REVENUE DEAL CONTROVERSY / CARNEY: SHOULD HAVE BEEN CLEARER / OPENS MONDAY / 3 DAYS",
    tagColor: "#15803d",
    headline: "Gordie Howe Bridge Revenue Deal Controversy — Carney: 'I Should Have Been Clearer' — Canada Gives U.S. 50% of Net Revenues for 15 Years — Bridge Opens Monday July 27 — 3 Days",
    summary: "Prime Minister Mark Carney admitted Thursday that he 'should have been clearer' about the terms of the new revenue-sharing deal with the United States for the Gordie Howe International Bridge. The controversy erupted when the text of the agreement — released by the Windsor-Detroit Bridge Authority on Tuesday — appeared to contradict what Carney had said at the Calgary Stampede on July 12. At Stampede, Carney suggested that toll revenue would not be split with the U.S. until Canada's $6.4-billion construction debt was repaid. The actual deal: Canada will give the U.S. 50 per cent of net revenues — after operating costs, but NOT including debt repayment — for the first 15 years. The revenue goes to a U.S. economic development fund 'established and solely controlled' by the U.S. government. Carney confirmed Thursday that the PMO estimates the cost at less than five per cent of the $6.4-billion project total — a maximum of $320 million over 15 years, or approximately $21 million per year. The original 2012 Canada-Michigan agreement remains in place in parallel: under that deal, Canada fronts all construction costs and collects all tolls until the debt is repaid (estimated at 50 years), after which revenues are split with Michigan. Commerce Secretary Howard Lutnick called the new deal 'Art of the Deal' and said the U.S. gets 50 per cent of net revenue. Conservative MP Kelly McCauley is convening a committee investigation on July 29. Ontario Premier Doug Ford defended Carney: 'The prime minister did an excellent job getting this deal done.' The bridge opens to traffic Monday July 27 — three days from today.",
    whyItMatters: "The bridge opens Monday. That is the number that matters for your shop's parts supply chain. The revenue deal controversy is a political story — the Conservatives will make noise about it, the committee will investigate, and Carney will take some political damage for the mischaracterization at Stampede. But the bridge opens Monday regardless. The Windsor-Detroit corridor handles $350 million in daily trade. Adding a second crossing to the Ambassador Bridge is the most significant infrastructure improvement for Canadian auto parts supply chains in a decade. The cost of the deal — $21 million per year for 15 years — is a rounding error against the value of the corridor. For your shop: the bridge opens Monday. Plan your parts orders accordingly. The new crossing reduces congestion at the Ambassador Bridge and provides redundancy. Unifor-GM bargaining starts August 10 — build your GM buffer August 1.",
    source: "CBC News / National Post / CTV News — July 22–23, 2026",
    sourceUrl: "https://www.cbc.ca/news/politics/carney-says-should-have-been-clearer-bridge-deal-us-9.7281520",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "✅",
    text: "Section 301 is IN EFFECT as of 12:01 a.m. ET today. CUSMA exemption CONFIRMED — no change to parts costs for compliant suppliers. Rate unchanged at 10%. Section 122 expired as scheduled. Four-year legal foundation begins today. Get written CUSMA compliance confirmation from your top 3 suppliers.",
    sourceUrl: "https://www.cp24.com/news/canada/2026/07/24/everything-is-on-the-table-in-us-trade-talks-pm-carney-trump-hits-canada-with-10-tariffs/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opens MONDAY July 27 — 3 days. Revenue deal controversy: Carney admitted 'I should have been clearer.' Actual deal: Canada gives U.S. 50% of net revenues (after operating costs, NOT debt) for 15 years. Cost: ~$21M/year. Conservative committee investigation July 29. Bridge opens regardless.",
    sourceUrl: "https://www.cbc.ca/news/politics/carney-says-should-have-been-clearer-bridge-deal-us-9.7281520",
  },
  {
    icon: "🍁",
    text: "Charlottetown outcome: Carney 'everything is on the table' but no retaliation announced. Canada examining retaliatory options targeting U.S. congressional districts with high cost-of-living pressure. 26 days to Section 338 (August 19). Negotiations intensifying.",
    sourceUrl: "https://www.cp24.com/news/canada/2026/07/23/pm-carney-wraps-up-premiers-meeting-says-leaders-are-united-in-face-of-trump-tariff-threats/",
  },
  {
    icon: "🔧",
    text: "Unifor-GM bargaining starts August 10 in Toronto. Ford deal ratified: 3% annual pay increases, 74% approval. CAMI (Ingersoll, Equinox EV) currently idle. Build 30-day GM parts buffer August 1 — before bargaining reaches critical phase. September 20 contract expiry.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/07/21/unifor-names-general-motors-as-next-us-automaker-for-contract-talks/",
  },
  {
    icon: "🇨🇦",
    text: "Canada-Ecuador free trade deal signed in Ottawa today. Section 338: $20B of $380B total Canada-U.S. trade — autos and auto parts explicitly exempt (under Section 232). CUSMA update pushed to 2027. Bank of Canada next decision: September 10.",
    sourceUrl: "https://www.thestar.com/politics/cp-newsalert-trump-hitting-countries-including-canada-with-forced-labour-tariffs/article_bc1d9af0-43b1-5b24-9c03-4a10965a32f8.html",
  },
];

const tipOfTheDay = {
  title: "Section 301 Is In Effect — Get Written CUSMA Compliance Confirmation From Your Top 3 Suppliers Today",
  text: "Section 301 is now in effect and the CUSMA exemption is your protection for the next four years. But an exemption you cannot document is an exemption you cannot defend. Today's action: call your top three parts suppliers and ask for written confirmation of CUSMA compliance status. Ask two questions: (1) Are your parts CUSMA-compliant? (2) Do you have documentation to support that? If a supplier cannot provide written confirmation, that is a red flag. Non-CUSMA parts with Chinese content face 10 per cent additional tariff as of today. The Gordie Howe Bridge opens Monday — that is good news for parts supply chain reliability. Build your GM parts buffer August 1. Unifor-GM bargaining starts August 10. Section 338 takes effect August 19 — 26 days. Autos and auto parts remain exempt from Section 338.",
};

const quoteOfTheDay = {
  text: "Could I have explained it better on a Sunday morning at Stampede, with a cowboy hat on? Yes, I could have explained it better.",
  author: "Mark Carney",
  title: "Prime Minister of Canada — Charlottetown, July 23, 2026",
};

const rideOfTheDay = {
  name: "1969 Pontiac GTO Judge Ram Air IV — Carousel Red, 'The Judge' Decals, Ontario-Plated",
  description: "Carousel Red. 'The Judge' decals on the front fenders. Rear spoiler. Ram Air IV hood scoops. Ontario licence plate. 400 cubic inch Ram Air IV V8, 370 horsepower, 445 lb-ft of torque. The 1969 Pontiac GTO Judge was Pontiac's answer to the budget muscle car wars — take the GTO, add the Ram Air IV engine, bolt on a rear spoiler, slap on some wild graphics, and price it to sell. The Judge package was named after a sketch on Rowan and Martin's Laugh-In — 'Here come da Judge' — and it delivered on the promise. The Ram Air IV was the street-legal version of the racing engine: solid lifters, high-compression, and a sound that announced its presence from two blocks away. Parked at a summer car show in Ontario, golden hour light, Carousel Red paint glowing against a green field, the Judge decals catching the last light of the day. Section 301 is in effect. The Judge has been deliberating since February. The verdict: CUSMA parts are exempt.",
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
