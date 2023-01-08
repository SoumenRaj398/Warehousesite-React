import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

import Reason from '../Reason/Reason';
import Testimony from '../Testimony/Testimony';

const Home = () => {
    
    return (
        <div className='container'>
            <Banner></Banner>
            <Products></Products>
            <Reason></Reason>
            <Testimony></Testimony>
            
        </div>
    );
};

export default Home;