import React from "react";
import TodoListItem from "./TodoListItem";


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
              <TodoListItem key={item.id} arrayitem={item}/>
 
            );
          })}
        </ul>
    );
  };




export default ToDoList;