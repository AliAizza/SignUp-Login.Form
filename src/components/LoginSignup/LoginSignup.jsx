import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../assests/person.png'
import password_icon from '../assests/password.png'
import email_icon from '../assests/email.png'



function LoginSignup() {

    const [action, setaction] = useState("Sign Up");

    

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login" ? null : 
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action === "Sign Up" ? null : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action === "Login"?"submit gray":"submit"} onClick={() => {setaction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up"?"submit gray":"submit"} onClick={() => {setaction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup