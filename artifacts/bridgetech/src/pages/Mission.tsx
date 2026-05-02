import { ScrollReveal } from "@/components/ScrollReveal";
import { Globe2, HeartHandshake, Lightbulb } from "lucide-react";

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

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <ScrollReveal delay={0.1} className="bg-card p-10 rounded-[2rem] border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <HeartHandshake size={24} />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To bridge the gap in computer science education by providing completely free, high-quality coding and digital literacy programs to underserved students and adults. We aim to empower communities with the skills necessary for the modern digital economy.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="bg-card p-10 rounded-[2rem] border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <Globe2 size={24} />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A globally accessible technology landscape where every individual—regardless of age, background, or geographic location—has the opportunity to learn, create, and thrive in the digital world.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3} className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-muted mx-auto flex items-center justify-center mb-8 border border-border">
              <Lightbulb size={32} className="text-primary" />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-6">Core Values</h3>
            <div className="grid sm:grid-cols-3 gap-8 text-left mt-12">
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Equity</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Education is a right, not a privilege. We remove financial and structural barriers to learning.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Community</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">We learn better together. Our programs foster collaboration, mentorship, and shared success.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Innovation</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">We adapt our curriculum to meet real-world needs, preparing students for tomorrow's challenges.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
