import { ScrollReveal } from "@/components/ScrollReveal";
import { FlipCard } from "@/components/FlipCard";
import { Globe, Code2, Cpu, Sparkles, RotateCcw } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const allProjects = [
  {
    title: "Web Development",
    subtitle: "Grades 3–6",
    description: "Students learn to build real, functioning webpages using HTML, CSS, and JavaScript. By the end of the program, each student publishes their own site — their first creation on the actual internet.",
    detail: "HTML · CSS · JavaScript",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    badge: "Active",
    filter: "Active",
    badgeColor: "bg-green-500/10 text-green-600",
    backBg: "bg-blue-600",
  },
  {
    title: "Python Programming",
    subtitle: "Grades 7–12",
    description: "A structured Python curriculum covering variables, loops, functions, data structures, and mini-projects. Students leave with a portfolio of code and the confidence to keep going.",
    detail: "Python · Algorithms · Projects",
    icon: Code2,
    color: "text-primary",
    bg: "bg-primary/10",
    badge: "Active",
    filter: "Active",
    badgeColor: "bg-green-500/10 text-green-600",
    backBg: "bg-primary",
  },
  {
    title: "Java Programming",
    subtitle: "All Grade Levels",
    description: "Our next major offering — object-oriented programming with Java. This course introduces the language behind Android apps, enterprise software, and AP Computer Science.",
    detail: "Java · OOP · CS Fundamentals",
    icon: Cpu,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    badge: "Coming Soon",
    filter: "Coming Soon",
    badgeColor: "bg-primary/10 text-primary",
    backBg: "bg-orange-500",
  },
  {
    title: "AI Crash Course",
    subtitle: "Elementary · Middle · High School",
    description: "A multi-level AI literacy program adapted for each age group. Elementary: what AI is. Middle: machine learning concepts. High school: build with AI tools and discuss ethics of intelligent systems.",
    detail: "AI Literacy · Machine Learning · Ethics",
    icon: Sparkles,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    badge: "In Development",
    filter: "In Development",
    badgeColor: "bg-secondary/10 text-secondary-foreground",
    backBg: "bg-purple-600",
  },
];

const filters = ["All", "Active", "Coming Soon", "In Development"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? allProjects
    : allProjects.filter((p) => p.filter === activeFilter);

  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-2xl mb-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Our <span className="text-primary italic">Programs</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real curriculum. Real skills. Built for students who deserve access to the tools that shape the future — at a price that doesn't leave anyone behind.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05} className="mb-6">
            <div className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-2 text-sm text-muted-foreground font-medium">
              Programs range from <span className="text-foreground font-semibold mx-1">$20–$50</span> · No student is turned away for financial need
            </div>
          </ScrollReveal>

          {/* Filter tabs + flip hint */}
          <ScrollReveal delay={0.08} className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer
                    ${activeFilter === f
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border">
              <RotateCcw size={11} /> Click a card to flip
            </span>
          </ScrollReveal>

          {/* Flip cards */}
          <div className="grid md:grid-cols-2 gap-8 min-h-[300px]">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <FlipCard
                    className="h-72"
                    front={
                      <div className="h-full bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/40 hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${project.bg} ${project.color}`}>
                            <project.icon size={24} />
                          </div>
                          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${project.badgeColor}`}>
                            {project.badge}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">{project.subtitle}</p>
                        <h3 className="text-2xl font-serif font-bold mb-auto">{project.title}</h3>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {project.detail.split(" · ").map((tag, t) => (
                            <span key={t} className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground border border-border">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    }
                    back={
                      <div className={`h-full ${project.backBg} rounded-2xl p-6 flex flex-col text-white`}>
                        <h3 className="text-xl font-serif font-bold mb-1">{project.title}</h3>
                        <p className="text-white/70 text-xs mb-4 font-medium">{project.subtitle}</p>
                        <p className="text-white/90 text-sm leading-relaxed flex-1">{project.description}</p>
                        <div className="mt-5 pt-4 border-t border-white/20">
                          <Button
                            asChild
                            size="sm"
                            className="rounded-full bg-white text-foreground hover:bg-white/90 font-semibold"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Link href="/apply">Apply Now</Link>
                          </Button>
                        </div>
                      </div>
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <ScrollReveal delay={0.3} className="mt-16 bg-muted rounded-[2rem] border border-border p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Partnered with 3+ Community Centers</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We run programs at partner schools and community centers across the Bay Area. Can't afford the program fee? Reach out — we'll work something out.
            </p>
            <p className="mt-4 text-primary font-semibold">bridgetech24@gmail.com</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
