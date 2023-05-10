import React, {useState} from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import '../stylesheets/TaskList.css';

function TaskList(){

    const [tasks, setTasks] = useState([]);

    const addTask = task =>{
      if(task.text.trim()){ //si no esta vacia
        task.text= task.text.trim();  //trim() elimina espacios al principio y final
        const updatedTasks = [task, ...tasks]; //se agrega al inicio
        setTasks(updatedTasks);
      }
    };

    const completeTask = id => {
      const updatedTasks = tasks.map(task=>{
        if(task.id === id){
          task.complete = !task.complete;
        }
        return task;
      })
      setTasks(updatedTasks);
    };

    const deleteTask = id => {
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
    };

    return(
    <div>
      <TaskForm onSubmit={addTask}/>
        <div className="taskListContainer">
          {
            tasks.map((task) =>
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                complete={task.complete}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            )
          }
        </div>
    </div>
    );
}

export default TaskList;