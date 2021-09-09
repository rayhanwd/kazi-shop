import React from 'react';
import product from '../../assets/images/kazi-shop15.jpg';
const ProductCard = () => {
    return (
        <div className="col-md-3">
           <div className="mt-5">
           <img style={{width:'255px'}} className="img-responsive" src={product} alt="" srcset="" />
           </div>
           <div className="">
             <h6>Food new</h6>
           </div>
          </div>
    )
}

export default ProductCard
