import React from 'react';
import Hero from './Hero';
import Universe from './Universe';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function ProductsPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection imageUrl="media\images\kite.png"
    productName="Kite"
    productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
    tryDemo="Try Demo"
    learnMore="Learn More"
    googlePlay=""
    appStore=""/>
        <RightSection 
        productTitle="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
        imageUrl="media/images/console.png"
        learnMore="Learn More"
        />
                <LeftSection imageUrl="media\images\coin.png"
    productName="Coin"
    productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
    tryDemo="Coin"
    googlePlay=""
    appStore=""/>
    <RightSection
        productTitle="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
        imageUrl="media/images/kiteconnect.png"
        learnMore="Connect API"
    />
            <LeftSection imageUrl="()"
    productName="Varsity mobile"
    productDescription="An easy to grasp, collection of stock market
    lessons with in-depth coverage and 
    illustrations. Content is broken down into
    bite-size cards to help you learn on the go."
    tryDemo="Try Demo"
    learnMore="Learn More"
    googlePlay=""
    appStore=""/>
    <p className='text-center fs-3'>Want to know more about our technology stack? Check out <a href="https://zerodha.tech/" style={{textDecoration:"none"}}>the Zerodha.tech blog.</a></p>
    <Universe/>
        </>
    );
}
export default ProductsPage;