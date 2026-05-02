import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    try {
      // Using placeholders as requested - in a real app these would be environment variables
      await emailjs.sendForm(
        'placeholder_service_id',
        'placeholder_template_id',
        formRef.current,
        'placeholder_public_key'
      );
      
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Message Simulated",
        description: "EmailJS placeholders used. Form simulation successful.",
      });
      formRef.current.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <ScrollReveal className="mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Get in <span className="text-primary italic">Touch</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Have a question about our programs, interested in partnering, or want to support our mission? We'd love to hear from you.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
            <ScrollReveal delay={0.1} className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Mail className="text-primary" size={20} /> Email Us
                </h3>
                <a href="mailto:bridgetech24@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                  bridgetech24@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <MapPin className="text-primary" size={20} /> Location
                </h3>
                <p className="text-muted-foreground text-lg">
                  California, USA<br />
                  (Operating remote & hybrid workshops)
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Connect</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/lybah-a-khan" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
              
              <div className="pt-8">
                <Button variant="outline" className="w-full justify-center h-14 rounded-xl border-dashed border-2">
                  Download Media Kit (PDF)
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="md:col-span-3">
              <div className="bg-card p-8 md:p-10 rounded-[2rem] border border-border shadow-sm">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="user_name">Name</Label>
                      <Input id="user_name" name="user_name" required placeholder="Jane Doe" className="bg-background h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user_email">Email</Label>
                      <Input id="user_email" name="user_email" type="email" required placeholder="jane@example.com" className="bg-background h-12" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" required placeholder="How can we help?" className="bg-background h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      required
                      placeholder="Write your message here..."
                      className="min-h-[160px] bg-background resize-y"
                    />
                  </div>

                  <Button type="submit" className="w-full h-14 rounded-xl text-base font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
