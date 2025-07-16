import {React,useState} from 'react'
import '../App.css'
export default function Status({tasks,setTasks,editTask,focusTitle}) {
    const [status, setStatus] = useState("all");
    const showAction = status==="all"

function getFilteredTasks() {
  if (status == "pending") {
    
    return tasks.filter(task => !task.completed);
  } else if (status== "completed") {
    return tasks.filter(task => task.completed);
  }
  else if(status == "all"){
      return tasks;
  }
}
function toggleStatus(index){
    const updated = [...tasks]
    updated[index].completed=!updated[index].completed
    setTasks(updated)
    
}
   
    function deleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index,1);
        setTasks(updatedTasks);
    }
  return (
    <>
        <div className="taskContainer">
           <div className="pivotsContainer">
                <div className='pivots' onClick={() => setStatus("all")}>All Tasks:{tasks.length}</div>
                <div className='pivots' onClick={() => setStatus("pending")}>Pending</div>
                <div className='pivots' onClick={() => setStatus("completed")}>Completed</div>

           </div>
     
           {tasks.length === 0 ?
           <div  className="noTasks">
                <img width="48" height="48" src="https://img.icons8.com/color/48/clipboard.png" alt="clipboard"/>
                <h4>No Tasks Available</h4>
                <p>Start adding tasks to see them here.</p> 
                <p  id="createNewTask" onClick={focusTitle}>create a new task</p>
           </div> :   
        
                getFilteredTasks().map((task, index) => (
                    <div className="showTasks"  key={index}>
                        <div className="task">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>
                        <div className="status" onClick={()=>toggleStatus(index)}>
                            <p>{task.completed ? "Completed" : "Pending"}</p>
                        </div>
                        {showAction && (<> <div className="edit" onClick={()=>editTask(index)}>
                            ✏️ {/* <img width="20" height="20" src="https://img.icons8.com/color/48/edit.png" alt="edit"/> */}
                        </div>
                        <div className="delete" onClick={()=>deleteTask(index)}>
                            🗑️{/* <img width="20" height="20" src="https://img.icons8.com/color/48/trash.png" alt="del"/> */}
                        </div>
                        </>)}
                        
                        
                    </div>
                ))
                
           }
           <div className="countTask"> <p>Tasks : {tasks.length}</p></div>
        </div>

       </>
  )
}
