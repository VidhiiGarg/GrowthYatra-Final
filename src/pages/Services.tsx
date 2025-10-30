import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Globe, Mail, MousePointerClick, Share2, ArrowRight, Sparkles, Target, Zap, Star, CheckCircle, Users, TrendingUp, Award, Clock, Play, Heart, Cloud, Rocket, Shield, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search engine rankings with our comprehensive SEO strategies.",
    features: [
      "Keyword Research & Analysis",
      "On-Page & Technical SEO",
      "Link Building Strategy",
      "Performance Tracking"
    ],
    color: "from-primary to-secondary",
    accent: "bg-primary/20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&auto=format", // Fixed SEO image
    stat: "↑ 245% Traffic Growth"
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Create stunning, responsive websites that convert visitors into customers.",
    features: [
      "Custom Web Design",
      "Responsive Development",
      "E-commerce Solutions",
      "CMS Integration"
    ],
    color: "from-secondary to-accent",
    accent: "bg-secondary/20",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=240&fit=crop&auto=format",
    stat: "⚡ 0.8s Load Time"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Engage your audience with targeted email campaigns that drive conversions.",
    features: [
      "Campaign Strategy",
      "Email Automation",
      "List Management",
      "Analytics & Reporting"
    ],
    color: "from-accent to-primary",
    accent: "bg-accent/20",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop&auto=format",
    stat: "📧 98% Deliverability"
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    description: "Maximize your ROI with expertly managed Google Ads campaigns.",
    features: [
      "Campaign Setup & Management",
      "Keyword Optimization",
      "Ad Copy Creation",
      "Conversion Tracking"
    ],
    color: "from-primary to-accent",
    accent: "bg-primary/20",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=240&fit=crop&auto=format",
    stat: "🎯 5x ROI Average"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence across all major social platforms.",
    features: [
      "Content Strategy",
      "Community Management",
      "Paid Social Advertising",
      "Influencer Partnerships"
    ],
    color: "from-secondary to-primary",
    accent: "bg-secondary/20",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=240&fit=crop&auto=format",
    stat: "📱 10M+ Reach"
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <Navbar />
      
      {/* Enhanced Dynamic Background */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        
        {/* Floating Gradient Orbs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-orbital" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-orbital delay-2000" />
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-orbital delay-4000" />
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-orbital delay-6000" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] animate-grid-flow" />
        
        {/* Floating Tech Icons */}
        <div className="absolute top-1/4 left-1/6 animate-float-slow">
          <Cloud className="h-8 w-8 text-primary/30" />
        </div>
        <div className="absolute top-1/2 right-1/5 animate-float-slow delay-1000">
          <Rocket className="h-6 w-6 text-secondary/30" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float-slow delay-2000">
          <Shield className="h-7 w-7 text-accent/30" />
        </div>
        <div className="absolute top-2/3 right-1/3 animate-float-slow delay-3000">
          <Cpu className="h-5 w-5 text-primary/30" />
        </div>

        {/* Connection Lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/6 w-px h-32 bg-gradient-to-b from-primary/20 to-transparent" />
          <div className="absolute top-1/2 right-1/5 w-px h-24 bg-gradient-to-b from-secondary/20 to-transparent" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-px bg-gradient-to-r from-accent/20 to-transparent" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 15}s`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary/20 rounded-lg rotate-45 animate-pulse-slow" />
        <div className="absolute bottom-40 right-32 w-3 h-3 bg-secondary/20 rounded-full animate-pulse-slow delay-1000" />
        <div className="absolute top-60 left-32 w-6 h-6 bg-accent/20 rounded-lg animate-pulse-slow delay-1500" />
      </div>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Hero Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-bounce-subtle backdrop-blur-sm group">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Premium Digital Solutions</span>
              <Star className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <h1 className="font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight animate-fade-in-up">
              Transform Your
              <span className="block bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-fade-in-up delay-200">
                Digital Presence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 animate-fade-in-up delay-400">
              Comprehensive digital marketing solutions designed to accelerate your business growth 
              and <span className="font-semibold text-primary animate-pulse">maximize your online presence</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
                <span className="relative z-10">Explore Services</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-primary/50 transition-all duration-300 group backdrop-blur-sm bg-white/80">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-12 animate-fade-in-up delay-800">
              {[
                { icon: Users, text: "500+ Happy Clients" },
                { icon: Award, text: "Award Winning" },
                { icon: Heart, text: "98% Satisfaction" }
              ].map((badge, index) => (
                <div key={badge.text} className="flex items-center gap-2 text-sm text-slate-500 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-slate-200">
                  <badge.icon className="h-4 w-4 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-6 h-6 rounded-full bg-primary/20 animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 animate-float delay-1000">
          <div className="w-4 h-4 rounded-full bg-secondary/20 animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float delay-500">
          <div className="w-8 h-8 rounded-full bg-accent/20 animate-pulse" />
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section ref={sectionRef} className="py-20 px-4 relative">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/60" />
        
        <div className="container relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 animate-fade-in-up">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <Sparkles className="h-6 w-6 text-primary animate-spin-slow" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <h2 className="font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent animate-fade-in-up">
              Our <span className="text-primary animate-pulse">Premium</span> Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Tailored solutions that drive results and propel your business forward in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`transform transition-all duration-500 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="group relative h-full bg-white/80 backdrop-blur-sm border border-slate-200/60 hover:border-primary/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Animated border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm group-hover:blur-0 -z-10" />
                  
                  {/* Service Image with Fixed Visibility */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&auto=format`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                    
                    {/* Stats Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-slate-700 flex items-center gap-1 shadow-sm">
                        <TrendingUp className="h-3 w-3 text-green-500" />
                        {service.stat}
                      </div>
                    </div>
                    
                    {/* Animated Icon */}
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-slow`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content Area */}
                  <CardContent className="p-6 relative bg-white">
                    {/* Floating dot */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" />
                    
                    <h3 className="font-poppins font-bold text-xl mb-3 text-slate-800 relative z-10">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-4 text-sm group-hover:text-slate-700 transition-all duration-300 relative z-10">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6 relative z-10">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={feature} 
                          className="flex items-center gap-2 text-xs text-slate-500 group-hover:text-slate-600 transition-all duration-300"
                          style={{ 
                            transitionDelay: `${featureIndex * 50}ms`,
                            transform: hoveredCard === index ? 'translateX(0)' : 'translateX(-5px)',
                            opacity: hoveredCard === index ? 1 : 0.8
                          }}
                        >
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full group/btn border border-slate-300 hover:border-primary hover:bg-primary/5 transition-all duration-300 text-sm relative overflow-hidden bg-white"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 font-medium text-slate-700 group-hover/btn:text-white transition-colors duration-300">
                        Discover More
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform duration-300 relative z-10 text-slate-700 group-hover/btn:text-white" />
                    </Button>
                  </CardContent>

                  {/* Background effects */}
                  <div className={`absolute inset-0 ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-lg`} />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        {/* Animated mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)] animate-pulse-slow" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-flex mb-6">
              <Zap className="h-20 w-20 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-20 animate-ping" />
            </div>
            
            <h2 className="font-bold text-4xl md:text-5xl mb-6 animate-fade-in-up">
              Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ignite Growth</span>?
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed animate-fade-in-up delay-200">
              Let's discuss which services are right for your business goals and create a custom strategy that delivers exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
              <Button size="lg" className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary relative overflow-hidden">
                <Target className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10 font-semibold">Schedule a Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-primary hover:bg-primary/5 transition-all duration-300 group bg-white/80 backdrop-blur-sm">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;