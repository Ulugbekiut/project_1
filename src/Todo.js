import React from "react";

export default function Todo({ task, toggleTodo }) {
    function handleToggleTodo () {
        toggleTodo(task.id)
    }
  return (
    <>
      <label>
        <input type="checkbox" value={task.completed} onChange={handleToggleTodo} />
        {task.name}
      </label><br/>
    </>
  );
}
