import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Code, MonitorSmartphone, Target } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Code for Kids",
      description: "An interactive introduction to coding for students in grades 3–6. We cover the basics of computational thinking using Scratch and transition into fundamental Python concepts.",
      impact: "80+ students reached",
      icon: Target,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Tech Bridge Academy",
      description: "A comprehensive curriculum for middle and high school students covering full-stack web development, algorithmic thinking, and project building.",
      impact: "60+ students enrolled",
      icon: Code,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Digital Literacy for Adults",
      description: "Specialized workshops tailored for immigrants and adults aiming to build foundational digital skills, from basic computer navigation to online safety.",
      impact: "40+ adults served",
      icon: MonitorSmartphone,
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      title: "Girls Who Code Circle",
      description: "A dedicated mentorship and learning space aimed at closing the gender gap in tech, offering female-focused support, community, and advanced CS concepts.",
      impact: "30+ participants",
      icon: Users,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-2xl mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Our <span className="text-primary italic">Projects</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real programs making real impact. From elementary students to adult learners, our curriculum is designed to meet communities where they are.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${project.bg} ${project.color}`}>
                      <project.icon size={24} />
                    </div>
                    <CardTitle className="text-2xl font-serif">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium text-foreground border border-border">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                      Impact: {project.impact}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
