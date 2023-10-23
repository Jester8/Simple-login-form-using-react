import React from 'react'
import './login.css';
import Darkmode from 'darkmode-js';
import logo_icon from '../../Assets/sk1.png'
import play_icon from '../../Assets/play.jpg'
import app_icon from '../../Assets/app.jpeg'
import { Link } from 'react-router-dom';


new Darkmode().showWidget();

const login = () => {
  return (
    <div class="login-page">


    <div class="form">
       <img src= {logo_icon} class='logo' alt=""/>
       <div className="login-form">
      
    
         <input type="text" placeholder="  Email or Username"/>
    
         <input type="password" placeholder="Password"/>
         <button>  Sign in </button>
        
    
         <div>  
         <p className="p1">Forgot Password?</p>
         </div>
    
         <p> Don't have an account? <Link to ="/Signup" >Sign up here</Link></p>
         <div  className="icons">
         <img src= {play_icon} class='play_icon' alt=""/>   <img src= {app_icon} class='app_icon' alt=""/>
         </div>
    
        <div  className="footer1">
         @2023 Skopoos. All rights reserved. Terms & Privacy Policy
        </div>
      
         
    
       </div>
     </div>
    </div>
  )
}

export default login