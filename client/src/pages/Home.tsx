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

const BRIEFING_NUMBER = 151;
const BRIEFING_DATE = "November 18, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/eczkobNVWGkzHqPr.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XRcfixXQyjKUkZdL.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QTZJPdjAnySvmctT.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QBoOWgYhwWhYHRku.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SgxuomzGyhvJFOLy.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "EV POLICY / C$150K THRESHOLD / PROPOSAL / CUSTOMER COMMS",
    tagColor: "#b91c1c",
    headline: "EV Luxury-Tax Proposal: Keep the Shop Estimate Out of Tax Advice",
    summary: "Finance Canada announced a proposal to raise the luxury-tax threshold for more fully electric and hydrogen-powered passenger vehicles from C$100,000 to C$150,000. The announcement says the measure would be effective the following day, subject to subsequent parliamentary approval, while other vehicles would remain at the C$100,000 threshold. This is a policy announcement—not a repair estimate, tax opinion or settled rule for every transaction.",
    whyItMatters: "If a customer asks whether the proposal changes their purchase or lease economics, keep the answer narrow: identify the vehicle and transaction, point them to current official guidance, and avoid giving tax advice unless qualified. Keep every repair quote focused on diagnosis, parts, labour, procedures and warranty terms.",
    source: "Department of Finance Canada — Zero-Emission Vehicle Threshold",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/11/government-of-canada-adjusts-the-taxable-value-threshold-for-zero-emission-vehicles.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "55,000 CHARGERS / BUDGET 2026 / SITE AUDIT / EV READINESS",
    tagColor: "#0369a1",
    headline: "55,000-Charger Plan: Audit Your Site Before Buying Hardware",
    summary: "Finance Canada says Budget 2026 committed C$587 million over five years, beginning in 2027–28, to install more than 55,000 EV chargers through a renewed Zero Emission Vehicle Infrastructure Program. The release also cites C$45 million over five years proposed for charging-infrastructure research and development and more than 50,000 chargers supported to date. These are federal program figures, not a guarantee of local shop demand or funding eligibility.",
    whyItMatters: "Before advertising charging or purchasing equipment, measure actual EV arrivals, parking turnover, electrical capacity, winter operating needs, insurance requirements and the customer-pay business case. Use qualified electrical and code professionals for any installation; do not treat a national charger target as a site plan.",
    source: "Department of Finance Canada — Charging Infrastructure",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/11/government-of-canada-adjusts-the-taxable-value-threshold-for-zero-emission-vehicles.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "AIA CANADA / TECHNICIAN SHORTAGE / MENTORSHIP / RED SEAL",
    tagColor: "#15803d",
    headline: "Technician Shortage: Build a Pathway, Not Just a Job Posting",
    summary: "AIA Canada’s November 13 article says the Canadian automotive aftermarket needs more skilled technicians and argues that recruitment alone is insufficient. It highlights meaningful pathways into the trade, training, mentorship, scholarships, recognition, ongoing education and professional development. The article notes that the Auto Value Technician of the Year program in Canada requires Red Seal certification and work at a participating Certified Service Center.",
    whyItMatters: "Choose one measurable workforce action this week: a school or apprenticeship relationship, a documented mentorship schedule, paid training time, a course budget, a quarterly skills matrix or a recognition path for current staff. Retention improves when development is treated as an operating process rather than an occasional perk.",
    source: "AIA Canada — Investing in the Next Generation",
    sourceUrl: "https://www.aiacanada.com/news/addressing-the-technician-shortage-investing-in-the-next-generation-of-automotive-professionals/",
    image: STORY3_IMG,
  }
];

const quickHits = [
  {
    icon: "⚖️",
    text: "Finance Canada proposed raising the luxury-tax threshold for more fully electric and hydrogen-powered vehicles to C$150,000; subject to parliamentary approval, it is not tax advice for a customer transaction.",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/11/government-of-canada-adjusts-the-taxable-value-threshold-for-zero-emission-vehicles.html",
  },
  {
    icon: "🔌",
    text: "Budget 2026 committed C$587 million over five years beginning in 2027–28 for more than 55,000 EV chargers; audit your local site and demand before buying hardware.",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/11/government-of-canada-adjusts-the-taxable-value-threshold-for-zero-emission-vehicles.html",
  },
  {
    icon: "🏭",
    text: "Honda’s C$867 million Alliston retooling plan, backed by a C$313 million federal investment and Ontario support, includes electrified-vehicle production and worker upskilling.",
    sourceUrl: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/11/canada-invests-313-million-in-honda-north-america-to-advance-next-generation-vehicle-manufacturing-in-ontario.html",
  },
  {
    icon: "🧑‍🔧",
    text: "AIA Canada emphasizes mentorship, scholarships, training, recognition and professional development as part of the technician-shortage response; choose one measurable pipeline action this week.",
    sourceUrl: "https://www.aiacanada.com/news/addressing-the-technician-shortage-investing-in-the-next-generation-of-automotive-professionals/",
  },
  {
    icon: "📈",
    text: "Canadian Tire automotive sales rose for a 25th consecutive quarter; compare national aftermarket signals with your own bookings, parts mix and local customer demand.",
    sourceUrl: "https://www.collisionrepairmag.com/news/article/16541599/market-movers-auto-industry-updates-november-2026",
  },
  {
    icon: "✅",
    text: "Before quoting EV, hybrid or conventional work, verify VIN, system architecture, service procedure, training, isolation needs, supplier stock, warranty and written ETA.",
    sourceUrl: "https://www.aiacanada.com/news/addressing-the-technician-shortage-investing-in-the-next-generation-of-automotive-professionals/",
  },
];

const tipOfTheDay = {
  title: "Run a 30-Minute EV + Staffing Audit",
  text: "Check high-voltage safety, OEM information access, scan-tool subscriptions, local charging demand, electrical capacity, training time, work-in-progress and customer updates. Choose one practical improvement this week, then validate every job by VIN, procedure, supplier confirmation and written promise.",
};

const quoteOfTheDay = {
  text: "Addressing the technician shortage will take commitment at every stage of a career.",
  author: "Automotive Industries Association of Canada",
  title: "Investing in the Next Generation — November 13, 2026",
};

const rideOfTheDay = {
  name: "1969 Chevrolet Chevelle SS — Burgundy, First Snow Bay",
  description: "Deep burgundy paint, bright chrome and a frosty Canadian shop entrance give this Chevelle its Wednesday presence. The lesson carries into every modern bay: respect the vehicle’s exact configuration, document the repair path and confirm the part before promising the customer a finish date.",
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
                {["Coverage Check", "VIN First", "Local ETA", "'70 GTX"].map((tag) => (
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
              alt="Canadian Independent Shop Team Reviewing EV Readiness — Baywash Daily Briefing Edition No. 151"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 151 — Wednesday, November 18, 2026 — EV Policy / Site Audit / People First</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Wednesday Check: Read the EV Signal—Then Build the Capability to Service It
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Plymouth GTX</span>
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
