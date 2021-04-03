import React, { useState, useEffect } from 'react'
import Carousel from "react-material-ui-carousel";
import './home.css'
import Product from './Product'
import { Products } from '../../Utils/Firebase'
import Logo from "../../Assets/logo.png"
import Card from './Card'
import { Link } from 'react-router-dom';
const Home = (props) => {

  const [data, setdata] = useState([]);
  var item = [{}];

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {})
  const [name, setName] = useState('')
  const [nullUser, setNullUser] = useState(true)

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      setNullUser(false)
      setName(user.name.split(" ")[0])
    }
    else {
      props.history.push('/login')
    }
  }, [user])

  useEffect(() => {
    // if(Object.keys(user).length !== 0){
    //   setNullUser(false)
    //   setName(user.name.split(" ")[0])
    // }
    // else{
    //   props.history.push('/login')
    // }
  }, [user])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setNullUser(true)
    props.history.push('/login')
  }

  const getdata = async () => {
    const havedata = await Products.get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          setdata(d => [...d, doc.data()])
        })
      })
  }


  useEffect(() => {

    getdata();

  }, [])

  console.log(nullUser);

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
              {!nullUser && (
                <div className="user-sec">
                  <div className="username">
                    Hello {name}!
                  </div>

                  <button className="logout-btn"
                    onClick={handleLogout}
                  >Logout</button>
                </div>
              )}
            </li>
          </ul>

        </div>

      </div>
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

          {!nullUser && (
            <Product />
          )}


          <br></br><br></br>

          {!nullUser && (
            <div className="">
              <div className="d-flex flex-wrap" style={{ rowGap: '16px' }}>
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
          )}





          <br></br>

        </div>
      </div>
    </div>

  )
}

export default Home
