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
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const fadeUpDelay = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const TRIFECTA_NODES = [
  {
    id: "agents",
    icon: Briefcase,
    label: "Business Agents",
    tooltip:
      "Specialized workers that run inside your workflows. Each one handles a focused operational task: checking transactions against rules, detecting duplicates, scoring anomalies, routing items for review, triggering outreach, or computing metrics.",
    // top-center
    cx: 200,
    cy: 60,
    anchor: "bottom" as const,
  },
  {
    id: "twins",
    icon: User,
    label: "Human Digital Twins",
    tooltip:
      "A structured capture of how your best expert thinks, explains, escalates, and makes decisions. Not a bio. The system records their cognitive approach, communication style, domain vocabulary, boundaries, and escalation patterns, then applies that judgment at runtime.",
    // bottom-left
    cx: 60,
    cy: 260,
    anchor: "right" as const,
  },
  {
    id: "policy",
    icon: ShieldCheck,
    label: "Policy Controls",
    tooltip:
      "The governance layer that defines what the AI can access, how it should respond, what safety boundaries are always on, and what cost controls apply. Policies are enforced at runtime across every interaction, not treated as suggestions.",
    // bottom-right
    cx: 340,
    cy: 260,
    anchor: "left" as const,
  },
];

function TrifectaGraphic() {
  const [hovered, setHovered] = useState<string | null>(null);

  const NODE_R = 38;

  const getTooltipPos = (anchor: "bottom" | "left" | "right", cx: number, cy: number) => {
    if (anchor === "bottom") return { left: "50%", top: `${cy + NODE_R + 8}px`, transform: "translateX(-50%)" };
    if (anchor === "right") return { left: `${cx + NODE_R + 12}px`, top: `${cy - 60}px` };
    return { right: `${400 - cx + NODE_R + 12}px`, top: `${cy - 60}px` };
  };

  return (
    <div className="relative w-full flex justify-center">
      <div className="relative" style={{ width: 400, height: 340 }}>
        {/* SVG triangle + center */}
        <svg
          viewBox="0 0 400 340"
          width={400}
          height={340}
          className="absolute inset-0"
          fill="none"
        >
          {/* Triangle edges */}
          <line x1="200" y1="60" x2="60" y2="260" stroke="#1d4ed820" strokeWidth="2" strokeDasharray="6 4" />
          <line x1="200" y1="60" x2="340" y2="260" stroke="#1d4ed820" strokeWidth="2" strokeDasharray="6 4" />
          <line x1="60" y1="260" x2="340" y2="260" stroke="#1d4ed820" strokeWidth="2" strokeDasharray="6 4" />

          {/* Animated flow dots */}
          <circle r="4" fill="#1d4ed8" opacity="0.6">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 200 60 L 60 260 L 340 260 Z" />
          </circle>
          <circle r="3" fill="#3b82f6" opacity="0.4">
            <animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M 200 60 L 60 260 L 340 260 Z" />
          </circle>

          {/* Center label */}
          <text
            x="200"
            y="172"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-muted-foreground"
            style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", fill: "#94a3b8" }}
          >
            THE TRIFECTA
          </text>
        </svg>

        {/* Nodes */}
        {TRIFECTA_NODES.map((node) => {
          const Icon = node.icon;
          const isHovered = hovered === node.id;
          return (
            <div key={node.id}>
              {/* Node circle */}
              <motion.button
                className="absolute flex flex-col items-center gap-1.5 focus:outline-none"
                style={{
                  left: node.cx - NODE_R,
                  top: node.cy - NODE_R,
                  width: NODE_R * 2,
                  height: NODE_R * 2,
                }}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(node.id)}
                onBlur={() => setHovered(null)}
                animate={{ scale: isHovered ? 1.08 : 1 }}
                transition={{ duration: 0.2 }}
                aria-label={node.label}
              >
                <div
                  className={`w-full h-full rounded-full border-2 flex items-center justify-center transition-all duration-200 shadow-md ${
                    isHovered
                      ? "bg-primary border-primary text-white shadow-primary/30 shadow-lg"
                      : "bg-white border-border text-primary"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </motion.button>

              {/* Label below/beside node */}
              <div
                className="absolute text-center pointer-events-none"
                style={{
                  left: node.cx - 56,
                  top: node.cy + NODE_R + 6,
                  width: 112,
                }}
              >
                <span className="text-[11px] font-semibold text-foreground leading-tight block">
                  {node.label}
                </span>
              </div>

              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute z-30 bg-white border border-border rounded-2xl shadow-2xl p-4 w-64 text-left pointer-events-none"
                    style={getTooltipPos(node.anchor, node.cx, node.cy)}
                    initial={{ opacity: 0, scale: 0.95, y: 4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-foreground">{node.label}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{node.tooltip}</p>
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
        <div className="container-width grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div className="space-y-8" {...fadeUp}>
            <img src={riaaLogo} alt="RIAA" className="h-20 w-auto object-contain" />
            <div>
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.1] text-foreground mb-6">
                RIAA turns enterprise expertise into action.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
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
            className="relative h-[380px] w-full rounded-2xl bg-white border border-border shadow-xl flex items-center justify-center overflow-hidden"
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
      </section>

      {/* ── How Chat Works ── */}
      <section id="how-chat-works" className="py-20 bg-white">
        <div className="container-width max-w-4xl mx-auto">
          <motion.div className="space-y-6" {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold">How Chat Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RIAA Chat is the on-demand side of the product. A user asks a question in plain English, and RIAA returns a grounded answer using the right business context, data, documents, and rules.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It is built for real operational questions, not generic AI conversations. Teams can use it to understand what happened, why it happened, what needs attention, and what action should come next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── How Agents Work ── */}
      <section className="py-20 bg-slate-50 border-y border-border">
        <div className="container-width max-w-4xl mx-auto">
          <motion.div className="space-y-6 mb-12" {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold">How Agents Work</h2>
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

          {/* What powers them: Trifecta */}
          <motion.div {...fadeUpDelay(0.1)}>
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-8">What powers them:</p>
            <div className="bg-white rounded-3xl border border-border shadow-sm p-8 md:p-12 overflow-visible">
              <TrifectaGraphic />
              <p className="text-center text-xs text-muted-foreground mt-6">
                Hover each node to learn how it works
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why It Matters ── */}
      <section className="py-24 bg-white">
        <div className="container-width max-w-3xl mx-auto text-center">
          <motion.p
            className="text-2xl md:text-3xl font-display font-semibold text-foreground leading-relaxed"
            {...fadeUp}
          >
            RIAA is not a side tool. It is the intelligence layer across the product, helping teams ask better questions, automate more of the right work, and keep decisions aligned with business rules and expert knowledge.
          </motion.p>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 bg-background">
        <div className="container-width">
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
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
