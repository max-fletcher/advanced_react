import React, { useState } from 'react';

const UseStateBasics = () => {
   // A state is like a variable inside the data function in vue. To make it reactive, you have to set an initial value and a function to alter it.
   // console.log(useState("Hello World"));  // To see what a useStatelooks like. It contains an array with index of 0 and 1. The 0 index takes a
   // default value that can be used to render the page on initial load. Index 1 takes a function. The function should contain logic on what should
   // happen when the useState 1 Index is called. You can choose to replace/alter the value stored in index 0 using that function if you wish. If you
   // perform certain operations, it will store the changed/altered value inside the index 0.
   // (e.g a counter can be made using useState if you want. Watch PedroTech's video on useState.)

   const [text, setText] = useState("Random Title") // using array destructuring. It will store 'random title' in text variable in
   // state indexed 0 and leaves setText as empty. This is the default way of declaring a state (i.e index should have name format "var" and 1 index
   // should have name format like "setVar"). Using array destructuring, "var" should have a default value and "setVar" should be empty that we will
   // define later using the "setVar" variable.

   const handleClick = () => {
      if(text == "Random Title"){
         setText("Hello World")
      }
      else{
         setText("Random Title")
      }
   }

   return (
      <React.Fragment>
         <h1>{text}</h1>
         <button className="btn" onClick={handleClick}> Change State </button>
      </React.Fragment>
   );
};

export default UseStateBasics;
