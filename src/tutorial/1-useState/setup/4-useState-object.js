import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'peter',
    age : 25,
    message : 'random message'
  })

  const changeMessage = () => {
    console.log("HIT");
    setPerson({ ...person, message: 'hello world'}) // changes the message variable inside person object while keeps the rest of the variables the same(uses spread operator)
  }

  // the syntax below is a shorthand for returning a react fragment its the same as return(<React.Fragment> ... </React.Fragment>)
  return <>
    <h2>useState object example</h2>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={ () => changeMessage() }> Change Message </button>
  </>
}

export default UseStateObject;
