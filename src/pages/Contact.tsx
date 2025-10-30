import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, Sparkles, MessageCircle, Zap, User, Rocket, TrendingUp, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabaseClient"; // Import from your supabase config file

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@growthyatra.com",
    subdetails: "We'll respond within 24 hours",
    gradient: "from-blue-500 to-cyan-500",
    animation: "group-hover:rotate-6"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 98765 43210",
    subdetails: "Mon-Fri from 9am to 6pm",
    gradient: "from-green-500 to-emerald-500",
    animation: "group-hover:-rotate-6"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Mumbai, India",
    subdetails: "Schedule an appointment",
    gradient: "from-orange-500 to-amber-500",
    animation: "group-hover:translate-y-2"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon-Fri: 9am - 6pm",
    subdetails: "Weekends by appointment",
    gradient: "from-purple-500 to-violet-500",
    animation: "group-hover:scale-110"
  }
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeField, setActiveField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });
    
    try {
      // Get form data
      const formData = new FormData(e.target as HTMLFormElement);
      const formValues = {
        first_name: formData.get('firstName') as string,
        last_name: formData.get('lastName') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string || null,
        service: formData.get('service') as string || null,
        message: formData.get('message') as string,
      };

      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([formValues]);

      if (error) {
        throw error;
      }

      // Success message
      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
      });

      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }

    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Oops! Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/40 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 rounded-full blur-3xl opacity-40 animate-float-slow"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-indigo-200/50 to-purple-200/50 rounded-full blur-3xl opacity-40 animate-float-slow delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-200/40 to-green-200/40 rounded-full blur-3xl opacity-30 animate-float-medium delay-4000"></div>
        
        {/* Floating Particles */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300/70 rounded-full opacity-70 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="pt-28 pb-20 px-4 relative overflow-hidden bg-slate-900">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          {/* Main Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
          
          {/* Animated Gradient Orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float-slow delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          
          {/* Floating Particles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${6 + Math.random() * 8}s`
              }}
            />
          ))}
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              
              {/* Enhanced Badge with Glow */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 mb-8 border border-white/20 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-105 hover:bg-white/15 group cursor-pointer relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse group-hover:animate-spin" />
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="text-white/95 text-sm font-semibold tracking-wide relative">
                  Let's Create Digital Excellence
                </span>
                <Zap className="h-4 w-4 text-cyan-400 animate-bounce" />
                
                {/* Shimmer Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>

              {/* Enhanced Main Heading */}
              <div className="space-y-4 mb-8">
                <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl tracking-tight">
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x pb-2">
                    Contact
                  </span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent animate-gradient-x delay-1000">
                    Growth
                  </span>
                </h1>
              </div>

              {/* Enhanced Subtitle Card */}
              <div className="relative group mb-12">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-40 group-hover:opacity-60"></div>
                
                {/* Main Card */}
                <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-500 relative z-10 overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.8)_1px,transparent_0)] bg-[length:20px_20px]"></div>
                  </div>
                  
                  <p className="text-xl text-white/90 leading-relaxed relative z-10">
                    Ready to accelerate your growth? Get in touch with us today and let's start 
                    <span className="font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> your digital transformation journey</span>. 
                    We're excited to bring your vision to life!
                  </p>
                  
                  {/* Floating Icons */}
                  <MessageCircle className="absolute -top-2 -left-2 h-8 w-8 text-cyan-400/40 animate-float-slow backdrop-blur-sm" />
                  <Rocket className="absolute -bottom-2 -right-2 h-8 w-8 text-purple-400/40 animate-float-medium backdrop-blur-sm" />
                  <TrendingUp className="absolute top-4 -right-3 h-6 w-6 text-blue-400/30 animate-float-slow delay-1000" />
                </div>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-2xl px-5 py-3 border border-white/15 hover:border-white/25 transition-all duration-300 hover:scale-105 group">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-2 border-blue-500 shadow-lg group-hover:scale-110 transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 100}ms` }}></div>
                    ))}
                  </div>
                  <span className="text-white/90 text-sm font-medium">Trusted by 50+ Brands</span>
                </div>
                
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-2xl px-5 py-3 border border-white/15 hover:border-white/25 transition-all duration-300 hover:scale-105 group">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  <span className="text-white/90 text-sm font-medium">5.0 Rating</span>
                </div>

                {/* New Trust Indicator */}
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-2xl px-5 py-3 border border-white/15 hover:border-white/25 transition-all duration-300 hover:scale-105 group">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-white/90 text-sm font-medium">24h Response</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Start Conversation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Enhanced Contact Form */}
            <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="relative group">
                {/* Form Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-80 transform group-hover:scale-105"></div>
                
                <Card className="border-white/30 bg-white/95 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] rounded-3xl overflow-hidden border">
                  <CardContent className="p-8 relative">
                    {/* Form Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-110">
                          <Send className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 group-hover:opacity-30 blur-md transition-all duration-300"></div>
                      </div>
                      <div>
                        <h2 className="font-bold text-3xl text-gray-800">Start Your Journey</h2>
                        <p className="text-gray-600 text-sm mt-1">We typically respond within 2-4 hours</p>
                      </div>
                    </div>
                    
                    {/* Success/Error Message */}
                    {submitMessage.text && (
                      <div className={`mb-6 p-4 rounded-xl border ${
                        submitMessage.type === 'success' 
                          ? 'bg-green-50 border-green-200 text-green-800' 
                          : 'bg-red-50 border-red-200 text-red-800'
                      }`}>
                        {submitMessage.text}
                      </div>
                    )}
                    
                    {/* Enhanced Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="group">
                          <label htmlFor="firstName" className="block text-sm font-semibold mb-3 text-gray-700 transition-all duration-300 group-hover:text-blue-600">
                            First Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 transition-all duration-300 group-hover:text-blue-500" />
                            <Input 
                              id="firstName"
                              name="firstName"
                              placeholder="John" 
                              required
                              className="w-full pl-10 transition-all duration-300 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white/80 group-hover:bg-blue-50/50 rounded-xl py-3"
                              onFocus={() => setActiveField('firstName')}
                              onBlur={() => setActiveField('')}
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="group">
                          <label htmlFor="lastName" className="block text-sm font-semibold mb-3 text-gray-700 transition-all duration-300 group-hover:text-blue-600">
                            Last Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 transition-all duration-300 group-hover:text-blue-500" />
                            <Input 
                              id="lastName"
                              name="lastName"
                              placeholder="Doe" 
                              required
                              className="w-full pl-10 transition-all duration-300 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white/80 group-hover:bg-blue-50/50 rounded-xl py-3"
                              onFocus={() => setActiveField('lastName')}
                              onBlur={() => setActiveField('')}
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-700 transition-all duration-300 group-hover:text-blue-600">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 transition-all duration-300 group-hover:text-blue-500" />
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com" 
                            required
                            className="w-full pl-10 transition-all duration-300 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white/80 group-hover:bg-blue-50/50 rounded-xl py-3"
                            onFocus={() => setActiveField('email')}
                            onBlur={() => setActiveField('')}
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="group">
                        <label htmlFor="phone" className="block text-sm font-semibold mb-3 text-gray-700 transition-all duration-300 group-hover:text-blue-600">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 transition-all duration-300 group-hover:text-blue-500" />
                          <Input 
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 98765 43210" 
                            className="w-full pl-10 transition-all duration-300 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white/80 group-hover:bg-blue-50/50 rounded-xl py-3"
                            onFocus={() => setActiveField('phone')}
                            onBlur={() => setActiveField('')}
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="group">
                        <label htmlFor="service" className="block text-sm font-semibold mb-3 text-gray-700 transition-all duration-300 group-hover:text-blue-600">
                          Service Interested In
                        </label>
                        <Input 
                          id="service"
                          name="service"
                          placeholder="SEO, Web Development, Digital Marketing, etc." 
                          className="w-full transition-all duration-300 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white/80 group-hover:bg-blue-50/50 rounded-xl py-3"
                          onFocus={() => setActiveField('service')}
                          onBlur={() => setActiveField('')}
                        />
                      </div>
                      
                      <div className="group">
                        <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-700 transition-all duration-300 group-hover:text-blue-600">
                          Your Message *
                        </label>
                        <Textarea 
                          id="message"
                          name="message"
                          placeholder="Tell us about your project, goals, and timeline..." 
                          required
                          className="w-full min-h-32 transition-all duration-300 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white/80 group-hover:bg-blue-50/50 rounded-xl py-3 resize-none"
                          onFocus={() => setActiveField('message')}
                          onBlur={() => setActiveField('')}
                        />
                      </div>
                      
                      {/* Enhanced Submit Button */}
                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group shadow-lg"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                              Send Message
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Enhanced Contact Info */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              
              {/* Introduction Card */}
              <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <MessageCircle className="h-10 w-10 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <div>
                    <h2 className="font-bold text-3xl mb-4 text-gray-800">Get in Touch</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Have questions or ready to start your project? We're here to help! 
                      Reach out to us through any of the channels below, and our team will 
                      get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Contact Cards */}
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className={`transform transition-all duration-700 hover:scale-105 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: `${(index + 1) * 0.2}s`,
                    }}
                  >
                    <Card className="border-white/30 bg-white/90 backdrop-blur-lg hover:bg-white hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden rounded-2xl">
                      <CardContent className="p-6 relative">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        
                        <div className="flex items-start gap-4 relative z-10">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg ${info.animation}`}>
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1 text-gray-800 group-hover:text-gray-900 transition-colors">
                              {info.title}
                            </h3>
                            <p className="text-gray-700 font-medium mb-1 group-hover:text-gray-800 transition-colors">
                              {info.details}
                            </p>
                            <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                              {info.subdetails}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Enhanced Stats Card */}
              <Card className="border-white/30 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <h3 className="font-bold text-2xl text-gray-800 mb-6">Our Track Record</h3>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="group">
                      <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                        <span className="text-2xl font-bold text-blue-600">24h</span>
                      </div>
                      <p className="text-gray-600 text-sm font-medium">Response Time</p>
                    </div>
                    <div className="group">
                      <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/20 transition-all duration-300 group-hover:scale-110">
                        <span className="text-2xl font-bold text-green-600">50+</span>
                      </div>
                      <p className="text-gray-600 text-sm font-medium">Projects Done</p>
                    </div>
                    <div className="group">
                      <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-110">
                        <span className="text-2xl font-bold text-purple-600">100%</span>
                      </div>
                      <p className="text-gray-600 text-sm font-medium">Satisfaction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.03); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.02); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-8px) rotate(45deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 9s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 8s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom selection color */
        ::selection {
          background: rgba(59, 130, 246, 0.2);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #6366f1);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #4f46e5);
        }
        `}
      </style>
    </div>
  );
};

export default Contact;
