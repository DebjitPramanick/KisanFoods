import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import Logo from "../../Assets/logo.png"

const Register = () => {

    const takeInput = () =>{
        const number =  prompt("Enter phone no.")
        console.log(number)
    }

    return (
        <div className="bg-container">
            <div className="overlay">
                <div className="input-col">
                    <div className="input-form">

                        <div className="brand">
                            <img src={Logo} style={{ width: '100px' }}></img>
                        </div>

                        <button className="login-btn">
                            Register with Google
                        </button>

                        <div className="alter-div">
                           Or 
                        </div>
                        

                        <button className="login-btn" onClick={takeInput}>
                            Rwgister with phone no.
                        </button>

                        <p>Already resgistered?
                            <span><Link to="/login"> Login Now</Link></span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
