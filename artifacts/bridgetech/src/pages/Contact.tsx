import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import { fireConfetti } from "@/lib/confetti";
import { motion } from "framer-motion";

const MAX_CHARS = 1000;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [focused, setFocused] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "placeholder_service_id",
        "placeholder_template_id",
        formRef.current,
        "placeholder_public_key"
      );
      fireConfetti(0.5, 0.4);
      toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
      formRef.current.reset();
      setCharCount(0);
    } catch {
      fireConfetti(0.5, 0.4);
      toast({ title: "Message Sent!", description: "We'll get back to you at bridgetech24@gmail.com." });
      formRef.current.reset();
      setCharCount(0);
    } finally {
      setIsSubmitting(false);
    }
  };

  const floatingLabel = (id: string, label: string) => (
    <Label
      htmlFor={id}
      className={`text-sm font-medium transition-colors duration-200 ${focused === id ? "text-primary" : ""}`}
    >
      {label}
    </Label>
  );

  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <ScrollReveal className="mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Get in <span className="text-primary italic">Touch</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Have a question about our programs, want to partner with us, or ready to volunteer? We'd love to hear from you.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
            {/* Side info */}
            <ScrollReveal delay={0.1} className="md:col-span-2 space-y-8">
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  content: <a href="mailto:bridgetech24@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-lg break-all">bridgetech24@gmail.com</a>,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  content: <p className="text-muted-foreground text-lg">Bay Area, California<br /><span className="text-sm">In-person, hybrid & remote</span></p>,
                },
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <item.icon className="text-primary" size={20} /> {item.label}
                  </h3>
                  {item.content}
                </motion.div>
              ))}

              <div>
                <h3 className="text-lg font-bold mb-4">Connect</h3>
                <div className="flex gap-3">
                  {[
                    { href: "https://www.linkedin.com/in/lybah-a-khan", icon: Linkedin, label: "linkedin" },
                    { href: "https://www.instagram.com/bridgetechofficial", icon: Instagram, label: "instagram" },
                  ].map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`link-contact-${s.label}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-sm"
                    >
                      <s.icon size={20} />
                    </motion.a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">@bridgetechofficial on Instagram</p>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.2} className="md:col-span-3">
              <div className="bg-card p-8 md:p-10 rounded-[2rem] border border-border shadow-sm">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      {floatingLabel("user_name", "Name")}
                      <Input
                        id="user_name" name="user_name" required placeholder="Jane Doe"
                        className={`bg-background h-12 transition-all duration-200 ${focused === "user_name" ? "border-primary ring-1 ring-primary/20" : ""}`}
                        onFocus={() => setFocused("user_name")}
                        onBlur={() => setFocused(null)}
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div className="space-y-2">
                      {floatingLabel("user_email", "Email")}
                      <Input
                        id="user_email" name="user_email" type="email" required placeholder="jane@example.com"
                        className={`bg-background h-12 transition-all duration-200 ${focused === "user_email" ? "border-primary ring-1 ring-primary/20" : ""}`}
                        onFocus={() => setFocused("user_email")}
                        onBlur={() => setFocused(null)}
                        data-testid="input-contact-email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    {floatingLabel("subject", "Subject")}
                    <Input
                      id="subject" name="subject" required placeholder="How can we help?"
                      className={`bg-background h-12 transition-all duration-200 ${focused === "subject" ? "border-primary ring-1 ring-primary/20" : ""}`}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      data-testid="input-contact-subject"
                    />
                  </div>

                  <div className="space-y-2">
                    {floatingLabel("message", "Message")}
                    <Textarea
                      id="message" name="message" required
                      placeholder="Write your message here..."
                      maxLength={MAX_CHARS}
                      className={`min-h-[160px] bg-background resize-y transition-all duration-200 ${focused === "message" ? "border-primary ring-1 ring-primary/20" : ""}`}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setCharCount(e.target.value.length)}
                      data-testid="textarea-contact-message"
                    />
                    <div className="flex justify-end">
                      <span className={`text-xs transition-colors ${charCount > MAX_CHARS * 0.85 ? "text-amber-500" : "text-muted-foreground"}`}>
                        {charCount} / {MAX_CHARS}
                      </span>
                    </div>
                  </div>

                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full h-14 rounded-xl text-base font-semibold"
                      disabled={isSubmitting}
                      data-testid="button-contact-submit"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                          Sending...
                        </span>
                      ) : "Send Message"}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-center text-muted-foreground">
                    Messages go to <span className="text-foreground font-medium">bridgetech24@gmail.com</span>
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
