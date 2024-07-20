
import React, {useState} from 'react';
import './header.css'
import { Link } from "react-router-dom";

 function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(true);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    return (
        <header>
        <div className="nav-right">
            <div className="logo">Curl Essentials Co.</div>
        </div>
        <ul className="navigation">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
            <li><Link to="/getintouch">GET IN TOUCH</Link></li>
            <li><Link to="/about">ABOUT US</Link></li> 
        </ul>


        <div className="hamburger" onClick={handleMenuOpen}>
            <img src="/hamburger-menu-icon-svg-7.png" height="50" className="on" id="on" alt="ss"/>
        </div>
        <div className={`alert ${menuOpen ? 'open' : ''}`}>  
            <ul className="navigation1">
                <img src="/x.webp" class="close" id="close" alt="ss" onClick={handleMenuClose}/>
                <li><Link to="/">HOME</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
            <li><Link to="/getintouch">GET IN TOUCH</Link></li>
            <li><Link to="/about">ABOUT US</Link></li> 
            </ul>
        </div>
    </header>
    )
}

export default Header