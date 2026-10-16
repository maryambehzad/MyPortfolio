// Home page: welcome message, mission and a button to the About page
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home">
      <h1>Welcome to My Portfolio</h1>
      <p className="subtitle">
        Hello, I'm Maryam Behzad, a Game Developer in training.
      </p>

      {/* Mission statement */}
      <div className="mission">
        <h2>My Mission</h2>
        <p>
          My mission is to build attractive games while continuously
          learning new technologies.
        </p>
      </div>

      {/* Button that goes to the About page */}
      <Link to="/about" className="button">
        Learn More About Me
      </Link>
    </div>
  );
}

export default Home;