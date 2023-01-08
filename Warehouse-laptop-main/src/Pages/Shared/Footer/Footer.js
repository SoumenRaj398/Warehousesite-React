import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-success text-center mt-5 mb-5 bg-dark text-light pb-5">
            <h3 className='text-danger pt-5'><small>copyright @ {year} </small></h3>
            
            
        </footer>
    );
};

export default Footer;