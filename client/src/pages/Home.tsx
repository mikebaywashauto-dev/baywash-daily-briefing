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

const BRIEFING_NUMBER = 112;
const BRIEFING_DATE = "August 27, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FvjHOLbZxyDgFphj.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JCjVuFPgYxtguIQG.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/nbpkQSNQUqhKDwLj.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KHKZedrdbamRHPJn.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/vfYHgcBjYjtiTzWF.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CANADA COUNTER-TARIFFS / SEP. 8 / C$27.6B / 700+ LINES",
    tagColor: "#b91c1c",
    headline: "Canada’s September 8 List Is Targeted — Get the Part, Origin and Code Before You Change the Price",
    summary: "Canada’s C$27.6-billion counter-tariff package begins September 8, with 15%, 25% and 50% rates applied to more than 700 specific U.S. product lines. CBC reports affected categories include tools, machinery and parts, iron and steel products, raw metals and paper products; nearly three-quarters of the listed items are industrial supplies or manufacturing inputs. This is a tariff-code list, not a new duty on every U.S.-sourced repair part.",
    whyItMatters: "Treat September 8 as an operating deadline, not a reason for a blanket surcharge. Ask distributors to verify exposure by part number, country of origin and tariff-code result. Start with high-value tools and shop equipment, imported cables and wiring, modules, and metal-heavy consumables — then adjust an estimate only when a supplier identifies an item-specific change.",
    source: "CBC News — August 26, 2026",
    sourceUrl: "https://www.cbc.ca/news/business/retaliatory-tariffs-biz-reax-9.7320147",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TWO TARIFF CLOCKS / VEHICLES SPARED IN NEW LIST / 2027 THREAT",
    tagColor: "#0369a1",
    headline: "The New Canadian Package Spares Vehicles — But Keep the Existing Auto Measures and 2027 Threat Separate",
    summary: "Canada’s new September 8 retaliation package does not add a new tariff on vehicles; its existing counter-tariffs on U.S. autos remain separately in force. Separately, Trump has threatened 50% duties on Canadian vehicles, trucks and parts from January 1, 2027. Oxford Economics says the prospective U.S. outcome depends in part on whether USMCA-compliant trade receives exemptions, so this is a forward-looking risk — not a new current repair-parts rate.",
    whyItMatters: "Keep separate records for direct Canadian import exposure, existing auto measures and supplier disruption linked to U.S. actions. Confirm origin, country of export, tariff classification and quote expiry with the supplier before pricing a job. Do not tell customers every U.S.-made part is affected, and do not pre-load a 2027 threat into today’s repair estimate.",
    source: "CBT News / Yahoo Finance — August 26, 2026",
    sourceUrl: "https://finance.yahoo.com/news/trumps-canada-auto-tariffs-could-end-up-denting-us-gdp-oxford-economics-110000983.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GM–UNIFOR / VOTE AUG. 29–30 / 4,600+ WORKERS / TERMS PENDING",
    tagColor: "#15803d",
    headline: "GM–Unifor Members Vote This Weekend — CAMI Still Needs a Restart or New Allocation",
    summary: "Tentative GM–Unifor agreements cover more than 4,600 workers at Oshawa Assembly, CAMI Assembly, St. Catharines Propulsion and Woodstock Parts Distribution, with ratification meetings August 29–30 — two days from today. Unifor says the deal secures the Ford pattern and includes income and benefit gains, but full terms remain pending. About 1,050 CAMI members remain laid off; neither a restart nor a new vehicle allocation has been confirmed.",
    whyItMatters: "A ratified deal would improve labour stability at key Ontario GM facilities. It does not by itself create a CAMI program, restore production or guarantee a near-term service-parts-volume change. Maintain normal GM supply relationships, monitor the ratification outcome and wait for confirmed production or allocation announcements before making inventory calls.",
    source: "Unifor / Yahoo Finance — August 22–25, 2026",
    sourceUrl: "https://finance.yahoo.com/economy/policy/articles/gm-promises-pay-raises-better-230004075.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "Canada’s C$27.6B counter-tariffs begin Sept. 8 at 15%, 25% and 50% on more than 700 specific product lines — not every U.S. import.",
    sourceUrl: "https://www.cbc.ca/news/business/retaliatory-tariffs-biz-reax-9.7320147",
  },
  {
    icon: "🔩",
    text: "Tools, machinery/parts, iron and steel goods, raw metals and paper products are among the targeted categories; the new list spares vehicles.",
    sourceUrl: "https://www.cbc.ca/news/business/retaliatory-tariffs-biz-reax-9.7320147",
  },
  {
    icon: "🗂️",
    text: "Shop action: ask key distributors for part number, origin, tariff-code result, price and quote expiry — especially for tools, cables/wiring, modules and metal-heavy consumables.",
    sourceUrl: "https://www.cbc.ca/news/business/retaliatory-tariffs-biz-reax-9.7320147",
  },
  {
    icon: "🏭",
    text: "GM–Unifor ratification meetings are Aug. 29–30 — two days away. About 1,050 CAMI members remain laid off; full terms and a restart/allocation are not confirmed.",
    sourceUrl: "https://finance.yahoo.com/economy/policy/articles/gm-promises-pay-raises-better-230004075.html",
  },
  {
    icon: "↔️",
    text: "Existing Canadian counter-tariffs on U.S. autos remain separate. The threatened U.S. 50% Canadian auto/parts duty is a Jan. 1, 2027 risk with USMCA treatment unsettled.",
    sourceUrl: "https://finance.yahoo.com/news/trumps-canada-auto-tariffs-could-end-up-denting-us-gdp-oxford-economics-110000983.html",
  },
];

const tipOfTheDay = {
  title: "Build a September 8 Distributor Call Sheet",
  text: "Call your key distributors today for five fields on each high-value item: part number, origin, tariff-code result, current price and quote expiry. Start with tools, shop equipment, imported cables/wiring, modules and metal-heavy consumables. Keep the result in the job file, and do not add a blanket surcharge — revise a customer estimate only after a supplier identifies an actual item-specific change.",
};

const quoteOfTheDay = {
  text: "The majority of these goods have been picked as they have readily available domestic alternatives, in an effort to hurt American businesses while minimizing the hit to Canadian consumers and industry.",
  author: "Bradley Saunders, Economist at Capital Economics",
  title: "On Canada’s targeted counter-tariff list — August 26, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Chevelle SS 454 LS6 — Cranberry Red, Ontario-Plated",
  description: "Cranberry Red paint, white SS stripes and the legendary LS6 454 make this 1970 Chevelle the right iron for an Ontario shop on a Thursday night. The Chevelle’s rule for September 8: do not guess at the rate — get the tariff code, supplier confirmation and actual part price first.",
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
                {["CANADA TARIFFS: SEP. 8", "700+ LINES / BY CODE", "GM VOTE: AUG. 29–30", "'70 CHEVELLE LS6"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Thursday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Shop Owner Reviews Supplier Exposure Ahead of September 8 Counter-Tariffs — Baywash Daily Briefing Edition No. 112"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 112 — Thursday, August 27, 2026 — Canada Tariffs Sept. 8 / Verify by Code / GM Vote Aug. 29–30</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                September 8 Is a Shop Deadline: Verify Supplier Exposure Before You Reprice
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Chevrolet Chevelle SS 454 LS6</span>
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
