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

const BRIEFING_NUMBER = 97;
const BRIEFING_DATE = "August 12, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JvRqYAXOuPWCIayY.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gftoQHWTVgDaolJQ.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jVMcHxqEzLFTAZEG.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/nFJbmSVRLRuEGoht.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/pBRumIZSzOVWXSPA.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "GREER + LEBLANC MEET / THIRD IN THREE WEEKS / SECTION 338: 7 DAYS / NO DEAL ANNOUNCED / PARTS CUSMA EXEMPT",
    tagColor: "#b91c1c",
    headline: "Greer + LeBlanc Meet in Washington — Third Round in Three Weeks — No Deal Announced — 7 Days to August 19",
    summary: "U.S. Trade Representative Jamieson Greer and Minister Responsible for U.S. Trade Dominic LeBlanc met in Washington Tuesday for another round of negotiations — their third meeting in three weeks. The pace has accelerated as Ottawa seeks to avert the 50% Section 338 tariff threat scheduled for August 19. No deal was announced. Automotive Parts Manufacturers' Association president Flavio Volpe says Ottawa should stay firm rather than settle for piecemeal relief: Canada has 'gone to the mattresses' for a protracted negotiation. The auto sector is already facing Section 232 tariffs: 25% on imported vehicles, with a U.S.-content carve-out for CUSMA-compliant vehicles; auto parts have a blanket CUSMA-compliance exemption. The proposed Section 338 action is separate and, unlike most earlier tariff rounds, does not provide a general CUSMA exception for covered goods.",
    whyItMatters: "Seven days is not much runway, but no agreement has been signed. Do not confuse the upcoming Section 338 threat with the existing sectoral auto rules: for your parts bill, the operational question remains CUSMA compliance. Confirm written origin status and quoted lead times with your three highest-volume suppliers this week. CUSMA-compliant auto parts retain their Section 232 exemption.",
    source: "Inside U.S. Trade / iPolitics — August 11–12, 2026",
    sourceUrl: "https://www.ipolitics.ca/2026/08/11/gone-to-the-mattresses-auto-industry-urges-carney-government-to-stay-strong-in-trade-talks/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "UNIFOR WANTS GMC SIERRA AT OSHAWA / SIERRA SALES BEAT SILVERADO / GM SOLD 300K, BUILT 130K / TARGET: AUG 21",
    tagColor: "#15803d",
    headline: "Unifor Presses GM to Build GMC Sierra at Oshawa — Canada Bought More Sierras Than Silverados in H1",
    summary: "Unifor is pressing GM to add GMC Sierra production at Oshawa Assembly alongside the Chevrolet Silverado as contract talks continue. In the first half of 2026, GM sold 29,483 Sierras in Canada versus 27,740 Silverados — yet Oshawa builds only the Chevrolet-branded full-size pickup. Lana Payne points to a bigger gap: GM sold roughly 300,000 vehicles in Canada last year but assembled only about 130,000 here. GM has committed Oshawa to next-generation full-size pickup production but has not specified the future model mix. The plant lost a production shift earlier this year, eliminating roughly 700 unionized positions. Unifor's bargaining target is August 21; the current contract expires September 20.",
    whyItMatters: "Oshawa output matters to every independent shop that supports work trucks. A locally built Sierra alongside the Silverado would strengthen Canadian pickup supply, parts availability and fleet-service volume. It is still a union request, not a GM production announcement — so do not order parts around it. Watch the August 21 target date for an investment or product-allocation commitment.",
    source: "GM Authority / Automotive News — August 11, 2026",
    sourceUrl: "https://gmauthority.com/blog/2026/08/unifor-pressing-gm-to-build-gmc-sierra-at-oshawa-plant/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "30% OF UNIFOR GM MEMBERS ON LAYOFF / 4,610 MEMBERS / CAMI IDLED / AUGUST 21 TARGET / FORD PATTERN FLOOR",
    tagColor: "#0369a1",
    headline: "Unifor-GM: 30% of Members on Layoff — 1,050 CAMI Workers Idled — August 21 Target Deadline",
    summary: "Unifor officially opened bargaining for more than 4,600 GM members across Ontario and confirmed that approximately 30% are on layoff. The union represents 2,750 workers at Oshawa, 1,050 at the idled CAMI plant in Ingersoll, 700 at St. Catharines Propulsion and 110 at the Woodstock Parts Distribution Centre. Unifor has set August 21 as its target for a tentative agreement — two days after the Section 338 deadline — with the current contract expiring September 20. Lana Payne says the Ford agreement is the foundation for talks; GM master-bargaining chair Trevor Longpre says members expect that pattern to be respected and want certainty about their facilities' future.",
    whyItMatters: "The CAMI shutdown and Oshawa's lost shift make job security and product allocation central to this bargaining round. That shapes the medium-term availability of Canadian-built GM vehicles and the local service ecosystem around them. Keep normal GM service work moving, but build a modest 30-day buffer of predictable, fast-moving GM service parts rather than speculating on a strike.",
    source: "Unifor — August 10, 2026",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-opens-negotiations-general-motors",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏛️",
    text: "Greer and LeBlanc met Tuesday — their third meeting in three weeks. No deal announced. Negotiations have intensified ahead of the August 19 Section 338 deadline.",
    sourceUrl: "https://insidetrade.com/daily-news/top-us-canadian-officials-meet-aug-19-tariff-deadline-looms",
  },
  {
    icon: "🛻",
    text: "Unifor says GMC Sierra output belongs in Oshawa: 29,483 Sierras sold in Canada in H1 versus 27,740 Silverados. GM sold roughly 300,000 vehicles in Canada last year but built about 130,000 here.",
    sourceUrl: "https://gmauthority.com/blog/2026/08/unifor-pressing-gm-to-build-gmc-sierra-at-oshawa-plant/",
  },
  {
    icon: "🏭",
    text: "GM bargaining scope: 2,750 members at Oshawa, 1,050 at idled CAMI, 700 at St. Catharines and 110 at Woodstock. Approximately 30% of Unifor's GM members are on layoff.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-opens-negotiations-general-motors",
  },
  {
    icon: "🥛",
    text: "Talks reportedly focus on possible tariff-rate quota allocation changes for U.S. dairy, not dismantling Canada's supply-management system. Provincial U.S. alcohol restrictions remain a possible concession, not an announced deal term.",
    sourceUrl: "https://www.ipolitics.ca/2026/08/10/canada-u-s-trade-talks-gain-momentum-as-both-sides-signal-room-for-concessions/",
  },
  {
    icon: "⚖️",
    text: "For parts planning: Section 232 auto-parts tariffs have a blanket CUSMA-compliance exemption. The Section 338 threat is separate and has no general CUSMA exception for covered goods. Seven days to August 19.",
    sourceUrl: "https://www.ipolitics.ca/2026/08/11/gone-to-the-mattresses-auto-industry-urges-carney-government-to-stay-strong-in-trade-talks/",
  },
];

const tipOfTheDay = {
  title: "Do a 20-Minute CUSMA + Lead-Time Check — Seven Days to August 19",
  text: "Call your three highest-volume parts suppliers today. Ask for written confirmation of CUSMA origin on regular replenishment items, their current lead time, and whether they expect a price or freight adjustment this month. The practical distinction is critical: CUSMA-compliant auto parts retain their exemption from the existing Section 232 parts tariff, while the Section 338 threat is a separate action on covered goods without a general CUSMA exception. Carry a modest 30-day buffer only on predictable, fast-moving service parts — not on speculative inventory.",
};

const quoteOfTheDay = {
  text: "There's a lot of room here to be able to increase production not just because of the capacity that we have in our facilities, but because of what Canadians buy.",
  author: "Lana Payne, Unifor National President",
  title: "On Unifor's request for GMC Sierra production at Oshawa — August 11, 2026",
};

const rideOfTheDay = {
  name: "1970 GMC Sierra 1500 396 — Forest Green, Ontario-Plated",
  description: "Forest Green with a big-block 396 — a period-correct Canadian pickup built for the jobsite, not the showroom. Unifor wants the modern GMC Sierra added to Oshawa's product mix. This classic is a reminder that a good truck earns its keep for decades. The Sierra approves.",
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
                {["GREER + LEBLANC MEET", "UNIFOR WANTS SIERRA AT OSHAWA", "SECTION 338: 7 DAYS", "'70 GMC SIERRA 1500"].map((tag) => (
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
              alt="Greer and LeBlanc Meet in Washington — Unifor Presses GM for Sierra Production at Oshawa — Baywash Daily Briefing Edition No. 97"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 97 — Wednesday, August 12, 2026 — Greer + LeBlanc Meet / Unifor Wants Sierra at Oshawa / 7 Days to August 19</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Greer + LeBlanc Meet for Third Time in Three Weeks — No Deal Announced — Unifor Presses GM to Build GMC Sierra at Oshawa
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 GMC Sierra 1500 396</span>
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
