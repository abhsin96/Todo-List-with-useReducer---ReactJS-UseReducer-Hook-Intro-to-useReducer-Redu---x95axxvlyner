import React from "react";
import "../styles/App.css";
const Todo = ({ title, id, handleDelete }) => {
  return (
    <div className="todo">
      <div className="todo-title">{title}</div>
      <button className="deleteButton" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export { Todo };
