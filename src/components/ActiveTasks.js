import React from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../AddTodo";

const ActiveTasks = ({ todos,addTodo, completeTodo, removeTodo }) => {
  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h1>Active Tasks</h1>
      <TodoList
        todos={activeTodos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
      <AddTodo addTodo={addTodo} />
    </div>
  );
};

export default ActiveTasks;
