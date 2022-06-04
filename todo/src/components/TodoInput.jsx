import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos, getTodos } from '../redux/action';

const TodoInput = () => {
    const [text,setText] = useState("");
    const dispatch = useDispatch();

    const handleTodos = ()=>{
        addTodos({
            title:text,
            dispatch

        }).then(()=>{
            getTodos(dispatch)
        })
    }

  return (
    <div>
        <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
        <button onClick={handleTodos}>ADD TODO</button>
    </div>
  )
}

export default TodoInput