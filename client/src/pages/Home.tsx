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

const BRIEFING_NUMBER = 108;
const BRIEFING_DATE = "August 23, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VOKAOyXhRlrCNeJE.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/plNBCVagzFNkNPAz.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TtjEIhYaRRMHGxFi.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/UFfAyqdjDBhDgmVh.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gKZivaYNalKBsrFS.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CANADA RESPONSE / COUNTER-TARIFFS START SEP. 8 / TARGETS: STEEL, DAIRY, APPLIANCES, ELECTRONICS",
    tagColor: "#b91c1c",
    headline: "Canada’s Dollar-for-Dollar Counter-Tariffs Start September 8 — Details Still to Come",
    summary: "Canada’s response to the new U.S. Section 338 tariffs now has a date. Prime Minister Mark Carney says Canada’s matching counter-tariffs will begin September 8, the day after Labour Day. The federal government has named steel, dairy, appliances, agricultural equipment, pulp and paper, and electronics as target sectors, with detailed measures and support for affected workers and businesses to be announced in the coming days. Carney suspended talks and returned Canada’s negotiating team to Ottawa after rejecting what he called a bad deal. U.S. Trade Representative Jamieson Greer said Saturday that no new talks are planned.",
    whyItMatters: "September 8 is a planning date, not a reason to reprice every repair today. The Canadian tariff-code list is not yet published. Ask suppliers to flag any U.S.-sourced line that could be affected, especially electronics, shop equipment and special orders, then use a written, part-specific update rather than a blanket surcharge.",
    source: "CityNews Ottawa / Canadian Press — August 22, 2026",
    sourceUrl: "https://ottawa.citynews.ca/2026/08/22/carney-to-hold-news-conference-after-failed-trade-talks-with-u-s/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "UNIFOR–GM TENTATIVE DEAL / 4,600+ MEMBERS / RATIFICATION: AUG. 29–30",
    tagColor: "#15803d",
    headline: "Unifor and GM Reach Tentative Agreements Covering More Than 4,600 Ontario Workers",
    summary: "Unifor announced tentative agreements with General Motors on Saturday after bargaining that began August 10. The agreements cover more than 4,600 members at Oshawa Assembly, CAMI Assembly in Ingersoll, St. Catharines Propulsion and the Woodstock Parts Distribution Centre. Unifor National President Lana Payne says the deal delivers strong income and benefit gains; the GM Master Bargaining Committee has unanimously endorsed it. The agreements still require member ratification at meetings scheduled for August 29 and 30, and detailed terms have not yet been released.",
    whyItMatters: "This removes an immediate strike-risk headline, but it is not final until members vote. Do not assume a plant investment, restart schedule or specific production commitment until the ratification materials are released. For now, it is a positive stability signal for Ontario’s GM-linked parts and service ecosystem — especially at Oshawa, CAMI, St. Catharines and Woodstock.",
    source: "Unifor / Reuters — August 22, 2026",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-reaches-tentative-agreements-general-motors",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SHOP ACTION / U.S. TARIFFS: IN FORCE / CANADIAN LIST: PENDING / TWO-COLUMN EXPOSURE MAP",
    tagColor: "#0369a1",
    headline: "Run a Two-Column Parts Check: U.S. Tariff Exposure Now, Canadian Retaliation Exposure Next",
    summary: "The U.S. Section 338 tariffs are already in force on a targeted list that includes a wide range of Canadian goods, some previously protected by CUSMA. The new U.S. levies are import taxes paid by U.S. importers; the effect on a Canadian independent shop is indirect and depends on supplier sourcing and product flow. Canada’s September 8 response will target named sectors including electronics, but the detailed Canadian tariff-code list is still pending. This makes the next best move administrative: distinguish a part with current supplier exposure from a product that might be affected later.",
    whyItMatters: "Build two short lists: first, Canadian-origin or cross-border supplier lines that could face current U.S. disruption; second, U.S.-sourced lines that might face Canadian counter-tariffs September 8. For controllers, modules and expensive special orders, record origin, current price, availability and quote expiry. Keep normal service-line stock moving and do not forward-buy without a confirmed supplier notice.",
    source: "PBS NewsHour / Associated Press — August 22, 2026",
    sourceUrl: "https://www.pbs.org/newshour/economy/what-to-know-about-trumps-50-tariffs-on-canadian-goods-that-just-went-into-effect",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "Canada’s dollar-for-dollar retaliatory tariffs are scheduled to begin Sept. 8. Detailed tariff codes and affected-sector supports are still to come.",
    sourceUrl: "https://ottawa.citynews.ca/2026/08/22/carney-to-hold-news-conference-after-failed-trade-talks-with-u-s/",
  },
  {
    icon: "🏭",
    text: "Unifor and GM reached tentative agreements for more than 4,600 Ontario workers at Oshawa, CAMI, St. Catharines and Woodstock.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-reaches-tentative-agreements-general-motors",
  },
  {
    icon: "🗳️",
    text: "The GM agreements are unanimously endorsed by Unifor’s bargaining committee but remain subject to member ratification Aug. 29–30; detailed terms are not public yet.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-reaches-tentative-agreements-general-motors",
  },
  {
    icon: "🔌",
    text: "For shop operators, build a supplier-specific exposure list for electronic modules, controllers, special orders and U.S.-sourced lines — not a blanket tariff fee.",
    sourceUrl: "https://www.pbs.org/newshour/economy/what-to-know-about-trumps-50-tariffs-on-canadian-goods-that-just-went-into-effect",
  },
  {
    icon: "📦",
    text: "The U.S. 50% list is already in force; the future Canadian counter-list begins Sept. 8. Keep the two trade questions separate in your estimates.",
    sourceUrl: "https://www.pbs.org/newshour/economy/what-to-know-about-trumps-50-tariffs-on-canadian-goods-that-just-went-into-effect",
  },
];

const tipOfTheDay = {
  title: "Make a Two-Column Parts Exposure Sheet",
  text: "Create one column for lines potentially affected by the U.S. tariff landscape today and a second for U.S.-sourced lines that could be affected when Canada’s counter-tariffs begin Sept. 8. For each expensive special order, record origin, supplier, current quote, availability and expiry date. Change a customer estimate only when your supplier gives you a real part-specific update — not because a broad tariff headline appeared.",
};

const quoteOfTheDay = {
  text: "Our bargaining committee worked diligently to reach these agreements, which deliver strong income and benefit gains, amid some of the most challenging times in our history.",
  author: "Lana Payne, Unifor National President",
  title: "Announcing tentative agreements with General Motors — August 22, 2026",
};

const rideOfTheDay = {
  name: "1970 Dodge Challenger R/T 440 Six Pack — Go Mango, Ontario-Plated",
  description: "Go Mango paint, a black hood treatment and the 440 Six Pack under the hood: this 1970 Dodge Challenger R/T belongs outside an Ontario repair shop after a rainy Sunday shift. Canada’s response has a date; the Challenger says make the list, check the part and keep moving.",
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
                {["SECTION 338: IN FORCE", "CANADA RESPONSE: SEP. 8", "GM TENTATIVE DEAL", "'70 CHALLENGER R/T 440"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Sunday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canada Prepares September 8 Retaliation as GM Reaches Tentative Agreements — Baywash Daily Briefing Edition No. 108"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 108 — Sunday, August 23, 2026 — Canada Response Sept. 8 / GM Tentative Deal / Parts Exposure Map</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Canada’s Response Has a Date — GM Reaches a Tentative Deal
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
