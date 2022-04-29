
import styled from "styled-components"
import {popularProducts} from "../data"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Product from "./Product"


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = () => {
  



  return (
    <Container>
      <Navbar/>
        { popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        )) 
      }
      <Footer/>
    </Container>
  )
}

export default Products