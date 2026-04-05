import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { scrollToDemo } from "@/lib/utils";
import riaaLogo from "@assets/riaa_logo_1775352775021.png";
import {
  MessageSquare,
  Bot,
  Briefcase,
  User,
  ShieldCheck,
  Brain,
  Search,
  FileCheck2,
  Copy,
  X,
  ChevronDown,
  Check,
} from "lucide-react";

/* ─── Responsive container used throughout this page ───────────────────── */
function RIAAContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20 ${className}`}
      style={{ maxWidth: "clamp(640px, 95vw, 1600px)" }}
    >
      {children}
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

/* ─── Trifecta ──────────────────────────────────────────────────────────── */
const NODES = [
  {
    id: "agents",
    icon: Briefcase,
    label: "Business Agents",
    xPct: 50,   // % of viewBox width  (cx=200/400)
    yPct: 17.6, // % of viewBox height (cy=60/340)
    tooltipSide: "below" as const,
    tooltip:
      "Specialized workers that run inside your workflows. Each one handles a focused operational task: checking transactions against rules, detecting duplicates, scoring anomalies, routing items for review, triggering outreach, or computing metrics.",
  },
  {
    id: "twins",
    icon: User,
    label: "Human Digital Twins",
    xPct: 15,
    yPct: 76.5,
    tooltipSide: "right" as const,
    tooltip:
      "A structured capture of how your best expert thinks, explains, escalates, and makes decisions. Not a bio. The system records their cognitive approach, communication style, domain vocabulary, boundaries, and escalation patterns, then applies that judgment at runtime.",
  },
  {
    id: "policy",
    icon: ShieldCheck,
    label: "Policy Controls",
    xPct: 85,
    yPct: 76.5,
    tooltipSide: "left" as const,
    tooltip:
      "The governance layer that defines what the AI can access, how it should respond, what safety boundaries are always on, and what cost controls apply. Policies are enforced at runtime across every interaction, not treated as suggestions.",
  },
];

function TrifectaGraphic() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    /*
     * Aspect-ratio container: padding-bottom = 340/400 * 100 = 85%.
     * Everything inside is absolute, so the SVG and node buttons
     * all scale together with the container width.
     */
    <div className="relative w-full" style={{ paddingBottom: "85%" }}>
      <div className="absolute inset-0">

        {/* ── SVG: lines + animated dot + center label ── */}
        <svg
          viewBox="0 0 400 340"
          width="100%"
          height="100%"
          className="absolute inset-0"
          fill="none"
          aria-hidden
        >
          {/* Triangle edges */}
          <line x1="200" y1="60" x2="60"  y2="260" stroke="#1d4ed820" strokeWidth="2" strokeDasharray="6 4" />
          <line x1="200" y1="60" x2="340" y2="260" stroke="#1d4ed820" strokeWidth="2" strokeDasharray="6 4" />
          <line x1="60"  y1="260" x2="340" y2="260" stroke="#1d4ed820" strokeWidth="2" strokeDasharray="6 4" />

          {/* Animated flow dots */}
          <circle r="4" fill="#1d4ed8" opacity="0.65">
            <animateMotion dur="3.2s" repeatCount="indefinite"
              path="M 200 60 L 60 260 L 340 260 Z" />
          </circle>
          <circle r="3" fill="#60a5fa" opacity="0.45">
            <animateMotion dur="3.2s" begin="1.6s" repeatCount="indefinite"
              path="M 200 60 L 60 260 L 340 260 Z" />
          </circle>

          {/* Center label */}
          <text
            x="200" y="170"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="13"
            fontWeight="600"
            letterSpacing="0.1em"
            fill="#cbd5e1"
          >
            THE TRIFECTA
          </text>
        </svg>

        {/* ── Nodes ── */}
        {NODES.map((node) => {
          const Icon = node.icon;
          const isHovered = hovered === node.id;

          return (
            <div
              key={node.id}
              className="absolute"
              style={{
                left: `${node.xPct}%`,
                top:  `${node.yPct}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Clickable/hoverable node */}
              <motion.button
                className="rounded-full border-2 flex items-center justify-center transition-all duration-200 shadow-md focus:outline-none"
                style={{
                  /* clamp: 48px mobile → 8vw → 88px max */
                  width:  "clamp(48px, 8vw, 88px)",
                  height: "clamp(48px, 8vw, 88px)",
                  background: isHovered ? "var(--primary)" : "white",
                  borderColor: isHovered ? "var(--primary)" : "hsl(var(--border))",
                  color: isHovered ? "white" : "hsl(var(--primary))",
                  boxShadow: isHovered
                    ? "0 0 0 6px hsl(var(--primary) / 0.12), 0 8px 24px hsl(var(--primary) / 0.25)"
                    : undefined,
                }}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(node.id)}
                onBlur={() => setHovered(null)}
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.18 }}
                aria-label={`${node.label}: ${node.tooltip}`}
              >
                <Icon
                  style={{
                    width: "clamp(18px, 3vw, 34px)",
                    height: "clamp(18px, 3vw, 34px)",
                  }}
                />
              </motion.button>

              {/* Node label */}
              <div
                className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none whitespace-nowrap"
                style={{ top: "calc(100% + clamp(6px, 1vw, 12px))" }}
              >
                <span
                  className="font-semibold text-foreground"
                  style={{ fontSize: "clamp(9px, 1.4vw, 14px)", lineHeight: 1.3 }}
                >
                  {node.label}
                </span>
              </div>

              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className={`absolute z-40 bg-white border border-border rounded-2xl shadow-2xl pointer-events-none text-left`}
                    style={getTooltipStyle(node.tooltipSide)}
                    initial={{ opacity: 0, scale: 0.94, y: node.tooltipSide === "below" ? -6 : 0 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-foreground leading-snug">
                        {node.label}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {node.tooltip}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getTooltipStyle(side: "below" | "left" | "right"): React.CSSProperties {
  const base: React.CSSProperties = {
    width: "clamp(200px, 28vw, 280px)",
    padding: "clamp(10px, 1.5vw, 18px)",
  };
  if (side === "below") {
    return {
      ...base,
      top: "calc(100% + 12px)",
      left: "50%",
      transform: "translateX(-50%)",
    };
  }
  if (side === "right") {
    return {
      ...base,
      top: "-40px",
      left: "calc(100% + 14px)",
    };
  }
  // left
  return {
    ...base,
    top: "-40px",
    right: "calc(100% + 14px)",
  };
}

/* ─── Chat Mockup ───────────────────────────────────────────────────────── */
function ChatMockup() {
  return (
    <div className="rounded-2xl border border-[#e5e7eb] shadow-sm bg-white overflow-hidden select-none">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-[#e5e7eb]">
        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: "#0E7C6B" }} />
        <span
          className="font-semibold text-slate-600"
          style={{ fontSize: "clamp(11px, 1.1vw, 14px)" }}
        >
          RIAA Chat
        </span>
      </div>

      {/* Messages */}
      <div
        className="flex flex-col gap-4 bg-[#f9fafb] p-4"
        style={{ minHeight: "clamp(260px, 28vw, 460px)" }}
      >
        {/* User message – right aligned */}
        <div className="flex justify-end">
          <div
            className="text-white rounded-2xl rounded-tr-sm px-4 py-3"
            style={{
              background: "#0E7C6B",
              maxWidth: "82%",
              fontSize: "clamp(10px, 1.1vw, 13px)",
              lineHeight: 1.5,
            }}
          >
            What are the rebate terms for our Optum contract?
          </div>
        </div>

        {/* Assistant message – left aligned */}
        <div className="flex justify-start">
          <div
            className="rounded-2xl rounded-tl-sm px-4 py-3"
            style={{
              background: "#f3f4f6",
              maxWidth: "92%",
            }}
          >
            <p
              className="text-slate-600 mb-3 leading-relaxed"
              style={{ fontSize: "clamp(10px, 1.05vw, 13px)" }}
            >
              Based on the Pharmacy Benefit Management Rebate Agreement, the key terms include:
            </p>
            <ul className="space-y-1.5 mb-4">
              {[
                "Tier 2 formulary placement",
                "Quarterly rebate at 18.5% of WAC",
                "Minimum 65% market share threshold",
              ].map((item) => (
                <li
                  key={item}
                  className="font-bold text-slate-800 flex items-start gap-2"
                  style={{ fontSize: "clamp(10px, 1.05vw, 13px)" }}
                >
                  <span
                    className="mt-0.5 flex-shrink-0 rounded-full"
                    style={{
                      width: "clamp(5px, 0.6vw, 7px)",
                      height: "clamp(5px, 0.6vw, 7px)",
                      background: "#0E7C6B",
                      display: "inline-block",
                      marginTop: "0.35em",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Citation badge with pulse glow */}
            <motion.div
              className="inline-flex items-center gap-1.5 text-white font-semibold rounded-full"
              style={{
                background: "#0E7C6B",
                fontSize: "clamp(8px, 0.85vw, 11px)",
                padding: "clamp(3px, 0.4vw, 5px) clamp(8px, 1vw, 14px)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0 0px rgba(14,124,107,0.0)",
                  "0 0 0 5px rgba(14,124,107,0.18)",
                  "0 0 0 0px rgba(14,124,107,0.0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FileCheck2
                style={{
                  width: "clamp(9px, 1vw, 12px)",
                  height: "clamp(9px, 1vw, 12px)",
                  flexShrink: 0,
                }}
              />
              Source: PBM_Rebate_Agreement_2024.pdf
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Reasoning Widget ──────────────────────────────────────────────────── */
const RICSA_SCORES = [
  { letter: "R", label: "Role",         score: 100 },
  { letter: "I", label: "Intent",       score: 100 },
  { letter: "C", label: "Context",      score: 100 },
  { letter: "S", label: "Skills",       score: 100 },
];

const UNDERSTOOD_ROWS = [
  {
    key: "ROLE",
    text: "Legal Agent, Document Intelligence Agent",
    tags: ["Legal Agent", "Document Intelligence Agent"],
  },
  {
    key: "INTENT",
    text: "Summarization",
    tags: ["Summarization"],
  },
  {
    key: "CONTEXT",
    text: '{"entities": ["Optum PBM Contract"], "time_period": null, "scope": null, "systems": {}}',
    tags: ["Optum PBM Contract"],
  },
  {
    key: "SKILLS",
    text: "document_rag, knowledge_retrieval",
    tags: ["document_rag", "knowledge_retrieval"],
  },
];

function RIAAReasoningWidget() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [entitiesExpanded, setEntitiesExpanded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "RIAA Reasoning — Score: 100 PASS | Safety: safe_and_clear | Role: Legal Agent | Intent: Summarization"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* ── Floating trigger button ── */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 text-white font-semibold rounded-full shadow-lg pl-3 pr-4 py-2.5 select-none"
        style={{ background: "#0E7C6B", fontSize: 13 }}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
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
        How RIAA Works
      </motion.button>

      {/* ── Backdrop ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed right-0 top-0 bottom-0 z-50 w-full md:w-[390px] bg-white shadow-2xl overflow-y-auto overscroll-contain"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Panel header */}
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-4 py-3 border-b border-[#e5e7eb]">
              <div className="flex items-center gap-2">
                <span
                  className="w-5 h-5 rounded-full border flex items-center justify-center text-[11px] font-bold"
                  style={{ borderColor: "#0E7C6B", color: "#0E7C6B" }}
                >
                  ?
                </span>
                <span className="font-semibold text-slate-700 text-sm">Reasoning</span>
              </div>
              <div className="flex items-center gap-0.5">
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Copy reasoning"
                >
                  {copied
                    ? <Check className="w-4 h-4" style={{ color: "#0E7C6B" }} />
                    : <Copy className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Close reasoning panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Panel body */}
            <div className="p-4 space-y-3">

              {/* Confidence score row */}
              <div className="flex items-center gap-3">
                <div
                  className="w-13 h-13 rounded-lg flex items-center justify-center font-bold text-white shrink-0"
                  style={{ background: "#0E7C6B", width: 52, height: 52, fontSize: 20 }}
                >
                  100
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-slate-800 text-base">PASS</span>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs text-slate-400">v2.0-split</div>
                  <div className="text-xs text-slate-400">0ms</div>
                </div>
              </div>

              {/* Safety gate */}
              <div
                className="rounded-lg p-3"
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    NEXT STEP
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs font-semibold"
                    style={{ color: "#0E7C6B" }}
                  >
                    <Check className="w-3 h-3" /> Proceeding
                  </span>
                </div>
                <span className="text-xs text-slate-500">safe_and_clear</span>
              </div>

              {/* Executive Overview */}
              <div className="rounded-lg border border-slate-200 p-3">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  EXECUTIVE OVERVIEW
                </p>
                <div className="grid grid-cols-5 text-center gap-1">
                  {[
                    { label: "ENTITIES",   val: "1"  },
                    { label: "AGENTS",     val: "0"  },
                    { label: "PATH STEPS", val: "0"  },
                    { label: "SQL",        val: "No" },
                    { label: "CITATIONS",  val: "0"  },
                  ].map(({ label, val }) => (
                    <div key={label}>
                      <div className="text-[9px] text-slate-400 font-medium leading-tight mb-1">{label}</div>
                      <div className="text-base font-bold text-slate-700">{val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RICSA Scoring */}
              <div className="grid grid-cols-2 gap-2">
                {RICSA_SCORES.map(({ letter, label, score }) => (
                  <div key={letter} className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2">
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                      style={{ background: "#0E7C6B" }}
                    >
                      {letter}
                    </div>
                    <span className="text-sm text-slate-600 flex-1 truncate">{label}</span>
                    <span className="text-sm font-bold text-slate-800">{score}</span>
                  </div>
                ))}
              </div>

              {/* Actionability — full width */}
              <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2">
                <div
                  className="w-5 h-5 rounded flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                  style={{ background: "#0E7C6B" }}
                >
                  A
                </div>
                <span className="text-sm text-slate-600 flex-1">Actionability</span>
                <span className="text-sm font-bold text-slate-800">100</span>
              </div>

              {/* What the system understood */}
              <div
                className="rounded-lg p-3 space-y-4"
                style={{ background: "#fefce8", border: "1px solid #fde68a" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#b45309" }}>
                  WHAT THE SYSTEM UNDERSTOOD
                </p>
                {UNDERSTOOD_ROWS.map(({ key, text, tags }) => (
                  <div key={key}>
                    <div className="flex gap-2 mb-1.5">
                      <span
                        className="text-[10px] font-bold uppercase shrink-0 pt-0.5"
                        style={{ color: "#b45309", width: 56 }}
                      >
                        {key}
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed break-words min-w-0">
                        {text}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5" style={{ paddingLeft: 64 }}>
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                          style={{ background: "#ccfbf1", color: "#0f766e" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Entities accordion */}
              <button
                className="w-full flex items-center justify-between px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                onClick={() => setEntitiesExpanded(!entitiesExpanded)}
              >
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  ENTITIES IDENTIFIED
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">1</span>
                  <ChevronDown
                    className="w-4 h-4 text-slate-400 transition-transform duration-200"
                    style={{ transform: entitiesExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </div>
              </button>

              <AnimatePresence>
                {entitiesExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border border-slate-200 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-800">Optum PBM Contract</span>
                        <span
                          className="text-[10px] px-1.5 py-0.5 rounded font-medium"
                          style={{ background: "#ccfbf1", color: "#0f766e" }}
                        >
                          contract
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function RIAA() {
  const scrollToChat = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("how-chat-works");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="RIAA | Vayom AI Agentic Solution for Enterprise Intelligence"
        description="RIAA brings together your data, business rules, and expert judgment. Chat for on-demand answers. Agents for embedded process intelligence."
        keywords="RIAA, agentic AI, enterprise intelligence, human digital twins, business agents, AI governance"
        canonicalUrl="https://vayomai.org/riaa"
      />
      <Header />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 border-b border-border">
        <RIAAContainer>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <motion.div className="space-y-8" {...fadeUp}>
              <img src={riaaLogo} alt="RIAA" className="h-20 w-auto object-contain" />
              <div>
                <h1
                  className="font-display font-bold leading-[1.1] text-foreground mb-6"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
                >
                  RIAA turns enterprise expertise into action.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  RIAA brings together your data, business rules, and expert judgment so teams can get answers faster, make better decisions, and move work forward with confidence.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-lg h-12"
                  onClick={scrollToDemo}
                  data-testid="button-request-demo-riaa-hero"
                >
                  Request a Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-lg h-12 border-2"
                  onClick={scrollToChat}
                  data-testid="button-see-riaa-in-action"
                >
                  See RIAA in Action
                </Button>
              </div>
            </motion.div>

            {/* Right: visual illustration */}
            <motion.div
              className="relative h-[360px] xl:h-[420px] w-full rounded-2xl bg-white border border-border shadow-xl flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle, #1d4ed8 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />

              <div className="relative flex items-center justify-center w-full px-8 z-10">
                {/* Chat node */}
                <motion.div
                  className="flex flex-col items-center gap-2"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="bg-blue-50 border border-primary/20 rounded-2xl p-5 shadow-md flex flex-col items-center gap-2 w-28">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-foreground">Chat</span>
                    <span className="text-[10px] text-muted-foreground text-center leading-tight">On-demand answers</span>
                  </div>
                </motion.div>

                {/* SVG connectors */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 280" fill="none">
                  <path d="M 210 140 L 100 140" stroke="#1d4ed830" strokeWidth="2" strokeDasharray="5 4" />
                  <path d="M 210 140 L 320 140" stroke="#1d4ed830" strokeWidth="2" strokeDasharray="5 4" />
                  <circle r="4" fill="#1d4ed8" opacity="0.7">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 210 140 L 100 140" />
                  </circle>
                  <circle r="4" fill="#1d4ed8" opacity="0.7">
                    <animateMotion dur="2.5s" begin="1.25s" repeatCount="indefinite" path="M 210 140 L 320 140" />
                  </circle>
                </svg>

                {/* Center RIAA node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-20">
                  <motion.div
                    className="bg-primary text-white rounded-2xl px-5 py-4 shadow-xl flex flex-col items-center gap-1"
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Brain className="w-7 h-7" />
                    <span className="text-base font-bold tracking-wide">RIAA</span>
                  </motion.div>
                </div>

                {/* Agents node */}
                <motion.div
                  className="flex flex-col items-center gap-2 ml-auto"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="bg-slate-50 border border-primary/20 rounded-2xl p-5 shadow-md flex flex-col items-center gap-2 w-28">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-foreground">Agents</span>
                    <span className="text-[10px] text-muted-foreground text-center leading-tight">Process intelligence</span>
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="text-xs text-muted-foreground font-medium bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
                  One system. Two modes.
                </span>
              </div>
            </motion.div>
          </div>
        </RIAAContainer>
      </section>

      {/* ── How Chat Works + How Agents Work side-by-side ── */}
      <section className="bg-white">
        <RIAAContainer className="!px-0 sm:!px-0 lg:!px-0 xl:!px-0 2xl:!px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">

            {/* ── How Chat Works ── */}
            <div
              id="how-chat-works"
              className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 flex flex-col"
            >
              <motion.div className="space-y-6 mb-12" {...fadeUp}>
                <h2
                  className="font-display font-bold text-foreground"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
                >
                  How Chat Works
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  RIAA Chat is the on-demand side of the product. A user asks a question in plain English, and RIAA returns a grounded answer using the right business context, data, documents, and rules.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  It is built for real operational questions, not generic AI conversations. Teams can use it to understand what happened, why it happened, what needs attention, and what action should come next.
                </p>
              </motion.div>

              {/* Chat mockup illustration */}
              <motion.div
                className="mt-auto"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p
                  className="font-semibold text-foreground uppercase tracking-widest mb-6"
                  style={{ fontSize: "clamp(10px, 1.1vw, 13px)" }}
                >
                  In practice:
                </p>
                <ChatMockup />
                <p className="text-center text-xs text-slate-400 italic mt-4">
                  Every answer is grounded in your actual documents
                </p>
              </motion.div>
            </div>

            {/* ── How Agents Work ── */}
            <div className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-slate-50">
              <motion.div className="space-y-6 mb-12" {...fadeUp}>
                <h2
                  className="font-display font-bold text-foreground"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
                >
                  How Agents Work
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  RIAA Agents are the operational side of the system. Instead of waiting for someone to ask a question, they work inside business processes to identify issues, apply logic, surface risk, and route the right work to the right people.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  They can support workflows like exception review, duplicate detection, business-rule execution, outreach drafting, and metric generation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What makes them different is that they are not generic assistants. They operate within your data, your rules, and your governance model.
                </p>
              </motion.div>

              {/* Trifecta */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p
                  className="font-semibold text-foreground uppercase tracking-widest mb-6"
                  style={{ fontSize: "clamp(10px, 1.1vw, 13px)" }}
                >
                  What powers them:
                </p>
                <TrifectaGraphic />
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Hover each node to learn how it works
                </p>
              </motion.div>
            </div>

          </div>
        </RIAAContainer>
      </section>

      {/* ── Why It Matters ── */}
      <section className="py-24 bg-white border-t border-border">
        <RIAAContainer>
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              className="font-display font-semibold text-foreground leading-relaxed"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 2rem)" }}
              {...fadeUp}
            >
              RIAA is not a side tool. It is the intelligence layer across the product, helping teams ask better questions, automate more of the right work, and keep decisions aligned with business rules and expert knowledge.
            </motion.p>
          </div>
        </RIAAContainer>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 bg-background">
        <RIAAContainer>
          <motion.div
            className="bg-primary rounded-[40px] p-12 lg:p-20 text-white relative overflow-hidden"
            {...fadeUp}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <img
                  src={riaaLogo}
                  alt="RIAA"
                  className="h-14 w-auto object-contain opacity-90 hidden md:block"
                />
                <div>
                  <h2
                    className="font-display font-bold mb-3"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
                  >
                    See RIAA on your data.
                  </h2>
                  <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                    We will show you how RIAA helps your team get answers faster and put intelligence directly into day-to-day operations.
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                className="rounded-full px-10 text-lg h-12 bg-white text-primary hover:bg-white/90 shrink-0 font-semibold"
                onClick={scrollToDemo}
                data-testid="button-request-demo-riaa-cta"
              >
                Request a Demo
              </Button>
            </div>
          </motion.div>
        </RIAAContainer>
      </section>

      <RIAAReasoningWidget />
      <Footer />
    </div>
  );
}
