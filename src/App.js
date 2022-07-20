import NavBar from "./NavBar";
import Footer from "./Footer";
import Ipad from "./Ipad";
import Feature from "./Feature";
import LayoutRoute from "./layoutRoute";
import Home from "./Home";
import MacBook from "./Macbook";
import Iphone from "./Iphone";
import Product from "./Product";
import AboutUs from "./AboutUs";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./ProfileScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import iphone from "./Iphone";
import AppleWatch from "./AppleWatch";




function App() {
  return (
   
    
    <div >
    
    
      <NavBar></NavBar>
    
  
   
     <Router>
   
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/ipad" component={Ipad} />
      <Route path="/iphone" component={Iphone} />
      <Route path="/macbook" component={MacBook} />
      <Route path="/product" component={Product} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/applewatch" component={AppleWatch} />
      <Route path="/register"  component={RegistrationScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/profile" component={ProfileScreen} />


     </Switch>
   
</Router>
  
  <Footer></Footer>

    </div>
  );
}

export default App;
