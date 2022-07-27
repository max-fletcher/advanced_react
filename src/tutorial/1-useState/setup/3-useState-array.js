import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people, setPeople] = React.useState(data)

  // This block is the same as the block below
  // function removePerson(id){
  //   console.log(id)
  //   let newPeople = people.filter(
  //     function(person){
  //       return person.id !== id 
  //     }
  //   )
  //   setPeople(newPeople)
  // }
  
  const removePerson = (id) => {
    console.log(id)
    let newPeople = people.filter((person) => { return person.id !== id })
    setPeople(newPeople)
  };

  return (
      <React.Fragment>
        <h2>useState array example</h2>
        {
          people.map((person) => {
            const {id, name} = person  // using destructuring to extract id and name from the peson object and temporarily store it in respective variable
            return (
                <div key={id} className="item">
                  <h4> {name} </h4>
                  <button onClick={ () => removePerson(id) }> Remove Person </button>
                </div>
              )
          })
        }
        <button className="btn" onClick={ () => setPeople([]) }> Clear Items </button>
      </React.Fragment>
    );
};

export default UseStateArray;
