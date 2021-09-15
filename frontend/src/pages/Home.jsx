import React,{ Fragment } from 'react';
import Banner from '../components/banner/Banner';
import BestSelling from '../components/best-selling/BestSelling';
import Blog from '../components/blogs/Blog';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Arrival from '../components/new-arrival/Arrival';
import Brand from '../components/our-brand/Brand';
import SpecialDiscount from '../components/special-discount/SpecialDiscount';
import Subscribe from '../components/subscribe/Subscribe';
import SupportSystem from '../components/support/SupportSystem';

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <Banner/>
            <SupportSystem/>
            <Arrival/>
            <BestSelling/>
            <SpecialDiscount/>
            <Brand/>
            <Subscribe/>
            <Blog/>
            <Footer/>
        </Fragment>
    )
}

export default Home;
