import "./App.css";
import ToDoList from "./ToDoList";
import { useState, useRef, useEffect } from "react";

function App() {
  const LOCAL_STORAGE_KEY = "todoApp.todos";
  const [tasks, setTasks] = useState([
    { id: 1, name: "Read 20 pages", completed: false },
    { id: 2, name: "Clean  your room", completed: false },
  ]);
  const todoRef = useRef();
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    storedTasks && setTasks(storedTasks);
  }, []);


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);


  const handleAddTodo = (e) => {
    let name = todoRef.current.value;
    if (name !== " ") {
      console.log(tasks);
      setTasks((prevTasks) => {
        return [
          ...prevTasks,
          {
            id: Math.floor(Math.random() * 100000),
            name: name,
            completed: false,
          },
        ];
      });
      console.log("updataed", tasks);
      todoRef.current.value = null;
    }
  };
  const toggleTodo =(id)=>{
    const newTasks = [...tasks]
    const task =newTasks.find(t=> t.id===id)
    task.completed=!task.completed;
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <ToDoList toggleTodo={toggleTodo} todoList={tasks} />
      <input ref={todoRef} type="text"></input>
      <button onClick={handleAddTodo}> Add new task</button>
      <button>Clear completed tasks</button>
      <div>0 task left to do</div>
    </div>
  );
}

export default App;
