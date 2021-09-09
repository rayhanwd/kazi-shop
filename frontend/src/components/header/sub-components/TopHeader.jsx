import React from 'react';
import { FaPhoneAlt, FaHeadset, FaRegEnvelope } from 'react-icons/fa';

const TopHeader = () => {
    return (
        <div className="top-header bg-light">
            <div className="container d-flex">
                <div className="left-icon d-flex">
                    <div className="p-2"><FaPhoneAlt /><span className="ml-2">01992663825</span></div>

                    <div className="ml-5 p-2"><FaRegEnvelope /><span className="ml-2">support@bd.com</span></div>
                </div>

                <div className="right-icon ml-auto p-2">
                    <FaHeadset /><span className="ml-2">Call us</span>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
