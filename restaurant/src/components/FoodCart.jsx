import styled from 'styled-components'
import axios from "axios";
import { useEffect, useRef, useState } from 'react';

const Container = styled.div`
  background-color: black;
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  border: 1px solid black;
  background-color: #7F8487;

`
const ImgContainer = styled.div`
  flex: 1;
  margin: 5px;

`
const Image = styled.img`
  width: 100%;
  height: 30vh;
  object-fit: cover;


`
const Slide = styled.p``
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  
`
const MenuItem = styled.select`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    
`
const MenuList = styled.option `
    
`


const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: #fff;
`
const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 200;
  color: #fff;
`
const Price = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: red;
  margin: 5px;
  
`
const Button = styled.button`
    background-color: transparent;
    color: green;
    font-weight: 600;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const Button1 = styled.button`
    margin-left: 42%;
    width: 100px;
    padding: 8px;
    background-color: black;
    color: red;
    border: 1px solid red;
    cursor: pointer;

    &:hover{
      background-color: white;
      color: #111;
    }

`
const Button2 = styled.button`
    margin: 5px;
    width: 100px;
    padding: 8px;
    background-color: black;
    color: red;
    border: 1px solid green;
    cursor: pointer;

    &:hover{
      background-color: white;
      color: #111;
    }
`
const Votes = styled.p`
  color: gold;
`
const Payment = styled.p`
  color: #fff;
`
const Rating =styled.p`
  color:#fff;
`


const FoodCart = () => {
    const [items,setItems]=useState([]);
    const [page,setPage] =useState(1);
    const [sort,setSort] =useState();
    const check =useRef([]);

  

    useEffect(()=>{
        getItems()
    },[page])

    useEffect(()=>{
      
       if(sort==="asc"){
        setItems((prev)=>
            [...prev].sort((a,b)=>a.price-b.price)
        )
      }
      else{
        setItems((prev)=>
        [...prev].sort((a,b)=>b.price - a.price)
        )
      }
    },[sort])

 
    

 
    const getItems = ()=>{
        axios.get(`http://localhost:8080/items?_limit=5&_page=${page}`).then((res)=>{
            setItems(res.data)
            useRef.current = res.data

        })
    }




  return (
    <Container>
                 <MenuItem onChange={e=>setSort(e.target.value)}>
                    <MenuList>Sort by Price</MenuList>
                    <MenuList value="asc">Low to High</MenuList>
                    <MenuList value="dsc">High to Low</MenuList>
                </MenuItem>

                <MenuItem  onChange={(event)=>{
                  const pay = useRef.current.filter((e,i)=>{
                    if(e.payement===event.target.value){
                      return e
                    }
                  })
                  setItems(pay)
                }}>
                <MenuList >Sort by Payment</MenuList>
                <MenuList value="Accept only Card">Card</MenuList>
                <MenuList value="Accept only Cash">Cash</MenuList>
                </MenuItem>

                <MenuItem  onChange={(event)=>{
                
                const item =  useRef.current.filter((e,i)=>{
                    if(e.rating==event.target.value){
                      // console.log(e.rating)
                      // console.log(event.target.value)
                      // console.log(e)
                      return e
                    }

                  })
                  // console.log(items)
                  setItems(item)
                }}>
                <MenuList>Sort by Rating</MenuList>
                <MenuList value="1 star">1 star</MenuList>
                <MenuList value="2 star">2 star</MenuList>
                <MenuList value="3 star">3 star</MenuList>
                <MenuList value="4 star">4 star</MenuList>
                </MenuItem>


    
    <Wrapper>
   
        {items.map((i)=>(
        
            <Slide>
            <ImgContainer>
                <Image src={i.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{i.title}</Title>
                <Desc>{i.desc}</Desc>
                <Votes>votes: {i.votes}</Votes>
                <Rating>{i.rating}</Rating>
                <Payment>{i.payement}</Payment>
                <Price>Rs {i.price}</Price>
                <Button>ORDER ONLINE</Button>
            </InfoContainer>
            </Slide>
))}     
       
    </Wrapper>
    <Button1 onClick={()=>{
           setPage(page-1)
       }}>Prev</Button1>
       <Button2 onClick={()=>{
           setPage(page+1)
       }}>Next</Button2>
</Container>

)
}

export default FoodCart