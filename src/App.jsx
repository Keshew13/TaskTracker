import { useState,React,useEffect } from 'react'
import AddTask from './MyComponents/AddTask.jsx'
import Header from './MyComponents/Header.jsx'
import Status from './MyComponents/Status.jsx'
import './App.css'
function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  })

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [isEditing, setIsEditing] = useState(false);
const [editIndex, setEditIndex] = useState(null);
  // const [count, setCount] = useState(0)
 function focusTitle(){
        const taskBox = document.querySelector(".titleBox");
        taskBox.focus({preventScroll: true}),
        taskBox.scrollIntoView({ behavior: 'smooth' , block: 'center' })
    }

  function editTask(index) {
  focusTitle();
    const updatedTasks = [...tasks];
    setEditIndex(index);
    setIsEditing(true);
    updatedTasks[index]={
        title:updatedTasks[index].title,
        description:updatedTasks[index].description
    }
    setTitle(updatedTasks[index].title);
    setDescription(updatedTasks[index].description);
  }
  return (
    <div className="body">
      <Header />
      <AddTask 
          tasks={tasks} 
          setTasks={setTasks} 
          title={title} 
          setTitle={setTitle} 
          description={description} 
          setDescription={setDescription}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          /> 
      <Status 
          tasks={tasks} 
          setTasks={setTasks} 
          title={title} 
          setTitle={setTitle}
          description={description} 
          setDescription={setDescription}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          editTask={editTask}
          focusTitle={focusTitle}
          />   
    </div>
  )
}

export default App
