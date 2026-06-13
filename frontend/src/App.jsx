import { useState } from 'react'

function App() {
  // Billing cycle toggle: false = Monthly ($29/mo), true = Annual ($199/yr - save 40%)
  const [isAnnual, setIsAnnual] = useState(false)

  // Interactive Quiz State
  const [quizStep, setQuizStep] = useState(1)
  const [quizAnswers, setQuizAnswers] = useState({
    age: '',
    goal: '',
    pain: ''
  })
  const [quizResultReady, setQuizResultReady] = useState(false)

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

  const resetQuiz = () => {
    setQuizStep(1)
    setQuizAnswers({ age: '', goal: '', pain: '' })
    setQuizResultReady(false)
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-600 selection:text-white">
      
      {/* HEADER & NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-lg flex items-center justify-center font-bold text-white text-lg tracking-wider shadow-md shadow-purple-500/20">
              F40
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-purple-400 bg-clip-text text-transparent">
              FORGE<span className="text-purple-500">40</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#pillars" className="hover:text-purple-400 transition-colors">Our Pillars</a>
            <a href="#stack" className="hover:text-purple-400 transition-colors">Product Stack</a>
            <a href="#quiz-section" className="hover:text-purple-400 transition-colors">Mobility Quiz</a>
            <a href="#demo-section" className="hover:text-purple-400 transition-colors">AI Coach Demo</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
          </nav>

          <div>
            <a 
              href="#quiz-section" 
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-all duration-200 shadow-md shadow-purple-600/20 hover:shadow-purple-500/30 active:scale-95"
            >
              Take Free Quiz
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-purple-400 font-medium mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            Re-engineered fitness for active adults aged 40–60
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-8">
            Build Lasting Strength. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Bulletproof Your Joints.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Forge40 combines interactive AI coaching, progressive training tracks, and restorative mobility templates to bridge the gap between static PDFs and expensive personal trainers. Designed for longevity and sustainable healthspan.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <a 
              href="#quiz-section" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-all duration-200 shadow-xl shadow-purple-600/25 hover:shadow-purple-500/35 active:scale-98"
            >
              Start Free Longevity Quiz
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#stack" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200"
            >
              View Pricing Tiers
            </a>
          </div>

          {/* Social Proof Bar */}
          <div className="mt-20 border-t border-slate-900 pt-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">Built in alignment with principles of</p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
              <span className="text-slate-400 font-bold tracking-tight text-lg sm:text-xl">🏋️ Progressive Overload</span>
              <span className="text-slate-400 font-bold tracking-tight text-lg sm:text-xl">🧘 Joint Mobility Resets</span>
              <span className="text-slate-400 font-bold tracking-tight text-lg sm:text-xl">🥗 Metabolic Optimization</span>
              <span className="text-slate-400 font-bold tracking-tight text-lg sm:text-xl">🧠 Sustainable Recovery</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section id="pillars" className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-purple-500 text-sm font-bold uppercase tracking-wider mb-3">The Forge40 Methodology</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Designed for Joint Health & Sustainable Strength
            </p>
            <p className="text-slate-400">
              Traditional fitness programs push you to failure. Forge40 builds you up. We specialize in functional vitality for busy lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* PILLAR 1 */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-6 font-black text-xl border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sustainable Strength</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Compound movements focused on the major muscle patterns. Re-engineered load dynamics to trigger maximum muscle hypertrophy and bone density stimulus while keeping joints in healthy, low-shear vectors.
              </p>
            </div>

            {/* PILLAR 2 */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6 font-black text-xl border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Joint bulletproofing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Daily mobility flows and active joint resets integrated into your dashboard. Improve thoracic extension, restore internal hip rotation, and stabilize the scapula to move pain-free.
              </p>
            </div>

            {/* PILLAR 3 */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl relative overflow-hidden group hover:border-pink-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-pink-500/10 text-pink-400 rounded-xl flex items-center justify-center mb-6 font-black text-xl border border-pink-500/20 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Healthspan Habits</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Coaching goes beyond the gym. Track sleep hygiene, nervous system down-regulation, hydration, and optimize your metabolic health using custom-tailored AI macro and meal planning frameworks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* THREE INTERACTIVE FEATURES: QUIZ, CHAT & PRICING SPLIT */}

      {/* FEATURE 1: INTERACTIVE MOBILITY & LONGEVITY ASSESSMENT QUIZ PREVIEW */}
      <section id="quiz-section" className="py-24 bg-slate-950/50 border-t border-slate-900 relative">
        <div className="absolute inset-0 bg-radial-at-t from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-purple-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">Lead Magnet</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-4">
              Get Your Personalized Longevity Score
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Answer 3 simple physical markers below to immediately preview your personalized longevity dashboard status and unlock your comprehensive report!
            </p>
          </div>

          {/* QUIZ INTERACTIVE BOX */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500"></div>
            
            {!quizResultReady ? (
              <div>
                {/* Step indicators */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Step {quizStep} of 3</span>
                  <div className="flex gap-1.5">
                    <div className={`w-8 h-1 rounded-full transition-all duration-300 ${quizStep >= 1 ? 'bg-purple-500' : 'bg-slate-800'}`}></div>
                    <div className={`w-8 h-1 rounded-full transition-all duration-300 ${quizStep >= 2 ? 'bg-purple-500' : 'bg-slate-800'}`}></div>
                    <div className={`w-8 h-1 rounded-full transition-all duration-300 ${quizStep >= 3 ? 'bg-purple-500' : 'bg-slate-800'}`}></div>
                  </div>
                </div>

                {/* Question 1: Age */}
                {quizStep === 1 && (
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">What is your current age category?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {['Under 40', '40 to 55', '56 and over'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setQuizAnswers(prev => ({ ...prev, age: option }))
                            setQuizStep(2)
                          }}
                          className={`p-4 rounded-xl border text-left font-medium transition-all duration-200 active:scale-98 ${
                            quizAnswers.age === option 
                              ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-500/10' 
                              : 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 text-slate-300'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Question 2: Primary Goal */}
                {quizStep === 2 && (
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">What is your primary training longevity goal?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {['Restore Joint Mobility', 'Build Dense, Hard Muscle', 'Fat Loss & High Energy'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setQuizAnswers(prev => ({ ...prev, goal: option }))
                            setQuizStep(3)
                          }}
                          className={`p-4 rounded-xl border text-left font-medium transition-all duration-200 active:scale-98 ${
                            quizAnswers.goal === option 
                              ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-500/10' 
                              : 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 text-slate-300'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <button 
                      onClick={() => setQuizStep(1)} 
                      className="mt-6 text-sm text-slate-500 hover:text-slate-300 underline underline-offset-4"
                    >
                      Back
                    </button>
                  </div>
                )}

                {/* Question 3: Pain Points */}
                {quizStep === 3 && (
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Do you currently suffer from chronic joint stiffness or nagging pain?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {['Yes, shoulders/knees/lower-back', 'Mild/occasional stiffness', 'No pain, I feel great'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            const updated = { ...quizAnswers, pain: option }
                            setQuizAnswers(updated)
                            setQuizResultReady(true)
                          }}
                          className={`p-4 rounded-xl border text-left font-medium transition-all duration-200 active:scale-98 ${
                            quizAnswers.pain === option 
                              ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-500/10' 
                              : 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 text-slate-300'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <button 
                      onClick={() => setQuizStep(2)} 
                      className="mt-6 text-sm text-slate-500 hover:text-slate-300 underline underline-offset-4"
                    >
                      Back
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* QUIZ SUCCESS STATE */
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Assessment baseline calculated!</h3>
                <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto mb-8">
                  Based on your age <span className="text-purple-400 font-bold">({quizAnswers.age})</span>, primary focus <span className="text-purple-400 font-bold">({quizAnswers.goal})</span>, and pain profile <span className="text-purple-400 font-bold">({quizAnswers.pain})</span>, you qualify for a custom baseline longevity dashboard.
                </p>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850 max-w-xl mx-auto mb-8 text-left">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-900">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Longevity Score Projection:</span>
                    <span className="text-emerald-400 font-black text-lg">78 / 100</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">▶</span> Joint Vector recommendation: Priority shoulder external rotation flows and hip flexor decompression templates.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">▶</span> Strength programming path: Kettlebell/dumbbell dynamic stabilization before full progressive barbell overload.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a 
                    href="#pricing"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all duration-200 active:scale-98"
                  >
                    Unlock Full Report (Buy Membership)
                  </a>
                  <button 
                    onClick={resetQuiz}
                    className="w-full sm:w-auto text-sm text-slate-400 hover:text-slate-200 py-3 underline underline-offset-4"
                  >
                    Retake Teaser Quiz
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* FEATURE 2: INTERACTIVE AI COACH DEMO */}
      <section id="demo-section" className="py-24 bg-slate-950/30 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Context & Copy */}
            <div className="lg:col-span-5">
              <span className="text-purple-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">Interactive Chat Demo</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-6 mb-6">
                Meet the Forge40 AI Longevity Coach
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Unlimited access to our web chatbot is a core pillar of the **Forge40 Membership**. Trained on certified exercise physiology, sports medicine, and healthspan protocols, the AI Coach operates 24/7.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Go ahead and simulate a conversation! Click one of our highly requested member questions to see exactly how your coach answers.
              </p>

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Select a prompt to ask:</span>
                {demoQuestions.map((qObj, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDemoQuestionClick(qObj)}
                    disabled={isTyping}
                    className="w-full text-left p-3.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-750 rounded-xl transition-all active:scale-99 disabled:opacity-50 block"
                  >
                    "{qObj.q}"
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Chat Interface */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[480px]">
                
                {/* Chat Header */}
                <div className="bg-slate-950 border-b border-slate-850 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-black text-white text-xs">
                      FC
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Forge40 AI Coach</h4>
                      <span className="text-xs text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        Online now
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">Demo Mode</span>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/20">
                  {chatHistory.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-purple-600 text-white rounded-br-none'
                            : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-bl-none p-4 max-w-[85%] flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Footer */}
                <div className="p-3 bg-slate-950 border-t border-slate-850 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type to ask (use prompt selection in demo)..."
                    disabled
                    className="flex-1 bg-slate-900 border border-slate-800 text-xs sm:text-sm rounded-xl px-4 py-3 text-slate-500 outline-none"
                  />
                  <button className="px-4 py-3 bg-purple-600 rounded-xl text-white font-bold text-xs cursor-not-allowed opacity-50">
                    Send
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOUR-TIER PRODUCT STACK COMPARISON & PRICING */}
      <section id="pricing" className="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-purple-500 text-sm font-bold uppercase tracking-wider mb-3">Flexible Ecosystem</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              The Forge40 Four-Tier Product Stack
            </p>
            <p className="text-slate-400">
              Start with our free lead magnet assessment quiz, buy the one-time blueprint dashboard, sub to the full AI membership, or opt for premium human coaching integration. No matter your stage, we have a perfect tier.
            </p>

            {/* Toggle Switch */}
            <div className="inline-flex items-center gap-3 mt-10 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
              <span className={`text-xs font-semibold ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>Monthly Billing</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-11 h-6 bg-purple-600 rounded-full relative transition-all duration-300 outline-none"
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all duration-300 ${isAnnual ? 'left-6' : 'left-1'}`}></div>
              </button>
              <span className={`text-xs font-semibold flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-500'}`}>
                Annual Billing <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-1.5 py-0.5 rounded-full">Save ~40%</span>
              </span>
            </div>
          </div>

          <div id="stack" className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* TIER 1: LEAD MAGNET */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between relative hover:border-slate-700 transition-all duration-200">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Tier 01 / Free Lead Magnet</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-1">Assessment Quiz</h3>
                <p className="text-slate-400 text-xs mb-6">Longevity & Mobility Assessment Quiz generates your personalized baseline mobility reports.</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-black text-white">$0</span>
                  <span className="text-xs text-slate-500"> / Free forever</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-400 border-t border-slate-800/80 pt-6 mb-6">
                  <li className="flex items-center gap-2">✓ 15-question core assessment</li>
                  <li className="flex items-center gap-2">✓ Custom mobility baseline index</li>
                  <li className="flex items-center gap-2">✓ Tailored mobility restriction identification</li>
                </ul>
              </div>
              <a href="#quiz-section" className="w-full text-center py-2.5 bg-slate-800 hover:bg-slate-700 font-semibold text-xs text-white rounded-lg transition-colors">
                Start Assessment Free
              </a>
            </div>

            {/* TIER 2: THE BLUEPRINT */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between relative hover:border-slate-700 transition-all duration-200">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Tier 02 / One-Time Purchase</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-1">The Blueprint</h3>
                <p className="text-slate-400 text-xs mb-6">Interactive "Forge40 Longevity Dashboard" spreadsheet/Notion habit tracker and template packs.</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-black text-white">$49</span>
                  <span className="text-xs text-slate-500"> / One-time buy</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-400 border-t border-slate-800/80 pt-6 mb-6">
                  <li className="flex items-center gap-2">✓ Notion Habit Tracking templates</li>
                  <li className="flex items-center gap-2">✓ Sleep optimization template</li>
                  <li className="flex items-center gap-2">✓ AI Meal-Planning custom prompts</li>
                </ul>
              </div>
              <button className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 font-semibold text-xs text-white rounded-lg transition-colors">
                Purchase Blueprint ($49)
              </button>
            </div>

            {/* TIER 3: MEMBERSHIP (MOST POPULAR / PRIMARY SUB) */}
            <div className="bg-gradient-to-b from-slate-900 to-indigo-950 border-2 border-purple-500 p-6 rounded-2xl flex flex-col justify-between relative shadow-xl shadow-purple-500/5 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full shadow-md">
                Most Popular Sub
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">Tier 03 / Recurring Subscription</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-1">The Membership</h3>
                <p className="text-slate-400 text-xs mb-6">Unlimited access to the training programs, mobility flows, and our smart AI Coach chatbot.</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-black text-white">{isAnnual ? '$199' : '$29'}</span>
                  <span className="text-xs text-slate-400">{isAnnual ? ' / year' : ' / month'}</span>
                  <div className="text-[10px] text-emerald-400 font-semibold mt-1">
                    {isAnnual ? 'Save $149 over monthly rates' : 'Cancel anytime'}
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 border-t border-indigo-900 pt-6 mb-6">
                  <li className="flex items-center gap-2 font-semibold text-purple-300">★ 24/7 Unlimited AI Coach access</li>
                  <li className="flex items-center gap-2">✓ 12-week progressive strength libraries</li>
                  <li className="flex items-center gap-2">✓ Kettlebell & Bodyweight tracks</li>
                  <li className="flex items-center gap-2">✓ Restoratives and daily mobility sets</li>
                </ul>
              </div>
              <button className="w-full py-3 bg-purple-600 hover:bg-purple-500 font-bold text-xs text-white rounded-lg shadow-md shadow-purple-600/20 hover:shadow-purple-500/30 transition-all duration-200">
                Join the Membership
              </button>
            </div>

            {/* TIER 4: HYBRID PREMIUM */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between relative hover:border-slate-700 transition-all duration-200">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Tier 04 / Premium High-Ticket</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-1">Hybrid Coaching</h3>
                <p className="text-slate-400 text-xs mb-6">Combine the digital power of the AI Coach with weekly certified human coach feedback and form reviews.</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-black text-white">$149</span>
                  <span className="text-xs text-slate-500"> / month</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-400 border-t border-slate-800/80 pt-6 mb-6">
                  <li className="flex items-center gap-2">✓ Weekly AI-driven check-ins</li>
                  <li className="flex items-center gap-2">✓ Monthly certified human coach consultation</li>
                  <li className="flex items-center gap-2">✓ Video form reviews & adjustments</li>
                  <li className="flex items-center gap-2">✓ Includes full Tier 03 Membership</li>
                </ul>
              </div>
              <button className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 font-semibold text-xs text-white rounded-lg transition-colors">
                Apply for Hybrid Coaching
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* CORE BENEFITS ACCORDION FAQ */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-purple-500 text-sm font-bold uppercase tracking-wider mb-3">Frequently Asked Questions</h2>
            <p className="text-3xl font-extrabold text-white tracking-tight">
              Got Questions? We’ve Got Answers
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left text-sm sm:text-base font-bold text-white hover:text-purple-400 transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-purple-500 ml-4">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-850 pt-4 bg-slate-950/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OPT-IN NEWSLETTER BAR */}
      <section className="py-16 bg-gradient-to-r from-purple-950/40 via-slate-950 to-indigo-950/40 border-t border-slate-900 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Optimize Your Healthspan Today</h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mb-8">
            Join 12,000+ active adults receiving our free weekly "Forge40 Longevity Blueprint" newsletter packed with 5-minute mobility resets and smart nutrition protocols.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert("Welcome to Forge40! Check your inbox soon.") }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              required
              placeholder="Enter your email address" 
              className="flex-1 bg-slate-900 border border-slate-800 px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 focus:border-purple-500 outline-none transition-colors"
            />
            <button 
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all active:scale-97"
            >
              Get Free Mobility Resets
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-500 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center font-bold text-white text-xs">F</div>
            <span className="font-extrabold text-white text-sm tracking-tight">FORGE<span className="text-purple-500">40</span></span>
          </div>

          <div className="flex gap-6 text-slate-400">
            <a href="#pillars" className="hover:text-purple-400 transition-colors">Our Pillars</a>
            <a href="#stack" className="hover:text-purple-400 transition-colors">Products</a>
            <a href="#quiz-section" className="hover:text-purple-400 transition-colors">Mobility Quiz</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
          </div>

          <p>© 2026 Forge40 Strength & Longevity System. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default App
