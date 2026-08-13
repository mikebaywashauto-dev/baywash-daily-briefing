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

const BRIEFING_NUMBER = 98;
const BRIEFING_DATE = "August 13, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NnwNgtqnCxfPqaMp.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dMNfVkvcqNzfwRyr.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VJZijpVCDpLvPVPa.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/qvVPLWWaaIxcJEUo.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GTcxaUpomnvIchCS.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "REPORTED AUTO COMPROMISE / 10–15% TOLERABLE / U.S. CONTENT EXEMPT / NOT A SIGNED DEAL / 6 DAYS",
    tagColor: "#b91c1c",
    headline: "Canada Reportedly Weighs a 10–15% Auto Tariff Compromise — U.S. Content Would Stay Exempt — No Deal Signed",
    summary: "Canadian officials are reportedly considering whether to accept a lower U.S. Section 232 tariff on CUSMA-compliant vehicle exports, rather than hold out for a complete exemption. The reported industry tolerance range is 10% to 15%, down from the current 25% rate, provided U.S.-made content remains excluded from the tariff calculation. Roughly half the content of a Canadian-made vehicle can originate in the United States because of the integrated supply chain. Another option discussed would apply the tariff only to non-North American content, cutting the effective levy further. This is a reported negotiating concept — not an agreement, and it is unclear whether Washington would accept it. Six days remain to August 19.",
    whyItMatters: "This is not an immediate parts-price change or a signed deal. It is the first credible outline of a possible auto compromise, but shops should operate on confirmed rules, not negotiating leaks. For your shop: CUSMA-compliant auto parts retain their existing Section 232 exemption; confirm origin status in writing with high-volume suppliers and keep normal pricing conversations separate from vehicle-tariff headlines.",
    source: "Globe and Mail reporting via Yahoo Finance / Daily Sabah — August 12, 2026",
    sourceUrl: "https://finance.yahoo.com/economy/policy/articles/canada-weighs-accepting-us-auto-180830101.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "LATEST U.S. OFFER FALLS SHORT / TALKS DAILY IN WASHINGTON / SECTION 338: 6 DAYS / NO DEAL ANNOUNCED",
    tagColor: "#0369a1",
    headline: "Canada Unhappy With Latest U.S. Tariff Offer — Negotiations Now Daily in Washington — 6 Days to August 19",
    summary: "Reuters, citing two CBC sources, reports that Canadian officials are unhappy with the latest U.S. proposal to ease tariffs. The offer reportedly would lower some tariffs, but not by as much as Canada wants. Negotiators are now meeting daily in Washington; no agreement has been announced. Ottawa is seeking relief on autos, steel, aluminum and forestry products while the White House has tied its August 19 Section 338 threat to what it calls discriminatory treatment of U.S.-made cars, alcohol and dairy goods. The deadline is six days away, and the relevant distinction for automotive businesses remains clear: the Section 338 threat is separate from the existing Section 232 auto rules.",
    whyItMatters: "Daily meetings are progress, but a weaker-than-expected offer means a last-minute agreement is not assured. Use this week to remove uncertainty that you can control: obtain current lead times, written CUSMA-origin confirmation, and a 30-day quote on fast-moving service parts. Avoid speculative buying. The existing CUSMA-compliant auto-parts exemption remains the operational fact to manage.",
    source: "Reuters / CBC News — August 12, 2026",
    sourceUrl: "https://www.reuters.com/business/canada-unhappy-with-latest-us-offer-lower-tariffs-cbc-reports-2026-08-12/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR WANTS GMC SIERRA AT OSHAWA / SIERRA OUTSOLD SILVERADO / 30% OF GM MEMBERS ON LAYOFF / TARGET: AUG 21",
    tagColor: "#15803d",
    headline: "Unifor Wants GMC Sierra Built at Oshawa — A Direct Test of GM's Canadian Production Commitment",
    summary: "Unifor is pressing GM to add GMC Sierra production at Oshawa Assembly alongside the Chevrolet Silverado as bargaining continues. In the first half of 2026, GM sold 29,483 Sierras in Canada versus 27,740 Silverados, but Oshawa builds only the Chevrolet-branded full-size pickup. Unifor says GM sold roughly 300,000 vehicles in Canada last year while assembling about 130,000 here. The request comes after Oshawa lost a production shift earlier this year, cutting roughly 700 unionized positions. More than 4,600 members are covered by the talks; Unifor says approximately 30% are on layoff, including 1,050 at the idled CAMI plant. The target date for a tentative deal is August 21; the contract expires September 20.",
    whyItMatters: "Oshawa pickup allocation affects the Canadian work-truck ecosystem: new-vehicle availability, fleet turnover and the local service pipeline. A Sierra decision would be a meaningful production commitment, but it is a union ask — not a GM announcement. Keep routine GM service work moving and watch August 21 for a potential investment or product-allocation signal.",
    source: "GM Authority / Unifor — August 11–13, 2026",
    sourceUrl: "https://gmauthority.com/blog/2026/08/unifor-pressing-gm-to-build-gmc-sierra-at-oshawa-plant/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🚗",
    text: "Reported auto compromise: a 10%–15% Section 232 rate could be tolerable to industry if U.S.-made content stays excluded. It is a negotiating concept, not a signed deal.",
    sourceUrl: "https://finance.yahoo.com/economy/policy/articles/canada-weighs-accepting-us-auto-180830101.html",
  },
  {
    icon: "🏛️",
    text: "Reuters: Canada is unhappy with the latest U.S. offer, which would reportedly lower some tariffs but not as much as Ottawa seeks. Negotiations are now daily in Washington.",
    sourceUrl: "https://www.reuters.com/business/canada-unhappy-with-latest-us-offer-lower-tariffs-cbc-reports-2026-08-12/",
  },
  {
    icon: "🛻",
    text: "Sierra versus Silverado: 29,483 Sierras sold in Canada in H1 versus 27,740 Silverados. Unifor is asking GM to build both full-size pickups at Oshawa.",
    sourceUrl: "https://gmauthority.com/blog/2026/08/unifor-pressing-gm-to-build-gmc-sierra-at-oshawa-plant/",
  },
  {
    icon: "🏭",
    text: "GM bargaining covers more than 4,600 Unifor members. About 30% are on layoff, including 1,050 CAMI workers. The tentative-agreement target is August 21.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-opens-negotiations-general-motors",
  },
  {
    icon: "⚖️",
    text: "Shop planning rule: CUSMA-compliant auto parts retain their Section 232 exemption. Section 338 is a separate proposed action on designated goods. Six days to August 19.",
    sourceUrl: "https://www.reuters.com/business/canada-unhappy-with-latest-us-offer-lower-tariffs-cbc-reports-2026-08-12/",
  },
];

const tipOfTheDay = {
  title: "Run a Confirmed-Rules Check — Not a Headline-Driven Buying Spree",
  text: "The reported 10%–15% auto-tariff compromise is not a signed deal, so keep your purchasing plan tied to confirmed supplier terms. Today, ask your three largest parts suppliers for a written CUSMA-origin statement on regularly replenished items, their current lead time, and a 30-day quote. Stock only predictable, fast-moving service parts. The key fact for shop operations remains that CUSMA-compliant auto parts retain their Section 232 exemption; do not turn an unconfirmed vehicle-tariff proposal into excess inventory.",
};

const quoteOfTheDay = {
  text: "The two sides are holding daily negotiations in Washington in an effort to work out a deal.",
  author: "Reuters",
  title: "August 12, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet C10 396 — Hugger Orange, Ontario-Plated",
  description: "Hugger Orange with a white lower accent and a period-correct big-block 396 — the kind of truck that earned a living before becoming a classic. Rated at 325 hp in truck trim, it was built for honest work and long days. Unifor wants more full-size pickup production at Oshawa. The C10 approves.",
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
                {["AUTO COMPROMISE REPORTED", "U.S. OFFER FALLS SHORT", "SECTION 338: 6 DAYS", "'70 CHEVROLET C10 396"].map((tag) => (
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
              alt="Reported Canadian Auto Tariff Compromise — Latest U.S. Offer Falls Short — Unifor Sierra Push at Oshawa — Baywash Daily Briefing Edition No. 98"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 98 — Thursday, August 13, 2026 — Auto Compromise Reported / U.S. Offer Falls Short / 6 Days to August 19</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Canada Reportedly Weighs a 10–15% Auto Tariff Compromise — But Latest U.S. Offer Still Falls Short
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Chevrolet C10 396</span>
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
