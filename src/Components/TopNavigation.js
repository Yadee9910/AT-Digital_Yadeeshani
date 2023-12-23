// TopNavigation.js

import React, { useState } from 'react';
import "../Styles/topnavigation.css";
import logo from "../Assests/Logo.jpg";
import menuicon from "../Assests/Group 2.svg";

function TopNavigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`nav ${menuOpen ? 'menu-open' : ''}`}>
            <img className="Logo_img" src={logo} alt="" />
                <div className="menu-icon" onClick={handleMenuToggle}>
                    <img className="iconmenu" src={menuicon} alt="Menu Icon" />
                </div>

            <ul className={`navbar ${menuOpen ? 'open' : ''}`}>
                <li className="nav_list">SERVICES</li>
                <li className="nav_list">ABOUT US</li>
                <li className="nav_list">CONTACT US</li>
                <li className="nav_list">CAREERS</li>
            </ul>
        </div>
    );
}

export default TopNavigation;
