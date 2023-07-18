import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const TodoList = ({ todos, completeTodo, removeTodo }) => {
  const handleCompleteTodo = (index) => {
    completeTodo(index);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          className={`${
            todo.completed ? "line-through" : ""
          } flex items-center`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCompleteTodo(index)}
          />
          <span className={`ml-2 ${todo.completed ? "line-through" : ""}`}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(index)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
