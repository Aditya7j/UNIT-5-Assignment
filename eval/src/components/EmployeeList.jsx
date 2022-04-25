import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom"



export const EmployeeList = () => {

  
const {id} =useParams()
  const [employee,setEmployee] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = async()=>{
    const {data} = await axios.get("http://localhost:8080/employee")
    console.log(data)
    setEmployee([...data])
  }


    return (


      
      <div className="list_container">
        
        <Link to={`/employees/${id}`}>
        {/* On clicking this card anywhere, user goes to user details */}
        {employee.map((e)=>(


        <div className="employee_card" key={e.id}>
          
          <img className="employee_image" src={e.image} />
          <span className="employee_name">{e.employee_name}</span>
          <span className="employee_title">{e.title}</span>
          
        </div>
        
        ))}
        </Link>
   
      </div>
    );
  };