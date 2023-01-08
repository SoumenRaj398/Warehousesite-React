import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLaptops from '../../hooks/useLaptops';
import "./Product.css";

const Product = ({product,deleteme}) => {

    const [products, setProducts] = useLaptops([]);

    const {_id,name, price ,quantity,details, img ,supplier} = product;
    console.log(name);

    const navigate=useNavigate();
    

    const  navigateToItemDetail = id => {
        navigate(`/product/${id}`)
    }
    const deleteMe = (id) => {

        const procced = window.confirm("Are you sure to delete ?");
        if (procced) {
          console.log(id);
          
          
              const url = `https://nameless-lowlands-90907.herokuapp.com/laptop/${id}`;

            fetch(url, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                    console.log("delete succesfully");
                    const remaining = products.filter((product) => product._id !== id);
                    setProducts(remaining);
                  }
                });  
          
        }
    }
    return (
     
        <div className='col-md-4 col-sm-12'>
       <div className='card'>                          
            <img src ={img} alt="" className='card-img-top  ' />
             <h2 className='card-title'>{name}</h2>
             <h4>Price:{price}</h4>
             <h4>Quantity:{quantity}</h4>
         <h5>Details:{details}</h5>
             <h2>SupplierName:{supplier}</h2>

             {
                 deleteme ? <>
          <button onClick={ () => deleteMe(_id)} class="btn btn-danger"> Delete</button> 
                 
                 </> : <>
          <button onClick={ () => navigateToItemDetail(_id)} class="btn btn-info"> Update</button> 
                 </>


             }
  </div>
  </div>
    );
};

export default Product;