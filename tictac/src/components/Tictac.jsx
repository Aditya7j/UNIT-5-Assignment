import "./Tictac.css"
import {useState} from "react";

const Tictac = () => {

    const [turn,setTurn] =useState("X");
    const [box,setBox] =useState(Array(9).fill(""));
    const [winner,setWinner] = useState();

    

    const handleWinner = (Boxes)=>{
            let wins = {
                up:[
                    [0,1,2],
                    [3,4,5],
                    [6,7,8]
                ],
                down:[
                    [0,3,6],
                    [2,5,8],
                    [1,4,7]
                ],
                diagonal:[
                    [0,4,8],
                    [2,4,6]
                ],

            }

            for(let win in wins){
                wins[win].forEach((pattern)=>{
                    if(
                        Boxes[pattern[0]]==="" ||
                        Boxes[pattern[1]]==="" ||
                        Boxes[pattern[2]]==="" 
                    ){}
                    else if(
                        Boxes[pattern[0]]=== Boxes[pattern[1]] &&
                        Boxes[pattern[1]]=== Boxes[pattern[2]]
                    ){
                        setWinner(Boxes[pattern[0]])
                    }
                    
                    
                })
            }
    }

    const handleClick =(count)=>{
        if(box[count] !==""){
            alert("Already filled");
            return;
        }
        // alert(count);
        let Boxes = [...box]

        if(turn === "X"){
            Boxes[count] = "X"
            setTurn("O")
        }
        else{
            Boxes[count] = "O"
            setTurn("X")
        }
        handleWinner(Boxes)
        setBox(Boxes)
        
    }

    const handleRestart =()=>{
        setWinner(null);
        setBox(Array(9).fill(""))
    }

    

    const Box = ({count})=>{
        return <td onClick={()=>handleClick(count)}>{box[count]}</td>
    }
  return (
    <div className="container">
        <table> 
            <h1>Turn:{turn}</h1>
            <tbody>
                <tr>
                    <Box count={0}/>
                    <Box count={1}/>
                    <Box count={2}/>
                </tr>
                <tr>
                    <Box count={3}/>
                    <Box count={4}/>
                    <Box count={5}/>
                </tr>
                <tr>
                    <Box count={6}/>
                    <Box count={7}/>
                    <Box count={8}/>
                </tr>
            </tbody>
        </table>
        {winner &&(
            <>
                <p className="p">{winner} is the winner </p>
                <button className="btn" onClick={()=>handleRestart()}>Play Again</button>
            </>
        )}

        
    </div>
  )
}

export default Tictac