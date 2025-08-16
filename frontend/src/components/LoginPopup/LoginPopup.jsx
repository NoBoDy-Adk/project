import React, { useContext, useEffect } from 'react'
import  './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Storecontext'
import axios from 'axios'
const LoginPopup = ({setShowLogin}) => {
    const {url,setToken}=useContext(StoreContext);
    const [CurrState,setCurrState] = useState("LogIn")
    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })
    const onChangeHandler = (event) => {
      const name=event.target.name;
      const value=event.target.value;
      setData(data=>({...data,[name]:value}))
  }
  const onLogin=async (event)=>
  {
      event.preventDefault()
      let newUrl=url;
      if(CurrState==="LogIn"){
        newUrl+="/api/user/login"
      }
      else{
        newUrl+="/api/user/register"
      }
      const response=await axios.post(newUrl,data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false);
      }
      else{
        alert(response.data.message);
      }
  }
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{CurrState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""  />
        </div>
        <div className="login-popup-input">
            {CurrState==="LogIn"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Name' required/>}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
        </div>
        <button type="submit">{CurrState==="Sign Up"?"Create Account":"LogIn"}</button>
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
