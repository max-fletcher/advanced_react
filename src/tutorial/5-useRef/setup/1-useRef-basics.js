import React, { useEffect, useRef } from 'react';

// preserves value (Hard Refresh does not preserve it though)
// DOES NOT trigger re-render i.e on saving(Ctrl + s)
// target DOM nodes/elements
// works very similar to 'ref' prop in vue

const UseRefBasics = () => {

  const refContainer = useRef(null)
  const divContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Some Message');
    console.log(refContainer.current.value);

    // this will spit out the entire div with ref "divContainer" in console.
    console.log(divContainer.current);
  }

  useEffect(() => {
    // used to focus the input field without causing re-render.
    refContainer.current.focus();
  })

  return (
    <>
      <h2>useRef</h2>
      <form className="form" onClick={handleSubmit}>
        <div>
          <label> Input Field </label>
          <input type="text" ref={refContainer} />
          <button type="submit"> Submit </button>
        </div>
      </form>
      <div style={{display: "none"}} ref={divContainer}>Some Random Div</div>
    </>
  );
};

export default UseRefBasics;
