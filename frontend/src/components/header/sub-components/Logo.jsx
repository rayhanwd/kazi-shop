import React from 'react';
import logo from '../../../assets/images/shop-logo.PNG';
import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <Link to='/' className="navbar-brand my-1">
            <img src={logo} alt="" />
        </Link>
    )
}

export default Logo
