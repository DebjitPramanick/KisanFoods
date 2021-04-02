import React from 'react'
import Carousel from "react-material-ui-carousel";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import './home.css'
import Card from './Card'
const Home = () => {
    return (
        <div className="body">
        <div className="home">
        <div className="home_container">
            <Carousel autoPlay animation="slide">
          <div className="carousel_design">
            <img
              className="home_carousal"
              src="https://via.placeholder.com/1250x500/0000FF/808080?Text=Digital.com"
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

       
         </div>
        
        </div>
       
        </div>
    )
}

export default Home
