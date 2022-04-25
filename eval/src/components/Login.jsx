import { useState } from "react";
import { Navigate } from "react-router-dom";

export const Login = () => {
    //  use reqres to log user in.
    const [username,setUserName] =useState()
    const [password,setPassword] =useState()

     async function login(){
      
      const item = {username,password}
      let result = await fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(item)
      });
      result = await result.json()
      return <Navigate to ="/"/>

    }
  
    return (
      <form className="loginform">
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
          onChange={(e)=>setUserName(e.target.value)}
        />
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={login} type="submit" value="SIGN IN" className="login_submit">Submit</button>
      </form>
    );
  };