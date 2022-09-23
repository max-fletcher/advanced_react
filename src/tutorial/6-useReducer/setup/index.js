import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [name, setName] = useState("")
  const [people, setPeople] = useState(data)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    if(name){
      setShowModal(true)
      setPeople([...people, {id: new Date().getTime().toString(), name: name}])
      setName("")
    }
    else{
      setShowModal(true)
    }
  }

  return(
    <>
      <h2>useReducer</h2>
      {showModal && <Modal />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
        </div>
        <button type="submit"> Add Person </button>
      </form>
      {people.map((person) => {
        return <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      })}
    </>
  );
};

export default Index;
