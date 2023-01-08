import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useLaptops from '../hooks/useLaptops';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [products,setProducts]= useLaptops([]);

  const myProducts = products.filter((product) => product.email === user.email);

  const handleProductDelete = (id) => {
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
  };
    return (
        <div>
            

            <div className="">
      <h1 className="text-center text-danger py-5">You have {myProducts.length} items</h1>
      <div className="container pb-5">
        <div className="row g-4">
          {myProducts.map((product) => (
            <div
              key={product._id}
              class="card col-sm-12 col-md-4 p-5"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <img class="card-img-top img-fluid" src={product.img} alt="" />
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">{product.details}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleProductDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default MyItems;