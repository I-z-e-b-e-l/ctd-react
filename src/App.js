import React from 'react';
import {ToDoList, todoList} from './TodoList.js';
import AddToDoForm from './AddToDoForm.js';


function App() {

  // const todoList = [
  //   {
  //     id: 1,
  //     title: "wash face"
  //   },
  //   {
  //     id: 2,
  //     title: "make coffee"
  //   },
  //   {
  //     id: 3,
  //     title: "physical therapy"
  //   }
  // ];

  return (
    <div>
      <h1>To Do List</h1>
      <AddToDoForm />
      <ToDoList todoList={todoList}/>
      <Search />
    </div>
  );
};

const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value)
  }

  const handleMouseOver = (event) => {
    console.log(event)
  }

  return (

    <div>
      <label htmlFor='search'>Search:</label>
      <input id="search" type='text' onChange={handleChange} onMouseOver = {handleMouseOver}/>
    </div>
  );
};


export default App;

