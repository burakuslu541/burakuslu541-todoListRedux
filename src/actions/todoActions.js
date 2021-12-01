export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};
export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    text,
  };
};
export const editTodo = (id, text) => {
  return {
    type: "EDIT_TODO",
    payload: { id, text },
  };
};
export const doneTodo = (id) => {
  return {
    type: "DONE_TODO",
    payload: { id },
  };
};
export const doneAllTodo = () => {
  return {
    type: "DONE_ALL_TODO",
  };
};
export const deleteDoneTodo = () => {
  return {
    type: "DELETE_DONE_TODO",
  };
};

export const deleteAllTodo = () => {
  return {
    type: "DELETE_ALL_TODO",
  };
};
