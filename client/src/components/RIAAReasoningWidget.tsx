import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, X, MessageCircle, Send,
  ThumbsUp, ThumbsDown, Copy, Check, MapPin,
} from "lucide-react";
import riaaReasoningImg from "@assets/riaa_reasoning_annotated_1775422806764.png";
import riaaLogo from "@assets/riaa_logo_1775352775021.png";

/* ─── Reasoning slides ─────────────────────────────────────────────────── */
const REASONING_SLIDES = [
  {
    src: riaaReasoningImg,
    alt: "How RIAA Explains Every Answer — annotated reasoning panel showing Confidence Score, Safety Gate, Executive Overview, RICSA Scoring, Prompt Classification, Skill Activation, and Entity Detection",
  },
];

/* ─── Q&A pairs ─────────────────────────────────────────────────────────── */
const QA_PAIRS: { question: string; answer: string }[] = [
  {
    question: "How can RIAA solve our biggest revenue challenges?",
    answer:
      "RIAA brings intelligence directly to where revenue decisions are made. By connecting your contracts, pricing rules, data, and business policies, it delivers grounded, auditable answers — not guesses.\n\nWhether you're fighting margin leakage, contract non-compliance, or deal desk bottlenecks, RIAA pinpoints exactly where revenue is at risk and tells your team precisely what to do about it — backed by a full reasoning trace your CFO can trust.",
  },
  {
    question: "What does implementation look like, and how long does it take?",
    answer:
      "Implementation is structured, low-friction, and designed around your existing systems. We begin with a focused discovery phase to map your data sources and revenue workflows, then move to integration, agent configuration, and policy setup.\n\nMost organizations are live and generating measurable value within 6–12 weeks. We handle the heavy lifting — your team stays focused on the business, not the build.",
  },
  {
    question: "What support and onboarding do you provide?",
    answer:
      "You get a dedicated implementation partner from day one, structured onboarding for your core team, and ongoing success support that stays with you post-launch.\n\nThis includes training, full documentation, a sandbox environment, and a direct line to our technical team. Enterprise clients additionally receive priority SLA coverage, executive briefings, and quarterly business reviews.",
  },
  {
    question: "What does our team need to have in place before we start?",
    answer:
      "Prerequisites are intentionally minimal. You'll need access to your core data sources — ERP, CRM, contracts, pricing — alignment on 2–3 high-priority use cases, and a cross-functional champion who can connect our team to the right stakeholders.\n\nNo data science team required. RIAA is built for business, finance, and operations leaders — not engineers.",
  },
  {
    question: "How does RIAA reason, score answers, and ensure trust?",
    answer:
      "Every answer RIAA produces is backed by a full reasoning trace — a transparent record of how the system interpreted the question, which data it drew from, how it scored confidence, and which policies it applied.\n\nAnswers include source citations, a RICSA confidence score (Relevance, Integrity, Clarity, Specificity, Actionability), and a safety classification. Nothing is a black box. Every conclusion is explainable, auditable, and defensible.",
  },
];

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

/* ═══════════════════════════════════════════════════════════════════════════
   RIAA Chat Widget
═══════════════════════════════════════════════════════════════════════════ */
export function RIAAChatWidget() {
  const [open, setOpen] = useState(false);
  const [locationBanner, setLocationBanner] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [feedback, setFeedback] = useState<Record<string, "up" | "down" | null>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* auto-scroll to latest message */
  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  /* request actual geolocation silently */
  const handleLocationAllow = () => {
    setLocationBanner(false);
    navigator.geolocation?.getCurrentPosition(
      () => {},
      () => {}
    );
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: `${Date.now()}-u`, role: "user", text: text.trim() };
    const match = QA_PAIRS.find(
      (qa) => qa.question.toLowerCase() === text.trim().toLowerCase()
    );
    const answerText =
      match?.answer ??
      "That's a great question. Our team is actively building out responses for every topic. In the meantime, please reach out to us at sales@vayomai.com and we'll respond within one business day.";
    const assistantMsg: Message = { id: `${Date.now()}-a`, role: "assistant", text: answerText };
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInputValue("");
    setCharCount(0);
  };

  const handleChipClick = (question: string) => {
    sendMessage(question);
  };

  const handleSend = () => sendMessage(inputValue);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.slice(0, 15000);
    setInputValue(val);
    setCharCount(val.length);
  };

  const toggleFeedback = (id: string, type: "up" | "down") => {
    setFeedback((prev) => ({ ...prev, [id]: prev[id] === type ? null : type }));
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isInitial = messages.length === 0;

  return (
    <>
      {/* ── Trigger button ── */}
      <motion.button
        className="fixed bottom-[3.75rem] right-4 sm:bottom-[4.25rem] sm:right-6 z-50 flex items-center justify-center rounded-full shadow-xl select-none"
        style={{ background: "#0E7C6B", width: 44, height: 44 }}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        animate={{
          boxShadow: [
            "0 0 0 0px rgba(14,124,107,0.35)",
            "0 0 0 8px rgba(14,124,107,0)",
            "0 0 0 0px rgba(14,124,107,0)",
          ],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut" }}
        aria-label="Chat with RIAA Assistant"
        data-testid="button-riaa-chat-widget"
      >
        <MessageCircle className="w-5 h-5 text-white" />
      </motion.button>

      {/* ── Backdrop ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={[
              "fixed z-50 flex flex-col overflow-hidden",
              /* mobile: bottom sheet */
              "inset-x-0 bottom-0 rounded-t-2xl",
              /* tablet+: anchored floating card */
              "sm:inset-auto sm:bottom-[72px] sm:right-6 sm:rounded-2xl sm:w-[420px]",
            ].join(" ")}
            style={{
              background: "white",
              boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
              maxHeight: "90vh",
            }}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag handle — mobile only */}
            <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-slate-200" />
            </div>

            {/* ── Location permission banner ── */}
            <AnimatePresence>
              {locationBanner && (
                <motion.div
                  className="shrink-0 flex flex-col gap-2 px-4 py-3 border-b border-[#d1fae5]"
                  style={{ background: "#ecfdf5" }}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2 min-w-0">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#059669" }} />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-800">Allow location access?</p>
                        <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                          We log your approximate location to comply with local rules and regulations. You can decline and still use the chat freely.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={handleLocationAllow}
                      className="text-[11px] font-semibold px-3 py-1 rounded-full text-white"
                      style={{ background: "#0E7C6B" }}
                    >
                      Allow
                    </button>
                    <button
                      onClick={() => setLocationBanner(false)}
                      className="text-[11px] font-medium px-3 py-1 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-50"
                    >
                      No thanks
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Scrollable body ── */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              {isInitial ? (
                /* ── Initial / welcome state ── */
                <div className="flex flex-col items-center px-5 pt-8 pb-4 text-center">
                  {/* RIAA logo avatar */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3 overflow-hidden shadow-md"
                    style={{ background: "#0E7C6B" }}
                  >
                    <img src={riaaLogo} alt="RIAA" className="w-full h-full object-contain p-2" />
                  </div>

                  <h2 className="text-xl font-bold text-slate-800 mb-1">Ask RIAA</h2>
                  <p className="text-sm text-slate-500 mb-1">Vayom AI's Revenue Intelligence Agent</p>
                  <p className="text-xs text-slate-400 mb-1">
                    Select a question below or type your own to learn about our solution, deployment, and support.
                  </p>
                  <p className="text-[10px] text-slate-300 mb-6">
                    Chat inputs are logged to improve response quality. No personal data is shared with third parties.
                  </p>

                  {/* Question chips */}
                  <div className="flex flex-wrap gap-2 justify-center w-full">
                    {QA_PAIRS.map((qa) => (
                      <button
                        key={qa.question}
                        onClick={() => handleChipClick(qa.question)}
                        className="text-xs text-slate-700 font-medium px-3 py-1.5 rounded-full border border-slate-300 hover:border-[#0E7C6B] hover:text-[#0E7C6B] hover:bg-[#f0fdf9] transition-colors text-left"
                      >
                        {qa.question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* ── Conversation view ── */
                <div className="p-4 space-y-4">
                  {messages.map((msg) =>
                    msg.role === "user" ? (
                      /* User bubble — right aligned */
                      <div key={msg.id} className="flex justify-end">
                        <div
                          className="max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-white leading-relaxed"
                          style={{ background: "#0E7C6B" }}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ) : (
                      /* Assistant bubble — left aligned with avatar + actions */
                      <div key={msg.id} className="flex items-start gap-2.5">
                        <div
                          className="w-8 h-8 rounded-full shrink-0 overflow-hidden mt-0.5 flex items-center justify-center"
                          style={{ background: "#0E7C6B" }}
                        >
                          <img src={riaaLogo} alt="RIAA" className="w-full h-full object-contain p-0.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className="rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-700 leading-relaxed"
                            style={{ background: "#f1fdf9", border: "1px solid #d1fae5" }}
                          >
                            {/* Render newlines */}
                            {msg.text.split("\n\n").map((para, i) => (
                              <p key={i} className={i > 0 ? "mt-3" : ""}>
                                {para}
                              </p>
                            ))}
                          </div>
                          {/* Feedback actions */}
                          <div className="flex items-center gap-1 mt-1.5 ml-1">
                            <button
                              onClick={() => toggleFeedback(msg.id, "up")}
                              className={[
                                "p-1 rounded transition-colors",
                                feedback[msg.id] === "up"
                                  ? "text-[#0E7C6B]"
                                  : "text-slate-300 hover:text-slate-500",
                              ].join(" ")}
                              aria-label="Thumbs up"
                            >
                              <ThumbsUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => toggleFeedback(msg.id, "down")}
                              className={[
                                "p-1 rounded transition-colors",
                                feedback[msg.id] === "down"
                                  ? "text-red-400"
                                  : "text-slate-300 hover:text-slate-500",
                              ].join(" ")}
                              aria-label="Thumbs down"
                            >
                              <ThumbsDown className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleCopy(msg.id, msg.text)}
                              className="p-1 rounded text-slate-300 hover:text-slate-500 transition-colors"
                              aria-label="Copy answer"
                            >
                              {copiedId === msg.id ? (
                                <Check className="w-3.5 h-3.5 text-[#0E7C6B]" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  )}

                  {/* Follow-up chips after conversation starts */}
                  <div className="pt-2">
                    <p className="text-[10px] text-slate-300 mb-2 font-medium">Ask another question:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {QA_PAIRS.map((qa) => (
                        <button
                          key={qa.question}
                          onClick={() => handleChipClick(qa.question)}
                          className="text-[11px] text-slate-500 px-2.5 py-1 rounded-full border border-slate-200 hover:border-[#0E7C6B] hover:text-[#0E7C6B] hover:bg-[#f0fdf9] transition-colors text-left"
                        >
                          {qa.question}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* ── Footer / input ── */}
            <div className="shrink-0 border-t border-[#e5e7eb] px-3 pt-3 pb-2" style={{ background: "#f8fafc" }}>
              <div
                className="flex items-center gap-2 rounded-full px-4 py-2 bg-white"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask RIAA anything about Vayom AI…"
                  maxLength={15000}
                  className="flex-1 text-sm bg-transparent text-slate-700 outline-none placeholder:text-slate-400 min-w-0"
                  data-testid="input-riaa-chat"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors disabled:opacity-30"
                  style={{ background: "#0E7C6B" }}
                  aria-label="Send"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
              <div className="flex items-start justify-between mt-1.5 px-1">
                <p className="text-[10px] text-slate-300 leading-snug flex-1 pr-4">
                  Chat inputs are logged to improve response quality. We do not collect personal information. Your location is logged to comply with local rules and regulations.
                </p>
                <span className="text-[10px] text-slate-300 shrink-0 tabular-nums">
                  {charCount} / 15000
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   RIAA Reasoning Widget (annotated image viewer)
═══════════════════════════════════════════════════════════════════════════ */
export function RIAAReasoningWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 text-white font-semibold rounded-full shadow-xl select-none"
        style={{ background: "#0E7C6B", fontSize: 13, padding: "10px 14px" }}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        animate={{
          boxShadow: [
            "0 0 0 0px rgba(14,124,107,0.4)",
            "0 0 0 10px rgba(14,124,107,0)",
            "0 0 0 0px rgba(14,124,107,0)",
          ],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
        aria-label="How RIAA Works"
        data-testid="button-riaa-reasoning-widget"
      >
        <Brain className="w-4 h-4 shrink-0" />
        <span className="hidden sm:inline">How RIAA Works</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className={[
              "fixed z-50 flex pointer-events-none",
              "items-end inset-x-0 bottom-0",
              "sm:items-center sm:justify-center sm:inset-0 sm:p-4",
            ].join(" ")}
          >
            <motion.div
              className={[
                "relative bg-white shadow-2xl overflow-hidden pointer-events-auto flex flex-col w-full",
                "rounded-t-2xl sm:rounded-2xl",
                "sm:max-w-[700px] lg:max-w-[900px]",
              ].join(" ")}
              style={{ maxHeight: "92vh" }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
                <div className="w-10 h-1 rounded-full bg-slate-200" />
              </div>

              <div className="shrink-0 flex items-center justify-between px-4 sm:px-5 py-3 border-b border-[#e5e7eb] bg-white">
                <div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base leading-tight">
                    How RIAA Explains Every Answer
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 hidden sm:block">
                    Transparency into what the system understood, how it scored, and what it did.
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="ml-3 sm:ml-4 p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors shrink-0"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto overscroll-contain flex-1">
                {REASONING_SLIDES.map((slide, i) => (
                  <div key={i} className={i > 0 ? "border-t border-[#e5e7eb]" : ""}>
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-auto block"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="shrink-0 px-4 sm:px-5 py-2.5 border-t border-[#e5e7eb] bg-slate-50 flex items-center justify-between gap-3">
                <span className="text-[11px] sm:text-xs text-slate-400">
                  {REASONING_SLIDES.length > 1
                    ? `${REASONING_SLIDES.length} views — scroll to see all`
                    : "Scroll to explore the full annotated view"}
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="shrink-0 text-xs font-semibold px-4 py-1.5 rounded-full"
                  style={{ background: "#0E7C6B", color: "white" }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
