import React from 'react';

const BrandCard = () => {
    return (
        <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center">
        <div className="w-full p-4">
            <div className="card flex flex-col justify-center p-10 bg-white">
                <div className="prod-img">
                    <img src="https://i.ibb.co/s5hZJV9/Minimal-Bright-Gradient-Technology-Logo.png" className="w-full object-cover object-center" alt="" srcset=""/>
                    
                </div>
            </div>
        </div>
    </div>
    );
};

export default BrandCard;