import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Users, Award, Clock, Star, Zap, Target, ChartBar } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Fashion Brand",
    category: "Website Design & SEO",
    description:
      "A modern online fashion store offering a seamless shopping experience, optimized for conversions and mobile users.",
    results: ["300% Traffic Growth", "450% Engagement", "200% ROI"],
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "SaaS Tech Startup",
    category: "Web Development & PPC",
    description:
      "A B2B SaaS platform built to streamline team workflows and analytics with optimized ad campaigns and UX design.",
    results: ["500+ Qualified Leads", "45% Conversion Rate", "3x Revenue Growth"],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Digital Marketing Agency Website",
    category: "UI/UX Design & Content Strategy",
    description:
      "A full-scale portfolio website showcasing services, case studies, and client success stories for a marketing agency.",
    results: ["Brand Credibility Boost", "Optimized Lead Funnel", "High Retention"],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Food Delivery App",
    category: "App UI & Web Integration",
    description:
      "A responsive interface for a food delivery brand with real-time order tracking, payment gateway, and partner dashboard.",
    results: ["40% Faster Orders", "100K+ Users", "Increased Repeat Customers"],
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Photographer Portfolio",
    category: "Creative Web Design",
    description:
      "A visually rich portfolio site for a professional photographer, showcasing projects through a minimal, immersive gallery.",
    results: ["Improved Bookings", "Enhanced Visual Impact", "Fast Loading Time"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Healthcare Provider",
    category: "Email Marketing & SEO",
    description:
      "Built automated email campaigns and improved local search visibility to drive patient engagement.",
    results: ["$2M Revenue", "#1 Local Rankings", "65% Open Rate"],
    image:
      "https://images.unsplash.com/photo-1588774069270-4a72b4a3c3f4?auto=format&fit=crop&w=800&q=80",
  },
];

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Floating elements data
  const floatingElements = [
    { icon: Star, delay: 0, duration: 4, top: "20%", left: "5%", color: "from-yellow-400/20 to-orange-500/20" },
    { icon: Zap, delay: 1, duration: 5, top: "15%", right: "10%", color: "from-blue-400/20 to-cyan-500/20" },
    { icon: Target, delay: 2, duration: 6, bottom: "25%", left: "8%", color: "from-green-400/20 to-emerald-500/20" },
    { icon: ChartBar, delay: 3, duration: 4, bottom: "20%", right: "7%", color: "from-purple-400/20 to-violet-500/20" },
    { icon: Users, delay: 4, duration: 5, top: "30%", left: "12%", color: "from-pink-400/20 to-rose-500/20" },
    { icon: TrendingUp, delay: 5, duration: 6, top: "25%", right: "15%", color: "from-indigo-400/20 to-blue-500/20" },
  ];

  return (
    <div className="min-h-screen font-poppins bg-background text-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <Navbar />

      {/* Enhanced Hero Section with Digital Marketing Background */}
      <section className="relative pt-32 pb-20 px-4 text-white overflow-hidden">
        {/* Background Image with Digital Marketing Focus */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
            alt="Digital Marketing Analytics Dashboard"
            className="w-full h-full object-cover"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95"></div>
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
        </div>

        {/* Floating Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute w-16 h-16 rounded-2xl bg-gradient-to-br ${element.color} backdrop-blur-sm border border-white/10 flex items-center justify-center pointer-events-none`}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              bottom: element.bottom,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <element.icon className="w-6 h-6 text-white/60" />
          </motion.div>
        ))}

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <motion.div 
          className="container mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Featured Work</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 bg-gradient-to-b from-white to-white/90 bg-clip-text text-transparent"
            >
              Our Portfolio
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              Here's a glimpse of our latest work across industries — from e-commerce and SaaS startups to creative portfolios and marketing platforms.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="rounded-full px-8 py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50">
                  View Our Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base md:text-lg font-semibold border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Enhanced Projects Grid with Floating Background Elements */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Floating Elements for Projects Section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating circles */}
          <motion.div
            className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-xl"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Small floating dots */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-cyan-500/20"
              style={{
                top: `${20 + i * 12}%`,
                left: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-semibold">
              Featured Projects
            </Badge>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Success <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Each project tells a unique story of collaboration, innovation, and measurable results.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group relative h-full hover:shadow-2xl transition-all duration-500 border border-border/50 overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay Badge */}
                    <Badge className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white border-0 text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6 relative z-20">
                    <h3 className="font-semibold text-lg md:text-xl mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="space-y-2.5">
                      {project.results.map((result) => (
                        <div
                          key={result}
                          className="flex items-center gap-3 text-xs md:text-sm font-medium text-foreground group/item"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0" />
                          <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Action Button */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Button size="sm" className="rounded-full w-9 h-9 p-0 bg-gradient-to-r from-cyan-500 to-blue-600">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section with Floating Elements */}
      <section className="relative py-20 md:py-24 px-4 bg-gradient-to-br from-muted/50 to-muted/20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>

        {/* Floating Elements for CTA Section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <motion.div 
          className="container mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-500/20 mb-8"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex space-x-1">
                <motion.div 
                  className="w-2 h-2 bg-cyan-500 rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-cyan-500 rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.1 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-cyan-500 rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
              </div>
              <span className="text-sm font-semibold">Let's Build Together</span>
            </motion.div>

            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-8">
              Ready to Write Your{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Success Story?
              </span>
            </h2>
            
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's create something extraordinary together. Reach out to discuss your next big project and join our family of success stories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="rounded-full px-8 py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50">
                  Start Your Project
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base md:text-lg font-semibold border-2 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300">
                  View Case Studies
                </Button>
              </motion.div>
            </div>

            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-12 md:mt-16 pt-8 border-t border-border/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: Clock, text: "24h Response" },
                { icon: Award, text: "5-Star Rated" },
                { icon: TrendingUp, text: "Award Winning" },
                { icon: Users, text: "50+ Happy Clients" }
              ].map((badge) => (
                <motion.div 
                  key={badge.text} 
                  className="flex items-center gap-2 text-sm text-muted-foreground font-medium"
                  whileHover={{ scale: 1.05, color: "rgb(6, 182, 212)" }}
                >
                  <badge.icon className="w-4 h-4" />
                  {badge.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;