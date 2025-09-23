import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import './index.css'

function App() {
  

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App;
