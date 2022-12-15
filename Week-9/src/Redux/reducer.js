import shortid from "shortid";
import { ADD_TODO, TOGGLE_COMPLETED, TOGGLE_DELETE, TOGGLE_IMPORTANT } from "./action";
import { initialState } from "./initial-state";

function saveStateToBrowser(state) {
  window.localStorage.setItem("todos",JSON.stringify(state))
  
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { title } = action.payload;
      const newState = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: shortid(),
            title,
            completed: false,
            important: false,
          },
        ],
      };
      saveStateToBrowser(newState)
      return newState;
    }
    case TOGGLE_COMPLETED: {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      const newState = {
        ...state,
        todos: newTodos,
      };
      saveStateToBrowser(newState)
      return newState;
    }
case TOGGLE_IMPORTANT:{
  const newTodos = state.todos.map((todo) => {
    if (todo.id === action.payload.id) {
      todo.important = !todo.important;
    }
    return todo;
    
  });
  const newState = {
    ...state,
    todos:newTodos,
  }
  saveStateToBrowser(newState)

  return newState;

}
    case TOGGLE_DELETE: {
      const { id } = action.payload;
      const newTodos = state.todos.filter((todo) => todo.id !== id);
      const newState = {
        ...state,
        todos:newTodos,
      }
      saveStateToBrowser(newState)

      return newState;
    }
    default:
      return state;
  }
}
export default reducer;
