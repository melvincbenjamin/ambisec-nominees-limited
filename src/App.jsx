import { Routes, Route } from 'react-router-dom'
import Navbars from './components/Navbars'
import Home from "./pages/Home";
import About from "./pages/About";
import Board from './pages/Board';
import Contact from "./pages/Contact";
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbars />

      {/* Main content */}
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  )
}

export default App