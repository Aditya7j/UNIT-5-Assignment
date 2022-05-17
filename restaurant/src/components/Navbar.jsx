import React from 'react'
import styled from "styled-components"



const Container = styled.div`
height: 70px;
background-color: #541690;
`
const Wrapper = styled.div`
padding: 10px 20px;
align-items: center;
display: flex;

`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Lang = styled.span`
    font-size: 18px;
    cursor: pointer;
    font-weight: 400;
    color: #FF4949;

  
`
const SearchConatiner = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

`
const Input = styled.input`
    border: none;
    outline: none;
   

`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    color: #FF4949;

    
`
const Right =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`

const MenuList = styled.option `
    margin: 10px;
    color: #FF4949;
`

const Navbar = () => {

  return (
    <Container>
        <Wrapper>
            <Left>
                <Lang>FOOD</Lang>
                <SearchConatiner>
                    <Input placeholder='search'/>
                    
                </SearchConatiner>
            </Left>
            <Center>
                <Logo>FOOD CAFE.</Logo>
            </Center>

            <Right>
                <MenuList>Log In</MenuList>
                <MenuList>Sign In</MenuList>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar