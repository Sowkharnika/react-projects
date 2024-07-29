import {FaPlus} from "react-icons/fa"
function Addnew({newItem,setItem,handleSubmit}){
    console.log("newitem form called");
    return (
   
      <form className="addnewform" onSubmit={handleSubmit}>
       
<input type="text" placeholder="Add new task"  className="newitem" value={newItem} onChange={(e)=>setItem(e.target.value)}></input>
<button type='submit'>
    <FaPlus  className="newtask"/>
    </button>
    </form>
    );
}
export default Addnew;