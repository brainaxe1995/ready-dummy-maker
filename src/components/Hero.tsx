
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27 width=%2732%27 height=%2732%27 fill=%27none%27 stroke=%27rgb(148 163 184 / 0.05)%27%3e%3cpath d=%27m0 .5 32 32M0 32 32 .5%27/%3e%3c/svg%3e')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Amazing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Digital</span>
            <br />
            Experiences
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your ideas into stunning web applications with our cutting-edge development solutions. 
            Fast, reliable, and beautifully designed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">10k+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
