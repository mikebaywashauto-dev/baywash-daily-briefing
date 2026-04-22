// 2026-04-22
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 11;
const BRIEFING_DATE = "April 22, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YKVCcPWhETpVQxZp.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YKVCcPWhETpVQxZp.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZsWxaLdDsmAFGWVw.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LzutbZAIFBSwzKyP.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/WIVvfyVBYlmRTiSL.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "ADVOCACY",
    tagColor: "#e05a1a",
    headline: "AIA Canada Elects New Board at 84th AGM — Focus Shifts to Right to Repair and Tech Shortage",
    summary: "The Automotive Industries Association of Canada (AIA Canada) held its 84th Annual General Meeting on April 16, 2026, electing three new directors: Daryll O’Keefe (Fix Network), Sabrina Thring (Driven Brands), and Bryan Elwin (Mr. Lube + Tires). Jason Herle, CEO of Fountain Tire, has been appointed as the new Chair. The association, representing Canada's $43.9 billion auto care sector, is doubling down on its advocacy for the independent aftermarket. Key priorities for the new board include navigating the 'structural reset' of the industry caused by trade volatility and accelerating the push for Right to Repair legislation as vehicles become increasingly software-defined. The board also aims to address the persistent technician shortage, which remains a top concern for shops nationwide.",
    whyItMatters: "For independent shop owners, AIA Canada is your primary voice in Ottawa. The appointment of Jason Herle as Chair brings a leader from one of Canada's largest service networks to the helm. This leadership shift signals a continued focus on ensuring independent shops have the data access and skilled labor needed to compete with dealerships. As the industry faces 'existential challenges' in 2026 from trade and technology, having a strong, unified advocacy group is critical for protecting the interests of the 26.6 million vehicles in the Canadian aftermarket.",
    source: "AIA Canada",
    sourceUrl: "https://www.aiacanada.com/news/aia-canada-announces-changes-to-its-board-of-directors-at-the-2026-annual-general-meeting/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "LABOUR",
    tagColor: "#dc2626",
    headline: "Technician Shortage Reaches Critical Levels — 642,000 New Techs Needed Across North America by 2026",
    summary: "New data released in April 2026 confirms that the automotive technician shortage is no longer a future threat—it is a present crisis. The TechForce Foundation predicts that demand for new vehicle technicians will be three times higher than the current supply through 2026. In Canada, Statistics Canada reports that vacancies have more than doubled in recent years, with over 11,000 open positions in mid-2022 and numbers continuing to climb in 2026. Shop owners are reporting that the shortage is having a 'high' to 'moderate' impact on their ability to take on new work, leading to longer lead times for customers and increased pressure on existing staff. Industry leaders are calling for a collective effort to raise the profile of the trades and explore government training grants to bridge the gap.",
    whyItMatters: "If you're struggling to find and keep good techs, you're not alone—it's the #1 challenge facing the industry today. This shortage is driving up labor costs and forcing shops to rethink their business models. To stay competitive, shops must invest in 'boosting their bench' through better benefits, flexible schedules, and ongoing training. As Jason Herle noted, shops may also need to reassess fee structures to reflect the high level of skill required to service modern vehicles, enabling higher compensation for certified technicians and ensuring a more sustainable future for the trade.",
    source: "Auto Service World / TechForce",
    sourceUrl: "https://www.autoserviceworld.com/cars-2026-executive-outlook-jason-herle/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TECHNOLOGY",
    tagColor: "#2563eb",
    headline: "EV Maintenance Becomes the 'New Normal' for Canadian Shops in 2026",
    summary: "As of April 2026, EV and hybrid maintenance has officially transitioned from a niche service to a core requirement for Canadian independent shops. With a growing focus on specialized battery health checks and high-voltage system safety, shops are increasingly investing in specialized diagnostic tools and technician certification. Recent reports indicate that while EVs require less frequent mechanical maintenance, the complexity of their electronic systems and the need for precise thermal management service are creating high-value opportunities for prepared shops. Industry experts emphasize that 'policy clarity' and investment in shop infrastructure are the missing pieces to fully unlocking the potential of the EV aftermarket.",
    whyItMatters: "The shift to electrification is no longer optional. Shops that have already integrated EV service into their workflow are seeing higher customer retention as early adopters look for reliable alternatives to dealership service. By positioning your shop as an EV-ready facility now, you are securing your place in the future of the Canadian auto care industry. Focus on battery diagnostics and high-voltage safety training to build trust with this growing segment of the market.",
    source: "Motor.com / AIA Canada",
    sourceUrl: "https://www.motor.com/2026/01/ev-technology-impact-auto-technicians/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🔧",
    text: "The 2026 Voice of the Technician survey reveals that tool costs and ongoing training are the top concerns for over 5,500 polled technicians across North America.",
    sourceUrl: "https://www.autonews.com/retail/service-and-parts/an-voice-of-technician-survey-0402/",
  },
  {
    icon: "🏆",
    text: "AIA Canada has announced the 2026 Industry Award winners, celebrating excellence in leadership and service within the Canadian auto care sector.",
    sourceUrl: "https://www.aiacanada.com/news/celebrating-excellence-aia-canada-announces-2026-industry-award-winners/",
  },
  {
    icon: "⚖️",
    text: "Manitoba's new 'Right to Repair' legislation receives strong backing from AIA Canada, promising to strengthen consumer choice and support independent repair businesses.",
    sourceUrl: "https://www.repairerdrivennews.com/2026/03/20/aia-canada-backs-manitoba-right-to-repair-legislation/",
  },
  {
    icon: "📈",
    text: "Canadian automotive businesses entered 2026 with renewed confidence, driven by AI integration for predictive maintenance and improved customer communication.",
    sourceUrl: "https://www.collisionrepairmag.com/news/collision-repair/market-trends/article/15818807/market-trends-canadian-businesses-entered-2026-with-confidence-ibm-reports",
  },
];

const tipOfTheDay = {
  title: "Sharpen Your Tools, Sharpen Your Future",
  text: "As vehicles become increasingly software-defined, your most important tool is your knowledge. Dedicate at least one hour a week for your team to review new technical bulletins or participate in online training modules. Staying ahead of the curve on diagnostic software and high-voltage safety isn't just about fixing cars—it's about fixing your shop's future in a rapidly evolving market.",
};

const quoteOfTheDay = {
  text: "The expectations of life depend upon diligence; the mechanic that would perfect his work must first sharpen his tools.",
  author: "Confucius",
  title: "Ancient Wisdom for Modern Technicians",
};

const rideOfTheDay = {
  name: "1969 Chevrolet Camaro Z/28",
  description: "The 1969 Chevrolet Camaro Z/28 is the pinnacle of the first-generation Camaro and a true icon of the muscle car era. Designed for the SCCA Trans-Am racing series, it featured the legendary high-revving 302 cubic-inch V8 engine, officially rated at 290 horsepower but widely known to produce much more. With its aggressive styling, including the cowl-induction hood and signature stripes, the '69 Z/28 remains one of the most desirable and recognizable classic cars in the world, representing the perfect blend of American power and handling.",
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
    <div className=\"min-h-screen bg-[#f5f0e8] text-[#1a1a1a] font-['Source_Sans_3'] selection:bg-[#e05a1a] selection:text-white\">
      {/* Top Navigation Bar */}
      <nav className=\"sticky top-0 z-50 bg-[#1a1a1a] text-white py-3 px-6 shadow-xl\">
        <div className=\"max-w-7xl mx-auto flex justify-between items-center\">
          <div className=\"flex items-center gap-4\">
            <span className=\"bg-[#e05a1a] text-white px-2 py-0.5 text-xs font-bold tracking-tighter uppercase\">Live</span>
            <h1 className=\"font-['Oswald'] text-xl font-bold tracking-tight uppercase\">Baywash Daily Briefing</h1>
          </div>
          <div className=\"hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-gray-400\">
            <Link href=\"/\" className=\"text-[#e05a1a] hover:text-white transition-colors\">Today's Edition</Link>
            <Link href=\"/archive\" className=\"hover:text-white transition-colors\">Archive</Link>
            <span className=\"text-gray-600\">|</span>
            <span>Shop Portal</span>
          </div>
        </div>
      </nav>

      <main className=\"max-w-7xl mx-auto px-6 py-12\">
        {/* Header Section */}
        <header className=\"border-b-4 border-[#1a1a1a] pb-8 mb-12\">
          <div className=\"flex flex-col md:flex-row justify-between items-end gap-6\">
            <div className=\"flex-1\">
              <div className=\"flex items-center gap-3 mb-4\">
                <span className=\"font-['Source_Code_Pro'] text-sm font-bold text-[#e05a1a]\">EDITION NO. {BRIEFING_NUMBER}</span>
                <span className=\"h-px w-12 bg-gray-300\"></span>
                <span className=\"font-['Source_Code_Pro'] text-sm text-gray-500 uppercase tracking-widest\">{BRIEFING_DAY}, {BRIEFING_DATE}</span>
              </div>
              <h2 className=\"font-['Oswald'] text-6xl md:text-8xl font-bold leading-[0.9] uppercase\">
                The Daily <br />
                <span className=\"text-[#e05a1a]\">Briefing.</span>
              </h2>
            </div>
            <div className=\"md:w-1/3 text-right\">
              <p className=\"text-sm text-gray-600 leading-relaxed italic\">
                \"The essential morning intelligence for the Canadian automotive professional. 
                Curated daily for shop owners, technicians, and industry leaders.\"
              </p>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <AnimatedSection className=\"mb-16\">
          <div className=\"relative group overflow-hidden bg-[#1a1a1a]\">
            <img 
              src={HERO_BANNER} 
              alt=\"Automotive Workshop\" 
              className=\"w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000\"
            />
            <div className=\"absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent\"></div>
            <div className=\"absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl\">
              <span className=\"inline-block bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4\">
                Top Intelligence
              </span>
              <h3 className=\"font-['Oswald'] text-4xl md:text-5xl text-white font-bold leading-tight uppercase mb-6\">
                Navigating the 2026 Structural Reset: How Canadian Shops are Adapting to Trade and Tech Shifts
              </h3>
              <p className=\"text-gray-300 text-lg leading-relaxed\">
                As the industry faces unprecedented trade volatility and rapid technological advancement, 
                independent shops are finding new ways to thrive by focusing on life-extension services 
                and advanced technician training.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className=\"grid grid-cols-1 lg:grid-cols-12 gap-12\">
          {/* Left Column: Lead Stories */}
          <div className=\"lg:col-span-8 space-y-16\">
            {stories.map((story, index) => (
              <AnimatedSection key={story.id} delay={index * 100}>
                <article className=\"group\">
                  <div className=\"flex flex-col md:flex-row gap-8\">
                    <div className=\"md:w-1/3\">
                      <div className=\"relative overflow-hidden aspect-[4/5]\">
                        <img 
                          src={story.image} 
                          alt={story.headline}
                          className=\"w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500\"
                        />
                        <div 
                          className=\"absolute top-0 left-0 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest\"
                          style={{ backgroundColor: story.tagColor }}
                        >
                          {story.tag}
                        </div>
                      </div>
                    </div>
                    <div className=\"md:w-2/3\">
                      <h4 className=\"font-['Oswald'] text-3xl font-bold leading-tight uppercase mb-4 group-hover:text-[#e05a1a] transition-colors\">
                        {story.headline}
                      </h4>
                      <p className=\"text-gray-700 leading-relaxed mb-6\">
                        {story.summary}
                      </p>
                      <div className=\"bg-white/50 border-l-4 border-[#1a1a1a] p-6 mb-6\">
                        <h5 className=\"font-bold text-xs uppercase tracking-widest mb-2\">Why it matters for your shop:</h5>
                        <p className=\"text-sm text-gray-600 leading-relaxed\">
                          {story.whyItMatters}
                        </p>
                      </div>
                      <div className=\"flex items-center justify-between\">
                        <span className=\"font-['Source_Code_Pro'] text-[10px] text-gray-400 uppercase tracking-widest\">
                          Source: {story.source}
                        </span>
                        <a 
                          href={story.sourceUrl}
                          target=\"_blank\"
                          rel=\"noopener noreferrer\"
                          className=\"text-xs font-bold uppercase tracking-widest text-[#e05a1a] hover:underline\"
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
          <aside className=\"lg:col-span-4 space-y-12\">
            {/* Quick Hits */}
            <AnimatedSection className=\"bg-[#1a1a1a] text-white p-8\">
              <h4 className=\"font-['Oswald'] text-2xl font-bold uppercase tracking-tight mb-8 border-b border-gray-700 pb-4\">
                Quick Hits
              </h4>
              <div className=\"space-y-8\">
                {quickHits.map((hit, i) => (
                  <div key={i} className=\"group\">
                    <div className=\"flex gap-4 mb-2\">
                      <span className=\"text-xl\">{hit.icon}</span>
                      <p className=\"text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors\">
                        {hit.text}
                      </p>
                    </div>
                    <a 
                      href={hit.sourceUrl}
                      target=\"_blank\"
                      rel=\"noopener noreferrer\"
                      className=\"text-[10px] font-['Source_Code_Pro'] text-gray-500 uppercase tracking-widest hover:text-[#e05a1a]\"
                    >
                      View Source
                    </a>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Tip of the Day */}
            <AnimatedSection className=\"border-2 border-[#e05a1a] p-8\">
              <div className=\"flex items-center gap-3 mb-6\">
                <div className=\"w-8 h-8 bg-[#e05a1a] flex items-center justify-center text-white font-bold\">!</div>
                <h4 className=\"font-['Oswald'] text-xl font-bold uppercase tracking-tight\">Tip of the Day</h4>
              </div>
              <h5 className=\"font-bold text-lg mb-3\">{tipOfTheDay.title}</h5>
              <p className=\"text-sm text-gray-600 leading-relaxed\">
                {tipOfTheDay.text}
              </p>
            </AnimatedSection>

            {/* Quote of the Day */}
            <AnimatedSection className=\"bg-[#f5f0e8] border border-gray-200 p-8 relative\">
              <span className=\"absolute top-4 left-4 text-6xl text-gray-200 font-serif leading-none\">\"</span>
              <div className=\"relative z-10\">
                <p className=\"text-lg italic text-gray-700 leading-relaxed mb-6\">
                  {quoteOfTheDay.text}
                </p>
                <div>
                  <p className=\"font-bold text-sm uppercase tracking-widest\">{quoteOfTheDay.author}</p>
                  <p className=\"text-xs text-gray-500\">{quoteOfTheDay.title}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Ride of the Day */}
            <AnimatedSection className=\"group\">
              <h4 className=\"font-['Oswald'] text-2xl font-bold uppercase tracking-tight mb-6\">Ride of the Day</h4>
              <div className=\"overflow-hidden bg-[#1a1a1a] mb-4\">
                <img 
                  src={rideOfTheDay.image} 
                  alt={rideOfTheDay.name}
                  className=\"w-full aspect-video object-cover opacity-90 group-hover:scale-105 transition-transform duration-700\"
                />
              </div>
              <h5 className=\"font-bold text-xl mb-2\">{rideOfTheDay.name}</h5>
              <p className=\"text-sm text-gray-600 leading-relaxed\">
                {rideOfTheDay.description}
              </p>
            </AnimatedSection>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className=\"bg-[#1a1a1a] text-white py-16 px-6 mt-24\">
        <div className=\"max-w-7xl mx-auto\">
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12\">
            <div>
              <h4 className=\"font-['Oswald'] text-xl font-bold uppercase mb-6\">About the Briefing</h4>
              <p className=\"text-sm text-gray-400 leading-relaxed\">
                Baywash Daily Briefing is a premium intelligence service for the Canadian automotive aftermarket. 
                We provide daily updates on trade, technology, and labor trends that matter to your business.
              </p>
            </div>
            <div>
              <h4 className=\"font-['Oswald'] text-xl font-bold uppercase mb-6\">Quick Links</h4>
              <ul className=\"text-sm text-gray-400 space-y-3\">
                <li><Link href=\"/\" className=\"hover:text-[#e05a1a] transition-colors\">Today's Edition</Link></li>
                <li><Link href=\"/archive\" className=\"hover:text-[#e05a1a] transition-colors\">Archive</Link></li>
                <li><a href=\"#\" className=\"hover:text-[#e05a1a] transition-colors\">Shop Portal</a></li>
                <li><a href=\"#\" className=\"hover:text-[#e05a1a] transition-colors\">Industry Reports</a></li>
              </ul>
            </div>
            <div>
              <h4 className=\"font-['Oswald'] text-xl font-bold uppercase mb-6\">Connect</h4>
              <p className=\"text-sm text-gray-400 mb-4\">Stay updated with the latest industry news.</p>
              <div className=\"flex gap-4\">
                <div className=\"w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#e05a1a] transition-colors cursor-pointer\">In</div>
                <div className=\"w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#e05a1a] transition-colors cursor-pointer\">X</div>
                <div className=\"w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#e05a1a] transition-colors cursor-pointer\">Fb</div>
              </div>
            </div>
          </div>
          <div className=\"flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-['Source_Code_Pro'] text-gray-500 uppercase tracking-[0.2em]\">
            <p>© 2026 Baywash Daily Briefing. All rights reserved.</p>
            <div className=\"flex gap-8\">
              <a href=\"#\" className=\"hover:text-white transition-colors\">Privacy Policy</a>
              <a href=\"#\" className=\"hover:text-white transition-colors\">Terms of Service</a>
              <a href=\"#\" className=\"hover:text-white transition-colors\">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
