import About from './pages/About/About';
import CoreValues from './pages/About/CoreValues';
import OurTeam from './pages/About/OurTeam';
import Home from './pages/Homepage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/core-values" element={<CoreValues />} />
          <Route path="/about/management-team" element={<OurTeam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
