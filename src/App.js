import React from 'react';
import ToDoList from './TodoList.js';
import AddToDoForm from './AddToDoForm.js';


const url = `https://api.airtable.com/v0/appk73ITFCrRp7XlX/Default?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;

function App() {

  console.log(process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE);

  const [todoListState, setTodoListState] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

 React.useEffect(() => {
  fetch(`${url}`, {
    headers: {'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}
  })

    .then((response) => response.json())
    .then((result) => {
      console.log("runs result")
      setTodoListState(result.records);
      setIsLoading(false);
    })
    .catch(()=>{console.log('Error')})
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
    <React.Fragment>
      <h1>To Do List</h1>
      <AddToDoForm onAddTodo = {addTodo}/>
      {/* How do I get newTodoTitle to bubble up to here? */}
      {/* <p>You're adding:{}</p> */}

      {isLoading? (<p>Loading...</p>) : (<ToDoList todoListState={todoListState} onRemoveTodo={removeTodo}/>)}
      

      
    </React.Fragment>
  );
};

export default App;





