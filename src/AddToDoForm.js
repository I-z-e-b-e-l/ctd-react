import React from "react";

function AddToDoForm(props){

    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);

        props.onAddTodo(todoTitle);

        event.target.reset();

    }

    return(
        <form onSubmit={handleAddTodo} onAddTodo>
            <label htmlFor='todoTitle'>title</label>
            <input id='todoTitle' type="text" name="title" />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddToDoForm