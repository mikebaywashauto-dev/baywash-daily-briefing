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

const BRIEFING_NUMBER = 62;
const BRIEFING_DATE = "July 8, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/oCHlbIqScClKGCsK.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GmwTOrzXEcSYdVZw.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/aPtxjQqqOwlYESFW.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/vQGAXAxHgBfQKIAo.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YtLMeUKZXdDbdCYk.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "UNIFOR / FORD / 2 DAYS / JULY 10 DEADLINE",
    tagColor: "#b91c1c",
    headline: "Unifor-Ford Day 17 — 2 Days to July 10 Deadline — No Tentative Agreement Yet — Windsor Assembly and Oakville Production Security Remain Unresolved — Framework or Strike Notice Expected Today",
    summary: "The Unifor-Ford contract talks have entered their final 48 hours with no tentative agreement reached as of Wednesday morning. Unifor National President Lana Payne confirmed Tuesday that negotiations remain 'challenging and frustrating' but said the union is committed to reaching a deal before the self-imposed July 10 deadline. The two sides have been at the bargaining table since June 23, with roughly 5,000 workers at Ford Canada's two key plants — Windsor Assembly (Bronco Sport, Lincoln Corsair) and Oakville Assembly (Ford Super Duty) — awaiting the outcome. The July 10 deadline is Unifor's internal target date, not a legal strike deadline. However, if no tentative agreement is reached by July 10, Unifor can issue a 48-hour strike notice, which would put Windsor and Oakville at risk of going dark as early as July 12. The core unresolved issues are production volume commitments for Windsor and Oakville, wage increases that keep pace with inflation, and job security provisions that protect Canadian workers from production shifts to U.S. plants. Ford has said 'stability and flexibility are key' — language that Unifor reads as Ford wanting the contractual right to shift production between Canadian and U.S. plants depending on tariff conditions. Unifor wants the opposite: contractual guarantees that Canadian production volumes will be maintained regardless of tariff outcomes. The pattern agreement with Ford will set the template for GM and Stellantis negotiations, which follow immediately after. A framework announcement is expected today (July 8) or tomorrow (July 9). If no framework by end of day Wednesday, the probability of a strike rises sharply.",
    whyItMatters: "Two days to the deadline. Here is the decision tree for your shop. If a tentative agreement is reached today (July 8): the Ford parts supply chain is secure. You can draw down any buffer inventory you have built over the next 30 days. If a tentative agreement is reached tomorrow (July 9): same outcome — supply chain secure, ratification vote within 7 days. If no agreement by July 10 and Unifor issues strike notice: Windsor and Oakville could go dark by July 12. The parts shortage will not be immediate — dealers and distributors hold 2–4 weeks of inventory. But by week 3 of a strike, high-turnover Ford parts (oil filters, brake pads, air filters, sensors, belts) will be on allocation. The Tier 1 and Tier 2 suppliers who feed Windsor and Oakville will begin layoffs within 72 hours of a strike. The practical action today: if you have not already built a 30-day Ford parts buffer, do it now. The cost of holding extra inventory for 30 days is far lower than the cost of turning away Ford service customers during a shortage. If a deal is reached today, you can return the buffer to your supplier within the return window.",
    source: "Global News / CBC / CTV — July 7–8, 2026",
    sourceUrl: "https://globalnews.ca/news/11956197/auto-union-ford-negotiations/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "GORDIE HOWE BRIDGE / STILL CLOSED / TRUMP / MOROUN / $6.4B",
    tagColor: "#1d4ed8",
    headline: "Gordie Howe Bridge — Finished in April, Still Closed in July — Canada Paid $6.4 Billion — U.S. Ambassador Claims It's a 'Big Myth' — Trump Donor Matthew Moroun Gave US$1M to MAGA PAC Weeks Before Trump Blocked Opening — Windsor-Detroit Corridor: $350M/Day",
    summary: "The Gordie Howe International Bridge connecting Windsor, Ontario to Detroit, Michigan was completed in April 2026 and was scheduled to open June 15. It remains closed. U.S. President Donald Trump has blocked the opening, demanding the United States own half the project and be 'fully compensated for everything we have given.' Canada paid the full $6.4 billion cost of construction. U.S. Ambassador Pete Hoekstra, in a recent podcast interview, claimed it is a 'big myth' that Canada paid for the bridge. 'Canada is serving as the bank for the bridge,' Hoekstra said. 'The expectation is that over the years, as the bridge generates revenues, the bridge will be paid back.' Former Prime Minister Stephen Harper's director of communications, Andrew MacDougall, called Hoekstra 'the ambassador of gaslight for Canada.' MacDougall, who was present when the 2012 Canada-Michigan crossing agreement was signed, told the National Post: 'Canada agreed to fund the bridge construction, buy the land in Michigan needed, build the interstate on-ramps, and we would make the money back by tolls collected on the bridge — but only from the Canadian side, not the American side.' Campaign finance records show that Matthew Moroun — the billionaire head of the family that owns the Ambassador Bridge, the existing Windsor-Detroit crossing — donated US$1 million to MAGA Inc., a Trump-aligned political action committee, in January 2026. The following month, Trump threatened to block the Gordie Howe Bridge opening. The Ambassador Bridge handles approximately $350 million in daily trade between Canada and the United States. The Gordie Howe Bridge was built as a publicly owned alternative to reduce dependence on the privately owned Ambassador Bridge. U.S. Rep. Shri Thanedar (D-Detroit) has called for the bridge to be opened 'immediately,' saying 'shame on Donald Trump.'",
    whyItMatters: "The Gordie Howe Bridge story is directly relevant to your shop's supply chain risk. The Windsor-Detroit corridor is the most important trade crossing in North America — $350 million per day in goods, including auto parts, raw materials, and finished vehicles. The Ambassador Bridge is the only functioning crossing for commercial vehicles. If the Ambassador Bridge experiences a disruption (weather, accident, labour action, political incident), there is no backup. The Gordie Howe Bridge was built to be that backup — and it is sitting empty. The Moroun family donation to Trump's PAC is the most direct explanation for why the bridge remains closed. Matthew Moroun has a direct financial interest in keeping the Gordie Howe Bridge closed: every day it remains closed is another day of monopoly revenue for the Ambassador Bridge. For your shop: the Ambassador Bridge is your supply chain's single point of failure for parts sourced from U.S. suppliers. A 24-hour closure of the Ambassador Bridge would delay parts by 48–72 hours as trucks reroute through the Blue Water Bridge (Sarnia-Port Huron). A week-long closure would trigger allocation and backorders. The Gordie Howe Bridge is not a political story — it is a supply chain resilience story. Watch for any movement on the opening date.",
    source: "National Post / Detroit News / CBC — July 7, 2026",
    sourceUrl: "https://nationalpost.com/news/canada/why-canada-and-the-u-s-cant-agree-on-opening-the-gordie-howe-bridge",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SECTION 301 / DAY 3 / CANADA SAYS NO BASIS / BILL C-35 / JULY 24",
    tagColor: "#15803d",
    headline: "Section 301 Forced Labour Hearings Conclude Today — Canada Formally Tells USTR 'No Basis' for Tariffs — Bill C-35 Forced Labour Import Legislation Cited as Shield — CUSMA-Compliant Goods Exemption Demanded by 1,500+ Submissions — Final Determination Before July 24",
    summary: "The three-day U.S. Trade Representative public hearings on proposed Section 301 forced-labour tariffs concluded Wednesday in Washington, D.C. The Canadian government submitted its formal written response to the USTR on Monday, arguing there is 'no basis for the imposition of additional Section 301 duties on Canadian goods.' Ottawa's case rested on two pillars: Canada's existing prohibition on forced labour in supply chains, and the newly introduced Bill C-35, which would create a public list of products linked to forced labour in specific regions and require importers to prove goods were not made through slavery. The Canadian Chamber of Commerce added its voice, urging USTR to 'assess Canada separately under Section 301, suspend consideration of the proposed 10 per cent tariff while Canada's enforcement reforms are implemented and evaluated, and prioritize targeted bilateral enforcement co-operation over broad country-level measures.' More than 1,500 written submissions were filed ahead of the hearings from nations and industry groups. Multiple Canadian submissions argued that CUSMA exemptions should remain in place regardless of the Section 301 outcome — a critical point for auto parts suppliers. USTR Greer proposed a 10 per cent duty on Canada, Mexico, and the United Kingdom, and a 12.5 per cent duty on dozens of other countries. The Section 301 investigations were launched in March after the U.S. Supreme Court struck down Trump's 'Liberation Day' tariffs in February. Section 122 — the current 10 per cent worldwide tariff — expires at the end of July. Section 301 is the replacement. The final determination will be published before July 24.",
    whyItMatters: "The Section 301 hearings are over. The final determination comes before July 24 — 16 days from now. Here is what each outcome means for your shop's cost structure. If Canada is excluded from Section 301 (unlikely): some non-CUSMA-compliant goods may face lower tariffs between July 24 and the next tariff action. Parts prices could ease slightly. If Canada is included at 10% (most likely): the tariff environment is essentially unchanged from today. Section 301 replaces Section 122 at the same rate. Parts pricing stays flat. If Canada is included at 12.5% (possible): a 2.5-point increase on non-CUSMA-compliant goods. Parts with Chinese content (batteries, semiconductors, rare earth magnets, certain sensors) are the most exposed. The CUSMA exemption demand from 1,500+ submissions is the most important detail in today's story. If USTR grants the CUSMA exemption, CUSMA-compliant parts are protected regardless of the Section 301 rate. If USTR denies the exemption, all Canadian goods — including CUSMA-compliant auto parts — face the new rate. Ask your parts supplier this week: are your parts CUSMA-compliant? Do you have documentation? The answer determines your exposure before July 24.",
    source: "Halifax CityNews / The Canadian Press — July 8, 2026",
    sourceUrl: "https://halifax.citynews.ca/2026/07/08/canada-says-theres-no-basis-for-trumps-forced-labour-tariffs/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🛢️",
    text: "PM Carney secured a BC-Alberta pipeline investment agreement July 2–3: 1 million barrels per day from Bruderheim, Alberta to the Pacific coast, following the Trans Mountain corridor. Alberta Premier Smith wants to double production to 8 million bpd. Alberta fall referendum on leaving Canada still planned. The pipeline reduces Canada's dependence on U.S. markets — and gives Canada leverage in CUSMA negotiations. A Canada that sells oil to Asia is a Canada that can afford to walk away from a bad U.S. deal.",
    sourceUrl: "https://www.aljazeera.com/economy/2026/7/3/canadas-carney-secures-deal-for-pipeline-to-expand-oil-exports-beyond-us",
  },
  {
    icon: "🏦",
    text: "Bank of Canada rate decision: July 15 — 7 days away. Markets pricing BoC at 2.25% through July 2026 — no change expected. Prime rate steady at 4.45%. The BoC is watching the tariff impact on GDP closely — a surprise cut is possible if the tariff drag is larger than expected. For your shop: auto loan rates are tied to prime. A rate hold means customer financing costs stay flat. A surprise cut would be a tailwind for vehicle purchases and shop financing.",
    sourceUrl: "https://www.nesto.ca/mortgage-basics/mortgage-rates-forecast-canada/",
  },
  {
    icon: "🚗",
    text: "U.S. CUSMA demand: raise North American auto content from 75% to 82%, and add a new requirement that 50% of a vehicle must be made of U.S. parts. This is the core demand that would devastate Canadian auto parts suppliers. A 50% U.S.-made parts requirement would force automakers to shift production away from Canadian Tier 1 and Tier 2 suppliers. Windsor, Oshawa, Cambridge, and Alliston are all exposed. This demand is the reason Unifor is fighting so hard for production commitments in the Ford contract.",
    sourceUrl: "https://www.facebook.com/OfficialRFDTV/posts/right-now-leaders-from-the-us-canada-and-mexico-are-all-working-to-review-the-us/1567806735377898/",
  },
  {
    icon: "📅",
    text: "Section 122 expiry countdown: 16 days (July 24). Section 301 final determination expected by July 21–23. CUSMA-compliant goods exemption: demanded by 1,500+ submissions — decision pending. Ask your parts supplier about CUSMA compliance status this week. The window to adjust your parts sourcing before the deadline is closing. Non-compliant parts with Chinese content (batteries, semiconductors, sensors) are the most exposed to a rate increase.",
    sourceUrl: "https://ipolitics.ca/2026/07/08/canada-says-theres-no-basis-for-trumps-forced-labour-tariffs/",
  },
];

const tipOfTheDay = {
  title: "Ask Your Parts Supplier One Question Before July 24: 'Are These Parts CUSMA-Compliant?'",
  text: "The Section 301 final determination comes before July 24. If USTR grants the CUSMA exemption, compliant parts are protected. If USTR denies it, all Canadian goods face the new rate. You need to know your exposure now — not after the determination is published. Call your top 3 parts suppliers today and ask: are your parts CUSMA-compliant? Do you have documentation? If they can't answer, that is your answer. Source from compliant suppliers where possible before July 24.",
};

const quoteOfTheDay = {
  text: "This administration has shown time and time again that it will suck up to its enemies and punch its friends in the face.",
  author: "Andrew MacDougall",
  title: "Former Director of Communications to PM Stephen Harper — on the Gordie Howe Bridge, July 7, 2026",
};

const rideOfTheDay = {
  name: "1970 Dodge Challenger R/T 440 Six Pack — Go Mango Orange, Black Bumblebee Stripe, 390 hp, Ontario-Plated",
  description: "Wednesday morning, and the 1970 Dodge Challenger R/T in Go Mango Orange is the car that gets you through the middle of the week. Go Mango is a 1970-only Mopar colour — a vivid, slightly reddish orange that looks like it was mixed by someone who had never heard the word 'compromise.' The black bumblebee stripe wraps around the rear of the car, a Challenger-specific design that separates it from the 'Cuda and the Charger. Under the hood: a 440 cubic inch big block with the Six Pack option — three Holley two-barrel carburetors feeding 390 factory horsepower. Actual output is closer to 450. The Challenger was built at the Hamtramck, Michigan assembly plant — sold in Canada under the 1965 Auto Pact. Ontario-plated, documented, numbers-matching 440 Six Pack Challenger R/T: $120,000–$180,000 at auction. Two days to the Unifor-Ford deadline. The Section 301 hearings are over. The Gordie Howe Bridge is still closed. The Challenger doesn't care about any of it. It just wants to run.",
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
                {["UNIFOR-FORD 2 DAYS", "GORDIE HOWE BRIDGE", "SECTION 301 FINAL DAY", "'70 CHALLENGER"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Wednesday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Unifor-Ford 2 Days — Gordie Howe Bridge Still Closed — Section 301 Day 3 — Baywash Daily Briefing Edition No. 62"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 62 — Wednesday, July 8, 2026</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Unifor-Ford: 2 Days Left — Gordie Howe Bridge Still Closed — Section 301 Hearings Conclude
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Dodge Challenger R/T 440 Six Pack</span>
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
