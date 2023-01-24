import React from 'react';
import ToDoList from './TodoList.js';
import AddToDoForm from './AddToDoForm.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const url = `https://api.airtable.com/v0/appk73ITFCrRp7XlX/Default?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;

function App() {

  const [todoListState, setTodoListState] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

 React.useEffect(() => {
  fetch(`${url}`, {
    headers: {'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}
  })

    .then((response) => response.json())
    .then((result) => {
      setTodoListState(result.records);
      setIsLoading(false);
    })
    .catch((error)=>{console.log(error.message)})
}, [])

  React.useEffect(()=> {
    if (!isLoading) {
          localStorage.setItem('savedTodoList', JSON.stringify(todoListState))
    }
  },[todoListState, isLoading]);

  const addTodo = (newTodo) => {
    setTodoListState([...todoListState, newTodo]);
  }

  const removeTodo = id => {
    console.log(id)
    const newTodoList = todoListState.filter(
      todo => id !== todo.id
    );
    setTodoListState(newTodoList)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          exact
          path="/" 
          element = {
            <React.Fragment>
            <h1>To Do List</h1>
            <AddToDoForm onAddTodo = {addTodo}/>

            {isLoading? (<p>Loading...</p>) : (<ToDoList todoListState={todoListState} onRemoveTodo={removeTodo}/>)}
            
          </React.Fragment>
          }
        >
        </Route>

        <Route
          path="/new"
          element ={
            <h2>New Todo List</h2>
          }>

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;





