import React,{ Fragment } from 'react';
import Banner from '../components/banner/Banner';
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
        </Fragment>
    )
}

export default Home;
