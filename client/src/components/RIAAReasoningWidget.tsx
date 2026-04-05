import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, X } from "lucide-react";
import riaaReasoningImg from "@assets/riaa_reasoning_annotated_1775422806764.png";

// Add future annotated images to this array — the panel scrolls through them all.
const REASONING_SLIDES = [
  {
    src: riaaReasoningImg,
    alt: "How RIAA Explains Every Answer — annotated reasoning panel showing Confidence Score, Safety Gate, Executive Overview, RICSA Scoring, Prompt Classification, Skill Activation, and Entity Detection",
  },
];

export function RIAAReasoningWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Floating trigger button ──
           Mobile: icon-only pill, bottom-right corner
           Tablet+: full label pill                      */}
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

      {/* ── Backdrop — click to close ── */}
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
           Mobile (< sm):  full-width bottom sheet, slides up
           Tablet (sm-lg): centered modal, max 700 px
           Laptop+ (lg+):  centered modal, max 900 px     */}
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
                "rounded-t-2xl",
                "sm:rounded-2xl",
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
