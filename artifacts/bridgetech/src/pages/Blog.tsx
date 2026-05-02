import { ScrollReveal } from "@/components/ScrollReveal";

export default function Blog() {
  const posts = [
    {
      date: "March 2025",
      title: "BridgeTech's First Workshop: What We Learned",
      excerpt: "Our inaugural 'Code for Kids' workshop was a massive success. Seeing 30 young students write their first lines of code in Scratch was an incredible experience. Here are our key takeaways and what we're planning next.",
      category: "Event Update"
    },
    {
      date: "January 2025",
      title: "New Partnership with Local Schools",
      excerpt: "We are thrilled to announce that we are officially partnering with three local middle schools to integrate our Tech Bridge Academy curriculum into their after-school programs starting this spring.",
      category: "Partnership"
    },
    {
      date: "December 2024",
      title: "Apply for Summer 2025 Cohort",
      excerpt: "Applications are now open for our intensive Summer 2025 coding bootcamps. Whether you are a beginner or looking to advance your skills, we have a track for you. All programs remain 100% free.",
      category: "Announcement"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <ScrollReveal className="mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Blog & <span className="text-primary italic">Updates</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Follow our journey, read about our impact, and stay updated on upcoming opportunities.
            </p>
          </ScrollReveal>

          <div className="relative border-l border-border ml-4 md:ml-8 space-y-12 pb-12">
            {posts.map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="relative pl-8 md:pl-12 group">
                <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-primary left-[-8.5px] top-1.5 transition-colors group-hover:bg-primary" />
                
                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">{post.category}</span>
                  <time className="text-sm text-muted-foreground">{post.date}</time>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {post.excerpt}
                </p>
                
                <button className="text-sm font-medium border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors" data-testid={`button-read-more-${i}`}>
                  Read Full Update
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
