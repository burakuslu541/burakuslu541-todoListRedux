import React, { useState } from "react";
import "../style/todo.css";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

const NewTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const handleNewTodo = (e) => {
    e.preventDefault();
    setTodo({ text: e.target.value });
  };
  const handleTodoSubmit = (event) => {
    event.preventDefault();
    addTodo(todo.text);
  };
  return (
    <div className="newTaskCard">
      <form onSubmit={handleTodoSubmit} className="form-card">
        <div className="new-todo">
          <i className="fas fa-book save-icon"></i>
          <input
            onChange={handleNewTodo}
            type="text"
            className="save-text"
            placeholder="New Todo"
          />
        </div>
        <button className="save-button">Add new task</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { todos } = state;
  return {
    todos,
  };
};
const mapDispatchToPops = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToPops)(NewTodo);
