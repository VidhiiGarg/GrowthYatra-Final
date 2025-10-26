import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-poppins font-bold text-2xl mb-4 bg-gradient-primary bg-clip-text text-transparent">
              GrowthYatra
            </h3>
            <p className="text-muted-foreground mb-4">
              Transforming businesses through strategic digital marketing and proven growth strategies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">SEO Optimization</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Website Development</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Email Marketing</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Google Ads</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Social Media Marketing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Our Work</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Case Studies</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">hello@growthyatra.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} GrowthYatra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
