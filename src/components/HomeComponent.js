import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img5 from './../Images/bulb.jpg';
import tower from './../Images/tower.jpg';
import cloud from './../Images/h2.jpg';



const HomeComponent = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${img5})`, backgroundSize: "100% 100%",padding:"230px"}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${cloud})`,backgroundSize: "100% 100%",padding:"230px"}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${tower})`,backgroundSize: "100% 100%",padding:"230px"}}>
              <span></span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default HomeComponent;

/*import React from 'react';
//import background from './../background.png';
import bulb from './../images/bulb.jpg';
import tower from './../images/tower.jpg';
import cloud from './../images/cloud.jpg';
import Carousel from 'react-bootstrap/Carousel'
import "react-slideshow-image/dist/styles.css";


class HomeComponent extends React.Component{
    render(){
        
        
        return(
<Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={bulb}
                    alt="First slide"
                    width="2000"
                    height="450"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={tower}
                    alt="Second slide"
                    width="800"
                    height="450"
                />
                <Carousel.Caption>
                 
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={cloud}
                alt="Third slide"
                border="1 px solid black"
                width="800"
                height="450"
                />
                <Carousel.Caption>
               
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>*/
           /* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={bulb} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={tower} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={cloud} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>*//*
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={bulb} alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={tower} alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={cloud} alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          */
        /*);
    }
}

export default HomeComponent;*/

/*
 
*/