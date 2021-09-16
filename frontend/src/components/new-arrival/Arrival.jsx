import React from 'react';
import ArrivalCard from './ArrivalCard';

const Arrival = () => {
    return (
        <div className="container">
            <div className="arrival-title">
                <h2>NEW ARRIVAL</h2>
            </div>
            <div className="pb-8 flex flex-wrap justify-center">
            <ArrivalCard />
            <ArrivalCard />
            <ArrivalCard />
            <ArrivalCard />
            </div>
        </div>
    )
}

export default Arrival;
