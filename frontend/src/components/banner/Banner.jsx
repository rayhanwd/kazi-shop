import React from 'react'
import DiscountAds from './DiscountAds'
import Slider from './Slider';
import { TiArrowUnsorted } from 'react-icons/ti';

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="flex px-4">
                <div className="lg:w-1/5 bg-gray-100 rounded-b-lg px-5">
                    <ul class="list-group px-5">
                        <li class="list-group-item flex items-center">Pet Food <TiArrowUnsorted className="ml-5"/></li>
                        <li class="list-group-item flex items-center">Furniture <TiArrowUnsorted className="ml-5"/></li>
                        <li class="list-group-item flex items-center">Plant <TiArrowUnsorted className="ml-5"/></li>
                        <li class="list-group-item flex items-center">Flower <TiArrowUnsorted className="ml-5"/></li>
                        <li class="list-group-item flex items-center">Cakes <TiArrowUnsorted className="ml-5"/></li>
                        <li class="list-group-item flex items-center">Cosmetics <TiArrowUnsorted className="ml-5"/></li>
                        <li class="list-group-item flex items-center">Medical <TiArrowUnsorted className="ml-5"/></li>
                        <li class="list-group-item flex items-center">Black Friday <TiArrowUnsorted className="ml-5"/></li>
                        <li class="list-group-item flex items-center">Electronics <TiArrowUnsorted className="ml-5"/></li>
                        <li class="list-group-item flex items-center">Handmade <TiArrowUnsorted className="ml-5"/></li>
                        <li class="list-group-item flex items-center">Auto Parts <TiArrowUnsorted className="ml-5"/></li>
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
