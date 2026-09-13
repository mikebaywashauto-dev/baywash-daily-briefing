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

const BRIEFING_NUMBER = 129;
const BRIEFING_DATE = "September 13, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SYiJBWcBYLsuTWYf.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TahOFDJyfwIjbzsr.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mRjZNYGVjTarvBLK.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RnmYylqepzKdJLIv.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/sDWgVQwgZHYLxxVs.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TWO DAYS / SEPT. 15 / U.S. / 122 HTS LINES",
    tagColor: "#b91c1c",
    headline: "Two Days to the U.S. Scope Change: CBP Has Issued the Filing Map",
    summary: "U.S. Customs and Border Protection’s September 11 filing notice says the modified Section 338 treatment applies to certain Canadian goods entered for U.S. consumption, or withdrawn from warehouse, on or after 12:01 a.m. Eastern on September 15. CBP says 122 additional HTSUS classifications will be subject to the regime under headings 9903.03.12 or 9903.03.14; it says classifications under 9903.03.13 do not change.",
    whyItMatters: "This is a future-dated U.S. customs control for specified Canadian goods, not a new rate for every Canadian shop part. Put any genuine U.S.-bound wholesale, specialty-vehicle or customer export job on a broker-controlled list now. Before quoting, obtain the exact HTS result, origin, U.S. entry date, duty treatment, freight and quote expiry in writing. Keep ordinary Canadian service estimates separate.",
    source: "U.S. Customs and Border Protection — CSMS #69851916",
    sourceUrl: "https://content.govdelivery.com/bulletins/gd/USDHSCBP-429db0c?wgt_ref=USDHSCBP_WIDGET_2",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "0% PROVISION / NARROWED SEPT. 15 / U.S. ENTRY / VERIFY",
    tagColor: "#0369a1",
    headline: "A 0% Vehicle/Parts Provision Still Needs the Right U.S. Heading",
    summary: "CBP’s notice identifies HTSUS 9903.03.15 as a 0% additional-rate provision for specified groups that include passenger vehicles, light trucks, medium/heavy-duty vehicles and their parts. But CBP says that, as of September 15, only goods subject to 9903.03.13 are eligible to claim it. The same notice says 122 classifications join 9903.03.12 or .14, while .13 classifications do not change.",
    whyItMatters: "Do not read a generic “vehicle part” description, a CUSMA certificate or a prior quote as proof that a U.S.-bound job gets a 0% result. Ask the customs broker for the exact HTS classification, applicable Chapter 99 heading, any valid Chapter 98 treatment, entry date and landed quote. Document the answer before committing to an export price or completion date.",
    source: "U.S. Customs and Border Protection — September 15 guidance",
    sourceUrl: "https://content.govdelivery.com/bulletins/gd/USDHSCBP-429db0c?wgt_ref=USDHSCBP_WIDGET_2",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CANADA / ACTIVE SURTAX / IMPORTER RECORD / NO DOUBLE COUNT",
    tagColor: "#15803d",
    headline: "Canadian Receiving Is Still a Separate Importer Record",
    summary: "CBSA says Canada’s active United States Surtax Order applies 15%, 25% or 50% of value for duty only to listed U.S.-origin goods imported into Canada. For commercial imports, the importer declares the applicable surtax code on its Commercial Accounting Declaration. CBSA also says that where the 2026 Order and the Steel Derivative Goods Surtax Order could both apply, only the 2026 Order’s surtax applies; those two Canadian surtaxes are not cumulative.",
    whyItMatters: "Your distributor, importer of record or broker—not the service writer—must confirm the part number’s tariff item, U.S. marking/origin, Canadian entry result, landed price, stock and quote expiry. Keep that written Canadian receiving record with the job and avoid double-counting the named surtaxes. It does not establish a result for a separate U.S.-bound export.",
    source: "Canada Border Services Agency — Customs Notice 26-23",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "CBP says September 15 changes apply at 12:01 a.m. Eastern to specified Canadian goods entered for U.S. consumption or withdrawn from warehouse for consumption.",
    sourceUrl: "https://content.govdelivery.com/bulletins/gd/USDHSCBP-429db0c?wgt_ref=USDHSCBP_WIDGET_2",
  },
  {
    icon: "🔢",
    text: "CBP says 122 additional HTSUS classifications will be subject to Section 338 under 9903.03.12 or .14, with no changes to classifications under .13.",
    sourceUrl: "https://content.govdelivery.com/bulletins/gd/USDHSCBP-429db0c?wgt_ref=USDHSCBP_WIDGET_2",
  },
  {
    icon: "📋",
    text: "CBP says certain Chapter 98 entries generally avoid the additional Section 338 duty, subject to its listed exceptions; some 9802 cases use repair, alteration or processing value rather than full entered value.",
    sourceUrl: "https://content.govdelivery.com/bulletins/gd/USDHSCBP-429db0c?wgt_ref=USDHSCBP_WIDGET_2",
  },
  {
    icon: "🇨🇦",
    text: "For commercial Canadian imports, CBSA says proof of origin may be an invoice or other document with the CUSMA Annex 5-A minimum data elements.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🧾",
    text: "CBSA lists CAD surtax codes 26186A, 26186B and 26186C for the current 15%, 25% and 50% Canadian rates, respectively.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
];

const tipOfTheDay = {
  title: "Build an After-Midnight Export File",
  text: "For any job that may enter the U.S. on or after September 15, log the part number/SKU, actual HTS classification, origin, Chapter 99 result if provided, any asserted Chapter 98 treatment, U.S. entry date, broker confirmation, freight, stock/ETA and customer quote expiry. Keep Canadian receiving on a separate sheet. Do not turn a pending classification result into a blanket customer surcharge.",
};

const quoteOfTheDay = {
  text: "The attached list provides the complete list of HTSUS classifications subject to Section 338 duties as of September 15, 2026, including 122 additional HTSUS classifications.",
  author: "U.S. Customs and Border Protection",
  title: "CSMS #69851916 — September 11, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Chevelle SS 454 — Cranberry Red, Ontario-Plated",
  description: "Cranberry Red paint, black SS stripes and 454 big-block muscle make this 1970 Chevrolet Chevelle SS the right iron for an Ontario shop on a Sunday evening. Its rule for the bay is equally direct: put cross-border work into the right file, then rely on the exact tariff line and a verified broker or supplier response before you promise a price or date.",
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
                {["Two Days: Sept. 15", "CBP: 122 Lines", "Imports: Separate", "'70 Chevelle SS"].map((tag) => (
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
              alt="Canadian Automotive Shop Owner Reviewing Cross-Border Parts Records — Baywash Daily Briefing Edition No. 129"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 129 — Sunday, September 13, 2026 — Two Days / CBP Map / Import Split</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Two Days to the U.S. Customs Scope Change
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Chevrolet Chevelle SS 454</span>
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
