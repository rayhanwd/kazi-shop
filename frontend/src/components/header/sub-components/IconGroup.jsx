import React from 'react'
import { FaRegUserCircle, FaBell, FaShoppingBasket } from 'react-icons/fa';
const IconGroup = () => {
    return (
        <div className="container">
            <div className="icon-group row my-4">
                <div className="col-md-6 d-flex justify-content-around ml-auto">
                    <span className="mx-3"><FaShoppingBasket /></span>
                    <span className="mx-3"><FaBell /></span>
                    <span className="ml-3"><FaRegUserCircle /></span>
                </div>
            </div>
        </div>
    )
}

export default IconGroup
