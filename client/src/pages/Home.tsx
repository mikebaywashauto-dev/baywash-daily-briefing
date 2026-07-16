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

const BRIEFING_NUMBER = 70;
const BRIEFING_DATE = "July 16, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wJwFbWWonHAYSfeT.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gqSPNgISYFeGzhyl.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SUUAZwirvhKEeAeg.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LamFtmkPDKtyYlkL.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KFpbXDlEprXwfxLE.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SECTION 301 / FORCED LABOUR TARIFFS / FINAL DETERMINATION JULY 21–23 / CANADA 10% PROPOSED",
    tagColor: "#b91c1c",
    headline: "Section 301 Forced Labour Tariff Final Determination Arrives July 21–23 — Canada Faces 10% Proposed Rate — CUSMA-Compliant Goods Exempt — Ask Your Suppliers This Week",
    summary: "The U.S. Trade Representative's office is expected to publish its final determination on Section 301 forced labour tariffs between July 21 and July 23 — just days before the Section 122 tariff surcharge expires on July 24. The USTR proposed a two-tier tariff structure on June 3: a 10 per cent additional duty on imports from 15 economies that have partial plans to address forced labour, including Canada, the European Union, the United Kingdom, and Mexico; and a 12.5 per cent additional duty on the remaining 45 countries investigated, including China, India, Japan, South Korea, and Vietnam. The critical exemptions for Canadian automotive businesses are: goods already subject to Section 232 national security tariffs — which covers autos, steel, aluminum, and copper — and Canadian and Mexican products that comply with CUSMA rules of origin. Prime Minister Mark Carney stated that Canada shares the U.S. objective of eliminating forced labour and that most Canadian exporters will remain protected by the CUSMA-based exemptions. MLT Aikins, the national law firm, published a detailed analysis on July 15 confirming that CUSMA-compliant goods are exempt from the proposed Section 301 tariffs. The firm noted that the practical effect of the tariffs is to elevate forced labour due diligence from an ethical aspiration to a commercial necessity. Canada's domestic parallel regime — the Fighting Against Forced Labour and Child Labour in Supply Chains Act — has been in force since January 1, 2024, and requires most reporting entities to file an annual supply chain report by May 31 each year. The Section 301 final determination will be published before July 24, when it takes effect alongside the expiry of the Section 122 surcharge.",
    whyItMatters: "The Section 301 final determination arrives in five days. Here is what it means for your shop. If your parts suppliers are CUSMA-compliant — meaning their goods meet the rules-of-origin requirements under the Canada-U.S.-Mexico Agreement — those parts are exempt from the proposed 10 per cent Section 301 tariff. That is the good news. The risk is non-CUSMA parts: parts that contain significant Chinese content, parts sourced from non-CUSMA suppliers, or parts where the supplier has not verified CUSMA compliance. Those parts could face a 10 per cent additional tariff on top of whatever existing duties apply. The practical action for your shop this week is straightforward: contact your top three parts suppliers and ask them two questions. First, are your parts CUSMA-compliant? Second, do any of your parts contain Chinese-sourced components that are not covered by CUSMA origin rules? If a supplier cannot answer those questions, that is a supply chain risk you need to manage before July 24. The Section 122 tariff expires July 24 — but the Section 301 tariff takes effect the same day. The tariff wall is not coming down. It is being rebuilt on a more durable legal foundation.",
    source: "MLT Aikins / USTR / EcoVadis — July 14–15, 2026",
    sourceUrl: "https://www.mltaikins.com/insights/what-new-proposed-u-s-forced-labour-tariffs-mean-for-canadian-employers/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "EV CHARGING / Q2 2026 / UTILIZATION 9.5% / BUILDOUT OUTPACES DEMAND",
    tagColor: "#15803d",
    headline: "EV Charging Buildout Outpaces Demand in Canada — Q2 2026 Utilization Falls to 9.5% — 390 New Ports Added — Infrastructure Ahead of Adoption Curve — Ontario 21 New Stations",
    summary: "Canada's public EV fast-charging network continued to expand in the second quarter of 2026, with operators adding capacity faster than drivers are using it, according to Paren's Canadian EV Fast Charging Q2 2026 report published July 14. The report found 390 new public DC fast-charging ports opened across 99 stations between April and June — a 30 per cent increase over the same period in 2025. Quebec led the country with 44 new stations, followed by Ontario with 21 and British Columbia with 18. Tesla remained the largest single deployer, adding 98 new ports during the quarter, although established networks including Circuit Électrique, ChargePoint, On the Run, and Flo accounted for much of the remaining growth. Despite the continued buildout, national utilization fell to 9.5 per cent from 11.3 per cent in the first quarter as charging infrastructure grew faster than demand. Paren attributed the decline largely to the rapid addition of new charging ports, which typically require time to reach higher usage levels, combined with weaker EV sales following reductions to purchase incentives in 2025. Reliability remained stable: Canada's national reliability score improved slightly to 91.2, with British Columbia and Ontario both posting scores above 90. British Columbia recorded the country's highest utilization rate at 12.4 per cent, ahead of Ontario at 11.2 per cent. Pricing remained relatively stable nationwide. British Columbia continued to offer the lowest average fast-charging rates at approximately $0.42 per kWh, while Alberta remained the highest at about $0.67 per kWh. EV infrastructure consultant Scott Sharabura noted that charging investment decisions are made years before stations open, allowing network expansion to continue despite short-term fluctuations in EV demand.",
    whyItMatters: "A 9.5 per cent utilization rate on public EV charging infrastructure tells you something important about the current state of EV adoption in Canada: the infrastructure is being built ahead of the demand curve. That is actually good news for independent shops. Here is why. When EV adoption reaches critical mass — and it will, given that 25 per cent of new vehicles sold in Canada in H1 2026 were electric — the charging infrastructure will already be in place. The adoption curve will accelerate faster than it would if infrastructure were the bottleneck. For your shop, the practical implication is a 12 to 18 month window to invest in EV service capability before the wave hits. The vehicles being sold today will come off warranty in three to five years. The shops that have trained technicians, high-voltage safety certification, and the right diagnostic tools in place when those vehicles come off warranty will capture that service work. The shops that wait will be turning customers away. The 9.5 per cent utilization number also tells you something about where the EV service opportunity is concentrated: Ontario at 11.2 per cent and BC at 12.4 per cent are the two highest-utilization provinces. If your shop is in Ontario, the EV service opportunity is closer than the national average suggests.",
    source: "Canadian Auto Dealer / Paren Q2 2026 Report — July 14, 2026",
    sourceUrl: "https://canadianautodealer.ca/2026/07/ev-charging-buildout-outpaces-demand-in-canada/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "STELLANTIS / BRAMPTON IDLE / WINDSOR IDLE / UNIFOR BARGAINING BEGINS AFTER FORD RATIFICATION",
    tagColor: "#7c3aed",
    headline: "Stellantis Brampton and Windsor Still Idle — Unifor Bargaining Begins After Ford Ratification July 17–19 — 15% Wage Pattern Is the Floor — Build 30-Day Stellantis Parts Buffer in August",
    summary: "Both Stellantis assembly plants in Ontario remain idle as Unifor prepares to open bargaining with the automaker following the Ford ratification vote scheduled for July 17 to 19. The Brampton Assembly Plant — which built the Chrysler 300, Dodge Charger, and Dodge Challenger before those models were discontinued — has been idle since Stellantis froze work on the next-generation Jeep Compass in early 2026, citing trade-related uncertainty. The Windsor Assembly Plant, which builds the Chrysler Pacifica minivan, has paused production twice in 2026 due to tariff uncertainty. Stellantis has not declared either plant surplus and has not announced a product commitment for Brampton. The Globe and Mail reported in June that the fate of both shuttered plants could lie in the renewal of the U.S. trade deal. Unifor president Lana Payne has said that securing production commitments for both plants is a priority for the upcoming bargaining round. The Unifor-Ford tentative agreement — which covers 5,150 workers at Windsor Assembly and Oakville Assembly and includes a 15 per cent general wage increase over three years — sets the pattern that GM and Stellantis will be expected to match. Unifor's Auto Talks hub confirms that bargaining with GM and Stellantis begins after the Ford ratification vote. With 6,500 auto manufacturing jobs lost in Canada since February 2025, Unifor is under significant pressure to secure both production commitments and wage parity in the next round of negotiations.",
    whyItMatters: "The Stellantis situation is the most consequential unresolved issue in Canadian auto manufacturing right now. Brampton has been idle for months with no product commitment. Windsor has been running intermittently. Unifor bargaining begins this weekend after the Ford ratification vote. The 15 per cent wage pattern from the Ford deal is now the floor — Stellantis will be expected to match it. The production commitment demand is harder: Unifor wants contractual guarantees that Brampton and Windsor will build specific vehicles for the life of the contract. Stellantis has been reluctant to make those commitments given CUSMA uncertainty. Here is the practical implication for your shop. If Unifor and Stellantis reach a deal with production commitments, Brampton and Windsor restart — and Stellantis parts supply stabilizes. If they do not reach a deal, strike risk is real. The practical action: begin building a 30-day Stellantis parts buffer in the first week of August, after the Ford ratification result is known and Stellantis bargaining begins. Focus on Pacifica, Ram 1500, and Jeep Grand Cherokee parts — the highest-volume Stellantis vehicles in Ontario service bays. The Unifor-Stellantis deadline will likely be set for late August or early September.",
    source: "Globe and Mail / Unifor Auto Talks Hub / CBC Windsor — June–July 2026",
    sourceUrl: "https://autotalks.uniforautohub.ca/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🗳️",
    text: "Ford ratification vote: July 17–19 — this weekend. 54% preliminary survey endorsement. 15% wage increase over 3 years. Windsor Assembly and Oakville secured. Results released after final vote July 19. A yes vote makes the deal official. A no vote returns parties to the table — strike risk increases. Watch Unifor social media for results.",
    sourceUrl: "https://www.cbc.ca/news/canada/windsor/ratification-vote-set-for-later-this-week-after-unifor-ford-reach-tentative-3-year-deal-9.7267816",
  },
  {
    icon: "⚖️",
    text: "Section 301 forced labour tariff final determination: July 21–23. Section 122 expiry: July 24. CUSMA-compliant goods are exempt from Section 301. Ask your top 3 parts suppliers about CUSMA compliance status this week. Non-CUSMA parts with Chinese content are most exposed to the 10% proposed tariff.",
    sourceUrl: "https://www.mltaikins.com/insights/what-new-proposed-u-s-forced-labour-tariffs-mean-for-canadian-employers/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opens July 27 — 11 days. Pedestrian and cyclist path opens August 5. Windsor-Detroit corridor: $350M/day. Call your Michigan and Ohio parts suppliers this week: will they route commercial shipments through the new bridge? Modern customs facility means faster transit times than the Ambassador Bridge for commercial traffic.",
    sourceUrl: "https://www.canada.ca/en/housing-infrastructure-communities/news/2026/07/the-gordie-howe-international-bridge-will-open-on-july-27th-strengthening-trade-connectivity-and-economic-development.html",
  },
  {
    icon: "🔋",
    text: "EV charging utilization fell to 9.5% in Q2 2026 as infrastructure grew faster than demand. Ontario: 21 new stations, 11.2% utilization. BC: 18 new stations, 12.4% utilization. Infrastructure is being built ahead of the adoption curve — your 12–18 month window to invest in EV service capability is open now.",
    sourceUrl: "https://canadianautodealer.ca/2026/07/ev-charging-buildout-outpaces-demand-in-canada/",
  },
];

const tipOfTheDay = {
  title: "Ask Your Top 3 Suppliers About CUSMA Compliance Before July 24",
  text: "The Section 301 forced labour tariff final determination arrives July 21–23. CUSMA-compliant parts are exempt. Non-CUSMA parts with Chinese content face a 10% additional tariff. Contact your top three parts suppliers this week and ask: are your parts CUSMA-compliant? Do any contain Chinese-sourced components not covered by CUSMA rules of origin? If a supplier cannot answer, that is a supply chain risk you need to manage before July 24.",
};

const quoteOfTheDay = {
  text: "Most Canadian exporters will remain protected by the CUSMA-based exemptions.",
  author: "Prime Minister Mark Carney",
  title: "Statement on Section 301 Forced Labour Tariff Proposal — July 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth Barracuda 'Cuda 426 Hemi Convertible — Tor-Red, 426 Hemi V8, 425 hp, Ontario-Plated",
  description: "The most powerful muscle car Plymouth ever built. In 1970, Plymouth offered the 426 Hemi in the new E-body Barracuda — a combination so extreme that only 284 convertibles were built with the Hemi engine that year. The 426 cubic inch semi-hemispherical combustion chamber V8 produced 425 horsepower from the factory — a number that was deliberately understated for insurance purposes. Actual output was closer to 500 horsepower. Tor-Red with black hockey stick stripes on the lower body. Black convertible top down. Chrome Rallye wheels with Goodyear Polyglas GT raised white letter tires. Ontario licence plate reads HEMI CUDA. The 426 Hemi was built at the Chrysler engine plant in Marysville, Michigan. The Barracuda was assembled at the Hamtramck Assembly Plant in Detroit. Sold in Canada through Plymouth dealers under the 1965 Auto Pact — the same trade agreement that CUSMA replaced in 1994. A documented numbers-matching 1970 Hemi 'Cuda convertible in Tor-Red has sold for over $3.5 million at auction. This is not a car. It is a monument. Value: $500,000 to $3.5 million depending on documentation and provenance.",
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
                {["SECTION 301: 8 DAYS", "FORD VOTE: JULY 17–19", "GORDIE HOWE: 11 DAYS", "'70 HEMI 'CUDA"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Thursday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Section 301 Tariff 8 Days — Gordie Howe Bridge Opens July 27 — Ford Ratification Vote July 17–19 — Baywash Daily Briefing Edition No. 70"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 70 — Thursday, July 16, 2026 — 8 Days to Section 301 / 11 Days to Gordie Howe Bridge</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Section 301 Final Determination July 21–23 — Ford Vote This Weekend — Gordie Howe Bridge Opens July 27
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Plymouth Hemi 'Cuda Convertible</span>
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
