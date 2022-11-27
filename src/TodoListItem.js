import React from "react";

function TodoListItem(props) {

  const item=props.arrayitem;

    return(
          <li key={item.objectID}>
            {item.title}
          </li> 
    )
};

export default TodoListItem;
