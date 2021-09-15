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
                        <FaShippingFast className="text-5xl text-indigo-600 hover:text-indigo-700" />
                        <h2 className="text-xl ml-5">Free Shipping</h2>
                        <p className="text-md">Free shipping on all order</p>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <div className="flex justify-center items-center">
                        <AiOutlineFieldTime className="text-5xl text-indigo-600 hover:text-indigo-700" />
                        <h2 className="text-xl ml-5">Support 24/H</h2>
                        <p className="text-md">Free shipping on all order</p>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <div className="flex justify-center items-center">
                        <FaMoneyCheckAlt className="text-5xl text-indigo-600 hover:text-indigo-700" />
                        <h2 className="text-xl ml-5">Money Return</h2>
                        <p className="text-md">Free shipping on all order</p>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <div className="flex justify-center items-center">
                        <MdLocalOffer className="text-5xl text-indigo-600 hover:text-indigo-700" />
                        <h2 className="text-xl ml-5">Order Discount</h2>
                        <p className="text-md">Free shipping on all order</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportSystem
