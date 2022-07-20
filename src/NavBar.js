import React from "react";
import Home from "./Home";
import logo from "./applelogo1.png"
import logo2 from"./applelogo1.png"
function NavBar(){
    return(
<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
  <a href="./home" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
    <svg class="bi me-2" width="40" height="32"><a href=""></a></svg>
    <img className src={logo2} alt="" width="30" height="30"/>
    <span class="fs-4">iStyle</span>
    
  </a>

  <ul class="nav nav-pills">
    <li class="nav-item"><a href="./home" class="nav-link">Home</a></li>
    <li class="nav-item"><a href="./aboutus" class="nav-link">About us</a></li>
    <li class="nav-item"><a href="./Product" class="nav-link">product</a></li>
    <li class="nav-item"><a href="/login" class="nav-link">Login</a></li>
    <li class="nav-item"><a href="./register" class="nav-link">SignUp</a></li>
    
    
  </ul>
</header>
    )
}

export default NavBar;