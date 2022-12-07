import React from "react";

function TodoListItem({arrayitem, onRemoveTodo}) {

    return(
      <React.Fragment>
        <li key={arrayitem.id}>
          {arrayitem.title}
          <button 
            type="button" 
            onClick={()=>onRemoveTodo(arrayitem.id)}
          >Remove</button>
        </li> 
      </React.Fragment>
    )
};


export default TodoListItem;
