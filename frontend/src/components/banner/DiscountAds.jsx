import React from 'react';

import discount_P1 from '../../assets/images/discount/Pink-Cupcake-Shop-Discount.png';

import discount_P2 from '../../assets/images/discount/Shop-Cat-Care -Discount.png';

const DiscountAds = () => {
    return (
        <div className="d-flex justify-content-evenly">
            <div>
            <img className="pt-2" style={{width:'400px', height:'150px',marginLeft:'202px'}} src={discount_P1} alt="" />
            </div>
            <div>
            <img className="ml-4 pt-2" style={{width:'400px', height:'150px'}} src={discount_P2} alt="" />
            </div>
        </div>
    )
}

export default DiscountAds;
