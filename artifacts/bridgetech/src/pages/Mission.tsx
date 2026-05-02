import { ScrollReveal } from "@/components/ScrollReveal";
import { Globe2, HeartHandshake, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const values = [
  {
    title: "Equity",
    desc: "Education is a right, not a privilege. We remove financial and structural barriers to learning.",
    color: "group-hover:text-emerald-600",
    bg: "group-hover:bg-emerald-500/10",
    border: "group-hover:border-emerald-300",
  },
  {
    title: "Community",
    desc: "We learn better together. Our programs foster collaboration, mentorship, and shared success.",
    color: "group-hover:text-sky-600",
    bg: "group-hover:bg-sky-500/10",
    border: "group-hover:border-sky-300",
  },
  {
    title: "Innovation",
    desc: "We adapt our curriculum to meet real-world needs, preparing students for tomorrow's challenges.",
    color: "group-hover:text-violet-600",
    bg: "group-hover:bg-violet-500/10",
    border: "group-hover:border-violet-300",
  },
];

const pillars = [
  { num: "01", title: "Identify", desc: "We find communities where the digital divide is most acute — where students have ambition but no access." },
  { num: "02", title: "Teach", desc: "We run structured, hands-on programs led by trained instructors. Real curriculum. Real projects. Real skills." },
  { num: "03", title: "Sustain", desc: "We partner with community centers and schools so programs outlast any single cohort — building lasting infrastructure." },
  { num: "04", title: "Expand", desc: "We grow through chapters. Any community ready to run a BridgeTech program can reach out and we'll help them build it." },
];

export default function Mission() {
  const [active, setActive] = useState<number | null>(null);

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

          {/* Core Values */}
          <ScrollReveal delay={0.1} className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-border" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <Lightbulb size={16} />
                <span className="text-sm font-medium uppercase tracking-widest">Core Values</span>
              </div>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className={`group p-6 rounded-2xl border border-border bg-card cursor-default transition-colors duration-300 ${v.border}`}
                >
                  <h4 className={`font-serif font-bold text-xl mb-3 transition-colors duration-300 ${v.color}`}>{v.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* How We Do It */}
          <ScrollReveal delay={0.1}>
            <h3 className="text-3xl font-serif font-bold mb-8 text-center">How We Do It</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pillars.map((p, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActive(active === i ? null : i)}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer w-full
                    ${active === i
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-card border-border hover:border-primary/40 hover:shadow-md"
                    }`}
                >
                  <span className={`text-xs font-bold tracking-widest mb-3 block ${active === i ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {p.num}
                  </span>
                  <h4 className="font-serif font-bold text-lg mb-2 flex items-center justify-between gap-2">
                    {p.title}
                    <ArrowRight size={14} className={`transition-transform duration-300 ${active === i ? "rotate-90" : ""}`} />
                  </h4>
                  <motion.div
                    initial={false}
                    animate={{ height: active === i ? "auto" : 0, opacity: active === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className={`text-sm leading-relaxed pt-1 ${active === i ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {p.desc}
                    </p>
                  </motion.div>
                </motion.button>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">Click any step to expand</p>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
