import React from 'react';
import ToDoList from './TodoList.js';
import AddToDoForm from './AddToDoForm.js';


function App() {

  const [newTodo, setNewTodo] = React.useState("");

  const [todoListstate, setTodoListstate] = React.useState([]);
  
  // const handleOnAddToDo = (value) => {
  //   setNewTodo(value)
  // }

  return (
    <div>
      <h1>To Do List</h1>
      {/* <AddToDoForm onAddTodo={handleOnAddToDo} newTodo={newTodo}/> */}
      <AddToDoForm onAddTodo={setNewTodo} newTodo={newTodo}/>
      <p>You're adding:{newTodo}</p>
      <ToDoList todoListstate={todoListstate} />
      
    </div>
  );
};

export default App;





