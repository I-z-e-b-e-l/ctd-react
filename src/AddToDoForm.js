import React from "react";

function AddToDoForm(props){

    const [todoTitle, setTodoTitle] = React.useState("");

    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        props.onAddTodo(todoTitle);
        event.target.reset("");
        // console.log(event.target.value)
    };

    // const handleAddTodo = (event) => {
    //     event.preventDefault();
    //     const todoTitle = event.target.title.value;
    //     console.log(todoTitle);
    //     props.onAddTodo(todoTitle);
    //     event.target.reset();
    // };

    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>title</label>
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

// ☑ 