import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios"

export const ProductsDetailsPage = () => {
     const {id}=useParams()

     const [product,setProducts] =useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/products/${id}`).then((res)=>{
          console.log(res.data)
        
            setProducts(res.data)
        })

    },[id])

    return (
      <>
        <div
          style={{
            display: "flex",
            paddingTop: "50px",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <img width="500px" src={product.img} alt="" />
          <div className="productDetails" style={{ padding: "20px" }}>
            <div>
              <h2 className="productName">🎁{product?.name}</h2>
              <h3 className="productPrice">Rs{product.price}</h3>
            </div>
            
            <div style={{ width: "700px", paddingLeft: "30px" }}>
              {/* Show Product specification here */}
              
            </div>
          </div>
        </div>
      </>
    );
  };