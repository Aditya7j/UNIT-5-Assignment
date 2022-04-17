import  React,{  useState } from "react";

export const Inventory = () => {
  const[inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });

  const [books,setBooks] = useState(10)
  const [notebooks,setNotebooks] = useState(13)
  const [pens,setPens] =useState(40)
  const [inkpens,setInkPens] = useState(78)

  
    // Create add and remove functions here that changes the
    // state.

    const addItems = (value)=>{
      if(value==="books"){
        setBooks(books+1)
      }
      else if(value==="notebooks") setNotebooks(notebooks+1)
      else if(value==="pens") setPens(pens+1)
      else if(value==="inkpens") setInkPens(inkpens+1)
   

    }

    const decItems = (value)=>{
      if(value==="books" && books>=0){
        setBooks(books-1)
      }
      else if(value==="notebooks" &&notebooks>=0) setNotebooks(notebooks-1)
      else if(value==="pens"&&pens>=0) setPens(pens-1)
      else if(value==="inkpens"&&inkpens>=0) setInkPens(inkpens-1)
   

    }


    
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: {books}</span>
        <button className="circlularButton" onClick={()=>{addItems("books")}}>+</button>
        <button className="circlularButton" onClick={()=>{decItems("books")}}>-</button>
        <span>{books}</span>
      </div>
      <div className="items">
        <span>Notebooks:{notebooks} </span>
        <button className="circlularButton" onClick={()=>{addItems("notebooks")}}>+</button>
        <button className="circlularButton" onClick={()=>{decItems("notebooks")}}>-</button>
        <span>{notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: {pens}</span>
        <button className="circlularButton"onClick={()=>{addItems("pens")}} >+</button>
        <button className="circlularButton" onClick={()=>{decItems("pens")}}>-</button>
        <span>{pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>{addItems("inkpens")}}>+</button>
        <button className="circlularButton" onClick={()=>{decItems("inkpens")}}>-</button>
        <span>{inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {books+notebooks+pens+inkpens}
    </div>
  );
};

