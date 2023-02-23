import {  useRef } from "react";

function Main({addTodo}) {
    // const [task, setTask] = useState("");
    const  task = useRef("");
    // useEffect(() => {
        
    //     return () => {
    //         cleanup
    //     };
    // }, [task.current]);

    return (
      <div className="Main" >
        <h1>TODO's</h1>
        <h2>Local Storage CRUD app</h2>
        <h3>CRUD - Create read Update Delete</h3>
        <label>Add todo  </label>
        <input ref={task} id="input" type="text"></input>
        <button onClick={()=>{addTodo(task.current.value)}}>Add</button>
      </div>
    );
  }
  
  export default Main;