// 2026-04-17
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 8;
const BRIEFING_DATE = "April 17, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OMtCrWdXBBWbwdrN.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EStWyUUVMBFxFxkw.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/lWRMWhyaopxsxekZ.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CSwFiEMqZKgzzvcP.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mTqjRmsRJQVzyTGU.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SAFETY",
    tagColor: "#dc2626",
    headline: "EV Battery Thermal Runaway Destroys Shop — Providence Fire Confirms GMC Hummer EV as Cause",
    summary: "The Providence Fire Department has officially confirmed that a March 2026 fire at a Rhode Island auto repair shop was caused by thermal runaway in the lithium-ion battery pack of a 2025 GMC Hummer EV. The vehicle, which had been towed to the shop, ignited spontaneously while parked inside the bay. The resulting fire completely destroyed the Hummer EV and caused significant damage to three other vehicles inside the shop. Investigators noted that the fire originated underneath the truck, consistent with a high-voltage battery failure. The incident was captured on the shop's security cameras, showing the moment the battery ignited. This is one of the first confirmed cases in North America where a towed EV caused a shop fire through spontaneous thermal runaway.",
    whyItMatters: "This is a direct warning for every shop in Canada. You do not need to be working on an EV for it to become a fire hazard on your property — a towed or stored EV with a compromised battery can ignite without warning. Industry experts recommend that shops establish clear EV intake protocols: ask whether the vehicle was involved in a collision or flood, check for visible battery damage before accepting the vehicle, store EVs with suspected battery damage outdoors and away from the building, and ensure staff are trained in lithium-ion fire response. The cost of one EV shop fire — in property damage, lost revenue, and insurance — can be catastrophic. Update your intake forms and fire safety plan now.",
    source: "Repairer Driven News",
    sourceUrl: "https://www.repairerdrivennews.com/2026/04/16/thermal-runaway-determined-as-cause-for-repair-shop-fire/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRADES",
    tagColor: "#2563eb",
    headline: "Skilled Trades Ontario Takes Certifying Exams In-House — Apprentices Can Now Book Directly",
    summary: "Skilled Trades Ontario (STO) has assumed full in-house delivery of certifying exams across the province, replacing its previous contract with third-party provider Prometric, which concluded January 31, 2026. As of February 1, 2026, apprentices can book all certifying exams — including the 310S Automotive Service Technician exam — directly through the STO Portal at skilledtradesontario.ca. The change was made in direct response to feedback from apprentices and employer sponsors who reported capacity shortfalls and unreliable booking experiences under the Prometric system. STO will now deliver exams at approximately 100 locations across Ontario, including at Training Delivery Agents (TDAs), significantly expanding access for apprentices in rural and remote communities. Since taking over certification in April 2025, STO has administered over 6,000 certifying exams and handled more than 120,000 phone calls.",
    whyItMatters: "If you sponsor apprentices, this change matters for your shop's planning. The new system promises more exam seats, better booking reliability, and the ability for apprentices to write their certifying exam at the same location where they trained. For shops in smaller Ontario communities, the expansion to 100 locations means your apprentices no longer face long drives to write their 310S exam. Encourage your apprentices to log into the STO Portal and book their upcoming exams now — the new system is live and the old Prometric process is no longer valid. Faster certification means faster productivity for your bay.",
    source: "Indie Garage",
    sourceUrl: "https://www.indiegarage.ca/skilled-trades-ontario-to-deliver-certifying-exams-in-house/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TRADE",
    tagColor: "#059669",
    headline: "Canada Opens Door to 49,000 Chinese EVs — BYD Targets Canadian Dealers as Trump Threatens Retaliation",
    summary: "Canada has finalized a deal to lower the tariff on Chinese-built electrified vehicles from 106.1 percent to 6.1 percent, covering a quota of 49,000 vehicles in the first year — roughly 2.5 percent of annual Canadian new car sales. The quota will grow by 6.5 percent annually, reaching a maximum of 70,000 vehicles by 2030. BYD, the world's largest EV manufacturer, is the most advanced Chinese brand in its Canadian market entry, having already hired staff and opened discussions with Canadian dealerships about the Dolphin hatchback and other models. Geely, which owns Volvo, Polestar, and Lotus, already has a Canadian presence through those brands. The deal has drawn criticism from Ontario Premier Doug Ford and others on national security grounds, and the Trump administration has threatened 100 percent retaliatory tariffs on all Canadian goods if Canada becomes a back door for Chinese vehicles entering the U.S. market.",
    whyItMatters: "For shop owners, the arrival of Chinese EVs in Canada over the next 12 to 24 months creates both opportunity and complexity. BYD vehicles use proprietary battery chemistry, software, and repair protocols that are different from any vehicle currently in the Canadian market. Parts availability, scan tool compatibility, and OEM repair information access will all be question marks at launch. Begin tracking which brands are entering your market and what training or tooling they will require. The shops that build relationships with incoming brands early — and get ahead of the training curve — will be positioned to capture service work that competitors are unprepared for.",
    source: "Motor Trend / Yahoo Autos",
    sourceUrl: "https://autos.yahoo.com/policy-and-environment/articles/welcome-canada-opens-door-china-150000009.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⛽",
    text: "Canada's Q1 2026 new-vehicle sales came in softer than 2025, but Scotiabank Economics still forecasts 1.81 million new vehicles sold this year — down from 1.91 million in 2025 but reflecting a return to pre-pandemic norms rather than a demand collapse.",
    sourceUrl: "https://www.autonews.com/retail/anc-canada-auto-sales-q1-2026-normalization-outlook/",
  },
  {
    icon: "🔧",
    text: "Martinrea International, one of Canada's largest auto parts suppliers, maintained its 2026 outlook despite ongoing tariff uncertainty — a sign that Tier 1 suppliers are absorbing the current trade environment without cutting guidance, for now.",
    sourceUrl: "https://www.martinrea.com/press-release/martinrea-maintains-2026-outlook/",
  },
  {
    icon: "🚗",
    text: "Used vehicle prices are jumping as spring demand heats up in Canada, with wholesale values rising faster than expected — good news for shops doing appraisals and trade-in consultations, as customer equity positions are improving.",
    sourceUrl: "https://canadianautodealer.ca/2026/04/used-prices-jump-as-spring-demand-heats-up/",
  },
  {
    icon: "🏭",
    text: "The federal government is set to announce new automotive R&D and innovation investments today (April 17) through Parliamentary Secretary Bardeesy — watch for details on funding that could benefit Canadian training programs and EV infrastructure.",
    sourceUrl: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/04/parliamentary-secretary-bardeesy-to-announce-research-and-development-innovation-for-the-automotive-sector.html",
  },
];

const tipOfTheDay = {
  title: "Create an EV Intake Protocol Before You Need One",
  text: "The Providence shop fire is a wake-up call. Before your next EV rolls through the door, build a simple intake checklist: Was the vehicle in a collision or flood? Are there any warning lights related to the high-voltage system? Is there visible damage to the undercarriage or battery area? If the answer to any of these is yes, store the vehicle outdoors, away from your building, and away from other vehicles until you can properly assess it. Post the protocol at your service desk and train every service advisor to ask these questions at write-up. It takes five minutes to build and could save your shop.",
};

const quoteOfTheDay = {
  text: "We've heard the feedback loud and clear. Apprentices and employer sponsors told us they want increased capacity and a reliable, streamlined exam experience. And that's exactly why we're making this change.",
  author: "Candice White",
  title: "CEO, Skilled Trades Ontario",
};

const rideOfTheDay = {
  name: "1970 Plymouth 'Cuda 426 Hemi",
  description: "The 1970 Plymouth 'Cuda with the 426 Hemi is the holy grail of American muscle — a car so rare, so powerful, and so perfectly designed that surviving examples regularly fetch over $1 million at auction. Chrysler's legendary 426 cubic-inch Hemi V8 produced 425 horsepower (a figure widely considered understated) and 490 lb-ft of torque, making the 'Cuda one of the fastest production cars of its era. The third-generation E-body platform gave it aggressive proportions, a wide stance, and a hood scoop that meant business. Only 652 'Cudas were built with the 426 Hemi in 1970, making it one of the rarest muscle cars ever produced. It remains the benchmark by which all other muscle cars are judged.",
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
              alt="Auto repair shop technician at work"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.7)" }}
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase block mb-2" style={{ color: "#e05a1a" }}>
                  {BRIEFING_DATE} &middot; Edition #{BRIEFING_NUMBER}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-white leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  EV Shop Fire Warning, STO Exam Overhaul, and Chinese EVs Enter Canada
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
            <span className="font-mono text-[0.6rem] tracking-wide" style={{ color: "#78716c" }}>
              &copy; {new Date().getFullYear()} Baywash Auto Repair &middot; All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
