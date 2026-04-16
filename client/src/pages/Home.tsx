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

const BRIEFING_NUMBER = 4;
const BRIEFING_DATE = "April 15, 2026";
const BRIEFING_DAY = "Tuesday";

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
    tag: "MATERIALS",
    tagColor: "#dc2626",
    headline: "PPG Announces Global Price Increase of Up to 20% Across All Product Lines \u2014 Already in Progress",
    summary: "PPG has begun implementing price increases of up to 20% across all paints, coatings, and specialty products on a customer-by-customer basis. The company cited significant volatility and supply constraints in global petrochemical, energy, and transportation markets as the primary drivers. CEO Tim Knavish stated the pricing action is necessary to \u201censure availability of supply as we navigate unexpected and increased cost pressures.\u201d PPG warned that certain product categories, technologies, and regions may require even higher adjustments, and that additional price increases may follow as market conditions continue to evolve.",
    whyItMatters: "Paint and materials are one of the largest variable costs in any collision repair operation, and PPG is the dominant refinish supplier in North America. A 20% increase \u2014 with the door open for more \u2014 hits your margins immediately. If you\u2019re on a contract, review the terms now to understand when and how the increase applies. If you\u2019re buying at list, this is the moment to negotiate volume commitments or explore alternative product lines within PPG\u2019s portfolio (Shop-Line, for example, hasn\u2019t seen an increase in two years). Most importantly, do not absorb this cost silently. Update your material rates on every estimate. Talk to your insurer partners about material cost documentation. The shops that treat this as a pass-through cost \u2014 with documentation \u2014 will survive it. The ones that eat it will feel it on every job for the rest of the year.",
    source: "Aftermarket Matters / WSJ",
    sourceUrl: "https://www.aftermarketmatters.com/national-news/ppg-announces-global-price-increase-of-up-to-20-already-in-progress/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TECHNOLOGY",
    tagColor: "#2563eb",
    headline: "CCC Launches Consumer Financing in CCC ONE, Powered by Sunbit \u2014 Self-Pay Repairs Now Exceed 25% of All Orders",
    summary: "CCC Intelligent Solutions announced the availability of consumer financing directly within the CCC ONE platform through a new integration with Sunbit. The capability allows collision repair shops to offer customers flexible payment options to cover repair costs or insurance deductibles at the point of estimate. Sunbit reports approval rates exceeding 90%, offers true 0% interest options with no late fees or hard credit checks, and pays shops upfront with zero repayment risk. CollisionRight, which operates 130 repair centers, is an early adopter and reports increased service acceptance and faster vehicle throughput since implementation.",
    whyItMatters: "Self-pay repairs now represent more than 25% of repair orders on CCC ONE \u2014 and that number is climbing as consumers downgrade insurance coverage, raise deductibles, and avoid filing claims to prevent rate increases. Every one of those customers is a conversion risk. When a $3,500 deductible or a $5,000 out-of-pocket repair lands on someone\u2019s desk, cost is the number-one reason they walk away or delay. Embedding financing into the estimate process removes that friction at the exact moment it matters. You get paid upfront. The customer gets a payment plan. The vehicle moves through your bay instead of sitting in your parking lot. If you\u2019re running CCC ONE, activate this now. If you\u2019re not, find out what financing integration your platform supports. The shops converting self-pay customers at 90%+ approval rates will pull ahead of those still handing out business cards and hoping customers come back.",
    source: "CCC Intelligent Solutions",
    sourceUrl: "https://ir.cccis.com/news-releases/news-release-details/ccc-introduces-consumer-financing-ccc-oner-help-collision-repair",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "LEGISLATION",
    tagColor: "#059669",
    headline: "Virginia Enacts New Law Requiring Insurers to Justify and Document Every Estimate Reduction \u2014 Shops Gain New Leverage",
    summary: "Virginia\u2019s House Bill 808 is now law, amending the state\u2019s unfair claim settlement practices statute with provisions that directly impact collision repair estimating. For any estimate modification of $3,000 or more, insurers must now provide a detailed explanation of why the estimate was lowered, a comprehensive list of all changes, the identity of the individual who made or directed each change, and must retain all versions of the estimate including documentation of each revision. The law also clarifies that vehicle owners cannot be required to submit photos as a condition of appraisal, and mandates a physical inspection when repairs are disputed.",
    whyItMatters: "If you operate in Virginia, this changes the dynamic at your front counter and in your supplement negotiations immediately. For years, shops have dealt with unexplained estimate reductions \u2014 line items disappearing, labor times cut, parts swapped \u2014 with no paper trail and no accountability. That era is over in Virginia. Every reduction now requires a name attached to it and a written justification delivered to the policyholder. This is powerful leverage: when an insurer knows their adjuster\u2019s name will be on record for cutting structural repair time or swapping OEM parts for aftermarket, the calculus changes. The law also reinforces that photo estimating cannot be forced on consumers and that disputed repairs require in-person inspection. For shops outside Virginia, watch this closely \u2014 similar bills are moving through Ohio, Illinois, and Minnesota. Document everything. The legislative tide is turning toward transparency, and your records are your ammunition.",
    source: "BodyShop Business",
    sourceUrl: "https://www.bodyshopbusiness.com/virginia-approves-legislation-regulating-estimate-reductions/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "\u{1F4CA}",
    text: "CCC Crash Course 2026: 28.3% of repairable appraisals now include a calibration \u2014 up 6.5% in Q4 alone. Average repair costs hit $4,500\u2013$5,000, double what they were in 2010. Meanwhile, 24% of consumers have downgraded or dropped insurance entirely, and 33.4% of drivers are now uninsured or underinsured.",
    sourceUrl: "https://www.claimsjournal.com/news/national/2026/04/13/336791.htm",
  },
  {
    icon: "\u{1F527}",
    text: "Cox Automotive: Dealer fixed ops revenue hit a record $9.23M average in 2025, up 33% over eight years. But dealer share of service visits fell from 33% to 29% as customers drift to independent and general repair shops. Independents are winning on convenience and price.",
    sourceUrl: "https://www.coxautoinc.com/insights/dealerships-capture-record-fixed-ops-revenue-but-lose-market-share-as-customers-drift-to-general-repair-according-to-cox-automotive-study/",
  },
  {
    icon: "\u{1F4B0}",
    text: "New car prices up 12.6% year-over-year in March, the biggest jump since 2022, driven by tariff costs on imported vehicles and parts. Used car prices spiked to ~$25,500. Cars with a high percentage of imported parts (Honda, Toyota, Hyundai, Kia) face 15\u201325% repair cost increases on affected components.",
    sourceUrl: "https://www.latimes.com/business/story/2026-04-13/buyers-fret-as-average-cost-of-new-car-soars",
  },
  {
    icon: "\u{1F3E2}",
    text: "Ford\u2019s latest On Target bulletin includes new parking sensor paint guidelines requiring specific procedures to maintain sensor functionality after refinish. I-CAR has published the update. If you\u2019re painting bumper covers with parking aid sensors, check the new procedures before your next job.",
    sourceUrl: "https://rts.i-car.com/crn-2410.html",
  },
];

const tipOfTheDay = {
  title: "Update Your Material Rates Before the Next Estimate",
  text: "With PPG\u2019s 20% price increase already rolling out, every estimate you write at yesterday\u2019s material rate is money you\u2019re leaving on the table. Pull your current paint invoices today. Calculate your actual per-refinish-hour material cost. Update your estimating system. When the insurer pushes back, you\u2019ll have the documentation ready: dated invoices showing the increase, a clear per-job material cost calculation, and the PPG announcement as supporting evidence. The shops that update their rates proactively and document the change will recover the cost. The shops that wait will eat it for months before they realize how much margin they\u2019ve lost.",
};

const quoteOfTheDay = {
  text: "Cost can be one of the biggest barriers to getting a repair approved. By embedding consumer financing into CCC ONE, we\u2019re helping shops convert more estimates into approved work while giving them an option to provide their customers with an easier, more flexible way to pay.",
  author: "Mark Fincher",
  title: "Vice President, Product Management at CCC",
};

const rideOfTheDay = {
  name: "1969 Chevrolet Camaro ZL1",
  description: "The ZL1 Camaro was never supposed to exist as a production car. It started as a COPO (Central Office Production Order) workaround \u2014 dealer Fred Gibb convinced Chevrolet to build a run of Camaros with the all-aluminum 427 ZL1 engine originally developed for Can-Am racing. The result was a factory drag car disguised as a street machine: 430 horsepower on paper, well over 500 on the dyno, in a package that weighed less than a small-block car thanks to the aluminum block and heads. Chevrolet built exactly 69 ZL1 Camaros in 1969. The sticker price was $7,269 \u2014 more than a Corvette \u2014 which meant most sat on dealer lots until they were quietly discounted. Today, documented ZL1s sell for $1 million or more at auction. It remains one of the most significant and valuable American muscle cars ever built.",
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
                  PPG Hits Shops With 20% Price Hike, CCC Embeds Financing to Capture Self-Pay Work, and Virginia Rewrites the Rules on Estimate Cuts
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
