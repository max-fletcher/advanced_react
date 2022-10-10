import React, { useEffect } from 'react';

const Modal = (props) => {

  useEffect(()=>{
    setTimeout(()=>{
      props.closeModal()
    }, 3000)
    return () => { // for some reason, the cleanup here was not included in John's tutorial. Need to know why he didn't do it.
      console.log('cleanup');
      clearTimeout();
    };
  })

  return <div className='modal'>
    <p>
      {props.modalContent}
    </p>
  </div>;
};

export default Modal;
