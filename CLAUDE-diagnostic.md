# Ridgeline CFO — Financial Diagnostic Hub

## Project Overview
A self-serve financial diagnostic tool for ridgelinecfo.io. Visitors land on a hub page, choose one of three audits, complete a scored multi-step quiz, submit their contact info, and see their results. Nick (owner) gets notified by email on every submission.

---

## User Flow

```
Hub Page → Select Audit → Multi-Step Quiz → Email Capture → Results Screen
```

1. **Hub Page** — Intro copy + 3 audit cards to choose from
2. **Quiz** — 7 questions per audit, one at a time, with a progress bar
3. **Email Capture** — Gated before results are revealed (first name + email required; last name + company optional)
4. **Results Screen** — Score (0–100), grade, 4 key findings, CTA to book a strategy session

---

## Audits

### 1. Financial Health Check
*Focus: cash position, margins, runway, budgeting habits*

| # | Question | Options (points) |
|---|----------|-----------------|
| 1 | How well do you know your gross margin by product or service line? | Don't track it (0) / Ballpark numbers (1) / Know it precisely and review regularly (3) |
| 2 | How many months of cash runway do you have right now? | < 1 month (0) / 1–3 months (1) / 3–6 months (2) / 6+ months (3) |
| 3 | Do you maintain a rolling cash flow forecast? | No (0) / Informally (1) / Yes, formal forecast (3) |
| 4 | How often do you review actuals vs. budget? | Never / no budget (0) / Once or twice a year (1) / Monthly (2) / Weekly or bi-weekly (3) |
| 5 | Can you name the top 3 drivers of your profitability? | Not really (0) / General sense (1) / Yes, clearly — I manage against them (3) |
| 6 | Revenue trend over last 12 months? | Declining (0) / Flat/inconsistent (1) / Growing < 20% (2) / Growing 20%+ (3) |
| 7 | Do you have a documented financial plan or budget for the current year? | No (0) / Informal only (1) / Yes, formal annual budget (3) |

**Max points: 19**

---

### 2. CFO Readiness Score
*Focus: whether the business has outgrown its current finance setup*

| # | Question | Options (points) |
|---|----------|-----------------|
| 1 | Approximate annual revenue? | Under $2M (1) / $2M–$10M (2) / $10M–$30M (3) / $30M+ (3) |
| 2 | Number of full-time employees? | < 10 (0) / 10–25 (1) / 25–75 (2) / 75+ (3) |
| 3 | Current finance support in-house? | Nothing, owner handles it (3) / Bookkeeper only (3) / Bookkeeper + outside accountant (2) / Controller or VP Finance (1) |
| 4 | Raised or planning to raise outside capital? | No and no plans (1) / Considering in next 2 years (2) / Yes, investors or debt covenants (3) |
| 5 | Do you have a board, investors, or lenders you report to? | No, fully self-funded (0) / Informal advisors only (1) / Yes, formal reporting requirements (3) |
| 6 | How often do you make major decisions without solid financial data? | Rarely (0) / Sometimes (1) / Often (2) / Almost always (3) |
| 7 | Making big bets without financial models to back them? | Yes, move fast and figure it out (3) / Sometimes (2) / Rarely, we model before we move (0) |

**Max points: 18**

---

### 3. Blind Spots Audit
*Focus: financial gaps that don't show up until they become problems*

| # | Question | Options (points) |
|---|----------|-----------------|
| 1 | When did you last do a formal pricing strategy review? | Never (0) / 2+ years ago (1) / Within last year (2) / Review regularly, bi-annual or more (3) |
| 2 | Do you track CAC and LTV? | No (0) / Roughly, nothing formal (1) / Yes, and we use it to make decisions (3) |
| 3 | Do you have documented financial controls (approvals, expense limits, reconciliation)? | No formal controls (0) / Informal/unwritten (1) / Yes, documented and enforced (3) |
| 4 | How current is your bookkeeping? | Multiple months behind (0) / 30–60 days behind (1) / Within 30 days / current (3) |
| 5 | Do you know which clients or products are most and least profitable? | No visibility (0) / General sense, not data-driven (1) / Yes, clear profitability data (3) |
| 6 | Do you have a documented monthly close process? | No, informal or reactive (0) / Semi-structured but not documented (1) / Yes, close checklist and consistent timeline (3) |
| 7 | Have you stress-tested against a 20–30% revenue drop? | No (0) / Thought through it informally (1) / Yes, documented contingency plan (3) |

**Max points: 21**

---

## Scoring & Grades

Convert raw score to a 0–100 percentage: `pct = round((raw / maxPoints) * 100)`

| Score | Grade |
|-------|-------|
| 82–100 | Excellent |
| 62–81 | Good |
| 40–61 | Needs Work |
| 0–39 | Critical |

---

## Findings Logic

Each audit returns 4 findings based on score tier (Critical / Needs Work / Good / Excellent). Findings include:
- A short label (the issue or insight)
- A 1–2 sentence detail explaining why it matters

Findings are defined per audit in three tiers: `pct < 40`, `pct < 70`, and `pct >= 70`. See the reference JSX for the full copy — or write your own to match the Ridgeline voice.

---

## Email Capture Form

**Required fields:** First Name, Email  
**Optional fields:** Last Name, Company Name  
**Gate:** User must submit before results are revealed  
**Legal line:** "No spam. No sales pressure. Just your results — and an optional follow-up from Nick at Ridgeline CFO."

---

## Lead Notification

On form submission, send a POST to a notification endpoint (Formspree recommended — free tier works fine).

**Payload to send:**
```json
{
  "name": "First Last",
  "email": "user@company.com",
  "company": "Company Name",
  "audit": "Audit title",
  "score": "74/100",
  "grade": "Good"
}
```

**Email subject format:** `New Diagnostic Lead — [Audit Title] — [Grade]`

Set up at formspree.io, grab the form ID, plug into the fetch endpoint.

---

## Results Screen

- Score displayed as a visual ring (SVG) showing percentage
- Grade badge with color tied to tier
- 4 key findings listed with icon, label, and detail text
- CTA block at the bottom: "Book a Strategy Session" linking to the Calendly or contact page
- "Take a different audit" link that returns to the hub

---

## Component Structure (suggested)

```
App
├── Nav
├── HubPage          — 3 audit cards
├── QuizPage         — question + options + progress bar + prev/next
├── EmailCapture     — form + submit → Formspree
└── ResultsPage      — score ring + grade + findings + CTA
```

State lives in App: `stage`, `selectedAudit`, `answers`, `leadInfo`

---

## Notes
- Use existing Ridgeline branding, colors, and typography — do not introduce new design tokens
- Questions and findings copy can be adjusted to match the Ridgeline voice
- Formspree form ID needs to be created and plugged in before going live
- CTA links to strategy session booking — update URL before launch
