import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate, useParams } from 'react-router-dom';
const UpdateItem = () => {

    const navigate = useNavigate();

    const handleAddProduct = () => {
      navigate("/manage");
    };
    const { register, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const [product, setProduct] = useState({});
    const [delivered, setDelivered] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        
        const url = `https://nameless-lowlands-90907.herokuapp.com/product/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
              setProduct(data)
            console.log(data);
            });
      }, []);
      
  

    const handleUpdateProduct = (data,e) => {
    e.preventDefault();
        if(delivered){
            data.quantity--;
        }
        console.log(data);
        const url = `https://nameless-lowlands-90907.herokuapp.com/laptop/${id}`;

        fetch(url,{
            method:'PUT',
            headers: {
                'content-type':'application/json'

            },
            body:JSON.stringify(data)

        })

        .then(res=>res.json())
        .then(data=>{
            setProduct(data);
            console.log("success", data);
            alert("product Updated succesfully");
        } )
    };
    return (
        <div className='w-50 mx-auto'>

            <h2>Please Update </h2>
            <form className = 'd-flex flex-column'  onSubmit={(e) => handleUpdateProduct(e)}>
      <input className="mb-2"  defaultValue={product.name} {...register("name", { required: true, maxLength: 20 })} />
      <input className="mb-2" defaultValue={product.img} type="text" {...register("img")} />
      <input className="mb-2" readOnly defaultValue={user?.email}{...register("email", { required: true, maxLength: 20 })} />
      <textarea className="mb-2"  defaultValue={product.details} {...register("details")} />
      <input className="mb-2"  defaultValue={product.price} type="number" {...register("price")} />
      <input className="mb-2"  defaultValue={product.quantity} type="number" {...register("quantity")} />
      <input className="mb-2"  defaultValue={product.supplier} type="text" {...register("supplier")} />
      
      <input type="submit" value="Update" />
      <input type="button" value="Delivered" onClick={()=> {
                  setDelivered(!delivered);
                } } />
    </form>

    <button
          className="btn btn-danger my-3 mt-5 mb-5 mx-auto d-block"
          onClick={() => handleAddProduct()}
        >
          Manage All Items
        </button>

            
        </div>
    );
};

export default UpdateItem;