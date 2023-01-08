import React from 'react';

const Aboutus = () => {
    return (
 
    <div className="container">
      <h1 className="text-center primary-color py-5"> About Us</h1>
      <div className="d-lg-flex pb-5 justify-content-center ">
        {/* text part  */}
        <div className="col-lg-6 ">
          <h2>Who We Are ?</h2>
          <p className="py-5">
            My warehouse laptop is an ISO certified inventory management company since
            2003. We basically Manage laptops type Inventory stock house.
            Where a Stock can be monitor throw dashboard. A company can monitor
            all of his  products status in a single application.
          </p>
          <p>
            we ensure a best quality 24/7 service after sell of our product. We
            are encouraging you to trial our application for one time. That's
            all from my warehouse.
          </p>
        </div>
      
      </div>
    </div>
  );
};


export default Aboutus;