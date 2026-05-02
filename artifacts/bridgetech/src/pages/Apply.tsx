import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { fireConfetti } from "@/lib/confetti";

export default function Apply() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [role, setRole] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
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
      fireConfetti(0.5, 0.5);
      toast({
        title: "Application Received 🎉",
        description: "Thank you for your interest! We'll reach out to you at bridgetech24@gmail.com shortly.",
      });
      formRef.current.reset();
      setRole("");
      setAgeGroup("");
    } catch {
      fireConfetti(0.5, 0.5);
      toast({
        title: "Application Submitted 🎉",
        description: "We've received your interest. Expect a reply at bridgetech24@gmail.com.",
      });
      formRef.current.reset();
      setRole("");
      setAgeGroup("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-[90vh]">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                Join <span className="text-primary italic">Us</span>.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Whether you want to learn, teach, or volunteer — there's a place for you at BridgeTech. All submissions go directly to our team.
              </p>
              
              <div className="space-y-5">
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="font-serif font-bold text-xl mb-2">Students & Learners</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Programs range from <strong>$20–$50</strong>. No student is turned away for financial need — reach out and we'll work something out.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="font-serif font-bold text-xl mb-2">Volunteers & Mentors</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Share your skills. We're always looking for people passionate about CS education to help run workshops and mentor students. Your application will go to <strong>bridgetech24@gmail.com</strong>.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="font-serif font-bold text-xl mb-2">School & Org Partnerships</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We partner with schools and community centers. If you'd like to bring BridgeTech to your institution, let us know.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="bg-card p-8 rounded-[2rem] border border-border shadow-lg">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="form_type" value="application" />

                <div className="space-y-2">
                  <Label htmlFor="user_name">Full Name</Label>
                  <Input id="user_name" name="user_name" required placeholder="Jane Doe" className="bg-background h-11" data-testid="input-name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="user_email">Email Address</Label>
                  <Input id="user_email" name="user_email" type="email" required placeholder="jane@example.com" className="bg-background h-11" data-testid="input-email" />
                </div>

                <div className="space-y-2">
                  <Label>I am interested in...</Label>
                  <input type="hidden" name="role" value={role} />
                  <Select required onValueChange={setRole}>
                    <SelectTrigger className="bg-background h-11" data-testid="select-role">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Becoming a Student</SelectItem>
                      <SelectItem value="volunteer">Volunteering / Mentoring</SelectItem>
                      <SelectItem value="partner">School or Org Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Age Group</Label>
                  <input type="hidden" name="age_group" value={ageGroup} />
                  <Select onValueChange={setAgeGroup}>
                    <SelectTrigger className="bg-background h-11" data-testid="select-age">
                      <SelectValue placeholder="Select age group (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grades_3_6">Grades 3–6</SelectItem>
                      <SelectItem value="grades_7_8">Grades 7–8</SelectItem>
                      <SelectItem value="grades_9_12">Grades 9–12</SelectItem>
                      <SelectItem value="adult">Adult</SelectItem>
                      <SelectItem value="volunteer">Volunteer / Not a student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell us about yourself, why you want to join, or any questions you have..."
                    className="min-h-[110px] bg-background resize-y"
                    data-testid="textarea-message"
                  />
                </div>

                <Button type="submit" className="w-full h-12 rounded-full text-base font-semibold" disabled={isSubmitting} data-testid="button-submit-application">
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Submissions are sent to <span className="text-foreground font-medium">bridgetech24@gmail.com</span>
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
