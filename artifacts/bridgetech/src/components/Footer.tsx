import { Link } from "wouter";
import { Linkedin, Instagram } from "lucide-react";
import logoPath from "@assets/BridgeTech_1777764239711.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 inline-flex">
              <img
                src={logoPath}
                alt="BridgeTech logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-primary">BridgeTech</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-2 leading-relaxed">
              Bridging the gap in computer science education for underserved communities. Based in the Bay Area — open to expanding wherever the need is.
            </p>
            <p className="text-muted-foreground/70 text-sm mb-6 max-w-sm">
              Programs start at $20–50. No student is turned away for financial need.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/lybah-a-khan" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-footer-linkedin">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/bridgetechofficial" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-footer-instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Organization</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/mission" className="text-muted-foreground hover:text-primary transition-colors">Mission & Vision</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Our Programs</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Connect</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/apply" className="text-muted-foreground hover:text-primary transition-colors">Apply Now</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog & Updates</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BridgeTech. All rights reserved.</p>
          <p>Pending 501(c)(3) Nonprofit Status · Est. 2024 · Bay Area, CA · Open to new chapters nationwide</p>
        </div>
      </div>
    </footer>
  );
}
