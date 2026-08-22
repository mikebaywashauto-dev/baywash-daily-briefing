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

const BRIEFING_NUMBER = 107;
const BRIEFING_DATE = "August 22, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/iJYnGwvAVNTudtVk.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/WgdSYlEethImLktS.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TPyXtuzyGcOApJTq.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GkcsjHiHpovzwlNY.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TSVMjfOUTHSUZXKp.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SECTION 338 NOW IN FORCE / 50% ON $28B+ TARGETED GOODS / CANADA: DOLLAR-FOR-DOLLAR",
    tagColor: "#b91c1c",
    headline: "Deal Collapses; Section 338 Tariffs Take Effect and Canada Suspends U.S. Trade Talks",
    summary: "The three-day pause ended without an agreement. CBC reports the United States imposed 50% Section 338 tariffs just after midnight Saturday on more than $28 billion of targeted Canadian goods. Prime Minister Mark Carney suspended negotiations, recalled Canada’s negotiators to Ottawa and pledged to match the new levies ‘dollar for dollar.’ In his official statement, Carney said late U.S. changes were ‘unfair, uneconomic, and called into question the reliability of any deal.’ The targeted list spans hundreds of products, including plywood, cement, wine, hockey sticks, electronics, plastics and certain electrical boards and controllers.",
    whyItMatters: "This is a real policy change, not a headline drill — but it is product-specific, not a blanket 50% charge on every repair part. Start with your actual exposure: ask suppliers whether any controller, module, shop material or special-order line is on the affected list, what the origin is and when a revised price could take effect. Do not add a blanket surcharge to customer invoices.",
    source: "CBC News / Prime Minister of Canada — August 22, 2026",
    sourceUrl: "https://www.cbc.ca/news/canada/canada-us-tariffs-trump-imposes-new-50-per-cent-levy-on-canadian-goods-august-22-9.7311417",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "AUTO / METALS RELIEF: NOT FINALIZED / CUSMA REVIEW CONTINUES / INTEGRATED SUPPLY CHAINS AT RISK",
    tagColor: "#0369a1",
    headline: "The Proposed Auto and Metals Relief Vanished With the Deal — Supply-Chain Uncertainty Returns",
    summary: "The proposed interim agreement reportedly would have lowered U.S. tariffs on automobiles, steel and aluminum if Canada dropped retaliatory measures and offered greater U.S. access in dairy and lumber. Politico reports that no final terms were published before the arrangement collapsed. Autos Drive America said U.S. auto exports to Canada had already fallen 23% over the past year and warned that stable North American partnerships are essential to the industry. Reuters says the broader CUSMA review continues separately, with tougher automotive rules of origin, labour and environmental issues expected to be left for 2027.",
    whyItMatters: "No auto-tariff reduction is in force because none was finalized. Treat the auto file, Section 232, and the new Section 338 list as separate questions. For a customer estimate, use your current supplier quote and actual sourcing path — never a promised 15% rate, an assumed exemption or a generic tariff percentage.",
    source: "Politico / Reuters — August 22, 2026",
    sourceUrl: "https://www.politico.com/news/2026/08/22/canada-us-trade-deal-tariffs-01046723",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SHOP EXPOSURE MAP / ELECTRONICS & CONTROLLERS: CHECK LINE BY LINE / GM–UNIFOR: NO DEAL CONFIRMED",
    tagColor: "#15803d",
    headline: "For Shops, the Exposure Is a Parts-and-Supplier Map — Not a Blank 50% Fee",
    summary: "CBC identifies electronics and certain electrical boards and controllers among the affected Canadian export categories, alongside plastics and wood/paper products. The impact on an independent repair shop therefore depends on the actual country of origin, supplier sourcing and the specific product line — not a single tariff headline. Section 338 applies to a targeted list; Section 232 autos and auto parts are a separate legal regime. GM–Unifor’s Aug. 21 internal target has passed without a tentative agreement confirmed in reliable current reporting. CAMI layoffs and domestic production commitments remain the labour file to watch.",
    whyItMatters: "Create a short exposure list today: controllers/modules, electronic diagnostics components, shop supplies and expensive special orders. Ask your suppliers which lines, if any, carry affected Canadian content and when price changes would apply. Keep your normal fast-moving inventory buffer and avoid panic orders based on a category that may not touch your actual part number.",
    source: "CBC News / Detroit Free Press — August 22, 2026",
    sourceUrl: "https://www.cbc.ca/news/canada/canada-us-tariffs-trump-imposes-new-50-per-cent-levy-on-canadian-goods-august-22-9.7311417",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⚠️",
    text: "Section 338 tariffs took effect early Saturday: 50% on more than $28 billion of targeted Canadian goods, according to CBC and the Prime Minister’s Office.",
    sourceUrl: "https://www.cbc.ca/news/canada/canada-us-tariffs-trump-imposes-new-50-per-cent-levy-on-canadian-goods-august-22-9.7311417",
  },
  {
    icon: "🍁",
    text: "Carney suspended trade talks, recalled negotiators to Ottawa and said Canada will match the new U.S. tariffs dollar for dollar.",
    sourceUrl: "https://www.pm.gc.ca/en/news/statements/2026/08/21/statement-prime-minister-carney-canada-us-trade-negotiations",
  },
  {
    icon: "🔌",
    text: "Affected categories include electronics and certain electrical boards/controllers. Verify actual supplier exposure line by line; Section 338 is not a blanket repair-parts fee.",
    sourceUrl: "https://www.cbc.ca/news/canada/canada-us-tariffs-trump-imposes-new-50-per-cent-levy-on-canadian-goods-august-22-9.7311417",
  },
  {
    icon: "🚗",
    text: "The interim auto-and-metals relief was never finalized. Autos Drive America says U.S. auto exports to Canada are already down 23% over the past year.",
    sourceUrl: "https://www.politico.com/news/2026/08/22/canada-us-trade-deal-tariffs-01046723",
  },
  {
    icon: "🏭",
    text: "GM–Unifor’s internal target has passed with no tentative agreement confirmed in current reliable reporting; CAMI layoffs and Canadian production remain watch items.",
    sourceUrl: "https://www.freep.com/story/money/cars/general-motors/2026/08/18/unifor-gm-contract-negotiations-may-be-tougher-than-fords/91264859007/",
  },
];

const tipOfTheDay = {
  title: "Build a Product-Specific Exposure List — Not a Blanket Surcharge",
  text: "Today, ask your key suppliers whether any controller, module, electronics line, shop material or special-order component has an affected Canadian origin and whether a price change is actually scheduled. Record the quoted price, origin, CUSMA status where relevant and expiry time. Obtain customer approval only for a real price revision — never add a flat 50% tariff fee to every repair order.",
};

const quoteOfTheDay = {
  text: "Last-minute changes in the U.S. proposed terms were unfair, uneconomic, and called into question the reliability of any deal.",
  author: "Mark Carney, Prime Minister of Canada",
  title: "Statement suspending negotiations and announcing dollar-for-dollar tariff matching — August 21, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Camaro SS 396 — Cortez Silver, Ontario-Plated",
  description: "Cortez Silver paint, black SS sport stripes and a 396 under the hood: the 1970 Camaro SS makes a clear case in the rain outside an Ontario repair shop. The deal collapsed overnight; the Camaro says check the part number before making the call.",
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
                {["SECTION 338: NOW IN FORCE", "50% ON TARGETED GOODS", "CANADA: DOLLAR-FOR-DOLLAR", "'70 CAMARO SS 396"].map((tag) => (
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
              alt="Section 338 Tariffs Take Effect After Canada-U.S. Talks Collapse — Baywash Daily Briefing Edition No. 107"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 107 — Saturday, August 22, 2026 — Section 338 Now in Force / Canada Responds / Shop Exposure Map</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                The Deal Collapsed — Section 338 Tariffs Are Now in Force
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '71 Dodge Charger R/T 440</span>
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
