import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

   const [firstName, setFirsttName] = useState('');
   const [email, setEmail] = useState('');
   const [people, setPeople] = useState([]);

   const handleSubmit = (e) => {
      // prevent default behaviour of submitting the form and then refresh the page
      e.preventDefault();
      console.log("here", firstName, email);
      if(firstName && email){
         console.log("Submit Form");
         // const person = { firstName, email } // shorter syntax where key and value has same name i.e variable name is same as object key name
         const person = { id: new Date().getTime().toString(), firstName: firstName, email: email, }
         console.log(person);
         // using a function inside setState. The parameter sent is the array of people(i.e all people/people object in people state) and then the 
         // return statement returns a new array of people with the new person appended at the end. The returned object is then set as new value/state.
         setPeople((people) => {
            return [...people, person]
         })
         // set values to empty so input fields are cleared
         setFirsttName('')
         setEmail('')
      }
      else{
         console.log("Fields Empty");
      }
   }

   return (
      <>
         <h1>controlled inputs</h1>
         <article>
            {/* Don't use "onSubmit={handleSubmit()}". Instead use  onSubmit={handleSubmit}. For some reason, it throws error for the event listener if
                  not done so. You can also use onClick on the submit button as per shown below instead of the onSumbit inside the form tag to submit the
                  form. */}
            <form className='form' onSubmit={handleSubmit}>
               <div className='form-control'>
                  {/* htmlFor is the same as for="" in pure HTML. Its just the JSX way of declaring what input tag the label is for. */}
                  <label htmlFor='firstName'>Name: </label>
                  {/* value={firstName} is to initialize the input tag value with the value declared inside useState. Hence, if we used 
                     const [firstName, seFirsttName] = useState('some name'); above, the input box would show "some name" inside it.
                     Also, onChange causes the state to change meaning the value will also change. Follow the format as shown to avoid errors.
                  */}
                  <input type="text" id="firstName" name="firstName" value={firstName} onChange={ (e) => setFirsttName(e.target.value) } />
               </div>

               <div className='form-control'>
                  {/* htmlFor is the same as for="" in pure HTML. Its just the JSX way of declaring what input tag the label is for. */}
                  <label htmlFor='email'>Email: </label>
                  {/* value={email} is to initialize the input tag value with the value declared inside useState. Hence, if we used 
                     const [emai', setEmail] = useState('some name'); above, the input box would show "some name" inside it.
                     Also, onChange causes the state to change meaning the value will also change. Follow the format as shown to avoid errors.
                  */}
                  <input type="text" id="email" name="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
               </div>

               {/* You can either use onClick on the submit button as per shown below, or use the onSubmit in the form tag shown above to submit 
               the form. Use one or the other.*/}
               {/* onClick={handleSubmit} */}
               <button type='submit'>Add Person</button>
            </form>

            {
               people.map((person) => {
                  const {id, firstName, email} = person  // using destructuring to assign each person's info to a temporary variable
                  return <div className='item' key={id}>
                     <h4> {firstName} </h4>
                     <p> {email} </p>
                  </div>
               })
            }

         </article>
      </>
   );
};

export default ControlledInputs;
