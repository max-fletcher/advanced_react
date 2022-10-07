import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// uses dynamic properties

const ControlledInputs = () => {

   // const [firstName, setFirsttName] = useState('');
   // const [email, setEmail] = useState('');
   // const [age, setAge] = useState('');

   // using an object with 3 keys as a state instead of 3 separate states
   const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
   const [people, setPeople] = useState([])

   const handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      // console.log('from handleChange', name, value, person);

      // this allows you to change values dynamically using the spread operator. It will alter only one object property at a time and not all.
      setPerson({ ...person, [name] : value })
   }

   const handleSubmit = (e) => {
      // prevent default behaviour of submitting the form and then refresh the page
      e.preventDefault();
      console.log("here", person.firstName, person.email, person.age);

      if(person.firstName && person.email && person.age){
         console.log("Submit Form");
         // const person = { firstName, email } // shorter syntax where key and value has same name i.e variable name is same as object key name
         // Since the firstName, email and age properties have already been set, we can choose to use the spread operator to set the ID like this
         // const newPerson = { id: new Date().getTime().toString(), ...person }
         // instead of using the line below
         const newPerson = { id: new Date().getTime().toString(), firstName: person.firstName, email: person.email, age: person.age }
         console.log("Person followed by newPerson", person, newPerson);
         // using a function inside setState. The parameter sent is the array of people(i.e all people/people object in people state) and then the 
         // return statement returns a new array of people with the new person appended at the end. The returned object is then set as new value/state.
         setPeople((people) => {
            return [...people, newPerson]
         })
         // set values to empty so input fields are cleared
         setPerson({ firstName: '', email: '', age: '' })
      }
      else{
         console.log("Fields Empty");
      }
   }

   return (
      <>
         <h1>multiple inputs</h1>
         <article>
            {/* Don't use "onSubmit={handleSubmit()}". Instead use  onSubmit={handleSubmit}. For some reason, it throws error for the event listener if
                  not done so. You can also use onClick on the submit button as per shown below instead of the onSumbit inside the form tag to submit the
                  form. */}
            <form className='form' onSubmit={handleSubmit}>
               <div className='form-control'>
                  {/* htmlFor is the same as for="" in pure HTML. Its just the JSX way of declaring what input tag the label is for. */}
                  <label htmlFor='firstName'>Name: </label>
                  <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={ handleChange } />
               </div>

               <div className='form-control'>
                  {/* htmlFor is the same as for="" in pure HTML. Its just the JSX way of declaring what input tag the label is for. */}
                  <label htmlFor='email'>Email: </label>
                  <input type="text" id="email" name="email" value={person.email} onChange={ handleChange } />
               </div>

               <div className='form-control'>
                  <label htmlFor='age'>Age: </label>
                  <input type="text" id="age" name="age" value={person.age} onChange={ handleChange } />
               </div>

               {/* You can either use onClick on the submit button as per shown below, or use the onSubmit in the form tag shown above to submit 
               the form. Use one or the other.*/}
               {/* onClick={handleSubmit} */}
               <button type='submit'>Add Person</button>
            </form>

            {
               people.map((person) => {
                  const {id, firstName, email, age} = person  // using destructuring to assign each person's info to a temporary variable
                  return <div className='item' key={id}>
                     <h4> {firstName} </h4>
                     <p> {email} </p>
                     <p> {age} </p>
                  </div>
               })
            }

         </article>
      </>
   );
};

export default ControlledInputs;
