# Dhruv Pandey — Portfolio (React + Vite) + AI Chatbot

This is a **React/Vite** rebuild of the original single-file portfolio design — same proven
dark navy/cyan/green/violet aesthetic, same spacing and layout, just split into clean
components with an integrated AI chatbot.

```
react-portfolio/        ← React (Vite) frontend
chatbot-backend/         ← FastAPI + Groq backend
```

---

## 🚀 Quick Start (2 terminals)

### Terminal 1 — FastAPI Chatbot Backend

```bash
cd chatbot-backend

python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

pip install -r requirements.txt

cp .env.example .env
# Edit .env → paste your GROQ_API_KEY
# Free key: https://console.groq.com (30 seconds)

uvicorn main:app --reload --port 8000
# ✅ http://localhost:8000  |  docs: http://localhost:8000/docs
```

### Terminal 2 — React Frontend

```bash
cd react-portfolio

npm install

cp .env.example .env
# defaults already point at localhost:8000 — fine for local dev

npm run dev
# ✅ http://localhost:5173
```

---

## 📁 Structure

```
react-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed nav, scroll state, mobile drawer
│   │   ├── Hero.jsx            # Neural canvas + typewriter + count-up stats
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx      # Timeline
│   │   ├── Projects.jsx        # Static grid (6 projects)
│   │   ├── Achievements.jsx    # + certifications
│   │   ├── Contact.jsx         # EmailJS form + social links
│   │   ├── Footer.jsx
│   │   ├── BackToTop.jsx
│   │   ├── CursorGlow.jsx
│   │   └── Chatbot.jsx         # 🤖 floating widget → calls FastAPI
│   ├── hooks/
│   │   └── useReveal.js        # IntersectionObserver scroll-reveal
│   ├── data.jsx                # Single source of truth — all content lives here
│   ├── index.css               # Full design system (ported from original HTML build)
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── dhruv.jpg
└── .env.example

chatbot-backend/
├── main.py                     # FastAPI app, Groq integration, full knowledge base
├── requirements.txt
└── .env.example
```

---

## ⚙️ Configuration

### Groq API key (chatbot)
1. **console.groq.com** → sign up free → create API key
2. `chatbot-backend/.env`:
   ```
   GROQ_API_KEY=gsk_xxxxxxxxxxxx
   ```

### EmailJS (contact form, optional)
1. **emailjs.com** → free tier (200 emails/month)
2. Add Gmail service → note Service ID
3. Create template with vars: `{{from_name}}` `{{from_email}}` `{{subject}}` `{{message}}` `{{to_name}}`
4. `react-portfolio/.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
   ```
   Without this, the form falls back to opening the visitor's mail client.

### Edit content
Everything — projects, skills, experience, achievements, links — lives in
`react-portfolio/src/data.jsx`. Edit there; no need to touch component files.

---

## 🌐 Deployment

**Frontend → Vercel / Netlify (free)**
```bash
cd react-portfolio
npm run build        # outputs to dist/
```
Drag `dist/` onto netlify.com, or:
```bash
npm i -g vercel && vercel
```
Set env vars in the dashboard: `VITE_CHATBOT_URL`, `VITE_EMAILJS_*`

**Backend → Railway / Render (free tier)**
1. Push `chatbot-backend/` to GitHub
2. railway.app → New Project → Deploy from GitHub
3. Add env var `GROQ_API_KEY`
4. Copy the deployed URL → set as `VITE_CHATBOT_URL` in your frontend env

---

## 🎨 Design tokens (unchanged from original)

```css
--bg-primary:   #0A0E1A   /* deep navy background */
--cyan:         #00D4FF   /* primary accent */
--green:        #39FF14   /* secondary accent */
--violet:       #7C3AED   /* tertiary accent */
--font-display: 'Space Grotesk'
--font-body:    'Inter'
--font-mono:    'JetBrains Mono'
```

## 🤖 Chatbot API

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Health check |
| `/health` | GET | Status + model |
| `/chat` | POST | `{ message, history }` → `{ response, model }` |
| `/docs` | GET | Swagger UI |

---

## 📦 Scripts

```bash
# Frontend
npm run dev       # dev server (localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build

# Backend
uvicorn main:app --reload --port 8000
```
