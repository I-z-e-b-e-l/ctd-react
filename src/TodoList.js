import React from "react";

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
  ];


  function ToDoList() {
    return (
        <ul>
          {todoList.map(function (item) {
            return (
              <li key={item.objectID}>
                {item.title}
              </li>
            );
          })}
        </ul>
    );
  };




export default ToDoList;