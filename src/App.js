import React from 'react';
import ToDoList from './TodoList.js';
import AddToDoForm from './AddToDoForm.js';

const useSemiPersistentState = () => {

  const [todoListState, setTodoListState] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);

  React.useEffect(()=> {
    localStorage.setItem('savedTodoList', JSON.stringify(todoListState))
  },[todoListState]);

  return [todoListState, setTodoListState];
}

function App() {

  const [todoListState, setTodoListState] = useSemiPersistentState()

  //overwrite the todoListState array with a new one that includes newTodo
  const addTodo = (newTodo) => {
    setTodoListState([...todoListState, newTodo]);
  }

  const removeTodo = (id) => {
    
  };

  return (
    <React.Fragment>
      <h1>To Do List</h1>
      <AddToDoForm onAddTodo = {addTodo}/>
      {/* How do I get newTodoTitle to bubble up to here? */}
      {/* <p>You're adding:{}</p> */}
      <ToDoList todoListState={todoListState} />
    </React.Fragment>
  );
};

export default App;





