import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList';
import { useDispatch } from 'react-redux';
import { getTodos } from '../redux/action';

const Todo = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    getTodos(dispatch)
  },[])
  return (
    <div>
        <TodoInput/>
        <br/>
        <TodoList/>
        
    </div>
  )
}

export default Todo