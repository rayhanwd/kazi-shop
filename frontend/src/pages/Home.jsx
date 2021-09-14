import React,{ Fragment } from 'react';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Arrival from '../components/new-arrival/Arrival';
import SupportSystem from '../components/support/SupportSystem';

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <Banner/>
            <SupportSystem/>
            <Arrival/>
            <Footer/>
        </Fragment>
    )
}

export default Home;
