import { useState } from 'react'
import AssessmentQuiz from './components/AssessmentQuiz'

function App() {
  // Billing cycle toggle: false = Monthly ($29/mo), true = Annual ($199/yr - save 40%)
  const [isAnnual, setIsAnnual] = useState(false)

  // Interactive Quiz State
  // Moved to AssessmentQuiz component

  // AI Coach Demo State
  const [chatHistory, setChatHistory] = useState([
    { sender: 'coach', text: "Hello! I am your Forge40 AI Coach. I specialize in helping active adults aged 40+ build sustainable strength and bulletproof their joint health. Ask me anything or select a topic below!" }
  ])
  const [isTyping, setIsTyping] = useState(false)

  const demoQuestions = [
    { q: "How do I build muscle over 40 without hurting my joints?", a: "Great question! Over 40, our recovery curves change. The key is prioritizing high-tension, joint-friendly movements (like dumbbell goblet squats instead of heavy barbell back squats), controlling the eccentric (lowering) phase for 3-4 seconds, and focusing on progressive overload rather than testing 1-rep maximums. We also incorporate dedicated mobility blocks before every strength session." },
    { q: "What kettlebell routines do you recommend for longevity?", a: "Kettlebells are incredible for longevity! A foundation of Kettlebell Swings (for posterior chain power and cardiovascular health) paired with Turkish Get-Ups (for shoulder stability and cross-body coordination) is a world-class longevity routine. Our Membership library contains a dedicated 12-week progressive kettlebell track." },
    { q: "How does sleep optimization affect strength gains?", a: "Sleep is your ultimate performance-enhancing drug. For adults 40+, deep sleep is when human growth hormone (HGH) and testosterone production peak to repair muscle tissue and reduce joint inflammation. Restricting sleep to 6 hours or less can decrease your strength output by up to 15% and double your injury risk." }
  ]

  const handleDemoQuestionClick = (questionObj) => {
    if (isTyping) return
    // Add user question
    setChatHistory(prev => [...prev, { sender: 'user', text: questionObj.q }])
    setIsTyping(true)

    // Simulate coach typing
    setTimeout(() => {
      setIsTyping(false)
      setChatHistory(prev => [...prev, { sender: 'coach', text: questionObj.a }])
    }, 1200)
  }

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null)
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      q: "I haven't lifted weights in years. Is Forge40 suitable for beginners?",
      a: "Absolutely. In fact, it is designed precisely to prevent the common mistakes beginners make. Every program in our library includes scaling options, detailed form guides, and low-impact progressions to ensure you build a bulletproof physical foundation safely and at your own pace."
    },
    {
      q: "How does the Forge40 AI Coach chatbot work?",
      a: "The Forge40 AI Coach is trained on thousands of pages of certified strength, longevity, and physical therapy coaching guidelines tailored for the mature body. It is available 24/7 to answer workout modification questions, explain exercises, suggest warm-ups, or adjust your schedules based on how you feel."
    },
    {
      q: "What is the difference between the Membership and Hybrid Coaching?",
      a: "The Membership gives you full digital access to our 12-week training libraries and the 24/7 AI Coach. Hybrid Coaching adds an invaluable human element: every week you receive a personalized check-in from a certified physical coach, and once a month you can upload exercise videos for certified human form analysis and consultation."
    },
    {
      q: "Do I need a fully equipped gym to do the programs?",
      a: "No. Our library features bodyweight-only tracks, dedicated kettlebell/dumbbell minimal-equipment tracks, as well as full-gym progressive strength programs. You can choose the track that matches your lifestyle and current setup."
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-light text-neutral-dark font-sans selection:bg-accent selection:text-white">
      
      {/* HEADER & NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-border-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Forge40 Logo" className="h-10 w-auto" />
            <span className="font-display font-extrabold text-2xl tracking-tighter text-primary">
              FORGE<span className="text-accent">40</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide text-primary/80">
            <a href="#pillars" className="hover:text-accent transition-colors">Methodology</a>
            <a href="#quiz-section" className="hover:text-accent transition-colors">Mobility Quiz</a>
            <a href="#demo-section" className="hover:text-accent transition-colors">AI Coach</a>
            <a href="#stack" className="hover:text-accent transition-colors">Products</a>
            <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
          </nav>

          <div>
            <a 
              href="#quiz-section" 
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-accent hover:bg-accent/90 rounded-full transition-all duration-200 shadow-lg shadow-accent/20 active:scale-95"
            >
              Take Free Quiz
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-primary text-white py-20 sm:py-32">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/hero-banner.png" alt="Training Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-accent font-bold mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Re-engineered for adults aged 40–60
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-display font-black tracking-tight max-w-4xl leading-[1] mb-8">
            Build Lasting Strength. <br />
            <span className="text-accent">Bulletproof Your Joints.</span>
          </h1>

          <p className="text-xl text-secondary/80 max-w-2xl leading-relaxed mb-12 font-medium">
            Forge40 combines interactive AI coaching, progressive training tracks, and restorative mobility templates to bridge the gap between static PDFs and expensive personal trainers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#quiz-section" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-black text-white bg-accent hover:bg-accent/90 rounded-xl transition-all duration-200 shadow-2xl shadow-accent/40 active:scale-98"
            >
              Start Free Longevity Quiz
              <svg className="ml-2 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#stack" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-black text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              View Pricing Tiers
            </a>
          </div>
        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section id="pillars" className="py-24 bg-white border-b border-border-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-accent text-sm font-black uppercase tracking-[0.2em] mb-4">The Forge40 Methodology</h2>
            <p className="text-4xl sm:text-5xl font-display font-black text-primary tracking-tight mb-6">
              Designed for Joint Health & Sustainable Strength
            </p>
            <p className="text-neutral-dark/60 text-lg">
              Traditional fitness programs push you to failure. Forge40 builds you up. We specialize in functional vitality for busy lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* PILLAR 1 */}
            <div className="bg-secondary/30 p-10 rounded-3xl border border-border-grid group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 font-black text-2xl shadow-lg shadow-primary/20">
                01
              </div>
              <h3 className="text-2xl font-display font-black text-primary mb-4 uppercase tracking-tight">Sustainable Strength</h3>
              <p className="text-neutral-dark/70 leading-relaxed font-medium">
                Compound movements focused on the major muscle patterns. Re-engineered load dynamics to trigger maximum muscle hypertrophy and bone density stimulus while keeping joints in healthy, low-shear vectors.
              </p>
            </div>

            {/* PILLAR 2 */}
            <div className="bg-secondary/30 p-10 rounded-3xl border border-border-grid group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 font-black text-2xl shadow-lg shadow-primary/20">
                02
              </div>
              <h3 className="text-2xl font-display font-black text-primary mb-4 uppercase tracking-tight">Joint bulletproofing</h3>
              <p className="text-neutral-dark/70 leading-relaxed font-medium">
                Daily mobility flows and active joint resets integrated into your dashboard. Improve thoracic extension, restore internal hip rotation, and stabilize the scapula to move pain-free.
              </p>
            </div>

            {/* PILLAR 3 */}
            <div className="bg-secondary/30 p-10 rounded-3xl border border-border-grid group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 font-black text-2xl shadow-lg shadow-primary/20">
                03
              </div>
              <h3 className="text-2xl font-display font-black text-primary mb-4 uppercase tracking-tight">Healthspan Habits</h3>
              <p className="text-neutral-dark/70 leading-relaxed font-medium">
                Coaching goes beyond the gym. Track sleep hygiene, nervous system down-regulation, hydration, and optimize your metabolic health using custom-tailored AI macro and meal planning frameworks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURE 1: INTERACTIVE MOBILITY & LONGEVITY ASSESSMENT QUIZ */}
      <section id="quiz-section" className="py-24 bg-neutral-light relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AssessmentQuiz />
        </div>
      </section>

      {/* FEATURE 2: INTERACTIVE AI COACH DEMO */}
      <section id="demo-section" className="py-24 bg-white border-y border-border-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            {/* Left Column: Context & Copy */}
            <div className="lg:col-span-5">
              <span className="text-accent text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-accent/10 border border-accent/20">AI Co-Pilot</span>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-primary tracking-tight mt-6 mb-8 leading-tight">
                Your 24/7 Longevity Expert
              </h2>
              <p className="text-neutral-dark/60 text-lg font-medium leading-relaxed mb-10">
                The Forge40 AI Coach is trained on thousands of pages of exercise physiology and longevity protocols. It's built for the mature body that needs smart, joint-friendly adjustments.
              </p>

              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-primary/30">Ask the Coach:</span>
                {demoQuestions.map((qObj, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDemoQuestionClick(qObj)}
                    disabled={isTyping}
                    className="w-full text-left p-5 text-sm font-bold text-primary bg-secondary/30 hover:bg-secondary/50 border-2 border-transparent hover:border-accent/20 rounded-2xl transition-all active:scale-99 disabled:opacity-50 flex items-center justify-between group"
                  >
                    <span>"{qObj.q}"</span>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Chat Interface */}
            <div className="lg:col-span-7">
              <div className="bg-primary rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(19,46,39,0.3)] overflow-hidden flex flex-col h-[600px] border-8 border-primary">
                
                {/* Chat Header */}
                <div className="bg-primary p-6 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center font-black text-white text-sm shadow-lg shadow-accent/20">
                      FC
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-black text-white leading-none mb-1">AI Coach</h4>
                      <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Active Intelligence
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-secondary/5">
                  {chatHistory.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-[1.5rem] px-6 py-4 text-sm font-medium leading-relaxed shadow-sm ${
                          msg.sender === 'user'
                            ? 'bg-accent text-white rounded-br-none'
                            : 'bg-white text-primary rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white rounded-[1.5rem] rounded-bl-none px-6 py-4 max-w-[85%] flex items-center gap-1.5 shadow-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Footer */}
                <div className="p-6 bg-white flex items-center gap-3">
                  <div className="flex-1 bg-secondary/40 rounded-2xl px-5 py-4 text-sm font-bold text-primary/40">
                    Type a question...
                  </div>
                  <button className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-primary/20 opacity-50 cursor-not-allowed">
                    ↑
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE BLUEPRINT PRODUCT PREVIEW */}
      <section className="py-24 bg-secondary/20 border-b border-border-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img src="/assets/dashboard-preview.png" alt="Forge40 Dashboard Preview" className="w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border-grid" />
            </div>
            <div className="lg:w-1/2">
              <span className="text-accent text-xs font-black uppercase tracking-[0.2em] mb-4 block">Best Entry Value</span>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-primary tracking-tight mb-6">
                The Forge40 <br />
                <span className="text-accent">Longevity Dashboard</span>
              </h2>
              <p className="text-lg text-neutral-dark/60 font-medium mb-8 leading-relaxed">
                Our signature $49 one-time product. A complete interactive system in Excel or Notion that tracks your strength, recovery habits, and longevity biomarkers with medical-grade precision.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Workout Tracker (40+)', 'Recovery Habit Checklist', 'AI Meal Planning Prompts', 'Longevity Biomarker Hub'].map(f => (
                  <li key={f} className="flex items-center gap-2 font-bold text-primary text-sm">
                    <span className="text-accent font-black">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-black rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                Get The Blueprint - $49
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-accent text-sm font-black uppercase tracking-[0.2em] mb-4">Investment in Healthspan</h2>
            <p className="text-4xl font-display font-black text-primary mb-10">Choose Your Tier</p>
            
            {/* Toggle Switch */}
            <div className="inline-flex items-center gap-4 bg-secondary/50 p-2 rounded-2xl border border-border-grid">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${!isAnnual ? 'bg-white text-primary shadow-sm' : 'text-primary/40'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${isAnnual ? 'bg-white text-primary shadow-sm' : 'text-primary/40'}`}
              >
                Annual <span className="text-[10px] bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded-md">-40%</span>
              </button>
            </div>
          </div>

          <div id="stack" className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* TIER 1: LEAD MAGNET */}
            <div className="bg-white border border-border-grid p-8 rounded-[2rem] flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 transition-all">
              <div>
                <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest block mb-6">Tier 01 / Free</span>
                <h3 className="text-xl font-display font-black text-primary mb-2">Assessment Quiz</h3>
                <p className="text-neutral-dark/50 text-xs font-bold mb-8 leading-relaxed">Personalized baseline mobility reports to find your starting point.</p>
                <div className="text-4xl font-display font-black text-primary mb-8">$0</div>
                <ul className="space-y-4 text-xs font-bold text-neutral-dark/70 border-t border-border-grid pt-8 mb-8">
                  <li>✓ 15-question core assessment</li>
                  <li>✓ Custom mobility index</li>
                  <li>✓ Recommendation engine</li>
                </ul>
              </div>
              <a href="#quiz-section" className="w-full text-center py-4 bg-secondary text-primary font-black text-xs rounded-xl hover:bg-border-grid transition-colors">
                Start Free
              </a>
            </div>

            {/* TIER 2: THE BLUEPRINT */}
            <div className="bg-white border border-border-grid p-8 rounded-[2rem] flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 transition-all">
              <div>
                <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest block mb-6">Tier 02 / One-Time</span>
                <h3 className="text-xl font-display font-black text-primary mb-2">The Blueprint</h3>
                <p className="text-neutral-dark/50 text-xs font-bold mb-8 leading-relaxed">Interactive "Forge40 Longevity Dashboard" system for Excel or Notion.</p>
                <div className="text-4xl font-display font-black text-primary mb-8">$49</div>
                <ul className="space-y-4 text-xs font-bold text-neutral-dark/70 border-t border-border-grid pt-8 mb-8">
                  <li>✓ Workout Tracker (40+)</li>
                  <li>✓ Sleep Optimization Pack</li>
                  <li>✓ AI Meal-Planning Prompts</li>
                </ul>
              </div>
              <button className="w-full py-4 bg-secondary text-primary font-black text-xs rounded-xl hover:bg-border-grid transition-colors">
                Buy Now
              </button>
            </div>

            {/* TIER 3: MEMBERSHIP */}
            <div className="bg-primary p-8 rounded-[2.5rem] flex flex-col justify-between relative shadow-2xl shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                Recommended
              </div>
              <div>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest block mb-6">Tier 03 / Membership</span>
                <h3 className="text-xl font-display font-black text-white mb-2">The Training Club</h3>
                <p className="text-secondary/40 text-xs font-bold mb-8 leading-relaxed">Full training library and unlimited AI Coach access 24/7.</p>
                <div className="text-4xl font-display font-black text-white mb-8">
                  {isAnnual ? '$199' : '$29'}
                  <span className="text-xs text-white/40 ml-2 font-black">{isAnnual ? '/year' : '/mo'}</span>
                </div>
                <ul className="space-y-4 text-xs font-bold text-white border-t border-white/5 pt-8 mb-8">
                  <li className="text-accent font-black underline underline-offset-4 decoration-2">★ 24/7 Unlimited AI Coach</li>
                  <li>✓ 12-week Progressive Strength</li>
                  <li>✓ Kettlebell & Bodyweight Tracks</li>
                  <li>✓ Daily Mobility Reset Flows</li>
                </ul>
              </div>
              <button className="w-full py-5 bg-accent text-white font-black text-sm rounded-2xl shadow-xl shadow-accent/20 hover:bg-accent/90 transition-all">
                Join Now
              </button>
            </div>

            {/* TIER 4: HYBRID */}
            <div className="bg-white border border-border-grid p-8 rounded-[2rem] flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 transition-all">
              <div>
                <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest block mb-6">Tier 04 / Premium</span>
                <h3 className="text-xl font-display font-black text-primary mb-2">Hybrid Coaching</h3>
                <p className="text-neutral-dark/50 text-xs font-bold mb-8 leading-relaxed">The ultimate combination of AI speed and certified human oversight.</p>
                <div className="text-4xl font-display font-black text-primary mb-8">$149<span className="text-xs text-primary/40 ml-1 font-black">/mo</span></div>
                <ul className="space-y-4 text-xs font-bold text-neutral-dark/70 border-t border-border-grid pt-8 mb-8">
                  <li>✓ Weekly AI-driven check-ins</li>
                  <li>✓ Monthly human form reviews</li>
                  <li>✓ Includes all Membership perks</li>
                </ul>
              </div>
              <button className="w-full py-4 bg-secondary text-primary font-black text-xs rounded-xl hover:bg-border-grid transition-colors">
                Apply Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 border-b border-white/5 pb-20">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="/assets/logo.png" alt="Forge40 Logo" className="h-8 w-auto brightness-0 invert" />
                <span className="font-display font-black text-2xl tracking-tighter">FORGE<span className="text-accent">40</span></span>
              </div>
              <p className="text-secondary/40 text-sm font-bold leading-relaxed mb-8">
                The science of strength and the art of longevity. We help the high-performing professional stay strong, mobile, and injury-free for the long game.
              </p>
              <div className="flex gap-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"></div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-accent">Company</h4>
                <ul className="space-y-4 text-sm font-bold text-secondary/60">
                  <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Methodology</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-accent">Products</h4>
                <ul className="space-y-4 text-sm font-bold text-secondary/60">
                  <li><a href="#" className="hover:text-white transition-colors">The Blueprint</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Training Club</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Hybrid Coaching</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-accent">Support</h4>
                <ul className="space-y-4 text-sm font-bold text-secondary/60">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            <p>© 2026 FORGE40 STRENGTH & LONGEVITY. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <span>DESIGNED BY FORGE40 STUDIO</span>
              <span>POWERED BY AI COACH v2.0</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
