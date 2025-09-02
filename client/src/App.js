import { useDispatch, useSelector, Provider } from "react-redux";
import { getLoginStatus } from "./services/authService";
// import { Toaster } from "./components/ui/toaster";
// import { Toaster as Sonner } from "./components/ui/sonner";

import About from "./pages/About/About";
import CoreValues from "./pages/About/CoreValues";
import OurTeam from "./pages/About/OurTeam";
import Home from "./pages/Homepage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Job from "./pages/job/Job";
import ContactUs from "./pages/contact/ContactUs";
import Blogs from "./pages/blog/Blogs";
import Consulting from "./pages/consulting/Consulting";
import Audits from "./pages/audits/Audits";
import Strategy from "./pages/strategy/Strategy";
import Advisory from "./pages/advisory/Advisory";
import SendMessage from "./pages/sendmessages/SendMessage";
import Calling from "./pages/calling/Calling";
import AdminDashboard from "./pages/calling/Admin";
import Login from "./pages/login/Login";
import Calls from "./pages/makecalls/Calls";
import { useEffect } from "react";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import axios from "axios";
import CallsAdmin from "./pages/makecalls/CallsAdmin";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <div className="App">
      {/* <Toaster /> */}
      {/* <Sonner /> */}
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
          <Route path="/audits" element={<Audits />} />
          <Route path="/audits/:id" element={<Audits />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/strategy/:id" element={<Strategy />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/advisory/:id" element={<Advisory />} />
          <Route path="/sms/" element={<SendMessage />} />
          <Route path="/calling" element={<Calling />} />
          <Route path="/call/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/calls-admin" element={<CallsAdmin />} />
          <Route
            path="*"
            element={<h1 className="text-center mt-20">404 Not Found</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
