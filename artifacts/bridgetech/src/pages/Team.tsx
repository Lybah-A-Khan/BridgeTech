import { ScrollReveal } from "@/components/ScrollReveal";
import { Linkedin } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Lybah A. Khan",
      role: "Founder & Executive Director",
      bio: "High school student, CS advocate, and community builder passionate about closing the digital divide and making technology accessible to all.",
      linkedin: "https://www.linkedin.com/in/lybah-a-khan",
      initials: "LK",
      primary: true
    },
    {
      name: "Open Position",
      role: "Program Coordinator",
      bio: "We are looking for dedicated individuals to help organize workshops, manage curriculum delivery, and support our student cohorts.",
      linkedin: null,
      initials: "?",
      primary: false
    },
    {
      name: "Open Position",
      role: "Outreach Lead",
      bio: "Help us connect with local schools, community centers, and potential partners to expand the reach of our educational programs.",
      linkedin: null,
      initials: "?",
      primary: false
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <ScrollReveal className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              The <span className="text-primary italic">Team</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Driven by a shared belief in educational equity and the power of technology to transform lives.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className={member.primary ? "md:col-span-3 lg:col-span-1" : ""}>
                <div className={`h-full bg-card rounded-[2rem] border ${member.primary ? "border-primary/30 shadow-md bg-primary/5" : "border-border shadow-sm"} p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1`}>
                  <div className={`w-32 h-32 rounded-full mb-6 flex items-center justify-center text-4xl font-serif font-bold ${member.primary ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {member.initials}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {member.bio}
                  </p>
                  {member.linkedin ? (
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin size={16} /> Connect
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground/50 italic">Hiring Soon</span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
