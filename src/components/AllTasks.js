import React from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../AddTodo";


const AllTasks = ({ todos,addTodo, completeTodo, removeTodo }) => {
  return (
    <div>
      <h1>All Tasks</h1>
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
      <AddTodo addTodo={addTodo} />
    </div>
  );
};

export default AllTasks;
