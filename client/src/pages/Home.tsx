// 2026-04-16
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 5;
const BRIEFING_DATE = "April 16, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JvVkLfCZrvxnxqLE.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LXlFRxHtWPLBzSzh.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/PnlpeQotdUQQDVtH.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZCTkNAFemvgNghnj.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QzwFYoZORWngElYC.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "INDUSTRY",
    tagColor: "#dc2626",
    headline: "Toyota and Honda Form New Canadian Lobby Group as Industry Faces Challenges",
    summary: "Toyota and Honda have announced the creation of the Pacific Manufacturing Association of Canada (PMAC), representing the two largest auto manufacturers in Canada. PMAC will represent more than 75% of all Canadian vehicle production and employ about 60% of vehicle assembly plant workers in the country. The new association aims to have a significant voice in policy issues such as GHG emissions, electric vehicle regulations, and the upcoming Canada-United States-Mexico Agreement (CUSMA).",
    whyItMatters: "With Toyota and Honda producing the vast majority of vehicles in Canada, their new lobby group will heavily influence future automotive policies, including those affecting the repair and aftermarket sectors. As they push for pragmatic policies regarding EV regulations and supply chains, shop owners should stay informed on how these changes might impact parts availability and the types of vehicles entering their bays.",
    source: "Driving.ca",
    sourceUrl: "https://driving.ca/auto-news/industry/toyota-honda-form-canadas-largest-automotive-manufacturers-association",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "MARKET",
    tagColor: "#2563eb",
    headline: "Aftermarket Outpaces Dealers in Post-Pandemic Growth",
    summary: "Retail sales in Canada's automotive sector continued to grow in 2025, with the aftermarket segment expanding by 3.9%. Compared to pre-pandemic levels in 2019, retail sales at new-vehicle dealers are up 30.9%, while the aftermarket has surged an impressive 49.2%. The growth in the aftermarket reflects continued strength in fixed operations and consumer preference for independent repair shops.",
    whyItMatters: "The data confirms that independent repair shops are winning market share from dealerships. Consumers are increasingly turning to the aftermarket for maintenance and repairs, driven by convenience and price. Shop owners should capitalize on this trend by continuing to offer competitive pricing, excellent customer service, and investing in the necessary tools and training to service modern vehicles.",
    source: "Canadian Auto Dealer",
    sourceUrl: "https://canadianautodealer.ca/2026/04/aftermarket-outpaces-dealers-in-post-pandemic-growth/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TRADE",
    tagColor: "#059669",
    headline: "Canada Strikes Back After U.S. Imposes Tariffs on Autos and Auto Parts",
    summary: "In response to the U.S. imposing 25% tariffs on all imports of automobiles and auto parts, the Canadian government has implemented countermeasures. These include 25% tariffs on non-USMCA compliant fully assembled vehicles imported into Canada from the U.S., and 25% tariffs on non-Canadian and non-Mexican content of USMCA compliant vehicles. The Canadian government is also planning a remission framework to incentivize production and investment in Canada.",
    whyItMatters: "The escalating trade war and retaliatory tariffs will directly impact the cost and availability of auto parts in Canada. Repair shops can expect to see price increases on imported parts, which will squeeze margins and increase repair costs for consumers. It's crucial for shop owners to closely monitor parts pricing, communicate potential delays and cost increases to customers, and explore alternative sourcing strategies where possible.",
    source: "MSCI",
    sourceUrl: "https://www.msci.org/canada-strikes-back-after-united-states-imposes-tariffs-on-autos-auto-parts/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🔌",
    text: "Canada invests $10.6 million in EV charging infrastructure, supporting 14 projects to install over 1,600 chargers nationwide.",
    sourceUrl: "https://www.electrive.com/2026/04/11/canada-invests-10-6-million-in-ev-charging-infrastructure/",
  },
  {
    icon: "🔒",
    text: "Canadian auto parts retailer LACROIX reportedly faced a ransomware attack by the Lamashtu group, highlighting the growing cybersecurity threats in the automotive supply chain.",
    sourceUrl: "https://www.yazoul.net/intel/claim/2026-04-15-lacroix-ransomware-claim-by-lamashtu-april-2026/",
  },
  {
    icon: "📉",
    text: "Canadian Black Book's Used Vehicle Retention Index fell 2.1 points in December 2025, signaling a continued cooling in wholesale used values.",
    sourceUrl: "https://canadianautodealer.ca/2026/04/aftermarket-outpaces-dealers-in-post-pandemic-growth/",
  },
  {
    icon: "🚗",
    text: "The 19th Annual Red Deer Spring Live Collector Car Auction is set to take place, bringing together collectors from across Canada.",
    sourceUrl: "https://bid.egauctions.com/19th-Annual-Red-Deer-Spring-Live-Collector-Car-Auction_a75722_p13",
  },
];

const tipOfTheDay = {
  title: "Prepare for Parts Price Volatility",
  text: "With the recent implementation of retaliatory tariffs between the U.S. and Canada, the cost of imported auto parts is expected to rise. Review your current inventory and consider stocking up on frequently used parts before price increases take full effect. Communicate proactively with your customers about potential delays and cost adjustments on their repairs. Transparency now will save you from difficult conversations later.",
};

const quoteOfTheDay = {
  text: "The aftermarket is indeed enjoying halcyon days, although there are uncertain waters ahead for the industry as changes in the structure of the fleet, vehicle technology, and access to data create increasing challenges.",
  author: "Andrew King",
  title: "Managing Partner at DesRosiers Automotive Consultants",
};

const rideOfTheDay = {
  name: "1967 Ford Mustang Shelby GT500",
  description: "The 1967 Shelby GT500 is a legendary American muscle car, born from the collaboration between Ford and Carroll Shelby. It was the first Mustang to feature the massive 428 cubic-inch Police Interceptor V8 engine, officially rated at 355 horsepower but widely believed to produce much more. With its aggressive styling, including a fiberglass hood with a functional scoop, side scoops, and a distinctive rear spoiler, the GT500 was a force to be reckoned with on the street and the track. Only 2,048 units were produced in 1967, making it a highly sought-after collector's item today.",
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
      className={`transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${className}`}
    >
      {children}
    </div>
  );
}

function ShopTag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="font-mono text-[0.65rem] font-semibold tracking-[0.12em] uppercase px-2 py-0.5 border inline-block"
      style={{ color, borderColor: color }}
    >
      {label}
    </span>
  );
}

// --- Section Divider ---
function Divider() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-[#1a1a1a]/15" />
      <span className="text-[#1a1a1a]/20 text-xs">&#9670;</span>
      <div className="flex-1 h-px bg-[#1a1a1a]/15" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f0e8", color: "#1a1a1a" }}>
      {/* Edition Stripe */}
      <div className="w-full" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase" style={{ color: "#e05a1a" }}>
              Briefing #{BRIEFING_NUMBER}
            </span>
            <span className="font-mono text-[0.65rem] tracking-wide" style={{ color: "#a0977d" }}>
              {BRIEFING_DATE}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/archive" className="font-mono text-[0.65rem] tracking-[0.1em] uppercase hover:underline" style={{ color: "#a0977d" }}>
              Archive
            </Link>
            <span className="font-mono text-[0.65rem] tracking-wide" style={{ color: "#a0977d" }}>
              {BRIEFING_DAY} Edition
            </span>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <header className="container pt-6 pb-4">
        <div className="flex items-end justify-between border-b-2 pb-3" style={{ borderColor: "#1a1a1a" }}>
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
              The Daily Briefing
            </h1>
            <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase mt-1" style={{ color: "#78716c" }}>
              Baywash Auto Repair &middot; NAPA AutoTech Training
            </p>
          </div>
          <p className="font-mono text-[0.6rem] tracking-wide text-right hidden sm:block" style={{ color: "#78716c" }}>
            Your morning shop intel<br />Mon&ndash;Sat &middot; 6:00 AM ET
          </p>
        </div>
      </header>

      {/* Hero Banner */}
      <AnimatedSection>
        <div className="container mb-6">
          <div className="relative w-full overflow-hidden" style={{ height: "280px" }}>
            <img
              src={HERO_BANNER}
              alt="Auto repair shop at dawn"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.7)" }}
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase block mb-1" style={{ color: "#e05a1a" }}>
                  {BRIEFING_DATE} &middot; Edition #{BRIEFING_NUMBER}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-white leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Toyota and Honda Form New Lobby Group, Aftermarket Outpaces Dealers, and Canada Strikes Back on Tariffs
                </h2>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Content Grid */}
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column — Lead Stories (3/5) */}
          <div className="lg:col-span-3">
            {stories.map((story, index) => (
              <AnimatedSection key={story.id} delay={index * 100}>
                <article className="mb-8">
                  {/* Story Number + Tag */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-display text-4xl font-bold leading-none"
                      style={{ fontFamily: "'Oswald', sans-serif", color: "#e05a1a" }}
                    >
                      {String(story.id).padStart(2, "0")}
                    </span>
                    <ShopTag label={story.tag} color={story.tagColor} />
                  </div>

                  {/* Image */}
                  <div className="w-full overflow-hidden mb-4" style={{ height: "220px" }}>
                    <img
                      src={story.image}
                      alt={story.headline}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Headline */}
                  <h3
                    className="font-display text-xl md:text-2xl font-bold uppercase leading-tight mb-3"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {story.headline}
                  </h3>

                  {/* Summary */}
                  <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#2c2a25" }}>
                    {story.summary}
                  </p>

                  {/* Why It Matters */}
                  <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#e05a1a" }}>
                    <p
                      className="font-display text-xs font-semibold uppercase tracking-[0.15em] mb-2"
                      style={{ fontFamily: "'Oswald', sans-serif", color: "#e05a1a" }}
                    >
                      Why It Matters
                    </p>
                    <p className="font-body text-[0.95rem] leading-relaxed" style={{ color: "#3d3a34" }}>
                      {story.whyItMatters}
                    </p>
                  </div>

                  {/* Source */}
                  <a
                    href={story.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.7rem] tracking-wide uppercase hover:underline inline-flex items-center gap-1"
                    style={{ color: "#78716c" }}
                  >
                    Source: {story.source} &#8599;
                  </a>

                  {index < stories.length - 1 && <Divider />}
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Right Column — Sidebar (2/5) */}
          <aside className="lg:col-span-2">
            {/* Quick Hits */}
            <AnimatedSection delay={200}>
              <div className="mb-8">
                <h4
                  className="font-display text-sm font-bold uppercase tracking-[0.15em] pb-2 mb-4 border-b-2"
                  style={{ fontFamily: "'Oswald', sans-serif", borderColor: "#1a1a1a" }}
                >
                  Quick Hits
                </h4>
                <div className="space-y-4">
                  {quickHits.map((hit, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-lg flex-shrink-0">{hit.icon}</span>
                      <p className="font-body text-[0.9rem] leading-relaxed" style={{ color: "#2c2a25" }}>
                        {hit.text}{" "}
                        <a
                          href={hit.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[0.65rem] tracking-wide uppercase hover:underline"
                          style={{ color: "#e05a1a" }}
                        >
                          [Link] &#8599;
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Tip of the Day */}
            <AnimatedSection delay={300}>
              <div className="p-5 mb-8" style={{ backgroundColor: "#1a1a1a" }}>
                <h4
                  className="font-display text-sm font-bold uppercase tracking-[0.15em] mb-3"
                  style={{ fontFamily: "'Oswald', sans-serif", color: "#e05a1a" }}
                >
                  Tip of the Day
                </h4>
                <p className="font-display text-lg font-semibold mb-2" style={{ fontFamily: "'Oswald', sans-serif", color: "#f5f0e8" }}>
                  {tipOfTheDay.title}
                </p>
                <p className="font-body text-[0.9rem] leading-relaxed" style={{ color: "#c4bfb3" }}>
                  {tipOfTheDay.text}
                </p>
              </div>
            </AnimatedSection>

            {/* Quote of the Day */}
            <AnimatedSection delay={400}>
              <div className="mb-8">
                <h4
                  className="font-display text-sm font-bold uppercase tracking-[0.15em] pb-2 mb-4 border-b-2"
                  style={{ fontFamily: "'Oswald', sans-serif", borderColor: "#1a1a1a" }}
                >
                  Quote of the Day
                </h4>
                <blockquote className="border-l-4 pl-4" style={{ borderColor: "#e05a1a" }}>
                  <p className="font-body text-[0.95rem] italic leading-relaxed mb-3" style={{ color: "#2c2a25" }}>
                    &ldquo;{quoteOfTheDay.text}&rdquo;
                  </p>
                  <footer className="font-mono text-[0.7rem] tracking-wide uppercase" style={{ color: "#78716c" }}>
                    — {quoteOfTheDay.author}, {quoteOfTheDay.title}
                  </footer>
                </blockquote>
              </div>
            </AnimatedSection>

            {/* Ride of the Day */}
            <AnimatedSection delay={500}>
              <div className="mb-8">
                <h4
                  className="font-display text-sm font-bold uppercase tracking-[0.15em] pb-2 mb-4 border-b-2"
                  style={{ fontFamily: "'Oswald', sans-serif", borderColor: "#1a1a1a" }}
                >
                  Ride of the Day
                </h4>
                <div className="overflow-hidden mb-3" style={{ height: "180px" }}>
                  <img
                    src={rideOfTheDay.image}
                    alt={rideOfTheDay.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5
                  className="font-display text-lg font-bold uppercase mb-2"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {rideOfTheDay.name}
                </h5>
                <p className="font-body text-[0.9rem] leading-relaxed" style={{ color: "#3d3a34" }}>
                  {rideOfTheDay.description}
                </p>
              </div>
            </AnimatedSection>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="font-display text-sm font-bold uppercase tracking-tight" style={{ fontFamily: "'Oswald', sans-serif", color: "#f5f0e8" }}>
                The Daily Briefing
              </span>
              <span className="font-mono text-[0.6rem] tracking-wide" style={{ color: "#78716c" }}>
                Baywash Auto Repair
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/archive" className="font-mono text-[0.65rem] tracking-[0.1em] uppercase hover:underline" style={{ color: "#a0977d" }}>
                View Archive
              </Link>
              <span className="font-mono text-[0.6rem] tracking-wide" style={{ color: "#78716c" }}>
                &copy; {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
