import About from './pages/About/About';
import CoreValues from './pages/About/CoreValues';
import OurTeam from './pages/About/OurTeam';
import Home from './pages/Homepage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Job from './pages/job/Job';
import ContactUs from './pages/contact/ContactUs';
import Blogs from './pages/blog/Blogs';
import Consulting from './pages/consulting/Consulting';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/core-values" element={<CoreValues />} />
          <Route path="/about/management-team" element={<OurTeam />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blogs />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/consulting/:id" element={<Consulting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
