
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Palette, Smartphone, Search, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React & TypeScript", "Node.js Backend", "Database Design", "API Integration"],
      price: "Starting at $2,999"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers.",
      features: ["Wireframing", "Prototyping", "User Testing", "Brand Identity"],
      price: "Starting at $1,999"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      features: ["React Native", "iOS Development", "Android Development", "App Store Optimization"],
      price: "Starting at $4,999"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your site.",
      features: ["Technical SEO", "Content Optimization", "Link Building", "Analytics Setup"],
      price: "Starting at $999"
    },
    {
      icon: Shield,
      title: "Security Audits",
      description: "Comprehensive security assessments to protect your digital assets.",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Recommendations", "Compliance Review"],
      price: "Starting at $1,499"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your website and improve user experience with our optimization services.",
      features: ["Core Web Vitals", "CDN Setup", "Image Optimization", "Caching Strategy"],
      price: "Starting at $799"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to launch, we provide comprehensive digital solutions that help your business thrive in the digital landscape.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-2xl font-bold text-gray-900 mb-4">
                      {service.price}
                    </div>
                    <Button className="w-full">
                      Get Started
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
