import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'

// reducer function
const reducer = (state, actions) => {
  console.log(state);
  if(actions.type === "ADD_PERSON"){
      const newPeople = [...state.people, actions.payload] // using spread operator to add person to the end of people array

      // the object returned here is the new state. We are again using object destructuring to edit data before returning it. It is changing
      // everything inside the initial state object.
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'Person Added !'
      }
  }
  else if(actions.type === "NO_VALUE"){
      // the object returned here is the new state. We are again using object destructuring to edit data before returning it. It is changing
      // everything except people.
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'Please Enter Value Before Submitting !'
      }
  }
  else if(actions.type === "CLOSE_MODAL"){
      return {
        ...state,
        isModalOpen: false
      }
  }
  else if(actions.type === "REMOVE_PERSON"){
    const newPeople = state.people.filter(
      (person) => {
        return person.id !== actions.payload
      }
    )
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Person Removed !'
    }
}
  // better to throw an error to spot bugs. Returning a valid state by default is not good practice since it will fool you into thinking everything is OK.
  throw new Error('No matching action type')
  // return state  // returning this is not good practice as mentioned above
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
      const newPerson = {id: new Date().getTime().toString(), name: name}
      // dispatch an action from reducer caled ADD_PERSON. From there, we need to return a new state. Not returning a new state will cause the reducer
      // to throw errors.
      // also appending a new person to the ADD_PERSON so it can be accessed from the reducer and then pushed to the data array.
      dispatch({type : "ADD_PERSON", payload: newPerson})
      setName('')
    }
    else{
      dispatch({type : "NO_VALUE"})
    }
  }

  const close_modal = () => {
    dispatch({type : "CLOSE_MODAL"})
  }

  return(
    <>
      <h2>useReducer</h2>
      {/* passing state.modalContent into the modal so that  */}
      {state.isModalOpen && <Modal closeModal={close_modal} modalContent={state.modalContent} />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
        </div>
        <button type="submit"> Add Person </button>
      </form>
      {state.people.map((person) => {
        return(
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            {/* dispatch here is used to close the modal using reducer described above */}
            <button onClick={() => {dispatch({type: 'REMOVE_PERSON', payload: person.id})}}>Remove</button>
          </div>
        )
      })}
    </>
  );
};

export default Index;
