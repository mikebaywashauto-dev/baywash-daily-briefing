// 2026-05-15
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 13;
const BRIEFING_DATE = "May 15, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/fNpDujkcutfmgxKf.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/tavChCOezfJnysBG.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XHOTAPuBIYEAulir.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OkRdGvodfZnOtVro.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZEQsZUCsDpyKGlEf.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "LABOUR",
    tagColor: "#e05a1a",
    headline: "Technician Shortage Reaches Critical Levels as Canadian Shops Report Record Vacancy Rates Heading Into Summer",
    summary: "A new wave of data from the Automotive Industries Association of Canada and provincial apprenticeship registries confirms what shop owners across the country have been feeling for months: the technician pipeline is not keeping pace with demand. With the national fleet aging and repair volumes rising, shops from Victoria to Halifax are reporting that open bay positions are going unfilled for weeks or months at a time. The average time-to-hire for a licensed automotive service technician in Canada now exceeds 11 weeks, according to industry recruiters, compared to roughly six weeks in 2022. Compounding the challenge is a demographic cliff — a significant cohort of Red Seal technicians are approaching retirement age, and the apprenticeship system has not produced enough graduates to replace them. Industry associations are calling on Ottawa to expand the Apprenticeship Incentive Grant and streamline inter-provincial credential recognition to allow qualified technicians to move more freely across the country.",
    whyItMatters: "If you are struggling to find qualified technicians, you are not alone — and the situation is unlikely to improve on its own. The most effective shops are addressing this proactively by building relationships with local trade schools, offering structured apprenticeship programs, and creating clear career progression paths that make your shop an attractive long-term destination. Consider reaching out to your provincial apprenticeship office to become a registered training employer — it costs little and gives you early access to emerging talent. Retention is equally critical: losing a licensed technician to a competitor costs far more than the raise it would have taken to keep them. Review your compensation structure and shop culture before your next vacancy becomes a crisis.",
    source: "AIA Canada / Auto Service World",
    sourceUrl: "https://www.autoserviceworld.com/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "INDUSTRY",
    tagColor: "#dc2626",
    headline: "Honda Indefinitely Suspends $15B Ontario EV Plant — A Stark Signal for Canada's Electrification Ambitions",
    summary: "Honda Motor Co. has confirmed it is indefinitely suspending development of its planned $15-billion electric vehicle and battery manufacturing complex in Alliston, Ontario — a project that had been hailed as a cornerstone of Canada's EV transition strategy. The announcement, made on May 14, comes as Honda posted its first-ever annual operating loss, driven by a combination of softening global EV demand, U.S. tariff pressures, and intensifying competition from lower-cost Chinese automakers. The suspension follows months of signals that the economics of large-scale EV investment in Canada were deteriorating. Ontario Premier Doug Ford and federal Industry Minister François-Philippe Champagne both expressed disappointment, with Champagne stating that Ottawa remains committed to working with Honda on a revised timeline. The decision puts a significant question mark over the broader $43-billion in EV-related manufacturing commitments that Canadian governments have made since 2022, and raises urgent questions about whether the policy framework underpinning those investments remains viable.",
    whyItMatters: "For independent shop owners, Honda's suspension is a reminder that the EV transition will be slower and more uneven than the policy headlines suggest. The practical implication: do not abandon your ICE and hybrid service capabilities in a rush to pivot entirely to EV. The Canadian vehicle fleet will remain predominantly internal combustion for at least another decade, and hybrid vehicles — which require both ICE and electrified drivetrain expertise — are growing rapidly in the repair mix. Mitchell's Q1 2026 data shows hybrid collision claims hitting record highs in Canada. Invest in hybrid training and tooling now; it is the highest-return EV-adjacent investment available to most independent shops today.",
    source: "CBC News / Global News",
    sourceUrl: "https://www.cbc.ca/news/canada/windsor/magna-ceo-auto-industry-9.7197747",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "ECONOMY",
    tagColor: "#2563eb",
    headline: "Iran Conflict Pushes Canadian Gas Prices Toward Record Highs — Shops and Consumers Brace for Sustained Cost Pressure",
    summary: "The ongoing conflict in Iran is disrupting approximately 20 per cent of global oil supply flowing through the Strait of Hormuz, and the effects are now being felt directly at Canadian fuel pumps. Gasoline prices in major Canadian markets have surged to near-record levels, with analysts at GasBuddy and the Canadian Fuels Association warning that prices could approach or exceed the 2022 highs if the conflict intensifies. The IEA projects global oil supply to decline by up to eight million barrels per day, and Brent crude briefly touched $120 per barrel this week. For the Bank of Canada, the timing is deeply uncomfortable: the policy rate sits at 2.25 per cent following a hold in January, and the central bank is now caught between a weakening labour market — Canada lost 84,000 jobs in February — and a fresh energy-driven inflation shock that has not yet fully appeared in the CPI data. Most economists now expect rates to remain on hold through the summer, prolonging the affordability squeeze on consumers and businesses alike.",
    whyItMatters: "Elevated fuel prices are a double-edged sword for the aftermarket. On one hand, they suppress discretionary driving in the short term, which can modestly reduce wear-and-tear repair volumes. On the other hand, they accelerate the financial pressure on consumers to keep their existing vehicles running rather than purchasing new ones — a structural tailwind for repair demand. More immediately, rising fuel costs increase your shop's operating expenses: delivery charges from your jobber will rise, and any shop vehicles or courtesy cars will cost more to run. Review your pricing structure now. If your labour rate has not been adjusted in the past 12 months, this is the moment to do it — your customers understand that costs are rising across the board.",
    source: "Auto Service World / Global News",
    sourceUrl: "https://www.autoserviceworld.com/from-the-magazine-turbulence-tariffs-and-the-road-ahead-what-shop-owners-need-to-know/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🔧",
    text: "Magna International CEO Swamy Kotagiri told the Ontario Auto Forum this week that the industry must 'control the controllable' — urging policy-makers to diagnose problems correctly before deploying solutions, warning that misdiagnosis leads to confidently wrong answers that Canada will live with for decades.",
    sourceUrl: "https://www.cbc.ca/news/canada/windsor/magna-ceo-auto-industry-9.7197747",
  },
  {
    icon: "📊",
    text: "Mitchell's Q1 2026 Plugged-In report reveals hybrid vehicle collision claims hit a record high in Canada, with mild hybrid (MHEV) claims up 5.28% quarter-over-quarter — a clear signal that hybrid repair competency is now a competitive necessity for independent shops.",
    sourceUrl: "https://www.mitchell.com/insights/article/auto-physical-damage/plugged-in-ev-collision-insights-q1-2026",
  },
  {
    icon: "🏗️",
    text: "Canada's new government announced regulatory streamlining measures on May 8 aimed at accelerating major project approvals and improving supply chain efficiency — a development that could reduce red tape for auto parts importers and manufacturers navigating the current trade environment.",
    sourceUrl: "https://www.canada.ca/en/one-canadian-economy/news/2026/05/canadas-new-government-to-simplify-and-accelerate-canadas-regulatory-process.html",
  },
  {
    icon: "💰",
    text: "Boyd Group Services — Canada's largest collision repair chain — reported all-time record Q1 2026 revenue of $997 million, up 28% year-over-year, with adjusted EBITDA rising 52%. The results underscore the strength of the repair market even as new vehicle sales soften.",
    sourceUrl: "https://finance.yahoo.com/news/boyd-group-services-reports-q1-131002061.html",
  },
];

const tipOfTheDay = {
  title: "Lock In Parts Pricing Before the Next Oil Shock Hits Your Costs",
  text: "With Brent crude near $120 and Canadian gas prices approaching record highs, parts and freight costs are about to move. Contact your primary jobber this week and ask two questions: Which product lines are subject to imminent price increases? And can you lock in current pricing on high-turn SKUs with a forward order? Many jobbers will work with you on this, especially for established accounts. Focus on categories with significant petrochemical content — rubber components, adhesives, fluids, and plastic trim — as these are most exposed to energy cost pass-throughs. A modest investment in strategic inventory today can protect your margins for the next 60 to 90 days.",
};

const quoteOfTheDay = {
  text: "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.",
  author: "Charles Darwin",
  title: "A Principle Every Shop Owner Should Post on Their Wall in 2026",
};

const rideOfTheDay = {
  name: "1969 Pontiac GTO 'The Judge'",
  description: "The 1969 Pontiac GTO 'The Judge' is one of the most iconic and collectible muscle cars ever produced — and one with deep Canadian roots. Assembled at GM's Oshawa, Ontario plant, the Judge was Pontiac's answer to the budget muscle car movement, packing a 400 cubic-inch V8 with the Ram Air III package producing 366 horsepower. Its bold Carousel Red paint, rear spoiler, and Judge graphics made it an instant showroom sensation. Only 6,725 hardtops and 108 convertibles were built for the 1969 model year, making survivors extraordinarily rare today. The GTO Judge represents the pinnacle of the golden age of North American muscle — a time when Canadian assembly plants were building some of the most exciting automobiles on the planet.",
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
              <h2 className="font-['Oswald'] text-6xl md:text-8xl font-bold leading-[0.9] uppercase">
                The Daily <br />
                <span className="text-[#e05a1a]">Briefing.</span>
              </h2>
            </div>
            <div className="md:w-1/3 text-right">
              <p className="text-sm text-gray-600 leading-relaxed italic">
                "The essential morning intelligence for the Canadian automotive professional. 
                Curated daily for shop owners, technicians, and industry leaders."
              </p>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <AnimatedSection className="mb-16">
          <div className="relative group overflow-hidden bg-[#1a1a1a]">
            <img 
              src={HERO_BANNER} 
              alt="Automotive Workshop" 
              className="w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
              <span className="inline-block bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                Top Intelligence
              </span>
              <h3 className="font-['Oswald'] text-4xl md:text-5xl text-white font-bold leading-tight uppercase mb-6">
                Technician Crisis, Honda's EV Retreat & Fuel Price Shock: The Three Forces Defining Your Friday
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                A deepening technician shortage, Honda's indefinite suspension of its $15B Ontario EV plant, and 
                near-record gas prices driven by the Iran conflict — today's briefing covers the stories shaping 
                the Canadian aftermarket right now.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Lead Stories */}
          <div className="lg:col-span-8 space-y-16">
            {stories.map((story, index) => (
              <AnimatedSection key={story.id} delay={index * 100}>
                <article className="group">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="relative overflow-hidden aspect-[4/5]">
                        <img 
                          src={story.image} 
                          alt={story.headline}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div 
                          className="absolute top-0 left-0 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest"
                          style={{ backgroundColor: story.tagColor }}
                        >
                          {story.tag}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-['Oswald'] text-3xl font-bold leading-tight uppercase mb-4 group-hover:text-[#e05a1a] transition-colors">
                        {story.headline}
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {story.summary}
                      </p>
                      <div className="bg-[#f0ebe0] border-l-4 border-[#e05a1a] p-4 mb-6">
                        <h5 className="font-bold text-xs uppercase tracking-widest mb-2">Why it matters for your shop:</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {story.whyItMatters}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-['Source_Code_Pro'] text-[10px] text-gray-400 uppercase tracking-widest">
                          Source: {story.source}
                        </span>
                        <a 
                          href={story.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold uppercase tracking-widest text-[#e05a1a] hover:underline"
                        >
                          Read Full Report →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Quick Hits */}
            <AnimatedSection className="bg-[#1a1a1a] text-white p-8">
              <h4 className="font-['Oswald'] text-2xl font-bold uppercase tracking-tight mb-8 border-b border-gray-700 pb-4">
                Quick Hits
              </h4>
              <div className="space-y-8">
                {quickHits.map((hit, i) => (
                  <div key={i} className="group">
                    <div className="flex gap-4 mb-2">
                      <span className="text-xl">{hit.icon}</span>
                      <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        {hit.text}
                      </p>
                    </div>
                    <a 
                      href={hit.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-['Source_Code_Pro'] text-gray-500 uppercase tracking-widest hover:text-[#e05a1a]"
                    >
                      View Source
                    </a>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Tip of the Day */}
            <AnimatedSection className="border-2 border-[#e05a1a] p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#e05a1a] flex items-center justify-center text-white font-bold">!</div>
                <h4 className="font-['Oswald'] text-xl font-bold uppercase tracking-tight">Tip of the Day</h4>
              </div>
              <h5 className="font-bold text-lg mb-3">{tipOfTheDay.title}</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tipOfTheDay.text}
              </p>
            </AnimatedSection>

            {/* Quote of the Day */}
            <AnimatedSection className="bg-[#f5f0e8] border border-gray-200 p-8 relative">
              <span className="absolute top-4 left-4 text-6xl text-gray-200 font-serif leading-none">"</span>
              <div className="relative z-10">
                <p className="text-lg italic text-gray-700 leading-relaxed mb-6">
                  {quoteOfTheDay.text}
                </p>
                <div>
                  <p className="font-bold text-sm uppercase tracking-widest">{quoteOfTheDay.author}</p>
                  <p className="text-xs text-gray-500">{quoteOfTheDay.title}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Ride of the Day */}
            <AnimatedSection className="group">
              <h4 className="font-['Oswald'] text-2xl font-bold uppercase tracking-tight mb-6">Ride of the Day</h4>
              <div className="overflow-hidden bg-[#1a1a1a] mb-4">
                <img 
                  src={rideOfTheDay.image} 
                  alt={rideOfTheDay.name}
                  className="w-full aspect-video object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h5 className="font-bold text-xl mb-2">{rideOfTheDay.name}</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                {rideOfTheDay.description}
              </p>
            </AnimatedSection>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16 px-6 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
            <div>
              <h4 className="font-['Oswald'] text-xl font-bold uppercase mb-6">About the Briefing</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Baywash Daily Briefing is a premium intelligence service for the Canadian automotive aftermarket. 
                We provide daily updates on trade, technology, and labor trends that matter to your business.
              </p>
            </div>
            <div>
              <h4 className="font-['Oswald'] text-xl font-bold uppercase mb-6">Quick Links</h4>
              <ul className="text-sm text-gray-400 space-y-3">
                <li><Link href="/" className="hover:text-[#e05a1a] transition-colors">Today's Edition</Link></li>
                <li><Link href="/archive" className="hover:text-[#e05a1a] transition-colors">Archive</Link></li>
                <li><a href="#" className="hover:text-[#e05a1a] transition-colors">Shop Portal</a></li>
                <li><a href="#" className="hover:text-[#e05a1a] transition-colors">Industry Reports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Oswald'] text-xl font-bold uppercase mb-6">Connect</h4>
              <p className="text-sm text-gray-400 mb-4">Stay updated with the latest industry news.</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#e05a1a] transition-colors cursor-pointer">In</div>
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#e05a1a] transition-colors cursor-pointer">X</div>
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#e05a1a] transition-colors cursor-pointer">Fb</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-['Source_Code_Pro'] text-gray-500 uppercase tracking-[0.2em]">
            <p>© 2026 Baywash Daily Briefing. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
