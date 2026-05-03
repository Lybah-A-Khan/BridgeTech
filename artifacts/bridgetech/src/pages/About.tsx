import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const milestones = [
  {
    year: "2023",
    label: "The Idea Begins",
    desc: "Lybah A. Khan sees a clear gap in her own community: there are no affordable CS programs for kids who actually need them. Rather than waiting for someone else to fix it, she decides to build one herself.",
    stat: "1 gap spotted. 1 person who decided to fill it.",
  },
  {
    year: "2024",
    label: "Building the Foundation",
    desc: "A full year of behind-the-scenes work — designing curriculum from scratch, finding the right people, forming community partnerships, and laying the groundwork to do this right. BridgeTech officially takes shape as an organization.",
    stat: "Curriculum · Team · Partnerships · Structure",
  },
  {
    year: "Jan 2025",
    label: "Pilot Program Launches",
    desc: "BridgeTech runs its first official pilot program in January 2025 — a 6-week structured cohort with real students, real curriculum, and real results. The model works.",
    stat: "First cohort · 6-week format · Bay Area",
  },
  {
    year: "2025",
    label: "4 Programs. 150+ Students.",
    desc: "Over the course of 2025, BridgeTech runs 4 different programs — each 6 weeks long — across the Bay Area. 150+ students go through the curriculum. One program has already wrapped in early 2025, with 2 new ones launching due to growing interest.",
    stat: "4 programs · 150+ students · 6 weeks each",
  },
  {
    year: "2026–2027",
    label: "Expanding the Reach",
    desc: "The goal: embed BridgeTech into after-school clubs and additional community centers across California. Making the program a permanent fixture — not a one-time visit — in the communities that need it most.",
    stat: "Goal: after-school clubs · more community centers",
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
              In 2023, Lybah A. Khan noticed something missing in her own community: there were simply no affordable CS programs for kids who needed them. So she built one. A year of groundwork — curriculum, partners, people — and BridgeTech officially launched in 2024, with its first pilot running in January 2025.
            </p>
          </ScrollReveal>

          {/* Interactive milestone timeline */}
          <MilestoneTimeline />

          {/* Compact impact callout */}
          <ScrollReveal className="mb-24">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              {[
                { num: "150+", label: "Students reached in year one" },
                { num: "4", label: "Programs run in 2025 alone" },
                { num: "6 wks", label: "Per program — structured & hands-on" },
              ].map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-sm transition-all">
                  <p className="text-4xl font-serif font-bold text-primary mb-2">{s.num}</p>
                  <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

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

          {/* Community recommendation */}
          <ScrollReveal className="mb-16">
            <div className="bg-muted border border-border rounded-[2rem] p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Community Partner</p>
              <blockquote className="text-lg md:text-xl font-serif italic text-foreground leading-relaxed mb-6">
                "I highly recommend BridgeTech. They delivered a highly professional and engaging program for kids focused on coding and Python at MCA. Their structured, hands-on approach not only makes learning accessible and fun — it empowers students with real technical skills that build confidence and curiosity."
              </blockquote>
              <div>
                <p className="font-semibold text-sm">Indira Kaljo</p>
                <p className="text-xs text-muted-foreground mt-0.5">Director of Community · MCA Program, Bay Area</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Bake sale + grassroots story */}
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Grassroots Fundraising</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">We baked our way to independence.</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When students showed up without laptops, BridgeTech didn't wait for a grant. We organized a community bake sale — 10 hours of baking, 4 hours at the booth — and raised $2,000 entirely through community support.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Half went to purchasing 5 Chromebooks for students without device access. The other half covered the 501(c)(3) filing costs — making BridgeTech fully independent, no longer relying on fiscal sponsorship.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "$2,000", label: "Raised at the bake sale" },
                  { num: "5", label: "Chromebooks purchased for students" },
                  { num: "10 hrs", label: "Spent baking together" },
                  { num: "100%", label: "Community funded" },
                ].map((s, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/30 transition-all">
                    <p className="text-2xl font-serif font-bold text-primary mb-1">{s.num}</p>
                    <p className="text-xs text-muted-foreground leading-snug">{s.label}</p>
                  </div>
                ))}
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
                title: "Becoming a 501(c)(3)",
                body: "BridgeTech initially operated under fiscal sponsorship through Connect For Purpose, a California nonprofit. We've since raised funds independently and are now covering all paperwork ourselves — on the path to full nonprofit status.",
                badge: "Fully independent · 501(c)(3) in progress",
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
