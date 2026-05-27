// 2026-05-27
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 20;
const BRIEFING_DATE = "May 27, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OmuuJPtiZJROQlNf.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VQDgXfnvZOcStHVN.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ygaxeCCVDtiZcnTf.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QdmDQJLDLlgcwHEz.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OgSFjaBslupWbfEq.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "MANUFACTURING",
    tagColor: "#e05a1a",
    headline: "Ford Oakville Assembly Complex Comes Back to Life — $464.5M Federal Grant Funds Super Duty Pivot, Ontario Matching Funds Confirmed, First Trucks Rolling Off the Line by Late 2026",
    summary: "Ford's Oakville Assembly Complex is buzzing with activity again. The federal government confirmed a $464.5 million grant from the Strategic Response Fund on May 7, 2026, to fund the conversion of the Oakville plant from its previous EV mandate to produce F-Series Super Duty pickup trucks — the most popular commercial and fleet vehicle in Canada. Ontario Economic Development Minister Vic Fedeli confirmed this week that the province is also contributing, though the exact provincial figure will not be disclosed until a fall ribbon-cutting ceremony. The combined federal and provincial commitment represents a significant reversal from the $590 million that both governments had previously pledged to make Oakville an EV hub. Ford's pivot, announced in 2024, reflected the collapse in EV demand in Canada — where EV sales fell 34.7% in the first quarter of 2026 year-over-year — and the commercial reality that Super Duty trucks are among the highest-margin, highest-demand vehicles in North America. Driving.ca confirmed that at least six pre-production Super Duty units have already rolled out of Oakville in April 2026 for evaluation and validation purposes, and employees are actively returning to the facility. Ford has not disclosed exact hiring numbers, but approximately 1,800 jobs have been associated with the plant's new mandate. The plant previously produced the Ford Edge and Lincoln Nautilus, last doing so in May 2024. At full production, Oakville could eventually approach the output of Ford's Kentucky Truck Plant — which built 98,216 Super Duty units in the first five months of 2026 alone — and may export units to Australia and the Middle East.",
    whyItMatters: "For Canadian shops, the Oakville Super Duty restart has two direct implications. First, it means more Super Duty trucks entering the Canadian fleet over the next two to three years, which translates to more Super Duty service volume — oil changes, brake jobs, transmission service, and the increasingly common diesel particulate filter and DEF system maintenance that commercial operators often defer. Super Duty trucks are disproportionately represented in fleet and commercial service bays, and shops that are not already proficient in Ford 6.7L Power Stroke diesel service should be developing that capability now. Second, the plant restart means approximately 1,800 direct jobs returning to Oakville, plus the ripple effect of supplier and service sector employment in the region. That is a meaningful addition to the local economy and a potential source of new customers for shops in the Halton and Peel regions.",
    source: "Driving.ca / The Logic / Globe and Mail / Financial Post",
    sourceUrl: "https://driving.ca/auto-news/industry/ford-super-duty-pickup-truck-oakville-ontario-assembly-2026",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "INDUSTRY",
    tagColor: "#16a34a",
    headline: "Stellantis Brampton Plant Gets First Real Hope in Two Years — 11 New Chrysler, Dodge, Jeep and Ram Models by 2030 Create 'Meaningful Potential Opportunities,' and Leapmotor Chinese EV Assembly Talks Add a Wildcard",
    summary: "The Stellantis Brampton Assembly Plant, which has sat idle since the last Dodge Charger rolled off the line in December 2023, received its clearest signal of potential revival this week. Stellantis CEO Antonio Filosa, speaking after the company's investor day near Detroit, announced a $70 billion five-year strategic plan that includes 11 new Chrysler, Dodge, Jeep and Ram models in North America by 2030 — with nine of those models priced under $40,000, including two under $30,000. Stellantis spokesperson LouAnn Gosselin told Automotive News that the new product slate 'creates meaningful potential opportunities for facilities like Brampton as we align future production with our growth strategy.' Unifor Local 1285 president Vito Beato, who represents approximately 3,000 Brampton workers who have been off the job for roughly two and a half years, said many of the upcoming products — Dodge and Chrysler nameplates — are exactly what Brampton has historically built. 'I do believe we'll build cars in Brampton, but my concern is the timeline,' Beato said. Adding a significant wildcard to the Brampton story: Stellantis CEO Filosa also floated the idea of using the Brampton facility to assemble Leapmotor electric vehicles. Stellantis holds a 21% stake in Leapmotor, the Chinese EV maker, and has exclusive rights to sell and manufacture Leapmotor vehicles outside China. CNBC reported that Brampton is the most obvious candidate for Leapmotor production in Canada, potentially assembling partially built kits shipped from China — a model that has already been used in Europe. However, both federal Industry Minister Melanie Joly and Ontario Premier Doug Ford have pushed back on the kit-assembly concept, preferring full Canadian manufacturing content. Canada currently allows 49,000 Chinese-built EVs into the country annually at a reduced 6.1% tariff rate.",
    whyItMatters: "The Brampton story matters to shops in the Greater Toronto Area and across Ontario for the same reason the Oakville story does: manufacturing employment drives service demand. Three thousand Brampton workers have been off the job for two and a half years. Their return to work — whenever it happens — will mean more vehicles being purchased, financed, and serviced in the region. The Leapmotor angle is also worth watching from a longer-term service perspective. If Leapmotor vehicles begin to be assembled in Canada and sold through Stellantis dealer networks, independent shops will eventually encounter them in service bays. The Right to Repair campaign's success will determine whether independent shops can access the diagnostic data needed to service these vehicles — which is another reason to support that campaign actively.",
    source: "Automotive News / Carscoops / INsauga / Detroit News",
    sourceUrl: "https://www.carscoops.com/2026/05/stellantis-chinese-evs-brampton/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TRADE & INFRASTRUCTURE",
    tagColor: "#2563eb",
    headline: "The Gordie Howe Bridge Is Complete — But the U.S. Is Holding Its Opening Hostage Over Trade Demands, and Windsor's Mayor Says He'd Rather Keep It Closed Than Accept a Bad Deal",
    summary: "The Gordie Howe International Bridge — the $6.4 billion cable-stayed crossing connecting Windsor, Ontario to Detroit, Michigan — is structurally complete and in the final stages of testing and commissioning as of May 2026. The bridge, which will be the longest cable-stayed bridge in North America at 1.5 miles (2.5 km), was originally targeted for a spring 2026 opening. However, the opening has been entangled in the broader Canada-U.S. trade dispute. In February 2026, U.S. President Donald Trump threatened to block the bridge's opening until the United States was compensated for what he claimed were unfair trade practices by Canada — including an allegation that the project used only Canadian steel, which Canadian officials including Prime Minister Mark Carney publicly refuted. The White House has since pointed to 'longstanding unfair trade practices' when asked about the bridge opening, and the U.S. side has not provided a clear timeline for when it would allow the crossing to open. Windsor Mayor Drew Dilkens has taken a firm public stance: he would rather keep the bridge closed than open it as part of a trade deal that disadvantages Canada. The APMA's Flavio Volpe, speaking on the Automotive News Canada podcast on May 22, described the Gordie Howe Bridge as critical infrastructure for the North American automotive supply chain — the Windsor-Detroit corridor handles approximately $323 million in daily trade, including roughly $50 million per day in automotive parts alone. Every day the bridge remains closed is a day that automotive parts supply chains are operating with reduced redundancy and capacity.",
    whyItMatters: "The Gordie Howe Bridge situation is a direct supply chain risk for Canadian shops that source parts from U.S. distributors, and for the broader North American automotive parts supply chain. The Windsor-Detroit corridor is the single most important trade crossing for automotive parts in North America. The existing Ambassador Bridge, which handles the majority of that $50 million per day in automotive parts trade, is a single point of failure — aging infrastructure that was built in 1929 and is not designed for the volume of trade it currently handles. The Gordie Howe Bridge was built specifically to add redundancy and capacity to this corridor. Every month it remains closed due to political posturing is a month in which a disruption at the Ambassador Bridge — a mechanical failure, a weather closure, a security incident — could create a parts shortage that ripples through every shop in Canada that services vehicles with U.S.-sourced components. For shop owners: this is not an abstract geopolitical story. It is a supply chain resilience story. The practical action is to maintain slightly higher safety stock on your fastest-moving U.S.-sourced parts until the bridge situation is resolved.",
    source: "Britannica / CBC Windsor / Automotive News Canada / APMA",
    sourceUrl: "https://www.britannica.com/topic/Gordie-Howe-International-Bridge",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🚗",
    text: "Canada's EV sales fell 34.7% in the first quarter of 2026 year-over-year, according to Statistics Canada — the steepest quarterly decline on record. The IEA's Global EV Outlook 2026 notes that Canada is one of the few developed markets where EV adoption is moving backward rather than forward, driven by the end of the iZEV federal rebate program and weakening consumer confidence. For shops: the slower EV transition means the ICE service base remains larger and more durable than the most aggressive EV adoption forecasts suggested two years ago.",
    sourceUrl: "https://www.iea.org/reports/global-ev-outlook-2026/trends-in-electric-cars",
  },
  {
    icon: "🔧",
    text: "The F-150 production line at Ford's Kentucky Truck Plant experienced a die failure in April that halted production for several days, contributing to a 60,000-unit production shortfall year-to-date. With Oakville not yet at full production, F-Series supply in Canada remains tight. Shops servicing fleet F-150 customers should expect continued strong demand for preventive maintenance as fleet operators extend vehicle lifecycles rather than replace units they cannot source.",
    sourceUrl: "https://www.carscoops.com/2026/05/ford-f150-production-halt/",
  },
  {
    icon: "🌍",
    text: "Geely has become the first Chinese automaker to export EVs to Canada, with 18 Lotus Eletre electric SUVs en route to Canadian dealers. The Eletre is a luxury EV priced above $200,000 CAD, so its volume impact on the service sector is minimal in the near term. However, it establishes the precedent for Chinese EV brands entering the Canadian market through existing dealer networks — a trend that will accelerate as the federal government's 49,000-unit annual quota for Chinese-built EVs at the reduced 6.1% tariff rate is utilized.",
    sourceUrl: "https://www.autonews.com/canada/",
  },
  {
    icon: "📊",
    text: "The driving.ca Q1 2026 brand scorecard shows Acura up 12%, Volkswagen up 13%, and Land Rover up 67% — while most mainstream brands are flat or declining. The outperformers share a common characteristic: strong fleet and commercial sales that are less sensitive to consumer confidence. For shops: the brands gaining share in the current environment are the ones most likely to be overrepresented in your service bay over the next 12 to 18 months. VW Group's growing Canadian presence — including Audi, Porsche, and VW — is worth noting for shops considering technician training investments.",
    sourceUrl: "https://driving.ca/column/driving-by-numbers/best-worst-starts-canadian-auto-brands-2026-q1",
  },
];

const tipOfTheDay = {
  title: "Build Your Super Duty Diesel Competency Now — Before the Oakville Trucks Hit the Road",
  text: "Ford's Oakville plant will begin producing Super Duty trucks before the end of 2026, and those trucks will start entering the Canadian fleet in 2027. The Super Duty's 6.7L Power Stroke diesel is the dominant powertrain in Canadian commercial and fleet applications, and it has a specific set of maintenance requirements that differ significantly from gasoline engines: diesel particulate filter (DPF) regeneration and cleaning, diesel exhaust fluid (DEF) system maintenance, EGR system service, and high-pressure fuel injection system diagnostics. If your shop is not already proficient in Power Stroke diesel service, now is the time to invest in training and tooling — before the Oakville trucks hit the road and your commercial customers start asking whether you can service them. The CARS training catalogue has Power Stroke-specific courses, and the Ford Professional Technician Society (PTS) offers online modules that are accessible to independent shops. The shops that build this competency proactively will capture the commercial fleet service revenue that comes with the Oakville production ramp.",
};

const quoteOfTheDay = {
  text: "They started an EV plant. The sales are not where they needed them to be. They said, 'We're going to stop and come back to you and talk to you about what we want to do.' Now they're adding 125 people in Windsor for the engines and 400 more people than they had in Oakville to build a stamping plant.",
  author: "Vic Fedeli",
  title: "Ontario Minister of Economic Development — May 21, 2026 (The Logic)",
};

const rideOfTheDay = {
  name: "1971 Plymouth GTX 440 Six Pack — The Last of the B-Body Brutes",
  description: "The 1971 Plymouth GTX represents the final flowering of the B-body muscle car era before insurance rates, emissions regulations, and the energy crisis ended the golden age of American performance. The GTX was Plymouth's premium muscle car, positioned above the Road Runner in the lineup and aimed at buyers who wanted performance with a degree of luxury. The 440 Six Pack option — three Holley two-barrel carburetors on an Edelbrock aluminum intake manifold, feeding the 440 cubic inch RB big-block — was the most aggressive naturally aspirated engine option available in the GTX, producing a factory-rated 385 horsepower and considerably more in practice. The Six Pack setup was visually dramatic: a fiberglass hood with a large central scoop that opened under wide-open throttle to feed cold air directly to the carburetors. The 1971 model year brought a significant styling revision to the B-body, with a longer, lower, wider appearance that many consider the most visually mature of the generation. The twin scoops, the hockey stick stripes, and the aggressive front end gave the GTX a presence that the more restrained 1970 models lacked. By 1971, however, the writing was on the wall: compression ratios were being reduced to accommodate lower-octane unleaded fuel, and the 440 Six Pack's net horsepower rating would drop significantly in subsequent years. The 1971 GTX 440 Six Pack is consequently one of the last high-compression, high-performance American muscle cars built before the industry-wide detuning that characterized the early 1970s — making it one of the most sought-after collector cars of the era.",
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
      className={`transition-all duration-700 ${
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
              alt="Ford Oakville Assembly Complex — Super Duty Production Restart"
              className="w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
              <span className="inline-block bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                Top Intelligence
              </span>
              <h3 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-white leading-tight uppercase mb-4">
                Oakville Restarts, Brampton Gets Hope, and the Gordie Howe Bridge Stays Closed
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Canada's automotive manufacturing sector is navigating its most complex moment in a generation — federal dollars flowing to Ford, Stellantis dangling new models for Brampton, and the continent's most important new trade bridge held hostage by Washington.
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
