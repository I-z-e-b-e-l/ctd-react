import React from "react";
import TodoListItem from "./TodoListItem";



function ToDoList(props) {

    return (
        <div>
        <h2>My to do list:</h2>
        <ul>
          {props.todoListState.map(function (item) {
            return (
              <TodoListItem key={item.id} arrayitem={item}/>
 
            );
          })}
        </ul>
        </div>
    );
  };




export default ToDoList;