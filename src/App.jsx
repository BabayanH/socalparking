import "./App.css";
import valet_vid from "./valet.mp4";
import carPic from "./valetimage.jpg";
// import SlideshowSection from "./SlideshowSection.jsx";
// import { Slide } from "react-slideshow-image";
import carousel from "./carousel.png";
import seaweed from "./seaweed.png";
import iroha from "./iroha.webp";
import palms from "./palms.png";
import logo from "./assets/logo.jpg";
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";
import {
  FaShieldAlt,
  FaConciergeBell,
  FaRocket,
  FaLeaf,
  FaMobileAlt,
  FaSmile,
} from "react-icons/fa";
import React, { useRef } from "react";

function App() {
  const contactRef = useRef(null); // Ref for the contact section
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection = (event, ref) => {
    event.preventDefault(); // Prevent default anchor behavior
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo" onClick={scrollToTop}>
          <img src={logo} alt="SoCal Parking Logo" />
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a href="#about" onClick={(e) => scrollToSection(e, aboutRef)}>
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, servicesRef)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, contactRef)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="contact-info">
          <div className="phone">
            <span></span>
          </div>
        </div>
      </header>
      <section className="video-section">
        <video className="banner-vid" autoPlay muted loop playsInline>
          <source src={valet_vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>

        <div className="content">
          <h1>SoCal Parking is Effortless and convenient for all occasions</h1>
          <p>Efficient, reliable and professional service</p>
          {/* <button>Get Started</button> */}
        </div>
      </section>
      <section id="about" className="about-section" ref={aboutRef}>
        <div className="content">
          <h2>Customized Valet Parking Solutions by SoCal Parking</h2>
          <p>
            At SoCal Parking, we specialize in providing tailored valet parking
            solutions to meet the unique needs of our clients. With years of
            experience in the valet parking industry, we understand the
            importance of providing efficient and professional parking services
            to enhance the guest experience.
          </p>
          <p>
            Our team of skilled valet attendants is trained to handle parking
            operations for a wide range of events and venues, including
            weddings, corporate events, private parties, and more. Whether you
            require valet services for a small gathering or a large-scale event,
            we have the expertise and resources to ensure smooth parking
            operations.
          </p>
          <p>
            With SoCal Parking, you can trust us to deliver reliable valet
            parking solutions that reflect the professionalism and quality of
            your business. Contact us today to learn more about how we can
            customize our valet services to meet your specific requirements.
          </p>
        </div>
      </section>

      <section className="private-events-section">
        <div className="content">
          <div>
            <h2>Private Events</h2>
            <p>Enhance your next event with our professional services.</p>
            <p>
              Elevate your event with our premium valet parking services, where
              we make it easy fro your guests to get where they need to be
            </p>
            <button onClick={scrollToContact}>Learn More</button>
          </div>
        </div>
        <div className="carpic">
          <img src={carPic} className="carpic" />
        </div>
      </section>

      <section id="services" className="services-section" ref={servicesRef}>
        <p className="services-description">
          SoCal Parking operates with next generation Technology, using
          ticketless valet app. We also provide professional and satisfactory
          shuttle service for our private events if requested.
        </p>
        <div className="service">
          <FaShieldAlt size={50} />
          <h2>Security</h2>
        </div>
        <div className="service">
          <FaConciergeBell size={50} />
          <h2>Convenience</h2>
        </div>
        <div className="service">
          <FaRocket size={50} />
          <h2>Speed</h2>
        </div>
        <div className="service">
          <FaSmile size={50} />
          <h2>Hospitality</h2>
        </div>
        <div className="service">
          <FaMobileAlt size={50} />
          <h2>Technology</h2>
        </div>
        <div className="service">
          <FaLeaf size={50} />
          <h2>Eco-friendly</h2>
        </div>
      </section>
      {/* <SlideshowSection /> */}
      <section className="logos-section">
        <div className="container">
          <div className="partners-text">
            <h2>Trusted by many businesses. Here are some of our partners:</h2>
          </div>
          <div className="row">
            <div className="col">
              <img src={carousel} alt="Carousel Logo" />
            </div>
            <div className="col">
              <img src={seaweed} alt="Seaweed Logo" />
            </div>
            <div className="col">
              <img src={iroha} alt="Iroha Logo" />
            </div>
            <div className="col">
              <img src={palms} alt="Palms Logo" />
            </div>
          </div>
          {/* <div className="row">
            <div className="col">
              <img src="placeholder4.jpg" alt="Logo 4" />
            </div>
            <div className="col">
              <img src="placeholder5.jpg" alt="Logo 5" />
            </div>
            <div className="col">
              <img src="placeholder6.jpg" alt="Logo 6" />
            </div>
          </div> */}
        </div>
      </section>
      {/* <section id="contact" className="contact-section">
        <h1>Contact Us</h1>
        <div>
          <a href="tel:+1234567890" className="contact-link">
            <FaPhone /> +1 (234) 567-890
          </a>
        </div>
        <div>
          <a href="mailto:info@example.com" className="contact-link">
            <FaEnvelope /> info@example.com
          </a>
        </div>
        <p>Please email us all the private event details.</p>
      </section> */}

      <section id="contact" className="contact-section" ref={contactRef}>
        <h2>Request A Quote</h2>
        <form action="https://formspree.io/f/myyrbgge" method="POST">
          <div>
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div>
            <input
              type="email"
              name="_replyto"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Event details (Date, Address, Number of Guests)"
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-contact">
            <a
              href="https://www.instagram.com/socalparking/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="tel:+13108497322">
              <FaPhone /> +1 (310) 849-7322
            </a>
            <a href="mailto:info@socalparking.net">
              <FaEnvelope /> info@socalparking.net
            </a>
          </div>
          <div className="footer-address">
            <p>1146 N. Central Ave. #343 Glendale, Ca 91202</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SoCal Parking. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
