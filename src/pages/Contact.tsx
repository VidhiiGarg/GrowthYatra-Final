import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@growthyatra.com",
    subdetails: "We'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 98765 43210",
    subdetails: "Mon-Fri from 9am to 6pm"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Mumbai, India",
    subdetails: "Schedule an appointment"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon-Fri: 9am - 6pm",
    subdetails: "Weekends by appointment"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Ready to accelerate your growth? Get in touch with us today and let's start 
              your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <h2 className="font-bold text-2xl mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <Input 
                          id="firstName"
                          placeholder="John" 
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <Input 
                          id="lastName"
                          placeholder="Doe" 
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="john@example.com" 
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210" 
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service Interested In
                      </label>
                      <Input 
                        id="service"
                        placeholder="SEO, Web Development, etc." 
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us about your project..." 
                        className="w-full min-h-32"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div>
                <h2 className="font-bold text-2xl mb-4">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions or ready to start your project? We're here to help! 
                  Reach out to us through any of the channels below, and our team will 
                  get back to you as soon as possible.
                </p>
              </div>

              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card"
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          <p className="text-foreground font-medium mb-1">{info.details}</p>
                          <p className="text-muted-foreground text-sm">{info.subdetails}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
