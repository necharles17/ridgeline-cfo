import './style.css'

// ============================================================
// AUDIT DATA
// ============================================================

const AUDITS = [
  {
    id: 'health',
    category: 'Financial Health Check',
    title: 'How financially healthy is your business?',
    description: 'A clear-eyed look at your cash position, margins, runway, and budgeting habits. Know exactly where you stand before it becomes a problem.',
    maxPoints: 19,
    questions: [
      {
        text: 'How well do you know your gross margin?',
        options: [
          { label: "Don't track it", points: 0 },
          { label: 'Ballpark numbers', points: 1 },
          { label: 'Know it precisely and review regularly', points: 3 },
        ],
      },
      {
        text: 'How many months of cash runway do you have right now?',
        options: [
          { label: 'Less than 1 month', points: 0 },
          { label: '1–3 months', points: 1 },
          { label: '3–6 months', points: 2 },
          { label: '6+ months', points: 3 },
        ],
      },
      {
        text: 'Do you maintain a rolling cash flow forecast?',
        options: [
          { label: 'No', points: 0 },
          { label: 'Informally', points: 1 },
          { label: 'Yes, formal forecast', points: 3 },
        ],
      },
      {
        text: 'How often do you review actuals vs. budget?',
        options: [
          { label: 'Never / no budget', points: 0 },
          { label: 'Once or twice a year', points: 1 },
          { label: 'Monthly', points: 2 },
          { label: 'Weekly or bi-weekly', points: 3 },
        ],
      },
      {
        text: 'Can you name the top 3 drivers of your profitability?',
        options: [
          { label: 'Not really', points: 0 },
          { label: 'General sense', points: 1 },
          { label: 'Yes, clearly, and I manage against them', points: 3 },
        ],
      },
      {
        text: 'How has your revenue trended over the last 12 months?',
        options: [
          { label: 'Declining', points: 0 },
          { label: 'Flat or inconsistent', points: 1 },
          { label: 'Growing less than 20%', points: 2 },
          { label: 'Growing 20% or more', points: 3 },
        ],
      },
      {
        text: 'Do you have a documented financial plan or budget for the current year?',
        options: [
          { label: 'No', points: 0 },
          { label: 'Informal only', points: 1 },
          { label: 'Yes, formal annual budget', points: 3 },
        ],
      },
    ],
    findings: {
      critical: [
        { label: 'Cash runway is a real risk', detail: "With less than 3 months of runway or no visibility into it, you're one slow month away from a crisis. This needs to be your first priority." },
        { label: 'No meaningful financial visibility', detail: "Without a regular view of actuals vs. budget, you're flying blind. Even a basic monthly review would change how you make decisions." },
        { label: 'Profitability drivers are unknown', detail: "If you don't know your margins by line, you don't know which parts of the business are worth doubling down on, and which ones are quietly dragging you down." },
        { label: 'No formal financial planning in place', detail: 'Operating without a documented budget or plan makes it nearly impossible to grow intentionally or catch problems before they compound.' },
      ],
      needsWork: [
        { label: 'Cash forecasting has gaps', detail: 'You have some visibility, but an inconsistent or informal forecast means surprises are more likely than they should be.' },
        { label: 'Margin awareness needs sharpening', detail: "Ballpark numbers aren't enough when pricing, hiring, or investment decisions are on the table. Precision here pays real dividends." },
        { label: 'Budget reviews are inconsistent', detail: 'Monthly reviews keep small variances from becoming big problems. Once-a-year reviews create blind spots that compound over time.' },
        { label: 'Revenue trajectory needs attention', detail: 'Flat or inconsistent revenue makes planning harder and signals that growth levers may not be clearly defined or actively managed.' },
      ],
      good: [
        { label: 'Strong financial foundation', detail: "You have real visibility into your numbers: cash, margins, and profitability. That puts you ahead of most businesses at your stage." },
        { label: 'Active monitoring in place', detail: 'Regular actuals vs. budget reviews mean you catch issues early and course-correct before they compound. This discipline matters.' },
        { label: 'Strategic forecasting is working', detail: "A rolling forecast is one of the most powerful tools a growing business can have. You're using it, and that's a genuine advantage." },
        { label: 'Budget discipline is a real asset', detail: 'A formal annual budget paired with regular reviews signals financial maturity. This is the foundation for confident, data-driven growth.' },
      ],
    },
  },
  {
    id: 'readiness',
    category: 'CFO Readiness Score',
    title: 'Have you outgrown your current finance setup?',
    description: "Find out if your business has outgrown its current finance function and whether you're leaving strategic value on the table by not having a CFO in the room.",
    maxPoints: 18,
    questions: [
      {
        text: 'What is your approximate annual revenue?',
        options: [
          { label: 'Under $1M', points: 0 },
          { label: '$1M–$5M', points: 1 },
          { label: '$5M–$20M', points: 2 },
          { label: '$20M+', points: 3 },
        ],
      },
      {
        text: 'How many full-time employees do you have?',
        options: [
          { label: 'Fewer than 5', points: 0 },
          { label: '5–15', points: 1 },
          { label: '15–35', points: 2 },
          { label: '35+', points: 3 },
        ],
      },
      {
        text: 'What does your current finance support look like in-house?',
        options: [
          { label: 'Nothing, owner handles finances', points: 3 },
          { label: 'Bookkeeper only', points: 3 },
          { label: 'Bookkeeper + outside accountant', points: 2 },
          { label: 'Controller or VP of Finance', points: 1 },
        ],
      },
      {
        text: 'Have you raised or are you planning to raise outside capital?',
        options: [
          { label: 'No, and no plans to', points: 1 },
          { label: 'Considering it in the next 2 years', points: 2 },
          { label: 'Yes, investors or debt covenants in place', points: 3 },
        ],
      },
      {
        text: 'Do you have a board, investors, or lenders you formally report to?',
        options: [
          { label: 'No, fully self-funded', points: 0 },
          { label: 'Informal advisors only', points: 1 },
          { label: 'Yes, formal reporting requirements', points: 3 },
        ],
      },
      {
        text: 'How often do you make major decisions without solid financial data?',
        options: [
          { label: 'Rarely', points: 0 },
          { label: 'Sometimes', points: 1 },
          { label: 'Often', points: 2 },
          { label: 'Almost always', points: 3 },
        ],
      },
      {
        text: 'Are you making big bets without financial models to back them up?',
        options: [
          { label: 'Yes, we move fast and figure it out', points: 3 },
          { label: 'Sometimes', points: 2 },
          { label: 'Rarely, we model before we move', points: 0 },
        ],
      },
    ],
    findings: {
      critical: [
        { label: 'Your finance setup may be underpowered', detail: "At your stage and complexity, relying on a bookkeeper or handling finances yourself leaves major strategic gaps. A fractional CFO could change the trajectory of your next 12 months." },
        { label: 'High-stakes decisions without financial backing', detail: "Making major bets without solid financial models is a pattern that catches up with growing companies. The cost of one bad call often outweighs a full year of CFO fees." },
        { label: 'Capital readiness gap', detail: "If you're considering outside capital, or already have investors, your current finance setup likely isn't built to support that. Lenders expect structured reporting and projections." },
        { label: 'Reporting exposure', detail: 'Without formal reporting infrastructure, your credibility and decision-making speed are limited. Structured financials build trust with investors, lenders, and your own leadership team.' },
      ],
      needsWork: [
        { label: 'You may be growing past your current setup', detail: "A bookkeeper and outside accountant work well early on, but at $5M+ with real complexity, you need more strategic financial leadership in the room." },
        { label: 'Financial blind spots remain', detail: "Decisions are sometimes made without full data. That works until it doesn't, and the misses at this scale tend to be expensive." },
        { label: 'Reporting structure is partial', detail: "You have some stakeholder reporting but it's not fully formalized. As you scale, this becomes a liability, both operationally and reputationally." },
        { label: 'Moderate decision risk', detail: "You're modeling some decisions but not consistently. Building that habit before it's urgent will save you from expensive surprises." },
      ],
      good: [
        { label: 'Well-structured for your stage', detail: "Your finance setup is aligned with where your business is, and that's harder to achieve than it sounds, and it matters for what's next." },
        { label: 'Solid decision-making framework', detail: "You're using financial data to drive major calls. That discipline separates businesses that scale cleanly from those that stumble through growth." },
        { label: 'Capital-ready posture', detail: "Whether you're raising or not, having the financial infrastructure in place means you're not scrambling when opportunity or pressure hits." },
        { label: 'Reporting discipline in place', detail: 'Formal reporting to stakeholders signals maturity and builds the kind of trust that opens doors with investors, lenders, and your own leadership team.' },
      ],
    },
  },
  {
    id: 'blindspots',
    category: 'Blind Spots Audit',
    title: 'What financial risks are hiding in your business?',
    description: "Uncover the gaps that don't show up on your P&L until they become expensive problems. Surface them now, on your terms, not under pressure.",
    maxPoints: 21,
    questions: [
      {
        text: 'How current is your bookkeeping?',
        options: [
          { label: 'Multiple months behind', points: 0 },
          { label: '30-60 days behind', points: 1 },
          { label: 'Within 30 days / current', points: 3 },
        ],
      },
      {
        text: 'Do you have a documented monthly close process?',
        options: [
          { label: 'No, informal or reactive', points: 0 },
          { label: 'Semi-structured but not documented', points: 1 },
          { label: 'Yes, close checklist and consistent timeline', points: 3 },
        ],
      },
      {
        text: 'Do you have documented financial controls: expense approvals, limits, and reconciliation?',
        options: [
          { label: 'No formal controls', points: 0 },
          { label: 'Informal / unwritten', points: 1 },
          { label: 'Yes, documented and enforced', points: 3 },
        ],
      },
      {
        text: 'Do you know which of your customers or clients are actually profitable to serve?',
        options: [
          { label: 'No, we treat all revenue the same', points: 0 },
          { label: 'Roughly, some are clearly better than others', points: 1 },
          { label: "Yes, I know exactly who's worth keeping and who isn't", points: 3 },
        ],
      },
      {
        text: 'When did you last do a formal pricing strategy review?',
        options: [
          { label: 'Never', points: 0 },
          { label: '2+ years ago', points: 1 },
          { label: 'Within the last year', points: 2 },
          { label: 'Regularly, bi-annual or more', points: 3 },
        ],
      },
      {
        text: 'Have you stress-tested your business against a 20-30% revenue drop?',
        options: [
          { label: 'No', points: 0 },
          { label: 'Thought through it informally', points: 1 },
          { label: 'Yes, documented contingency plan', points: 3 },
        ],
      },
      {
        text: 'If you were unexpectedly out of the business for 60 days, what would happen to your finances?',
        options: [
          { label: "It would be a problem, no one else has visibility", points: 0 },
          { label: "Someone could manage the basics but we'd struggle", points: 1 },
          { label: 'We have documented processes and someone who could step in', points: 3 },
        ],
      },
    ],
    findings: {
      critical: [
        { label: 'Books need to be caught up', detail: 'Multiple months of backlogged bookkeeping creates compounding risk: bad data, missed filings, and decisions based on numbers that no longer reflect reality.' },
        { label: "You don't know which customers are worth keeping", detail: "If all revenue looks the same, you're likely working hard for clients who don't actually move the needle. Knowing who's profitable to serve changes how you price, sell, and grow." },
        { label: 'Financial controls gap', detail: 'No documented expense approvals, reconciliation, or controls means errors and leakage are likely happening undetected. This is one of the first things a CFO addresses.' },
        { label: 'Your business is dependent on you in a risky way', detail: "If you disappeared for 60 days, your finances would likely be in serious trouble. That's a concentration risk that affects everything from business continuity to valuation." },
      ],
      needsWork: [
        { label: 'Controls are inconsistent', detail: "Informal controls are better than none, but they're not reliable. A documented process ensures nothing slips through as your team and transaction volume grows." },
        { label: 'Profitability data is incomplete', detail: "A general sense of what's profitable isn't enough for confident resource allocation. You need data you can act on, not instincts you can't defend." },
        { label: 'Close process is informal', detail: 'An undocumented close process leads to inconsistent timing and data quality. This creates downstream problems for forecasting and reporting.' },
        { label: 'Stress test is overdue', detail: "If you haven't modeled a 20-30% revenue drop, you don't know what it would take to survive one. That's a risk worth understanding before you need to." },
      ],
      good: [
        { label: 'Proactive pricing reviews', detail: "Regular pricing reviews signal financial maturity and ensure you're capturing fair value as your business evolves. This is a real differentiator." },
        { label: 'You know which customers are worth keeping', detail: "Understanding which clients are actually profitable to serve puts you in a position to make better decisions about pricing, sales, and where to invest your time." },
        { label: 'Strong financial controls in place', detail: 'Documented and enforced controls reduce risk, prevent leakage, and make audits, due diligence, and scaling dramatically easier.' },
        { label: 'Close process is buttoned up', detail: "A consistent, documented close process gives you reliable data on a predictable timeline. That's the foundation of good financial management." },
      ],
    },
  },
]

// ============================================================
// STATE
// ============================================================

const state = {
  view: 'hub',
  selectedAudit: null,
  currentQuestion: 0,
  // answers[i] = { optionIndex, points }
  answers: [],
  leadInfo: null,
  score: null,
}

// ============================================================
// SCORING
// ============================================================

function calculateScore(audit, answers) {
  const raw = answers.reduce((sum, a) => sum + a.points, 0)
  const pct = Math.round((raw / audit.maxPoints) * 100)
  const grade =
    pct >= 82 ? 'Excellent' :
    pct >= 62 ? 'Good' :
    pct >= 40 ? 'Needs Work' : 'Critical'
  return { raw, pct, grade }
}

function getFindings(audit, pct) {
  if (pct < 40) return audit.findings.critical
  if (pct < 70) return audit.findings.needsWork
  return audit.findings.good
}

function getGradeStyle(grade) {
  const map = {
    'Excellent': 'bg-green-100 text-green-700',
    'Good': 'bg-blue-100 text-blue-700',
    'Needs Work': 'bg-amber-100 text-amber-700',
    'Critical': 'bg-red-100 text-red-700',
  }
  return map[grade] || 'bg-slate-100 text-slate-700'
}

function getRingColor(grade) {
  const map = {
    'Excellent': '#16a34a',
    'Good': '#3B6B8A',
    'Needs Work': '#d97706',
    'Critical': '#dc2626',
  }
  return map[grade] || '#3B6B8A'
}

// ============================================================
// RENDER HELPERS
// ============================================================

const app = document.getElementById('app')

function setView(html) {
  app.innerHTML = html
  window.scrollTo({ top: 0, behavior: 'instant' })
}

// ============================================================
// VIEW: HUB
// ============================================================

function renderHub() {
  setView(`
    <section class="py-10 sm:py-14 bg-paper min-h-screen">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto">
          <p class="text-xs font-semibold tracking-widest uppercase text-forest">Financial Diagnostic Tools</p>
          <h1 class="mt-4 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal">
            How financially ready<br class="hidden sm:block"> is your business?
          </h1>
          <p class="mt-5 text-lg text-slate leading-relaxed">
            Pick an audit, answer 7 questions, and get a scored assessment with specific findings.
          </p>
        </div>
        <div class="mt-14 grid gap-6 sm:grid-cols-3">
          ${AUDITS.map(audit => `
            <div class="bg-white rounded-2xl border border-charcoal/5 p-8 flex flex-col reveal">
              <p class="text-xs font-semibold tracking-widest uppercase text-forest">${audit.category}</p>
              <h3 class="mt-3 font-serif text-xl font-semibold text-charcoal leading-snug">${audit.title}</h3>
              <p class="mt-3 text-slate text-sm leading-relaxed flex-1">${audit.description}</p>
              <div class="mt-6">
                <button
                  data-action="start-audit"
                  data-audit="${audit.id}"
                  class="w-full bg-steel text-white font-medium rounded-full px-6 py-3 hover:bg-steel/85 transition-colors"
                >
                  Start the Audit →
                </button>
                <p class="mt-3 text-center text-xs text-slate/70">7 questions · ~3 min</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `)

  requestAnimationFrame(() => {
    app.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('is-visible'), i * 100)
    })
  })
}

// ============================================================
// VIEW: QUIZ
// ============================================================

function renderQuiz() {
  const audit = state.selectedAudit
  const q = audit.questions[state.currentQuestion]
  const progress = Math.round((state.currentQuestion / audit.questions.length) * 100)
  const currentAnswer = state.answers[state.currentQuestion]

  setView(`
    <section class="py-16 sm:py-24 min-h-screen bg-paper">
      <div class="max-w-2xl mx-auto px-6">

        <!-- Progress -->
        <div class="mb-10">
          <div class="flex items-center justify-between mb-2">
            <p class="text-xs font-semibold tracking-widest uppercase text-forest">${audit.category}</p>
            <p class="text-xs text-slate">Question ${state.currentQuestion + 1} of ${audit.questions.length}</p>
          </div>
          <div class="h-1.5 bg-steel-light rounded-full overflow-hidden">
            <div class="h-full bg-steel rounded-full transition-all duration-500" style="width: ${progress}%"></div>
          </div>
        </div>

        <!-- Question -->
        <h2 class="font-serif text-2xl sm:text-3xl font-semibold text-charcoal leading-snug">
          ${q.text}
        </h2>

        <!-- Options -->
        <div class="mt-8 space-y-3">
          ${q.options.map((opt, i) => {
            const isSelected = currentAnswer !== undefined && currentAnswer.optionIndex === i
            const cls = isSelected
              ? 'border-steel bg-steel-light text-charcoal font-medium'
              : 'border-charcoal/15 bg-white text-charcoal hover:border-steel hover:bg-steel-light'
            return `
              <button
                data-action="select-answer"
                data-option-index="${i}"
                data-points="${opt.points}"
                class="w-full border rounded-xl px-6 py-4 text-left transition-all duration-150 ${cls}"
              >
                ${opt.label}
              </button>
            `
          }).join('')}
        </div>

        <!-- Navigation -->
        <div class="mt-10 flex items-center justify-between">
          ${state.currentQuestion > 0
            ? `<button data-action="prev-question" class="text-sm text-slate hover:text-charcoal transition-colors">← Back</button>`
            : '<div></div>'
          }
          <button data-action="reset" class="text-sm text-slate/60 hover:text-slate transition-colors">Start over</button>
        </div>

      </div>
    </section>
  `)
}

// ============================================================
// VIEW: EMAIL CAPTURE
// ============================================================

function renderEmail() {
  setView(`
    <section class="py-16 sm:py-24 min-h-screen bg-paper">
      <div class="max-w-lg mx-auto px-6">
        <div class="bg-white rounded-2xl border border-charcoal/5 p-8 sm:p-10">
          <p class="text-xs font-semibold tracking-widest uppercase text-forest">${state.selectedAudit.category}</p>
          <h2 class="mt-3 font-serif text-3xl font-semibold text-charcoal">Your results are ready.</h2>
          <p class="mt-3 text-slate leading-relaxed">
            See how you scored and what it means for your business. Enter your info below to reveal your results.
          </p>

          <form id="lead-form" class="mt-8 space-y-4" novalidate>
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="block text-sm font-medium text-charcoal mb-1.5">First Name <span class="text-red-500">*</span></label>
                <input
                  type="text"
                  name="firstName"
                  required
                  autocomplete="given-name"
                  class="w-full border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal placeholder:text-slate/50 focus:outline-none focus:border-steel transition-colors"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-charcoal mb-1.5">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  autocomplete="family-name"
                  class="w-full border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal placeholder:text-slate/50 focus:outline-none focus:border-steel transition-colors"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="block text-sm font-medium text-charcoal mb-1.5">Email <span class="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  required
                  autocomplete="email"
                  class="w-full border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal placeholder:text-slate/50 focus:outline-none focus:border-steel transition-colors"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-charcoal mb-1.5">Company Name</label>
                <input
                  type="text"
                  name="company"
                  autocomplete="organization"
                  class="w-full border border-charcoal/15 rounded-xl px-4 py-3 text-charcoal placeholder:text-slate/50 focus:outline-none focus:border-steel transition-colors"
                  placeholder="Acme Inc."
                />
              </div>
            </div>

            <div id="form-error" class="hidden text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3"></div>

            <button
              type="submit"
              class="w-full bg-steel text-white font-medium rounded-full px-6 py-3.5 hover:bg-steel/85 transition-colors mt-2"
            >
              Reveal My Results →
            </button>
          </form>

        </div>
      </div>
    </section>
  `)

  document.getElementById('lead-form').addEventListener('submit', handleFormSubmit)
}

// ============================================================
// FORM SUBMIT
// ============================================================

async function handleFormSubmit(e) {
  e.preventDefault()
  const form = e.target
  const btn = form.querySelector('button[type="submit"]')
  const errorEl = document.getElementById('form-error')

  const firstName = form.firstName.value.trim()
  const lastName = form.lastName.value.trim()
  const email = form.email.value.trim()
  const company = form.company.value.trim()

  if (!firstName || !email) {
    errorEl.textContent = 'Please enter your first name and email to continue.'
    errorEl.classList.remove('hidden')
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorEl.textContent = 'Please enter a valid email address.'
    errorEl.classList.remove('hidden')
    return
  }

  errorEl.classList.add('hidden')
  btn.textContent = 'Loading...'
  btn.disabled = true

  const score = calculateScore(state.selectedAudit, state.answers)
  state.score = score
  state.leadInfo = { firstName, lastName, email, company }

  // Build answers payload
  const answers = {}
  state.selectedAudit.questions.forEach((q, i) => {
    const a = state.answers[i]
    if (a !== undefined) {
      answers[`Q${i + 1}: ${q.text}`] = q.options[a.optionIndex].label
    }
  })

  // Send lead notification (non-blocking, results show regardless)
  try {
    await fetch('https://formspree.io/f/xqeybbgz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`.trim(),
        email,
        company: company || 'Not provided',
        audit: state.selectedAudit.category,
        score: `${score.pct}/100`,
        grade: score.grade,
        ...answers,
      }),
    })
  } catch (_) {
    // Silently fail, never block results on notification errors
  }

  state.view = 'results'
  render()
}

// ============================================================
// VIEW: RESULTS
// ============================================================

function renderResults() {
  const { score, selectedAudit, leadInfo } = state
  const findings = getFindings(selectedAudit, score.pct)
  const gradeStyle = getGradeStyle(score.grade)
  const ringColor = getRingColor(score.grade)
  const circumference = 2 * Math.PI * 54

  const icons = [
    `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`,
    `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`,
    `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
  ]

  setView(`
    <section class="py-16 sm:py-24 bg-paper min-h-screen">
      <div class="max-w-2xl mx-auto px-6">

        <!-- Score ring -->
        <div class="text-center">
          <p class="text-xs font-semibold tracking-widest uppercase text-forest mb-6">${selectedAudit.category}</p>
          <div class="inline-flex flex-col items-center">
            <svg width="140" height="140" viewBox="0 0 140 140" aria-label="Score: ${score.pct} out of 100">
              <circle cx="70" cy="70" r="54" fill="none" stroke="#E8EEF3" stroke-width="10" />
              <circle
                id="score-ring"
                cx="70" cy="70" r="54"
                fill="none"
                stroke="${ringColor}"
                stroke-width="10"
                stroke-linecap="round"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${circumference}"
                transform="rotate(-90 70 70)"
                style="transition: stroke-dashoffset 1s ease"
              />
              <text x="70" y="65" text-anchor="middle" font-family="Newsreader, serif" font-size="28" font-weight="600" fill="#1A1A1A">${score.pct}</text>
              <text x="70" y="83" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#4A4A56">out of 100</text>
            </svg>
            <span class="mt-3 inline-block px-4 py-1 rounded-full text-sm font-semibold ${gradeStyle}">${score.grade}</span>
          </div>
          <h2 class="mt-6 font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
            ${leadInfo.firstName ? `Here's what we found, ${leadInfo.firstName}.` : "Here's what we found."}
          </h2>
          <p class="mt-2 text-slate">Based on your answers to the ${selectedAudit.category}.</p>
        </div>

        <!-- Findings -->
        <div class="mt-10 space-y-4">
          ${findings.map((f, i) => `
            <div class="flex gap-4 bg-white rounded-xl border border-charcoal/5 p-6 reveal">
              <span class="mt-0.5 text-steel shrink-0">${icons[i]}</span>
              <div>
                <p class="font-semibold text-charcoal">${f.label}</p>
                <p class="mt-1 text-slate text-sm leading-relaxed">${f.detail}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- CTA -->
        <div class="mt-12 bg-steel-light rounded-2xl p-8 text-center">
          <h3 class="font-serif text-2xl font-semibold text-charcoal">Ready to close the gap?</h3>
          <p class="mt-3 text-slate leading-relaxed">
            Book a free strategy session and we'll walk through what these findings mean for your specific situation.
          </p>
          <a
            href="/#contact"
            class="inline-block mt-6 bg-steel text-white font-medium rounded-full px-8 py-3.5 hover:bg-steel/85 transition-colors"
          >
            Book a Strategy Session
          </a>
        </div>

        <!-- Reset -->
        <div class="mt-8 text-center">
          <button data-action="reset" class="text-sm text-slate hover:text-charcoal transition-colors">
            ← Take a different audit
          </button>
        </div>

      </div>
    </section>
  `)

  // Animate score ring after paint
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const ring = document.getElementById('score-ring')
      if (ring) ring.style.strokeDashoffset = circumference * (1 - score.pct / 100)
    })
  })

  // Stagger findings after ring starts
  setTimeout(() => {
    app.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('is-visible'), i * 120)
    })
  }, 300)
}

// ============================================================
// RENDER DISPATCHER
// ============================================================

function render() {
  switch (state.view) {
    case 'hub':     renderHub();     break
    case 'quiz':    renderQuiz();    break
    case 'email':   renderEmail();   break
    case 'results': renderResults(); break
  }
}

// ============================================================
// EVENT DELEGATION
// ============================================================

document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]')
  if (!target) return

  const action = target.dataset.action

  if (action === 'start-audit') {
    const auditId = target.dataset.audit
    state.selectedAudit = AUDITS.find(a => a.id === auditId)
    state.currentQuestion = 0
    state.answers = []
    state.view = 'quiz'
    render()
    return
  }

  if (action === 'select-answer') {
    const optionIndex = parseInt(target.dataset.optionIndex)
    const points = parseInt(target.dataset.points)
    state.answers[state.currentQuestion] = { optionIndex, points }

    // Visual feedback without re-render
    document.querySelectorAll('[data-action="select-answer"]').forEach(el => {
      el.classList.remove('border-steel', 'bg-steel-light', 'font-medium')
      el.classList.add('border-charcoal/15', 'bg-white')
    })
    target.classList.remove('border-charcoal/15', 'bg-white')
    target.classList.add('border-steel', 'bg-steel-light', 'font-medium')

    setTimeout(() => {
      if (state.currentQuestion < state.selectedAudit.questions.length - 1) {
        state.currentQuestion++
        render()
      } else {
        state.view = 'email'
        render()
      }
    }, 350)
    return
  }

  if (action === 'prev-question') {
    if (state.currentQuestion > 0) {
      state.currentQuestion--
      render()
    }
    return
  }

  if (action === 'reset') {
    state.view = 'hub'
    state.selectedAudit = null
    state.currentQuestion = 0
    state.answers = []
    state.score = null
    state.leadInfo = null
    render()
    return
  }
})

// ============================================================
// NAV: scroll shadow + mobile menu
// ============================================================

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav')
  if (nav) nav.classList.toggle('nav-scrolled', window.scrollY > 10)
}, { passive: true })

document.addEventListener('click', (e) => {
  const btn = e.target.closest('#menu-btn')
  if (!btn) return
  const menu = document.getElementById('mobile-menu')
  if (!menu) return
  const isOpen = !menu.classList.contains('hidden')
  menu.classList.toggle('hidden', isOpen)
  btn.setAttribute('aria-expanded', String(!isOpen))
})

// ============================================================
// INIT
// ============================================================

render()
