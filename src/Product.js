import React from "react";
import ipad from "./ipadd.png"
import watch from "./watch.jpeg"
import iphone from"./iphone.jpg"
import macbook from "./macbookpro.jpeg"
import logo2 from"./applelogo1.png"
function Product(){
    return(
 

      <div class="px-4 py-5 my-5 text-center">
      <img className src={logo2} alt="" width="100" height="100"/>
      <h1 class="display-5 fw-bold">Our Products</h1>


      <div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card h-100">
      <img src={iphone} height ="300px" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Iphone 13</h5>
        <p class="card-text">Explore our new Iphone 13</p>
        <a href="./iphone" target="_blank" class="btn btn-primary">explore iphone </a>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img src={ipad} height ="300px" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ipad Pro</h5>
        <p class="card-text">Explore our new Ipad pro.</p>
        <a href="./ipad" target="_blank"  class="btn btn-primary">explore ipad</a>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img src={macbook} height ="300px" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">macbook</h5>
        <p class="card-text">explore our new macbook</p>
        <a href="./macbook" target="_blank"  class="btn btn-primary">explore macbook</a>
    </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img src={watch}  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">explore our new Apple Watch</p>
        <a href="./applewatch" target="_blank"  class="btn btn-primary">Explore our watch </a>
      </div>
    </div>
  </div>
</div>
  
</div>
  
    
  
 
 
);


    
}
export default Product;