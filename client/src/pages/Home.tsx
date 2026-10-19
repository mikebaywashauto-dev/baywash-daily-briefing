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

const BRIEFING_NUMBER = 144;
const BRIEFING_DATE = "October 19, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GNwLLVFnPBnJRzCQ.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/oChfKjvqjoNvVmlq.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/pVlbDEUXAlOUxtyd.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NSbdYtFXTDIVJoSD.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/HwCRpVMQWjqKICEs.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "STELLANTIS / STRIKE VOTE / NO AUTOMATIC STRIKE / CHECK FACTS",
    tagColor: "#b91c1c",
    headline: "Stellantis Vote: A Mandate Is Leverage, Not a Parts-Outage Notice",
    summary: "Canadian Press reporting says Unifor held weekend strike-authorization votes for more than 9,000 Canadian Stellantis workers and planned to release results at the start of the week. The prior agreement expired September 20 and bargaining was reported stalled over job security and the idled Brampton plant. The union says a strike authorization gives its bargaining committee authority to call a strike if necessary; it does not automatically mean a strike will take place.",
    whyItMatters: "Use this as a sourcing-and-customer-communication watch, not a reason to declare a strike, lockout, settlement or parts outage. Quote the specific vehicle and part number in front of you, confirm distributor stock and written ETA, and update customers only on a documented order change. The Brampton Roshel MOU remains a potential sale—not a completed transaction, restart or parts forecast.",
    source: "The Canadian Press / BNN Bloomberg — Stellantis Strike-Authorization Vote",
    sourceUrl: "https://www.bnnbloomberg.ca/business/economics/2026/10/16/stellantis-workers-set-to-vote-on-potential-strike-action-this-weekend/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "KIA SELTOS / AWD ONLY / PARK OUTSIDE / VIN FIRST",
    tagColor: "#0369a1",
    headline: "Kia Seltos AWD: Treat the Park-Outside Direction as a VIN-Specific Handoff",
    summary: "Yahoo Autos, citing Transport Canada and 604 Now, reports a Canadian campaign covering more than 48,000 model-year 2024–2026 Kia Seltos AWD vehicles. The report says salt and moisture can contaminate the 4WD control unit beneath the driver’s seat, leading over time to corrosion and a possible short circuit/fire risk, including when the vehicle is off. It says affected owners are instructed to park outside, away from buildings or other vehicles, until the repair is completed.",
    whyItMatters: "Do not generalize this instruction to every Seltos, Kia or water-exposure visit. Check the exact Canadian VIN and current manufacturer direction, document the result and refer an eligible vehicle to the campaign remedy. Keep any independent inspection or repair outside the campaign separately diagnosed and authorized; do not promise a campaign repair from a headline.",
    source: "Yahoo Autos / Transport Canada Reporting — Kia Seltos AWD Campaign",
    sourceUrl: "https://autos.yahoo.com/safety-and-recalls/articles/owners-recalled-kia-vehicles-told-182600665.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "FORD LIGHTING / U.S. FILE / CANADIAN VIN CHECK / NO ASSUMPTION",
    tagColor: "#15803d",
    headline: "Ford LED Headlamp Alert: A U.S. Campaign Is a Canadian VIN Check—Not a Recall Claim",
    summary: "Driving.ca reports a U.S. Ford campaign for 41,748 vehicles: 2025–2027 Expedition SUVs and 2026 F-250, F-350, F-450 and F-550 trucks. The article says contaminants under an LED chip can lead to daytime running lamp, parking-lamp, high-beam or low-beam failure. At publication, it said Transport Canada had not made a counterpart campaign public; the F-150 is not in the reported U.S. scope.",
    whyItMatters: "Do not book every Ford truck as a Canadian recall, replace headlights based on a U.S. notice or include the F-150 in this reported scope. Check the actual Canadian VIN in the manufacturer or Transport Canada record, log the result and separately authorize diagnosis of any active lighting concern. Base roadworthiness guidance on the observed condition and applicable law—not a cross-border headline.",
    source: "Driving.ca — Ford Expedition and HD Truck LED Headlamp Alert",
    sourceUrl: "https://driving.ca/auto-news/driver-info/ford-expedition-hd-trucks-recall-led-headlight-issue-failure",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⚙️",
    text: "The Canadian Press reports more than 9,000 Unifor-represented Stellantis workers voted over the weekend on a strike authorization; a mandate is not an automatic strike.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/economics/2026/10/16/stellantis-workers-set-to-vote-on-potential-strike-action-this-weekend/",
  },
  {
    icon: "🏭",
    text: "The prior Stellantis-Unifor agreement expired September 20; reported bargaining issues include job security and the future of the idled Brampton plant.",
    sourceUrl: "https://vancouver.citynews.ca/2026/10/17/stellantis-workers-begin-voting-on-strike-mandate-as-talks-remain-stalled/",
  },
  {
    icon: "🚙",
    text: "The cited Canadian Kia report applies to more than 48,000 2024–2026 Seltos AWD vehicles—not every Seltos model or Kia vehicle.",
    sourceUrl: "https://autos.yahoo.com/safety-and-recalls/articles/owners-recalled-kia-vehicles-told-182600665.html",
  },
  {
    icon: "🏠",
    text: "The reported interim instruction for an eligible Seltos AWD is to park outdoors, away from buildings or other vehicles, until the manufacturer remedy is completed.",
    sourceUrl: "https://autos.yahoo.com/safety-and-recalls/articles/owners-recalled-kia-vehicles-told-182600665.html",
  },
  {
    icon: "💡",
    text: "Driving.ca’s U.S. Ford LED-headlamp report names 2025–2027 Expedition and 2026 F-250 through F-550 vehicles; the F-150 is not in that reported scope.",
    sourceUrl: "https://driving.ca/auto-news/driver-info/ford-expedition-hd-trucks-recall-led-headlight-issue-failure",
  },
  {
    icon: "🧾",
    text: "At the source’s publication, Transport Canada had not made a counterpart Ford campaign public—so the correct Canadian shop action is a VIN check, not an assumption.",
    sourceUrl: "https://driving.ca/auto-news/driver-info/ford-expedition-hd-trucks-recall-led-headlight-issue-failure",
  },
];

const tipOfTheDay = {
  title: "Use a Five-Field Bulletin Record",
  text: "For every campaign or production headline, record the source country, exact VIN, live Canadian campaign result, current manufacturer instruction and separate authorization for non-campaign work. This one-minute record prevents a U.S. alert, a bargaining update or an owner direction from being mistaken for a repair order you actually own.",
};

const quoteOfTheDay = {
  text: "A strike authorization gives the bargaining committee the authority to call a strike if necessary, it does not automatically mean a strike will take place.",
  author: "Unifor Bargaining Committee",
  title: "Statement carried by The Canadian Press — October 16, 2026",
};

const rideOfTheDay = {
  name: "1970 AMC AMX 390 — Big Bad Blue, Ontario-Plated",
  description: "Big Bad Blue paint, a white cabin and compact 390-powered muscle give this 1970 AMC AMX its Monday presence. Its reminder fits today’s files: establish the exact vehicle, check the record that applies in Canada and never let a broad headline replace a documented repair decision.",
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
                {["Vote ≠ Strike", "Seltos AWD", "Canadian VIN", "'70 AMX"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Monday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Automotive Shop Advisor Checking Documented Part Availability — Baywash Daily Briefing Edition No. 144"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 144 — Monday, October 19, 2026 — Vote ≠ Strike / Seltos AWD / Canadian VIN</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Monday Check: Follow the Specific Record, Not the Broad Headline
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 AMC AMX 390</span>
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
