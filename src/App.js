
import './App.css';
import Header from './header.js'
import Footer from './Footer.js'
import Content from './Content.js'
import Addnew from './Addnew.js'
import Search from './Search.js'
import { useState } from 'react';


function App() {
  const [Items,setItems]=useState((JSON.parse(localStorage.getItem('todolist'))));
  const handleDelete = (id) =>{
    console.log("function called")
    console.log(id);
    console.log(Items);
  const newList =Items.filter((item)=> item.id !== id )
  setItems(newList)
  console.log(newList)
  localStorage.setItem('todolist',JSON.stringify(newList));

  }
   const handleCheck = (id) =>{
    console.log("chechkbox id is"+ id);
   console.log(Items);
   const newList=Items.map((item)=> item.id === id ? {...item, checkbox:!item.checkbox} : item )
   setItems(newList)
  console.log(newList)
  localStorage.setItem('todolist',JSON.stringify(newList));

   }
    const addNewitem=(newitem)=>{
      console.log("somes to addnewitem" );
     
      const id = Items.length?(Items[(Items.length)-1].id+1):1
      const newlist={id,Task:newitem,checkbox:false}
      const newList=[...Items,newlist]
      setItems(newList)
      localStorage.setItem('todolist',JSON.stringify(newList));

    }
    const [newItem,setItem]=useState('')
    const handleSubmit= (e) =>{
      e.preventDefault();
      if(!newItem) return;
      console.log("newitem  called");
      console.log(newItem)
      addNewitem(newItem);
      console.log(newItem)
      setItem('')
  }
  const [searchItem,setSearch]=useState('')
  return (
    <div className="App">
      
        
        
      
      <Header title="TASK MANAGER" tagline="WORK SMARTER WITH THE #1 TASK MANAGEMENT PLATFORM"/>
      <Content Tasks={Items.filter((item)=> item.Task.includes(searchItem))} handleDelete={handleDelete} handleCheck={handleCheck}/>
      <Addnew newItem={newItem} setItem={setItem} handleSubmit={handleSubmit} />
<Search searchItem={searchItem} setSearch={setSearch}/>
      <Footer />
      
    </div>
   
  );
}

export default App;
