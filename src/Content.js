import { FaTrash } from "react-icons/fa";

function Content({Tasks,handleDelete,handleCheck}) {
   
    return (
      <main>
     {(Tasks.length) ? (
            
            <ul className="list">
                {Tasks.map((tsk) => (
                   <li key={tsk.id} className="tasklist">
                    <input type="checkbox" checked={tsk.checkbox} className="checkbox" onChange={()=>{handleCheck(tsk.id)}} />
                    <label  style={(tsk.checkbox)?{textDecoration:'line-through'}:null} className="taskname" >{tsk.Task}</label>
                    
                    <FaTrash onClick={() =>{handleDelete(tsk.id)}} className="delete"/>

                   </li> 
                ))}
                   </ul>
                   ) : (<p> your tsak list is empty</p>)
                   
                }
    </main>
    );
}   

export default Content;