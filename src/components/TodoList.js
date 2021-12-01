import React from "react";
import "../style/todo.css";
import EditTodo from "./EditTodo";
import { connect } from "react-redux";
import {
  deleteTodo,
  doneTodo,
  doneAllTodo,
  deleteDoneTodo,
  deleteAllTodo,
} from "../actions/todoActions";

const TodoList = ({
  todos,
  deleteTodo,
  doneTodo,
  doneAllTodo,
  deleteDoneTodo,
  deleteAllTodo,
}) => {
  const onButtonDeleteClick = (id) => {
    deleteTodo(id);
  };
  const onButtonDoneClick = (id) => {
    doneTodo(id);
  };
  const onButtonAllDoneClick = () => {
    doneAllTodo();
  };
  const onButtonDeleteDoneClick = () => {
    deleteDoneTodo();
  };
  const onButtonDeleteAllClick = () => {
    deleteAllTodo();
  };
  return (
    <div>
      <h1 className="header-todo">TodoList</h1>
      <button
        onClick={() => {
          onButtonAllDoneClick();
        }}
        className="select-all"
      >
        Select All
      </button>
      <div>
        {todos.map((todo) => {
          return todo.isDone ? (
            <div key={todo.id} className="todo-item">
              <div className="todo-p">
                <p className="todo-text-done">{todo.text}</p>
              </div>
              <div className="todo-icon">
                <i
                  onClick={() => {
                    onButtonDoneClick(todo.id);
                  }}
                  class="far fa-check tik-todo-done"
                ></i>
                <EditTodo id={todo.id} />
                <i
                  onClick={() => {
                    onButtonDeleteClick(todo.id);
                  }}
                  class="fas fa-trash delete-todo"
                ></i>
              </div>
            </div>
          ) : (
            <div key={todo.id} className="todo-item">
              <div className="todo-p">
                <p className="todo-text-p">{todo.text}</p>
              </div>
              <div className="todo-icon">
                <i
                  onClick={() => {
                    onButtonDoneClick(todo.id);
                  }}
                  class="far fa-check tik-todo"
                ></i>
                <EditTodo id={todo.id} />
                <i
                  onClick={() => {
                    onButtonDeleteClick(todo.id);
                  }}
                  class="fas fa-trash delete-todo"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      <div className="delete-task">
        <button
          onClick={() => {
            onButtonDeleteDoneClick();
          }}
          className="delete-done"
        >
          Delete done tasks
        </button>
        <button
          onClick={() => {
            onButtonDeleteAllClick();
          }}
          className="delete-all"
        >
          Delete all tasks
        </button>
      </div>
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
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    doneTodo: (id) => {
      dispatch(doneTodo(id));
    },
    doneAllTodo: () => {
      dispatch(doneAllTodo());
    },
    deleteDoneTodo: () => {
      dispatch(deleteDoneTodo());
    },
    deleteAllTodo: () => {
      console.log("delete");

      dispatch(deleteAllTodo());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToPops)(TodoList);
