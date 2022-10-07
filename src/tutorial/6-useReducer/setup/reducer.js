// reducer function
export const reducer = (state, actions) => {
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