import { Link } from 'react-router-dom';
import { ArrowDown, Github, Linkedin, Mail, User } from 'lucide-react';
import { useState } from 'react';
import profileImage from '../assets/profile.jpeg';


const Home = () => {
  const [imageError, setImageError] = useState(false);
  
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900">
     
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Hasini</span>
            <br />
            <span className="text-white">Prabodhika</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
            Aspiring UI/UX Designer & Front-End Developer
          </p>

          <p className="text-lg text-gray-400 mb-6 max-w-2xl">
            Creating intuitive and engaging digital experiences that delight users and solve complex problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Link>
            
            <Link
              to="/contact"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>

          
          <div className="flex justify-center md:justify-start space-x-6 mb-6">
            <a 
              href="mailto:hprabodika657@gmail.com"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>

        {/* Right side: Profile photo with fallback */}
        <div className="flex-1 flex justify-center md:justify-end">
          {!imageError ? (
            <img
              src="/profile.jpeg"
              alt="Hasini Prabodhika"
              className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-2xl"
              onError={handleImageError}
            />
          ) : (
            
            <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center">
              <User className="w-32 h-32 md:w-48 md:h-48 text-white/80" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;