import React from "react";
import { useState } from "react";

export default function Textform(props) {
  const [Text,setText]=useState("");
  const handleUpClick=()=>{
    // alert("Convert to Uppercase was clicked");
    let newText=Text.toUpperCase();
    setText(newText)
    // setText("Text Changed")
  }

  const handleDownClick=()=>{
    
    let newText=Text.toLowerCase();
    setText(newText)
  }
  const handleOnChange=(event)=>{
    console.log("onChange was clicked");
    setText(event.target.value)
  }
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" id="myBox" value={Text} onChange={handleOnChange}  rows="8"></textarea>
      {/* onChange is necessary , to listen for onChange is necessary so that we can type in the box/form */}
      {/* here if we put rows="x" then it means that the box will adjust itself to take input for x  number of rows */}
    </div >
    <div className="container ">

    <button className="btn btn-primary mx-4 my-2" onClick={handleUpClick}>Convert to uppercase 
    </button>
    <button className="btn btn-primary mx-2 " onClick={handleDownClick}>Convert to uppercase 
    </button>
    
    </div>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>Character count:{Text.length} & Words Count : {Text.split(" ").length} </p>
    </div>

    </>
  );
}
