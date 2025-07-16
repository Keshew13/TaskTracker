import React, { useState,useEffect } from 'react'
import '../App.css'
// import './Status.jsx'
export default function AddTask({tasks, setTasks,title,setTitle,description,setDescription,isEditing,setIsEditing,editIndex,setEditIndex}) {

//add task
  function addTask() {
  if(title.trim() === "") {
    alert("Please enter a task title.");
    setTitle("");
    if(description.trim() === "") {
      setDescription("");
    }
    return;
  }
  if(title.trim() !== "") {
    title.trim();
    const newTask={
        title:title,
        description:description,
        completed:false
      }
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    console.log(updatedTasks);
    setTitle("");
    setDescription("");
    const tpToTasks = document.querySelector(".countTask");
    tpToTasks.scrollIntoView({ behavior: 'smooth', block:'center' });
  }
}


//update task
function updateTask() {
  const updated = [...tasks];
  updated[editIndex] = {
    title: title.trim(),
    description: description.trim()
  };
  setTasks(updated);
  setTitle("");
  setDescription("");
  setIsEditing(false);
  setEditIndex(null);
  const tpToTasks = document.querySelector(".countTask");
    tpToTasks.scrollIntoView({ behavior: 'smooth', block:'center' });
}


// const taskBox = document.querySelector(".titleBox");
// const createNewTask = document.getElementById("createNewTask");
// createNewTask.addEventListener("click", taskBox.focus())
function handleTitleInput(event) {
    setTitle(event.target.value);
  }
function handleDescriptionInput(event) {
    setDescription(event.target.value);
  }


  return (
    <>
    {isEditing==true ?
    <div className="updateTask">
              {console.log("checking")}
              <h2>Update Task</h2>
              <h3>Task Title</h3>
              <input 
                  type="text" 
                  className="titleBox" 
                  id = "titleBox"
                  placeholder="Update task title"
                  value={title}
                  onChange={handleTitleInput} 
              />
              <h3>Description (Optional)</h3>
              <textarea  
                  className= "descriptionBox"   
                  placeholder="Enter task description" 
                  value={description}
                  onChange={handleDescriptionInput}
              >
              </textarea>
              <div 
                  className="addTaskBtn"
                  onClick={updateTask}
                  ><p>+ update Task</p>
              </div>
        </div>
        :
        <div className="addTask">
            <h2>Add New Task</h2>
            <h3>Task Title</h3>
            <input 
                type="text" 
                className="titleBox" 
                id = "titleBox"
                placeholder="Enter task title"
                value={title}
                onChange={handleTitleInput} />
            <h3>Description (Optional)</h3>
            <textarea  
                className= "descriptionBox"   
                placeholder="Enter task description" 
                value={description}
                onChange={handleDescriptionInput}>
            </textarea>
            <div 
            className="addTaskBtn"
            onClick={addTask}
            ><p>+ Add Task</p></div>
        </div>
            
    }
        
    </>
  )
}
