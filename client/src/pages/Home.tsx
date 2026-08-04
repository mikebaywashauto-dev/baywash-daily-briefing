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

const BRIEFING_NUMBER = 89;
const BRIEFING_DATE = "August 4, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VwsMmHQARcwhXagn.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/biXDDqosBvAOsVwt.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/duUUSIAEGqBWuySC.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FeoEsCIDOWKlqsjy.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TBuEUfAUmGJHPJmj.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "WESTJET STRIKE OVER / TENTATIVE DEAL REACHED / FLIGHTS RESUMING / 1 DAY STRIKE / NO SECTION 107 NEEDED",
    tagColor: "#15803d",
    headline: "WestJet Strike Is Over — Tentative Deal Reached Monday After Just One Day — Flights Resuming Tuesday — No Government Intervention Required",
    summary: "WestJet and CUPE Local 8125 reached a tentative agreement Monday August 3 — just one day after 4,400 flight attendants walked off the job. CUPE president Alia Hussain: 'This deal certainly addressed the wage gap.' WestJet CEO Alexis von Hoensbroech: 'We are pleased to have reached a tentative agreement.' The deal includes double-digit wage increases in year one and pay for all time worked including boarding, deplaning, and ground delays — the core union demand. No Section 107 government intervention was required. Ratification vote within 30 days. WestJet is gradually restoring its schedule Tuesday — full schedule not restored until later this week. 600+ flights were cancelled and approximately 250,000 passengers were impacted during the 30-hour work stoppage. WestJet Encore Q400 and codeshare flights were unaffected throughout.",
    whyItMatters: "WestJet is back. If you were stranded, check your rebooking status and keep receipts for any out-of-pocket expenses — you may still be entitled to compensation under the Air Passenger Protection Regulations. For your shop: the WestJet disruption is over. Refocus on Section 338 (15 days to August 19) and Unifor-GM bargaining (6 days to August 10). Autos and auto parts remain exempt from Section 338 under Section 232.",
    source: "Reuters / CBC / CUPE — August 3–4, 2026",
    sourceUrl: "https://www.reuters.com/legal/litigation/westjet-flight-attendants-union-reach-wage-increase-deal-end-strike-2026-08-03/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SECTION 338 — 15 DAYS TO AUGUST 19 / LEGAL CHALLENGE FILED / AUTOS & PARTS EXEMPT / MICHIGAN PRIMARY TODAY / 25 STATES SUING",
    tagColor: "#b91c1c",
    headline: "Section 338 — 15 Days — Legal Challenges Filed — Georgetown Scholars: Three Strong Arguments — 25 States Suing — Michigan Primary Today",
    summary: "Georgetown Law scholars published the most detailed Section 338 legal analysis yet Monday. Three strong arguments the tariffs are legally vulnerable: (1) Offset requirement violated — the 50% tariff is nearly 2x the alleged harm from Canadian dairy practices; (2) Canada's dairy practices don't discriminate against U.S. imports vs. 'every foreign country' as required by Section 338; (3) Trump bypassed the ITC fact-finding requirement. Twenty-five states filed suit Monday. Volokh Conspiracy (Georgetown): 'A legal challenge is going to happen. I think it's more likely to succeed than Section 301 litigation.' But courts move slowly — 15 days to August 19. Autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10%, CUSMA-compliant auto parts exempt. Michigan primary TODAY — Abdul El-Sayed vs. Haley Stevens for the Senate seat vacated by Gary Peters. Polls: El-Sayed leading. Republican Mike Rogers likely wins the general (November 3) if El-Sayed wins the primary.",
    whyItMatters: "15 days to August 19. Legal challenges are filed but courts move slowly — do not count on an injunction before August 19. For your shop: autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% for non-CUSMA parts — CUSMA-compliant auto parts exempt. Michigan primary today: whoever wins the Senate seat votes on CUSMA renegotiation. Unifor-GM bargaining opens August 10 — 6 days.",
    source: "Georgetown Law / Volokh Conspiracy / Reuters — August 3–4, 2026",
    sourceUrl: "https://reason.com/volokh/2026/08/03/prospective-legal-challenges-to-trumps-section-338-tariffs-against-canada/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GORDIE HOWE BRIDGE PEDESTRIAN PATH OPENS TOMORROW AUGUST 5 / FREE / UNIFOR-GM 6 DAYS / MICHIGAN PRIMARY TODAY / FORD PATTERN 3%",
    tagColor: "#15803d",
    headline: "Gordie Howe Bridge Pedestrian Path Opens TOMORROW August 5 — Free — Michigan Primary Today — Unifor-GM Bargaining 6 Days",
    summary: "The Gordie Howe International Bridge multi-use pedestrian and cyclist path opens TOMORROW Wednesday August 5 at 8 a.m. — free of charge. It is the only pedestrian border crossing between Canada and the United States. Summer hours: 8 a.m. to 8 p.m., seven days per week. Car toll: $5.75 (compared to $10 at the Ambassador Bridge). Michigan primary is TODAY — Abdul El-Sayed (progressive) vs. Haley Stevens (moderate) for the U.S. Senate seat vacated by Gary Peters. Polls: El-Sayed leading. Republican Mike Rogers is the likely general election winner (November 3) if El-Sayed wins the primary. Whoever wins the Senate seat votes on CUSMA renegotiation. Unifor formal bargaining with General Motors opens Monday August 10 in Toronto — 6 days. Unifor represents more than 4,600 members at Ontario GM facilities: Oshawa Assembly (Silverado pickup), CAMI Assembly in Ingersoll (Equinox EV), and the St. Catharines Propulsion Plant. The Ford pattern is the established floor: 3% annual wage increases, signing bonuses, and a $500 million Essex Engine Plant investment commitment. The GM contract expires September 20 — 47 days.",
    whyItMatters: "Gordie Howe Bridge pedestrian path opens TOMORROW — August 5. Michigan primary today: whoever wins the Senate seat votes on CUSMA renegotiation. Unifor-GM bargaining opens in 6 days. If bargaining reaches an impasse, a work stoppage at Oshawa or CAMI would immediately affect GM parts availability across Ontario. Build your 30-day GM buffer today if you haven't already.",
    source: "ClickOnDetroit / Unifor / Michigan SOS — August 4, 2026",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/28/pedestrians-cyclists-can-cross-gordie-howe-international-bridge-for-free-beginning-aug-5/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "✈️",
    text: "WestJet strike is OVER. Tentative deal reached Monday August 3 after just 30 hours. Double-digit wage increase year one. Flights resuming Tuesday — full schedule restored later this week. Ratification vote within 30 days. Keep receipts if you incurred out-of-pocket costs.",
    sourceUrl: "https://www.reuters.com/legal/litigation/westjet-flight-attendants-union-reach-wage-increase-deal-end-strike-2026-08-03/",
  },
  {
    icon: "⚖️",
    text: "Section 338 legal challenges: Georgetown Law scholars identified 3 strong arguments. 25 states filed suit Monday. But courts move slowly — do not count on an injunction before August 19. 15 days. Autos and auto parts EXEMPT under Section 232.",
    sourceUrl: "https://reason.com/volokh/2026/08/03/prospective-legal-challenges-to-trumps-section-338-tariffs-against-canada/",
  },
  {
    icon: "🗳️",
    text: "Michigan primary TODAY — Abdul El-Sayed vs. Haley Stevens for U.S. Senate. Polls: El-Sayed leading. Republican Mike Rogers likely wins the general (November 3) if El-Sayed wins. Whoever wins votes on CUSMA renegotiation.",
    sourceUrl: "https://www.mlive.com/politics/2026/08/michigan-senate-primary-2026-results-live-updates.html",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge pedestrian & cyclist path opens TOMORROW August 5 at 8 a.m. FREE. Only pedestrian border crossing between Canada and the U.S. Car toll: $5.75 (vs. $10 at Ambassador Bridge).",
    sourceUrl: "https://www.clickondetroit.com/news/local/2026/07/28/pedestrians-cyclists-can-cross-gordie-howe-international-bridge-for-free-beginning-aug-5/",
  },
  {
    icon: "🔧",
    text: "Unifor-GM formal bargaining opens August 10 — 6 days. Ford pattern: 3% annual increases, $500M Essex Engine Plant. Oshawa Silverado and CAMI Equinox EV at stake. September 20 contract expiry — 47 days. Build your GM buffer today.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-commence-negotiations-general-motors",
  },
];

const tipOfTheDay = {
  title: "WestJet Is Back — Section 338 Legal Challenge Filed — Michigan Primary Today — Gordie Howe Bridge Pedestrian Path Tomorrow — Unifor-GM 6 Days",
  text: "Five things for Tuesday August 4. First: WestJet is back. Flights are resuming today — full schedule restored later this week. If you incurred out-of-pocket rebooking costs during the 30-hour strike, keep your receipts — you may be entitled to reimbursement under the Air Passenger Protection Regulations. Second: Section 338 legal challenges are filed. Georgetown Law scholars identified 3 strong arguments. 25 states sued Monday. But courts move slowly — do not count on an injunction before August 19. 15 days. Third: Michigan primary today — whoever wins the Senate seat votes on CUSMA renegotiation. Fourth: Gordie Howe Bridge pedestrian path opens TOMORROW August 5 at 8 a.m. — free. Fifth: Unifor-GM bargaining opens August 10 — 6 days. Build your 30-day GM buffer today. Autos and auto parts remain exempt from Section 338 under Section 232. Section 301 at 10% for non-CUSMA parts — CUSMA-compliant auto parts exempt.",
};

const quoteOfTheDay = {
  text: "This deal certainly addressed the wage gap.",
  author: "Alia Hussain, President, CUPE Local 8125",
  title: "WestJet tentative agreement reached — August 3, 2026",
};

const rideOfTheDay = {
  name: "1970 Dodge Challenger R/T 440 Six Pack — Plum Crazy Purple, Black Bumblebee Stripe, Ontario-Plated",
  description: "Plum Crazy Purple with black bumblebee stripe — the most visually aggressive Challenger colour combination ever offered. The 440 Six Pack: three two-barrel Holley carburetors on an Edelbrock intake, 390 horsepower, 490 lb-ft of torque. The Six Pack was Chrysler's answer to the 440 4-barrel and the 426 Hemi — more accessible, nearly as fast, and impossible to ignore. WestJet's strike lasted 30 hours. The Challenger R/T doesn't negotiate.",
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
                {["WESTJET STRIKE OVER", "SECTION 338: 15 DAYS", "MICHIGAN PRIMARY TODAY", "'70 CHALLENGER R/T"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Tuesday Edition</p>
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
