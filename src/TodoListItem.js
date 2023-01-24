import React from "react";

function TodoListItem({arrayitem, onRemoveTodo}) {

    return(
      <React.Fragment>
        {/* <li key={arrayitem.id}> - is a key still needed? */}        
        <li>
        {arrayitem.fields.Title}
          <button 
            type="button" 
            onClick={()=>onRemoveTodo(arrayitem.id)}
          >Remove</button>
        </li> 
      </React.Fragment>
    )
};


export default TodoListItem;
