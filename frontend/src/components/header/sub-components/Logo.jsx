import React from 'react';
import logo from '../../../assets/images/shop-logo.PNG';

const Logo = () => {
    return (
        <a className="navbar-brand my-1" href="#">
            <img src={logo} alt="" />
        </a>
    )
}

export default Logo
