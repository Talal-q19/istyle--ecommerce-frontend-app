import React from "react";
import logo from"./iphone.jpg"
import logo2 from "./istyle.png"
function iphone(){
    return (
        <div class="px-3 py-2 bg-dark text-white">
 
 




<div class="px-4 py-5 my-5 text-center">
  <img src={logo} alt="" width="450" height="450"/>
  <h1 class="display-5 fw-bold">iPhone 13 "</h1>
  <h2 class="display-6 fw-bold">Your new SuperPower</h2>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">6.1-inch Super Retina XDR display,Dual 12MP camera system: Wide and Ultra Wide cameras,12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording,Cinematic mode for recording videos with shallow depth of field,Rated IP68 (maximum depth of 6 meters up to 30 minutes),A15 Bionic chip for lightning-fast performance.</p>
    <h3 class="display-6 fw-bold">From AED 2,999 before trade‑in.</h3>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
    
      
    </div>
  </div>
</div>
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/home" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img src={logo2} alt="" width="72" height="70"/>
      </a>
      <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
    </ul>
  </footer>
</div>
</div>

    )
}
export default iphone