import React from 'react';
import P_Photo from '../../assets/images/kazi-shop15.jpg';

const BestCard = () => {
    return (
        <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center">
            <div className="w-full mx-5">
                <div className="card flex flex-col justify-center bg-white">
                    <div className="prod-img">
                        <img src={P_Photo} className="w-full object-cover object-center p-5" alt="" srcset=""/>
                    </div>
                    <div className="prod-info m-5 bg-indigo-700 text-white">
                        <div className="prod-title">
                            <p className="text-xl uppercase font-bold my-2">
                                Puma Shoes
                            </p>
                        </div>
                        <div className="">
                            <p className="font-bold text-md my-2">
                            Price :  65 $
                            </p>
                            <button className="px-4 py-1 transition ease-in duration-200 uppercase rounded hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestCard;