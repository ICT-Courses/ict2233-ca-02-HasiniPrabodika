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
      bgGradient: 'from-blue-500/30 to-purple-500/30'
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
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
            <div key={project.title} className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 hover:bg-gray-800/90 transition-all duration-300 border border-gray-700/50 shadow-2xl">
              <div className={`h-2 bg-gradient-to-r ${project.bgGradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-lg border border-gray-600">
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
                          className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm font-medium text-white hover:scale-105 transition-transform duration-300 border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4 border-t border-gray-700">
                    <button className="flex-1 border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center transition-all duration-300 hover:border-gray-500">
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
          <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

// Hero Section with Dark Theme
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
     
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 text-center md:text-left">
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
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              View My Work
            </button>
            
            <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get In Touch
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-700">
            <div className="w-32 h-32 md:w-48 md:h-48 text-white/80 flex items-center justify-center text-6xl md:text-8xl font-bold">
              H
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;