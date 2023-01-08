import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Additems = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
    
        console.log(data);
        const url = `https://nameless-lowlands-90907.herokuapp.com/laptop`;

        fetch(url,{
            method:'Post',
            headers: {
                'content-type':'application/json'

            },
            body:JSON.stringify(data)

        })

        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        } )
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please Add an Item</h2>
            <form className = 'd-flex flex-column'  onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-2" placeholder="Name"{...register("name", { required: true, maxLength: 20 })} />
      <input className="mb-2" placeholder="Image Url"type="text" {...register("img")} />
      <input className="mb-2"  placeholder="" value={user?.email}{...register("email", { required: true, maxLength: 20 })} />
      <textarea className="mb-2" placeholder="Description"{...register("details")} />
      <input className="mb-2" placeholder="Price"type="number" {...register("price")} />
      <input className="mb-2" placeholder="quantity"type="number" {...register("quantity")} />
      <input className="mb-2" placeholder="Supplier Name"type="text" {...register("supplier")} />
      
      <input type="submit" value="Add new item" />
    </form>
            
        </div>
    );
};

export default Additems;