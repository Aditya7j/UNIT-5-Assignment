import React from 'react'
import styled from "styled-components"
import {Search,ShoppingCartOutlined} from "@material-ui/icons"
import {Badge} from '@material-ui/core';


const Container = styled.div`
height: 80px;
background-color: #f5fafd;

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
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    
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

const Logo = styled.img`
    width: 22%;
    height: 20%;
    opacity: 1;
    border-radius: 80%;   
`
const Right =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    
    
`




const Navbar = () => {

    // const quantity = useSelector(state=>state.cart.quantity)

    
    // console.log(quantity)

  return (
    <Container>
        <Wrapper>
            <Left>
                <Lang>IND</Lang>
                <SearchConatiner>
                    <Input placeholder='search'/>
                    <Search style={{color:"grey",fontSize:16}}/>
                </SearchConatiner>
            </Left>
            <Center>
                <Logo src='https://htmlemail.io/img/blog-shopify.jpg'></Logo>
            </Center>
            <Right>
                
                <MenuItem>REGISTER</MenuItem> 
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar