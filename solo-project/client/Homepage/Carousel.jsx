import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


const CarouselPics = () => {
    return ( 
        <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src="../assets/dragon-capsule.jpg" alt="First slide"/>
            <Carousel.Caption>
            <h3>Space Travel</h3>
            <p>Ensuring species endurement.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src="../assets/windmill.jpg" alt="Third slide"/>
            <Carousel.Caption>
            <h3>Sustainable Energy</h3>
            <p>A cleaner climate.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src="../assets/porsche_exhausts.jpg" alt="Third slide"/>
            <Carousel.Caption>
            <h3>Renewable Design</h3>
            <p>Advancements in automotive engineering.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src="../assets/city.jpg" alt="Third slide"/>
            <Carousel.Caption>
            <h3>Sustainable Cities</h3>
            <p>Built on the premise of green.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
     );
}
 
export default CarouselPics;