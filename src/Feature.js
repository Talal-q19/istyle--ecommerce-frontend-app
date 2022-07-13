import React from "react";
import logo3 from"./applelogo1.png"
function Feature(){
    return(
        <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
  <div class="my-3 py-3">
    <img className src={logo3} alt="" width="100" height="110"/>
    <h2 class="display-5">Iphone 13 Pro </h2>
    <p class="lead">Oh.So.Pro</p>
  </div>
  <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
</div>
    )
}
export default Feature;