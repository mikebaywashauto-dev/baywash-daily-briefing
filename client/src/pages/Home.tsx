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

const BRIEFING_NUMBER = 64;
const BRIEFING_DATE = "July 10, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/tIOymFWSXjUOTAsc.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FnGVCYUyKlsfVxuJ.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ELocYcvSEqNNSFLk.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RTGImfVKolYyxkVB.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FZhMNIzdjcfXhtqZ.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "UNIFOR / FORD / DEADLINE DAY / JULY 10",
    tagColor: "#b91c1c",
    headline: "Unifor-Ford Deadline Day — July 10 — No Tentative Agreement Announced as of This Morning — Windsor Assembly and Oakville Production Security Remain Unresolved — Strike Possible by July 12 if No Deal Today",
    summary: "Today is the day. Unifor's self-imposed July 10 deadline for a tentative agreement with Ford Motor Company of Canada has arrived with no deal announced as of Friday morning. Unifor National President Lana Payne described the week of negotiations as 'challenging and frustrating' while maintaining the union's commitment to reaching an agreement. Approximately 5,000 workers at Ford Canada's two key Ontario assembly plants — Windsor Assembly, which builds the Bronco Sport and Lincoln Corsair, and Oakville Assembly, which builds the Ford Super Duty pickup — are awaiting the outcome. The July 10 deadline is Unifor's internal target, not a legal strike deadline. If no tentative agreement is reached by end of day today, Unifor can issue a 48-hour strike notice, which would put Windsor and Oakville at risk of going dark as early as Saturday, July 12. The core unresolved issues remain production volume commitments for Windsor and Oakville, wage increases that keep pace with inflation, and job security provisions that protect Canadian workers from production shifts to U.S. plants. Ford has said 'stability and flexibility are key' — language Unifor interprets as Ford wanting contractual rights to shift production between Canadian and U.S. plants depending on tariff conditions. Unifor wants the opposite: contractual guarantees that Canadian production volumes will be maintained regardless of tariff outcomes. The auto sector has lost nearly 6,500 total jobs since February 2025. The pattern agreement with Ford will set the template for GM and Stellantis negotiations, which follow immediately after. Watch Unifor's social media channels for any announcement — a tentative agreement will be posted within minutes of being reached.",
    whyItMatters: "Today is the decision point. Here is the complete decision tree for your shop. If a tentative agreement is announced today (July 10): the Ford parts supply chain is secure. Draw down any buffer inventory you have built over the next 30 days. Ratification vote will follow within 7 days. If no agreement today and Unifor issues strike notice: Windsor and Oakville could go dark by July 12. The parts shortage will not be immediate — dealers and distributors hold 2–4 weeks of inventory. But by week 3 of a strike, high-turnover Ford parts (oil filters, brake pads, air filters, sensors, belts) will be on allocation. Tier 1 and Tier 2 suppliers who feed Windsor and Oakville will begin layoffs within 72 hours of a strike. If you have not already built a 30-day Ford parts buffer, today is your last opportunity. The cost of holding extra inventory for 30 days is far lower than the cost of turning away Ford service customers during a shortage. If a deal is reached, return the buffer within your supplier's return window. Monitor Unifor's X (Twitter) account @UniforTheUnion for real-time updates.",
    source: "CBC / CTV / The Canadian Press — July 7–10, 2026",
    sourceUrl: "https://www.cbc.ca/news/canada/windsor/auto-talks-critical-week-big-three-9.7260946",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CONNECTED VEHICLE SECURITY ACT / SENATE / JULY 15 / BYD BAN",
    tagColor: "#1d4ed8",
    headline: "U.S. Senate Commerce Committee to Vote July 15 on Permanent Chinese Vehicle Ban — Connected Vehicle Security Act of 2026 — Ford Supported — BYD, Polestar, Geely Targeted — 15% Chinese Ownership Threshold Could Affect Mercedes-Benz",
    summary: "The U.S. Senate Commerce Committee, chaired by Texas Republican Senator Ted Cruz, will vote on July 15 on the Connected Vehicle Security Act of 2026 — legislation that would permanently ban the importation, manufacture, sale, and resale of connected vehicles, software, and hardware linked to China or other foreign adversaries. The bill was introduced by Ohio Republican Senator Bernie Moreno and Michigan Democratic Senator Elissa Slotkin, making it a rare bipartisan measure. Vehicle and software restrictions would take effect in 2027, with hardware restrictions following in 2030. The bill has drawn support from Ford Motor Company, General Motors, the UAW, and the CAR Coalition. The Alliance for Automotive Innovation, which represents Ford and much of the U.S. auto industry, said: 'China has a strategy to dominate global automotive and battery manufacturing that presents a challenge to American economic and national security.' The legislation would give permanent legal standing to rules finalized under the Biden administration in early 2025, which blocked Chinese automakers from the U.S. passenger vehicle market by citing national security risks from data-collecting vehicle technology. Polestar, owned by Chinese automaker Geely, has already been forced to exit the U.S. market. Ford is scrambling to get the 2027 Lincoln Nautilus cleared for import from China, where it is built with U.S.-developed software. A companion bill has been introduced in the House. The bill includes a 15% Chinese ownership threshold provision that could affect Mercedes-Benz, which has approximately 20% Chinese government and investor ownership. Senator Slotkin: 'Chinese cars are surveillance packages on wheels, with the ability to collect on American citizens and sensitive sites.'",
    whyItMatters: "The Connected Vehicle Security Act vote on July 15 matters to your shop in two ways. First, it signals that the U.S. market will remain permanently closed to Chinese-designed connected vehicles. BYD, which is planning 20 Canadian dealerships within the next 12 months, cannot sell in the United States. Canada is their North American beachhead — and the vehicles coming to Canadian roads will be serviced by Canadian shops. The BYD Blade Battery (LFP chemistry) and BYD's proprietary ADAS systems are incompatible with any existing North American EV platform. Shops that invest in BYD-specific training now will capture out-of-warranty service work from day one. Second, the 15% Chinese ownership threshold is a wildcard. If the bill passes with that provision, Mercedes-Benz — which has approximately 20% Chinese ownership — could face restrictions. Mercedes is a significant service revenue source for independent shops. Watch the July 15 vote closely. If the ownership threshold provision survives, Mercedes will need to restructure its ownership to maintain U.S. market access. That restructuring could take 12–18 months and create uncertainty for Mercedes dealers and independent shops that service Mercedes vehicles.",
    source: "Yahoo/Quartz / Ford Authority / Reuters — July 8–9, 2026",
    sourceUrl: "https://fordauthority.com/2026/07/u-s-senate-committee-poised-to-codify-ford-supported-chinese-vehicle-ban/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "RSM CANADA / CUSMA / TRADE STRATEGY / FOUR STEPS",
    tagColor: "#15803d",
    headline: "RSM Canada: 'Canadian Businesses Should Proactively Review Trade Strategies' — Four Steps for CUSMA Uncertainty — Tariff Classification, Origin Documentation, Customs Valuation, Supply Chain Diversification",
    summary: "RSM Canada, one of Canada's largest accounting and advisory firms, published a detailed guidance note on July 9 urging Canadian businesses to proactively review their cross-border trade operations in light of the CUSMA annual review process. The guidance is directly relevant to automotive parts importers and exporters. RSM's four-step framework covers the most common sources of tariff exposure and compliance risk. The first step is reviewing tariff classifications: the HS code assigned to a product determines the duty rate and CUSMA eligibility. Misclassification is a common source of compliance risk and can lead to unexpected duty costs or penalties during an audit. The second step is reviewing and documenting origin: CUSMA's rules of origin determine whether a product qualifies for preferential tariff treatment. Changes to origin rules during renegotiation could affect tariff revenue outcomes. Canadian businesses should review their existing origin determinations, as origin is a key area for compliance reviews and audit activity. The third step is revisiting customs valuation: tariffs are calculated as a percentage of the imported product's value. Businesses should review their customs valuation methodologies and consider available planning opportunities to manage potential cost increases if CUSMA preferential rates are lost. The fourth step is considering supply chain diversification: CUSMA's compulsory annual reviews and potential renegotiation create uncertainty and could increase costs. Diversifying supply chains can help manage exposure to changes in CUSMA treatment. RSM also noted that CUSMA allows member countries to withdraw from the agreement with six months' notice — adding another layer of uncertainty for businesses planning around the agreement's terms. Steel and aluminum tariffs bypass CUSMA-origin exceptions entirely, meaning businesses cannot rely on preferential treatment alone to manage exposure.",
    whyItMatters: "The RSM Canada guidance translates directly into four actions for your shop before July 24 (Section 301 in effect) and before the next CUSMA annual review. Action one: call your top three parts suppliers and ask for the HS codes on your highest-volume parts. Verify those codes are correct. Misclassification is the most common source of unexpected tariff costs. Action two: ask your suppliers for CUSMA origin documentation. If a part qualifies for CUSMA preferential treatment, you need written proof. If the USTR denies the CUSMA exemption in the Section 301 determination (published before July 24), only documented CUSMA-compliant parts will be protected. Action three: review your parts pricing model. If CUSMA preferential rates are lost during renegotiation, your parts costs will increase by the applicable tariff rate. Build that scenario into your pricing model now so you are not caught flat-footed. Action four: identify one alternative supplier for each of your top 10 highest-volume parts. Supply chain diversification does not mean switching suppliers — it means knowing who your backup is before you need them. The RSM guidance is the clearest statement yet that the tariff uncertainty is not going away. Build a business that can absorb 10–15 per cent parts cost increases without destroying your margins.",
    source: "RSM Canada — July 9, 2026",
    sourceUrl: "https://rsmcanada.com/insights/services/business-tax-insights/canadian-businesses-review-trade-strategies-cusma-talks.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏦",
    text: "Bank of Canada rate decision: Wednesday, July 15 — 5 days away. Current rate: 2.25% (held for 5th consecutive time). Prime rate: 4.45%. Expert consensus: hold at 2.25%. NerdWallet Canada: 'opposing nature of Canada's current economic maladies explains why the Bank's likely to continue holding.' GDP grew 0.5% in April — 'economy isn't presently in need of life support.' For your shop: auto loan rates tied to prime — a hold means customer financing costs stay flat through August.",
    sourceUrl: "https://dailyhive.com/vancouver/bank-of-canada-rate-july-2026",
  },
  {
    icon: "🇸🇦",
    text: "PM Carney in Saudi Arabia July 9: signed $1 billion in investment deals at the Saudi-Canada Investment Forum in Jeddah. Met Crown Prince Mohammed bin Salman. Pitching Canada as a top investment destination. The visit is part of Canada's strategy to diversify away from U.S. dependence following CUSMA's sunset clause activation. Saudi investment in Canadian critical minerals and energy infrastructure is the target. A Canada that attracts global capital is a Canada with more leverage in CUSMA negotiations.",
    sourceUrl: "https://abcnews.com/Business/wireStory/canadas-carney-defends-visit-saudi-arabia-slams-criticism-134635098",
  },
  {
    icon: "🚗",
    text: "VW Vision 2030: Volkswagen's supervisory board meeting July 10 confirmed the plan to cut its model lineup by up to 50% and product complexity by 75%, aligning production capacity to 9 million vehicles. Plant futures, job cuts and regionalization remain unresolved. Europe's auto industry is in a structural crisis — and the ripple effects will reach Canadian shops as European brand parts pricing and availability shift over the next 3–5 years.",
    sourceUrl: "https://oica.net/07-10-2026-oicas-5-major-news-items-summarized/",
  },
  {
    icon: "📅",
    text: "Section 122 expiry countdown: 14 days (July 24). Section 301 final determination expected by July 21–23. CUSMA-compliant goods exemption: demanded by 1,500+ submissions — decision pending. Ask your parts supplier about CUSMA compliance status this week. The window to adjust your parts sourcing before the deadline is closing. Non-compliant parts with Chinese content (batteries, semiconductors, sensors) are the most exposed.",
    sourceUrl: "https://rsmcanada.com/insights/services/business-tax-insights/canadian-businesses-review-trade-strategies-cusma-talks.html",
  },
];

const tipOfTheDay = {
  title: "Four Questions to Ask Your Parts Supplier Before July 24",
  text: "RSM Canada's four-step CUSMA framework translates into four questions for your top suppliers: (1) What is the HS code for this part? Is it correct? (2) Does this part qualify for CUSMA preferential treatment? Do you have origin documentation? (3) If CUSMA preferential rates are lost, what is the applicable tariff rate? (4) Who is your backup supplier if your primary source faces allocation? Get answers to all four questions before July 24. The Section 301 determination will be published before that date — and you need to know your exposure before it lands.",
};

const quoteOfTheDay = {
  text: "Chinese cars are surveillance packages on wheels, with the ability to collect on American citizens and sensitive sites.",
  author: "Senator Elissa Slotkin (D-MI)",
  title: "Co-sponsor, Connected Vehicle Security Act of 2026 — July 9, 2026",
};

const rideOfTheDay = {
  name: "1970 Ford Torino Cobra — Grabber Orange, 429 Cobra Jet V8, 370 hp, Ontario-Plated",
  description: "Deadline day deserves the car Ford built to win. The 1970 Ford Torino Cobra was Ford's NASCAR homologation special — built to put the 429 Cobra Jet engine in a production car so it could race at Daytona. Grabber Orange is a 1970-only Ford colour — a vivid, slightly reddish orange that looks like it was mixed by someone who had never heard the word 'subtle.' The Torino Cobra was available in two engine configurations: the 429 Cobra Jet (370 hp, factory rated) and the 429 Super Cobra Jet (375 hp, with solid lifters and a Holley double-pumper). Both are underrated. Actual output is closer to 450 hp. The Torino Cobra was built at the Mahwah, New Jersey assembly plant — sold in Canada under the 1965 Auto Pact. It is a Ford product, built in the United States, sold in Canada, maintained by Canadian shops. Today, Unifor needs Ford to commit to building in Canada. The Torino Cobra is the reminder of what Ford is capable of when it commits to winning. Numbers-matching 429 CJ Torino Cobra in Grabber Orange: $60,000–$100,000 at auction. Ontario-plated, documented, ready to run.",
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
                {["UNIFOR-FORD DEADLINE", "CHINESE CAR BAN VOTE", "RSM CUSMA 4 STEPS", "'70 TORINO COBRA"].map((tag) => (
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
              alt="Unifor-Ford Deadline Day — Chinese Vehicle Ban Vote July 15 — Baywash Daily Briefing Edition No. 64"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 64 — Friday, July 10, 2026</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Unifor-Ford Deadline Day — Chinese Vehicle Ban Vote July 15 — RSM Canada: Four Steps for CUSMA Uncertainty
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Ford Torino Cobra</span>
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
