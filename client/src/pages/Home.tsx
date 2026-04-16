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

const BRIEFING_NUMBER = 7;
const BRIEFING_DATE = "April 16, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/yJWruZRrVrnFNvIx.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EFZtYsmmklPcLhcg.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FBjxvVDvRNTFndgr.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/eKmTCHwbHSswKkaX.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mbBrPsApIRvdeEJs.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "POLICY",
    tagColor: "#059669",
    headline: "Carney Suspends Federal Fuel Excise Tax — 10 Cents Off Per Litre Starting April 20",
    summary: "Prime Minister Mark Carney's newly elected majority government is delivering immediate relief at the pump. Starting April 20, 2026, the federal excise tax on gasoline (10 cents/litre) and diesel (4 cents/litre) will be suspended until Labour Day, September 7, 2026. The measure is a direct response to fuel price pressures caused by global oil disruptions tied to the ongoing Middle East conflict. The Department of Finance estimates the temporary suspension will provide over $2.4 billion in total tax relief to Canadians. The full excise tax rates will return on September 8, 2026.",
    whyItMatters: "For shop owners, this is a double win. Lower fuel costs reduce your overhead on parts runs, service vehicles, and fleet customers' operating expenses — which can translate to more discretionary spending on maintenance. More importantly, customers who are feeling less pinched at the pump are more likely to approve recommended repairs and preventive maintenance. Communicate this relief to your clients and use the window to push deferred services. The savings window closes September 8.",
    source: "Government of Canada",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/04/temporarily-suspending-the-federal-fuel-excise-tax.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRAINING",
    tagColor: "#2563eb",
    headline: "Durham College Launches Ontario's Only Full-Time EV Technician Diploma — First Grads in 2027",
    summary: "Durham College has launched a two-year Electric Drive Vehicle Technician diploma at its Vanhaverbeke Family EV Training Centre in Whitby, Ontario — one of only two full-time EV-focused college programs in the province. The program trains students to diagnose, repair, and service high-voltage EV and hybrid systems alongside conventional mechanical skills. Graduates can also enter Durham College's Motive Power Technician program in year two, earning a second diploma and apprenticeship credit in three years. The college has also launched a 30-hour upskilling course for licensed technicians, covering high-voltage safety, EV battery systems, and hybrid-electric powertrains. The first graduating class is expected in 2027.",
    whyItMatters: "Ontario's tech shortage is real and worsening — and EV-qualified technicians are the hardest to find. Hybrid vehicle sales jumped 60% in 2025 alone, and the pipeline of EV-capable technicians is years behind demand. If you're a shop owner, now is the time to sponsor an apprentice in a program like Durham's, or send an existing tech through the 30-hour upskilling course. Shops that build EV competency now will be positioned to capture the growing wave of hybrid and electric service work that's already arriving.",
    source: "EV Repair Magazine",
    sourceUrl: "https://www.evrepairmag.com/news/training/article/15822277/durham-college-ev-program-targets-technician-shortage",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TRADE",
    tagColor: "#dc2626",
    headline: "Toyota and Honda Form PMAC — Canada's Largest Auto Manufacturing Lobby Ahead of CUSMA Review",
    summary: "Toyota Canada and Honda Canada have jointly launched the Pacific Manufacturing Association of Canada (PMAC), representing over 75% of all Canadian vehicle production and 60% of assembly plant workers. The new lobby group was formed ahead of the critical CUSMA free trade agreement review scheduled for July 2026. Together, Toyota produced 537,472 vehicles in Canada last year and Honda built 400,587 — both exceeding the combined output of GM, Ford, and Stellantis. PMAC will advocate for unrestricted access to the U.S. market, pragmatic EV policy, and the elimination of Section 232 tariffs that are costing the industry billions annually.",
    whyItMatters: "The CUSMA review in July is the most consequential trade event for Canada's auto sector in decades. If tariffs remain or escalate, parts costs will rise and vehicle supply will tighten — both of which hit independent shops through higher parts prices and longer wait times. PMAC's formation signals that the industry is organizing to fight hard for a favourable outcome. Watch this space closely: the July review will shape your parts costs, vehicle availability, and customer purchasing power for years to come.",
    source: "Driving.ca",
    sourceUrl: "https://driving.ca/auto-news/industry/toyota-honda-form-canadas-largest-automotive-manufacturers-association",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⛽",
    text: "Gas prices are expected to drop by approximately 10 cents per litre at the pump starting April 20 as the federal excise tax suspension takes effect — the biggest single-day fuel price drop in Canada since the carbon tax was eliminated.",
    sourceUrl: "https://www.pm.gc.ca/en/news/news-releases/2026/04/14/prime-minister-carney-suspends-federal-fuel-excise-tax-gasoline-and",
  },
  {
    icon: "🔧",
    text: "Ontario's automotive technician shortage has reached crisis levels in 2026, with new data showing the province is short thousands of licensed techs — and the gap is widening as retirements outpace new apprentice completions.",
    sourceUrl: "https://www.instagram.com/p/DW9XKjajrzj/",
  },
  {
    icon: "🚗",
    text: "Repairable EV claims at independent collision shops jumped 40% year-over-year, according to new industry data — a sign that EVs are entering the mainstream repair market faster than many shops anticipated.",
    sourceUrl: "https://climatescience.press/?p=438641",
  },
  {
    icon: "🏭",
    text: "Canada's automotive industry faces a potential $75 million per day tariff bill if CUSMA talks collapse in July, according to AMPA President Flavio Volpe — a figure that would make Canadian auto manufacturing operations immediately unfeasible.",
    sourceUrl: "https://autosphere.ca/dealerships/2026/04/15/the-path-forward/",
  },
];

const tipOfTheDay = {
  title: "Talk to Your Customers About the Fuel Tax Break",
  text: "Starting April 20, Canadians will see roughly 10 cents per litre knocked off their gas bills. Use this as a conversation starter with customers who have been deferring maintenance. A simple message — 'With gas prices dropping this week, now's a great time to take care of that deferred service before summer' — can convert hesitant customers into booked appointments. The window runs until September 7, so you have a full summer to leverage it. Consider a targeted email or text campaign to your customer database this week.",
};

const quoteOfTheDay = {
  text: "If we are going to continue having a thriving industry here, it will be because we get a free trade agreement with the Americans and eliminate the Section 232 tariffs.",
  author: "Brian Kingston",
  title: "President, Canadian Vehicle Manufacturers Association",
};

const rideOfTheDay = {
  name: "1969 Dodge Charger R/T 440 Magnum",
  description: "The 1969 Dodge Charger R/T is the definitive American muscle car — a rolling sculpture that defined an era. Powered by the legendary 440 Magnum V8 producing 375 horsepower and 480 lb-ft of torque, the R/T (Road/Track) package delivered blistering performance wrapped in one of the most dramatic body designs ever to roll off a Detroit assembly line. The hidden headlights, flying buttress C-pillars, and full-width taillights made it unmistakable. Immortalized by Bullitt and The Dukes of Hazzard, surviving R/T examples in original condition are among the most sought-after muscle cars on the planet, routinely fetching $80,000–$150,000 at auction.",
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
                  Fuel Tax Cut Incoming, EV Tech Shortage Deepens, and CUSMA Countdown Begins
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
              {BRIEFING_DATE} &middot; Edition #{BRIEFING_NUMBER}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
