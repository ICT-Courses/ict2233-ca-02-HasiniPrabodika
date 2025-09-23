import { useState, useEffect, useRef } from 'react';
import { Code, Figma, MessageCircle, Palette } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    {
      name: 'UI/UX Design',
      icon: Palette,
      level: 85,
      description: 'Creating intuitive and engaging user interfaces with strong focus on user experience',
      color: 'text-pink-400'
    },
    {
      name: 'Front-end Development',
      icon: Code,
      level: 80,
      description: 'Building responsive and interactive web applications using modern technologies',
      color: 'text-blue-400'
    },
    {
      name: 'Figma Design',
      icon: Figma,
      level: 90,
      description: 'Proficient in creating wireframes, prototypes, and design systems in Figma',
      color: 'text-pink-400'
    },
    {
      name: 'Communication',
      icon: MessageCircle,
      level: 88,
      description: 'Strong verbal and written communication skills for effective collaboration',
      color: 'text-blue-400'
    }
  ];

  const technicalSkills = [
    'HTML/CSS', 'JavaScript', 'C#', 'React', 'Tailwind CSS',
    'MySQL', 'MongoDB', 'Node.js', 'Express.js', 'Git/GitHub'
  ];

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  
  const AnimatedProgressBar = ({ level, delay = 0 }) => {
    const [currentLevel, setCurrentLevel] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          let current = 0;
          const increment = level / 50; 
          const interval = setInterval(() => {
            current += increment;
            if (current >= level) {
              current = level;
              clearInterval(interval);
            }
            setCurrentLevel(Math.floor(current));
          }, 20);

          return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timer);
      }
    }, [isVisible, level, delay]);

    return (
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${currentLevel}%` }}
        >
         
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A combination of design thinking, technical expertise, and soft skills that enable me to create exceptional digital experiences.
          </p>
        </div>

       
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl hover:scale-105 hover:bg-gray-800/90 transition-all duration-300 border border-gray-700/50 shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-lg border border-gray-600">
                  <skill.icon className={`h-6 w-6 ${skill.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-white">{skill.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {skill.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Proficiency</span>
                      <span className={`${skill.color} font-semibold`}>
                        {isVisible ? skill.level : 0}%
                      </span>
                    </div>
                    <AnimatedProgressBar level={skill.level} delay={index * 200} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Stack</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technicalSkills.map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm font-medium text-white hover:scale-105 transition-all duration-300 cursor-default border border-gray-600/50 hover:border-gray-500 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${0.8 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;