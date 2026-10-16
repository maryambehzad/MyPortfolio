// About page: my photo, short story and resume link
function About() {
  return (
    <div className="page about">
      <h1>About Me</h1>

      <div className="about-content">
        {/* My photo is in the public folder */}
        <img src="/photo.jpg" alt="Maryam Behzad" className="profile-photo" />

        <div className="about-text">
          <h2>Maryam Behzad</h2>
          <p>
            I am a Game Programming student at Centennial College with a
            self-taught web development background. I enjoy creating
            attractive, fun games and learning new technologies. I also love
            meeting new people and working with others.
          </p>

          {/* This button opens my resume PDF in a new tab */}
          <a href="/resume.pdf" target="_blank" className="button">
            View My Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;