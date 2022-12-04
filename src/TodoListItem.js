import React from "react";

function TodoListItem(props) {

  const item=props.arrayitem;

    return(
          <React.Fragment>
            <li key={item.objectID}>
              {item.title}
              <button 
                type="button" 
                // onClick={onRemoveTodo}
              >Remove</button>
            </li> 

          

          </React.Fragment>

    )
};

export default TodoListItem;
