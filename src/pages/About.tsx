
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to empowering businesses with cutting-edge technology solutions."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Every decision we make puts our customers and their success at the center."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push boundaries and embrace new technologies to stay ahead."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Our Company
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're a passionate team of developers, designers, and innovators dedicated to creating 
                exceptional digital experiences that drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded in 2020, DummyApp started with a simple mission: to make web development 
                  more accessible and efficient for businesses of all sizes. What began as a small 
                  team of passionate developers has grown into a trusted platform serving thousands 
                  of clients worldwide.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we continue to innovate and push the boundaries of what's possible in web 
                  development, always keeping our customers' success at the heart of everything we do.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                  alt="Team collaboration"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
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

export default About;
