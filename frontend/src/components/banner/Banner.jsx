import React from 'react'
import DiscountAds from './DiscountAds'
import Slider from './Slider';
import { RiArrowDropRightLine } from 'react-icons/ri';

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="flex px-4">
                <div className="lg:w-1/5 bg-gray-100 rounded-b-lg px-5">
                    <ul class="list-group px-5">
                        <li class="list-group-item my-3 flex items-center">Pet Food <RiArrowDropRightLine className="ml-auto"/></li>
                        <li class="list-group-item my-3 flex items-center">Furniture <RiArrowDropRightLine className="ml-auto"/></li>
                        <li class="list-group-item my-3 flex items-center">Plant <RiArrowDropRightLine className="ml-auto"/></li>
                        <li class="list-group-item my-3 flex items-center">Flower <RiArrowDropRightLine className="ml-auto"/></li>
                        <li class="list-group-item my-3 flex items-center">Cakes <RiArrowDropRightLine className="ml-auto"/></li>
                        <li class="list-group-item my-3 flex items-center">Cosmetics <RiArrowDropRightLine className="ml-auto"/></li>
                        <li class="list-group-item my-3 flex items-center">Medical <RiArrowDropRightLine className="ml-auto"/></li>
                        <li class="list-group-item my-3 flex items-center">Black Friday <RiArrowDropRightLine className="ml-auto"/></li>
                        <li class="list-group-item my-3 flex items-center">Electronics <RiArrowDropRightLine className="ml-auto"/></li>
                        <li class="list-group-item my-3 flex items-center">Handmade <RiArrowDropRightLine className="ml-auto"/></li>
                        <li class="list-group-item my-3 flex items-center">Auto Parts <RiArrowDropRightLine className="ml-auto"/></li>
                    </ul>
                </div>
                <div className="lg:w-4/6 ml-auto pt-4">
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default Banner
