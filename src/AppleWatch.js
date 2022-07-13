import React from "react";
import logo from"./watch.jpeg"
import logo2 from "./istyle.png"
function AppleWatch(){
    return(
     
     <div class="px-3 py-2 bg-dark text-white">

<div class="px-4 py-5 my-5 text-center">
  <img src={logo} alt="" width="450" height="450"/>
  <h1 class="display-5 fw-bold">Apple Watch Series 7</h1>
  <h2 class="display-6 fw-bold">Tap. Type. Swipe.</h2>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">The larger display enhances the entire experience, making Apple Watch easier to use and read. Series 7 represents our biggest and brightest thinking yet..</p>
    <h3 class="display-6 fw-bold">From AED 1,599 </h3>
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
export default AppleWatch;