import { Box, Button, TextField } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../Redux/action";

export default function TodoAdder() {
  const [title, setTitle] = useState(null);
  const titleFeildRef = useRef();
  const dispatch = useDispatch();
  function handleTextChange(e) {
    setTitle(e.target.value);
  }
  function addTodoItems(params) {
    dispatch({
        type:ADD_TODO,
        payload: {
            title,

        }
    });
    setTitle(null);
    titleFeildRef.current.value = "";
  }
  return (
    <Box>
      <TextField
        label="Add new todo"
        variant="filled"
        inputRef={titleFeildRef}
        style={{ width: 400 }}
        onChange={handleTextChange}
      ></TextField>
      <Button variant="contained" color="primary" style={{ height: 55 }} onClick={addTodoItems}>
        Add
      </Button>
    </Box>
  );
}
