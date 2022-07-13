import React from "react";
import logo from "./ain.png"
function AboutUs(props){
    return(
        <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src={logo} alt="" width="400" height="400"/>
    <h1 class="display-5 fw-bold">This Project is done by </h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4"> Talal Qasim and Maryam saleem Studying Software Engineering at Al Ain University </p>
      <p class="lead mb-4">This website is not inteded to buy products to display  </p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <a href=""> <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Al Ain University</button></a> 
        
      </div>
    </div>
  </div>
  
    )
}
export default AboutUs;

 