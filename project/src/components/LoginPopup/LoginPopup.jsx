import React from 'react'
import  './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [CurrState,setCurrState] = useState("LogIn")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{CurrState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""  />
        </div>
        <div className="login-popup-input">
            {CurrState==="LogIn"?<></>:<input type="text" placeholder='Name' required/>}
            <input type="email" placeholder='Email' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button>{CurrState==="Sign Up"?"Create Account":"LogIn"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>by signing up you agree to our terms and conditions</p>
        </div>
        {CurrState==="LogIn"
        ?<p>Create a new Account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an Account? <span onClick={()=>setCurrState("LogIn")}>LogIn here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
