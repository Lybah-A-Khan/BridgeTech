import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Apply() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Received",
        description: "Thank you for your interest! We'll be in touch soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
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
                Whether you want to learn, mentor, or volunteer, there's a place for you at BridgeTech. Apply today and help us bridge the gap.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="font-serif font-bold text-xl mb-2">Students & Learners</h3>
                  <p className="text-muted-foreground text-sm">All our programs are 100% free. No prior experience required. Just bring your curiosity.</p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="font-serif font-bold text-xl mb-2">Mentors & Volunteers</h3>
                  <p className="text-muted-foreground text-sm">Share your knowledge. We're always looking for passionate individuals to help run workshops and mentor students.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="bg-card p-8 rounded-[2rem] border border-border shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="Jane Doe" className="bg-background" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required placeholder="jane@example.com" className="bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">I am interested in...</Label>
                  <Select required>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Becoming a Student</SelectItem>
                      <SelectItem value="volunteer">Volunteering / Mentoring</SelectItem>
                      <SelectItem value="partner">School Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Age Group</Label>
                  <Select required>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="elem">Grades 3-6</SelectItem>
                      <SelectItem value="middle">Grades 7-8</SelectItem>
                      <SelectItem value="high">Grades 9-12</SelectItem>
                      <SelectItem value="adult">Adult</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us a bit about yourself or why you'd like to join..."
                    className="min-h-[120px] bg-background"
                  />
                </div>

                <Button type="submit" className="w-full h-12 rounded-full text-base" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
