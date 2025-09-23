import { ExternalLink, Github, Database, Users, Monitor, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'School Management System',
      description: 'A comprehensive desktop application built with C# and MySQL that provides a complete solution for managing school operations. This project gave me my first hands-on development experience with database design and desktop application architecture.',
      features: [
        'Student information management',
        'Academic performance tracking',
        'Administrative dashboard',
        'Data security and backup'
      ],
      technologies: ['C#', 'MySQL', 'Windows Forms', '.NET Framework','Figma'],
      icon: Monitor,
      color: 'text-blue-400',
      bgGradient: 'from-blue-500/20 to-purple-500/20'
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my development journey, from desktop applications to modern web development, 
            highlighting my growth in both technical skills and collaborative workflows.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className={`h-2 bg-gradient-to-r ${project.bgGradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg">
                      <project.icon className={`h-6 w-6 ${project.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <Layers className="h-4 w-4 mr-2 text-blue-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-white">
                      <Database className="h-4 w-4 mr-2 text-pink-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm font-medium text-white hover:scale-105 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4 border-t border-gray-700">
                    <button className="flex-1 border border-gray-600 text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm flex items-center justify-center transition-colors duration-300">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            I'm constantly working on new projects and expanding my portfolio. 
            Stay tuned for more exciting developments!
          </p>
          <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;