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

const BRIEFING_NUMBER = 41;
const BRIEFING_DATE = "June 17, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/siuWOubNaYNRSsKa.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LamJauvGoPFjhiJZ.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XkyuwmHIOQuyqrDd.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EXWrWaOFEfvcxIMa.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TYtVOjmiEuPCuNtl.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "G7 / HOT MIC",
    tagColor: "#1d4ed8",
    headline: "Hot Mic at G7: Carney Leans In, Tells Trump About Chinese EV Cap — Trump: 'That's Good. I Like That.'",
    summary: "The defining moment of the G7 summit for Canada came not from a formal bilateral meeting — there was none — but from a hot microphone at the leaders' working luncheon in Évian-les-Bains. Prime Minister Mark Carney can be seen on camera leaning toward U.S. President Donald Trump, who is seated at the table. A microphone in the room picks up the exchange. Carney: 'Less than three per cent of our market, 49,000 cars... a cap, a hard line... I thought you'd actually like that.' Trump: 'That's good. I like that.' The exchange refers to Canada's January 2026 deal with China allowing 49,000 Chinese EVs annually into Canada at a 6.1 per cent tariff — down from the 100 per cent tariff imposed in 2024. The deal was negotiated in exchange for China suspending retaliatory tariffs on Canadian canola. The U.S. had previously criticized the deal, with Transportation Secretary Sean Duffy saying Canada would 'regret' it. Trump's 'I like that' is a significant de-escalation of one of the most contentious Canada-U.S. irritants heading into the CUSMA review. Carney told reporters Wednesday that he had 'seven or eight discussions' with Trump over 36 hours — on the economy, artificial intelligence, Ukraine, and the U.S.-Iran peace deal. He also said he got Trump a birthday present and that Trump 'likes it a lot.' No formal bilateral meeting was scheduled, but Carney said: 'There's no message in that.' Canada-U.S. Trade Minister Dominic LeBlanc and Chief Negotiator Janice Charette met with U.S. Trade Representative Jamieson Greer on the G7 sidelines Tuesday. LeBlanc: 'It's not a one-way conversation.' The G7 summit concludes today. Canada returns home with no formal deal, but with Trump's verbal approval of the Chinese EV cap — a meaningful de-escalation of one of the biggest irritants in the bilateral relationship.",
    whyItMatters: "For Canadian shop owners, the hot mic moment is the most significant Canada-U.S. trade signal since the tariff war began. Here is why it matters: the Chinese EV issue was one of the top items on the U.S. list of trade irritants — and Carney appears to have defused it in a 30-second conversation at a luncheon table. Trump's 'I like that' does not resolve the 25% auto tariff, the CUSMA review, or the Gordie Howe Bridge impasse. But it removes one major irritant from the negotiating table and signals that the two leaders are capable of finding common ground on specific issues. The practical implication: if Canada can resolve the Chinese EV irritant, the digital services tax, and one or two other items on the U.S. list, a package deal that includes tariff relief on autos becomes more achievable. The hot mic moment also matters because it shows Carney's strategy — informal, personal, persistent engagement with Trump rather than formal bilateral meetings — is producing results. He had seven or eight conversations with Trump in 36 hours. That is more substantive contact than any formal bilateral would have produced.",
    source: "CBC News / Radio Canada International — June 16, 2026",
    sourceUrl: "https://ici.radio-canada.ca/rci/en/news/2262073/hot-mic-moment-at-g7-catches-carney-trump-talking-about-chinese-evs",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "UNIFOR / LABOUR",
    tagColor: "#b91c1c",
    headline: "Unifor Calls It 'The Most Consequential Bargaining of Our Lifetimes' — Ford Talks Open Sunday in Toronto",
    summary: "On Sunday, June 22, Unifor and Ford Motor Company will sit down in downtown Toronto to begin contract negotiations. The current Unifor contract with the Detroit Three — Ford, General Motors, and Stellantis — expires at 11:59 p.m. on September 20, 2026. Unifor has selected Ford as its primary bargaining target, following the union's pattern bargaining model: reach a deal with Ford, then use it as the template for GM and Stellantis. Unifor President Lana Payne has called these 'the most consequential bargaining talks of our lifetimes.' Automotive News columnist Grace Macaluso described the talks as 'Canada's Detroit 3 talks facing the toughest test in decades.' The backdrop is unprecedented: the 25% U.S. auto tariff, Honda's suspension of its $15 billion EV value chain investment, Stellantis's closure of its Brampton Assembly plant (Chrysler 300, Dodge Charger), and deep uncertainty over GM Canada's Oshawa Assembly future. Unifor's bargaining priorities are expected to include: production commitments for Canadian plants, job security guarantees tied to EV transition timelines, cost-of-living adjustments linked to tariff-driven inflation, and a demand that Ford commit to keeping Windsor Assembly (Bronco Sport, Lincoln Corsair) operating through the contract period. Windsor Assembly is the most vulnerable Ford plant in Canada — it builds vehicles that compete directly with U.S.-assembled alternatives, and the 25% tariff on Canadian-assembled vehicles exported to the U.S. has made its economics precarious. Unifor represents approximately 18,000 workers at Ford, GM, and Stellantis plants across Canada. A work stoppage at Windsor Assembly would affect parts availability within days for shops that rely on Bronco Sport or Lincoln Corsair parts.",
    whyItMatters: "The Unifor-Ford talks are directly relevant to Canadian shop owners for two reasons. First, a work stoppage at any Canadian assembly plant would immediately affect parts availability and lead times. Windsor Assembly builds the Bronco Sport and Lincoln Corsair — if it goes down, those parts get scarce fast. Second, the contract outcome will signal whether the Detroit Three are committed to Canadian production or are quietly planning to shift more work to U.S. plants. If Ford agrees to production commitments for Windsor and Oakville, that is a positive signal for the Canadian auto supply chain. If Ford refuses or hedges, it signals that Canadian production is being wound down — which has long-term implications for parts availability, shop economics, and the broader Canadian auto ecosystem. The talks also matter because Unifor's demands will put the 25% auto tariff on the public record as a direct threat to Canadian jobs. That political pressure may help LeBlanc's case in CUSMA negotiations. Watch for Unifor's opening demands on June 22 — they will tell you a great deal about how the union assesses the health of Canadian auto production.",
    source: "Detroit Free Press / Jamie LaReau — June 16, 2026",
    sourceUrl: "https://www.freep.com/story/money/cars/ford/2026/06/16/unifor-and-ford-head-to-bargaining-and-heres-what-the-union-wants/90563013007/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CUSMA / TRADE",
    tagColor: "#d97706",
    headline: "The 12 Trade Irritants: What the U.S. Actually Wants from Canada — The Full List, Explained",
    summary: "The Toronto Star's Ottawa Bureau Chief Tonda MacCharles has obtained details of nearly a dozen Canada-U.S. trade irritants at the heart of the CUSMA talks — the most comprehensive public accounting yet of what the U.S. is actually demanding from Canada. The U.S. list, as reported by The Star, includes: (1) Chinese EV imports — partially addressed by the hot mic moment at G7; (2) Canada's Digital Services Tax — a 3% levy on revenues from Canadian users of large digital platforms, which the U.S. views as targeting American tech companies; (3) Canadian dairy supply management — the U.S. has complained about this since CUSMA was first negotiated; (4) Canadian softwood lumber — a decades-long dispute over countervailing duties; (5) Canadian streaming and cultural content rules — U.S. objection to Canadian content requirements under the Online Streaming Act; (6) Canadian pharmaceutical pricing — the U.S. objects to Canada's Patented Medicine Prices Review Board; (7) Canadian steel and aluminum export volumes — the U.S. wants caps on Canadian metals exports; (8) Canadian data localization rules — U.S. tech companies object to requirements to store Canadian data in Canada; (9) Canadian agricultural subsidies — disputes over supply management and support programs; (10) Canada's foreign investment review process — the U.S. objects to ISED's ability to block U.S. acquisitions on national security grounds; (11) Canadian telecom foreign ownership rules — the U.S. wants more access to the Canadian telecom market; (12) Defence spending and continental security — the U.S. wants Canada to increase NATO defence spending and make commitments on critical minerals and continental security. For the auto sector specifically, items 1 (Chinese EVs), 7 (steel and aluminum), and 12 (critical minerals) are most directly relevant. The digital services tax (item 2) is also relevant because it affects the cost structure of digital platforms that Canadian shops use for parts ordering, marketing, and customer management.",
    whyItMatters: "This list is the most important document in the CUSMA negotiations for Canadian shop owners to understand. Here is the key insight: most of these irritants are not about the auto sector. Dairy, softwood lumber, streaming rules, pharmaceutical pricing, telecom — these are entirely separate from automotive trade. But they are all on the same negotiating table. This means Canada may be asked to make concessions in areas unrelated to autos in order to get relief on the 25% auto tariff. That is the nature of package deals. The practical implication: the CUSMA outcome is not just about whether Canada 'wins' on autos. It is about whether Canada can assemble a package of concessions across multiple sectors that is acceptable to the U.S. — and whether that package includes enough auto tariff relief to matter to Canadian manufacturers and shops. The digital services tax is worth watching closely. If Canada agrees to suspend or repeal it, that would be a significant concession to U.S. tech companies — but it might be the price of getting auto tariff relief. LeBlanc's job over the next two weeks is to figure out which items on this list Canada can trade away, and which ones it cannot. The auto tariff is the prize. Everything else is the price.",
    source: "Toronto Star / Tonda MacCharles — June 16, 2026",
    sourceUrl: "https://www.thestar.com/politics/federal/these-are-the-canadaus-trade-irritants-at-the-heart-of-high-stakes-talks-sources/article_d92faf7c-b502-49e9-8942-1f324a98fffe.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇫🇷",
    text: "G7 summit concludes today in Évian-les-Bains. Six joint statements issued: Ukraine support, U.S.-Iran ceasefire endorsement, developing country financing reform, cancer research collaboration, Ebola response, and migrant smuggling. No joint communiqué — France issued individual statements. Carney also announced new sanctions on Russia targeting Moscow's shadow fleet, energy revenues, and defence industry.",
    sourceUrl: "https://www.chroniclejournal.com/news/national/carney-says-he-had-several-talks-with-trump-during-g7-despite-no-official-meeting/article_cce8a634-98cb-5172-bc39-7ec8899e2341.html",
  },
  {
    icon: "🚗",
    text: "Canada's Used Car Week 2026 is underway in Toronto today — the industry's annual gathering for dealers, remarketing professionals, and auction executives. Tariff impacts on used vehicle pricing and inventory are expected to dominate discussion. Used vehicle values have risen 8-12% in 2026 as new vehicle production uncertainty reduces supply. For shop owners: used vehicle customers are spending more on maintenance to extend vehicle life.",
    sourceUrl: "https://www.instagram.com/p/DZp97THE2Nm/",
  },
  {
    icon: "🔧",
    text: "Unifor-Ford contract talks open Sunday, June 22 in downtown Toronto. Current contract expires September 20 at 11:59 p.m. Unifor selected Ford as primary target. Key demands expected: production commitments for Windsor Assembly and Oakville, job security guarantees, tariff-related cost-of-living provisions. A work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts availability within days.",
    sourceUrl: "https://www.freep.com/story/money/cars/ford/2026/06/16/unifor-and-ford-head-to-bargaining-and-heres-what-the-union-wants/90563013007/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge — still no opening date. The Star's Andrew Phillips column today: 'Sorry, Mark Carney, Shakedown in Windsor is a true crime drama where Donald Trump holds a bridge, and a nation, hostage.' Canada paid $5.7 billion USD including the U.S. port of entry. Trump's team is demanding renegotiation of the operating agreement. The Ambassador Bridge remains the only Windsor-Detroit crossing. The G7 summit ends today with no resolution.",
    sourceUrl: "https://www.thestar.com/",
  },
];

const tipOfTheDay = {
  title: "The Hot Mic Lesson: Informal Beats Formal in High-Stakes Negotiations",
  text: "Carney had seven or eight conversations with Trump in 36 hours — and got a 'I like that' on the Chinese EV cap — without a single formal bilateral meeting. The lesson for shop owners negotiating with suppliers, landlords, or OEM reps: informal, persistent, personal engagement often produces better results than formal meetings. The formal meeting creates pressure and positions. The informal conversation creates rapport and possibilities. When you need something from a difficult counterpart, find the working luncheon equivalent — the trade show floor, the parts counter, the industry dinner — and have the conversation there.",
};

const quoteOfTheDay = {
  text: "I had seven or eight discussions with President Trump over the course of the last 36 hours.",
  author: "Prime Minister Mark Carney",
  title: "Press conference, G7 Summit, Évian-les-Bains, France — June 17, 2026",
};

const rideOfTheDay = {
  name: "1967 Shelby GT500 — 428 Cobra Jet, Brittany Blue",
  description: "The 1967 Shelby GT500 was Carroll Shelby's answer to a question nobody had asked: what if a Mustang fastback had a 428 cubic inch Cobra Jet V8 producing 355 horsepower — officially — and considerably more in reality? Ford's marketing department had insisted on the conservative horsepower rating to keep insurance companies from panicking. The actual output was closer to 400 horsepower. Brittany Blue with white Le Mans racing stripes was one of the signature Shelby colour combinations — a nod to the Le Mans racing heritage that Shelby had built with the GT40 program. The GT500 was the big-block alternative to the GT350's small-block formula. Where the GT350 was a driver's car, the GT500 was a statement. It said: I have more power than I need, and I am comfortable with that. The 1967 GT500 is now worth $150,000 to $250,000 in original condition. On a day when Canada is negotiating trade deals in the French Alps, Unifor is preparing to open the most consequential contract talks in decades, and a finished bridge sits empty on the Detroit River, the GT500 is the right car for the moment: more power than the situation requires, and completely unapologetic about it.",
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
                {["G7 HOT MIC", "UNIFOR / FORD", "12 IRRITANTS", "SHELBY GT500"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="G7 Évian Working Luncheon — Baywash Daily Briefing Edition No. 41"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">G7 Final Day</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Hot Mic Moment Defines G7 — Carney Gets Trump's "I Like That" on Chinese EVs — Unifor Talks Open Sunday
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron</span>
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
