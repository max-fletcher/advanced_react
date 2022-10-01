import React, { useEffect } from 'react';

const Modal = (props) => {
  useEffect(()=>{
    setTimeout(()=>{
      props.close_modal()
    }, 3000)
  })

  return <div className='modal'>
    <p>
      {props.modalContent}
    </p>
  </div>;
};

export default Modal;
