import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Who can apply for BridgeTech programs?",
      answer: "Our programs are open to students in grades 3–12 as well as adults. We specifically focus on serving individuals from underrepresented communities and those who might not otherwise have access to computer science education."
    },
    {
      question: "Is it really 100% free?",
      answer: "Yes! All our workshops, curriculums, and mentorship programs are completely free for participants. We are working toward our 501(c)(3) status to secure funding that ensures we can keep it that way."
    },
    {
      question: "Do I need prior coding experience?",
      answer: "Not at all. We have beginner tracks specifically designed for students who have never written a line of code in their lives. We also offer intermediate tracks for those looking to build upon existing knowledge."
    },
    {
      question: "Can I volunteer as a mentor?",
      answer: "Absolutely! If you have experience in programming, web development, or general digital literacy, we would love to have you. Visit our Apply page and select 'Volunteering / Mentoring' as your role of interest."
    },
    {
      question: "Where are workshops held?",
      answer: "We partner with local schools and community centers in California to host in-person workshops. We are also expanding our hybrid and fully remote offerings to reach a broader audience."
    },
    {
      question: "How do I stay updated?",
      answer: "The best way to stay updated is to subscribe to our newsletter on the homepage or follow our upcoming Instagram page. We regularly post about new cohorts and events."
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <ScrollReveal className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Questions <span className="text-primary italic">Answered</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about our programs, eligibility, and how to get involved.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border py-2">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary hover:no-underline transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
