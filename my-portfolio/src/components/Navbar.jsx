import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar({ darkMode, toggleDarkMode }){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

    const isActiveLink = (path) => {
        return location.pathname === path
    }

    const navLinks =[
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/projects', name: 'Projects' },
        { path: '/skills', name: 'Skills' },
        { path: '/contact', name: 'Contact' }
    ]

    return(
        <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex justify-between items-center h-16">
                  <div className="flex-shrink-0">
                       <Link
                          to="/"
                          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        >
                          Hasini 
                        </Link> 
                    </div>  

                    <div className="hidden md:block">
                       <div className="ml-10 flex items-center space-x-4">
                        {navLinks.map((link) =>(
                            <Link
                               key={link.path}
                               to={link.path}
                               className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                 isActiveLink(link.path)
                                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                               }`}
                            >
                                {link.name}
                            </Link>   
                        ))}
                       </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                           onClick={toggleDarkMode}
                           className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                           aria-label="Toggle dark mode"
                        >
                            
                        </button>   

                        <button
                          onClick={toggleMenu}
                          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />   
                                )}
                            </svg>
                        </button>  
                    </div>
                </div>   
                  {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
                           {navLinks.map((link) => (
                            <Link
                              key={link.path}
                              to={link.path}
                              onClick={()=> setIsMenuOpen(false)}
                              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                isActiveLink(link.path)
                                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                              }`}
                            >
                                {link.name}
                            </Link>  
                           ))} 
                        </div>
                    </div>
                  )}
            </div>  
        </nav>
    )
}

export default Navbar;