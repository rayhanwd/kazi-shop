import React from 'react';
import { FaShippingFast, FaMoneyCheckAlt } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { MdLocalOffer } from 'react-icons/md';

const SupportSystem = () => {
    return (
        <div className="container my-16">
            <div className="flex items-center">
                <div className="lg:w-1/3">
                    <div className="flex justify-center items-center">
                        <h2 className="text-xl mr-5">Free Shipping</h2> <FaShippingFast className="text-5xl"/>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <div className="flex justify-center items-center">
                        <h2 className="text-xl mr-5">Support 24/H</h2> <AiOutlineFieldTime className="text-5xl"/>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <div className="flex justify-center items-center">
                        <h2 className="text-xl mr-5">Money Return</h2> <FaMoneyCheckAlt className="text-5xl"/>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <div className="flex justify-center items-center">
                        <h2 className="text-xl mr-5">Order Discount</h2> <MdLocalOffer className="text-5xl"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportSystem
