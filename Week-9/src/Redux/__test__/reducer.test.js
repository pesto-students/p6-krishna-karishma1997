import reducer from "../reducer";

jest.mock("../initial-state", () => {
  return {
    initialState: {
      todos: [],
    },
  };
});
describe("Reducer", () => {
  beforeEach(() => {
    global.window = {
      localStorage: {
        setItem: jest.fn(),
      },
    };
  });
  afterEach(() => {
    global.window = null;
  });
  test("Should add a todo item", () => {
    const initialState = {
      todos: [],
    };
    const action = {
      type: "ADD_TODO",
      payload: {
        title: "Read a book",
      },
    };
    const newState = reducer(initialState, action);
    expect(newState.todos[0].title).toEqual("Read a book");
    expect(newState.todos[0].completed).toBeFalsy();
    expect(newState.todos[0].important).toBeFalsy();
  });
test("Should be marked as completed",()=>{
    const initialState = {
        todos:[{
            id:"12345",
            title:"Read a book",
            completed:false,
            important:false,
        }]
        
    }
    const action = {
        type: "TODO_COMPLETED",
        payload: {
            id:"12345",
        }
}
const newState=reducer(initialState,action)
expect(newState.todos[0].completed).toBeFalsy();

})
});

