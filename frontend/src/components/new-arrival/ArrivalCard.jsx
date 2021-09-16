import React from 'react';
import P_Photo from '../../assets/images/kazi-shop15.jpg';

const ArrivalCard = () => {
    return (
        <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center">
            <div className="w-full p-4">
                <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                    <div className="prod-img">
                        <img src={P_Photo} className="w-full object-cover object-center" />
                    </div>
                    <div className="prod-info grid my-3">
                        <div className="prod-title">
                            <p className="text-2xl uppercase text-gray-900 font-bold">
                                Puma Shoes
                            </p>
                            <p className="uppercase text-sm text-gray-400">
                                The best shoes in the marketplace
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                            <p className="font-bold text-xl">
                                65 $
                            </p>
                            <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArrivalCard;
