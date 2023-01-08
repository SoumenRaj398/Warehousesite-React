
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Additems from './Pages/Additems/Additems';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Requireauth from './Pages/Login/Requireauth/Requireauth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Notfound from './Pages/Shared/NotFound/Notfound';
import ManageItems from './Pages/Manageitems/Manageitems';
import UpdateItem from './Pages/UpdateItem/UpdateItem';
import MyItems from './Pages/MyItems/MyItems';
import Aboutus from './Pages/AboutUS/Aboutus';
import Myself from './Pages/Myself/Myself';

function App() {
  return (
    <div>
     

      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element ={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
        <Route path="/myself" element={<Myself></Myself>}></Route>
        <Route path ="/product/:id" element={
        <Requireauth>
          <UpdateItem></UpdateItem>
          </Requireauth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/checkout" element ={
          <Requireauth> 
            <Checkout></Checkout>
            </Requireauth>
          }></Route>
           <Route path="/additems" element ={
          <Requireauth> 
            <Additems></Additems>
            </Requireauth>
          }></Route>
           <Route path="/manage" element ={
          <Requireauth> 
            <ManageItems></ManageItems>
            </Requireauth>
          }></Route>

        <Route path="*" element = {<Notfound></Notfound>}></Route>
      </Routes>

      <Footer></Footer>

      
    </div>
  );
}

export default App;
