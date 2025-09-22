import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layouts";
import Home from "./pages/Home";
import './index.css'

function App() {
  

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App;
