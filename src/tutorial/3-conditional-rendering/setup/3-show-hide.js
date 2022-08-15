import React, { useState, useEffect } from 'react';

// 1st react component
const ShowHide = () => {

  const [show, setShow] = useState(true)

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <h2>show/hide</h2>
      <button className='btn' onClick={() => { toggleShow() }}> Toggle Show </button>
      {show && <Item />}
    </>

  )
};


//2nd react component
const Item = () => {
  // The useState will run once on render to set "size". The useEffect will also run once, but by that time, the Event Listener with "resize" event takes over meaning
  // that every time the browser is resized, window.addEventListener will keep working and will trigger "checkSize" function and in that function, will use "setSize"
  // and keep changing size state/variable causing the size shown in h2. 
  // The cleanup function is ran on unmount to remove the "resize" event.
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return (
    <div style={{marginTop: '2rem'}}>
      <h1>Window: </h1>
      <h2>Size: {size} px</h2>
    </div>
  )
};

export default ShowHide;
