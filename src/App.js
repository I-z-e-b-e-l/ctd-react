import React from 'react';
import ToDoList from './TodoList.js';
import AddToDoForm from './AddToDoForm.js';


function App() {

  const [newTodo, setNewTodo] = React.useState("");
  
  return (
    <div>
      <h1>To Do List</h1>
      <AddToDoForm onAddTodo={setNewTodo} />
      <p>You're adding:{newTodo}</p>
      <ToDoList />
      
    </div>
  );
};

export default App;








