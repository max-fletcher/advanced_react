import React, { useState } from 'react';
import Task from './Task'

// cleanup function
// second argument

const useStateCRUD = () => {

   const [todoList, setTodoList] = useState([])
   const [newTask, setNewTask] = useState("");

   const handleChange = (event) => {
      setNewTask(event.target.value)
   }

   const addTask = () => {
      const task = {
         id: todoList.length === 0 ? 1 : (todoList[todoList.length - 1].id + 1),
         taskName: newTask,
         completed: false
      }
      const newTodoList = [...todoList , task ]  //using spread operator to append newTask
      setTodoList(newTodoList)
      console.log(todoList);
   }

   const deleteTask = (taskId) => {
      console.log("delete", taskId);
      const array = todoList

      const newTodoList = array.filter((eachTask) => {
         return eachTask.id !== taskId
      })

      setTodoList(newTodoList)
   }

   const completeTask = (taskId) => {
      console.log("complete", taskId);
      const array = todoList

      const newTodoList = array.map(// first, using map to find the lousy object by looping through each of them.
         (task) => { // The 'task' param contains each task as the map function loops
            if (task.id === taskId){  // found if ID matches
               return {...task, completed: true} // if matches, return task but with completed status changed
            }
            else{
               return task // else, return the original object
            }
         }
      )

      setTodoList(newTodoList)
      console.log(newTodoList);
   }

   return <>
      <div className="App">
         <div className="addTask">
            <input type="text" onChange={handleChange} />
            <button className="btn" onClick={addTask}>Add Task</button>
         </div>
         <div className="list">
            {todoList.map((task) => {
               return (
                  <Task task={task} deleteTask={deleteTask} completeTask={completeTask} />  // The commented code below is shipped into a separate component on its own
                  // <div>
                  //    <h1> {task.taskName} </h1>
                  //    <button className="btn" onClick={() => deleteTask(task.id) }> X </button>
                  // </div>
               )
            })}
         </div>
      </div>
   </>;
};

export default useStateCRUD;
