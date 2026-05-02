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
              From High School to <span className="text-primary italic">Global Impact</span>.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-primary">
            <p className="text-xl text-muted-foreground leading-relaxed">
              BridgeTech started with a simple observation: the digital divide is real, and it's holding brilliant minds back. Founded by high school student Lybah A. Khan, BridgeTech was born out of a desire to make computer science education accessible to everyone, regardless of their background or zip code.
            </p>

            <h3 className="text-3xl mt-12 mb-6">The Founding Story</h3>
            <p>
              While navigating her own journey in computer science, Lybah realized that many of her peers, especially those from underrepresented communities, lacked access to basic coding resources, mentorship, and encouragement. What started as a small initiative to teach local kids the basics of Python and Scratch quickly gained momentum.
            </p>
            <p>
              It became clear that the need extended far beyond a single school or neighborhood. There were entire communities—from young students eager to build their first game, to adults and immigrants needing fundamental digital literacy—who were being left behind by the rapid pace of technological advancement.
            </p>

            <div className="my-16 p-8 bg-muted rounded-[2rem] border border-border relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <blockquote className="text-2xl font-serif italic text-foreground mb-4 border-l-4 border-primary pl-6">
                  "Technology should be a bridge, not a barrier. Our goal isn't just to teach coding; it's to provide the tools for economic mobility and creative expression."
                </blockquote>
                <p className="text-muted-foreground font-medium ml-6">— Lybah A. Khan, Founder</p>
              </div>
            </div>

            <h3 className="text-3xl mt-12 mb-6">The Path to Nonprofit Status</h3>
            <p>
              Today, BridgeTech is in the process of becoming a registered 501(c)(3) nonprofit organization in California. This transition represents our commitment to scaling our impact, securing vital resources, and ensuring the long-term sustainability of our free programs. 
            </p>
            <p>
              As we grow, our focus remains unwavering: providing high-quality, completely free technology education and digital literacy support to those who need it most.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
