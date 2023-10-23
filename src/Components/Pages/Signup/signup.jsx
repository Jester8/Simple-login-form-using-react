import React from 'react'
import '../Signup/signup.css';
import Darkmode from 'darkmode-js';
import logo_icon from '../../Assets/sk1.png'
import { Link } from 'react-router-dom';

new Darkmode().showWidget();

const signup = () => {
  return (
    <div class="login-page">


<div class="form">
   <img src= {logo_icon} class='logo' alt=""/>
   <div class="login-form">
  

     <input type="text" placeholder="  Firstname"/>
     <input type="text" placeholder="  Lastname"/>
     <input type="text" placeholder="  Email@gmail.com"/>
     <input type="text" placeholder="  Gender"/>
     <input type="password" placeholder="Password"/>
     <input type="password" placeholder=" Confirm Password"/>
     
     <button>Sign up</button>
   

     <p> Already have an account? <Link to ="/Login" > Login </Link></p>
     
    <div  class="footer1">
    <footer> @2023 Skopoos. All rights reserved. Terms & Privacy Policy</footer>
    </div>
     

   </div>
 </div>
</div>
  )
}

export default signup