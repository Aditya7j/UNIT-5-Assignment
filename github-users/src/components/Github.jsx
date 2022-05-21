import {useEffect, useState} from "react";
import axios from "axios";

const Github = () => {

    const [loading,setLoading] =useState(true);
    const [error,setError] =useState(false);
    const [data,setData] =useState([]);
    const [query,setQuery] =useState("masai");
    const [page,setPage] =useState(1);

    useEffect(()=>{
        getData(query,page)
        
    },[query,page])

    const getData = async(q="Aditya7j")=>{
        try{
            const {data} = await axios.get(`https://api.github.com/users/${q}/repos`,{params:{q:q,per_page:5,page}})
            console.log(data)
            setLoading(false)
            setData([...data])
        }
        catch(err){
            setError(true)
            setLoading(false)
            console.log(err)
        }
    }

    const handleClick =(query)=>{
        setQuery(query)
        console.log(query)
        
    }
    
  return (
    <div>
        <h1>Github users</h1>
        {loading && <div>...loading</div>}
        {error && <div>...error</div>}
        <SearchBox handleClick={handleClick }/>
        {data.map((e)=>(
            <div key={e.id} className="main">
                <h1 className="h1">{e.full_name}</h1>
                <p className="p">{e.visibility}</p>
            </div>
            
            
        ))}
        
        <button className="btn"  onClick={()=>{
           setPage(page-1)
       }}>Prev</button>
       
       <button className="btn" onClick={()=>{
           setPage(page+1)
       }}>Next</button>
       <Pagination currentPage={page} lastPage={5} onPageChange={setPage}/>
        
        {/* <button onClick={()=>setLoading(!loading)}>Toggle</button> */}
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

const Pagination = ({
    currentPage,
    lastPage,
    onPageChange

})=>{
    const arr = new Array(lastPage).fill(0)
    return (
        <div>
            {
                arr.map((item,page)=> <button className="btn1" disabled={(page+1)===currentPage} 
                        onClick={()=>onPageChange(page+1)}>{page+1}
                        </button>)
            }
           
        </div>
    )
}


export default Github