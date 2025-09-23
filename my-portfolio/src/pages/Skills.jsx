import { Code, Figma, MessageCircle, Palette } from 'lucide-react';

const Skills = () => {
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
    'HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS',
    'C#', 'MySQL', 'MongoDB', 'Node.js', 'Express.js', 'Git/GitHub'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A combination of design thinking, technical expertise, and soft skills that enable me to create exceptional digital experiences.
          </p>
        </div>

        {/* Core Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={skill.name} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg">
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
                      <span className={skill.color}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Stack</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technicalSkills.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm font-medium text-white hover:scale-105 transition-transform duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;