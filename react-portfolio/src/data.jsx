export const LINKS = {
  github: "https://github.com/Dhruvpandey1476",
  linkedin: "https://www.linkedin.com/in/dhruv-pandey-8a99b1225",
  twitter: "https://twitter.com/DhruvPandey_AI",
  email: "dhruvpandey1476@gmail.com",
  projectR:"https://github.com/Dhruvpandey1476/Rakshak-AI-Women-Safety-System",
  projectF:"https://github.com/Dhruvpandey1476/focusx",
  projectC:"https://github.com/Dhruvpandey1476/CreditSight-AI",
  projectT:"https://github.com/Dhruvpandey1476/GraphRAG-Inference-Optimizer",
  projectRM:"https://github.com/Dhruvpandey1476/Research-Mate-Ai-Researcher-Agent",
  projectA:"https://github.com/Dhruvpandey1476/Arogya-AI"
};

export const STATS = [
  { count: 35, label: "Github Repo" },
  { count: 91, label: "% Model Accuracy" },
  { count: 84, label: "% Token Cost ↓" },
  { count: 2, label: "Internships" },
];

export const ABOUT_CARDS = [
  { icon: "🎯", title: "Agentic AI", text: "Multi-agent systems with LangGraph, tool-calling, stateful reasoning pipelines" },
  { icon: "👁️", title: "Computer Vision", text: "MobileNetV2, MediaPipe, ONNX deployment with real-time inference" },
  { icon: "📊", title: "Data Science", text: "XGBoost, SHAP, feature engineering, EDA, and stakeholder reporting" },
  { icon: "🔬", title: "RAG & GenAI", text: "ChromaDB, TigerGraph, LangChain pipelines for knowledge-grounded LLMs" },
];

export const SKILLS = [
  {
    icon: "🐍",
    name: "Languages",
    tags: ["Python", "JavaScript", "C++", "SQL"],
  },
  {
    icon: "🤖",
    name: "AI / ML Core",
    tags: ["Machine Learning", "Deep Learning", "NLP / LLMs", "Agentic AI", "RAG", "Computer Vision", "SHAP / XAI","Gen AI"],
  },
  {
    icon: "🔧",
    name: "Frameworks & Libraries",
    tags: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LangGraph", "HuggingFace", "MediaPipe", "Autogen", "Pandas", "NumPy"],
  },
  {
    icon: "🌐",
    name: "Backend & APIs",
    tags: ["FastAPI", "REST APIs", "Streamlit", "SQLite", "Twilio", "SendGrid",],
  },
  {
    icon: "⚛️",
    name: "Frontend",
    tags: ["React", "HTML/CSS", "JavaScript"],
  },
  {
    icon: "🛠️",
    name: "Tools & Platforms",
    tags: ["Git / GitHub", "ChromaDB", "TigerGraph", "ONNX", "Ollama", "Jupyter", "Groq API", "OpenAI API"],
  },
];

export const EXPERIENCE = [
  {
    role: "AI/ML Engineering Intern",
    company: "Tranquiex Technologies",
    type: "Early-stage AI startup · Ghaziabad",
    period: "Nov 2025 – May 2026",
    badge: "Full-time Internship",
    color: "cyan",
    bullets: [
      <>Built <strong>Rakshak</strong> — ML and NLP powered women's safety platform with real-time audio threat detection, GPS sharing, and SOS alerts via Twilio/SendGrid on a React + FastAPI stack using Fine-tuned DistilBERT sequence classification model </>,
      <>Developed <strong>FocusX</strong> — Built the application layer on top of a pre-trained TensorFlow.js facial-landmark detection model for a real-time attentionmonitoring use case, integrated model output into a custom attention-scoring pipeline with session tracking </>,
      <>Built <strong>StudyMind</strong> — LangChain chatbot on DeepSeek OpenRouter with per-session personalised context for FocusX users using Guardrails </>,
    ],
  },
  {
    role: "Research Analyst Intern",
    company: "Nebulyn",
    type: "Early-stage startup · Remote",
    period: "Oct 2024 – Apr 2025",
    badge: "Research Role · Closed",
    color: "violet",
    bullets: [
      <>Automated data cleaning and feature engineering pipelines, reducing manual preprocessing time by <strong>40%</strong></>,
      <>Conducted EDA and prepared stakeholder-ready technical reports, translating research into actionable product insights</>,
    ],
  },
];

export const PROJECTS = [
  {
    icon: "🛡️",
    name: "Rakshak — Women's Safety AI",
    desc: "End-to-end ML and NLP powered safety platform with real-time audio threat detection using ML, live GPS tracking, one-tap SOS (SMS/call/email via Twilio/SendGrid), and guardian contact management using Fine-tuned DistilBERT sequence classification model.",
    stack: [{ t: "Python", h: true }, { t: "MediaPipe", h: true }, { t: "React" }, { t: "FastAPI" }, { t: "Twilio" }, { t: "SendGrid" }],
    metric: "🟢 Real-time inference",
    type: "Safety AI",
    github: LINKS.projectR,
  },
  {
    icon: "👁️",
    name: "Focus Mate — Real-Time Attention Monitor",
    desc: "Two-model pipeline: MediaPipe Face Mesh extracts landmarks → MobileNetV2 CNN classifies eye-state (~91% accuracy) → XGBoost scores attention level. Deployed with FastAPI, SQLite session store, and Streamlit dashboard.",
    stack: [{ t: "MobileNetV2", h: true }, { t: "XGBoost", h: true }, { t: "MediaPipe" }, { t: "FastAPI" }, { t: "Streamlit" }, { t: "SQLite" }],
    metric: "📈 91% accuracy",
    type: "CV / EdTech",
    github: LINKS.projectF,
  },
  {
    icon: "💳",
    name: "CredSight — ML & Agentic Credit Scoring",
    desc: "Hybrid scoring engine: XGBoost (60% weight, SHAP explainability) + 4-agent LangGraph pipeline via Groq Llama (40% weight). Produces per-factor reasoning, bulk CSV processing, and single detailed PDF reports. Built for India's credit-invisible borrowers.",
    stack: [{ t: "LangGraph", h: true }, { t: "XGBoost", h: true }, { t: "SHAP" }, { t: "Groq Llama" }, { t: "FastAPI" }, { t: "React" }, { t: "Next.js" }],
    metric: "🏆 Top 15 — JSS InOut Hacks 2026",
    type: "FinTech / Agentic AI",
    github: LINKS.projectC,
  },
  {
    icon: "💰",
    name: "TokenNinja — GraphRAG Token Optimizer",
    desc: "GraphRAG + TigerGraph system that achieves 84% reduction in LLM token cost by intelligently routing queries through knowledge graphs before hitting the LLM. Won Top 5 at TigerGraph GraphRAG Inference Hackathon.",
    stack: [{ t: "GraphRAG", h: true }, { t: "TigerGraph", h: true }, { t: "LangChain" }, { t: "ChromaDB" }, { t: "Python" }],
    metric: "💡 84% token cost ↓",
    type: "Open Source / RAG",
    github: LINKS.projectT,
  },
  {
    icon: "🔬",
    name: "ResearchMate — AI Research Agent",
    desc: "Multi-agent system with stateful LangGraph graphs and tool-calling nodes. Autonomously queries live sources, synthesises information, and generates structured research reports. Full agentic memory and retry logic.",
    stack: [{ t: "LangGraph", h: true }, { t: "LangChain", h: true }, { t: "OpenAI API" }, { t: "Python" }, { t: "Tool-calling" }],
    metric: "🤖 Fully autonomous",
    type: "Agentic AI",
    github: LINKS.projectRM,
  },
  {
    icon: "🏥",
    name: "Arogya AI — Multimodal Health Triage",
    desc: "Multimodal health triage system combining XGBoost/RF/SVM ensemble for tabular vitals, EfficientNet-B0 for imaging, and RAG pipeline for clinical context. Designed for low-resource healthcare settings in India.",
    stack: [{ t: "EfficientNet-B0", h: true }, { t: "XGBoost", h: true }, { t: "SVM" }, { t: "RAG" }, { t: "FastAPI" }, { t: "PyTorch" }],
    metric: "⚕️ Multimodal ML",
    type: "HealthTech",
    github: LINKS.projectA,
  },
];

export const ACHIEVEMENTS = [
  {
    icon: "🏆",
    color: "gold",
    title: "Top 15 — JSS InOut Hacks 2026",
    desc: "Ranked in top 15 teams nationally for CredSight, an agentic credit scoring system for India's credit-invisible borrowers.",
  },
  {
    icon: "🥇",
    color: "cyan",
    title: "Top 5 — TigerGraph GraphRAG Inference Hackathon",
    desc: "Finished in top 5 globally with TokenNinja, a GraphRAG + TigerGraph system achieving 84% LLM token cost reduction.",
  },
  {
    icon: "🌍",
    color: "green",
    title: "GSSoC 2026 Contributor",
    desc: "Selected as open-source contributor for GirlScript Summer of Code 2026. Actively contributing across repos: Heliox-OS, AegisAI, CricScope.",
  },
];

export const CERTS = [
  "Oracle OCI GenAI Professional",
  "Oracle OCI AI Foundations",
  "IBM Data Analysis with Python",
  "IBM Data Visualization with Python",
  "Microsoft Introduction to AI in Azure",
];

export const CONTACT_LINKS = [
  { icon: "📧", label: "Email", value: LINKS.email, href: `mailto:${LINKS.email}` },
  { icon: "💼", label: "LinkedIn", value: "Connect on LinkedIn", href: LINKS.linkedin },
  { icon: "⭐", label: "GitHub", value: "github.com/Dhruvpandey1476", href: LINKS.github },
  { icon: "𝕏", label: "X / Twitter", value: "@DhruvPandey_AI", href: LINKS.twitter },
];

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
];
