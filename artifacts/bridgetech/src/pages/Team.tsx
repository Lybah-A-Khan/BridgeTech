import { ScrollReveal } from "@/components/ScrollReveal";
import { FlipCard } from "@/components/FlipCard";
import { Linkedin, Plus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const coreTeam = [
  {
    name: "Lybah A. Khan",
    role: "Founder & Executive Director",
    bio: "High school student, CS advocate, and community builder. Founded BridgeTech in 2024 to close the digital divide — one student at a time.",
    linkedin: "https://www.linkedin.com/in/lybah-a-khan",
    initials: "LK",
    highlight: true,
  },
  {
    name: "Hafsah Syed",
    role: "Vice President",
    bio: "Fellow high schooler and CS enthusiast helping lead BridgeTech's growth, operations, and strategic direction. Passionate about making tech education equitable.",
    linkedin: "https://www.linkedin.com/in/hafsahmsyed/",
    initials: "HS",
    highlight: false,
  },
];

const openRoles = [
  { role: "Program Coordinator", desc: "Organize workshops, manage curriculum delivery, and support our student cohorts from enrollment to completion." },
  { role: "Outreach Lead", desc: "Build relationships with schools, community centers, and local organizations to expand BridgeTech's reach across California." },
  { role: "Volunteer Coordinator", desc: "Recruit, onboard, and manage volunteers and mentors who run sessions and support students in our programs." },
  { role: "Social Media Manager", desc: "Grow BridgeTech's presence on Instagram and LinkedIn, tell our story, and connect us with students, partners, and supporters." },
];

export default function Team() {
  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">

          <ScrollReveal className="text-center mb-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              The <span className="text-primary italic">Team</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Driven by a shared belief in educational equity and the power of technology to transform lives.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05} className="flex justify-center mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border">
              <RotateCcw size={11} /> Click a card to flip
            </span>
          </ScrollReveal>

          {/* Core Team - flip cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-2xl mx-auto">
            {coreTeam.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <FlipCard
                  className="h-80"
                  front={
                    <div className={`h-full bg-card rounded-[2rem] border p-8 flex flex-col items-center justify-center text-center
                      ${member.highlight ? "border-primary/40 bg-primary/5" : "border-border hover:border-primary/30"}
                      transition-colors duration-300`}
                    >
                      <div className={`w-24 h-24 rounded-full mb-5 flex items-center justify-center text-3xl font-serif font-bold
                        ${member.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                        {member.initials}
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-semibold text-sm">{member.role}</p>
                    </div>
                  }
                  back={
                    <div className={`h-full bg-card rounded-[2rem] border p-8 flex flex-col items-center justify-center text-center
                      ${member.highlight ? "border-primary bg-primary text-primary-foreground" : "border-primary/40 bg-foreground text-background"}
                      transition-colors`}
                    >
                      <h3 className="text-xl font-serif font-bold mb-4">{member.name}</h3>
                      <p className={`text-sm leading-relaxed mb-6 ${member.highlight ? "text-primary-foreground/85" : "text-background/75"}`}>
                        {member.bio}
                      </p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-colors
                          ${member.highlight
                            ? "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                            : "border-background/30 text-background hover:bg-background hover:text-foreground"
                          }`}
                      >
                        <Linkedin size={14} /> Connect on LinkedIn
                      </a>
                    </div>
                  }
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Open Positions */}
          <ScrollReveal className="mb-10">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex-1 h-px bg-border" />
              <h2 className="text-2xl font-serif font-bold text-center whitespace-nowrap">We're Hiring</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">
              Open to high schoolers, college students, and anyone passionate about education equity. No experience required — just commitment.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {openRoles.map((role, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="h-full bg-card border border-dashed border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Plus size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
                      Open Role
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-2">{role.role}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2} className="text-center">
            <p className="text-muted-foreground mb-4">Interested in any of these roles?</p>
            <Button asChild className="rounded-full px-8 h-12 font-semibold">
              <Link href="/apply">Apply to Join the Team</Link>
            </Button>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
