import React from 'react';
import { Accordion } from 'react-bootstrap';

import laptop from "../../../images/laptop.jpg"

const Reason = () => {
    return (
      <div>
            
            
      <h2 className='text-danger text-center mt-5 mb-5' >Why You choose My Warehouse to Buy Your Laptop</h2>
      
      
      <div className='reason d-flex align-items-center'>
        <div className='col-md-6'> <img className="text-center w-100" src={laptop} alt=""/></div>
      
     <div className='col-md-6'>
     <Accordion defaultActiveKey={['0']} alwaysOpen>
     <Accordion.Item eventKey="0">
     <Accordion.Header>Authenticity</Accordion.Header>
     <Accordion.Body>
     All laptops of my warhouse is brand new and I importe all of my laptops from abroad.We always make asure you that all  products of my warhouse is authentic and orginal.
    
    
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
    <Accordion.Header>Warrenty & Guaranty</Accordion.Header>
    <Accordion.Body>
            My warhouse can asure the best laptop in recent years.
            I will give you warrenty and gurranty of 3 years in every laptop purchase.So you can buy from here without any risk.
     
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
    <Accordion.Header>Price Reasonable</Accordion.Header>
    <Accordion.Body>
    I have tried my best to keep low profit in your purchase.You will get all laptop in 5% to 10%
    discount from market price.
     
    </Accordion.Body>
    </Accordion.Item>
    </Accordion>
     </div>

      </div>
      
      </div>
      

      
    );
};

export default Reason;