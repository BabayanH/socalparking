import './App.css';
import valet_vid from "./valet.mp4";
import carPic from "./crest1.jpg";
import SlideshowSection from "./SlideshowSection.jsx";
import { Slide } from 'react-slideshow-image';
import carousel from "./CarouselLogo.webp";
import seaweed from "./seaweed.png";
import iroha from "./iroha.webp";
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';



function App() {

  return (
    <div className='homepage'>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="SoCal Parking Logo" />
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#info">Info</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="contact-info">
          <div className="phone">
            <FaPhoneAlt />
            <span>123-456-7890</span>
          </div>
        </div>
      </header>
      <section className="video-section">
        <video className='banner-vid' autoPlay muted loop playsInline>
          <source src={valet_vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>

        <div className="content">
          <h1>SoCal Parking is Effortless and convenient for all occasions</h1>
          <p>Efficient, reliable and professional service</p>
          <button>Get Started</button>
        </div>
      </section>
      <section className="tailored-solutions-section">
        <div className="content">
          <h2>Customized Valet Parking Solutions by SoCal Parking</h2>
          <p>At SoCal Parking, we specialize in providing tailored valet parking solutions to meet the unique needs of our clients. With years of experience in the valet parking industry, we understand the importance of providing efficient and professional parking services to enhance the guest experience.</p>
          <p>Our team of skilled valet attendants is trained to handle parking operations for a wide range of events and venues, including weddings, corporate events, private parties, and more. Whether you require valet services for a small gathering or a large-scale event, we have the expertise and resources to ensure smooth parking operations.</p>
          <p>With SoCal Parking, you can trust us to deliver reliable valet parking solutions that reflect the professionalism and quality of your business. Contact us today to learn more about how we can customize our valet services to meet your specific requirements.</p>
        </div>
      </section>

      <section className="private-events-section">
        <div className="content">
          <div>
            <h2>Private Events</h2>
            <p>Enhance your next event with our professional services.</p>
            <p>Elevate your event with our premium valet parking services, where we make it easy fro your guests to get where they need to be</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className='carpic'>
          <img src={carPic} className='carpic' />
        </div>

      </section>
      <SlideshowSection />
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
          </div>
          <div className="row">
            <div className="col">
              <img src="placeholder4.jpg" alt="Logo 4" />
            </div>
            <div className="col">
              <img src="placeholder5.jpg" alt="Logo 5" />
            </div>
            <div className="col">
              <img src="placeholder6.jpg" alt="Logo 6" />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="logo.png" alt="SoCal Parking Logo" />
          </div>
          <div className="footer-info">
            <p>1234 Parking Avenue, Los Angeles, CA 90001</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@socalparking.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SoCal Parking. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
