import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../../../images/logo.jpg";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { PhoneAuthCredential, signOut } from 'firebase/auth';

const Header = () => {

  const [user]=useAuthState(auth);

  const handleSignOut =  () => {
    signOut(auth);
  }
    return (
        <header>

<Navbar bg="info pt-5 pb-5" variant="dark" sticky="top" expand="lg">
  <Container>
    <Navbar.Brand href="/home">
        <img src ={logo} height ="50"></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className='h4 text-dark' as={Link} to="/home"  href="">Home</Nav.Link>
        <Nav.Link className='h4 text-dark' as={Link} to="/blogs"  href="">Blogs</Nav.Link>
        <Nav.Link className='h4 text-dark' as={Link} to="/aboutus"  href="">About Us</Nav.Link>
        <Nav.Link className='h4 text-dark' as={Link} to="/myself"  href="">Myself</Nav.Link>
        {
           user && <>

        <Nav.Link className='h4 text-dark' as={Link} to="manage">Manage Items</Nav.Link>
        <Nav.Link className='h4 text-dark'  as={Link} to ="additems">Add Items</Nav.Link>
        <Nav.Link className='h4 text-dark'  as={Link} to ="myitems">My Items</Nav.Link>

         </>

        }
        
      
        { user?

        <button className="h3 text-dark btn btn-link  text-decoration-none" onClick={handleSignOut}>SignOut</button>


         :
          
          <Nav.Link className='h4 text-dark' as={Link} to ="/login">Log IN</Nav.Link>}
        <NavDropdown   className='h4 text-dark' style={{color: "#FFF"}} title="Others" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Best Supplier</NavDropdown.Item>  
        </NavDropdown>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </header>
    );
};

export default Header;