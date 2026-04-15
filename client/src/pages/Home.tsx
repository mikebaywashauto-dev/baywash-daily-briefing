/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 2;
const BRIEFING_DATE = "April 14, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663378653340/XBnCHYnGjSnDZiXGkmSWnL/hero-banner-QnbdEFGvt45GMnmwvwHXEv.webp";
const STORY1_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663378653340/XBnCHYnGjSnDZiXGkmSWnL/story1-ccc-claims-Rnio2tDZpBNpxSz7zF5qvG.webp";
const STORY2_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663378653340/XBnCHYnGjSnDZiXGkmSWnL/story2-cox-dealership-maDdRHd3dz9wBn2B3oXPwb.webp";
const STORY3_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663378653340/XBnCHYnGjSnDZiXGkmSWnL/story3-icar-highschool-a6SHbioujQN5n7giMaX2gU.webp";
const HOTROD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663378653340/XBnCHYnGjSnDZiXGkmSWnL/hotrod-1969-boss302-5CurWkeD8CbxDqjZXNvjoB.webp";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "REPAIR COSTS",
    tagColor: "#dc2626",
    headline: "CCC Report: 28% of Repairs Now Require Calibration as Average Costs Hit $4,500–$5,000",
    summary: "CCC Intelligent Solutions' 2026 Crash Course report reveals that 28.3% of all repairable appraisals now include at least one calibration line — up 6.5% in Q4 alone. Average repair costs have nearly doubled since 2010, climbing from roughly $2,500 to the $4,500–$5,000 range, driven by ADAS complexity, advanced materials, and sensor-laden bumpers that can no longer be patched.",
    whyItMatters: "Here's the number that should keep every shop owner up at night: 24% of consumers have downgraded or dropped insurance coverage to free up money, and 15% canceled car insurance entirely. That means more uninsured vehicles on the road, more out-of-pocket customers who flinch at estimates, and more pressure on your front counter to explain why a \"simple bumper job\" costs $3,000. The shops that invest in transparent digital estimates with photos and videos will close more approvals. The ones that don't will watch customers walk.",
    source: "Claims Journal / CCC",
    sourceUrl: "https://www.claimsjournal.com/news/national/2026/04/13/336791.htm",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "MARKET SHIFT",
    tagColor: "#2563eb",
    headline: "Cox Automotive: Dealers Hit Record $9.2M in Service Revenue — But Independents Are Stealing Market Share",
    summary: "The 2026 Cox Automotive Fixed Operations and Ownership Study shows average dealer service and parts revenue reached $9.23 million in 2025, up 33% in eight years. But here's the twist: dealer share of service visits fell from 33% to 29%, while the number of independent auto mechanic businesses in the U.S. grew 12% since 2018 to nearly 299,000.",
    whyItMatters: "This is the best data point independent shops have gotten in years. Customers are leaving dealerships — not because dealers are bad, but because they perceive them as expensive (even though the average dealer visit is actually $14 cheaper at $261 vs. $275 for independents). The real opportunity: Cox found that losing a single service customer costs $12,000+ in lifetime revenue, and shops that send photos or videos during service see $230 more per repair order. If you're not using digital vehicle inspections yet, you're leaving money on the lift.",
    source: "Cox Automotive",
    sourceUrl: "https://www.coxautoinc.com/insights/dealerships-capture-record-fixed-ops-revenue-but-lose-market-share-as-customers-drift-to-general-repair-according-to-cox-automotive-study/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "WORKFORCE",
    tagColor: "#059669",
    headline: "I-CAR Launches High School Pre-Apprenticeship Program in Illinois — National Rollout Planned for 2026–27",
    summary: "I-CAR has launched a new statewide pre-apprenticeship program in Illinois, funded by DCEO grants, that gives high school students hands-on exposure to diagnostics, electronics, materials science, and ADAS calibration. Starting in the 2026–27 school year, students can earn I-CAR's Electric and Alternative Energy Vehicle Badge and receive professional tool kits upon completion.",
    whyItMatters: "This is the pipeline play the industry has been begging for. I-CAR is positioning collision repair as a STEM career — not a fallback — and backing it with the Department of Labor's Registered Apprenticeship Program model. The Illinois pilot is explicitly designed as the launchpad for a national rollout. For shop owners: this means a new generation of entry-level techs who arrive with baseline ADAS and EV knowledge instead of starting from zero. Start building relationships with your local high school programs now, because the shops that recruit early will get first pick.",
    source: "Body Shop Business",
    sourceUrl: "https://www.bodyshopbusiness.com/i-car-to-expand-career-pathways-for-illinois-high-school-students-as-interest-in-skilled-trades-accelerates/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🔩",
    text: "Trump signed a proclamation overhauling steel and aluminum tariff assessments. Auto trade attorneys say automaker and supplier metal costs will likely rise further.",
    sourceUrl: "https://www.autonews.com/manufacturing/an-trump-tariffs-steel-aluminum-update-0413/",
  },
  {
    icon: "🎓",
    text: "Free webinar tomorrow (April 15, 11 AM ET): \"Happier Technicians = More Productive Shops\" — hosted by Ohio, Indiana, and Illinois auto body associations. Covers retention strategies and well-being programs.",
    sourceUrl: "https://collisionweek.com/2026/04/14/state-associations-host-april-15-webinar-technician-well-retention/",
  },
  {
    icon: "⚡",
    text: "EV repair market hits $29.8B in 2026, projected to reach $75B by 2031. First wave of EVs now leaving warranty — independents who tool up now capture the early movers.",
    sourceUrl: "https://blog.autodots.io/ev-repair-business-2026-garage-owners/",
  },
  {
    icon: "📊",
    text: "For the first time in a decade, shops are repairing more parts instead of replacing them — a reversal driven by economic pressure and higher labor margins over parts sales.",
    sourceUrl: "https://roadbuddy.ai/news/industry-news/rising-car-repair-costs-hit-drivers-in-2026/",
  },
];

const tipOfTheDay = {
  title: "Start Sending Photos & Videos With Every Estimate",
  text: "Cox Automotive's new study found that customers who receive photos or videos during a service visit spend $230 more per repair order on average, and 49% say visual evidence makes them more likely to approve recommended services. Most shop management systems support this. If yours doesn't, a simple text message with a phone photo works. The ROI is immediate: higher approval rates, fewer comebacks from \"I didn't know it was that bad,\" and a trust signal that separates you from the shop down the street.",
};

const quoteOfTheDay = {
  text: "Automotive collision repair has become a high-tech, STEM-based profession, and skilled workers are critical to keeping drivers safe and America moving. Students are working with the same technologies found in engineering labs and advanced manufacturing.",
  author: "Dara Goroff",
  title: "VP of Product Management, I-CAR",
};

const rideOfTheDay = {
  name: "1969 Ford Mustang Boss 302",
  description: "Born to homologate Ford's Trans-Am racing effort, the Boss 302 paired a high-revving 302ci V8 with Cleveland-style canted-valve heads, a solid-lifter cam, and a close-ratio four-speed. Only produced for 1969 and 1970, it was — and remains — one of the best-handling Mustangs ever built. The black hood scoop, reflective \"Boss 302\" side stripes, and Magnum 500 wheels gave it a look that was all business. This was the Mustang that could embarrass a Corvette through the corners.",
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
            Your morning shop intel<br />Mon–Sat &middot; 6:00 AM ET
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
                  Repair Costs Hit Record Highs, Independents Gain Ground, and I-CAR Builds the Next-Gen Pipeline
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
