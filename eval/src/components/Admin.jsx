import { useEffect,useState } from "react";
import axios from "axios";

export const Admin = () => {
  const [data,setData] =useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/employee").then((res)=>{
        console.log(res.data)
        showdata(res.data)

    })
},[])

function showdata(data){
    setData(data)
}




const [formdata,setFormdata] =useState({
    employee_name:"",
    employee_id:"",
    title:"",
    salary:"",
    image:"",
    username:"",
    password:"",
    task:[],
    status:"",
    team:""

    
})


const handleChange = (e)=>{
  const {name} =e.target;
  setFormdata({...formdata,[name]:e.target.value})
}
const handlesubmit =(e)=>{

    e.preventDefault()
    
    axios.post("http://localhost:8080/employee",formdata).then(()=>{
        console.log(formdata)
        
        
    })
}

    return (
      <form className="createEmployee" onSubmit={handlesubmit}>
        <input type="text" placeholder="Employee Name" name="employee_name" onChange={handleChange} />
        <input type="text" placeholder="Employee id" name="employee_id"  onChange={handleChange} />
        <select name="title" onChange={handleChange}>
          <option onChange={handleChange} value="intern">Intern</option>
          <option onChange={handleChange} value="Jr Software Developer">Jr Software Developer</option>
          <option onChange={handleChange} value="Sr Software Developer">Sr Software Developer</option>
          <option onChange={handleChange} value="Team Lead">Team Lead</option>
        </select>
        <input type="number" placeholder="Salary" name="salary" onChange={handleChange} />
        <input type="text" placeholder="Image" name="image" onChange={handleChange} />
        <input type="text" placeholder="User Name" name="username" onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
        <input
          type="text"
          placeholder="Enter tasks separated by commas"
          onChange={handleChange}
          name="tasks"
        />
        <select name="status" id="status" onChange={handleChange}>
          <option onChange={handleChange} value="">Select Status</option>
          <option onChange={handleChange} value="terminated">Terminated</option>
          <option onChange={handleChange} value="working">Working</option>
        </select>
        <select name="team" id="team" onChange={handleChange}>
          <option onChange={handleChange} value="">Select team</option>
          <option onChange={handleChange} value="frontend">Frontend</option>
          <option onChange={handleChange} value="backend">Backend</option>
          <option onChange={handleChange} value="qa">QA</option>
        </select>
        <input className="createUser" type="submit" value={"submit"} />
      </form>
    );
  };