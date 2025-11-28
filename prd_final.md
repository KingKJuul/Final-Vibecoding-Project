# ✅ Butter AI — Final Product Requirements Document (PRD)

## Phase 3 — Final Version

---

### 1. Product Overview

**Butter AI** is a customer health engine designed for early-stage SaaS startups. Founders often lose customers not because their product is bad, but because they fail to see declining engagement in time. Customer signals live in too many places — CRM notes, support messages, product analytics, billing, and ad-hoc conversations — making it easy to miss warning signs until it is too late.

Butter AI aggregates these scattered inputs and uses AI to interpret signals, highlight risks, and recommend actions a founder can take to prevent churn. The current prototype is a polished marketing website that communicates the Butter vision and includes a working AI-powered Q&A chatbot that answers questions about churn, customer signals, and the value of unified customer health.

---

### 2. Core Features & Status

| Feature | Status | AI Used? | Notes |
| :--- | :--- | :---: | :--- |
| Hero section / landing narrative | **Implemented** | No | Communicates main value proposition and problem. |
| Problem section | **Implemented** | No | Explains why founders struggle with churn today. |
| Product / Solution overview | **Implemented** | No | Explains how Butter will unify signals and generate insights. |
| "How Butter Works" section | **Implemented** | No | High-level explanation of system flow. |
| AI Q&A chatbot | **Implemented** | Yes | Powered by Google AI Studio. Helps users understand churn and customer health. |
| FAQ | **Implemented** | No | Handles typical questions and reduces friction. |
| Contact CTA (Join Waitlist) | **Implemented** | No | Clear call to action at top and bottom. |
| Responsive design | **Implemented** | No | Tailwind CSS + Vite build. |
| GitHub Pages / Hosting | **Implemented** | No | Production build deployed via Google AI Studio. |

#### Future features (not implemented but part of vision):
- Customer data ingestion
- Churn scoring engine
- Action recommendation engine
- Automated weekly "Health Report"
- Dashboard for segment-level insights

---

### 3. AI Specification (Final Version)

#### AI Functionality
The prototype includes an AI-powered interactive Q&A chatbot that acts as a simplified version of Butter’s long-term insight engine. The chatbot explains:
- What churn signals matter
- How to interpret customer behavior
- How unified data helps founders act sooner
- How Butter would work in a real SaaS environment
- High-level product strategy questions

#### AI Tasks
- Natural language understanding
- Summarization
- Explanation generation
- Product education
- Founder-friendly reasoning

#### Inputs
- Free-form user questions
- A structured system prompt
- Embedded Butter AI product description
- Tone/style constraints

#### Outputs
- Short, clear, non-technical explanations
- Insights about churn and customer engagement
- Suggested next steps founders typically take

#### Model / Tools Used
- **Google AI Studio text model** (Gemini-based)
- Deployed through the "Build a website" workflow
- Minimal wrapper code for inference calls

#### AI Guardrails
- Responses limited to high-level explanations
- No hallucinated data or fake analytics
- No promises of real-time accuracy
- No harmful or personal advice
- No sensitive or customer-specific analysis

#### Why This AI Feature
The chatbot is the simplest and most direct demo of Butter’s future capabilities: converting ambiguous customer signals into clear next steps. It is lightweight, fast, safe, and illustrates the core value proposition without needing backend integrations.

---

### 4. Technical Architecture (Actual Build)

#### Frontend
- React (functional components)
- TypeScript
- Vite tooling
- TailwindCSS for styling and responsiveness

#### AI Integration
- Built inside Google AI Studio’s "Build a website" app
- Uses integrated AI Studio inference endpoints
- System prompt + user messages sent through provided client

#### Deployment
- Google AI Studio → automatic GitHub repo creation
- Production build served from AI Studio hosting URL
- Repo includes:
  - `index.html`
  - Source files (`jsx`, `tsx`)
  - Bundled assets
  - `README.md`, `PRD.md`, and supporting files

#### Architecture Diagram (Text Version)
```
User Browser
    ↓
Butter AI Website (React + Vite)
    ↓
Google AI Studio Web Runtime
    ↓
Gemini AI Model (hosted by Google)
    ↓
Response rendered in chatbot component
```

---

### 5. Prompting & Iteration Summary

#### Prompt 1 — Chatbot Behavior
- **Initial:** "You are Butter AI. Explain customer churn simply and help founders understand customer health."
- **Iterations:**
  - Removed jargon
  - Reduced length of responses
  - Added brand tone: practical, helpful, founder-first
  - Added examples of signals (usage drop, delayed onboarding, support patterns)

#### Prompt 2 — Marketing Copy
- Used AI Studio to brainstorm hero text, refine tone, and draft structural sections (Problem, Solution, How It Works).

#### Prompt 3 — Component Structure
- AI Studio generated Tailwind utility scaffolding, optimized layout spacing, and made sections readable and consistent.

#### Key Learnings
- Shorter prompts produce more consistent UI code
- Adding tone guidance early avoids later rewriting
- Providing examples dramatically improves chatbot clarity

---

### 6. UX & Limitations

#### Intended User Journey
1. Founder lands on homepage
2. Understands the problem (churn = invisible until too late)
3. Reads about Butter’s solution
4. Plays with the AI chatbot to deepen understanding
5. Joins waitlist / expresses interest

#### Known Limitations
- Chatbot is not connected to real usage data
- No backend or real customer ingestion
- AI cannot compute churn scores — only describe them
- No persistent state or authentication
- No dashboards, real metrics, or charts yet

#### Ethical & Trust Considerations
- AI responses kept high-level to avoid misleading claims
- No real customer data used
- Chatbot is educational, not diagnostic
- Model not allowed to generate false analytics or business-critical outputs

---

### 7. Future Roadmap

#### Short-Term Roadmap
- [ ] Add sample datasets for demo
- [ ] Create mock "churn score" visualization
- [ ] Add onboarding (CSV or API mock ingestion)
- [ ] Implement persona-specific explanations (founder, CSM, PM)
#### Long-Term Roadmap
- [ ] Build full insight engine analyzing customer behavior
- [ ] Weekly founder summary reports
- [ ] Trend detection + recommended actions
- [ ] Integration with major CRMs and billing tools
- [ ] Real churn prediction model
- [ ] Full analytics dashboard with cohort analysis

---

### 8. Links
*   **Live Website:** [https://final-project-butter-ai-marketing-website-38773740458.us-west1.run.app](https://final-project-butter-ai-marketing-website-38773740458.us-west1.run.app)
*   **Github Repo:** [https://github.com/KingKJuul/Final-Vibecoding-Project](https://github.com/KingKJuul/Final-Vibecoding-Project/)
*   **Demo Video:** [https://notredame.zoom.us/rec/share/QSY7h2s8ABs1A2zmSZUM702cwGgHIEvF17umKAlEmNX1HW-lg-u78moAkmUhswv0.96-4guWgEo9ybXgU?startTime=1764358058000]
))
