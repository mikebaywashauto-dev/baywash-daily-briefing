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

const BRIEFING_NUMBER = 136;
const BRIEFING_DATE = "September 20, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xiqmTDsYeymBnEjx.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/yrZwqnnOTXbjSfbI.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EhHIwxbvqiaSpMwf.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CoTBgGCzeViRkejD.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/AkogMSjkpoLOiSRg.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "STELLANTIS / EXPIRY TODAY / CONCILIATION / NO LEGAL STRIKE",
    tagColor: "#b91c1c",
    headline: "Expiry Day Is Not Legal Strike Day",
    summary: "The Stellantis collective agreement expires at 11:59 p.m. today. In its September 16 member update, Unifor said it will not be in a legal strike position as of September 20 because the parties remain in conciliation, which must finish before either a legal strike or lockout position exists. The union says bargaining is at impasse and a strike remains possible, but local members would first be notified of any strike-vote meetings.",
    whyItMatters: "This is a verification watch, not a confirmed work stoppage or parts outage. Keep open repairs anchored to the actual part number, documented distributor stock, written ETA and quote expiry. If labour status changes, update the file from a verified union, company or regulator source—do not preload a customer surcharge.",
    source: "Unifor — Stellantis Membership Update",
    sourceUrl: "https://autotalks.uniforautohub.ca/stellantis_membership_update_2026_09_16",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "BRAMPTON / WINDSOR / FOOTPRINT / WATCH, NOT PREDICT",
    tagColor: "#0369a1",
    headline: "Brampton and Windsor Are Different Watch Points",
    summary: "The Windsor Star reports Brampton’s future, Windsor’s third shift and the wider Canadian footprint are bargaining issues. It reports the Roshel arrangement concerns the idled Brampton plant, while Unifor says it has not set a strike deadline. Those facts do not confirm a completed Brampton sale, a replacement vehicle program, a production restart, a strike or an immediate interruption in any named service part.",
    whyItMatters: "Separate regional manufacturing risk from a customer’s repair job. For parts you may need Monday, ask the distributor for the exact SKU, origin, on-hand stock, confirmed ETA, landed-price basis and written quote validity. Do not turn one plant headline into a forecast for every OE or aftermarket component.",
    source: "Windsor Star — Stellantis Bargaining Report",
    sourceUrl: "https://windsorstar.com/news/strike-threat-hangs-over-windsor-assembly-plant-as-brampton-fight-continues-with-stellantis/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CANADA / 15–50% / ORIGIN / CAD / NON-CUMULATIVE",
    tagColor: "#15803d",
    headline: "The CAD File Decides the Canadian Inbound Result",
    summary: "CBSA’s active notice says Canada’s U.S. surtax applies at 15%, 25% or 50% only to listed goods originating in the U.S., calculated on value for duty. Commercial proof of origin may be an invoice or document containing CUSMA minimum data elements. When both Canada’s United States Surtax Order and Steel Derivative Goods Surtax Order could apply, CBSA says only the U.S. Surtax Order applies—they do not cumulate.",
    whyItMatters: "For a potentially affected inbound part, retain the SKU, origin, tariff item, value-for-duty treatment, invoice and broker/CAD result before revising a quote. The relevant CAD codes are 26186A, 26186B and 26186C as applicable. This customs rule does not make every tool or repair part surcharge-free or surchargeable.",
    source: "Canada Border Services Agency — Customs Notice 26-23",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⏰",
    text: "The Stellantis agreement expires at 11:59 p.m. today, but Unifor says it will not be in a legal strike position as of September 20 while conciliation remains incomplete.",
    sourceUrl: "https://autotalks.uniforautohub.ca/stellantis_membership_update_2026_09_16",
  },
  {
    icon: "🗳️",
    text: "Strike action remains possible, but Unifor says members would be notified locally if the next step—strike-vote meetings—becomes necessary.",
    sourceUrl: "https://autotalks.uniforautohub.ca/stellantis_membership_update_2026_09_16",
  },
  {
    icon: "🏭",
    text: "Brampton’s possible Roshel transaction and Windsor third-shift protection remain bargaining matters—not confirmed sale, restart, allocation or service-parts outcomes.",
    sourceUrl: "https://windsorstar.com/news/strike-threat-hangs-over-windsor-assembly-plant-as-brampton-fight-continues-with-stellantis/",
  },
  {
    icon: "🇨🇦",
    text: "Canada’s U.S. surtax applies only to listed U.S.-origin goods at 15%, 25% or 50% of value for duty; commercial accounting uses 26186A, 26186B or 26186C as applicable.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🧾",
    text: "CBSA says its U.S. Surtax Order and Steel Derivative Goods Surtax Order do not cumulate when both would otherwise apply; only the U.S. Surtax Order applies.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
];

const tipOfTheDay = {
  title: "Sunday-to-Monday Status Board",
  text: "Before Monday, keep three columns: verified labour status with source/time; open parts by SKU, origin, stock, ETA and quote expiry; and customs proof with tariff item, value-for-duty basis and broker/CAD result. Update only when a verified change occurs. Do not pre-load a blanket surcharge.",
};

const quoteOfTheDay = {
  text: "Unifor will not be in a legal strike position as of September 20, 2026.",
  author: "Unifor",
  title: "Stellantis Membership Update — September 16, 2026",
};

const rideOfTheDay = {
  name: "1970 Ford Mustang Mach 1 428 Cobra Jet — Grabber Blue, Ontario-Plated",
  description: "Grabber Blue paint, the blackout hood and 428 Cobra Jet stance make this 1970 Mustang Mach 1 a proper Sunday Ontario shop feature. Its reminder suits Monday planning: a strong story is not a parts quote—use the documented SKU, actual origin, stock, landed-price basis and expiry before promising the repair.",
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
                {["Expiry ≠ Strike", "Brampton + Windsor", "CAD Proof", "'70 Mach 1"].map((tag) => (
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
              alt="Canadian Automotive Shop Owner Reviewing a Sunday Status Board — Baywash Daily Briefing Edition No. 136"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 136 — Sunday, September 20, 2026 — Expiry / Conciliation / CAD Proof</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Expiry Day: Verify Before You Quote
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Ford Mustang Mach 1</span>
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
