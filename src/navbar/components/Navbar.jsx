import React, {useState} from "react";
import './Navbar.css'



function Navbar() {

    return (
        <div className="main__navbar">
           <img src="https://www.crearlogogratisonline.com/images/crearlogogratis_1024x1024_01.png" alt="" className="logo"/>
           <nav>
               <ul className="nav__links">
                   <li><a href="#">Services</a></li>
                   <li><a href="#">Projects</a></li>
                   <li><a href="#">About</a></li>
               </ul>
           </nav>
           <div>
            <a href="#">Sing Up</a>
            <a href="#" className="cta"><button>Log in</button></a>
           </div>
        </div>
    )
}

export default Navbar;