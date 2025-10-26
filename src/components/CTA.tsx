import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-white">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Let's discuss how we can transform your digital presence and drive measurable results. 
            Get a free consultation and custom strategy for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="group bg-white text-primary hover:bg-white/90 shadow-glow"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
