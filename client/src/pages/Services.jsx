// Services page: shows one card for each service

// List of my services. To add a new service, add a new item here.
const services = [
  {
    title: "Web Development",
    image: "/images/service1.jpg",
    description:
      "Building modern, multi-page websites and web apps using HTML, CSS, JavaScript and React.",
  },
  {
    title: "Game Development",
    image: "/images/service2.jpg",
    description:
      "Creating fun 2D games with player controls, collision, scoring and game logic.",
  },
  {
    title: "Responsive Website Design",
    image: "/images/service3.jpg",
    description:
      "Making websites look good and work well on phones, tablets and computers.",
  },
  {
    title: "Bug Fixing and Maintenance",
    image: "/images/service4.jpg",
    description:
      "Finding and fixing errors in code and keeping websites updated and running smoothly.",
  },
];

function Services() {
  return (
    <div className="page">
      <h1>Services</h1>

      <div className="services-grid">
        {/* Make one card for each service */}
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <div className="service-info">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;