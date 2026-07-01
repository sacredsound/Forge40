import { useState } from 'react'

const AssessmentQuiz = () => {
  const [step, setStep] = useState(0) // 0: Intro, 1-10: Questions, 11: Result
  const [email, setEmail] = useState('')
  const [answers, setAnswers] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [scoreData, setScoreData] = useState(null)

  const questions = [
    {
      id: 1,
      category: 'Joint Health',
      text: 'Over the last 30 days, how would you describe your joint comfort and morning stiffness?',
      options: [
        { text: 'I wake up feeling stiff and achy — it takes 20+ minutes to loosen up.', points: 1 },
        { text: 'My lower back, knees, or hips ache by mid-afternoon most days.', points: 2 },
        { text: 'I feel some mild stiffness in 1-2 joints occasionally, but it fades within 10 minutes.', points: 3 },
        { text: 'I rarely notice joint discomfort — movement feels fluid and pain-free.', points: 5 }
      ]
    },
    {
      id: 2,
      category: 'Cardiovascular / General Fitness',
      text: 'How many days per week do you intentionally exercise for at least 20 minutes?',
      options: [
        { text: 'Rarely — less than once a week, sometimes none.', points: 1 },
        { text: '1-2 days per week.', points: 2 },
        { text: '3 days per week — I\'m consistent but not daily.', points: 3 },
        { text: '4-5 days per week — exercise is a regular habit.', points: 4 },
        { text: '6-7 days per week — movement is a lifestyle.', points: 5 }
      ]
    },
    {
      id: 3,
      category: 'Strength & Functional Power',
      text: 'Compared to five years ago, how would you rate your current strength level?',
      options: [
        { text: 'I feel noticeably weaker — getting up from a low chair or carrying groceries feels harder.', points: 1 },
        { text: 'I\'ve lost some strength, but I can still manage daily tasks without help.', points: 2 },
        { text: 'I\'m roughly at the same level — no major loss, but no gains either.', points: 3 },
        { text: 'I\'m actively working on strength and I\'m stronger than I was 5 years ago.', points: 4 },
        { text: 'I\'m stronger than ever — progressive training has given me back my 20s-level power.', points: 5 }
      ]
    },
    {
      id: 4,
      category: 'Sleep & Recovery',
      text: 'How would you rate your typical sleep quality?',
      options: [
        { text: 'Poor — I get under 5 hours, wake frequently, or feel unrested.', points: 1 },
        { text: 'Fair — I get 5-6 hours, but it\'s often interrupted.', points: 2 },
        { text: 'Good — I get 6-7 hours most nights and wake feeling fairly refreshed.', points: 3 },
        { text: 'Excellent — I get 7.5-8.5 hours in a cool, dark room and sleep deeply.', points: 5 }
      ]
    },
    {
      id: 5,
      category: 'Mobility & Range of Motion',
      text: 'Can you comfortably squat down (e.g., to pick something off the floor) without using your hands for support?',
      options: [
        { text: 'No — I need to use my hands on furniture or my knees to get back up.', points: 1 },
        { text: 'I can squat down but I feel tightness in my hips, ankles, or lower back.', points: 2 },
        { text: 'Yes — I can squat to parallel and return without discomfort.', points: 3 },
        { text: 'Yes — I can do a full deep squat and hold it for 30+ seconds.', points: 5 }
      ]
    },
    {
      id: 6,
      category: 'Joint Health / Injury Prevention',
      text: 'Have you experienced any of the following pain in the last 3 months? (Select all that apply)',
      type: 'multi',
      options: [
        { text: 'Chronic lower back pain (lasting 2+ weeks)', id: 'back' },
        { text: 'Knee pain when walking stairs', id: 'knee' },
        { text: 'Shoulder pain when reaching overhead', id: 'shoulder' },
        { text: 'Hip pain after sitting for 30+ minutes', id: 'hip' },
        { text: 'Wrist or elbow pain during daily tasks', id: 'wrist' },
        { text: 'None of the above — I am pain-free.', id: 'none' }
      ]
    },
    {
      id: 7,
      category: 'Cardio / Heart Health',
      text: 'Can you climb 3 flights of stairs without stopping, and without feeling significantly out of breath?',
      options: [
        { text: 'No — I\'m out of breath after one flight.', points: 1 },
        { text: 'I can climb them, but I need to pause briefly on the landing.', points: 2 },
        { text: 'I can climb 3 flights without stopping, but I\'m breathing hard at the top.', points: 3 },
        { text: 'Yes — I can climb 3 flights easily and talk normally when I reach the top.', points: 5 }
      ]
    },
    {
      id: 8,
      category: 'Activity / NEAT',
      text: 'Approximately how many steps do you take on an average day (excluding dedicated workouts)?',
      options: [
        { text: 'Under 3,000 steps — mostly sedentary.', points: 1 },
        { text: '3,000 – 5,999 steps — light movement.', points: 2 },
        { text: '6,000 – 7,999 steps — moderately active.', points: 3 },
        { text: '8,000 – 10,000+ steps — consistently active.', points: 5 }
      ]
    },
    {
      id: 9,
      category: 'Functional Strength / Fall Prevention',
      text: 'How long can you stand on one leg (without support, eyes open)?',
      options: [
        { text: 'Less than 10 seconds — I wobble immediately.', points: 1 },
        { text: '10–20 seconds — I\'m a bit shaky but can hold.', points: 2 },
        { text: '20–30 seconds — decent stability.', points: 3 },
        { text: '30+ seconds — strong balance and core stability.', points: 5 }
      ]
    },
    {
      id: 10,
      category: 'Recovery / Nervous System Health',
      text: 'How often do you feel adequately recovered and mentally recharged between workouts or busy workdays?',
      options: [
        { text: 'Rarely — I feel constantly drained or overtrained.', points: 1 },
        { text: 'Sometimes — I recover, but it takes longer than it used to.', points: 2 },
        { text: 'Often — I manage recovery reasonably well with sleep and nutrition.', points: 3 },
        { text: 'Almost always — I prioritize recovery and feel ready for each day.', points: 5 }
      ]
    }
  ]

  const handleAnswer = (questionId, value) => {
    if (questions.find(q => q.id === questionId).type === 'multi') {
      const current = answers[questionId] || []
      let updated
      if (value === 'none') {
        updated = ['none']
      } else {
        updated = current.filter(v => v !== 'none')
        if (updated.includes(value)) {
          updated = updated.filter(v => v !== value)
        } else {
          updated = [...updated, value]
        }
      }
      setAnswers({ ...answers, [questionId]: updated })
    } else {
      setAnswers({ ...answers, [questionId]: value })
      if (step < 10) setStep(step + 1)
    }
  }

  const calculateResults = async () => {
    setIsSubmitting(true)
    let total = 0
    // Q1-5, 7-10
    for (let i of [1, 2, 3, 4, 5, 7, 8, 9, 10]) {
      total += answers[i] || 0
    }
    // Q6 special logic
    const q6Answers = answers[6] || []
    if (q6Answers.includes('none') || q6Answers.length === 0) {
      total += 5
    } else {
      total += Math.max(0, 5 - q6Answers.length)
    }

    let bucket, label, description, color, badgeBg
    if (total <= 19) {
      bucket = 'critical'
      label = 'Foundation Phase Needed'
      color = '#E53E3E'
      badgeBg = '#FFF5F5'
      description = 'Your baseline indicates several areas need immediate attention. The good news: targeted 40+ training can reverse many of these markers within 90 days.'
    } else if (total <= 33) {
      bucket = 'warning'
      label = 'Building Block Phase'
      color = '#DD6B20'
      badgeBg = '#FFFAF0'
      description = 'You have a decent foundation, but key gaps in strength, mobility, or recovery are holding back your healthspan. Focused work will unlock rapid gains.'
    } else if (total <= 42) {
      bucket = 'progressing'
      label = 'Optimization Phase'
      color = '#38A169'
      badgeBg = '#F0FFF4'
      description = 'You\'re doing better than most people your age. Fine-tuning specific areas (sleep optimization, mobility, or strength plateaus) will extend your prime years.'
    } else {
      bucket = 'elite'
      label = 'Longevity Leader Phase'
      color = '#2B6CB0'
      badgeBg = '#EBF4FF'
      description = 'You\'re in the top tier of healthspan markers. Focus on maintenance, injury prevention, and progressive overload to stay ahead.'
    }

    const categoryScores = [
      { name: 'Joint Health', score: (answers[1] || 0) + (q6Answers.includes('none') || q6Answers.length === 0 ? 5 : Math.max(0, 5 - q6Answers.length)), max: 10 },
      { name: 'Cardiovascular', score: (answers[2] || 0) + (answers[7] || 0), max: 10 },
      { name: 'Strength & Power', score: (answers[3] || 0) + (answers[9] || 0), max: 10 },
      { name: 'Sleep & Recovery', score: (answers[4] || 0) + (answers[10] || 0), max: 10 },
      { name: 'Mobility & ROM', score: (answers[5] || 0) * 2, max: 10 },
      { name: 'Activity / NEAT', score: (answers[8] || 0) * 2, max: 10 }
    ]

    const data = {
      total,
      bucket,
      label,
      description,
      color,
      badgeBg,
      categories: categoryScores,
      email
    }

    setScoreData(data)

    // Persist to DB via API
    try {
      await fetch('/api/quiz-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          score: total,
          bucket,
          answers_json: JSON.stringify(answers)
        })
      })
    } catch (e) {
      console.error('Failed to save quiz results', e)
    }

    setIsSubmitting(false)
    setStep(11)
  }

  if (step === 0) {
    return (
      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-border-grid animate-in fade-in zoom-in-95 duration-500">
        <div className="relative h-48 overflow-hidden">
          <img src="/assets/quiz-header.png" alt="Quiz Header" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80 flex items-center justify-center p-8">
            <img src="/assets/logo.png" alt="Forge40 Logo" className="h-12 w-auto brightness-0 invert" />
          </div>
        </div>
        <div className="p-10 text-center">
          <h2 className="text-3xl font-display font-black text-primary mb-4">Your Longevity & Mobility Baseline Starts Here</h2>
          <p className="text-neutral-dark/60 font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
            Answer 10 quick, science-backed questions about your body's current state. In under 2 minutes, you'll receive a personalized baseline report.
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <input 
              type="email" 
              placeholder="Enter your email for the report"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-xl border-2 border-border-grid focus:border-accent outline-none font-bold text-primary transition-all"
            />
            <button 
              onClick={() => step === 0 && email.includes('@') && setStep(1)}
              disabled={!email.includes('@')}
              className="w-full py-5 bg-accent hover:bg-accent/90 disabled:opacity-50 text-white font-black rounded-xl transition-all shadow-xl shadow-accent/20 active:scale-98"
            >
              Start Free Assessment →
            </button>
            <p className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Join 2,400+ members over 40</p>
          </div>
        </div>
      </div>
    )
  }

  if (step <= 10) {
    const q = questions[step - 1]
    return (
      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-border-grid animate-in fade-in slide-in-from-right-4 duration-500">
        <div className="p-10 sm:p-14">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-accent transition-all duration-500" style={{ width: `${(step / 10) * 100}%` }}></div>
            </div>
            <span className="text-xs font-black text-primary/40 uppercase tracking-tighter">Question {step}/10</span>
          </div>

          <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4 block">{q.category}</span>
          <h3 className="text-2xl sm:text-3xl font-display font-black text-primary mb-10 tracking-tight leading-tight">{q.text}</h3>

          <div className="space-y-4">
            {q.options.map((opt, idx) => {
              const isSelected = q.type === 'multi' ? (answers[q.id] || []).includes(opt.id) : answers[q.id] === opt.points
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(q.id, q.type === 'multi' ? opt.id : opt.points)}
                  className={`w-full p-5 rounded-2xl border-2 text-left font-bold transition-all duration-200 group flex items-center justify-between ${
                    isSelected ? 'border-accent bg-light-accent text-primary' : 'border-border-grid text-primary/60 hover:border-accent hover:bg-light-accent hover:text-primary'
                  }`}
                >
                  <span className="flex-1">{opt.text}</span>
                  <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected ? 'bg-accent border-accent text-white' : 'border-border-grid group-hover:border-accent text-accent'
                  }`}>
                    {q.type === 'multi' ? (isSelected ? '✓' : '+') : '→'}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="mt-12 flex items-center justify-between">
            <button 
              onClick={() => setStep(step - 1)}
              className="text-xs font-black text-primary/40 hover:text-accent uppercase tracking-widest transition-colors"
            >
              ← Back
            </button>
            {q.type === 'multi' && (
              <button 
                onClick={() => step < 10 ? setStep(step + 1) : calculateResults()}
                className="px-8 py-3 bg-primary text-white font-black text-xs rounded-full shadow-lg hover:bg-primary/90 transition-all active:scale-95"
              >
                Continue →
              </button>
            )}
            {step === 10 && q.type !== 'multi' && answers[10] && (
               <button 
               onClick={() => calculateResults()}
               className="px-8 py-3 bg-accent text-white font-black text-xs rounded-full shadow-lg hover:bg-accent/90 transition-all active:scale-95"
             >
               Generate Report →
             </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Result Step (11)
  if (step === 11 && scoreData) {
    const { total, bucket, label, description, color, badgeBg, categories, email } = scoreData
    return (
      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-border-grid animate-in fade-in zoom-in-95 duration-700">
        {/* Report Header */}
        <div className="relative h-64">
          <img src="/assets/quiz-header.png" alt="Quiz Header" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85 p-8 flex flex-col items-center justify-center text-center">
            <img src="/assets/logo.png" alt="Logo" className="h-16 w-auto mb-6 brightness-0 invert" />
            <h2 className="text-white font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-2">Your Longevity & Mobility Baseline</h2>
            <div className="flex items-center gap-4 text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">
              <span>Report generated: {new Date().toLocaleDateString()}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span>For: {email}</span>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-12">
          {/* Score Summary Card */}
          <div className="bg-secondary/20 rounded-[2rem] border border-border-grid p-10 text-center mb-12">
            <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-6 block">Your Longevity Score</span>
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                 <span className="text-8xl font-display font-black tracking-tighter" style={{ color }}>{total}</span>
                 <span className="text-xl font-black text-primary/20 absolute -bottom-2 -right-8">/ 49</span>
              </div>
              <div className="px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-sm" style={{ backgroundColor: badgeBg, color }}>
                {label}
              </div>
            </div>
            <p className="mt-10 text-neutral-dark/70 font-medium leading-relaxed max-w-xl mx-auto">
              {description}
            </p>
          </div>

          {/* Category Breakdown */}
          <div className="mb-16">
            <h3 className="text-primary font-display font-black text-xl mb-8 uppercase tracking-tight">Breakdown by Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {categories.map((cat, idx) => {
                const percent = (cat.score / cat.max) * 100
                const icon = percent <= 40 ? '🔴' : percent <= 70 ? '⚠️' : '✅'
                return (
                  <div key={idx} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-black text-primary uppercase tracking-tight">{cat.name}</span>
                      <div className="flex items-center gap-2">
                         <span className="text-xs font-bold text-primary/40">{cat.score}/{cat.max}</span>
                         <span>{icon}</span>
                      </div>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full transition-all duration-1000" style={{ width: `${percent}%`, backgroundColor: color }}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bucket Specific CTA Section */}
          <div className="bg-primary rounded-[2rem] p-10 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
             <div className="relative z-10">
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Your Next Step: {bucket === 'critical' ? 'The Foundation' : bucket === 'warning' ? 'Accelerate Progress' : bucket === 'progressing' ? 'Optimize & Master' : 'Stay Unstoppable'}</span>
                
                {bucket === 'critical' && (
                  <>
                    <h3 className="text-3xl font-display font-black mb-6">Start With The Blueprint</h3>
                    <p className="text-secondary/60 mb-8 font-medium leading-relaxed">Your body is signaling for help. Targeted 40+ training can reverse these markers. What you need right now is a structured reset.</p>
                  </>
                )}
                {bucket === 'warning' && (
                  <>
                    <h3 className="text-3xl font-display font-black mb-6">Build Lasting Resilience</h3>
                    <p className="text-secondary/60 mb-8 font-medium leading-relaxed">You have a decent foundation. Now it's time to build real strength and close the gaps in your mobility protocols.</p>
                  </>
                )}
                {bucket === 'progressing' && (
                  <>
                    <h3 className="text-3xl font-display font-black mb-6">Turn Good Into Elite</h3>
                    <p className="text-secondary/60 mb-8 font-medium leading-relaxed">You're doing better than most. Fine-tuning your sleep and periodization will extend your prime years indefinitely.</p>
                  </>
                )}
                {bucket === 'elite' && (
                  <>
                    <h3 className="text-3xl font-display font-black mb-6">Maintain Your Edge</h3>
                    <p className="text-secondary/60 mb-8 font-medium leading-relaxed">You are a longevity leader. Focus on injury prevention and biomarker tracking to stay ahead of the curve.</p>
                  </>
                )}

                <div className="space-y-6 mb-10">
                   {['structured strength & mobility reset', 'recovery habit optimization', 'joint-safe progressive overload'].map(f => (
                     <div key={f} className="flex items-center gap-3 text-sm font-bold">
                        <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-[10px]">✓</div>
                        <span className="capitalize">{f}</span>
                     </div>
                   ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                   {(bucket === 'critical' || bucket === 'warning') ? (
                     <>
                      <button className="flex-1 px-8 py-5 bg-accent text-white font-black rounded-xl shadow-xl shadow-accent/40 hover:bg-accent/90 transition-all active:scale-95 text-center">
                        Get The Blueprint — $49
                      </button>
                      <button className="flex-1 px-8 py-5 bg-white/10 border border-white/20 text-white font-black rounded-xl hover:bg-white/20 transition-all text-center">
                        Join Membership — $29/mo
                      </button>
                     </>
                   ) : (
                     <>
                      <button className="flex-1 px-8 py-5 bg-accent text-white font-black rounded-xl shadow-xl shadow-accent/40 hover:bg-accent/90 transition-all active:scale-95 text-center">
                        Join Membership — $29/mo
                      </button>
                      <button className="flex-1 px-8 py-5 bg-white/10 border border-white/20 text-white font-black rounded-xl hover:bg-white/20 transition-all text-center">
                        Hybrid Coaching — $149/mo
                      </button>
                     </>
                   )}
                </div>
             </div>
          </div>

          <div className="mt-12 text-center">
             <button onClick={() => setStep(0)} className="text-[10px] font-black text-primary/30 uppercase tracking-widest hover:text-accent transition-colors">Retake assessment</button>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default AssessmentQuiz
