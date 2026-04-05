import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, X, MessageCircle, Send, Sparkles } from "lucide-react";
import riaaReasoningImg from "@assets/riaa_reasoning_annotated_1775422806764.png";
import riaaLogo from "@assets/riaa_logo_1775352775021.png";

/* ─── Reasoning slides ─────────────────────────────────────────────────── */
// Add future annotated images here — the panel scrolls through them all.
const REASONING_SLIDES = [
  {
    src: riaaReasoningImg,
    alt: "How RIAA Explains Every Answer — annotated reasoning panel showing Confidence Score, Safety Gate, Executive Overview, RICSA Scoring, Prompt Classification, Skill Activation, and Entity Detection",
  },
];

/* ─── Sample questions shown in the chat (greyed-out, coming soon) ─────── */
const SAMPLE_QUESTIONS = [
  "How does RIAA score answer confidence?",
  "What are Business Agents and Human Digital Twins?",
  "How does RIAA enforce policy controls?",
  "Can RIAA explain its reasoning step by step?",
];

/* ═══════════════════════════════════════════════════════════════════════════
   RIAA Chat Widget
═══════════════════════════════════════════════════════════════════════════ */
export function RIAAChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Trigger button — stacked above "How RIAA Works" pill ── */}
      <motion.button
        className="fixed bottom-[3.75rem] right-4 sm:bottom-[4.25rem] sm:right-6 z-50 flex items-center justify-center rounded-full shadow-xl select-none"
        style={{
          background: "#0E7C6B",
          width: 44,
          height: 44,
        }}
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

        {/* Coming Soon badge */}
        <span
          className="absolute -top-1.5 -right-1 text-[8px] font-bold uppercase tracking-tight px-1 py-0.5 rounded-full leading-none whitespace-nowrap"
          style={{ background: "#F59E0B", color: "#fff" }}
        >
          Soon
        </span>
      </motion.button>

      {/* ── Backdrop ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Chat window ──
           Mobile: bottom sheet
           Tablet+: floating card anchored bottom-right             */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={[
              "fixed z-50 flex flex-col",
              "inset-x-0 bottom-0 rounded-t-2xl",
              "sm:inset-auto sm:bottom-[72px] sm:right-6 sm:rounded-2xl sm:w-[380px]",
            ].join(" ")}
            style={{
              background: "white",
              boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
              maxHeight: "85vh",
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

            {/* Header */}
            <div
              className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-[#e5e7eb]"
              style={{ background: "#f8fffe" }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
                  style={{ background: "#0E7C6B" }}
                >
                  <img
                    src={riaaLogo}
                    alt="RIAA"
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800 leading-tight">
                    RIAA Assistant
                  </div>
                  <div className="text-[10px] text-slate-400 leading-tight">
                    Revenue Intelligence · AI Agent
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-4">

              {/* RIAA avatar + greeting bubble */}
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 overflow-hidden mt-0.5"
                  style={{ background: "#0E7C6B" }}
                >
                  <img
                    src={riaaLogo}
                    alt="RIAA"
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
                <div
                  className="rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-700 leading-relaxed max-w-[85%]"
                  style={{ background: "#f1fdf9", border: "1px solid #ccfbf1" }}
                >
                  Hi! I'm the <strong>RIAA Assistant</strong>. I can answer questions about how RIAA reasons, scores answers, and powers enterprise intelligence.
                </div>
              </div>

              {/* Coming Soon banner */}
              <div
                className="flex items-center gap-2.5 rounded-xl px-4 py-3"
                style={{ background: "#fffbeb", border: "1px solid #fde68a" }}
              >
                <Sparkles className="w-4 h-4 shrink-0" style={{ color: "#d97706" }} />
                <div>
                  <div className="text-xs font-bold" style={{ color: "#92400e" }}>
                    Coming Soon
                  </div>
                  <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    Interactive Q&amp;A powered by RIAA is in development. Be the first to know when it launches.
                  </div>
                </div>
              </div>

              {/* Sample question chips */}
              <div className="space-y-2">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  You'll be able to ask things like:
                </p>
                {SAMPLE_QUESTIONS.map((q) => (
                  <div
                    key={q}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-400 cursor-not-allowed"
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <MessageCircle className="w-3.5 h-3.5 shrink-0 text-slate-300" />
                    {q}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer — disabled input */}
            <div
              className="shrink-0 px-3 py-3 border-t border-[#e5e7eb]"
              style={{ background: "#f8fafc" }}
            >
              <div
                className="flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: "#f1f5f9", border: "1px solid #e2e8f0" }}
              >
                <input
                  type="text"
                  disabled
                  placeholder="Ask RIAA a question… (coming soon)"
                  className="flex-1 text-xs bg-transparent text-slate-400 outline-none placeholder:text-slate-300 cursor-not-allowed"
                />
                <button
                  disabled
                  className="p-1.5 rounded-lg cursor-not-allowed"
                  style={{ color: "#cbd5e1" }}
                  aria-label="Send (coming soon)"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-center text-[10px] text-slate-300 mt-2">
                Interactive responses launching soon
              </p>
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
      {/* ── Floating trigger button ──
           Mobile: icon-only pill
           Tablet+: full label pill         */}
      <motion.button
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 text-white font-semibold rounded-full shadow-xl select-none"
        style={{
          background: "#0E7C6B",
          fontSize: 13,
          padding: "10px 14px",
        }}
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

      {/* ── Backdrop ── */}
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

      {/* ── Modal ──
           Mobile: bottom sheet
           Tablet: centered, max 700 px
           Laptop+: centered, max 900 px  */}
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
              {/* Drag handle — mobile only */}
              <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
                <div className="w-10 h-1 rounded-full bg-slate-200" />
              </div>

              {/* Sticky header */}
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

              {/* Scrollable image area */}
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

              {/* Footer */}
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
