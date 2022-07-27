import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0)

  const increase = () => {
    setValue(value + 1)
  }

  const decrease = () => {
    setValue(value - 1)
  }

  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout( () => {
      // This will cause errors. If you press Complex Increase 3 times within 2 sec, it will trigger only once
      // setValue(value + 1)

      // This will overcome the above stated problem. If you use a function inside a setter function of useState, you will not have errors if the state changes according to an
      // asynchronous function(in this case, settimeout is the asynchronous function). The parameter sent to the inner function will ALWAYS contain the latest set value from the useState.
      setValue((prevState) => {
        console.log(prevState);
        return prevState + 1
      })
    }, 2000)
  }

  return <>
    <h2>useState counter example</h2>

    <section style={{margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1 style={{marginTop: '30px'}}>{value}</h1>
      <button className='btn' onClick={ () => decrease() }>Decrease</button>
      <button className='btn' onClick={ () => reset() }>Reset</button>
      <button className='btn' onClick={ () => increase() }>Increase</button>
      <button className='btn' onClick={ () => complexIncrease() }>Complex Increase</button>
    </section>
  </>;
};

export default UseStateCounter;
