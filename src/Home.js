import React from "react";

import logo from "./macbookpro.jpeg"
import logo2 from"./applelogo1.png"
import Ipad from "./Ipad";
import MacBook from "./Macbook";


function Home(){
    return(
        <div>
        <div class="px-4 py-5 my-5 text-center">
  <img className src={logo2} alt="" width="100" height="100"/>
  <h1 class="display-5 fw-bold">iStyling with us...</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">Store. The best way to buy the products you love.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <a class="btn btn-outline-secondary" href="./iphone" target="Blank" >View Iphone</a>
    <a class="btn btn-outline-secondary" href="./ipad" target="Blank" >View Ipad</a>
    <a class="btn btn-outline-secondary" href="./macbook" target="Blank" >View Macbook</a>
    <a class="btn btn-outline-secondary" href="./applewatch" target="Blank" >View Apple Watch</a>
    </div>
  </div>


<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
  <div class="col-md-5 p-lg-5 mx-auto my-5">
 
     <img ClassName src={logo} alt="" width="350" height="400"  />
    <h1 class="display-4 fw-normal">MacBook Pro 13 </h1>
    <p class="lead fw-normal">The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera, and studio‑quality mics, it’s our most portable pro laptop.</p>
    <a class="btn btn-outline-secondary" href="./macbook">More info on Mac</a>
    
    
  </div>
  <div class="product-device shadow-sm d-none d-md-block"></div>
  <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
</div>
</div>
<div class="container">
<div class="container">
  
</div>
    </div>
    </div>
    



    )
}
export default Home;