import { useEffect, useState } from "react";

const useLaptops = () => {

    const [products,setProducts] = useState([]);

  useEffect( () => {

    fetch('https://nameless-lowlands-90907.herokuapp.com/laptop')
    .then(res => res.json())
    .then(data => setProducts(data));

  },[products])

  return [products,setProducts]
}

export default useLaptops;