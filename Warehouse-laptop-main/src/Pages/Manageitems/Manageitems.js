import React from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Home/Product/Product';
import useLaptops from '../hooks/useLaptops';
import "./Manageitems.css";


const ManageItems = () => {
    const [products,setProducts]= useLaptops([]);

    const navigate = useNavigate();

    const handleAddProduct = () => {
      navigate("/additems");
    };

    const handleDelete = id =>{
        const proceed = window.confirm('Are you confirm');
        if(proceed){
            const url =`https://nameless-lowlands-90907.herokuapp.com/laptop/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                const remaining = products.filter(product=>product._id !== id)
                setProducts(remaining);
            })

        }
    }
    return (
       
        <div className='container'>
            <button
          className="btn btn-danger my-3 mt-5 mb-5 mx-auto d-block"
          onClick={() => handleAddProduct()}
        >
          Add New Item
        </button>
             <h2 className='text-success text-center'>All Laptops</h2>
             <div className="row row-eq-height">
             {
                products.map(product=> <Product 
                key={product._id}
                product={product}
                deleteme={true}
                ></Product> )
            }
             </div>
             
           
            
            
        </div>
    );
};

export default ManageItems;