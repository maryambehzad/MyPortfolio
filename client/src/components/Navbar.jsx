// The menu bar with my logo and links to all pages
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* My custom logo: a circle with my initials */}
      <div className="logo">MB</div>

      {/* Links to each page */}
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact Me</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;