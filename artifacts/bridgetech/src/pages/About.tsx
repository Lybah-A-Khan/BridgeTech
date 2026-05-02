import { ScrollReveal } from "@/components/ScrollReveal";

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-8 font-medium">
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              From High School to <span className="text-primary italic">Real Impact</span>.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-primary">
            <p className="text-xl text-muted-foreground leading-relaxed">
              BridgeTech started with a simple observation: the digital divide is real, and it's holding brilliant minds back. Founded in 2024 by high school student Lybah A. Khan in the Bay Area, BridgeTech was built to make computer science education accessible — regardless of background, zip code, or budget. We're rooted in Northern California and open to expanding wherever a community is ready to build a chapter.
            </p>

            <h3 className="text-3xl mt-12 mb-6">The Founding Story</h3>
            <p>
              While navigating her own path in computer science, Lybah noticed that many students around her — especially those from underrepresented communities — had no real access to coding resources, mentorship, or encouragement. She started small: teaching a handful of local kids the basics of programming. It grew fast.
            </p>
            <p>
              What began as a single initiative became something bigger. Today, BridgeTech has served over <strong>150 students</strong>, partnered with <strong>3+ community centers</strong> across California, and built curriculum that meets learners where they actually are — from 3rd grade HTML projects to high school Python applications.
            </p>

            <div className="my-16 p-8 bg-muted rounded-[2rem] border border-border relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <blockquote className="text-2xl font-serif italic text-foreground mb-4 border-l-4 border-primary pl-6">
                  "Technology should be a bridge, not a barrier. Our goal isn't just to teach coding — it's to open doors that were previously closed."
                </blockquote>
                <p className="text-muted-foreground font-medium ml-6">— Lybah A. Khan, Founder</p>
              </div>
            </div>

            <h3 className="text-3xl mt-12 mb-6">Impact in Action</h3>
            <p>
              One of our middle school students, Saleh, arrived nervous about coding — unsure if it was really "for him." He completed the full program, loved it so much he started a coding club at his own school, and then used AI concepts we introduced in our Python course — specifically Google Teachable Machine — to build an innovation project for a FIRST Lego League (FLL) robotics competition. He won an award. His mom reached out: <em>"He would not have achieved that without learning from you."</em>
            </p>
            <p>
              That's what BridgeTech is for. Not just teaching syntax — opening doors.
            </p>

            <h3 className="text-3xl mt-12 mb-6">Affordable by Design</h3>
            <p>
              BridgeTech programs are priced between $20 and $50 — intentionally. We believe quality CS education shouldn't require a wealthy zip code. No student is ever turned away for financial need. If cost is a barrier, we'll find a way to make it work.
            </p>

            <h3 className="text-3xl mt-12 mb-6">The Path to Nonprofit Status</h3>
            <p>
              BridgeTech is currently in the process of becoming a registered 501(c)(3) nonprofit in California. This step reflects our commitment to long-term sustainability, expanded reach, and deeper partnerships with schools and organizations who share our mission.
            </p>
            <p>
              As we grow, the focus stays the same: real programs, real students, and an unwavering belief that the next generation of builders deserves a seat at the table.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
