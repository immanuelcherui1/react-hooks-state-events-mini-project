import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleDeleteTask = (taskToDelete) => {
    const updatedTaskList = taskList.filter(task => task !== taskToDelete);
    setTaskList(updatedTaskList);
  };

  return (
    <div className="tasks">
      {taskList.map((task, index) => (
        <Task key={index} task={task} onDelete={() => handleDeleteTask(task)} />
      ))}
    </div>
  );
}

export default TaskList;
