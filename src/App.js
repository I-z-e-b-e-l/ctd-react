import React from 'react';
import ToDoList from './TodoList.js';
import AddToDoForm from './AddToDoForm.js';


function App() {

  const [newTodo, setNewTodo] = React.useState("");

  const [todoListstate, setTodoListstate] = React.useState([]);
  
  return (
    <div>
      <h1>To Do List</h1>
      <AddToDoForm onAddTodo={setNewTodo} />
      <p>You're adding:{newTodo}</p>
      <ToDoList todoListstate={todoListstate}/>
      
    </div>
  );
};

export default App;

// ☑ Create new state variable named todoList with setter setTodoList and default value of an empty Array
// ☑  Pass todoList state as a prop named todoList to the TodoList component
// In /src/TodoList.js
    // ☑ Add props as a parameter to the TodoList functional component
    // Change todoList to reference props instead of the hard-coded variable
    // Delete the hard-coded todoList variable
    // Run your application and view in browser
    // Verify that your Todo List is now empty (no list items)





