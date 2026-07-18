/**
 * BAYWASH DAILY BRIEFING — Home.tsx
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 72;
const BRIEFING_DATE = "July 18, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YjPSLbxVoSRrSvUA.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dSHqCtrLkCIdwhxn.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/lwXjVMUEKqqcQxnH.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LIfdJwBHAXegWKSw.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VMHgHAkBrxHASFBk.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SECTION 301 / FORCED LABOUR / CANADA: 1 SHIPMENT IN 6 YEARS / FINAL DETERMINATION JULY 21–23",
    tagColor: "#b91c1c",
    headline: "Canada's Forced Labour Import Ban Exists Mostly on Paper — US Stopped 42,807 Shipments — Canada Stopped One, Then Released It — Section 301 Tariff Determination Arrives July 21–23",
    summary: "A detailed investigation by Open Data Canada, published July 11, has put Canada's forced labour import enforcement record on the record in stark terms. Since Canada's ban on importing goods made with forced labour took effect in July 2020, exactly one shipment has ever been stopped under the prohibition — a batch of clothing from China seized in the fall of 2021. Canada Border Services Agency later released it. In the same period, the United States stopped 42,807 shipment lines worth US$3.96 billion under its Uyghur Forced Labor Prevention Act, denying entry to 24,344 of them. CBSA director general Graeme Hamilton confirmed the enforcement gap at a June 18 House of Commons trade committee hearing: 'We have not published statistics in terms of how many goods have been intercepted and whether they're successful, abandoned or re-exported. The reason is the limited number of cases.' The legal design explains the gap. Canada's ban requires CBSA to prove, shipment by shipment, that the specific goods in the specific container were made with forced labour. The US ban works on a presumption — goods from China's Xinjiang region are presumed to be made with forced labour, and the importer must prove otherwise. Canada also has no public list of suspect companies, goods, or regions. The internal target list is described as 'fewer than 1,000 but more than a dozen' entities. The USTR named Canada as one of just six economies — alongside the EU and Mexico — with a ban on the books but 'failed to effectively enforce' it, and proposed a 10 per cent additional tariff on Canadian goods as a consequence. Ottawa tabled Bill C-35 on June 12, ten days after the USTR determination — a bill that would rebuild Canada's ban along American lines, with a public list and a reverse onus. Bill C-35 has not moved since first reading. The House does not sit again until September 21.",
    whyItMatters: "The Section 301 forced labour tariff final determination arrives July 21–23 — three days from now. Canada is named as a target. The proposed rate is 10 per cent on Canadian goods that do not qualify under CUSMA rules of origin. CUSMA-compliant parts are exempt — that covers the vast majority of Canadian-made and Canadian-sourced automotive parts. The risk is non-CUSMA parts: parts with significant Chinese content, parts sourced from non-CUSMA suppliers, or parts where the supplier has not verified CUSMA compliance. Those parts face a 10 per cent additional tariff starting July 24. Bill C-35 — the fix — is stalled until Parliament returns in September. The practical action this weekend: contact your top three parts suppliers and ask two questions. First: are your parts CUSMA-compliant? Second: do any contain Chinese-sourced components not covered by CUSMA rules of origin? If a supplier cannot answer, that is a supply chain risk you need to manage before July 24.",
    source: "Open Data Canada — July 11, 2026",
    sourceUrl: "https://opendatacanada.ca/articles/forced-labour-import-ban-canada",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "UNIFOR-FORD / RATIFICATION VOTE DAY 2 / JULY 18 / LOCAL 707 WINDSOR — 10:00 A.M.",
    tagColor: "#15803d",
    headline: "Unifor-Ford Ratification Vote Day 2 — Windsor Assembly Local 707 Votes Today at 10:00 a.m. — Local Leadership Unanimously Endorsed — Results Released After Final Vote July 19",
    summary: "Unifor Local 707, representing approximately 3,000 workers at Windsor Assembly (Bronco Sport, Lincoln Corsair), holds its ratification meeting and vote today, Saturday July 18, at 10:00 a.m. Eastern Time. Local 707 is the largest single local in the Ford bargaining unit and its vote is the most closely watched of the three-day ratification process. The ratification process began Friday July 17 with meetings at Oakville Assembly and Windsor engine plants, and concludes Sunday July 19 with the final vote and result announcement. Local leadership from all six Ford locals — 707, 200, 584, 1087, 240, and 1324 — unanimously endorsed the tentative agreement at a Richmond Hill meeting on July 17, recommending members vote in favour. The tentative agreement, reached Saturday night July 11 after 19 days of bargaining, includes a 15 per cent general wage increase over three years, production commitments for Windsor Assembly (Bronco Sport, continuing) and Oakville Assembly (Super Duty, beginning in approximately five months contingent on a $465 million federal investment), and improvements to benefits and pension. A preliminary member survey showed 54 per cent support — a narrow majority that mirrors the 2023 ratification. Oakville workers, laid off for almost three years since the scuttled EV retooling, are the critical swing vote. If ratified, the 15 per cent wage pattern is set and Unifor begins bargaining with GM and Stellantis next week. If rejected, the parties return to the table and strike risk increases significantly.",
    whyItMatters: "Today's Local 707 vote in Windsor is the bellwether for the entire Ford ratification. Windsor Assembly is the largest Ford plant in Canada and Local 707 is the largest Ford local. A strong yes vote from Windsor today will likely carry the overall result on Sunday. The 54 per cent preliminary endorsement is a narrow majority — the same margin as 2023, when Oakville rejected the deal outright. The critical question is whether Oakville workers, laid off for almost three years, will accept a deal that promises Super Duty production in 'approximately five months' contingent on a federal government investment that has not yet been finalized. Watch Unifor's social media channels Sunday evening for results. If the deal is ratified: draw down your Ford parts buffer over 30 days, GM and Stellantis bargaining begins next week, and the 15 per cent wage pattern is set. If the deal is rejected: maintain your 30-day Ford parts buffer, extend to 45 days if possible, and prepare for a possible strike notice within 48 hours.",
    source: "Unifor Local 707 / Unifor Auto Talks Hub — July 13–17, 2026",
    sourceUrl: "https://uniforlocal707.org/2026/07/13/2026-unifor-ford-ratification-meeting-and-vote/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "USED VEHICLES / CANADIAN BLACK BOOK / WHOLESALE VALUES / SHARPEST WEEKLY DECLINE",
    tagColor: "#1d4ed8",
    headline: "Canadian Wholesale Used Vehicle Values Post Sharpest Weekly Decline in Weeks — Cars -0.61%, Trucks/SUVs -0.43%, Subcompact Cars -1.33% for 8th Consecutive Week — Average Retail Price: $36,900",
    summary: "Canadian wholesale used-vehicle prices posted their largest weekly decline in several weeks in the period ending July 11, according to Canadian Black Book's Market Insights report published July 14. The overall wholesale market declined 0.51 per cent. Car segment values fell 0.61 per cent, while truck and SUV segments declined 0.43 per cent — both categories recording steeper losses than the previous week and exceeding the historical average decline for the same period. Among cars, subcompact cars recorded the largest weekly decline at 1.33 per cent, extending the segment's losing streak to eight consecutive weeks. Prestige luxury cars also fell sharply, down 1.27 per cent. Every reported car segment declined during the week — the first time since mid-June that all car categories posted losses simultaneously. Truck and SUV values also weakened. Compact vans led the declines, falling 2.38 per cent, followed by full-size crossovers and SUVs at 0.98 per cent and minivans at 0.74 per cent. Full-size luxury crossovers and SUVs were the only segment to post a gain, edging up 0.06 per cent. Approximately 73 per cent of market segments recorded average value movements greater than $100. Auction conversion rates continued to fluctuate as sellers maintained firm floor prices, while a modest increase in auction inventory was offset by upstream sales channels that continue to absorb much of the available supply. Demand for clean, late-model vehicles remained strong at auctions in both Canada and the United States. On the retail side, the average advertised used-vehicle price slipped slightly to approximately $36,900 based on approximately 169,000 dealer listings nationwide.",
    whyItMatters: "Declining wholesale values are a direct signal about what is happening in your customers' driveways. When wholesale values fall, it means used vehicles are getting cheaper to acquire — which means the repair-versus-replace calculation is tilting further toward repair. A customer whose 2018 Civic is worth $12,000 wholesale is not going to trade it in on a $36,900 average-priced replacement. They are going to fix it. Subcompact cars have now declined for eight consecutive weeks — that is the segment most likely to be driven by customers who are already stretching service intervals. The practical implication is that your service bay is going to see older, higher-mileage vehicles for longer. That means more deferred maintenance work, more brake and suspension jobs, more timing chain and water pump replacements. The customers who are keeping their vehicles are the customers who need you most. Price your maintenance packages accordingly and make sure your service advisors are recommending the full scope of work on every visit.",
    source: "Canadian Auto Dealer / Canadian Black Book — July 14, 2026",
    sourceUrl: "https://canadianautodealer.ca/2026/07/wholesale-values-post-sharpest-decline-in-weeks/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opens July 27 — 9 days. Windsor-Detroit corridor: $350M/day. The Ambassador Bridge now has a backup. Call your Michigan and Ohio parts suppliers this week: will they route commercial shipments through the new bridge? Modern customs facility means faster transit times for commercial traffic.",
    sourceUrl: "https://www.canada.ca/en/housing-infrastructure-communities/news/2026/07/the-gordie-howe-international-bridge-will-open-on-july-27th-strengthening-trade-connectivity-and-economic-development.html",
  },
  {
    icon: "⚖️",
    text: "Section 301 forced labour tariff final determination: July 21–23. Section 122 expiry: July 24. CUSMA-compliant goods are exempt from Section 301. Ask your top 3 parts suppliers about CUSMA compliance status this weekend. Non-CUSMA parts with Chinese content are most exposed to the proposed 10% additional tariff.",
    sourceUrl: "https://opendatacanada.ca/articles/forced-labour-import-ban-canada",
  },
  {
    icon: "🗳️",
    text: "Ford ratification vote: Day 2 of 3. Local 707 Windsor votes today at 10:00 a.m. ET. Results released after final vote July 19. 54% preliminary survey endorsement. 15% wage increase over 3 years. Windsor Assembly and Oakville secured. A yes vote sets the GM/Stellantis pattern. Watch Unifor social media Sunday evening.",
    sourceUrl: "https://uniforlocal707.org/2026/07/13/2026-unifor-ford-ratification-meeting-and-vote/",
  },
  {
    icon: "🚗",
    text: "Canadian EV sales forecast: +40.2% in 2026 (JD Power, July 15). Kia PV5 electric commercial van announced for Canada. Subaru repriced 2027 Solterra to qualify for renewed federal EVAP incentive. BYD still targeting 20 Canadian dealerships — their North American beachhead. EV out-of-warranty service wave arrives 2027–2028.",
    sourceUrl: "https://www.collisionrepairmag.com/news/collision-repair/market-trends/article/15830088/jd-power-canadian-ev-sales-expected-to-rise-by-402-in-2026",
  },
];

const tipOfTheDay = {
  title: "Ask Your Top 3 Suppliers About CUSMA Compliance Before July 24",
  text: "Section 301 forced labour tariffs take effect July 24 — the same day Section 122 expires. CUSMA-compliant parts are exempt. Non-CUSMA parts with Chinese content face a proposed 10% additional tariff. Contact your top three parts suppliers this weekend and ask: are your parts CUSMA-compliant? Do any contain Chinese-sourced components not covered by CUSMA rules of origin? If a supplier cannot answer, that is a supply chain risk you need to manage before July 24.",
};

const quoteOfTheDay = {
  text: "The burden of proof is that the particular car in front of you has a particular chassis made from aluminum produced using forced labour. Then, for the next shipment of cars, we'd have to re-prove that the exact same supply chain is in place.",
  author: "Graeme Hamilton",
  title: "Director General, Trade & Anti-Dumping Programs, CBSA — House of Commons CIIT Hearing, June 18, 2026",
};

const rideOfTheDay = {
  name: "1967 Pontiac GTO 400 Ram Air — Regimental Red, 400 V8, 360 hp, Ontario-Plated",
  description: "The car that started the muscle car era. In 1964, John DeLorean and his team at Pontiac stuffed a 389 cubic inch V8 into the mid-size Tempest and called it the GTO — Gran Turismo Omologato, borrowed from Ferrari. By 1967, the GTO had grown into a 400 cubic inch machine. The Ram Air option — a functional cold-air induction system drawing outside air directly into the carburettor — added 10 horsepower on paper and considerably more in practice. Regimental Red with a black interior. Hideaway headlights. Chrome bumpers. Ontario licence plate. Parked at a Saturday morning car show in a park, morning golden hour light, dew on the grass. The GTO badge on the front fender catches the light. 360 horsepower. 438 lb-ft of torque. The original muscle car. Saturday morning. The car show is open. The shop is closed. Take the day.",
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
                {["SECTION 301: JULY 21–23", "FORD VOTE: DAY 2", "GORDIE HOWE: 9 DAYS", "'67 GTO 400 RAM AIR"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Saturday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canada Forced Labour Import Ban — One Shipment in Six Years — Ford Ratification Vote Day 2 — Wholesale Values Decline — Baywash Daily Briefing Edition No. 72"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 72 — Saturday, July 18, 2026 — Section 301 Determination July 21–23 / Ford Vote Day 2</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Canada's Forced Labour Ban: One Shipment in Six Years — Ford Vote Day 2 — Wholesale Values Declining
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '67 Pontiac GTO 400 Ram Air</span>
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
