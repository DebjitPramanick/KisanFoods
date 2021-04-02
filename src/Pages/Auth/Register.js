import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./style.css"
import Logo from "../../Assets/logo.png"
import { auth, provider } from "../../Utils/Firebase"
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

const Register = (props) => {


    const [user, setUser] = useState({})
    const [popup, setPopup] = useState(false)
    const [value, setValue] = useState('Farmer');

    const history = useHistory()

    const types = ['Farmer', 'Consumer', 'Others']

    const takeInput = () => {
        const number = prompt("Enter phone no.")
        console.log(number)
    }

    const googleRegister = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                setUser(
                    {
                        name: res.user.displayName,
                        email: res.user.email,
                        profile_img: res.user.photoURL,
                        userType: ''
                    }
                )
                setPopup(true)
            })
    }

    const handleContinue = () => {
        if(value === "Others"){
            const code = prompt("Enter secret code: ")
            if(code === "kisanfoods"){
                const userData = {
                    name: user.name,
                    email: user.email,
                    profile_img: user.profile_img,
                    userType: value
                }
                localStorage.setItem('user', JSON.stringify(userData))
                history.replace("/")
            }
                
            else alert('Wrong code. Try again!')
        }

        else{
            const userData = {
                name: user.name,
                email: user.email,
                profile_img: user.profile_img,
                userType: value
            }

            localStorage.setItem('user', JSON.stringify(userData))
            history.replace("/")
        }
        
    }


    return (
        <div className="bg-container">
            <div className="overlay">

                {popup && (
                    <div className="popup-container">
                        <div className="popup-box">
                            <h3>Select user type:</h3>

                            {types.map(type => (
                                <RadioGroup defaultValue="Farmer" name="customized-radios" value={value}
                                    className="checkbox-bg" onClick={() => setValue(type)}>
                                    <FormControlLabel value={type} control={<Radio />} label={type} />
                                </RadioGroup>
                            ))}

                            <button className="continue-btn" onClick={handleContinue}>
                                Continue
                            </button>
                        </div>

                    </div>
                )}

                <div className="input-col">
                    <div className="input-form">

                        <div className="brand">
                            <img src={Logo} style={{ width: '100px' }} alt=""></img>
                        </div>

                        <button className="register-btn" onClick={googleRegister}>
                            Register with Google
                        </button>

                        <div className="alter-div">
                            Or
                        </div>


                        <button className="register-btn" onClick={takeInput}>
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
