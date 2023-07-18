import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AllTasks from "./components/AllTasks";
import ActiveTasks from "./components/ActiveTasks";
import CompletedTasks from "./components/CompletedTasks";
import Footer from "./Footer";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const filterTodos = () => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    }
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };

  return (
    <div className="app-container">
      <Router>
        <div className="link-container">
          <Link to="/" className="nav-link">
            All
          </Link>
          <Link to="/active" className="nav-link">
            Active
          </Link>
          <Link to="/completed" className="nav-link">
            Completed
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <AllTasks
                todos={filterTodos()}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                addTodo={addTodo}
              />
            }
          />
          <Route
            path="/active"
            element={
              <ActiveTasks
                todos={filterTodos()}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                addTodo={addTodo}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <CompletedTasks
                todos={filterTodos()}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                addTodo={addTodo}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
