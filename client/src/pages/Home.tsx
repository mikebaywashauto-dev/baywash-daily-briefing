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

const BRIEFING_NUMBER = 103;
const BRIEFING_DATE = "August 18, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/HchFdeyfdJiJJDgL.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JdzVeYNlsqzSVPLz.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/MRuKaWIWGGFFrPRV.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RkDEUvuSvIrfSupL.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FzgGIdeHBqpWKayO.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CARNEY + TRUMP SPOKE / LEBLANC–GREER–LUTNICK: 1H45M / NO DEAL ANNOUNCED / AUG 19: TOMORROW",
    tagColor: "#b91c1c",
    headline: "Carney and Trump Spoke — Canada’s Longest U.S. Trade Meeting Ends With No Deal Announced",
    summary: "Prime Minister Mark Carney and U.S. President Donald Trump spoke by phone Monday afternoon as final Section 338 negotiations intensified. Earlier, Trade Minister Dominic LeBlanc and chief negotiator Janice Charette met USTR Jamieson Greer and Commerce Secretary Howard Lutnick for roughly one hour and 45 minutes — the longest ministerial meeting of the recent process. Carney called the talks ‘delicate’ and ‘intense,’ while LeBlanc said: ‘We’re going to continue working; our job is not yet done.’ No agreement has been announced. CBC reported the American negotiating team was expected to see Trump after the meeting and that another Canadian-U.S. meeting remained possible before the deadline. Section 338 is scheduled for August 19 — tomorrow.",
    whyItMatters: "The negotiating activity is real, but it is not a new supplier price list. Keep estimates tied to confirmed invoices, written supplier quotes and their expiry dates. Do not promise customers a tariff outcome, add speculative fees or make a broad parts-stock purchase until an actual rule and supplier response are known.",
    source: "CBC News — August 18, 2026",
    sourceUrl: "https://www.cbc.ca/news/politics/carney-negotiations-delicate-intense-9.7309934",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SECTION 338: ~US$20B GOODS / UP TO 50% / HOCKEY STICKS + CEMENT + PLYWOOD / EXCLUSIONS MATTER",
    tagColor: "#15803d",
    headline: "Section 338 Is a Defined Export Risk — Not a Licence to Guess at Every Auto-Part Price",
    summary: "If implemented on August 19, Section 338 would affect about US$20 billion of Canadian products imported to the United States, according to NBC News. The targeted goods include hockey sticks, some clothing, wines, dairy products and building materials such as cement and plywood. Energy products, potash, fish and critical minerals are excluded. The White House frames the measure as a response to Canadian treatment of U.S. cars, alcohol and dairy, but the reported targeted export list is different from a universal auto-parts measure. Section 338 comes from the 1930 Tariff Act, has never before been used by a U.S. president and is expected to face legal challenges if imposed.",
    whyItMatters: "For a normal independent-shop parts order, keep the rule practical: the headline does not automatically change the price of a brake caliper, sensor or filter. Ask suppliers for part-level confirmation when a price changes, and distinguish their actual origin and CUSMA documentation from general tariff news.",
    source: "NBC News — August 17, 2026",
    sourceUrl: "https://www.nbcnews.com/business/consumer/canada-trump-tariffs-talks-hockey-sticks-rcna592931",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR–GM / TARGET: FRIDAY AUG 21 / 4,600+ ONTARIO MEMBERS / CAMI FUTURE STILL CENTRAL",
    tagColor: "#0369a1",
    headline: "Unifor-GM Talks Enter Their Target Week — Friday Is the Internal Deadline for a Tentative Deal",
    summary: "Unifor says National President Lana Payne is providing an update as General Motors bargaining approaches Friday’s internal target for a tentative agreement. The union represents more than 4,600 members across Ontario GM facilities. Earlier union materials identified roughly 30% of GM members in Canada as on layoff, including 1,050 workers at idled CAMI in Ingersoll. The bargaining remains about more than wages: future operations, secure jobs and a credible path for facilities affected by changing North American vehicle production are central questions. No tentative agreement has been announced.",
    whyItMatters: "GM’s labour outcome matters for local parts demand, fleet turnover and the broader service base — particularly in Ontario — but it does not justify a parts panic. Maintain a modest buffer on predictable fast-moving GM service items, watch official announcements, and avoid treating a bargaining target date as a strike or settlement date.",
    source: "Unifor Auto Talks — August 18, 2026",
    sourceUrl: "https://autotalks.uniforautohub.ca/general_motors_bargaining_update",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "☎️",
    text: "Carney and Trump spoke Monday afternoon. Carney says the talks are ‘delicate’ and ‘intense’; no agreement has been announced with the August 19 deadline one day away.",
    sourceUrl: "https://www.cbc.ca/news/politics/carney-negotiations-delicate-intense-9.7309934",
  },
  {
    icon: "🏛️",
    text: "LeBlanc, Charette, Greer and Lutnick met for roughly 1 hour 45 minutes — the longest ministerial session of recent talks. LeBlanc: ‘our job is not yet done.’",
    sourceUrl: "https://www.cbc.ca/news/politics/carney-negotiations-delicate-intense-9.7309934",
  },
  {
    icon: "📦",
    text: "Section 338’s reported target list includes hockey sticks, some clothing, wines, dairy, cement and plywood. Energy, potash, fish and critical minerals are excluded.",
    sourceUrl: "https://www.nbcnews.com/business/consumer/canada-trump-tariffs-talks-hockey-sticks-rcna592931",
  },
  {
    icon: "🏭",
    text: "Unifor-GM bargaining is approaching its internal tentative-agreement target on Friday, August 21. No tentative agreement has been announced.",
    sourceUrl: "https://autotalks.uniforautohub.ca/general_motors_bargaining_update",
  },
  {
    icon: "⚖️",
    text: "Rule check: a tariff announcement is not a supplier invoice. Confirm part origin, CUSMA status, lead time and quote expiry before changing an estimate or ordering extra inventory.",
    sourceUrl: "https://www.cbc.ca/news/politics/carney-negotiations-delicate-intense-9.7309934",
  },
];

const tipOfTheDay = {
  title: "Use a Customer-Authorized Price-Protection Note for Major Special Orders",
  text: "For a major special-order part this week, record the supplier’s written quote, its expiry time, origin and CUSMA status in the job file; then have the customer authorize any price change that occurs before the part is ordered. That protects your margin without adding an invented tariff surcharge. Keep normal, fast-moving stock normal until a supplier gives you an actual updated price.",
};

const quoteOfTheDay = {
  text: "We’re going to continue working; our job is not yet done.",
  author: "Dominic LeBlanc, Canada-U.S. Trade Minister",
  title: "After meeting USTR Jamieson Greer and Commerce Secretary Howard Lutnick — August 18, 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth Road Runner 440 Six Pack — Vitamin C Orange, Ontario-Plated",
  description: "Vitamin C Orange, a black hood and the 440 Six Pack’s three two-barrel carburetors: the 1970 Road Runner made its case with directness, not theatre. It belongs outside an Ontario repair shop under warm bay lights. Tomorrow may bring a trade announcement; today, the Road Runner says to wait for the actual paperwork.",
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
                {["CARNEY–TRUMP CALL", "SECTION 338: TOMORROW", "GM TARGET: AUG 21", "'70 ROAD RUNNER 440"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Tuesday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Carney and Trump Speak as Section 338 Deadline Approaches — Baywash Daily Briefing Edition No. 103"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 103 — Tuesday, August 18, 2026 — Carney–Trump Call / Longest U.S. Trade Meeting / Section 338 Tomorrow</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Carney and Trump Spoke — No Deal Announced Before Tomorrow’s Deadline
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
