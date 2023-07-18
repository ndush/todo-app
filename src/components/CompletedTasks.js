import React from "react";
import TodoList from "../components/TodoList";

const CompletedTasks = ({ todos, completeTodo, removeTodo }) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h1>Completed Tasks</h1>
      <TodoList
        todos={completedTodos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default CompletedTasks;
