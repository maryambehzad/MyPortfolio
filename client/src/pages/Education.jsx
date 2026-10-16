// Education page: shows my studies

// List of my education. To add more, add a new item here.
const educationList = [
  {
    program: "Game Programming",
    school: "Centennial College",
    dates: "September 2025 - Present",
    degree: "Currently studying (in progress)",
  },
  {
    program: "Web Development",
    school: "Self-Study",
    dates: "January 2020 - September 2024",
    degree: "Self-taught through online learning and personal projects",
  },
];

function Education() {
  return (
    <div className="page">
      <h1>Education</h1>

      <div className="education-list">
        {/* Make one card for each item in the list */}
        {educationList.map((item, index) => (
          <div className="education-card" key={index}>
            <h2>{item.program}</h2>
            <p className="school">{item.school}</p>
            <p><strong>Dates:</strong> {item.dates}</p>
            <p><strong>Qualification:</strong> {item.degree}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;