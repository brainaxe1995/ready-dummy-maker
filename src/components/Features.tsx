
import { Zap, Shield, Smartphone, Globe, Code, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with modern technologies for blazing fast load times."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee for peace of mind."
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfect experience across all devices with responsive design principles."
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Worldwide content delivery network for optimal performance everywhere."
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Well-structured, maintainable code following industry best practices."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 support from our team of experienced developers and designers."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make us the preferred choice for thousands of developers and businesses worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
