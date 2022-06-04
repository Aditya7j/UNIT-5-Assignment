import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector(state=>state.todos)
    const loading = useSelector(state=>state.loading)
    // console.log(todos)

  return (
    <div>
        <h3>Todos-Items</h3>
        {loading &&<div>...loading</div>}
        {todos.map((e)=>(
            <div key={e.id}>
                <p>{e.title}</p>
            </div>
            
        ))}
    </div>
  )
}

export default TodoList