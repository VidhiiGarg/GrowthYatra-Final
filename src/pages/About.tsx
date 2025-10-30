import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp, Rocket, Globe, Zap, Sparkles, Brain, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Brain,
    title: "Data Intelligence",
    description: "AI-powered insights that transform raw data into actionable growth strategies."
  },
  {
    icon: Rocket,
    title: "Rocket Growth",
    description: "Accelerate your business with strategies designed for exponential growth curves."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Local expertise with global perspective to scale your brand worldwide."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Pioneering new approaches in digital marketing that set industry standards."
  }
];

const FloatingElement = ({ type, delay, size, position }: { type: string; delay: string; size: string; position: { x: number; y: number } }) => {
  const elements = {
    cube: "bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg",
    sphere: "bg-gradient-to-br from-purple-400 to-pink-500 rounded-full",
    pyramid: "bg-gradient-to-br from-orange-400 to-red-500",
    torus: "bg-gradient-to-br from-green-400 to-teal-500 rounded-full border-2 border-white/20"
  };

  return (
    <div
      className={`absolute ${elements[type as keyof typeof elements]} animate-float-3d opacity-40`}
      style={{
        width: size,
        height: size,
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: delay,
        transformStyle: 'preserve-3d',
      }}
    />
  );
};

const About = () => {
  const floatingElements = [
    { type: "cube", delay: "0s", size: "w-16 h-16", position: { x: 10, y: 20 } },
    { type: "sphere", delay: "2s", size: "w-24 h-24", position: { x: 85, y: 30 } },
    { type: "pyramid", delay: "4s", size: "w-20 h-20", position: { x: 15, y: 70 } },
    { type: "torus", delay: "1s", size: "w-32 h-32", position: { x: 75, y: 60 } },
    { type: "cube", delay: "3s", size: "w-12 h-12", position: { x: 90, y: 80 } },
  ];

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden relative">
      <Navbar />
      
      {/* 3D Floating Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {floatingElements.map((element, index) => (
          <FloatingElement
            key={index}
            type={element.type}
            delay={element.delay}
            size={element.size}
            position={element.position}
          />
        ))}
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, #3b82f6 1px, transparent 1px),
                linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>

        {/* Pulse Orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow opacity-30" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow opacity-30" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-28 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in-up">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-blue-200/50 shadow-lg mb-12 animate-float">
              <Sparkles className="h-5 w-5 text-cyan-500 animate-spin-slow" />
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Pioneering Digital Growth Since 2018
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Main Heading with 3D Effect */}
            <div className="relative mb-12">
              <h1 className="font-black text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight">
                <span className="block bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  GROWTH
                </span>
                <span className="block bg-gradient-to-br from-cyan-600 to-blue-700 bg-clip-text text-transparent mt-4">
                  YATRA
                </span>
              </h1>
              
              {/* 3D Shadow Effect */}
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 -z-10">
                <div className="font-black text-6xl md:text-8xl lg:text-9xl opacity-5">
                  <span className="block">GROWTH</span>
                  <span className="block mt-4">YATRA</span>
                </div>
              </div>
            </div>

            {/* Animated Description */}
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
                Where <span className="font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">data meets creativity</span> to build 
                the next generation of digital experiences
              </p>
            </div>

            {/* Interactive Stats Bar */}
            <div className="flex justify-center items-center gap-8 mt-16 flex-wrap">
              {[
                { value: "642%", label: "Avg. ROI" },
                { value: "3.2x", label: "Growth Rate" },
                { value: "24/7", label: "AI Monitoring" },
                { value: "∞", label: "Possibilities" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center animate-fade-in-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="font-black text-3xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with Interactive Timeline */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Timeline */}
            <div className="space-y-8 animate-fade-in-left">
              <h2 className="font-black text-5xl mb-12 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Evolution</span>
              </h2>
              
              {[
                { year: "2018", title: "The Beginning", desc: "Started with a vision to revolutionize digital marketing" },
                { year: "2020", title: "AI Integration", desc: "Integrated machine learning into our core strategies" },
                { year: "2022", title: "Global Reach", desc: "Expanded to serve clients across 3 continents" },
                { year: "2024", title: "The Future", desc: "Pioneering next-gen marketing technologies" }
              ].map((item, index) => (
                <div 
                  key={item.year}
                  className="flex gap-6 group cursor-pointer transform hover:translate-x-4 transition-transform duration-500"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-500 opacity-50 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="font-black text-2xl text-gray-900 mb-2">{item.year}</div>
                    <div className="font-bold text-lg text-cyan-600 mb-2">{item.title}</div>
                    <div className="text-gray-600 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Stats Grid */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
              {[
                { number: "500+", label: "Brands Transformed", icon: Zap, color: "from-cyan-500 to-blue-500" },
                { number: "2.4B+", label: "Impressions Generated", icon: Globe, color: "from-purple-500 to-pink-500" },
                { number: "98%", label: "Client Satisfaction", icon: Award, color: "from-green-500 to-teal-500" },
                { number: "∞", label: "Innovation Drive", icon: Rocket, color: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="group relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-black text-3xl text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Holographic Effect */}
      <section className="py-24 px-4 bg-gradient-to-br from-white/40 to-blue-50/30 backdrop-blur-sm relative">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 0)`,
            backgroundSize: '60px 60px',
            animation: 'patternShift 20s linear infinite'
          }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-cyan-600 uppercase tracking-wider">Our Philosophy</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Beyond
              </span>
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mx-4">
                Digital
              </span>
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Marketing
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Holographic Card */}
                <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/90 shadow-2xl transform perspective-1000 group-hover:rotate-y-12 transition-transform duration-700 h-full">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md"></div>
                  <div className="absolute inset-[2px] rounded-3xl bg-white/90 backdrop-blur-md"></div>
                  
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-5 transition-all duration-500 shadow-lg`}>
                        <value.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-ping-slow">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="font-black text-2xl mb-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Interactive Elements */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Floating CTA Card */}
          <div className="relative bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-md rounded-4xl p-16 border border-white/80 shadow-2xl transform hover:shadow-3xl transition-all duration-500">
            {/* Background Pattern */}
            <div className="absolute inset-0 rounded-4xl overflow-hidden">
              <div className="absolute -inset-10 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `linear-gradient(45deg, #3b82f6 25%, transparent 25%), linear-gradient(-45deg, #3b82f6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #3b82f6 75%), linear-gradient(-45deg, transparent 75%, #3b82f6 75%)`,
                  backgroundSize: '40px 40px',
                  animation: 'patternMove 15s linear infinite'
                }}></div>
              </div>
            </div>

            <h2 className="font-black text-5xl md:text-6xl mb-8">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Ready to
              </span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mt-4">
                Redefine Growth?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
              Join forward-thinking brands that have transformed their digital destiny with our cutting-edge strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Begin Your Journey
                  <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-12 py-5 border-2 border-gray-300 font-bold rounded-2xl hover:border-cyan-400 hover:bg-cyan-50/50 transition-all duration-300">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:from-cyan-700 group-hover:to-blue-700">
                  Explore Our Work
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;