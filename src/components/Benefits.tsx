import { CheckCircle2, ArrowRight, Star, Zap, Target, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    title: "Data-Driven Strategy",
    description: "Every decision backed by analytics and real-time insights for maximum impact",
    icon: "📊",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Experienced Team",
    description: "Industry veterans with proven track records across diverse markets",
    icon: "👥",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Transparent Reporting",
    description: "Clear, detailed reports showing exactly how your campaigns perform",
    icon: "📈",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Scalable Solutions",
    description: "Flexible strategies that grow and adapt with your business needs",
    icon: "🚀",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance ensuring your campaigns never miss a beat",
    icon: "🛡️",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    title: "Proven Results",
    description: "Consistent delivery of measurable ROI and business growth",
    icon: "🏆",
    gradient: "from-yellow-500 to-amber-500"
  }
];

const Benefits = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/20 rounded-full blur-3xl animate-float-medium"></div>
      <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-gradient-to-r from-green-200/20 to-emerald-200/10 rounded-full blur-3xl animate-float-fast"></div>
      <div className="absolute bottom-20 right-32 w-64 h-64 bg-gradient-to-r from-orange-200/20 to-red-200/10 rounded-full blur-3xl animate-float-slow"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Animated Icons */}
      <div className="absolute top-1/4 left-1/6 animate-bounce-slow">
        <Zap className="h-8 w-8 text-blue-400/40" />
      </div>
      <div className="absolute top-1/3 right-1/5 animate-pulse delay-1000">
        <Target className="h-10 w-10 text-purple-400/30" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-bounce-medium delay-500">
        <TrendingUp className="h-12 w-12 text-green-400/20" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-spin-slow">
        <Star className="h-6 w-6 text-orange-400/30" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/5 text-primary font-semibold mb-6 hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
            <CheckCircle2 className="h-5 w-5" />
            Why we're different
            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
          </div>
          <h2 className="font-poppins font-bold text-5xl md:text-7xl mb-8 bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Why Choose
            <span className="block bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent mt-2">
              GrowthYatra?
            </span>
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Partner with a team that's committed to your success. We combine creativity, 
            technology, and proven strategies to deliver exceptional results that matter to your bottom line.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/60 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="flex items-start gap-6 relative z-10">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white text-2xl shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="font-bold text-gray-900 text-2xl group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {benefit.title}
                        </h3>
                        <ArrowRight className="h-5 w-5 text-primary transform group-hover:translate-x-2 transition-transform opacity-0 group-hover:opacity-100" />
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg font-light">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-12 p-10 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                </div>
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gray-900 mb-2">250+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                </div>
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gray-900 mb-2">5x</div>
                  <div className="text-sm text-gray-600 font-medium">Average ROI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-6">
            {benefits.slice(3).map((benefit, index) => (
              <div 
                key={benefit.title}
                className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/60 hover:border-secondary/50 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 relative overflow-hidden"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index + 3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                  hoveredCard === index + 3 ? 'opacity-5' : ''
                }`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white text-2xl shadow-lg shadow-secondary/25 transform group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="font-bold text-gray-900 text-2xl group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {benefit.title}
                        </h3>
                        <ArrowRight className="h-5 w-5 text-secondary transform group-hover:translate-x-2 transition-transform opacity-0 group-hover:opacity-100" />
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg font-light">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Card with Link */}
            <div
              onClick={() => navigate("/contact")}
              className="p-10 rounded-3xl bg-gradient-to-r from-primary to-secondary text-white shadow-2xl shadow-primary/30 transform hover:-translate-y-2 hover:shadow-3xl hover:shadow-primary/40 transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <h3 className="font-bold text-2xl mb-3">Ready to Grow?</h3>
                  <p className="text-white/80 text-lg font-light">Start your journey with us today</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="h-8 w-8 text-white transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
