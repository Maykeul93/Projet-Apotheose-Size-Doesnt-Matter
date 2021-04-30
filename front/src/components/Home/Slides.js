import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import images from 'styles/images/homeCarousel'


const Slides = () => (
    <div className='containerSlide' >
        <Carousel 
        autoPlay
        interval='3000'
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        >
            {
                images.map((image)=>(
                    <div className="each-slide">
                        <img 
                        src={image} 
                        alt="slide1" />
                    </div>
                ))
            }
        </Carousel>
    </div>
);

export default Slides;
