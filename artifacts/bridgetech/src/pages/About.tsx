import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const milestones = [
  {
    year: "2024",
    label: "BridgeTech Founded",
    desc: "Lybah A. Khan, a high school student in the Bay Area, notices that brilliant kids around her have no real access to CS education. She starts teaching a handful of local students the basics of programming — out of genuine belief that it matters.",
    stat: "1 instructor. A handful of students. A big idea.",
  },
  {
    year: "2024",
    label: "First Cohort Launched",
    desc: "The first structured program kicks off — HTML & CSS for grades 3–6. Students build and publish their very first webpages. The energy is electric. Word spreads fast through the community.",
    stat: "First student webpage goes live.",
  },
  {
    year: "2024",
    label: "Community Partners",
    desc: "BridgeTech partners with 3+ community centers across Northern California, embedding programs directly where families already trust and gather. No commute barriers. No unfamiliar spaces. Just coding.",
    stat: "3+ partner locations · Bay Area",
  },
  {
    year: "2024–25",
    label: "150+ Students Impacted",
    desc: "Python joins the curriculum for grades 7–12. The program scales without losing its community feel. Over 150 students have now learned to build something real — and many keep going on their own.",
    stat: "150+ students · 2 active programs",
  },
  {
    year: "2025",
    label: "Saleh's FLL Win",
    desc: "Middle schooler Saleh uses Google Teachable Machine — an AI tool introduced in the Python course — to build an innovation project for the FIRST Lego League robotics competition. He wins an award. His mom writes in: \"He would not have achieved that without learning from you.\"",
    stat: "FLL award · Python + AI · Bay Area",
  },
];

const storySteps = [
  {
    step: "01",
    title: "He arrived nervous.",
    body: "Saleh walked into his first BridgeTech Python session unsure if coding was really \"for him.\" He'd never written a line of code before.",
  },
  {
    step: "02",
    title: "He finished the whole program.",
    body: "Week after week, he showed up. He struggled through loops and functions — and then something clicked. He completed the full curriculum.",
  },
  {
    step: "03",
    title: "He started a coding club.",
    body: "Inspired, Saleh went back to his school and started a coding club. He began teaching other students what he'd learned — on his own.",
  },
  {
    step: "04",
    title: "He built an AI model.",
    body: "Using Google Teachable Machine — an AI tool introduced in the BridgeTech Python course — he built an innovation project for a FIRST Lego League robotics competition.",
  },
  {
    step: "05",
    title: "He won.",
    body: "Saleh won an FLL award. His mom reached out: \"He would not have achieved that without learning from you.\" That's why BridgeTech exists.",
  },
];

function MilestoneTimeline() {
  const [current, setCurrent] = useState(0);
  const m = milestones[current];

  return (
    <div className="mb-24">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Our Journey</span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </ScrollReveal>

      {/* Step dots */}
      <ScrollReveal delay={0.05}>
        <div className="flex items-center justify-center gap-0 mb-8 select-none">
          {milestones.map((ms, i) => (
            <div key={i} className="flex items-center">
              <button
                onClick={() => setCurrent(i)}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-300 cursor-pointer z-10 relative
                  ${i === current
                    ? "bg-primary border-primary text-primary-foreground scale-125 shadow-md"
                    : i < current
                    ? "bg-primary/20 border-primary/40 text-primary"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40"
                  }`}
              >
                {i + 1}
              </button>
              {i < milestones.length - 1 && (
                <div className="w-12 h-0.5 relative">
                  <div className="absolute inset-0 bg-border" />
                  <motion.div
                    className="absolute inset-0 bg-primary origin-left"
                    animate={{ scaleX: i < current ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Content card */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-[2rem] p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold font-mono">
                  {m.year}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{m.label}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-5">{m.desc}</p>
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 text-primary px-3 py-1 text-xs font-medium">
                  {m.stat}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-5">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <span className="text-xs text-muted-foreground font-medium">{current + 1} / {milestones.length}</span>
          <button
            onClick={() => setCurrent((c) => Math.min(milestones.length - 1, c + 1))}
            disabled={current === milestones.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function SalehStory() {
  const [step, setStep] = useState(0);
  const s = storySteps[step];

  return (
    <div className="mb-24">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Impact in Action</span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="bg-muted rounded-[2rem] border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-primary/5 border-b border-border px-8 py-5 flex items-center justify-between">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Saleh's Story</span>
            <div className="flex gap-1.5">
              {storySteps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === step ? "bg-primary scale-125" : i < step ? "bg-primary/40" : "bg-border"}`}
                />
              ))}
            </div>
          </div>

          {/* Story content */}
          <div className="p-8 md:p-12 min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28 }}
              >
                <span className="text-5xl font-serif font-bold text-primary/15 leading-none block mb-2 select-none">{s.step}</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{s.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">{s.body}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => setStep((p) => Math.max(0, p - 1))}
                disabled={step === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft size={16} /> Back
              </button>
              {step < storySteps.length - 1 ? (
                <button
                  onClick={() => setStep((p) => Math.min(storySteps.length - 1, p + 1))}
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  Next <ChevronRight size={16} />
                </button>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  🏆 That's the whole story.
                </span>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">

          <ScrollReveal className="mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-8 font-medium">
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              From High School to <span className="text-primary italic">Real Impact</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              BridgeTech started with a simple observation: the digital divide is real, and it's holding brilliant minds back. Founded in 2024 by Lybah A. Khan — a Bay Area high schooler with a clear-eyed conviction that CS education belongs to everyone.
            </p>
          </ScrollReveal>

          {/* Interactive milestone timeline */}
          <MilestoneTimeline />

          {/* Saleh's story — click-through narrative */}
          <SalehStory />

          {/* Founder quote */}
          <ScrollReveal className="mb-20">
            <div className="p-8 md:p-12 bg-primary text-primary-foreground rounded-[2rem] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <blockquote className="text-2xl md:text-3xl font-serif italic mb-6 leading-relaxed">
                  "Technology should be a bridge, not a barrier. Our goal isn't just to teach coding — it's to open doors that were previously closed."
                </blockquote>
                <p className="font-semibold text-primary-foreground/80">— Lybah A. Khan, Founder</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Affordable + Nonprofit */}
          <ScrollReveal className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Affordable by Design",
                body: "Programs range from $20–$50 — intentionally. Quality CS education shouldn't require a wealthy zip code. No student is ever turned away for financial need. If cost is a barrier, we'll find a way.",
                badge: "$20–$50 · No student turned away",
              },
              {
                title: "Path to 501(c)(3)",
                body: "BridgeTech is in the process of becoming a registered nonprofit in California. This reflects our commitment to long-term sustainability, expanded reach, and deeper partnerships with schools and organizations.",
                badge: "Nonprofit status in progress",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{item.body}</p>
                <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">{item.badge}</span>
              </div>
            ))}
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
