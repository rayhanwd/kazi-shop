import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import TopHeader from '../components/header/sub-components/TopHeader';
import ShopContainer from '../components/shop/ShopContainer';

const Shop = () => {
    return (
        <Fragment>
            <TopHeader />
            <ShopContainer />
            <Footer />
        </Fragment>
    )
}

export default Shop;
