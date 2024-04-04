import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import crestPic from "./crest1.jpg";

const SlideshowSection = () => {
  return (
    <section className="slideshow-section">
      <div className="content">
        <h2>Drive Towards Excellence</h2>
        <p>
          SoCal Parking staff are experienced drivers and we have provided
          services to over 100 venues with attendance ranging from 50 to 1000
          people
        </p>
      </div>
      <div className="slideshow-container">
        <Slide slidesToScroll={2} slidesToShow={3} indicators={true}>
          <div className="each-slide">
            <div style={{ backgroundImage: crestPic }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url('image2.jpg')` }}></div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default SlideshowSection;
/* Slide Show section styles */
// .slideshow-section {
//   padding: 80px 0;
//   background-color: #111; /* Set the background color as desired */
//   color: #fff; /* Set text color to white */
//   text-align: center;
// }

// .slideshow-section .content {
//   max-width: 800px;
//   margin: 0 auto;
// }

// .slideshow-section h2 {
//   font-size: 1.5rem;
//   margin-bottom: 10px;
// }

// .slideshow-section p {
//   font-size: 1rem;
//   margin-bottom: 20px;
// }

// .slideshow-container {
//   max-width: 800px;
//   margin: 0 auto;
// }

// .each-slide {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 400px; /* Set height as desired */
// }

// .each-slide > div {
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
// }
