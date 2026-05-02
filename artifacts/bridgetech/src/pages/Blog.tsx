import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    {
      date: "March 2025",
      title: "BridgeTech's First Workshop: What We Learned",
      excerpt: "Our inaugural web development workshop brought together 30 young students to write their first lines of HTML and CSS. Watching kids build and publish their first real webpage — something they can show their parents — was exactly why we started this. Here's what worked, what surprised us, and what we're building next.",
      category: "Event Update",
    },
    {
      date: "January 2025",
      title: "New Partnerships with Local Community Centers",
      excerpt: "We're officially partnering with 3+ community centers across California to bring BridgeTech programs directly to neighborhoods that need them most. These partnerships mean more consistent access, more students reached, and a stronger local foothold as we move toward nonprofit status.",
      category: "Partnership",
    },
    {
      date: "December 2024",
      title: "Applications Open for Spring 2025 Cohort",
      excerpt: "Spring cohort spots are open for our web development and Python tracks. Whether you're in 3rd grade or 12th — or you're an adult building digital skills from scratch — there's a seat for you. Programs are priced from $20–50, and no one is turned away for financial need.",
      category: "Announcement",
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <ScrollReveal className="mb-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Blog & <span className="text-primary italic">Updates</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Follow our journey, read about our impact, and stay updated on upcoming opportunities.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05} className="mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm text-muted-foreground">
              More posts from Lybah's LinkedIn coming soon.
              <a
                href="https://www.linkedin.com/in/lybah-a-khan"
                target="_blank"
                rel="noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                See LinkedIn →
              </a>
            </div>
          </ScrollReveal>

          <div className="relative border-l border-border ml-4 md:ml-8 space-y-12 pb-12">
            {posts.map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="relative pl-8 md:pl-12 group">
                <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-primary left-[-8.5px] top-1.5 transition-colors group-hover:bg-primary" />

                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">{post.category}</span>
                  <time className="text-sm text-muted-foreground">{post.date}</time>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {post.excerpt}
                </p>

                <button
                  className="text-sm font-medium border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors"
                  data-testid={`button-read-more-${i}`}
                >
                  Read Full Update
                </button>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2} className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">Have something to share with the BridgeTech community?</p>
            <Button asChild variant="outline" className="rounded-full px-8 h-12">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
