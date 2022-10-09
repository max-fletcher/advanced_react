import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext()
//two components - Provider and Consumer. Nowadays, Consumer is not needed with new react versions.

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    // value is a reserved keyword for useContext. Do not cahnge it and expect it to work
    // You can pass an obect into 'value' to get access to multiple variables/functions in deeply nested components. Otherwise, there is no other way
    // to pass multiple values using useContext
    <PersonContext.Provider value={{removePerson, people}}>
    {/* <PersonContext.Provider value={removePerson}> */}
      <h3>prop drilling</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  // const {people} = useContext(PersonContext) // This also works(destructuring) instead of the line below.
  const people = useContext(PersonContext).people
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  // const {people} = useContext(PersonContext) // This also works(destructuring) instead of the line below.
  // const { removePerson } = useContext(PersonContext)
  const removePerson = useContext(PersonContext).removePerson // store removePerson function that was passed down in PersonContext inside a variable
  // console.log(data);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
