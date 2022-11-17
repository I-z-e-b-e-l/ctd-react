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

// Inside /src directory, create a new file called TodoListItem.js
// Open /src/TodoListItem.js
// Create a new functional React component (see below)
// Import React from "react" npm package
// Declare a function named TodoListItem
// Export TodoListItem function as default module
// Add a multi-line return statement to your TodoListItem function (this is where we will insert JSX)
// hint: use parenthesis for multi-line return
// Move list item JSX from TodoList.js to TodoListItem.js (see below)

// Open /src/TodoList.js
// Cut (copy and remove) the list item element (<li>)

// Open /src/TodoListItem.js
// Inside the multi-line return, paste the list item element (<li>)
// Remove the key attribute
// Refactor TodoList.js to use new TodoListItem component (see below)

// Open /src/TodoList.js
// Below React, import TodoListItem
// Inside the map() method, use the TodoListItem component
// Pass key as a prop equal to the id of the todo object
// Pass todo as a prop
// Update TodoListItem component to use props (see below)
// Open /src/TodoListItem.js
// Add props as a parameter in the TodoListItem function
// Update the todo object reference to come from props
// Run your application and view in browser
// Verify that your Todo List still appears correctly