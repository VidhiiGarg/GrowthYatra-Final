import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Globe, Mail, MousePointerClick, Share2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search engine rankings with our comprehensive SEO strategies. We optimize your website for maximum visibility and organic traffic growth.",
    features: [
      "Keyword Research & Analysis",
      "On-Page & Technical SEO",
      "Link Building Strategy",
      "Performance Tracking"
    ],
    color: "from-primary to-secondary"
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Create stunning, responsive websites that convert visitors into customers. Modern design meets powerful functionality.",
    features: [
      "Custom Web Design",
      "Responsive Development",
      "E-commerce Solutions",
      "CMS Integration"
    ],
    color: "from-secondary to-accent"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Engage your audience with targeted email campaigns that drive conversions and build lasting customer relationships.",
    features: [
      "Campaign Strategy",
      "Email Automation",
      "List Management",
      "Analytics & Reporting"
    ],
    color: "from-accent to-primary"
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    description: "Maximize your ROI with expertly managed Google Ads campaigns that reach your target audience at the right time.",
    features: [
      "Campaign Setup & Management",
      "Keyword Optimization",
      "Ad Copy Creation",
      "Conversion Tracking"
    ],
    color: "from-primary to-accent"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence across all major social platforms with strategic content and community engagement.",
    features: [
      "Content Strategy",
      "Community Management",
      "Paid Social Advertising",
      "Influencer Partnerships"
    ],
    color: "from-secondary to-primary"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-white">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Comprehensive digital marketing solutions designed to accelerate your business growth 
              and maximize your online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-2xl mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss which services are right for your business goals
            </p>
            <Button size="lg" className="shadow-md">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
