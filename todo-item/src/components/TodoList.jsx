import React from 'react'

const TodoList = ({todoArr,completeTodo,deleteTodo}) => {
   
   

     todoArr =JSON.parse(localStorage.getItem("todos"))||todoArr
  return (
    <div className='abc'>
        <ul>
            {todoArr && todoArr.length>0 ?
            todoArr.map((el,i)=>(
            <li key={i}>
            <div className={el["done"]?"line-through":null}>{el.title}</div>
            <div className='addtodo'>
                <i title='Complete' onClick={()=>completeTodo(i)} className={`fas fa-check-circle pointer ${el["done"]?"green":"blue"}`}/>
                <i title='Delete' onClick={()=>{deleteTodo(i)}} className='fas fa-trash-alt pointer'/>
            </div>
            </li>

            )):null
            }
        </ul>
    </div>
  )
}

export default TodoList