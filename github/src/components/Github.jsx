import axios from "axios";
import React, { useEffect, useReducer,useState } from "react";

const initState = {
  loading:true,
  error:false,
  data:null
}

const gitActions = {
  "fetch":"fetch",
  "success":"success",
  "faliure":"faliure"
}

const GitReducer = (state,action)=>{
  switch(action.type){
    case gitActions.fetch:{
      return ({
        ...state,
        loading:true,
        error:false,
        data:null
      })
    }
    case gitActions.success:{
      return ({
        ...state,
        loading:false,
        error:false,
        data:action.payload
      })
    }
    case gitActions.faliure:{
      return ({
        ...state,
        loading:false,
        error:true
      })
     
    }
    default:
        return state

  }
}



  function Github(){
    const [{loading,error,data},dispatch] = useReducer(GitReducer,initState);
    const [query,setQuery] =useState("masai");

    useEffect(()=>{
      fetchData(query)
    },[query])

    const fetchData = (q="masai")=>{
      dispatch({
        type:gitActions.fetch
      })
      axios.get(`https://api.github.com/search/users`,{params:{q:q}}).then((res)=>{
        dispatch({
          type:gitActions.success,
          payload:res.data
        })
      })
      .catch((err)=>{
        dispatch({
        
          type:gitActions.faliure
        })
      })
    }
    console.log(data)

    const handleClick =(query)=>{
        setQuery(query)
        console.log(query)
        
    }
    return (
      <div className="main">
        {loading && <div>Loading</div>}
        {error && <div>Error</div>}
        <SearchBox handleClick={handleClick }/>
        <br/>
        {data?.items.map((item)=>(
          <div className="cont" key={item.id}>
              <img width="100px" src={item.avatar_url} alt="icon"/>
              <h2>{item.login}</h2>
          </div>
        ))}
      </div>
  )
}

const SearchBox = ({handleClick})=>{
    const [text,setText] =useState("");
    return (
        <div>
            <input className="input" type="text" palceholder="Enter Username" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button className="btn" onClick={()=>handleClick(text)}>Search</button>      
        </div>
    )
}

export default Github