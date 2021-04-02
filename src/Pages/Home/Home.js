import React from 'react'
import Carousel from "react-material-ui-carousel";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import './home.css'
// import Slider from "react-slick";
import Card from './Card'
// import Owl from './Owl_Car'
const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return (
        <div className="body">
        <div className="home">
        <div className="home_container">
            <Carousel autoPlay animation="slide">
          <div className="carousel_design">
            <img 
              className="home_carousal"
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Carousal here"
            />
          </div>

          <img
            className="home_carousal"
            src="https://via.placeholder.com/1250x500/FFFF00/000000"
            alt="Carousal here"
          />

          <div className="carousel_design">
            <img
              className="home_carousal"
              src="https://via.placeholder.com/1250x500"
              alt="Carousal here"
            />
          </div>
        </Carousel>
       
       <br></br><br></br>

       <div className="row ">
       <div className="col-sm-4">
        <Card />
        </div>
        <div className="col-sm-4">
        <Card />
        </div>
        <div className="col-sm-4">
        <Card />
        </div>
       </div>
        <br></br>
       <div className="row">
       <div className="col-sm-4">
        <Card />
        </div>
        <div className="col-sm-4">
        <Card />
        </div>
        <div className="col-sm-4">
        <Card />
        </div>
       </div>

        <br></br>
        
    
    </div>   
  
        </div>
       
        </div>
    )
}

export default Home
