import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "./Register.css";
import auth from "../../../firebase.init";
import Sociallogin from '../SocialLogin/Sociallogin';




const Register = () => {
 
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});  




  const navigate=useNavigate();
    
  const navigateLogIn = ()=>{
    navigate('/login')

  }

  if (user){
    navigate("/home");
  }

  const handleRegister = event => {
    event.preventDefault();
    const name =event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;


    createUserWithEmailAndPassword (email,password);
  }
   
    return (
        <div className='register-form'>
            <h2 className="text-danger text-center mt-5">Pls Register Here</h2>

    <form onSubmit={handleRegister}>
      <input  type = "text" name = "name" id="" placeholder="Your Name" />
      <input  type = "email" name = "email" id="" placeholder="Your Email Address" required />
      <input  type = "password" name = "password" id="" placeholder="Password" required/>
      <input  className="w-50 mx-auto btn btn-danger" type = "submit" value = "Register"  />
    </form>

    <p>Have You Already An Account? <Link to ="/login" className="text-success" onClick={navigateLogIn}> Log In Here</Link></p>
     <Sociallogin></Sociallogin> 
      
      
        </div>
    );
};

export default Register;