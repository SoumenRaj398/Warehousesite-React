import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Sociallogin from '../SocialLogin/Sociallogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import { async } from '@firebase/util';

const Login = () => {

    const emailRef=useRef('');
    const passwordRef= useRef('');
    const navigate=useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname|| "/" ;

  
   

     let errorElement;

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    if(user){
      navigate(from,{replace:true});
    }
    if (error) {
      errorElement = <div>
           <p className='text-danger'>Error: {error.message}</p>
         </div>
      
     }

    const handleSubmit = event => {
        event.preventDefault();

        const email= emailRef.current.value;
        const password= passwordRef.current.value;

        signInWithEmailAndPassword(email,password);

    }
    const navigateRegister= event =>{
        navigate('/register');
    }

    const resetPassword = async() => {
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      toast('sent email');
    }



    return (
        <div className='conatiner w-50 mx-auto'>
            <h2 className="text-danger text-center mt-5">Pls Log in Here</h2>

            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  
  <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
    Log In
  </Button>
</Form>
{errorElement}
<p>New to My Warehouse?<Link to="/register" className="text-danger pe-auto text-decoration-none" onClick={navigateRegister}>Register Here </Link></p>
<p>Forget Password?<button className='btn btn-link text-danger pe-auto text-decoration-none' onClick ={resetPassword}>Reset Password</button></p>
        <Sociallogin></Sociallogin> 
        <ToastContainer></ToastContainer>   
        </div>
    );
};

export default Login;