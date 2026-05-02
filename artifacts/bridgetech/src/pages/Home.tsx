import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code2, Users, BookOpen, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background min-h-[90vh] flex items-center">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-8 font-medium">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                Empowering the next generation
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
                Computer <span className="text-primary italic">Science</span> for Everyone.
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                Bridging the gap in technology education for underserved communities. We believe coding is a fundamental right, not a privilege.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8 text-base h-14 bg-primary hover:bg-primary/90">
                  <Link href="/apply" className="flex items-center gap-2">
                    Join Us <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base h-14 border-border hover:bg-muted">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} className="relative hidden lg:block h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[3rem] overflow-hidden border border-border/50">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                
                {/* Abstract geometric composition */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full mix-blend-multiply opacity-80 blur-xl animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-secondary rounded-full mix-blend-multiply opacity-80 blur-xl" style={{ animationDelay: '1s', animationDuration: '3s' }} />
                <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-accent rounded-full mix-blend-multiply opacity-80 blur-xl" style={{ animationDelay: '2s', animationDuration: '4s' }} />
                
                <div className="absolute inset-8 border border-white/20 rounded-[2rem] bg-white/10 backdrop-blur-sm p-8 flex flex-col justify-end shadow-2xl">
                  <div className="w-full bg-card/80 backdrop-blur rounded-xl p-6 border border-border/50 shadow-lg">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-destructive/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="space-y-3 font-mono text-sm text-muted-foreground">
                      <p><span className="text-primary">const</span> <span className="text-foreground">mission</span> = <span className="text-secondary">"bridge the gap"</span>;</p>
                      <p><span className="text-primary">function</span> <span className="text-foreground">empower</span>(student) {'{'}</p>
                      <p className="pl-4">return student.<span className="text-foreground">learn</span>(<span className="text-secondary">"code"</span>);</p>
                      <p>{'}'}</p>
                      <p className="pt-2 text-primary font-bold animate-pulse">_</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "200+", label: "Students Impacted", icon: Users },
              { number: "15+", label: "Workshops Hosted", icon: BookOpen },
              { number: "5+", label: "Partner Schools", icon: GraduationCap },
              { number: "100%", label: "Free Programs", icon: Code2 },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="text-center">
                <div className="mx-auto w-12 h-12 mb-4 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <stat.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-2">{stat.number}</h3>
                <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal className="max-w-3xl mx-auto text-center bg-muted rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-border">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--primary)_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Stay in the Loop</h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-xl mx-auto">
                Subscribe to our newsletter for updates on new workshops, partnerships, and our journey to 501(c)(3) status.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}>
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
