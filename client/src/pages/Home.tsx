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

const BRIEFING_NUMBER = 74;
const BRIEFING_DATE = "July 20, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/hqhiHRPwPhprGBQg.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YpvYUxnonjxhvneU.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QgoofPVsTgurVbrs.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/MESDdpgYFVLYYONx.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/aPPwQwaVJDaJOwdM.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SECTION 301 / FORCED LABOUR TARIFF / JULY 20 STATUTORY DEADLINE / CUSMA EXEMPT",
    tagColor: "#b91c1c",
    headline: "Section 301 Forced Labour Tariff Final Determination Due Today — July 20 Statutory Deadline — Canada in Tier 1 at 10% — CUSMA-Compliant Parts Exempt — Section 122 Expires July 24",
    summary: "The Office of the United States Trade Representative faces a statutory deadline of July 20 to complete the most expansive Section 301 investigation ever undertaken — one that found every major American trading partner deficient on forced labour enforcement and proposed new tariffs on 60 economies supplying 99.4 per cent of everything the United States imports. The final determination must be published today to allow the administration a four-day window before the Section 122 universal surcharge expires on July 24. The proposed architecture sorts the world into two tiers. Canada, the European Union, the United Kingdom, Mexico, Indonesia and Pakistan — economies that maintain a forced labour import prohibition — are proposed for a 10 per cent additional tariff. All other economies, including China, India, Vietnam, Thailand, Turkey and South Korea, face 12.5 per cent. Critically, goods entering the United States that comply with CUSMA rules of origin are exempt from the Section 301 tariff. The CUSMA exemption is the single most important protection for Canadian auto parts suppliers. Unlike the Section 122 emergency tariff, which had no rate ceiling and no fixed sunset, Section 301 actions run four years and are renewable — the tariff wall is being rebuilt on a legally durable foundation. Canada's defence rested on Bill C-35, standalone legislation to strengthen its forced labour import prohibition, introduced June 12. Canada argued it 'has established a robust framework to prevent goods produced with forced labour from entering the Canadian market' and that 'there is no basis for the imposition of additional Section 301 duties on Canadian goods.' The bill is stalled in Parliament until September 21. The 25 per cent auto tariff is separate and unaffected by the Section 301 determination.",
    whyItMatters: "Today is the day the tariff wall gets rebuilt on a permanent legal foundation. The Section 122 bridge expires July 24 — four days from now. The Section 301 tariff that replaces it runs four years and is renewable. For your shop, the critical question is CUSMA compliance. CUSMA-compliant parts are exempt from Section 301. Non-CUSMA parts with Chinese content face a proposed 10 per cent additional tariff on top of existing duties. Action today: call your top three parts suppliers and ask two questions — (1) Are your parts CUSMA-compliant? (2) Do any of your parts contain Chinese-sourced components? If the answer to question 2 is yes and question 1 is no, you have a cost exposure starting July 24. The 25 per cent auto tariff is separate — it is not going away and is not affected by today's determination.",
    source: "Peacock Tariff Consulting / MLT Aikins — July 19–20, 2026",
    sourceUrl: "https://www.peacocktariffconsulting.com/labor-tariffs/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CUSMA / U.S.-MEXICO ROUND 3 / MEXICO CITY / CANADA: NO DATE SET",
    tagColor: "#1d4ed8",
    headline: "U.S.-Mexico CUSMA Round 3 Begins Today in Mexico City — Canada Still Has No Formal Negotiating Date — Brookings: Agreement Continues to 2036 Even Without Renewal",
    summary: "The United States and Mexico begin the third formal round of CUSMA negotiations today in Mexico City, covering trade, labour, security and supply chains. The talks are expected to run July 20–21. Canada has no formal negotiating dates with the United States. USTR Ambassador Jamieson Greer, speaking at the Aspen Security Forum on July 17, declined to set a timeline for Canada-U.S. talks and said Canada's concessions — including dairy market access improvements, forced labour enforcement steps, and the Chinese EV tariff — were 'just good practice on their part,' not grounds for tariff relief. The Brookings Institution published a major analysis on July 17 titled 'USMCA Fails to Renew But It's Not Over Yet,' noting that the agreement continues in force until its 2036 sunset even without a formal renewal. Brookings: 'The review poses larger questions than the details of the agreement itself. The United States, Canada, and Mexico have different negotiating priorities and may have different visions for the future of North American economic relations.' Mexico is not seeking a bilateral deal with the United States and is coordinating its position with Canada. The three U.S. grievances against Canada that have been publicly stated remain: the Canada-China EV tariff deal (6.1 per cent vs. the U.S. 100 per cent), Canada's forced labour import enforcement record (two shipments barred vs. 42,807 by the U.S.), and dairy market access. None of these grievances have been resolved.",
    whyItMatters: "Canada is not at the table in Mexico City today. Mexico is. That asymmetry matters for your planning horizon. The practical implication: do not expect any Canada-U.S. tariff relief before the November 2026 U.S. midterm elections. Plan your parts sourcing, pricing strategy, and customer communication around a 25 per cent tariff environment through at least the end of 2026. The Brookings analysis is reassuring on one point: CUSMA does not expire in 2026. It continues to 2036. The annual review process is a negotiating mechanism, not a cliff. The CUSMA exemptions — including the Section 301 auto parts exemption confirmed today — remain in force. Your CUSMA-compliant parts are protected. The 25 per cent auto tariff is the pain point, and it is not going away before the midterms.",
    source: "Brookings Institution / USTR — July 17–20, 2026",
    sourceUrl: "https://www.brookings.edu/articles/usmca-fails-to-renew-but-its-not-over-yet/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR / GM CANADA / PATTERN BARGAINING / 15% FLOOR / OSHAWA / CAMI",
    tagColor: "#15803d",
    headline: "Unifor Selects GM Canada as Second Bargaining Target — Oshawa Silverado and CAMI Equinox EV at Stake — 15% Wage Pattern Is the Floor — Build Your GM Buffer August 1",
    summary: "With the Ford ratification confirmed at 72 per cent yes on Sunday July 19, Unifor has selected General Motors Canada as its second pattern bargaining target. Bargaining begins this week. The Ford deal — 15 per cent wages over three years, production commitments for Windsor and Oakville — is now the established pattern. GM Canada operates four facilities covered by Unifor: Oshawa Assembly (Silverado 1500 and 2500), CAMI Assembly in Ingersoll (Equinox EV), St. Catharines Propulsion (engines and transmissions), and the Woodstock parts distribution centre. All four are currently operating. GM finished the first half of 2026 as Canada's best-selling automaker with 148,640 vehicles and 15.4 per cent market share. The Silverado and Equinox EV are both selling well. GM's Canadian operations are in a stronger position than Stellantis — there is real production to protect, and GM has publicly stated that CUSMA stability is essential for its Canadian investment plans. The GM contract expires September 20, 2026 — the same expiry date as the Ford contract that was just ratified. Unifor's leverage is strong: a strike at Oshawa would halt Silverado production, which is GM's highest-margin vehicle in Canada. Stellantis bargaining will follow GM. Stellantis Canada operates Windsor Assembly (Chrysler Pacifica, intermittent) and Brampton Assembly (idle since December 2023, no product commitment). The Stellantis negotiation will be more contentious — Brampton has no product to threaten to stop building.",
    whyItMatters: "The GM bargaining timeline is the one that matters most for your shop's parts supply. GM is Canada's largest automaker by volume — Silverado and Equinox EV parts are in high demand. Bargaining begins this week and is expected to reach a critical phase in late July or early August. Build your 30-day GM parts buffer starting August 1 — before bargaining reaches its deadline. The practical action this week: confirm your Ford parts orders are back to normal cadence (the supply disruption risk is gone), and start planning your GM buffer build for August 1. The Stellantis situation is different: Brampton has been idle since December 2023, so there is no Stellantis production to disrupt at Brampton. Windsor Pacifica is running intermittently — normal ordering for now.",
    source: "Unifor / Automotive News Canada — July 19–20, 2026",
    sourceUrl: "https://www.autonews.com/manufacturing/automakers/anc-unifor-ford-tentative-agreement-0711/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⚖️",
    text: "Section 122 universal surcharge expires July 24 — 4 days. Section 301 forced labour tariff final determination published today. Canada: 10% tier. CUSMA-compliant parts: exempt. Ask your top 3 suppliers about CUSMA compliance status today. Non-CUSMA parts with Chinese content face 10% additional tariff starting July 24.",
    sourceUrl: "https://www.peacocktariffconsulting.com/labor-tariffs/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge: commercial opening July 27 still confirmed — 7 days. Opening ceremony postponed due to Ontario wildfire smoke. Windsor-Detroit corridor: $350M/day. Ambassador Bridge open and operating normally.",
    sourceUrl: "https://www.canada.ca/en/housing-infrastructure-communities/news/2026/07/the-gordie-howe-international-bridge-will-open-on-july-27th-strengthening-trade-connectivity-and-economic-development.html",
  },
  {
    icon: "🔥",
    text: "Ontario wildfires: 955 active fires, 312 not under control. Trump wildfire tariff threat still active — no legal authority confirmed. IEEPA most likely vehicle. Monitor Truth Social and White House press briefings. No tariff action announced as of Monday morning.",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwyq93j34lgo",
  },
  {
    icon: "🚗",
    text: "Ford: 72% ratified. GM bargaining begins this week — build 30-day GM buffer August 1. Stellantis Brampton idle. Windsor Pacifica intermittent — normal ordering. 15% wage pattern is the floor for GM and Stellantis.",
    sourceUrl: "https://www.reuters.com/business/world-at-work/ford-canadas-unifor-reach-tentative-deal-labor-contract-2026-07-12/",
  },
];

const tipOfTheDay = {
  title: "Ask Your Top 3 Suppliers About CUSMA Compliance — Today",
  text: "Section 301 final determination is published today. Section 122 expires July 24. CUSMA-compliant parts are exempt from Section 301. Non-CUSMA parts with Chinese content face 10% additional tariff starting July 24. Call your top 3 suppliers today and ask: (1) Are your parts CUSMA-compliant? (2) Do any of your parts contain Chinese-sourced components? If yes to question 2 and no to question 1, you have a cost exposure in 4 days.",
};

const quoteOfTheDay = {
  text: "The review poses larger questions than the details of the agreement itself. The United States, Canada, and Mexico have different negotiating priorities and may have different visions for the future of North American economic relations.",
  author: "Brookings Institution",
  title: "USMCA Fails to Renew But It's Not Over Yet — July 17, 2026",
};

const rideOfTheDay = {
  name: "1969 Pontiac Firebird 400 Ram Air III — Carousel Red, Black Hood Scoops, Ontario-Plated",
  description: "Carousel Red. Black hood scoops. Ontario licence plate reading '69 BIRD'. 400 cubic inch V8, 335 horsepower, Ram Air III induction. The 1969 Pontiac Firebird 400 Ram Air III was the performance version of Pontiac's pony car — lighter than the GTO, more agile than the Bonneville, and angrier than anything GM had built in the F-body platform. The Ram Air III used a specific camshaft, round-port exhaust manifolds, and functional hood scoops that opened under full throttle to force cold air directly into the carburetor. Parked at a Monday morning car show in a park in Ontario, golden hour morning light, dew on the grass. The Section 301 tariff wall is being rebuilt today. The Firebird doesn't care about tariff determinations. It just wants to run.",
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
                {["SECTION 301: TODAY", "CUSMA ROUND 3: MEXICO", "UNIFOR-GM BEGINS", "'69 FIREBIRD 400"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Monday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Section 301 Final Determination Today — U.S.-Mexico CUSMA Round 3 Mexico City — Unifor Selects GM — Baywash Daily Briefing Edition No. 74"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 74 — Monday, July 20, 2026 — Section 301: Today / CUSMA Round 3: Mexico City / Unifor-GM Begins</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Section 301 Tariff Wall Rebuilt Today — U.S.-Mexico CUSMA Round 3 — Unifor Selects GM
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '69 Pontiac Firebird 400 Ram Air III</span>
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
