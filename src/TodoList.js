import React from "react";
import TodoListItem from "./TodoListItem";

function ToDoList(props) {

  // const todoList = [
  //     {
  //       id: 1,
  //       title: "wash face"
  //     },
  //     {
  //       id: 2,
  //       title: "make coffee"
  //     },
  //     {
  //       id: 3,
  //       title: "physical therapy"
  //     }
  //   ];

    return (
        <ul>
          {props.todoList.map(function (item) {
            return (
              <TodoListItem item={item}/>
 
            );
          })}
        </ul>
    );
  };




export default ToDoList;