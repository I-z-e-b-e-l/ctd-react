import React from "react";
import InputWithLabel from "./InputWithLabel";

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
            <InputWithLabel 
                htmlFor='todoTitle'
                id='todoTitle' 
                type="text" 
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
                label="Title: " 
            >
                <p>Add an item: </p>
            </InputWithLabel>
            
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddToDoForm

