import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
       errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
       
      }

      if(user){
          navigate("/home");
      }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style ={{height:"1px"}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style ={{height:"1px"}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick ={() => signInWithGoogle()}
                className='btn btn-info w-50 d-block mx-auto my-3'>
                <i class="bi bi-google"></i>
                <span className="px-4">Sign In Google</span>
                </button>

                <button className='btn btn-primary w-50 d-block mx-auto my-3'>
                <i class="bi bi-facebook"></i>
                <span className="px-4">Sign In Facebook</span>
                </button>

                <button className='btn btn-success w-50 d-block mx-auto mb-5'>
                <i class="bi bi-git"></i>
                <span className="px-4">Sign In Github</span>
                </button>
            </div>
            
        </div>
    );
};

export default Sociallogin;