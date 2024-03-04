import React from "react";
import Todo from "./Todo";

function ToDoList({ todoList, toggleTodo }) {
  console.log(todoList);
  return (
    <div>
      {todoList.map((t) => {

    return <Todo key={t.id} task={t} toggleTodo={toggleTodo} /> }
      )}
    </div>
  );
}

export default ToDoList;
