import React,{ Fragment } from 'react'
import Banner from '../components/banner/Banner'
import Header from '../components/header/Header'
import Product from '../components/product/Product'

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <Banner/>
            <Product/>
        </Fragment>
    )
}

export default Home
