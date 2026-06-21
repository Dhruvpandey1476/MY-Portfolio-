import { useState, useRef, useEffect, useCallback } from "react";

const QUICK_QUESTIONS = [
  "What skills does Dhruv have?",
  "Tell me about FocusX project",
  "What internships has he done?",
  "What's TokenNinja?",
  "Is he open to work?",
];

const BACKEND_URL = import.meta.env.VITE_CHATBOT_URL;
console.log("BACKEND_URL =", BACKEND_URL);

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "init",
      role: "assistant",
      content:
        "Hey! I'm Dhruv's AI assistant 👋 Ask me anything about his skills, projects, experience, or whether he's available for opportunities.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  const sendMessage = useCallback(
    async (text) => {
      if (!text.trim() || loading) return;
      const userMsg = { id: Date.now().toString(), role: "user", content: text.trim() };
      setMessages((m) => [...m, userMsg]);
      setInput("");
      setLoading(true);

      const history = messages
        .filter((m) => m.id !== "init")
        .map((m) => ({ role: m.role, content: m.content }));

      try {
        const res = await fetch(`${BACKEND_URL}/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text.trim(), history }),
        });
        if (!res.ok) throw new Error(`Server error ${res.status}`);
        const data = await res.json();
        const reply = data.response ?? data.message ?? "Sorry, I couldn't get a response.";
        setMessages((m) => [...m, { id: Date.now().toString() + "_r", role: "assistant", content: reply }]);
      } catch {
        setMessages((m) => [
          ...m,
          {
            id: Date.now().toString() + "_err",
            role: "assistant",
            content:
              "Oops! I couldn't connect to my backend server. Please make sure the FastAPI service is running. You can reach Dhruv directly at dhruvpandey1476@gmail.com 📧",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading]
  );

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      <button
        className="chatbot-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI Assistant"
      >
        {open ? "✕" : "🤖"}
      </button>
      {!open && <div className="chatbot-fab-pulse"></div>}

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">🤖</div>
              <div>
                <div className="chatbot-title">Dhruv&apos;s AI Assistant</div>
                <div className="chatbot-status">
                  <span className="chatbot-status-dot"></span>
                  Powered by Groq · llama-3.3-70b
                </div>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-msg-row ${msg.role}`}>
                {msg.role === "assistant" && <div className="chatbot-msg-avatar">🤖</div>}
                <div className={`chatbot-bubble ${msg.role}`}>{msg.content}</div>
                {msg.role === "user" && <div className="chatbot-msg-avatar user">👤</div>}
              </div>
            ))}
            {loading && (
              <div className="chatbot-msg-row assistant">
                <div className="chatbot-msg-avatar">🤖</div>
                <div className="chatbot-bubble assistant chatbot-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {messages.length <= 1 && (
            <div className="chatbot-quick">
              <p>Quick questions:</p>
              <div className="chatbot-quick-list">
                {QUICK_QUESTIONS.map((q) => (
                  <button key={q} onClick={() => sendMessage(q)}>{q}</button>
                ))}
              </div>
            </div>
          )}

          <div className="chatbot-input-row">
            <div className="chatbot-input-wrap">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything about Dhruv..."
                disabled={loading}
              />
              <button
                className="chatbot-send"
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || loading}
              >
                ↑
              </button>
            </div>
            <p className="chatbot-footer-note">Groq · llama-3.3-70b-versatile</p>
          </div>
        </div>
      )}
    </>
  );
}
