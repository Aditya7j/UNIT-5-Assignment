import React, { useEffect, useRef, useState } from 'react'
import "./Product.css";
import axios from "axios";
import {useSearchParams} from "react-router-dom";
import Navbar from './Navbar';

const Product = () => {


    const [item,setItem] = useState([]);
    let [searchParams,setSearchParams] = useSearchParams()
    const [page,setPage] =useState(Number(searchParams.get("page")||1))

    const [off,setOff] =useState("off")
    const check = useRef()
    const [status,setStatus] =useState(true)
    const [asc,setAsc] = useState("ASC")


    useEffect(()=>{
        getData(asc,off)
    },[page,asc,off])

    useEffect(()=>{
        setSearchParams({page,asc,off})
      },[page,setSearchParams,asc,off])

      

    
    const getData = async()=>{
          axios.get(`http://localhost:8080/products?_limit=8&_page=${page}`,{params:{_sort:"price",_order:asc}}).then((res)=>{
            console.log(res.data)
            setItem([...res.data])
            check.current = res.data
            
        })
    }

    const handlebuttonasc = ()=>{
        setStatus(false)
        setAsc("ASC")
    }
    const handlebuttondsc = ()=>{
        setStatus(true)
        setAsc("DESC")
    }
  return (
      <>
      <Navbar/>
      <div className='filter'>
          <div className='filter1'>
              {status?<button onClick={handlebuttonasc}>Low to High</button>:<button onClick={handlebuttondsc}>High to Low</button>}
          </div>
          <div className='filter2' onChange={(event)=>{ 
              const item = check.current.filter((e,i)=>{
                if(e.rating==event.target.value){
                    return e
                  }
              })
              setItem(item)
          }}>
          <select >
                  <option value="">Filter by Star</option>
                  <option value="1 star">one star</option>
                  <option value="2 star">two star</option>
                  <option value="3 star">three star</option>
                  <option value="4 star">four star</option>
                  <option value="5 star">five star</option>
              </select>
          </div>
          <div className='filter3'>
              <select onChange={(e)=>setOff(e.target.value)}>
                  <option value="">Filter by Offer</option>
                  <option value="10off">10% Off</option>
                  <option value="20off">20% Off</option>
                  <option value="30off">30% Off</option>
                  <option value="40off">40% Off</option>
                  <option value="50off">50% Off</option>
              </select>
          </div>
      </div>
    <div className='productdiv'>
        {item.map((e)=>(
            <div className='productright' key={e.id}>
                <img className='prodimg' src={e.img} alt='err'/>
                <p className='tp'>{e.title}</p>
                <span className='ts'>Rs.{e.price}</span>
                <span className='tss'>Rs.{e.price1}</span>
                <span className='tsss'>{e.offer}</span>
                <p className='tpp'>{e.star}</p>
                
            </div>
        ))}
    </div>
    <button className='btn' disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
    <button className='btn1' onClick={()=>setPage(page+1)}>NEXT</button>
    </>
  )
}
export default Product