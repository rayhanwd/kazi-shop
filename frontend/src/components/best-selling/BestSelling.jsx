import React from 'react';
import BestCard from './BestCard';

const BestSelling = () => {
    return (
        <div className="container">
            <div className="arrival-title">
                <h2>BEST SELLING</h2>
            </div>
            <div className="pb-8 flex flex-wrap justify-center">
                <BestCard />
                <BestCard />
                <BestCard />
                <BestCard />
            </div>
        </div>
    )
}

export default BestSelling;
