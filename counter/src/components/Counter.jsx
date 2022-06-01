import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount,reduceCount } from '../redux/action'
const Counter = () => {
    const count  = useSelector(store=>store.count)
    const dispatch = useDispatch()
return (
    
    <div className='main'>
        <h1 className='mainh'>Counter → <span className='mainspan'>{count}</span></h1>
        <button className='mainbtn1' onClick={()=>dispatch(addCount())}>ADD +</button>
        <button className='mainbtn2' onClick={()=>dispatch(reduceCount())}>Reduce -</button>
    </div>
  )
}
export default Counter

