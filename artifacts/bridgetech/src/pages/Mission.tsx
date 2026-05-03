import { ScrollReveal } from "@/components/ScrollReveal";
import { Globe2, HeartHandshake, Lightbulb, Users, BookOpen, Building2, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const values = [
  {
    id: "equity",
    title: "Equity",
    short: "Education is a right, not a privilege.",
    long: "We remove financial and structural barriers to learning — every time. Programs are priced at cost, no student is ever turned away for financial need, and we intentionally build in underserved communities first.",
    stat: "150+ students · $20–$50 per program",
    icon: HeartHandshake,
    color: "emerald",
    bg: "bg-emerald-600",
    light: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
  },
  {
    id: "community",
    title: "Community",
    short: "We learn better together.",
    long: "Our programs foster collaboration, peer mentorship, and a sense of belonging. Students who feel seen and supported don't just learn faster — they inspire each other. Many go on to teach others.",
    stat: "3+ partner community centers",
    icon: Users,
    color: "sky",
    bg: "bg-sky-600",
    light: "bg-sky-500/10 text-sky-700 border-sky-200",
  },
  {
    id: "innovation",
    title: "Innovation",
    short: "Curriculum built for tomorrow.",
    long: "We adapt constantly — adding AI literacy, updating Python projects, building toward Java. We meet students with real-world skills, not outdated textbooks. What we teach today should open doors in five years.",
    stat: "4 programs · AI integration underway",
    icon: Lightbulb,
    color: "violet",
    bg: "bg-violet-600",
    light: "bg-violet-500/10 text-violet-700 border-violet-200",
  },
];

const pillars = [
  {
    num: "01",
    title: "Identify",
    icon: BookOpen,
    desc: "We find communities where the digital divide is most acute — where students have ambition but no access. Every chapter starts with listening first.",
    detail: "We work with schools, libraries, and community organizations to understand what's missing before we ever teach a single line of code.",
  },
  {
    num: "02",
    title: "Teach",
    icon: Lightbulb,
    desc: "Structured, hands-on programs led by trained instructors. Real curriculum. Real projects. Real skills — not busywork.",
    detail: "Every cohort ends with students publishing something real: a webpage, a Python app, an AI model. Proof they can build.",
  },
  {
    num: "03",
    title: "Sustain",
    icon: Building2,
    desc: "We partner with community centers and schools so programs outlast any single cohort — building lasting infrastructure.",
    detail: "We train local instructors, build relationships with administrators, and make BridgeTech a permanent part of the community — not a one-time event.",
  },
  {
    num: "04",
    title: "Expand",
    icon: Rocket,
    desc: "We grow through chapters. Any community ready to run a BridgeTech program can reach out and we'll help them build it.",
    detail: "The model is replicable. The curriculum is portable. The mission is global. If your community needs this — let's talk.",
  },
];

function ValuesSpotlight() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="mb-24">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-border" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lightbulb size={16} />
            <span className="text-sm font-medium uppercase tracking-widest">Core Values</span>
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>
      </ScrollReveal>

      {/* Value selector tabs */}
      <ScrollReveal delay={0.05}>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {values.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setSelected(selected === i ? null : i)}
              className={`relative group p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-hidden
                ${selected === i
                  ? `${v.bg} text-white border-transparent shadow-xl scale-[1.02]`
                  : "bg-card border-border hover:border-primary/40 hover:shadow-md"
                }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <v.icon size={20} className={selected === i ? "text-white/80" : "text-muted-foreground"} />
              </div>
              <h4 className={`font-serif font-bold text-2xl mb-2 transition-colors ${selected === i ? "text-white" : "text-foreground"}`}>
                {v.title}
              </h4>
              <p className={`text-sm leading-relaxed transition-colors ${selected === i ? "text-white/80" : "text-muted-foreground"}`}>
                {v.short}
              </p>
              {selected !== i && (
                <span className="mt-3 inline-block text-[10px] font-bold uppercase tracking-widest text-primary/50">Click to explore →</span>
              )}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Expanded panel */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className={`rounded-2xl border p-8 md:p-10 ${values[selected].light}`}>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold mb-3">{values[selected].title}</h3>
                  <p className="leading-relaxed text-lg mb-4">{values[selected].long}</p>
                  <span className="inline-flex items-center rounded-full bg-white/60 border px-3 py-1 text-xs font-semibold">
                    {values[selected].stat}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PillarPath() {
  const [active, setActive] = useState(0);

  return (
    <div className="mb-24">
      <ScrollReveal>
        <h3 className="text-3xl font-serif font-bold mb-10 text-center">How We Do It</h3>
      </ScrollReveal>

      {/* Connected path stepper */}
      <ScrollReveal delay={0.05}>
        <div className="flex items-center justify-center gap-0 mb-10">
          {pillars.map((p, i) => (
            <div key={i} className="flex items-center">
              <button
                onClick={() => setActive(i)}
                className={`relative w-14 h-14 rounded-full border-2 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer flex-shrink-0
                  ${i === active
                    ? "bg-primary border-primary text-primary-foreground scale-110 shadow-lg"
                    : i < active
                    ? "bg-primary/20 border-primary/50 text-primary"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40"
                  }`}
              >
                <span className="text-[9px] font-bold tracking-widest opacity-70">{p.num}</span>
                <span className="text-[11px] font-bold">{p.title}</span>
              </button>
              {i < pillars.length - 1 && (
                <div className="w-14 sm:w-20 h-0.5 relative flex-shrink-0">
                  <div className="absolute inset-0 bg-border" />
                  <motion.div
                    className="absolute inset-0 bg-primary origin-left"
                    animate={{ scaleX: i < active ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Content */}
      <ScrollReveal delay={0.1}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28 }}
            className="bg-card border border-border rounded-[2rem] p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0`}>
                {(() => { const Icon = pillars[active].icon; return <Icon size={26} className="text-primary" />; })()}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-muted-foreground tracking-widest">{pillars[active].num}</span>
                  <h4 className="text-2xl font-serif font-bold">{pillars[active].title}</h4>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">{pillars[active].desc}</p>
                <p className="text-sm text-foreground/70 leading-relaxed border-l-4 border-primary/30 pl-4 italic">{pillars[active].detail}</p>
              </div>
            </div>

            {/* Step navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                disabled={active === 0}
                className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer px-3 py-1.5 rounded-full border border-border hover:border-primary/40"
              >
                ← Previous
              </button>
              <span className="text-xs text-muted-foreground">Step {active + 1} of {pillars.length}</span>
              <button
                onClick={() => setActive((a) => Math.min(pillars.length - 1, a + 1))}
                disabled={active === pillars.length - 1}
                className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer px-3 py-1.5 rounded-full border border-border hover:border-primary/40"
              >
                Next →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </ScrollReveal>
    </div>
  );
}

export default function Mission() {
  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">

          <ScrollReveal className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Mission & <span className="text-primary italic">Vision</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are building a future where zip codes and socioeconomic status do not determine technological literacy.
            </p>
          </ScrollReveal>

          {/* Mission + Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {[
              {
                icon: HeartHandshake,
                title: "Our Mission",
                text: "To bridge the gap in computer science education by providing affordable, high-quality coding and digital literacy programs to underserved students and adults — empowering communities with the skills necessary for the modern digital economy.",
                accent: "bg-primary/10 text-primary",
              },
              {
                icon: Globe2,
                title: "Our Vision",
                text: "A globally accessible technology landscape where every individual — regardless of age, background, or geographic location — has the opportunity to learn, create, and thrive in the digital world.",
                accent: "bg-secondary/10 text-secondary-foreground",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.25 }}
                  className="h-full bg-card p-10 rounded-[2rem] border border-border cursor-default"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.accent}`}>
                    <item.icon size={24} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-4">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{item.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Values spotlight — click to expand */}
          <ValuesSpotlight />

          {/* Pillar path — connected stepper */}
          <PillarPath />

        </div>
      </section>
    </div>
  );
}
