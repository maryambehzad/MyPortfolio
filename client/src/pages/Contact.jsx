// Contact page: my contact details and a message form
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  // navigate is used to go back to the Home page
  const navigate = useNavigate();

  // This saves what the visitor types in the form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  // This runs every time the visitor types something
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // This runs when the visitor presses Send Message
  const handleSubmit = (event) => {
    event.preventDefault(); // stop the page from reloading
    console.log("Form submitted:", formData); // show the data in the console
    alert("Thank you, " + formData.firstName + "! Your message was received.");
    navigate("/"); // go back to the Home page
  };

  return (
    <div className="page">
      <h1>Contact Me</h1>

      <div className="contact-layout">
        {/* My contact information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Name:</strong> Maryam Behzad</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:maryam.behzad.kh@gmail.com">
              maryam.behzad.kh@gmail.com
            </a>
          </p>
        </div>

        {/* The message form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Me a Message</h2>

          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label>Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;