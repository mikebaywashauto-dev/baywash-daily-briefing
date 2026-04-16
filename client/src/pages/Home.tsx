// 2026-04-15
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 6;
const BRIEFING_DATE = "April 15, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/joRpFjFxRCxGimKI.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/syttRUvyxWEkLGNy.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/qgZwQqxihdcxcsXa.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/zUipdarwEtoCPYYS.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/srxslWTIlNsQdYKe.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TRADE",
    tagColor: "#059669",
    headline: "Canada Opens the Door to Chinese-Made EVs Under New Quota System",
    summary: "Canada has struck a landmark trade deal that lowers tariffs on Chinese-built electrified vehicles from 106.1% to just 6.1% on a quota of 49,000 units in the first year. The quota will increase by 6.5% annually to a maximum of 70,000 vehicles by 2030. BYD, Geely, and Chery are already building sales, distribution, and service networks across Canada in anticipation. The deal covers EVs, hybrids, plug-in hybrids, and extended-range hybrids, with an affordable price cap of $35,000 CAD being phased in starting in 2027.",
    whyItMatters: "For shop owners and technicians, this is a game-changer. New Chinese brands mean new vehicle platforms, unfamiliar electrical architectures, and proprietary diagnostic systems arriving in your bays within months. Shops that invest early in EV training and tooling for these brands will have a significant competitive advantage. Start researching BYD and Geely service requirements now — the vehicles are coming, and customers will need someone who knows how to work on them.",
    source: "MotorTrend",
    sourceUrl: "https://www.motortrend.com/news/canada-chinese-ev-imports-impact-reaction",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "MARKET",
    tagColor: "#2563eb",
    headline: "Aftermarket Surges Past Dealers — Independent Shops Are Winning",
    summary: "New data from DesRosiers Automotive Consultants shows the aftermarket segment continues to outpace new-vehicle dealers in post-pandemic growth. Aftermarket retail sales rose 3.9% in 2025, while dealer sales grew 3.6%. Since 2019, the gap has widened dramatically: aftermarket sales have surged 49.2% compared to 30.9% for dealers. Even adjusted for inflation, the aftermarket is up 19.8% versus 13.6% for dealerships, confirming a structural shift in where Canadians choose to get their vehicles serviced.",
    whyItMatters: "The numbers confirm what many shop owners already feel — consumers are choosing independent shops over dealerships at an accelerating rate. This is your moment to double down on customer retention, invest in modern diagnostic capabilities, and market your shop's value proposition. The trend is in your favour, but challenges around vehicle technology, data access, and fleet electrification are on the horizon. Stay ahead of the curve.",
    source: "Canadian Auto Dealer",
    sourceUrl: "https://canadianautodealer.ca/2026/04/aftermarket-outpaces-dealers-in-post-pandemic-growth/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SALES",
    tagColor: "#dc2626",
    headline: "Canada Q1 Auto Sales Dip as Market Normalizes — Outlook Uncertain",
    summary: "Canada's new-vehicle sales cooled to start 2026, with the seasonally adjusted annual rate falling to 1.85 million in March — the lowest level since September 2025. The softer first quarter reflects more normalized demand after a distorted start to last year. Light trucks accounted for 88.8% of total new light-vehicle sales in Q1 2026, up from 88.1% a year earlier. Analysts say a gradual rebound is still possible, but geopolitical uncertainty and tariff impacts cloud the outlook.",
    whyItMatters: "Slower new-vehicle sales mean more Canadians are holding onto their current vehicles longer, which directly translates to more maintenance and repair work for independent shops. With light trucks dominating sales, shops should ensure they're equipped to handle the growing fleet of SUVs and pickups. This is also a good time to promote preventive maintenance packages to customers who are stretching the life of their vehicles.",
    source: "Automotive News Canada",
    sourceUrl: "https://www.autonews.com/retail/anc-canada-auto-sales-q1-2026-normalization-outlook/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏭",
    text: "Toyota and Honda have formed the Pacific Manufacturing Association of Canada (PMAC), representing over 75% of all Canadian vehicle production and 60% of assembly plant workers.",
    sourceUrl: "https://driving.ca/auto-news/industry/toyota-honda-form-canadas-largest-automotive-manufacturers-association",
  },
  {
    icon: "📈",
    text: "Canadian manufacturing sales rose 3.6% to $71.2 billion in February as several auto assembly plants ramped up operations after earlier shutdowns.",
    sourceUrl: "https://www.biv.com/news/retail-manufacturing/manufacturing-sales-up-in-february-as-auto-production-ramped-up-after-shutdowns-12144483",
  },
  {
    icon: "⚖️",
    text: "The U.S. Supreme Court ruled certain tariffs unconstitutional — automakers and suppliers can now begin seeking refunds on an estimated $20 billion in tariff payments starting this month.",
    sourceUrl: "https://www.autonews.com/manufacturing/an-trump-tariffs-refunds-explained-0415/",
  },
  {
    icon: "🚗",
    text: "Stellantis Canada Q1 sales rose 14.9% after a turbulent year, with the company selling 30,278 vehicles in the first quarter as its course correction takes hold.",
    sourceUrl: "https://www.autonews.com/stellantis/anc-stellantis-course-correction-q1-sales-0413/",
  },
];

const tipOfTheDay = {
  title: "Get Ahead on Chinese EV Training",
  text: "With BYD, Geely, and Chery building dealer and service networks in Canada, the first Chinese-made EVs could roll into your shop sooner than you think. Start by reviewing available EV certification programs through your provincial trade authority or NAPA AutoTech. Familiarize yourself with high-voltage safety protocols specific to Chinese platforms, and begin sourcing diagnostic scan tools that support BYD and Geely protocols. Being the first shop in your area to confidently service these vehicles will be a major differentiator.",
};

const quoteOfTheDay = {
  text: "The aftermarket is indeed enjoying halcyon days, although there are uncertain waters ahead for the industry as changes in the structure of the fleet, vehicle technology, and access to data create increasing challenges.",
  author: "Andrew King",
  title: "Managing Partner, DesRosiers Automotive Consultants",
};

const rideOfTheDay = {
  name: "1970 Plymouth Barracuda 440 Six Pack",
  description: "The 1970 Plymouth Barracuda is one of the most iconic muscle cars ever built, and the 440 Six Pack variant is among the most coveted. Powered by a 440 cubic-inch V8 fed by three two-barrel Holley carburetors, it produced 390 horsepower and 490 lb-ft of torque. The third-generation Barracuda featured aggressive styling with a long hood, short deck, and wide stance that screamed performance. Finished in the legendary In-Violet (Plum Crazy) purple, this particular combination is a holy grail for collectors. With fewer than 2,000 produced, surviving examples regularly command six figures at auction.",
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
                <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase block mb-2" style={{ color: "#e05a1a" }}>
                  {BRIEFING_DATE} &middot; Edition #{BRIEFING_NUMBER}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-white leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Chinese EVs Head North, Aftermarket Keeps Winning, and Q1 Sales Cool Off
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
