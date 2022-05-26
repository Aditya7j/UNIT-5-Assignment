
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [prod,setProduct] =useState([]);

  useEffect(()=>{
    axios.get("https://reqres.in/api/products").then(({data:{data}})=>{
      console.log(data)
      setProduct([...data])
    })
  },[])
  return (
    <>
      <div
        style={{
          
          
          
        }}
      >
        {/* Iterate over products and show links */}
        {prod.map((el) => {
          return <Link to={`${el.image},${el.name}`}>{/* Show product image and name */}</Link>;
        })}
        <h1 style={{color:"red"}}>WELCOME TO HOME PAGE</h1>
        <img src="https://media.istockphoto.com/photos/online-shopping-and-delivery-service-concept-paper-cartons-in-a-cart-picture-id868776554?k=20&m=868776554&s=170667a&w=0&h=AprCy0543BExJwTqK_b5ErKO-u-XtRZZg8JGjj1m3S0="/>

        <p style={{color:"green"}}>Shopping App</p>
        
      </div>
    </>
  );
};