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

const BRIEFING_NUMBER = 99;
const BRIEFING_DATE = "August 14, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/hMBKJQPDrpBeQawe.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/apoBCCIqJtzUaiNa.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/AZgbYZckOKzrzAYD.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OaHdcvgVOIHWodjw.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KtbkUrUjPnCTYbEI.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "GREER: TRUMP + CARNEY TO GET OPTIONS / FOURTH MEETING IN 3 WEEKS / NO DEAL SIGNED / AUG 19: 5 DAYS",
    tagColor: "#b91c1c",
    headline: "Greer: Trump and Carney Will Get ‘Options’ — Talks Move Toward a Political Decision — 5 Days to August 19",
    summary: "U.S. Trade Representative Jamieson Greer says the U.S. president and Canadian prime minister will now be given ‘options’ after the latest Canada-U.S. trade talks — the clearest public indication yet that negotiators are packaging choices for political decisions. Greer described the meetings as ‘good’ and ‘cordial.’ Trade Minister Dominic LeBlanc and chief negotiator Janice Charette met Greer for the second time this week and the fourth time in three weeks; a source told CBC that Charette returned to the USTR office to keep working late into the evening. CBC reports both sides are working toward a potential path to put before Trump as early as Monday. No agreement has been announced, and the Section 338 deadline remains August 19.",
    whyItMatters: "A decision package is not a deal, but it is a more concrete signal than another round of vague statements. Keep ordering and pricing tied to confirmed supplier terms, not political headlines. This week, have your major suppliers reconfirm CUSMA origin and lead times on regular service parts; CUSMA-compliant auto parts retain their separate Section 232 exemption.",
    source: "CBC News — August 13–14, 2026",
    sourceUrl: "https://www.cbc.ca/news/politics/trade-tariff-talks-canada-us-canada-dominic-leblanc-jamieson-greer-9.7305811",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "DETROIT 3 WARNING / 50% U.S.-CONTENT RULE / $2B ANNUAL COST EACH / GM TARIFF BILL: $2.5–$3.5B",
    tagColor: "#0369a1",
    headline: "Detroit Automakers Warn Proposed CUSMA Rewrite Could Add US$2 Billion a Year — Per Company",
    summary: "Detroit automakers are preparing to lobby against U.S. proposals that would make lower vehicle tariffs conditional on at least 50% U.S.-made content and raise the overall North American-content threshold above the current 75%. Reuters reports estimates at two automakers that the changes would add at least US$2 billion in annual costs for each Detroit automaker. The companies are already absorbing steep tariff costs: GM expects gross tariff expenses of US$2.5 billion to US$3.5 billion this year, while Ford has estimated a net impact of about US$1 billion. The proposed CUSMA changes are not final rules, but they show why the tariff dispute reaches far beyond the border crossing.",
    whyItMatters: "Ontario shops operate inside the same regional parts and vehicle ecosystem. A tougher content test can raise costs, complicate sourcing and affect launch timing long before it shows up as a retail price change. Treat this as a risk signal, not a reason to buy ahead: keep a 30-day buffer only on predictable, fast-moving parts and ask suppliers where their replacement components are sourced.",
    source: "Reuters — August 13, 2026",
    sourceUrl: "https://www.reuters.com/business/autos-transportation/detroit-automakers-fear-north-american-trade-deal-revamp-could-cost-them-2026-08-13/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR WANTS GMC SIERRA AT OSHAWA / SIERRA OUTSOLD SILVERADO / 30% OF GM MEMBERS ON LAYOFF / TARGET: AUG 21",
    tagColor: "#15803d",
    headline: "Unifor’s Sierra-at-Oshawa Push Is a Test of GM’s Canadian Production Commitment",
    summary: "Unifor is pressing GM to add GMC Sierra production at Oshawa Assembly alongside Chevrolet Silverado production. The union notes that GM sold 29,483 Sierras in Canada in the first half of 2026, versus 27,740 Silverados, yet Oshawa makes only Chevrolet-branded full-size pickups. GM Authority reports that Oshawa was previously expected to focus on Silverado HD production, with roughly 80,000 trucks targeted annually, while GM has not specified the next-generation pickup mix. The request comes after Oshawa lost a production shift earlier this year, cutting roughly 700 unionized positions. More than 4,600 members are covered by the talks; Unifor says about 30% are on layoff, including 1,050 at idled CAMI. The target date for a tentative agreement is August 21.",
    whyItMatters: "Canadian pickup allocation directly shapes work-truck availability, fleet turnover and future service demand. A Sierra decision would be a material production commitment, but it remains a union request — not a GM announcement. Keep regular GM service work moving and watch the August 21 target for any investment or product-allocation signal.",
    source: "GM Authority / Unifor — August 10–13, 2026",
    sourceUrl: "https://gmauthority.com/blog/2026/08/unifor-pressing-gm-to-build-gmc-sierra-at-oshawa-plant/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏛️",
    text: "Greer says Trump and Carney will receive ‘options’ after the latest talks. LeBlanc and Charette met Greer twice this week; CBC reports a potential pitch could reach Trump as early as Monday.",
    sourceUrl: "https://www.cbc.ca/news/politics/trade-tariff-talks-canada-us-canada-dominic-leblanc-jamieson-greer-9.7305811",
  },
  {
    icon: "🍁",
    text: "Ontario Premier Doug Ford says he would put U.S. alcohol back on shelves if a fair agreement protects Ontario steel, autos, forestry, agriculture and manufacturing.",
    sourceUrl: "https://www.cbc.ca/news/politics/trade-tariff-talks-canada-us-canada-dominic-leblanc-jamieson-greer-9.7305811",
  },
  {
    icon: "🚛",
    text: "If you export a Section 338-covered good: U.S. entry date, not Canadian ship date, determines duty. A shipment leaving August 18 but entering after 12:01 a.m. ET August 19 may face the tariff.",
    sourceUrl: "https://www.ghy.com/trade-compliance/section-338-tariffs-how-canadian-exporters-should-prepare-before-august-19/",
  },
  {
    icon: "🏭",
    text: "GM bargaining covers more than 4,600 Unifor members. About 30% are on layoff, including 1,050 CAMI workers. The tentative-agreement target is August 21.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-opens-negotiations-general-motors",
  },
  {
    icon: "⚖️",
    text: "Do not mix tariff regimes: the new Section 338 action applies only to its covered goods, while CUSMA-compliant auto parts retain their separate Section 232 exemption. Five days to August 19.",
    sourceUrl: "https://www.ghy.com/trade-compliance/section-338-tariffs-how-canadian-exporters-should-prepare-before-august-19/",
  },
];

const tipOfTheDay = {
  title: "If You Export Covered Goods, Manage the Entry Date — Not Just the Ship Date",
  text: "For any Section 338-covered goods you send to U.S. customers, call your customs broker and carrier today: the relevant date is the U.S. entry date, not when the shipment leaves your dock. Work backward from the 12:01 a.m. ET August 19 deadline and build a border-delay buffer. For ordinary shop parts purchasing, keep the rule set separate: CUSMA-compliant auto parts retain their Section 232 exemption. Do not create excess inventory based on a rule that applies only to Section 338-covered goods.",
};

const quoteOfTheDay = {
  text: "The president, the prime minister, obviously they’ll be given options and discussions.",
  author: "Jamieson Greer, U.S. Trade Representative",
  title: "Following Canada-U.S. trade talks — August 13, 2026",
};

const rideOfTheDay = {
  name: "1969 Chevrolet Nova SS 396 — Fathom Green, Ontario-Plated",
  description: "Fathom Green, a white vinyl roof and a big-block 396: compact GM muscle with an honest Canadian-garage attitude. The Nova’s simple formula — accessible size, serious torque and no wasted motion — belongs outside an Ontario service bay. Unifor is asking GM to build more of the work trucks Canadians buy. The Nova approves.",
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
                {["GREER: ‘OPTIONS’ FOR LEADERS", "DETROIT 3: $2B COST WARNING", "SECTION 338: 5 DAYS", "'69 CHEVROLET NOVA SS 396"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Friday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Greer Says Trump and Carney Will Receive Trade Options — Detroit Automakers Warn of Costly CUSMA Rewrite — Baywash Daily Briefing Edition No. 99"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 99 — Friday, August 14, 2026 — Greer: ‘Options’ for Trump + Carney / Detroit 3 Cost Warning / 5 Days to August 19</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Greer Says Trump + Carney Will Get ‘Options’ — Detroit Automakers Warn of a Costly CUSMA Rewrite
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '69 Chevrolet Nova SS 396</span>
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
