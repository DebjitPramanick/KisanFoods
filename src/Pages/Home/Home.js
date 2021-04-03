import React, { useState, useEffect } from 'react'
import Carousel from "react-material-ui-carousel";
import './home.css'
import Product from './Product'
import { Products } from '../../Utils/Firebase'

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

  const [data, setdata] = useState([]);
  var item = [{}];


  const getdata = async () => {
    const havedata = await Products.get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          setdata(d => [...d,doc.data()])
        })
      })
  }


  useEffect(() => {

    getdata();

  }, [])

  console.log(data);

  return (
    <div className="body">
      <div className="home">
        <div >
          <Carousel className="home_container" autoPlay animation="slide" >
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
          <div className="">
            <div className="d-flex flex-wrap" style={{rowGap: '16px'}}>
              {
                data.map(data => {
                  return (
                    <div className="px-2 product-card">
                      <Card userdata={data} />
                    </div>
                  )
                })
              }
            </div>


          </div>

          <br></br>

        </div>
      </div>
    </div>

  )
}

export default Home
