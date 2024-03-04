import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import crestPic from "./crest1.jpg";

const SlideshowSection = () => {
    return (
        <section className="slideshow-section">
            <div className="content">
                <h2>Drive Towards Excellence</h2>
                <p>SoCal Parking staff are experienced drivers and we have provided services to over 100 venues with attendance ranging from 50 to 1000 people</p>
            </div>
            <div className="slideshow-container">
                <Slide slidesToScroll={2} slidesToShow={3} indicators={true}>
                    <div className="each-slide">
                        <div style={{'backgroundImage': crestPic}}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url('image2.jpg')`}}>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
        
    );
};

export default SlideshowSection;