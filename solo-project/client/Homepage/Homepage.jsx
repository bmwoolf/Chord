import React from 'react';
import TopNavBar from './TopNavBar.jsx';
import Classes from './Classes.jsx'
import CarouselPics from './Carousel.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
//import main Body
//import Features

const Homepage = (props) => {
    return ( 
        <React.Fragment>
            <TopNavBar />
            <CarouselPics />
            <Classes />
        </React.Fragment>
       
     );
}
 
export default Homepage;
