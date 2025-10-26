import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Data-Driven Strategy",
    description: "Every decision backed by analytics and real-time insights for maximum impact"
  },
  {
    title: "Experienced Team",
    description: "Industry veterans with proven track records across diverse markets"
  },
  {
    title: "Transparent Reporting",
    description: "Clear, detailed reports showing exactly how your campaigns perform"
  },
  {
    title: "Scalable Solutions",
    description: "Flexible strategies that grow and adapt with your business needs"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance ensuring your campaigns never miss a beat"
  },
  {
    title: "Proven Results",
    description: "Consistent delivery of measurable ROI and business growth"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Why Choose 
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                GrowthYatra?
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Partner with a team that's committed to your success. We combine creativity, 
              technology, and proven strategies to deliver exceptional results that matter to your bottom line.
            </p>
            <div className="space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {benefits.slice(3).map((benefit, index) => (
              <div 
                key={benefit.title}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
