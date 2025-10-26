import { Card, CardContent } from "@/components/ui/card";
import { Search, Globe, Mail, MousePointerClick, Share2 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your visibility and rank higher on search engines with our proven SEO strategies and techniques.",
    color: "from-primary to-secondary"
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Create stunning, responsive websites that convert visitors into customers with modern design.",
    color: "from-secondary to-accent"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Engage your audience with targeted email campaigns that drive conversions and loyalty.",
    color: "from-accent to-primary"
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    description: "Maximize ROI with expertly managed Google Ads campaigns targeting the right audience.",
    color: "from-primary to-accent"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence across all major social platforms with strategic content.",
    color: "from-secondary to-primary"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to accelerate your business growth
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50 animate-fade-in-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
