import React, { useState, useEffect } from "react";
import Main from "./components/Main.component";
import ToDoList from "./components/ToDoList.component";
import { removeItem, getItem, setItem } from "./services/localStorageService";

const ls = getItem("toDoList");
if (!ls) {
  setItem("toDoList", []);
}

const currentId = getItem("currentId");
if (!currentId) {
  setItem("currentId", 1);
}


function App() {
  const [toDoList, setToDoList] = useState(ls);
  const [createId, setCreateId] = useState(currentId);
  const [simulationUpdate, setSimulationUpdate] = useState(0);

  const addTodo = (taskToAdd) => {
    setToDoList([
      ...toDoList,
      { id: createId, task: taskToAdd, status: false },
    ]);
    setCreateId((prevId) => prevId + 1);
    setItem("currentId", createId);

  };


  useEffect(() => {
    removeItem("toDoList")
    setItem("toDoList", toDoList);

  }, [simulationUpdate]);

  const removeTask = (taskId) => {
    const index = toDoList.findIndex((task) => task.id === taskId);
    toDoList.splice(index, 1);
    setToDoList(toDoList);    
    setSimulationUpdate(prevVal=> prevVal+1)
  };

  const updateTaskStatus = (taskId) => {
    const index = toDoList.findIndex((task) => task.id === taskId);
    toDoList[index].status = true;
    setToDoList(toDoList);
    setSimulationUpdate(prevVal=> prevVal+1)

  };

  return (
    <>
      <Main addTodo={addTodo}></Main>
      <ToDoList
        tasks={toDoList}
        removeTask={removeTask}
        updateTaskStatus={updateTaskStatus}
      ></ToDoList>
    </>
  );
}

export default App;
