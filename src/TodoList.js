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

function ToDoList(props) {

    return (
        <ul>
          {props.todoList.map(function (item) {
            return (
              <TodoListItem arrayitem={item}/>
 
            );
          })}
        </ul>
    );
  };




export {ToDoList, todoList};