import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We build lasting partnerships based on trust and results."
  },
  {
    icon: Target,
    title: "Strategic Approach",
    description: "Data-driven strategies tailored to your unique business goals and target audience."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering quality that exceeds expectations."
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Dedicated to driving measurable growth and maximizing your return on investment."
  }
];

const About = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-white">
              About GrowthYatra
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              We're a team of passionate digital marketing experts committed to transforming 
              businesses through innovative strategies and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 animate-fade-in">
              <h2 className="font-bold text-3xl md:text-4xl mb-6">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Founded with a vision to democratize digital marketing, GrowthYatra has grown from a 
                small startup to a trusted partner for businesses worldwide. Our name "Yatra" means 
                journey in Sanskrit, reflecting our commitment to being with you every step of the way.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that every business, regardless of size, deserves access to world-class 
                marketing strategies. Our team combines creative thinking with analytical precision to 
                deliver campaigns that not only look great but drive real business results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center animate-fade-in">
                <div className="font-bold text-4xl text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="font-bold text-4xl text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="font-bold text-4xl text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="font-bold text-4xl text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-6">
              Join Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're always looking for talented individuals who share our passion for digital marketing 
              and helping businesses grow. If you're ready to make an impact, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
