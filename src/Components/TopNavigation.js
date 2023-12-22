import React from 'react';
import "../Styles/topnavigation.css";
import logo from "../Assests/Logo.jpg";

function TopNavigation(){
    return(
       <div className="nav">
        <div className="Logo">
            <img className="Logo_img"
            src={logo} alt=""/>
        </div>
    <div className="menu">
        <ul className="navbar">
            <li className="nav_list">SERVICES</li>
            <li className="nav_list">ABOUT US</li>
            <li className="nav_list">CONTACT US</li>
            <li className="nav_list">CAREERS</li>
        </ul>
    </div>
        </div>
    );
}
export default TopNavigation;