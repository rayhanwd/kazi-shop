import React, { useEffect } from 'react';

const NavMenu = () => {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <h6>Category</h6>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-5 px-5" id="navbarNav">
                    <ul className="navbar-nav ml-5 pl-5">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">News Feed</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Merchant Zone</a>
                    </li>
                    <li className="nav-item pr-0">
                        <a className="nav-link" href="#">Help</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavMenu
