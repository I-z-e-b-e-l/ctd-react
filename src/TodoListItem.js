import React from "react";

function TodoListItem(props) {

  const item=props.arrayitem;

    return(
        <div>
          <li key={item.objectID}>
            {item.title}
          </li> 
        </div>
    )
};

export default TodoListItem;