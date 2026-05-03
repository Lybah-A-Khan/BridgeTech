import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterText } from "@/components/TypewriterText";
import { MouseParallax } from "@/components/MouseParallax";
import { LaptopMockup } from "@/components/LaptopMockup";
import { Marquee } from "@/components/Marquee";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, Code2, Users, Building2, GraduationCap } from "lucide-react";
import { fireConfetti } from "@/lib/confetti";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { target: 150, suffix: "+", label: "Students Impacted", icon: Users },
  { target: 3, suffix: "+", label: "Community Centers", icon: Building2 },
  { target: 4, suffix: "", label: "Active Programs", icon: Code2 },
  { target: 50, prefix: "up to $", suffix: "", label: "Affordable Pricing", icon: GraduationCap },
];

function StatItem({ target, suffix, prefix, label, icon: Icon, delay }: typeof stats[0] & { delay: number }) {
  const { count, ref } = useCountUp(target);
  return (
    <ScrollReveal delay={delay} className="text-center">
      <div className="mx-auto w-12 h-12 mb-4 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
        <Icon size={24} className="text-primary-foreground" />
      </div>
      <h3
        ref={ref as React.RefObject<HTMLHeadingElement>}
        className="text-4xl md:text-5xl font-serif font-bold mb-2"
      >
        {prefix ?? ""}{count}{suffix}
      </h3>
      <p className="text-primary-foreground/80 font-medium">{label}</p>
    </ScrollReveal>
  );
}

export default function Home() {
  const [, navigate] = useLocation();

  const handleJoinClick = () => {
    fireConfetti(0.35, 0.55);
    setTimeout(() => navigate("/apply"), 350);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background min-h-[90vh] flex items-center">
        <MouseParallax strength={18} className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <MouseParallax strength={10} className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-8 font-medium">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                Est. 2024 · Connecting Generations Through Technology
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-4 tracking-tight">
                Computer <span className="text-primary italic">Science</span> for Everyone.
              </h1>
              <p className="text-lg text-primary font-medium mb-3 font-mono">
                Currently teaching:{" "}
                <TypewriterText
                  phrases={["HTML & CSS", "Python", "Java (coming soon)", "AI literacy"]}
                  className="text-foreground"
                />
              </p>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                Based in the Bay Area and serving underserved communities across Northern California — with chapters open to launch wherever the need exists. Real programs, real kids, affordable access — because coding shouldn't be a privilege.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-base h-14 bg-primary hover:bg-primary/90 cursor-pointer"
                  onClick={handleJoinClick}
                  data-testid="button-hero-join"
                >
                  Join Us <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base h-14 border-border hover:bg-muted">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="hidden lg:flex items-center justify-center">
              <LaptopMockup />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-2xl mb-14">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              What We <span className="text-primary italic">Teach</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Curriculum designed for every stage — from a 3rd grader building their first webpage to a high schooler writing Python applications.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { grade: "Grades 3–6", lang: "HTML, CSS & JS", desc: "Build real webpages from scratch using the foundational languages of the web.", badge: "Active", badgeClass: "bg-green-500/10 text-green-600" },
              { grade: "Grades 7–12", lang: "Python", desc: "From algorithms to projects — a full Python curriculum for middle and high schoolers.", badge: "Active", badgeClass: "bg-green-500/10 text-green-600" },
              { grade: "All Grades", lang: "Java", desc: "Object-oriented programming fundamentals. Our next cohort launches soon.", badge: "Coming Soon", badgeClass: "bg-primary/10 text-primary" },
              { grade: "Elementary–HS", lang: "AI Crash Course", desc: "How AI works, what it means for the future, and how to build with it — level-adjusted per age group.", badge: "In Development", badgeClass: "bg-secondary/10 text-secondary-foreground" },
            ].map((prog, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-4 ${prog.badgeClass}`}>
                    {prog.badge}
                  </div>
                  <p className="text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wider">{prog.grade}</p>
                  <h3 className="text-xl font-serif font-bold mb-3">{prog.lang}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{prog.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3} className="mt-10 flex justify-center">
            <Button asChild variant="outline" className="rounded-full px-8 h-12">
              <Link href="/projects">View All Programs</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-2xl mb-14">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-6 font-medium">
              Real Families. Real Impact.
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              What Happens <span className="text-primary italic">After</span> Class.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <ScrollReveal delay={0}>
              <div className="h-full bg-card border border-border rounded-2xl p-8 flex flex-col hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl font-serif text-primary/20 leading-none mb-4 select-none">"</div>
                <blockquote className="text-foreground leading-relaxed text-[15px] flex-1 italic mb-6">
                  He used Google Teachable Machine in his innovation project for the FLL Challenge robotics competition and won an award. He would not have achieved that without learning from you.
                </blockquote>
                <div>
                  <p className="font-semibold text-sm">Saleh's Mom</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Python Course · Bay Area</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="h-full bg-card border border-border rounded-2xl p-8 flex flex-col hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl font-serif text-primary/20 leading-none mb-4 select-none">"</div>
                <blockquote className="text-foreground leading-relaxed text-[15px] flex-1 italic mb-6">
                  I was scared it was a scam — I'd never seen a program this good for this price. My child had been in a program that cost hundreds and barely learned anything. BridgeTech was completely different.
                </blockquote>
                <div>
                  <p className="font-semibold text-sm">A Parent</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Web Dev Program · Bay Area</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Marquee — bottom of page */}
      <Marquee />

      {/* Newsletter */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-3xl mx-auto text-center bg-muted rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-border">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--primary)_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Stay in the Loop</h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-xl mx-auto">
                Subscribe for updates on new cohorts, workshops, partnerships, and our journey to 501(c)(3) status.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); fireConfetti(0.5, 0.7); alert("You're in! We'll keep you updated."); }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-1 h-12 px-6 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <Button type="submit" size="lg" className="h-12 rounded-full px-8">
                  Subscribe
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
