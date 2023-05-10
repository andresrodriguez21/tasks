import React from "react";
import '../stylesheets/Task.css';
import { AiOutlineClose } from "react-icons/ai";
//'taskContainer Complete' se le asigna dos nombres de clases

function Task({id, text, complete, completeTask, deleteTask}){
  return(
    <div className={complete ? 'taskContainer Complete' : 'taskContainer'}>
      <div 
        className="taskText"
        onClick={() => completeTask(id)}>
        {text}
      </div>
      <div 
        className="iconsContainer"
        onClick={() => deleteTask(id)}>
        <AiOutlineClose className="taskIcon" />
      </div>
    </div>
  );
}

export default Task;