import React from "react";

function AddToDoForm(){

    const handleAddTodo = (event) => {
        event.preventDefault();
        let todoTitle = event.target.value;
        console.log(todoTitle)
        // reset the form so the text input value is cleared
    }

    return(
        <form>
            <label htmlFor='todoTitle'>title</label>
            <input id='todoTitle' type="text" name="title" />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddToDoForm

// Add a name attribute to the text input with value title
// Inside the AddTodoForm functional component, above the return statement, create a new function called handleAddTodo that takes event as a parameter
// First, inside this function, prevent the default behavior of the form submit
// hint: preventDefault method
// Next, retrieve the value of the title element from the event target and store it in a variable named todoTitle
// Log the value of todoTitle in the console
// Finally, reset the form so the text input value is cleared
// Add onSubmit prop to form element and pass the handleAddTodo function by reference
// View your application in browser
// Enter a value in the text input and submit the form
// Verify that the value you entered is visible in the console
// Verify that form is cleared properly