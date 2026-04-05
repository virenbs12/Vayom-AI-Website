import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
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
  Zap,
  FileText,
  Target,
  CheckCircle,
  ArrowRight,
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
            <img
              src={riaaLogo}
              alt="RIAA"
              className="h-20 w-auto object-contain"
            />
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
            {/* Subtle dot grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle, #1d4ed8 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Layout: Chat node (left) -- RIAA center -- Agents node (right) */}
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
                {/* Left path: RIAA center to Chat */}
                <path d="M 210 140 L 100 140" stroke="#1d4ed830" strokeWidth="2" strokeDasharray="5 4" />
                {/* Right path: RIAA center to Agents */}
                <path d="M 210 140 L 320 140" stroke="#1d4ed830" strokeWidth="2" strokeDasharray="5 4" />
                {/* Animated dot left */}
                <circle r="4" fill="#1d4ed8" opacity="0.7">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M 210 140 L 100 140" />
                </circle>
                {/* Animated dot right */}
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

            {/* Bottom label */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <span className="text-xs text-muted-foreground font-medium bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
                One platform. Two modes.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How Chat Works ── */}
      <section id="how-chat-works" className="py-20 bg-white">
        <div className="container-width max-w-4xl mx-auto">
          <motion.div className="space-y-6 mb-12" {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold">How Chat Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RIAA Chat is the on-demand side of the platform. A user asks a question in plain English, and RIAA returns a grounded answer using the right business context, data, documents, and rules.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It is built for real operational questions, not generic AI conversations. Teams can use it to understand what happened, why it happened, what needs attention, and what action should come next.
            </p>
          </motion.div>

          <motion.div {...fadeUpDelay(0.1)}>
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-6">What that means for the business:</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Zap, text: "Faster answers without waiting on analysts" },
                { icon: FileText, text: "Clearer explanations with supporting evidence" },
                { icon: Target, text: "A simpler path from question to decision" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-50 border border-border rounded-2xl p-6 flex flex-col gap-3"
                  {...fadeUpDelay(0.15 + i * 0.08)}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How Agents Work ── */}
      <section className="py-20 bg-slate-50 border-y border-border">
        <div className="container-width max-w-4xl mx-auto">
          <motion.div className="space-y-6 mb-12" {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold">How Agents Work</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RIAA Agents are the operational side of the platform. Instead of waiting for someone to ask a question, they work inside business processes to identify issues, apply logic, surface risk, and route the right work to the right people.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              They can support workflows like exception review, duplicate detection, business-rule execution, outreach drafting, and metric generation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What makes them different is that they are not generic assistants. They operate within your data, your rules, and your governance model.
            </p>
          </motion.div>

          {/* What powers them */}
          <motion.div className="mb-12" {...fadeUpDelay(0.1)}>
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-6">What powers them:</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: Briefcase,
                  title: "Business Agents",
                  desc: "Perform focused operational tasks",
                },
                {
                  icon: User,
                  title: "Human Digital Twins",
                  desc: "Reflect expert judgment and decision style",
                },
                {
                  icon: ShieldCheck,
                  title: "Policy Controls",
                  desc: "Enforce boundaries, access, and behavior",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm group hover:border-primary transition-colors"
                  {...fadeUpDelay(0.15 + i * 0.08)}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What that means for the business */}
          <motion.div {...fadeUpDelay(0.2)}>
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-6">What that means for the business:</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: CheckCircle, text: "Less manual follow-up" },
                { icon: ArrowRight, text: "More consistent execution" },
                { icon: ShieldCheck, text: "Better control over how work gets done" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-border rounded-2xl p-6 flex flex-col gap-3"
                  {...fadeUpDelay(0.25 + i * 0.08)}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug">{item.text}</p>
                </motion.div>
              ))}
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
            RIAA is not a side tool. It is the intelligence layer across the platform, helping teams ask better questions, automate more of the right work, and keep decisions aligned with business rules and expert knowledge.
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
            {/* Decorative background circles */}
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
