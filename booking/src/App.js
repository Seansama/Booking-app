import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Admin from "./components/AdminPage";
import BookedHotels from "./components/BookedHotels";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Login from "./components/Form/Login";
import SignUp from "./components/Form/SignUp";
 

function App() {
  return (
    <Router>
      <div>
   
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Booked" element={<BookedHotels />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
