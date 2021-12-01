import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Form,
} from "reactstrap";
import "../style/todo.css";
import { connect } from "react-redux";
import { editTodo } from "../actions/todoActions";

const EditTodo = (props) => {
  const { id, text, isDone } = props.todo;
  // Modal open state
  const [modal, setModal] = React.useState(false);
  const [todo, setTodo] = React.useState("");

  // Toggle for Modal
  const toggle = () => {
    setModal(!modal);
  };
  const handleText = (event) => {
    //event.preventDefault();
    setTodo({ id, todo: event.target.value, isDone: isDone });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const text = todo.todo;
    props.editTodo(id, text);
  };
  return (
    <div>
      <i onClick={toggle} class="fas fa-pen-square edit-todo"></i>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Todo</ModalHeader>
        <Form onSubmit={handleFormSubmit}>
          <ModalBody>
            <input onChange={handleText} className="modalInput" type="text" />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="success">
              Save
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  const todoId = ownProps.id;
  return {
    todo: state.todos.find((todo) => todo.id === todoId),
  };
};
const mapDispatchToPops = (dispatch) => {
  return {
    editTodo: (id, text) => {
      dispatch(editTodo(id, text));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToPops)(EditTodo);
