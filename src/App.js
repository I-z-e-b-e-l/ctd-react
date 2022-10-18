import React from 'react';

const todoList = [
  {
    id: 1,
    title: "wash face"
  },
  {
    id: 2,
    title: "make coffee"
  },
  {
    id: 3,
    title: "physical therapy"
  }
]

function App() {


  return (
    <div>

      <h1>To Do List</h1>

      <ul>
        {todoList.map(function (item) {
          return <li key={item.objectID}>{item.title}</li>;
        })}
      </ul>


    </div>
  );
}

export default App;
