import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Who can apply for BridgeTech programs?",
    answer: "Our programs are open to students in grades 3–12. We specifically focus on serving individuals from underrepresented communities and those who might not otherwise have access to CS education. Adults and parents looking to build digital literacy skills are also welcome — just reach out.",
  },
  {
    question: "How much do programs cost?",
    answer: "Programs are affordably priced between $20 and $50. We keep costs low intentionally — and no student is ever turned away for financial need. If cost is a barrier, reach out to us at bridgetech24@gmail.com and we'll work something out.",
  },
  {
    question: "What programs do you currently offer?",
    answer: "We currently offer Web Development (HTML, CSS & JS) for grades 3–6 and Python Programming for grades 7–12. Java Programming is launching soon, and we're developing a multi-level AI Crash Course for elementary, middle, and high school students. Follow us on Instagram @bridgetechofficial for updates.",
  },
  {
    question: "Do I need prior coding experience?",
    answer: "No experience required. Every course starts from the ground up. If you have some existing knowledge, we'll make sure you're placed in the right track.",
  },
  {
    question: "How can I volunteer or mentor?",
    answer: "Head to the Apply page, select 'Volunteering / Mentoring' as your role, and fill out the form. Submissions go directly to our team at bridgetech24@gmail.com. We're looking for folks with experience in programming, web development, or digital education.",
  },
  {
    question: "Where are workshops held?",
    answer: "We partner with 3+ community centers and schools in the Bay Area to host in-person workshops. We're also expanding into hybrid and remote formats to reach more students.",
  },
  {
    question: "How do I stay updated on new cohorts and events?",
    answer: "Subscribe to our newsletter on the homepage, or follow us on Instagram at @bridgetechofficial. We post about upcoming cohorts, workshops, and announcements regularly.",
  },
  {
    question: "Can I start a BridgeTech chapter in my city?",
    answer: "Yes — this is something we're actively building toward. If you're in a community that needs affordable CS education and you're ready to help lead it, reach out at bridgetech24@gmail.com. We're open to nationwide chapters.",
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

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

          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            className="w-full space-y-3"
          >
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <AccordionItem
                  value={`item-${i}`}
                  data-testid={`faq-item-${i}`}
                  className={`border rounded-2xl px-6 transition-all duration-300 overflow-hidden
                    ${openItem === `item-${i}`
                      ? "border-primary/40 bg-primary/5 shadow-sm"
                      : "border-border bg-card hover:border-primary/20"
                    }`}
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:text-primary hover:no-underline transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-0 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>

          <ScrollReveal delay={0.2} className="mt-12 p-8 bg-card rounded-[2rem] border border-border text-center">
            <p className="text-muted-foreground mb-4">Still have a question we didn't answer?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:bridgetech24@gmail.com">
                <Button variant="outline" className="rounded-full px-6">
                  Email Us
                </Button>
              </a>
              <Button asChild className="rounded-full px-6">
                <Link href="/contact">Contact Page</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
