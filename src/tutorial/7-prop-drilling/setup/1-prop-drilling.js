import React, { useState } from 'react';
import { data } from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

// Prop drilling is used to pass down a function or state into a deeply nested component especially if the outer component is generating the inner
// component. Otherwise, there is no other way of doing so. The only other way is to use contextAPI which is the recommende way.

// In this example, we drill in the following order: main return JSX->List->SinglePerson. Though List has no business with the "removePerson" function,
// there isn't any other way if we choose not to use contextAPI. We can also choose to pass 'removePerson' into 'List' component, but that also retains
// the same problem instead of fixing it.

const PropDrilling = () => {

  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    setPeople((people) => {
        return people.filter((person)=>{
          return person.id !== id
        })
    })
  }

  // const removePerson = (id) => {
  //   setPeople((people) => {
  //     return people.filter((person) => person.id !== id);
  //   });
  // };

  // declaring a list component here instead of importing it from a separate file outside
  const List = (props) => {
    // console.log(props.people);
    return(
      <>
        {props.people.map((person) => {
          return (
            <SinglePerson key={person.id} person={person} removePerson={removePerson} />
          )
        })}
      </>
    )
  }

  // declaring a single_person component here instead of importing it from a separate file outside
  const SinglePerson = (props) => {
    // console.log(props.person.id, props.person.name);
    return(
      <>
        <div className='item'>
          <h4>{props.person.name}</h4>
          <button onClick={ () => removePerson(props.person.id) }>Remove</button>
        </div>
      </>
    )
  }

  return (
    <>
      <section>
        <h2>prop drilling</h2>
        {/* Prop drilling begins here. We are drilling the removePerson down into singlePerson */}
        <List people={people} removePerson={removePerson} />
      </section>
    </>
  );

};

export default PropDrilling;