import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// Basically the equivalent of "created()"/ "mounted()" lifecycle hook or "computed properties" for vue

const UseEffectBasics = () => {

  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log("Call useEffect", value == 1);
    console.log(value);
    if(value == 1){
      console.log("New message triggered.");
      document.title = `New Message (${value})`
    }

  }, [value])  // Use effect can take an array as 2nd parameter. The array determines which values will trigger the useEffect Hook. An empty array
          // means it will trigger only on initial render/page-load. Not providing the 2nd parameter will cause it to trigger if ANYTHING changes.
  console.log("render component");

  useEffect(() => { // Is called only on first render
    console.log("Call useEffect on first render only");
  }, [])

  const incrementValue = () => {
    setValue( (oldValue) => {
      return (oldValue + 1)
    })
  }

  return <>
    <h2>useEffect Basics</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={ () => { incrementValue() }}> Increase </button>
  </>
};

export default UseEffectBasics;