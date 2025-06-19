import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Brokrage from './Brokrage';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <>
            
            <Hero/>
            <OpenAccount/>
            <Brokrage/>
            
        </>
     );
}

export default PricingPage;