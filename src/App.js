import React from 'react';
import ToDoList from './TodoList.js';
import AddToDoForm from './AddToDoForm.js';
// import TodoListItem from './TodoListItem.js';

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


//The logic here should be correct, so I'm assuming there's something elsewhere in the application that's hanging things up

  const removeTodo = id => {
    console.log(id)
    const newTodoList = todoListState.filter(
      todo => id !== todo.id
    );
    setTodoListState(newTodoList)
  }


  // This works. I can't get the above to run taking in just id as a parameter. 
  // const removeTodo = item => {
  //   const newTodoList = todoListState.filter(
  //     todo => item.id !== todo.id
  //   );
  //   setTodoListState(newTodoList)
  // }


  return (
    <React.Fragment>
      <h1>To Do List</h1>
      <AddToDoForm onAddTodo = {addTodo}/>
      {/* How do I get newTodoTitle to bubble up to here? */}
      {/* <p>You're adding:{}</p> */}
      <ToDoList todoListState={todoListState} onRemoveTodo={removeTodo}/>
    </React.Fragment>
  );
};

export default App;





