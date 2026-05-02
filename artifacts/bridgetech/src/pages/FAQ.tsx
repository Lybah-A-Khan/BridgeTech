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
      answer: "Our programs are open to students in grades 3–12 as well as adults. We specifically focus on serving individuals from underrepresented communities and those who might not otherwise have access to CS education. Adults and immigrants looking to build digital literacy skills are also welcome."
    },
    {
      question: "How much do programs cost?",
      answer: "Programs are affordably priced between $20 and $50. We keep costs low intentionally — and no student is ever turned away for financial need. If the cost is a barrier, reach out to us at bridgetech24@gmail.com and we'll work something out."
    },
    {
      question: "What programs do you currently offer?",
      answer: "We currently offer Web Development (HTML, CSS & JS) for grades 3–6 and Python Programming for grades 7–12. Java Programming is launching soon, and we are developing a multi-level AI Crash Course for elementary, middle, and high school students. Keep an eye on our blog and Instagram for updates."
    },
    {
      question: "Do I need prior coding experience?",
      answer: "No experience required. We have programs designed for complete beginners, and every course starts from the ground up. If you have some existing knowledge, we'll make sure you're placed in the right track."
    },
    {
      question: "How can I volunteer or mentor?",
      answer: "We'd love your help. Head to the Apply page, select 'Volunteering / Mentoring' as your role, and fill out the form. Your submission goes directly to our team at bridgetech24@gmail.com. We look for folks with experience in programming, web development, or digital education."
    },
    {
      question: "Where are workshops held?",
      answer: "We partner with 3+ local community centers and schools in California to host in-person workshops. We are also expanding into hybrid and remote formats to reach more students across the state."
    },
    {
      question: "How do I stay updated on new cohorts and events?",
      answer: "Subscribe to our newsletter on the homepage or follow us on Instagram at @bridgetechofficial. We post about upcoming cohorts, workshops, and announcements regularly."
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
              Everything you need to know about our programs, eligibility, pricing, and how to get involved.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border py-2" data-testid={`faq-item-${i}`}>
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

          <ScrollReveal delay={0.2} className="mt-16 p-8 bg-card rounded-[2rem] border border-border text-center">
            <p className="text-muted-foreground mb-2">Still have questions?</p>
            <a href="mailto:bridgetech24@gmail.com" className="text-primary font-semibold text-lg hover:underline transition-all">
              bridgetech24@gmail.com
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
