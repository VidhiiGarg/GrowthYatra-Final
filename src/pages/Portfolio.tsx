import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "E-Commerce Fashion Brand",
    category: "SEO & Social Media",
    description: "Increased organic traffic by 300% and social engagement by 450% within 6 months",
    results: ["300% Traffic Growth", "450% Engagement", "200% ROI"],
    color: "from-primary to-secondary"
  },
  {
    title: "SaaS Tech Startup",
    category: "Google Ads & Web Development",
    description: "Generated 500+ qualified leads through targeted PPC campaigns and conversion-optimized website",
    results: ["500+ Leads", "45% Conversion Rate", "3x Revenue Growth"],
    color: "from-secondary to-accent"
  },
  {
    title: "Healthcare Provider",
    category: "Email Marketing & SEO",
    description: "Built automated email campaigns that generated $2M in revenue and improved local SEO rankings",
    results: ["$2M Revenue", "#1 Local Rankings", "65% Open Rate"],
    color: "from-accent to-primary"
  },
  {
    title: "Real Estate Agency",
    category: "Website Development & Social Media",
    description: "Modern website redesign with integrated property listings and social media campaigns",
    results: ["250% More Inquiries", "40% Faster Load Time", "5-Star Reviews"],
    color: "from-primary to-accent"
  },
  {
    title: "Restaurant Chain",
    category: "Social Media & Email Marketing",
    description: "Multi-location social media strategy with loyalty program integration",
    results: ["180% Followers Growth", "50% Repeat Customers", "$500K Revenue"],
    color: "from-secondary to-primary"
  },
  {
    title: "Financial Services",
    category: "Google Ads & SEO",
    description: "Comprehensive digital strategy targeting high-value keywords and conversion optimization",
    results: ["400% Lead Increase", "35% Lower CPA", "Top 3 Rankings"],
    color: "from-accent to-secondary"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-white">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Explore our success stories and see how we've helped businesses achieve 
              remarkable growth through strategic digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`h-40 rounded-lg bg-gradient-to-br ${project.color} mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <ArrowUpRight className="h-12 w-12 text-white opacity-80" />
                  </div>
                  
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>
                  
                  <h3 className="font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    {project.results.map((result) => (
                      <div 
                        key={result}
                        className="flex items-center gap-2 text-sm font-medium text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {result}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-6">
              Ready to Write Your <span className="bg-gradient-primary bg-clip-text text-transparent">Success Story?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's create a case study worth celebrating. Contact us today to discuss your project.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
