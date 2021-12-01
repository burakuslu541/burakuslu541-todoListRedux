const initialState = {
  todos: [
    { id: 1, text: "Learn ReactJS basics", isDone: true },
    { id: 2, text: "Practice ReactJS", isDone: false },
    { id: 3, text: "Learn Redux", isDone: true },
    { id: 4, text: "Code portfolio in React", isDone: false },
    { id: 5, text: "Learn React Native", isDone: false },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      let id = Math.random();
      let isDone = false;
      return {
        ...state,
        todos: [...state.todos, { id: id, text: action.text, isDone: isDone }],
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: action.payload.text,
            };
          }
        }),
      };
    case "DONE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
        }),
      };
    case "DONE_ALL_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return {
            ...todo,
            isDone: true,
          };
        }),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "DELETE_DONE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.isDone !== true),
      };
    case "DELETE_ALL_TODO":
      return {
        ...state,
        todos: [],
      };
    default:
      break;
  }
  return state;
};
export default rootReducer;
