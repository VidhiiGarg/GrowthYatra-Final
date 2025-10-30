import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  Globe,
  Mail,
  MousePointerClick,
  Share2,
  ArrowRight,
  Star,
  BarChart3,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Boost your visibility and rank higher on search engines with our proven SEO strategies.",
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Create stunning, responsive websites that convert visitors into customers.",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Engage your audience with targeted email campaigns that drive conversions.",
    color: "from-green-500 to-teal-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    description:
      "Maximize ROI with expertly managed Google Ads campaigns targeting right audience.",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build your brand presence across all major social platforms with strategic content.",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
  },
  {
    icon: BarChart3,
    title: "Strategy & Analytics",
    description:
      "Data-driven insights and comprehensive strategies to optimize your marketing efforts.",
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
  },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Digital Marketing{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions tailored to accelerate your
            business growth and maximize your online potential.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              >
                <div className="absolute inset-[1px] rounded-lg bg-card"></div>
              </div>

              <CardContent className="relative p-8">
                {/* Icon */}
                <div
                  className={`relative mb-6 ${service.bgColor} rounded-2xl p-3 w-16 h-16 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-10`}
                  ></div>
                  <service.icon
                    className={`h-8 w-8 bg-gradient-to-br ${service.color} bg-clip-text text-transparent relative z-10`}
                  />
                </div>

                {/* Content */}
                <h3 className="font-poppins font-bold text-2xl mb-4 text-foreground group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Button
                  variant="ghost"
                  className="group/btn w-full justify-between px-0 hover:bg-transparent font-semibold text-foreground/60 hover:text-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>

                {/* Floating Dot */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} animate-ping`}
                  ></div>
                </div>
              </CardContent>

              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
              />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm">
            <div className="text-left">
              <h3 className="font-poppins font-semibold text-2xl mb-2">
                Ready to grow your business?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss how we can help you achieve your goals
              </p>
            </div>

            {/* ✅ Linked Get Started Button */}
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
