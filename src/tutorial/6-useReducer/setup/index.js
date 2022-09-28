import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
const reducer = (state, actions) => {

}

// default values for reducer
const defaultState = {
  people: [], // contains data as an array
  isModalOpen: false, // controls when the modal is open
  modalContent: 'Hello World' // contains modal message
}

const Index = () => {
  const [name, setName] = useState("")
  // 'state' is the name of the reducer. The values inside the reducer can be accessed using say 'state.user'(dot syntax). Dispatch contains the access
  // to the functions that ae inside the actions. The useRecuder takes 2 args. 1st is the reducer function that contains all the actions and the 2nd
  // contains the initial state of the variables/states inside the reducer.
  const [state, dispatch] = useReducer(reducer, defaultState)

  // commented out since we will be using useReducer
  // const [people, setPeople] = useState(data)
  // const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    if(name){

    }
    else{
      
    }
  }

  return(
    <>
      <h2>useReducer</h2>
      {/* passing state.modalContent into the modal so that  */}
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
        </div>
        <button type="submit"> Add Person </button>
      </form>
      {state.people.map((person) => {
        return <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      })}
    </>
  );
};

export default Index;
