import React, {  useState } from 'react'
import TodoList from './TodoList'
import swal from "sweetalert"
const CreateTodo = () => {

    const[todo,setTodo] =useState({title:"",done:"false"})
    const[todoArr,setTodoArr] =useState([])

    let  todos = JSON.parse(localStorage.getItem("todos"))||todoArr;
    

    const onChange=(event)=>{
        const {value} = event.target;
        const obj ={}
        obj["title"] = value
        obj["done"] =false;
        setTodo(obj)

    }

    const addTodo = (event)=>{
        const {name} = event.target;
        if(event.key==="Enter"||name==="addTodo"){
            if(todo.title !==""){
                todos.unshift(todo)
                localStorage.setItem("todos",JSON.stringify(todos))
                setTodo({title:"",done:false})
            }
            else{
                swal("Oops","Please write todo first","error")
            }
        }
    }

    const completeTodo =(i)=>{
        if(todos[i]["done"] !==true){
            todos[i]["done"]=true;
            localStorage.setItem("todos",JSON.stringify(todos))
            setTodoArr(todos)
            swal("Good job!","Todo Completed","success")
        }
        
    }

    const deleteTodo =(i)=>{
        swal({
            title:"Are your Sure",
            text:"Once deleted,you will not be able to recover this todo",
            icon:"warning",
            buttons:true,
            dangerMode:true
        }).then((res)=>{
            if(res){
                todos.splice(i,1)
                
                localStorage.setItem("todos",JSON.stringify(todos))
                setTodoArr(todos)
                
            }
            
        })
        
        
    }

  return (
      <>
    <div className='box'>
        <div><h1>TODO APP</h1></div>
        <div className='text-add'>
            <input type="text" placeholder='Write here...'name='todo' value={todo.title} onKeyPress={addTodo} onChange={onChange}/>
            <button className='btn-addtodo' name='addTodo' onClick={addTodo} >+</button>
        </div>
    </div>
    <TodoList todoArr={todoArr}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}/>
    
    </>
  )
}

export default CreateTodo