import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import images from 'styles/images/homeCarousel'


const Slides = () => (
        <Carousel 
        width={640}
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
                        <p className="legend">Legend 1</p>
                    </div>
                ))
            }
        </Carousel>
);

export default Slides;
