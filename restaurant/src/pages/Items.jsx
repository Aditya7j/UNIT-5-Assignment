import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import FoodCart from '../components/FoodCart'

const Container  = styled.div`
    width: 100%;
    height: 100vh;
    
`
const Br = styled.br`
    
`
const Items = () => {
  return (
    <Container>
       <Navbar/>
        <Br/>
       <FoodCart/>
    </Container>
  )
}

export default Items