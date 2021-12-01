import "./App.css";
import React from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="AppCard">
        <NewTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
