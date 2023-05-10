import React, {useState} from "react";
import '../stylesheets/TaskForm.css';
import {v4 as uuidv4} from 'uuid';

function TaskForm(props){

  const[input, setInput] = useState('');

  const handleChange = e =>{
    setInput(e.target.value);
  };

  const handleSending = e =>{
    e.preventDefault(); //evita que la pagina se recargue
    

    const newTask ={
      id: uuidv4(),
      text: input,
      complete: false
    }

    e.target.reset();
    props.onSubmit(newTask);
  };

    return(
      <form 
        className="taskForm"
        onSubmit={handleSending}>
        <input
          className="taskInput"
          type="text"
          placeholder="Write a task"
          name="text"
          onChange={handleChange}
        />
        <button className="taskButton">Add task</button>
      </form>
    );
}

export default TaskForm;