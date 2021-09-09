import React from 'react'
import DiscountAds from './DiscountAds'
import Slider from './Slider'

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="flex items-center p-4">
                <div className="lg:w-1/3">
                    <ul class="list-group">
                        <li class="list-group-item">Pet Food</li>
                        <li class="list-group-item">Furniture</li>
                        <li class="list-group-item">Plant</li>
                        <li class="list-group-item">Flower</li>
                        <li class="list-group-item">Cakes</li>
                        <li class="list-group-item">Cosmetics</li>
                        <li class="list-group-item">Medical</li>
                        <li class="list-group-item">Black Friday</li>
                        <li class="list-group-item">Electronics</li>
                        <li class="list-group-item">Handmade</li>
                        <li class="list-group-item">Auto Parts</li>
                    </ul>
                </div>
                <div className="lg:w-1/2 ml-auto">
                    <Slider />
                    <div className="col-md-9">
                        <DiscountAds />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
