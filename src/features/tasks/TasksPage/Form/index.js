import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Button } from "./styled";
import Input from "../Input";
import { addTask } from "../../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() === "") {
      return;
    } else {
      dispatch(addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid()
      }));

      setNewTaskContent("");
      inputRef.current.focus();
    };
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        id="textInput"
        placeholder="What's there to do?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Add task</Button>
    </StyledForm>
  );
};

export default Form;