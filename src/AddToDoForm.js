import React from "react";

function AddToDoForm(props){

    const [todoTitle, setTodoTitle] = React.useState("");

    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
    
        props.onAddTodo({
            title: todoTitle,
            id: Date.now(),
        });
        
        setTodoTitle("");

    };

    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title: </label>
            <input 
                id='todoTitle' 
                type="text" 
                name="title"
                value={todoTitle}
                onChange={handleTitleChange} />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddToDoForm

