import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



export const EmployeeDetails = () => {

    const init = {
        task:[]
    }

    const {id} =useParams();
    const [employee,setEmployee] = useState(init)

    useEffect(()=>{
        getData()
    },[id])

    const getData = async ()=>{
        const {data} = await axios.get(`http://localhost:8080/employee/${id}`)
        console.log(data)
        setEmployee({...employee,...data})
    }


    return (
        
      <div className="user_details">
        <img className="user_image" src={employee.image} />
        <h4 className="user_name">{employee.username}</h4>
        <span className="user_salary">${employee.salary}</span>
        <span className="tasks">
            {employee.task.map((e,i)=>(

                <li className="task" key={i}>{e}</li>
            ))}
        </span>
        Status: <b className="status">{employee.status}</b>
        Title: <b className="title">{employee.title}</b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        <button className="promote">promote</button>
      </div>
     
    );
  };