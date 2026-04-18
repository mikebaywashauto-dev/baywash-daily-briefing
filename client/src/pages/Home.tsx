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

const BRIEFING_NUMBER = 9;
const BRIEFING_DATE = "April 18, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/bnyiADCDPxqvVNMH.jpeg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gzLKubkffWeSpSqq.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/alaVJlJJyuWowIKu.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NKVDkyxdWRJmzjLe.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SGRhjhcUgzUUPfLI.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "RECALL",
    tagColor: "#dc2626",
    headline: "Ford Recalls 1.4 Million F-150 Trucks — 2015–2017 Models Face Sudden Transmission Downshift Risk",
    summary: "Ford Motor Company has issued a recall covering 1,392,935 F-150 pickup trucks equipped with the 6-speed automatic 6R80 transmission, affecting vehicles produced between March 12, 2014, and August 18, 2017. The root cause is degradation of the electrical connections in the transmission lead frame. Over time, thermal cycling and vibration break down those connections, causing the Powertrain Control Module to receive a momentary incorrect signal from the Transmission Range Sensor. That faulty signal can trigger an unintended downshift — in the worst case, a sudden drop from 6th gear all the way to 2nd gear at highway speeds — causing a loss of vehicle control. Ford is aware of two injuries and one accident linked to this condition. The fix is a PCM software update; if certain diagnostic trouble codes are already present, dealers will also replace the transmission lead frame at no cost. Interim owner notification letters are scheduled to be mailed between April 27 and May 1, 2026.",
    whyItMatters: "If your shop services Ford F-150s — and in Canada, nearly every shop does — this recall is going to drive inbound volume starting in late April. The affected range is 2015–2017 F-150s with the 6R80 six-speed automatic, which covers an enormous number of trucks still in daily use across the country. When customers start receiving their notification letters, they will be calling to book appointments. Prepare your service advisors now: the repair is a software update, and in some cases a lead frame replacement, both covered at no cost to the owner. Verify VINs at nhtsa.gov/recalls before the customer arrives so you know exactly what you are dealing with. Shops that are ready for this wave will convert it into booked appointments; shops that are not will lose the work to the dealer.",
    source: "BizzyCar / NHTSA",
    sourceUrl: "https://www.bizzycar.com/blog/april-2026-ford-recall-for-unintended-transmission-downshift-affecting-1392935-vehicles",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "INDUSTRY",
    tagColor: "#2563eb",
    headline: "Toyota and Honda Form PMAC — Canada's Largest Auto Manufacturers Unite Ahead of CUSMA Talks",
    summary: "Honda Canada Inc. and Toyota Canada Inc. have launched the Pacific Manufacturing Association of Canada (PMAC), a new industry association representing the two largest vehicle manufacturers in the country. Together, Toyota and Honda produced over 938,000 vehicles in Canada last year — more than three times the combined output of GM, Ford, and Stellantis in Canada. PMAC will represent more than 75 percent of all Canadian vehicle production and approximately 60 percent of vehicle assembly plant workers in Canada. The association's creation comes at a critical juncture, with CUSMA renewal negotiations looming and ongoing U.S. tariff pressure threatening the integrated North American supply chain. PMAC's stated mandate is to engage with federal and provincial governments on manufacturing, trade, and policy issues — including GHG emission standards and EV regulations — to protect Canadian jobs and sustain long-term investment in Canadian assembly plants.",
    whyItMatters: "PMAC's formation is a signal that Canada's largest automakers are preparing for a prolonged and difficult trade and policy fight. For independent shop owners, the outcome of CUSMA renewal and tariff negotiations will directly affect the cost and availability of parts, the pace of EV adoption mandates, and the mix of vehicles entering the Canadian fleet over the next decade. Toyota and Honda vehicles are among the most serviced in independent shops across Canada — their combined production volume means their policy positions will shape the regulatory environment your shop operates in. Watch for PMAC to become a significant voice in Ottawa on issues that matter to the repair industry, including right-to-repair and emissions regulations.",
    source: "Driving.ca",
    sourceUrl: "https://driving.ca/auto-news/industry/toyota-honda-form-canadas-largest-automotive-manufacturers-association",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TRADE",
    tagColor: "#059669",
    headline: "Tariff Fears Are Cooling Canadian Car Buyers — And That Could Mean More Repair Work for Your Shop",
    summary: "A new survey and multiple industry reports confirm that tariff uncertainty is weighing heavily on Canadian consumers' appetite for new vehicles. Many Canadians now worry that U.S.-Canada trade tensions will push new vehicle prices beyond reach, with some analysts projecting new vehicle prices could rise by $3,000 to $6,000 CAD if current tariff structures persist. Canada's Q1 2026 new-vehicle sales came in softer than 2025, and Scotiabank Economics has revised its full-year forecast down to 1.81 million units from 1.91 million in 2025. At the same time, used vehicle prices are rising sharply as spring demand heats up, with wholesale values climbing faster than expected. The combination of new vehicle price anxiety and rising used vehicle values is pushing more Canadians to hold onto their existing vehicles longer — a dynamic that directly benefits the repair and maintenance sector.",
    whyItMatters: "When consumers delay new vehicle purchases, they invest more in maintaining the vehicles they already own. This is one of the clearest tailwinds the independent repair sector has seen in years. If your shop is not already positioning itself as the trusted partner for customers who are choosing to keep their current vehicle running rather than trading up, now is the time to make that pitch. Service reminders, maintenance packages, and proactive inspection programs are all tools that convert tariff anxiety into booked appointments. The shops that communicate clearly with their existing customer base during this period of uncertainty will build loyalty that lasts well beyond the current trade environment.",
    source: "Automotive News Canada / BNN Bloomberg",
    sourceUrl: "https://www.bnnbloomberg.ca/business/technology/2026/04/16/as-new-vehicle-sales-decrease-more-canadians-could-turn-to-evs-to-save-money-expert/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🔧",
    text: "Independent repair shops are navigating a tougher consumer environment in 2026, but industry resilience remains strong — the Auto Care Association notes that deferred maintenance and longer vehicle hold times are translating into higher average repair orders across North America.",
    sourceUrl: "https://www.autocare.org/news/latest-news/detail/2026/04/17/repair-shops-navigating-tougher-consumer-environment",
  },
  {
    icon: "🚗",
    text: "Mobile service is emerging as a battleground between independent shops and dealerships — dealer share of vehicles under warranty has dropped to 55 percent as mobile providers capture more routine maintenance work. Independent shops offering mobile or pick-up-and-drop-off services are gaining ground.",
    sourceUrl: "https://www.autonews.com/retail/service-and-parts/an-indpendent-shops-start-mobile-service-0417/",
  },
  {
    icon: "⚖️",
    text: "Canadians have until the end of April to file claims in a $50 million auto parts price-fixing class-action settlement — if your shop purchased auto parts in Canada between 2008 and 2021, you may be eligible. Check the settlement website for details.",
    sourceUrl: "https://dailyhive.com/canada/deadline-final-car-settlement",
  },
  {
    icon: "🏭",
    text: "Linamar Corporation, one of Canada's largest auto parts manufacturers, maintained its 2026 outlook despite the April 6 tariff changes — a positive signal that USMCA-compliant Canadian parts suppliers are holding steady under the current trade pressure.",
    sourceUrl: "https://www.stalbertgazette.com/national-business/linamar-maintains-its-2026-outlook-despite-recent-us-tariff-changes-12149018",
  },
];

const tipOfTheDay = {
  title: "Turn the F-150 Recall Into a Service Opportunity",
  text: "With nearly 1.4 million 2015–2017 Ford F-150s recalled for the 6R80 transmission downshift issue, notification letters start hitting mailboxes on April 27. Get ahead of it now: pull your customer database and flag every 2015–2017 F-150 with a 6-speed automatic. Reach out proactively before the letter arrives — a quick text or phone call saying 'We noticed your truck may be part of a Ford recall and we can handle the repair for you' is a powerful retention tool. The fix is a no-cost PCM software update, and in some cases a lead frame replacement. It is fast, it is free to the customer, and it gets them into your bay. Use the visit to perform a full vehicle inspection and present any deferred maintenance. One recall appointment, done right, can generate $300 to $800 in additional approved work.",
};

const quoteOfTheDay = {
  text: "For more than four decades, the teams at Toyota and Honda, along with our suppliers, have invested in Canadian communities, created high-quality jobs, and built vehicles that compete globally. The creation of PMAC reflects the shared responsibility we have as manufacturers to help strengthen the industry's future.",
  author: "Tim Hollander",
  title: "President, Toyota Motor Manufacturing Canada & PMAC Board Member",
};

const rideOfTheDay = {
  name: "1969 Dodge Charger R/T 440 Magnum",
  description: "The 1969 Dodge Charger R/T is one of the most iconic muscle cars ever built — a car so deeply embedded in North American culture that it transcends the automotive world entirely. The R/T (Road/Track) package came standard with the 440 Magnum V8, a 375-horsepower big-block that delivered 480 lb-ft of torque and could propel the Charger through the quarter mile in the low 14-second range. The optional 426 Hemi took things further still. The second-generation B-body design — with its hidden headlights, flying buttress C-pillars, and recessed rear window — remains one of the most beautiful shapes ever to come out of Detroit. The 1969 Charger became a legend on the street, on the track, and on screen, and it remains one of the most coveted and recognized muscle cars in the world.",
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
