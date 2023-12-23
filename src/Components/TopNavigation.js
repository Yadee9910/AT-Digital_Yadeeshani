import React from 'react';
import "../Styles/topnavigation.css";
import logo from "../Assests/Logo.jpg";

function TopNavigation(){
    return(
       <div className="nav">
            <img className="Logo_img"
            src={logo} alt=""/>

 
        <ul className="navbar">
            <li className="nav_list">SERVICES</li>
            <li className="nav_list">ABOUT US</li>
            <li className="nav_list">CONTACT US</li>
            <li className="nav_list">CAREERS</li>
        </ul>

        </div>
    );
}
export default TopNavigation;