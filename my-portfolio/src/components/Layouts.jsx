import { useState } from 'react'
import Navbar from  './Navbar'

function Layouts({ children }){
    const [darkMode, setDarkMode ] = useState(false)

    const toggleDarkMode = () =>{
        setDarkMode (!darkMode)
        localStorage.setItem('darkMode', !darkMode)
    }
    useState(() =>{
        const savedDarkMode = localStorage.getItem('darkMode')
        if (savedDarkMode){
            setDarkMode(JSON.parse(savedDarkMode))
        }
    })

    return(
        <div className={darkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-white daark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
               <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
               <main>
                {children}
               </main>
               <footer className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-600 dark:text-gray-300">
                        © 2024 HasiniPrabodhika. All rights reserved.
                    </p>
                </div>
               </footer>
            </div>
        </div>
    )
}

export default Layouts;