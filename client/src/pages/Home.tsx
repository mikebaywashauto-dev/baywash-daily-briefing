/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 3;
const BRIEFING_DATE = "April 15, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xfngamkZOYnPtXbC.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KFHNowtbApkLtlIe.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JtcFozaeYYHPDzmI.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/qJSTDGGRJbCqCrhf.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/AygHXHNffMerRPLn.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SAFETY",
    tagColor: "#dc2626",
    headline: "NHTSA Finds Deadly Defect in Aftermarket Airbag Inflators Entering Vehicles Through Collision Repairs — Permanent Ban Looming",
    summary: "The National Highway Traffic Safety Administration has issued a formal safety defect determination for airbag inflators manufactured by Jilin Province Detiannuo Safety Technology Co., Ltd. (DTN). The inflators rupture during deployment and propel metal fragments into the driver's compartment rather than inflating the airbag cushion. NHTSA has documented 10 deaths and 2 severe injuries across 12 crashes. In at least 10 of those 12 cases, the inflators reached drivers as aftermarket replacements installed following a prior collision at body shops.",
    whyItMatters: "This is a direct liability issue for every collision repair shop that handles airbag replacements. NHTSA has identified body shops as the primary pathway through which these deadly inflators reached American vehicles. A wrongful death lawsuit has already named a body shop as a defendant. Wisconsin and Idaho have enacted criminal penalties — including felony charges when a violation results in bodily harm or death — for knowingly installing non-genuine airbags. The public comment period closes April 17. If you source airbag modules from online marketplaces or discount distributors, stop now. Inspect every vehicle arriving with evidence of a prior airbag deployment since 2020. Document the inspection on the repair order. Your license, your liability insurance, and potentially your freedom depend on it.",
    source: "Autobody News / NHTSA",
    sourceUrl: "https://www.autobodynews.com/news/nhtsa-finds-defect-in-airbag-inflators-entering-vehicles-through-collision-repairs-could-order-permanent-ban",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TECHNOLOGY",
    tagColor: "#2563eb",
    headline: "The Best Use of AI in Collision Repair Isn't What Most People Think — It's a Second Set of Eyes",
    summary: "A new MOTOR Magazine analysis by Brunno Moretti, president of ADAS Aftermarket by Burke Porter, argues that AI's real value in collision repair isn't replacing technicians — it's managing the growing complexity of modern repairs. Tools like Tractable use machine-learning models trained on millions of repair images to triage incoming jobs at intake. Revv analyzes estimate data to identify potential ADAS calibration requirements and generates supporting documentation tied to OEM procedures. A Revv benchmark survey found that while 86% of shops perform at least some ADAS calibrations in-house, only 21% consider their calibration processes fully optimized.",
    whyItMatters: "That 65-point gap between 'we do calibrations' and 'our calibration process is optimized' is where money, cycle time, and liability are leaking out of your shop. When a calibration requirement is discovered after repairs are underway, you face unexpected delays, scheduling complexity, sublet coordination, insurance approval friction, and documentation challenges. AI tools aren't replacing your experienced techs — they're catching the steps that get buried across multiple OEM sources and repair plans that evolve throughout the job. OEC's RepairLogic reports shops creating repair plans more than twice as fast with automated tools. The shops that adopt these workflow tools early will see measurable improvements in cycle time and fewer supplement surprises. The ones that wait will keep eating the cost of missed steps.",
    source: "MOTOR Magazine",
    sourceUrl: "https://www.motor.com/2026/04/ai-collision-repair-adas-workflows/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "OPERATIONS",
    tagColor: "#059669",
    headline: "Fewer Claims, More Total Losses: Shop Owners Share the Strategies Actually Keeping Their Businesses on Track",
    summary: "With CCC data showing continued declines in claims frequency and a record-high percentage of claims resulting in total losses, Autobody News surveyed collision repair operators across the country on how they're adapting. Jesse Parks of Freeman Collision Center in Santa Rosa, CA, estimates about half of all first contacts never make it through the door — meaning marketing spend is wasted if shops aren't converting the opportunities already in front of them. Kena Dacus of Dacus Auto Body in McPherson, KS, discovered her real capture rate was far lower than CCC reports showed once she tracked leads from calls, social media, Google forms, and emails.",
    whyItMatters: "The collision repair market has fundamentally shifted, and the shops that thrived on volume alone are being forced to recalibrate. Christian Bogden of A.U.T.O. Collision in Sandy, UT, reported an 11% decline in sales last year. But the operators who are winning aren't chasing new DRP partnerships or throwing money at advertising — they're plugging the holes. Parks says it plainly: 'We don't need to pick up another partner. We just need to look at how we manage the people who are already coming through our door.' Dacus is analyzing gross profit by insurance company and vehicle make to focus marketing on the most profitable work. DCR Systems is tracking defects coming off the line and pursuing customer upsells like batteries and wiper blades. Even small wins matter: Amber Alley of Barsotti's Body & Fender found that fixing leaking air lines and turning off compressors overnight saves hundreds to thousands per year.",
    source: "Autobody News",
    sourceUrl: "https://www.autobodynews.com/news/fewer-claims-more-total-losses-how-shops-are-adapting",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "\u{1F697}",
    text: "CARFAX: Used car prices spike to ~$25,500, up $1,500 in just one month. EV prices jumped $560 — the largest surge in EV demand in over a year. Tariff-driven new-model price increases and tighter used inventory are pushing buyers into the used market.",
    sourceUrl: "https://www.aftermarketmatters.com/national-news/used-car-prices-spike-after-hitting-12-month-low/",
  },
  {
    icon: "\u{1F525}",
    text: "Providence, RI fire investigators confirm an EV lithium-ion battery thermal runaway caused the March 20 fire at Batista Auto Repair Center. The moment of ignition was caught on camera. No injuries reported, but the 10-page report is a wake-up call for every shop storing or working on EVs.",
    sourceUrl: "https://www.wpri.com/news/local-news/providence/ev-battery-failure-caused-providence-auto-shop-fire-report-states/",
  },
  {
    icon: "\u{1F4F1}",
    text: "Tekmetric launches Digital Ads and Phones at Tektonic 2026. Early ad campaigns show 10x ROI: $381 in ad spend generated 8 new customers and $3,865 in revenue. Phones product surfaces full customer history before the advisor says hello.",
    sourceUrl: "https://lasvegassun.com/news/2026/apr/13/tekmetric-expands-platform-to-help-auto-repair-sho/",
  },
  {
    icon: "\u{1F4CA}",
    text: "New survey: 23% of automotive technicians say they'll probably leave the industry in the next five years — and not because of retirement. The workforce pipeline problem isn't coming; it's already here.",
    sourceUrl: "https://www.aftermarketmatters.com/national-news/automotive-technician-statistics-2026-job-satisfaction-pay-and-industry-trends/",
  },
];

const tipOfTheDay = {
  title: "Audit Your Capture Rate — The Real One",
  text: "Kena Dacus of Dacus Auto Body realized her CCC-reported capture rate was misleading because leads were arriving through far more channels than the report tracks: calls, social media messages, Google and website forms, and emails. Her real capture rate was much lower than it appeared. Start conducting call audits this week. Grade your staff on tone and the information they provide. Track every referral source. As Jesse Parks of Freeman Collision Center puts it: 'We don't need to pick up another partner. We just need to look at how we manage the people who are already coming through our door.' The ROI on fixing your front counter is immediate — and it costs nothing except training time.",
};

const quoteOfTheDay = {
  text: "The most practical use of AI in collision repair isn't replacing technical judgment. It's helping shops manage the growing complexity of modern repairs, providing updates on required procedures, organizing information faster, and documenting work clearly enough that jobs move through the shop without unnecessary delays.",
  author: "Brunno Moretti",
  title: "President, ADAS Aftermarket by Burke Porter",
};

const rideOfTheDay = {
  name: "1970 Plymouth Barracuda Hemi",
  description: "The third-generation Barracuda was a complete departure from the Valiant-based original — a ground-up redesign on the new E-body platform shared with the Dodge Challenger. The Hemi 'Cuda sat at the top of the food chain: a 426ci Hemi V8 rated at 425 horsepower, paired with a four-speed manual or TorqueFlite automatic. Plymouth built only 652 Hemi 'Cudas in 1970, making it one of the rarest and most valuable American muscle cars ever produced. The shaker hood scoop, hockey-stick side stripes, and aggressive stance gave it a look that matched its performance. Hemi convertible examples have sold for over $2 million at auction. This was Mopar's answer to everything — and it still wins.",
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

// --- Tag Component ---
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
      <span className="text-[#e05a1a] text-sm">&#9670;</span>
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
                  Deadly Airbag Inflators Traced to Body Shops, AI Finds Its Real Role, and the Capture Rate Wake-Up Call
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
