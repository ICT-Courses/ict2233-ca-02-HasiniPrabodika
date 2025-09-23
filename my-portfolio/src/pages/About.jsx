
import { GraduationCap, Heart, Target, ExternalLink, Github, Database, Users, Monitor, Layers } from 'lucide-react';

// Dark Theme About Component
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            As an undergraduate pursuing a BSc in ICT, I am deeply passionate about creating 
            user-friendly digital experiences. I am focused on a career as a UI/UX designer, 
            where I can apply my knowledge to build intuitive and engaging interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                My goal is to use my skills to solve complex problems and design products 
                that delight users. I believe that great design is not just about how something 
                looks, but how it works and how it makes people feel.
              </p>
              <p className="text-lg leading-relaxed">
                Through my studies and hands-on projects, I've developed a strong foundation 
                in both technical implementation and design principles, allowing me to bridge 
                the gap between beautiful designs and functional solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl text-center hover:scale-105 hover:bg-gray-800/90 transition-all duration-300 border border-gray-700/50">
                <Heart className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-white">Passionate</h3>
                <p className="text-sm text-gray-400">
                  Driven by love for creating exceptional user experiences
                </p>
              </div>

              <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl text-center hover:scale-105 hover:bg-gray-800/90 transition-all duration-300 border border-gray-700/50">
                <Target className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-white">Focused</h3>
                <p className="text-sm text-gray-400">
                  Goal-oriented approach to solving design challenges
                </p>
              </div>

              <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl text-center hover:scale-105 hover:bg-gray-800/90 transition-all duration-300 border border-gray-700/50">
                <GraduationCap className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-white">Learning</h3>
                <p className="text-sm text-gray-400">
                  Continuously growing and adapting to new technologies
                </p>
              </div>
            </div>
          </div>

          
          <div className="space-y-6">
            <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:bg-gray-800/90 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">Education</h3>
                  <h4 className="text-lg text-blue-400 font-medium mb-2">
                    Bachelor of Science in Information Technology
                  </h4>
                  <p className="text-gray-300 mb-4">
                    University of Sri Jayewardenepura
                  </p>
                  <p className="text-sm text-gray-400">
                    Currently pursuing my undergraduate degree with a focus on UI/UX design 
                    and front-end development. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
