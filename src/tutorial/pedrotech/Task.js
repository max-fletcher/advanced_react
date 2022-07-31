const Task = (props) => {
   return(
   <div className={props.task.completed ? "completed" : ""} style={{ background: props.task.completed ? "green" : "white" }}>
      <h1> {props.task.taskName} </h1>
      <button className="btn" onClick={() => { props.completeTask(props.task.id) } }> Completed </button>
      <button className="btn" onClick={() => props.deleteTask(props.task.id) }> X </button>
   </div>
   )
}

export default Task;
