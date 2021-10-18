import React from 'react';
import BrandCard from './BrandCard';

const Brand = () => {
    return (
        <div className="container">
            <div className="">
                <h2 className="text-center text-xl font-bold">FEATURE BRAND</h2> 
                </div>
                <div className="pb-8 flex flex-wrap">
                    <BrandCard />
                    <BrandCard />
                    <BrandCard />
                    <BrandCard />
                </div>
            </div>
            )
}

            export default Brand;
