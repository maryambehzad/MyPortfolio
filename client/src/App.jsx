// This is the main component. It shows the menu and the correct page.
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Education from "./pages/Education.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

// Import your new database portfolio list component
import PortfolioList from "./components/PortfolioList.jsx";

function App() {
  return (
    <>
      {/* The menu is always shown at the top */}
      <Navbar />

      {/* Each path shows a different page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* New route to view your database items directly */}
        <Route path="/db-projects" element={<PortfolioList />} />
      </Routes>
    </>
  );
}

export default App;