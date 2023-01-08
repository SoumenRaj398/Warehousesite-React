import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import PHOTO1 from "../../../images/PHOTO1.jpg";
import PHOTO2 from "../../../images/PHOTO2.jpg";
import PHOTO3 from "../../../images/PHOTO3.jpg";

const Testimony = () => {
    return (
        <div>
            <h1 className='text-success text-center mt-5 mb-5'>What People Say About My Warehouse</h1>
            <div>
            <CardGroup>
           <Card>
          <Card.Img variant="top" src={PHOTO1} alt="" />
          <Card.Body>
          <Card.Title className='text-danger text-center'>Stephen Allena</Card.Title>
      <Card.Text>
      Laptops are evolving at a dramatic pace, and this is the place to track their progres
      or lack thereof.The best laptop is out here,and their laptop dig deep into what’s new 
      from the world’s biggest manufacturers to help you find it.
      
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={PHOTO2} alt ="" />
    <Card.Body>
      <Card.Title className='text-danger text-center'>Michael Marsh</Card.Title>
      <Card.Text>
      Laptops are evolving at a dramatic pace, and this is the place to track their progres
      or lack thereof.The best laptop is out here,and their laptop dig deep into what’s new 
      from the world’s biggest manufacturers to help you find it.
       
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={PHOTO3} alt ="" />
    <Card.Body>
      <Card.Title className='text-danger text-center'>Alexa Rosy</Card.Title>
      <Card.Text>
      Laptops are evolving at a dramatic pace, and this is the place to track their progres
      or lack thereof.The best laptop is out here,and their laptop dig deep into what’s new 
      from the world’s biggest manufacturers to help you find it.
      
      </Card.Text>
    </Card.Body>
 
  </Card>
</CardGroup>
            </div>
            
            
        </div>
    );
};

export default Testimony;