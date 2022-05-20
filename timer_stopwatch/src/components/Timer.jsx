import "./Timer.css"
import {useEffect, useState} from "react";

const Timer = () => {

  const [time,setTime] =useState(0);
  const [status,setStatus] = useState(false);

  useEffect(()=>{
        let interval = null;

        if(status){
            interval = setInterval(()=>{
                setTime(prev=>prev+10)
            },10)
        }
        else{
            clearInterval(interval)
        }

        return () => clearInterval(interval)
  },[status])


  return (
    <div className="main">
        <h1 className="h1">Stopwatch</h1>
        <hr className="hr"/>
        <div className="middle">
            <span className="span">{("0"+ Math.floor((time/60000) % 60)).slice(-2)}</span><span className="span1">:</span>
            <span className="span">{("0"+ Math.floor((time/1000) % 60)).slice(-2)}</span><span className="span1">:</span>
            <span className="span">{("0"+((time/10) % 100)).slice(-2)}</span>
            <span></span>
            <span></span>
        </div>
        <div>
            {!status && time===0 && (
            <button className="btn" onClick={()=>setStatus(true)}>Start</button>
            )}

            {status && (
                <button className="btn" onClick={()=>setStatus(false)}>Stop</button>
            )}

            {!status && time !== 0 &&(
                <button className="btn" onClick={()=>setStatus(true)}>Resume</button>
            )}

            {!status && time > 0 && (
                <button className="btn" onClick={()=>setTime(0)}>Reset</button>
            )}
              
        </div>
    </div>
  )
}

export default Timer