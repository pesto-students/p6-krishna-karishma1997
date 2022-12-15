"use strict";

var _reducer = _interopRequireDefault(require("../reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.mock("../initial-state", function () {
  return {
    initialState: {
      todos: []
    }
  };
});
describe("Reducer", function () {
  beforeEach(function () {
    global.window = {
      localStorage: {
        setItem: jest.fn()
      }
    };
  });
  afterEach(function () {
    global.window = null;
  });
  test("Should add a todo item", function () {
    var initialState = {
      todos: []
    };
    var action = {
      type: "ADD_TODO",
      payload: {
        title: "Read a book"
      }
    };
    var newState = (0, _reducer["default"])(initialState, action);
    expect(newState.todos[0].title).toEqual("Read a book");
    expect(newState.todos[0].completed).toBeFalsy();
    expect(newState.todos[0].important).toBeFalsy();
  });
  test("Should be marked as completed", function () {
    var initialState = {
      todos: [{
        id: "12345",
        title: "Read a book",
        completed: false,
        important: false
      }]
    };
    var action = {
      type: "TODO_COMPLETED",
      payload: {
        id: "12345"
      }
    };
    var newState = (0, _reducer["default"])(initialState, action);
    expect(newState.todos[0].completed).toBeFalsy();
  });
});