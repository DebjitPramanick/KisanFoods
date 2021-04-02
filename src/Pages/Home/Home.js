import React, {useState, useEffect} from 'react'
import Carousel from "react-material-ui-carousel";
import './home.css'
import Product from './Product'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";


import Logo from "../../Assets/logo.png"

import Card from './Card'
import { Link } from 'react-router-dom';
const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  }

  const user = JSON.parse(localStorage.getItem('user'))
  const [name, setName] = useState('')
  const [nullUser, setNullUser] = useState(false)

  useEffect(() => {
    if(user){
      setName(user.name.split(" ")[0])
    }
    else{
      setNullUser(true)
    }
  }, [user])


  const handleLogout = () => {
    localStorage.removeItem('user')
    setNullUser(true)
  }

  return (
    <div className="body">
      <div className="home-nav">
        <div className="container">
          <div className="brand">
            <img src={Logo} style={{ width: '40px' }} alt=""></img>
            <p>Kisan Foods</p>
          </div>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li>
              {!nullUser ? (
                <div className="user-sec">
                  <div className="username">
                    Hello {name}!
                  </div>
                
                <button className="logout-btn"
                onClick={handleLogout}
                >Logout</button>
              </div>
              ) : (
                <div className="auth-btns">
                  <Link to="/login">Login</Link>
                  <p>or</p>
                  <Link to="/register">Register</Link>
                </div>
              )}
            </li>
          </ul>
          
        </div>

      </div>
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

            <div className="carousel_design">
              <img
                className="home_carousal"
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Carousal here"
              />
              
            </div><div className="carousel_design">
              <img
                className="home_carousal"
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Carousal here"
              />
            </div>
          </Carousel>

          <br></br><br></br>

          <Product />

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
