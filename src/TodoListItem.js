import React from "react";

function TodoListItem({arrayitem, onRemoveTodo}) {

    return(
      <React.Fragment>
        <li key={arrayitem.objectID}>
          {arrayitem.title}
          <button 
            type="button" 
            onClick={()=>onRemoveTodo(arrayitem)}
          >Remove</button>
        </li> 
      </React.Fragment>
    )
};


export default TodoListItem;
