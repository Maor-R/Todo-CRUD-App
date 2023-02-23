import Task from "./Task.component";

const ToDoList = ({ tasks, removeTask,updateTaskStatus }) => {
  return (
    <section className="container">
      {tasks.map((task) => {
        return <Task key={task.id} id={task.id} task={task.task} 
        status={task.status} removeTask={removeTask} 
        updateTaskStatus={updateTaskStatus} />;
      })}
    </section>
  );
};

export default ToDoList;
