import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import "./style.css"
import { auth, provider, userDB } from "../../Utils/Firebase"
import Logo from "../../Assets/logo.png"

const Login = () => {

    const [status, setStatus] = useState('none')

    const takeInput = () => {
        const number = prompt("Enter phone no.")
        console.log(number)
    }

    const handleLogin = () => {
        auth.signInWithPopup(provider)
            .then(async (res) => {
                const email = res.user.email
                const query = userDB.where("email", "==", `${email}`)
                const snapshot = await query.get()
                if (snapshot.empty) {
                    alert("User is not registered.")
                }
                else {
                    snapshot.forEach((doc) => {
                        localStorage.setItem('user', JSON.stringify(doc.data()))
                        setStatus('ok')
                    });
                }
            })

    }


    return (
        <div className="bg-container">

            {status === 'ok' && (
                <Redirect to="/" />
            )}

            <div className="overlay">
                <div className="input-col">
                    <div className="input-form">

                        <div className="brand">
                            <img src={Logo} style={{ width: '100px' }} alt=""></img>
                        </div>

                        <button className="login-btn"
                            onClick={handleLogin}>
                            Login with Google
                        </button>

                        <div className="alter-div">
                            Or
                        </div>

                        <button className="login-btn" onClick={takeInput}>
                            Login with phone no.
                        </button>

                        <p>Not registered?
                            <span><Link to="/register"> Register Now</Link></span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
